/* ==========================================================================
   CLOGHAVEN ENGINE
   ========================================================================== */

// 1. PRODUCT INVENTORY DATA (Footwear Only)
const PRODUCT_INVENTORY = [
    // ========== CLASSIC CLOGS ==========
    { id: "SH-01", name: { en: "Classic Shadow Plum", kh: "ស្បែកជើងសូក Shadow Plum", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 5.0, description: "Classic lightweight clogs designed in a smooth shadow plum color.", image: "assets/shoes/1.png" },
    { id: "SH-02", name: { en: "Classic Deep Amethyst", kh: "ស្បែកជើងសូក Deep Amethyst", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 5.0, description: "Timeless style meets extreme comfort in vibrant deep amethyst.", image: "assets/shoes/2.png" },
    { id: "SH-03", name: { en: "Classic Midnight Orchid", kh: "ស្បែកជើងសូក Midnight Orchid", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 5.0, description: "Sophisticated midnight orchid clog designed for all-day wear.", image: "assets/shoes/3.png" },
    { id: "SH-04", name: { en: "Classic Neon Lilac", kh: "ស្បែកជើងសូក Neon Lilac", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 5.0, description: "Vibrant neon lilac clog built with an adjustable heel strap for secure fit.", image: "assets/shoes/4.png" },
    { id: "SH-05", name: { en: "Classic Obsidian Violet", kh: "ស្បែកជើងសូក Obsidian Violet", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 5.0, description: "Deep obsidian violet classic clog with dual-density foam support.", image: "assets/shoes/5.png" },
    { id: "SH-06", name: { en: "Classic Lavender Mist", kh: "ស្បែកជើងសូក Lavender Mist", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 5.0, description: "Comfortable and water-friendly clogs in a dreamy lavender mist.", image: "assets/shoes/9.png" },
    { id: "SH-07", name: { en: "Classic Dark Aster", kh: "ស្បែកជើងសូក Dark Aster", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 4.9, description: "Durable construction and easy-to-clean design in rich dark aster.", image: "assets/shoes/11.png" },
    { id: "SH-08", name: { en: "Classic Space Grape", kh: "ស្បែកជើងសូក Space Grape", ch: "洞洞鞋" }, category: "classic", price: 1.25, rating: 4.8, description: "An out-of-this-world space grape tone offering ultimate cushion.", image: "assets/shoes/8.png" },

    // ========== PLATFORM CLOGS ==========
    { id: "SH-09", name: { en: "Platform Amethyst Bold", kh: "ស្បែកជើងផ្ទាត់ Amethyst Bold", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 5.0, description: "Thick platform outsole with bold amethyst trim for a stylish lift.", image: "assets/shoes/6.png" },
    { id: "SH-10", name: { en: "Platform Plum Elevate", kh: "ស្បែកជើងផ្ទាត់ Plum Elevate", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 4.9, description: "Plum platform footwear designed to elevate both your height and style.", image: "assets/shoes/10.png" },
    { id: "SH-11", name: { en: "Platform Onyx Eclipse", kh: "ស្បែកជើងផ្ទាត់ Onyx Eclipse", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 5.0, description: "Elegant dark onyx eclipse design with our signature chunky platform sole.", image: "assets/shoes/7.png" },
    { id: "SH-12", name: { en: "Platform Violet Spark", kh: "ស្បែកជើងផ្ទាត់ Violet Spark", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 4.7, description: "A sparkling violet platform clog that adds high-profile height.", image: "assets/shoes/12.png" },
    { id: "SH-13", name: { en: "Platform Dusk Lavender", kh: "ស្បែកជើងផ្ទាត់ Dusk Lavender", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 4.8, description: "Chunky platform silhouette finished in serene dusk lavender.", image: "assets/shoes/13.png" },
    { id: "SH-14", name: { en: "Platform Electric Plum", kh: "ស្បែកជើងផ្ទាត់ Electric Plum", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 4.9, description: "Stand tall and comfortable with our electric plum platform model.", image: "assets/shoes/14.png" },
    { id: "SH-15", name: { en: "Platform Royal Purple", kh: "ស្បែកជើងផ្ទាត់ Royal Purple", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 5.0, description: "Premium royal purple platform clogs built with lightweight support.", image: "assets/shoes/15.png" },
    { id: "SH-16", name: { en: "Platform Cyber Grape", kh: "ស្បែកជើងផ្ទាត់ Cyber Grape", ch: "拖鞋" }, category: "platform", price: 1.25, rating: 4.8, description: "High-density cyber grape platform designed for premium look and feel.", image: "assets/shoes/16.png" },

    // ========== SPORTS & OUTDOOR ==========
    { id: "SH-17", name: { en: "Trail-Blazer Shadow Purple", kh: "កីឡា & ក្រៅផ្ទះ Shadow Purple", ch: "越野暗紫克罗格" }, category: "sports", price: 1.25, rating: 5.0, description: "Rugged outdoor active clog with high-traction shadow purple tread.", image: "assets/shoes/17.png" },
    { id: "SH-18", name: { en: "Trail-Blazer Forest Plum", kh: "កីឡា & ក្រៅផ្ទះ Forest Plum", ch: "越野森林梅色克罗格" }, category: "sports", price: 1.25, rating: 4.9, description: "All-weather trail clogs in forest plum with an extra secure heel strap.", image: "assets/shoes/18.png" },
    { id: "SH-19", name: { en: "Trail-Blazer Midnight Moss", kh: "កីឡា & ក្រៅផ្ទះ Midnight Moss", ch: "越野午夜苔藓克罗格" }, category: "sports", price: 1.25, rating: 5.0, description: "Built for sports and hiking with high-traction midnight moss design.", image: "assets/shoes/19.png" },
    { id: "SH-20", name: { en: "Trail-Blazer Lava Grape", kh: "កីឡា & ក្រៅផ្ទះ Lava Grape", ch: "越野熔岩葡萄克罗格" }, category: "sports", price: 1.25, rating: 4.8, description: "Aggressive tread and breathable design finished in hot lava grape.", image: "assets/shoes/20.png" },
    { id: "SH-21", name: { en: "Trail-Blazer Orchid Ridge", kh: "កីឡា & ក្រៅផ្ទះ Orchid Ridge", ch: "越野兰花岭克罗格" }, category: "sports", price: 1.25, rating: 4.9, description: "Adventure-ready sports clog featuring orchid ridge ventilation.", image: "assets/shoes/21.png" },
    { id: "SH-22", name: { en: "Trail-Blazer Amethyst Peak", kh: "កីឡា & ក្រៅផ្ទះ Amethyst Peak", ch: "越野紫水晶峰克罗格" }, category: "sports", price: 1.25, rating: 4.7, description: "High-grip hiking clogs built for the rocky amethyst peak trails.", image: "assets/shoes/22.png" },
    { id: "SH-23", name: { en: "Trail-Blazer Purple Storm", kh: "កីឡា & ក្រៅផ្ទះ Purple Storm", ch: "越野紫风暴克罗格" }, category: "sports", price: 1.25, rating: 4.9, description: "Weatherproof active sports clog built to conquer any purple storm.", image: "assets/shoes/23.png" },
    { id: "SH-24", name: { en: "Trail-Blazer Stellar Violet", kh: "កីឡា & ក្រៅផ្ទះ Stellar Violet", ch: "越野星光紫克罗格" }, category: "sports", price: 1.25, rating: 5.0, description: "Stellar violet trail design with enhanced arch support and heel lock.", image: "assets/shoes/24.png" },

    // ========== LIMITED EDITION ==========
    { id: "SH-25", name: { en: "Starlight Violet Chrome", kh: "ប្រភេទពិសេស Starlight Violet Chrome", ch: "星光紫铬限行克罗格" }, category: "limited", price: 1.25, rating: 5.0, description: "Ultra-rare limited edition starlight violet clogs with chrome finish.", image: "assets/shoes/25.png" },
    { id: "SH-26", name: { en: "Imperial Velvet Deluxe", kh: "ប្រភេទពិសេស Imperial Velvet Deluxe", ch: "皇家天鹅绒豪华克罗格" }, category: "limited", price: 1.25, rating: 5.0, description: "Premium imperial velvet styling for luxury leisure.", image: "assets/shoes/26.png" },
    { id: "SH-27", name: { en: "Deep Space Amethyst", kh: "ប្រភេទពិសេស Deep Space Amethyst", ch: "深空紫水晶克罗格" }, category: "limited", price: 1.25, rating: 4.9, description: "Limited collector's edition deep space amethyst clogs.", image: "assets/shoes/27.png" },
    { id: "SH-28", name: { en: "Midnight Holographic Plum", kh: "ប្រភេទពិសេស Midnight Holographic Plum", ch: "午夜全息梅色克罗格" }, category: "limited", price: 1.25, rating: 5.0, description: "Rare holographic plum colorway that gleams under different lights.", image: "assets/shoes/28.png" },
    { id: "SH-29", name: { en: "Neon Grape Deluxe", kh: "ប្រភេទពិសេស Neon Grape Deluxe", ch: "霓虹葡萄豪华克罗格" }, category: "limited", price: 1.25, rating: 4.9, description: "Vibrant deluxe neon grape comfort clogs with glow accents.", image: "assets/shoes/29.png" },
    { id: "SH-30", name: { en: "Shadow Obsidian Elite", kh: "ប្រភេទពិសេស Shadow Obsidian Elite", ch: "暗影黑曜精英克罗格" }, category: "limited", price: 1.25, rating: 5.0, description: "Limited edition sleek obsidian elite clogs for supreme style.", image: "assets/shoes/30.png" },
    { id: "SH-31", name: { en: "Midnight Amethyst Gold", kh: "ប្រភេទពិសេស Midnight Amethyst Gold", ch: "午夜紫金克罗格" }, category: "limited", price: 1.25, rating: 5.0, description: "Rich midnight amethyst clogs detailed with luxury gold hardware.", image: "assets/shoes/31.png" },
    { id: "SH-33", name: { en: "Imperial Orchid Ultra", kh: "ប្រភេទពិសេស Imperial Orchid Ultra", ch: "皇家兰花至尊克罗格" }, category: "limited", price: 1.25, rating: 5.0, description: "Collector's premium imperial orchid clogs with gold accents.", image: "assets/shoes/33.png" },
    { id: "CS-01", name: { en: "Cosmetic Cream", kh: "ឡេលាបមុខ", ch: "化妆品" }, category: "cosmetic", price: 1.25, rating: 5.0, description: "Premium beauty cosmetic cream for skin hydration.", image: "assets/cosmetic/1.png" },
    { id: "CS-02", name: { en: "Cosmetic Serum", kh: "សេរ៉ូមលាបមុខ", ch: "化妆品" }, category: "cosmetic", price: 1.25, rating: 5.0, description: "Nourishing facial beauty cosmetic serum.", image: "assets/cosmetic/2.png" },
    { id: "CS-03", name: { en: "Cosmetic Powder", kh: "ម្សៅផាត់មុខ", ch: "化妆品" }, category: "cosmetic", price: 1.25, rating: 4.9, description: "Smooth premium face cosmetic powder.", image: "assets/cosmetic/3.png" }
];

// Translations System Database
const TRANSLATIONS = {
    en: {
        heroBadge: "Start a small business with just $30",
        heroTitle: "With Multi-Product Inventory",
        heroDesc: "Guaranteed lowest price and quality in Cambodian market",
        searchPlaceholder: "Search comfortable clogs...",
        tabAll: "All Products",
        tabShoes: "Shoes",
        tabClassic: "Classic Clogs",
        tabPlatform: "Platform Clogs",
        tabSports: "Sports & Outdoor",
        tabLimited: "Limited Edition",
        tabCosmetic: "Cosmetics",
        custDetailsHeader: "1. Customer Details",
        nameLabel: "Full Name",
        phoneLabel: "Phone Number",
        idLabel: "Customer ID",
        addressSectionHeader: "2. Fulfillment Method",
        addressLabel: "Delivery Address (Optional)",
        addressPlaceholder: "Street address, unit/apt number, city, and zip code...",
        backBtn: "Back to Cart",
        placeOrderBtn: "Place Order",
        placeOrderBtnLoading: "Processing Order...",
        cartHeader: "Your Selection",
        cartEmptyStateHeader: "Your cart is empty",
        cartEmptyStateDesc: "Browse our catalog and add comfortable clogs to your order.",
        cartStartBrowsing: "Start Browsing",
        cartSubtotal: "Subtotal",
        cartDelivery: "Packaging & Delivery",
        cartTotalEst: "Total Est.",
        proceedCheckout: "Proceed to Checkout",
        checkoutDetailsHeader: "Checkout Details",
        itemsSelected: "items selected",
        orderPlacedTitle: "Order Placed Successfully!",
        recipientLabel: "Recipient",
        orderDetailsLabel: "Order Details",
        totalCostLabel: "Total Cost",
        selectMoreBtn: "Select More Clogs",
        syncingReceipt: "Syncing receipt with Google Sheets...",
        toastCartEmpty: "Please select products to checkout.",
        toastThemeUpdated: "Theme Updated",
        toastThemeDark: "Switched to Midnight Dark mode.",
        toastThemeLight: "Switched to Warm Ivory Light mode."
    },
    kh: {
        heroBadge: "ចំណាយតែ៣០ដុល្លា លោកអ្នកនិងក្លាយជាម្ចាស់អាជីវកម្មខ្នាតតូចមួយរូប",
        heroTitle: "ជាមួយផលិតផលច្រើនមុខ",
        heroDesc: "តម្លៃនិងគុណភាពធានាក្រោមទីផ្សារកម្ពុជា",
        searchPlaceholder: "ស្វែងរកស្បែកជើងដែលផាសុកភាព...",
        tabAll: "ផលិតផលទាំងអស់",
        tabShoes: "ស្បែកជើង",
        tabClassic: "ស្បែកជើងបុរាណ",
        tabPlatform: "ស្បែកជើងកែង",
        tabSports: "កីឡា & ក្រៅផ្ទះ",
        tabLimited: "ប្រភេទពិសេស",
        tabCosmetic: "គ្រឿងសម្អាង",
        custDetailsHeader: "១. ព័ត៌មានលម្អិតរបស់អតិថិជន",
        nameLabel: "ឈ្មោះពេញ",
        phoneLabel: "លេខទូរស័ព្ទ",
        idLabel: "លេខសម្គាល់អតិថិជន",
        addressSectionHeader: "២. វិធីសាស្ត្រដឹកជញ្ជូន",
        addressLabel: "អាសយដ្ឋានដឹកជញ្ជូន (ជម្រើស)",
        addressPlaceholder: "អាសយដ្ឋានផ្លូវ ផ្ទះលេខ សង្កាត់ ក្រុង និងកូដប្រៃសណីយ៍...",
        backBtn: "ត្រឡប់ទៅកន្ត្រក",
        placeOrderBtn: "ដាក់ស្នើរ",
        placeOrderBtnLoading: "កំពុងដំណើរការ...",
        cartHeader: "ជម្រើសរបស់អ្នក",
        cartEmptyStateHeader: "កន្ត្រករបស់អ្នកទទេ",
        cartEmptyStateDesc: "រកមើលកាតាឡុករបស់យើង ហើយបន្ថែមស្បែកជើងទៅកាន់ការបញ្ជាទិញរបស់អ្នក។",
        cartStartBrowsing: "ចាប់ផ្តើមរកមើល",
        cartSubtotal: "តម្លៃសរុប",
        cartDelivery: "ការវេចខ្ចប់ & ដឹកជញ្ជូន",
        cartTotalEst: "តម្លៃសរុបប៉ាន់ស្មាន",
        proceedCheckout: "ដាក់ស្នើរ",
        checkoutDetailsHeader: "បំពេញព័តមានលម្អិត",
        itemsSelected: "ចំនួនមុខទំនិញ",
        orderPlacedTitle: "ការបញ្ជាទិញបានជោគជ័យ!",
        recipientLabel: "អ្នកទទួល",
        orderDetailsLabel: "ព័ត៌មានលម្អិតនៃការបញ្ជាទិញ",
        totalCostLabel: "តម្លៃសរុប",
        selectMoreBtn: "ជ្រើសរើសស្បែកជើងបន្ថែម",
        syncingReceipt: "កំពុងភ្ជាប់ការបញ្ជាទិញទៅកាន់ Google Sheets...",
        toastCartEmpty: "សូមជ្រើសរើសផលិតផលដើម្បីទូទាត់ប្រាក់។",
        toastThemeUpdated: "បានផ្លាស់ប្តូរស្បែកជោគជ័យ",
        toastThemeDark: "បានប្តូរទៅកាន់មុខងារងងឹត។",
        toastThemeLight: "បានប្តូរទៅកាន់មុខងារពន្លឺ។"
    },
    /* ch: {
        heroBadge: "åªéœ€30ç¾Žå…ƒå³å¯å¼€åˆ›å°åž‹ä¸šåŠ¡",
        heroTitle: "æ‹¥æœ‰å¤šç§äº§å“åº“å­˜",
        heroDesc: "æŸ¬åŸ”å¯¨å¸‚åœºä»·æ ¼ä¸Žè´¨é‡ä¿è¯",
        searchPlaceholder: "æœç´¢èˆ’é€‚éž‹å­...",
        tabAll: "æ‰€æœ‰äº§å“",
        tabClassic: "ç»å…¸å…‹ç½—æ ¼",
        tabPlatform: "åŽšåº•å…‹ç½—æ ¼",
        tabSports: "è¿åŠ¨ä¸Žæˆ·å¤–",
        tabLimited: "é™é‡ç‰ˆ",
        custDetailsHeader: "1. å®¢æˆ·åŸºæœ¬ä¿¡æ¯",
        nameLabel: "å§“å",
        phoneLabel: "ç”µè¯å·ç ",
        emailLabel: "ç”µå­é‚®ç®± (å¯é€‰)",
        idLabel: "å®¢æˆ·è¯†åˆ«ç  ID",
        addressSectionHeader: "2. é…é€æ–¹å¼é€‰æ‹©",
        addressLabel: "é€è´§åœ°å€ (å¯é€‰)",
        addressPlaceholder: "è¡—é“åœ°å€ï¼Œé—¨ç‰Œå·ï¼ŒåŒºåŸŸï¼ŒåŸŽå¸‚åŠé‚®æ”¿ç¼–ç ...",
        backBtn: "è¿”å›žè´­ç‰©è½¦",
        placeOrderBtn: "æäº¤è®¢å•",
        placeOrderBtnLoading: "è®¢å•å¤„ç†ä¸­...",
        cartHeader: "æ‚¨çš„é€‰æ‹©",
        cartEmptyStateHeader: "æ‚¨çš„è´­ç‰©è½¦æ˜¯ç©ºçš„",
        cartEmptyStateDesc: "æµè§ˆæˆ‘ä»¬çš„äº§å“ç›®å½•å¹¶å°†èˆ’é€‚çš„éž‹å­æ·»åŠ åˆ°æ‚¨çš„è®¢å•ä¸­ã€‚",
        cartStartBrowsing: "å¼€å§‹æµè§ˆ",
        cartSubtotal: "å°è®¡é‡‘é¢",
        cartDelivery: "åŒ…è£…ä¸Žé…é€è´¹",
        cartTotalEst: "é¢„è®¡æ€»é¢",
        proceedCheckout: "ç»“ç®—",
        checkoutDetailsHeader: "æäº¤ä¿¡æ¯",
        itemsSelected: "ä»¶æ•°",
        orderPlacedTitle: "è®¢å•æäº¤æˆåŠŸï¼",
        recipientLabel: "æŽ¥æ”¶äºº",
        orderDetailsLabel: "è®¢å•æ˜Žç»†",
        totalCostLabel: "æœ€ç»ˆæ€»é¢",
        selectMoreBtn: "ç»§ç»­é€‰è´­éž‹å­",
        syncingReceipt: "æ­£åœ¨åŒæ­¥è®¢å•æ•°æ®è‡³ Google è¡¨æ ¼...",
        toastCartEmpty: "è¯·é€‰æ‹©è¦ç»“è´¦çš„äº§å“ã€‚",
        toastThemeUpdated: "ä¸»é¢˜å·²æ›´æ–°",
        toastThemeDark: "å·²åˆ‡æ¢ä¸ºæš—é»‘å¤œè‰²æ¨¡å¼ã€‚",
        toastThemeLight: "å·²åˆ‡æ¢ä¸ºæ¸©æ¶¦è±¡ç‰™æ¨¡å¼ã€‚"
    }*/
};

// 2. STATE MANAGER
const State = {
    cart: [],
    selectedCategory: "all",
    searchQuery: "",
    theme: "dark",
    googleSheetsUrl: "",
    isMockMode: true,
    language: "kh",

    // Constants
    deliveryFeeRate: 0.00,
    freeDeliveryThreshold: 0.00
};

// 3. CORE APPLICATION INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    // Normalize categories to just shoes and cosmetics
    PRODUCT_INVENTORY.forEach(item => {
        if (item.category !== "cosmetic") {
            item.category = "shoes";
        }
    });

    loadSettings();
    initTheme();
    renderProducts();
    updateCartUI();
    registerEventListeners();
    loadAppsScriptText();
});

// Load configuration saved in local storage
function loadSettings() {
    State.googleSheetsUrl = localStorage.getItem("gourmet_sheets_url") || "";
    State.isMockMode = !State.googleSheetsUrl;
    State.language = localStorage.getItem("loda_language") || "kh";

    // Load cart from storage if available
    const savedCart = localStorage.getItem("gourmet_cart");
    if (savedCart) {
        try {
            State.cart = JSON.parse(savedCart);
        } catch (e) {
            State.cart = [];
        }
    }

    updateConnectionIndicator();
    updateLanguageUI(State.language);
}

// Update the DOM elements based on selected language translation properties
function updateLanguageUI(lang) {
    const translation = TRANSLATIONS[lang];
    if (!translation) return;

    State.language = lang;
    localStorage.setItem("loda_language", lang);

    // Update lang button text and flag
    const currentFlag = document.getElementById("current-lang-flag");
    const currentText = document.getElementById("current-lang-text");
    if (currentFlag) {
        currentFlag.src = `assets/icons/${lang}.png`;
        currentFlag.alt = lang.toUpperCase();
    }
    if (currentText) {
        currentText.textContent = lang.toUpperCase();
    }

    // Translate statically tagged HTML elements
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        const text = translation[key];
        if (!text) return;

        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
            el.setAttribute("placeholder", text);
        } else if (el.tagName === "TEXTAREA" && el.hasAttribute("placeholder")) {
            el.setAttribute("placeholder", text);
        } else {
            // Retain required asterisk in form labels
            const requiredSpan = el.querySelector(".required");
            if (requiredSpan) {
                el.innerHTML = text + ` <span class="required">*</span>`;
            } else {
                el.textContent = text;
            }
        }
    });
}

// Write Google Apps Script Code block directly to the setup panel for copy convenience
function loadAppsScriptText() {
    const codeArea = document.getElementById("script-code-display");
    if (!codeArea) return;

    // High-fidelity full script code to guarantee it works offline and under file:// protocol
    codeArea.value = `/**
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
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy". Authorize permissions if prompted.
 * 9. Copy the generated Web App URL and paste it into the developer panel of your website.
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No payload found in the request.");
    }
    
    var orderData = JSON.parse(e.postData.contents);
    var result = appendOrderToSheet(orderData);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      orderId: result.orderId,
      rowNumber: result.rowNumber,
      message: "Order logged successfully!"
    }))
    .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Failed to write order: " + error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    message: "ClogHaven Order Bridge is online and ready for orders!",
    sheetsConnected: true,
    timestamp: new Date().toISOString()
  }))
  .setMimeType(ContentService.MimeType.JSON);
}

function appendOrderToSheet(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = [
    "Order ID", 
    "Customer ID",
    "Timestamp", 
    "Customer Name", 
    "Phone Number", 
    "Email Address", 
    "Order Type", 
    "Delivery Address", 
    "Items Summary", 
    "Total Price", 
    "Special Requests", 
    "Order Status"
  ];
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackgroundColor("#D4AF37");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontFamily("Arial");
    headerRange.setHorizontalAlignment("center");
    
    for (var col = 1; col <= headers.length; col++) {
      sheet.autoResizeColumn(col);
    }
  }
  
  var itemsSummary = "";
  if (Array.isArray(data.items)) {
    itemsSummary = data.items.map(function(item) {
      return item.quantity + "x " + item.name + " ($" + (item.price * item.quantity).toFixed(2) + ")";
    }).join("\\n");
  } else {
    itemsSummary = data.items || "No items listed";
  }
  
  var orderId = data.orderId || "ORD-" + Math.floor(100000 + Math.random() * 900000);
  var timestamp = new Date();
  var customerId = data.customerId || "N/A";
  var customerName = data.customerName || "N/A";
  var phone = data.phone || "N/A";
  var email = data.email || "N/A";
  var orderType = data.orderType || "Pickup";
  var address = data.address || (orderType === "Pickup" ? "N/A - Store Pickup" : "N/A");
  var totalPrice = data.totalPrice !== undefined ? "$" + Number(data.totalPrice).toFixed(2) : "$0.00";
  var notes = data.notes || "";
  var status = "Pending";
  
  var rowData = [
    orderId,
    customerId,
    timestamp,
    customerName,
    phone,
    email,
    orderType,
    address,
    itemsSummary,
    totalPrice,
    notes,
    status
  ];
  
  sheet.appendRow(rowData);
  var newRowIndex = sheet.getLastRow();
  
  var newRowRange = sheet.getRange(newRowIndex, 1, 1, headers.length);
  newRowRange.setFontFamily("Arial");
  newRowRange.setVerticalAlignment("middle");
  
  sheet.getRange(newRowIndex, 10).setHorizontalAlignment("right");
  sheet.getRange(newRowIndex, 1).setHorizontalAlignment("center");
  sheet.getRange(newRowIndex, 2).setHorizontalAlignment("center");
  sheet.getRange(newRowIndex, 12).setHorizontalAlignment("center");
  sheet.getRange(newRowIndex, 9).setWrap(true);
  
  return {
    orderId: orderId,
    rowNumber: newRowIndex
  };
}`;
}

// 4. THEME CONTROL
function initTheme() {
    const savedTheme = localStorage.getItem("gourmet_theme") || "dark";
    State.theme = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
    const newTheme = State.theme === "dark" ? "light" : "dark";
    State.theme = newTheme;
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("gourmet_theme", newTheme);

    const trans = TRANSLATIONS[State.language];
    const msg = newTheme === 'dark' ? trans.toastThemeDark : trans.toastThemeLight;
    showToast(trans.toastThemeUpdated, msg, "success");
}

// Update Connection state indicators on the Header & Panels
function updateConnectionIndicator() {
    const indicator = document.getElementById("dev-panel-btn");
    const statusText = document.getElementById("current-mode-status");
    const flowLine = document.getElementById("connection-flow-line");
    const sheetNode = document.getElementById("sheet-node-circle");

    if (!indicator) return;

    if (State.isMockMode) {
        indicator.className = "header-btn dev-indicator mock";
        indicator.querySelector(".status-badge-text").textContent = "Mock Sandbox";

        if (statusText) {
            statusText.textContent = "MOCK SIMULATION (Offline Local Storage)";
            statusText.className = "status-mock";
        }
        if (flowLine) flowLine.className = "node-line";
        if (sheetNode) sheetNode.className = "node-circle";
    } else {
        indicator.className = "header-btn dev-indicator live";
        indicator.querySelector(".status-badge-text").textContent = "Google Sheets Active";

        if (statusText) {
            statusText.textContent = "LIVE CONNECTION ACTIVE (Real-time Sheets)";
            statusText.className = "status-live";
        }
        if (flowLine) flowLine.className = "node-line active-green";
        if (sheetNode) sheetNode.className = "node-circle active-green";
    }
}

// 5. PRODUCT CATALOG RENDERING
function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    // Filter logic
    const filtered = PRODUCT_INVENTORY.filter(prod => {
        const matchesCategory = State.selectedCategory === "all" || prod.category === State.selectedCategory;
        const nameText = typeof prod.name === "object" ? (prod.name[State.language] || prod.name.en || "") : (prod.name || "");
        const descText = typeof prod.description === "object" ? (prod.description[State.language] || prod.description.en || "") : (prod.description || "");
        const matchesSearch = nameText.toLowerCase().includes(State.searchQuery.toLowerCase()) ||
            descText.toLowerCase().includes(State.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-grid-state">
                <i class="fa-solid fa-shoe-prints" style="font-size: 54px; color: var(--text-muted);"></i>
                <h3>No Footwear Matches</h3>
                <p>We couldn't find any models matching "${State.searchQuery}". Try browsing a different category.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(prod => {
        const cartItem = State.cart.find(item => item.id === prod.id);
        const inCartQty = cartItem ? cartItem.quantity : 0;
        const nameText = typeof prod.name === "object" ? (prod.name[State.language] || prod.name.en || "") : (prod.name || "");
        const descText = typeof prod.description === "object" ? (prod.description[State.language] || prod.description.en || "") : (prod.description || "");

        return `
            <article class="product-card" data-id="${prod.id}">
                <div class="product-image-wrap">
                    <img src="${prod.image}" alt="${nameText}" loading="lazy">
                    <div class="product-card-badges">
                        <span class="rating-badge"><i class="fa-solid fa-star"></i> ${prod.rating}</span>
                        <span class="category-badge">${prod.category}</span>
                    </div>
                </div>
                <div class="product-card-content">
                    <h3>${nameText}</h3>
                    <p class="desc">${descText}</p>
                    <div class="product-card-footer">
                        <span class="product-price">$${prod.price.toFixed(2)}</span>
                        <div class="cart-action-container">
                            ${inCartQty > 0 ? `
                                <div class="qty-adjuster">
                                    <button class="qty-btn minus-btn" onclick="adjustProductQty('${prod.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                                    <span class="qty-display">${inCartQty}</span>
                                    <button class="qty-btn plus-btn" onclick="adjustProductQty('${prod.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            ` : `
                                <button class="add-to-cart-btn" onclick="addProductToCart('${prod.id}')" aria-label="Add to cart">
                                    <i class="fa-solid fa-plus"></i> Add
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// 6. CART MANAGEMENT
function addProductToCart(productId) {
    const product = PRODUCT_INVENTORY.find(p => p.id === productId);
    if (!product) return;

    const nameText = typeof product.name === "object" ? (product.name[State.language] || product.name.en) : product.name;

    State.cart.push({
        id: product.id,
        name: nameText,
        price: product.price,
        quantity: 1,
        image: product.image
    });

    saveCart();
    renderProducts();
    updateCartUI();

    const addedText = State.language === 'kh' ? "បានបន្ថែមទៅកន្ត្រក" : (State.language === 'ch' ? "已添加到购物车" : "Added to Cart");
    const descText = State.language === 'kh' ? `${nameText} ត្រូវបានជ្រើសរើស។` : (State.language === 'ch' ? `已选择 ${nameText}。` : `${nameText} is selected.`);
    showToast(addedText, descText, "success");
    animateFloatingCartButton();
}

function adjustProductQty(productId, delta) {
    const itemIndex = State.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const newQty = State.cart[itemIndex].quantity + delta;
    const name = State.cart[itemIndex].name;

    if (newQty <= 0) {
        State.cart.splice(itemIndex, 1);
        const removedTitle = State.language === 'kh' ? "បានលុបពីកន្ត្រក" : (State.language === 'ch' ? "已从购物车移除" : "Removed from Cart");
        const removedDesc = State.language === 'kh' ? `${name} ត្រូវបានលុបចេញ។` : (State.language === 'ch' ? `已将 ${name} 移除。` : `${name} was removed.`);
        showToast(removedTitle, removedDesc, "warning");
    } else {
        State.cart[itemIndex].quantity = newQty;
    }

    saveCart();
    renderProducts();
    updateCartUI();
}

function removeProductFromCart(productId) {
    const itemIndex = State.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const name = State.cart[itemIndex].name;
    State.cart.splice(itemIndex, 1);
    saveCart();
    renderProducts();
    updateCartUI();
    const removedTitle = State.language === 'kh' ? "បានលុបពីកន្ត្រក" : (State.language === 'ch' ? "已从购物车移除" : "Removed from Cart");
    const removedDesc = State.language === 'kh' ? `${name} ត្រូវបានលុបចេញ។` : (State.language === 'ch' ? `已将 ${name} 移除。` : `${name} was removed.`);
    showToast(removedTitle, removedDesc, "warning");
}

function saveCart() {
    localStorage.setItem("gourmet_cart", JSON.stringify(State.cart));
}

// Trigger CSS scale animations on floating action cart key buttons
function animateFloatingCartButton() {
    const btn = document.getElementById("floating-cart");
    if (!btn) return;
    btn.style.animation = "none";
    btn.offsetHeight; // Trigger reflow
    btn.style.animation = "cartBounce 0.4s ease";
}

// Refresh layouts of cart contents inside drawer, modals and running prices
function updateCartUI() {
    const cartCount = State.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate packaging/delivery fee
    let deliveryFee = 0;
    if (cartCount > 0) {
        deliveryFee = subtotal >= State.freeDeliveryThreshold ? 0.00 : State.deliveryFeeRate;
    }

    const total = subtotal + deliveryFee;

    // Update Badge numbers
    const badge = document.getElementById("cart-badge");
    const floatingTotal = document.getElementById("cart-floating-total");
    if (badge) badge.textContent = cartCount;
    if (floatingTotal) floatingTotal.textContent = `$${total.toFixed(2)}`;

    // Update Drawers views
    const emptyState = document.getElementById("cart-empty-state");
    const populatedState = document.getElementById("cart-populated-state");
    const footerState = document.getElementById("cart-drawer-footer");
    const container = document.getElementById("cart-items-container");

    if (cartCount === 0) {
        if (emptyState) emptyState.classList.remove("hidden");
        if (populatedState) populatedState.classList.add("hidden");
        if (footerState) footerState.classList.add("hidden");
    } else {
        if (emptyState) emptyState.classList.add("hidden");
        if (populatedState) populatedState.classList.remove("hidden");
        if (footerState) footerState.classList.remove("hidden");

        if (container) {
            container.innerHTML = State.cart.map(item => `
                <div class="cart-item-row">
                    <div class="cart-item-thumb">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h5>${item.name}</h5>
                        <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div class="cart-item-adjust">
                        <button class="qty-item-btn" onclick="adjustProductQty('${item.id}', -1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-item-val">${item.quantity}</span>
                        <button class="qty-item-btn" onclick="adjustProductQty('${item.id}', 1)" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                        <button class="trash-item-btn" onclick="removeProductFromCart('${item.id}')" aria-label="Remove item"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
            `).join("");
        }

        // Populate figures
        const txtSubtotal = document.getElementById("cart-subtotal");
        const txtDelivery = document.getElementById("cart-delivery");
        const txtTotal = document.getElementById("cart-total-price");

        let freeText = "FREE";
        if (State.language === "kh") freeText = "ឥតគិតថ្លែ";
        else if (State.language === "ch") freeText = "免费";

        if (txtSubtotal) txtSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        if (txtDelivery) txtDelivery.textContent = deliveryFee === 0 ? freeText : `$${deliveryFee.toFixed(2)}`;
        if (txtTotal) txtTotal.textContent = `$${total.toFixed(2)}`;
    }
}

// 7. TOAST NOTIFICATIONS POPUPS
function showToast(title, message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    // Choose icon
    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "warning") icon = "fa-triangle-exclamation";
    if (type === "error") icon = "fa-circle-exclamation";

    toast.innerHTML = `
        <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
        <div class="toast-body">
            <span class="toast-title">${title}</span>
            <span class="toast-msg">${message}</span>
        </div>
    `;

    container.appendChild(toast);

    // Trigger transition entrance
    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    // Remove element timeout
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}

// 8. EVENTS REGISTRATION
function registerEventListeners() {
    // Theme toggle
    document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);

    // Language dropdown toggle
    const langBtn = document.getElementById("lang-btn");
    const langDropdown = document.getElementById("lang-dropdown");
    const langSelector = document.querySelector(".lang-selector");

    if (langBtn && langDropdown) {
        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle("active");
            langSelector.classList.toggle("active");
        });

        document.addEventListener("click", () => {
            langDropdown.classList.remove("active");
            langSelector.classList.remove("active");
        });

        langDropdown.addEventListener("click", (e) => {
            const item = e.target.closest(".dropdown-item");
            if (!item) return;
            const lang = item.getAttribute("data-lang");
            updateLanguageUI(lang);
        });
    }

    // Category click filters
    const categoryTabs = document.getElementById("category-tabs");
    if (categoryTabs) {
        categoryTabs.addEventListener("click", (e) => {
            const btn = e.target.closest(".tab-btn");
            if (!btn) return;

            // Toggle active classes
            categoryTabs.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
            btn.classList.add("active");

            // Apply category search updates
            State.selectedCategory = btn.getAttribute("data-category");
            renderProducts();
        });
    }

    // Realtime search text bar
    const searchInput = document.getElementById("search-input");
    const searchClear = document.getElementById("search-clear-btn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            State.searchQuery = e.target.value;
            renderProducts();
        });
    }

    if (searchClear) {
        searchClear.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                State.searchQuery = "";
                renderProducts();
                searchInput.focus();
            }
        });
    }

    // Floating cart button
    document.getElementById("floating-cart")?.addEventListener("click", toggleCartDrawer);
    document.getElementById("cart-close-btn")?.addEventListener("click", toggleCartDrawer);
    document.getElementById("cart-drawer-overlay")?.addEventListener("click", toggleCartDrawer);
    document.getElementById("cart-start-browsing")?.addEventListener("click", toggleCartDrawer);

    // Checkout overlays show / hide
    document.getElementById("checkout-btn")?.addEventListener("click", openCheckoutModal);
    document.getElementById("checkout-close-btn")?.addEventListener("click", closeCheckoutModal);
    document.getElementById("checkout-back-btn")?.addEventListener("click", closeCheckoutModal);

    // Developer Sheets modal settings handlers
    document.getElementById("dev-panel-btn")?.addEventListener("click", openDevModal);
    document.getElementById("footer-setup-link")?.addEventListener("click", (e) => {
        e.preventDefault();
        openDevModal();
    });
    document.getElementById("dev-close-btn")?.addEventListener("click", closeDevModal);
    document.getElementById("dev-save-btn")?.addEventListener("click", saveSheetsConfig);

    // Apps script link tester
    document.getElementById("test-connection-btn")?.addEventListener("click", testSheetsConnection);

    // Clipboard script code copyer helper
    document.getElementById("copy-script-code-btn")?.addEventListener("click", copyScriptToClipboard);

    // Checkout form delivery toggle address collapses
    const typeDelivery = document.getElementById("order-type-delivery");
    const typePickup = document.getElementById("order-type-pickup");
    const addressContainer = document.getElementById("address-container");
    const txtAddress = document.getElementById("cust-address");

    if (typeDelivery && typePickup && addressContainer && txtAddress) {
        typeDelivery.addEventListener("change", () => {
            addressContainer.classList.add("active");
            txtAddress.setAttribute("required", "required");
            document.getElementById("type-delivery-label").classList.add("active");
            document.getElementById("type-pickup-label").classList.remove("active");
        });
        typePickup.addEventListener("change", () => {
            addressContainer.classList.remove("active");
            txtAddress.removeAttribute("required");
            document.getElementById("type-pickup-label").classList.add("active");
            document.getElementById("type-delivery-label").classList.remove("active");
        });
    }

    // Main checkout form submission
    document.getElementById("checkout-form")?.addEventListener("submit", handleOrderSubmission);

    // Success Modal closer
    document.getElementById("success-close-btn")?.addEventListener("click", closeSuccessModal);
}

// 9. EVENT ACTIONS
function toggleCartDrawer() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (!drawer) return;

    drawer.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
}

function openCheckoutModal() {
    if (State.cart.length === 0) {
        showToast(TRANSLATIONS[State.language].toastCartEmpty, "", "warning");
        return;
    }

    // Close cart drawer first
    toggleCartDrawer();

    const modal = document.getElementById("checkout-modal");
    if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
    }

    // Populate summaries
    const itemsCount = document.getElementById("checkout-items-count");
    const totalPrice = document.getElementById("checkout-total-price");

    const count = State.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let delivery = subtotal >= State.freeDeliveryThreshold ? 0.00 : State.deliveryFeeRate;
    if (document.getElementById("order-type-pickup")?.checked) {
        delivery = 0.00;
    }

    if (itemsCount) itemsCount.textContent = count;
    if (totalPrice) totalPrice.textContent = `$${(subtotal + delivery).toFixed(2)}`;
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
    }
}

