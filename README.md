# ClogHaven — Premium Clogs & Footwear Catalog

A premium, highly interactive, and responsive single-page web catalog and ordering system. Designed with a luxury dark/light mode aesthetic, it integrates seamlessly with **Google Sheets** via a custom **Google Apps Script Web App** and is fully optimized to be embedded in **Google Sites**.

---

## 🌟 Key Features

- **Luxury Aesthetic**: Outfit and Playfair Display typography, subtle dark/light glassmorphic UI, smooth micro-interactions, responsive CSS grid layout, and floating cart drawer.
- **Dynamic Catalog**: Categorized filters, instant search, rating indicators, and interactive item quantity selectors.
- **Zero-Backend Database Integration**: Uses Google Sheets as a database, completely eliminating database maintenance and hosting costs.
- **CORS-Bypass Engine**: Uses simple POST mechanisms via `text/plain` body transmission, avoiding complex browser preflight failures.
- **Instant Mock Mode**: Runs on a local fallback automatically (storing records inside the browser's `localStorage`) if the Sheets API is not set.

---

## 🛠️ Step-by-Step Setup Guide

Follow these steps to connect the app with your Google Sheet and deploy it live.

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a **blank spreadsheet**.
2. Give your sheet a name (e.g., *Gourmet Delights Orders*).
3. Keep the default sheet name (*Sheet1*) or rename it; the script will automatically pick the active sheet.

### Step 2: Add and Save the Apps Script
1. In the top menu of your Google Sheet, click **Extensions -> Apps Script**.
2. Delete any boilerplate code inside the editor (usually containing `function myFunction() {}`).
3. Open `google-apps-script.js` from this project, copy its entire contents, and paste it into the editor.
4. Click the **Save** (floppy disk) icon at the top.

### Step 3: Deploy as a Web App (Crucial!)
1. Click the blue **Deploy** button in the top right corner, then select **New deployment**.
2. Click the **Select type** gear icon next to "Configuration", and select **Web app**.
3. Fill out the configuration fields exactly as follows:
   - **Description**: `Gourmet Delights Order System Connection`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(This is CRITICAL. Selecting anyone else will trigger authorization failures during order placement).*
4. Click **Deploy**.
5. Google will ask you to authorize permissions. Click **Authorize Access**, select your Google account, click **Advanced** at the bottom of the prompt, and select **Go to Untitled project (unsafe)**. Then click **Allow**.
6. Copy the generated **Web App URL** from the screen (ends in `/exec`).

### Step 4: Configure the Web App
1. Open `index.html` in your browser.
2. Click the **Mock Connection / Settings** icon in the header (or click "Google Sheet Connection Setup" in the footer).
3. Paste your copied **Web App URL** into the input field and click **Apply Configuration**.
4. *(Optional)* Click **Test Link** to check if the connection is active.
5. Place a test order! You will see the rows populate in your Google Sheet in real-time.

---

## 🌐 Embedding in Google Sites

Google Sites has a simple built-in HTML embed feature that allows you to render custom code inside an iframe:

1. Open your [Google Sites](https://sites.google.com) editor and navigate to the page where you want to show the menu.
2. In the right panel, select **Insert -> Embed** (`<>`).
3. Choose the **Embed code** tab.
4. Copy and paste the entire contents of your customized `index.html` inside it.
5. **Important**: Since `app.js` and `styles.css` are linked locally, you have two options for Google Sites:
   
   - **Option A (Self-contained Embed Code)**: Combine the styles and script directly inside the HTML block using `<style>` and `<script>` tags instead of linking to external files. (We've structured the code to make this extremely easy, or we can provide a single self-contained HTML file).
   - **Option B (Standard Hosting)**: Upload your files (`index.html`, `styles.css`, `app.js`, `assets/`) to any static hosting provider (like GitHub Pages, Netlify, or Vercel) and embed the hosted URL under the **By URL** tab in Google Sites.

---

## 🎨 Customizing the Product Inventory

You can easily add, edit, or delete items from your catalog. Open `app.js` and look for the `PRODUCT_INVENTORY` array:

```javascript
const PRODUCT_INVENTORY = [
    {
        id: "burger-01",
        name: "Signature Truffle Cheeseburger",
        category: "burgers",
        price: 18.99,
        rating: 4.9,
        description: "Double prime beef patties, black truffle-infused aioli...",
        image: "assets/burger.png" // Path to your product image
    },
    // Add more items following this structure
];
```

Categories included by default:
- `burgers`
- `pizzas`
- `beverages`
- `desserts`

Feel free to customize these to fit your specific inventory or menu!
