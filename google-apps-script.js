/**
 * GOOGLE APPS SCRIPT: ORDER INGESTION BRIDGE
 * 
 * Instructions:
 * 1. Open a Google Sheet where you want to store orders.
 * 2. Click on Extensions -> Apps Script.
 * 3. Delete any default code in Code.gs and paste this entire script.
 * 4. Click the "Save" (disk) icon.
 * 5. Click "Deploy" -> "New deployment".
 * 6. Select type "Web app" (gear icon).
 * 7. Set:
 *    - Description: "ClogHaven Order System Connection"
 *    - Execute as: "Me (your-email@gmail.com)"
 *    - Who has access: "Anyone" (CRITICAL: Must be "Anyone" so the website can submit without logging in).
 * 8. Click "Deploy". Authorize permissions if prompted.
 * 9. Copy the generated Web App URL and paste it into the developer panel of your website.
 */

// Handles incoming order submission POST requests
function doPost(e) {
  try {
    // Parse the incoming JSON data from the request body
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No payload found in the request. Make sure you are sending a POST request with a JSON body.");
    }

    var orderData = JSON.parse(e.postData.contents);

    // Save the order to the Google Sheet
    var result = appendOrderToSheet(orderData);

    // Return a successful JSON response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      orderId: result.orderId,
      rowNumber: result.rowNumber,
      message: "Order has been logged in Google Sheets successfully!"
    }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return an error JSON response
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Failed to write order: " + error.toString()
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handles GET requests to verify if the deployment is alive
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "ClogHaven Order Bridge is online and ready for orders!",
    sheetsConnected: true,
    timestamp: new Date().toISOString()
  }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Appends the order data into the spreadsheet.
 * Automatically initializes columns and sheet structure if blank.
 */
function appendOrderToSheet(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Define standard columns
  var headers = [
    "Order ID",
    "Customer ID",
    "Timestamp",
    "Customer Name",
    "Phone Number",
    "Telegram",
    "Order Type",
    "Delivery Address",
    "Items Summary",
    "Total Price",
    "Special Requests",
    "Order Status"
  ];

  // If sheet is empty, set up the headers and styling
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    // Style the header row for a premium look
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackgroundColor("#D4AF37"); // Beautiful dark gold
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontFamily("Arial");
    headerRange.setHorizontalAlignment("center");

    // Auto-fit columns initially
    for (var col = 1; col <= headers.length; col++) {
      sheet.autoResizeColumn(col);
    }
  }

  // Format items array into a clean readable string
  // Items format expected: [{name: "Burger", quantity: 2, price: 15.00}, ...]
  var itemsSummary = "";
  if (Array.isArray(data.items)) {
    itemsSummary = data.items.map(function (item) {
      return item.quantity + "x " + item.name + " ($" + (item.price * item.quantity).toFixed(2) + ")";
    }).join("\n");
  } else {
    itemsSummary = data.items || "No items listed";
  }

  // Create a unique Order ID if none is supplied
  var orderId = data.orderId || "ORD-" + Math.floor(100000 + Math.random() * 900000);

  // Gather values to insert
  var timestamp = new Date();
  var customerId = data.customerId || "N/A";
  var customerName = data.customerName || "N/A";
  var phone = data.phone || "N/A";
  var telegram = data.telegram || "N/A";
  var email = data.email || "N/A";
  var orderType = data.orderType || "Pickup";
  var address = data.address || (orderType === "Pickup" ? "N/A - Store Pickup" : "N/A");
  var totalPrice = data.totalPrice !== undefined ? "$" + Number(data.totalPrice).toFixed(2) : "$0.00";
  var notes = data.notes || "";
  var status = "Pending"; // Default status

  var rowData = [
    orderId,
    customerId,
    timestamp,
    customerName,
    phone,
    telegram,
    orderType,
    address,
    itemsSummary,
    totalPrice,
    notes,
    status
  ];

  // Append row
  sheet.appendRow(rowData);
  var newRowIndex = sheet.getLastRow();

  // Apply visual styling to the new order row
  var newRowRange = sheet.getRange(newRowIndex, 1, 1, headers.length);
  newRowRange.setFontFamily("Arial");
  newRowRange.setVerticalAlignment("middle");

  // Format price column specifically (Column 10)
  var priceCell = sheet.getRange(newRowIndex, 10);
  priceCell.setHorizontalAlignment("right");

  // Format Order ID, Customer ID, and Status columns (Columns 1, 2 & 12) for center alignment
  sheet.getRange(newRowIndex, 1).setHorizontalAlignment("center");
  sheet.getRange(newRowIndex, 2).setHorizontalAlignment("center");
  sheet.getRange(newRowIndex, 12).setHorizontalAlignment("center");

  // Wrap text on the items summary column (Column 9) so it reads well
  sheet.getRange(newRowIndex, 9).setWrap(true);

  return {
    orderId: orderId,
    rowNumber: newRowIndex
  };
}