function openDevModal() {
    const modal = document.getElementById("dev-modal");
    const urlInput = document.getElementById("apps-script-url");

    if (modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
    }
    if (urlInput) {
        urlInput.value = State.googleSheetsUrl;
    }
}

function closeDevModal() {
    const modal = document.getElementById("dev-modal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
    }
}

// 10. SHEET BRIDGE OPERATIONS
function saveSheetsConfig() {
    const urlInput = document.getElementById("apps-script-url");
    if (!urlInput) return;

    const url = urlInput.value.trim();

    if (url && !url.startsWith("https://script.google.com/macros/s/")) {
        showToast("Invalid URL", "Google Apps Script URLs usually begin with 'https://script.google.com/macros/s/'", "error");
        return;
    }

    State.googleSheetsUrl = url;
    State.isMockMode = !url;
    localStorage.setItem("gourmet_sheets_url", url);

    updateConnectionIndicator();
    closeDevModal();

    if (State.isMockMode) {
        showToast("Mock Mode Enabled", "Orders will log locally in your browser sandbox.", "warning");
    } else {
        showToast("Sheets Configured", "Live connection to Google Sheets is locked and loaded!", "success");
    }
}

// Test live GET request ping to Apps Script Web App
function testSheetsConnection() {
    const urlInput = document.getElementById("apps-script-url");
    if (!urlInput) return;

    const url = urlInput.value.trim();
    if (!url) {
        showToast("Configuration Needed", "Provide a Google Apps Script URL before testing.", "warning");
        return;
    }

    const btn = document.getElementById("test-connection-btn");
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Ping...';
    btn.disabled = true;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("HTTP connection error");
            return res.json();
        })
        .then(data => {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Connected';
            btn.style.color = "var(--success)";
            showToast("Connection Success!", data.message || "Google Sheets bridge matches correctly.", "success");

            setTimeout(() => {
                btn.innerHTML = "Test Link";
                btn.style.color = "";
                btn.disabled = false;
            }, 3000);
        })
        .catch(err => {
            btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Fail';
            btn.style.color = "var(--danger)";
            showToast("Ping Failed", "Verify your Web App was deployed as 'Anyone' and your URL is correct.", "error");

            setTimeout(() => {
                btn.innerHTML = "Test Link";
                btn.style.color = "";
                btn.disabled = false;
            }, 3000);
            console.error("Test connection failure: ", err);
        });
}

// Copy Google Apps Script to OS Clipboard
function copyScriptToClipboard() {
    const codeArea = document.getElementById("script-code-display");
    if (!codeArea) return;

    codeArea.select();
    codeArea.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(codeArea.value)
        .then(() => {
            showToast("Copied to Clipboard", "Pasting instructions ready in script editor.", "success");
            const btn = document.getElementById("copy-script-code-btn");
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy Code';
            }, 2000);
        })
        .catch(err => {
            showToast("Copy Failed", "Please select all lines and copy manually.", "error");
        });
}

// 11. SUBMIT FULFILLMENT ORDERS
function handleOrderSubmission(e) {
    e.preventDefault();

    if (State.cart.length === 0) {
        showToast(TRANSLATIONS[State.language].toastCartEmpty, "", "warning");
        return;
    }

    const submitBtn = document.getElementById("place-order-submit-btn");
    const btnTxt = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");

    // Toggle Loading states
    submitBtn.disabled = true;
    if (btnTxt) btnTxt.textContent = TRANSLATIONS[State.language].placeOrderBtnLoading;
    if (btnSpinner) btnSpinner.classList.remove("hidden");

    // Extract Form Fields
    const customerName = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const emailEl = document.getElementById("cust-email");
    const email = emailEl ? (emailEl.value.trim() || "N/A") : "N/A";
    const customerId = document.getElementById("cust-id").value.trim();
    const orderType = document.querySelector('input[name="order-type"]:checked').value;
    const address = document.getElementById("cust-address").value.trim() || "N/A";
    const notes = document.getElementById("cust-notes").value.trim();

    // Generate order ID
    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    const subtotal = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let delivery = subtotal >= State.freeDeliveryThreshold ? 0.00 : State.deliveryFeeRate;
    if (orderType === "Pickup") delivery = 0.00;
    const totalPrice = subtotal + delivery;

    // Construct transaction payload
    const orderPayload = {
        orderId: orderId,
        customerId: customerId,
        timestamp: new Date().toISOString(),
        customerName: customerName,
        phone: phone,
        email: email,
        orderType: orderType,
        address: address,
        items: State.cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        totalPrice: totalPrice,
        notes: notes
    };

    // Open Success Overlay screen early with processing graphic
    closeCheckoutModal();
    openSuccessModal(orderPayload);

    const syncIndicator = document.getElementById("sync-indicator");
    const syncText = document.getElementById("sync-status-text");

    if (State.isMockMode) {
        // SIMULATE SANDBOX STORAGE SUBMISSION
        setTimeout(() => {
            // Save inside mock logs history
            const history = JSON.parse(localStorage.getItem("gourmet_mock_history") || "[]");
            history.unshift(orderPayload);
            localStorage.setItem("gourmet_mock_history", JSON.stringify(history));

            // Update indicator
            if (syncIndicator) syncIndicator.className = "sheets-sync-status-indicator success";
            if (syncText) syncText.innerHTML = '<i class="fa-solid fa-circle-check"></i> Order logged in Local Sandbox! (Google Sheet URL is vacant)';

            // Clear shopping cart
            clearCart();

            // Reset spinner checkout buttons
            resetCheckoutBtnState();
        }, 1800);
    } else {
        // LIVE SUBMISSION TO GOOGLE APPS SCRIPT WEB APP
        // Note: we fetch as text/plain to prevent CORS preflight OPTIONS blocking
        fetch(State.googleSheetsUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(orderPayload)
        })
            .then(res => {
                if (!res.ok) throw new Error("HTTP write request rejected");
                return res.json();
            })
            .then(data => {
                if (data.status === "success") {
                    if (syncIndicator) syncIndicator.className = "sheets-sync-status-indicator success";
                    if (syncText) syncText.innerHTML = `<i class="fa-solid fa-circle-check"></i> Order synced with Google Sheet row #${data.rowNumber || 'N/A'}!`;

                    clearCart();
                } else {
                    throw new Error(data.message || "Failed execution logic");
                }
            })
            .catch(err => {
                console.error("Sheets write failure: ", err);
                // Fallback: save locally and warn user
                const history = JSON.parse(localStorage.getItem("gourmet_mock_history") || "[]");
                history.unshift(orderPayload);
                localStorage.setItem("gourmet_mock_history", JSON.stringify(history));

                if (syncIndicator) syncIndicator.className = "sheets-sync-status-indicator error";
                if (syncText) syncText.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Sheet offline. Receipts saved in browser storage. Click Setup to verify your URL.';
            })
            .finally(() => {
                resetCheckoutBtnState();
            });
    }
}

function clearCart() {
    State.cart = [];
    saveCart();
    renderProducts();
    updateCartUI();
}

function resetCheckoutBtnState() {
    const submitBtn = document.getElementById("place-order-submit-btn");
    const btnTxt = submitBtn.querySelector(".btn-text");
    const btnSpinner = submitBtn.querySelector(".btn-spinner");

    if (submitBtn) submitBtn.disabled = false;
    if (btnTxt) btnTxt.textContent = TRANSLATIONS[State.language].placeOrderBtn;
    if (btnSpinner) btnSpinner.classList.add("hidden");

    // Clear checkout forms
    document.getElementById("checkout-form")?.reset();

    // Force reset delivery expand fields
    const addressContainer = document.getElementById("address-container");
    const txtAddress = document.getElementById("cust-address");
    if (addressContainer && txtAddress) {
        addressContainer.classList.add("active");
        txtAddress.removeAttribute("required");
    }
}

// 12. SUCCESS SCREEN MODAL BUILDER
function openSuccessModal(orderData) {
    const overlay = document.getElementById("success-overlay");
    const orderId = document.getElementById("success-order-id-display");
    const recipient = document.getElementById("success-recipient-name");
    const container = document.getElementById("success-invoice-items");
    const total = document.getElementById("success-invoice-total");
    const syncIndicator = document.getElementById("sync-indicator");
    const syncText = document.getElementById("sync-status-text");

    if (overlay) {
        overlay.classList.add("active");
        overlay.setAttribute("aria-hidden", "false");
    }
    if (orderId) orderId.textContent = `Order ID: ${orderData.orderId}`;
    if (recipient) recipient.textContent = orderData.customerName;

    if (container) {
        container.innerHTML = orderData.items.map(item => `
            <div class="invoice-item-summary">
                <span>${item.quantity}x ${item.name}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join("");

        // If delivery was added, display it
        const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (orderData.totalPrice > subtotal) {
            const fee = orderData.totalPrice - subtotal;
            container.innerHTML += `
                <div class="invoice-item-summary mt-5" style="border-top: 1px solid var(--border-color); padding-top: 5px;">
                    <span>Packaging & Delivery</span>
                    <span>$${fee.toFixed(2)}</span>
                </div>
            `;
        }
    }

    if (total) total.textContent = `$${orderData.totalPrice.toFixed(2)}`;

    // Reset sync banner status to default loading
    if (syncIndicator) syncIndicator.className = "sheets-sync-status-indicator";
    if (syncText) syncText.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin spinner-icon"></i> ${TRANSLATIONS[State.language].syncingReceipt}`;
}

function closeSuccessModal() {
    const overlay = document.getElementById("success-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
    }
}
