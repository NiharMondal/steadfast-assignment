# 🛍️ E-Commerce Product & Cart Page – Steadfast Courier Task

This project is a technical assessment for the **Mid-Level Front-End Developer** role at **Steadfast Courier Ltd**. It replicates a portion of the company's e-commerce platform, focusing on the **Product Details** and **Cart** pages, built using modern web technologies with responsive, user-focused design.

---

## 🔗 Live Preview

[Deployed Link (if any)](https://your-deployment-url.com)

---

## 📦 Features

### 🛒 Product Details Page

-   ✅ Dynamic product detail fetched from API
-   ✅ Product image gallery with thumbnails
-   ✅ Category display from API
-   ✅ Quantity selector
-   ✅ Variation-wise "Add to Cart" functionality
-   ✅ LocalStorage-powered cart system
-   ✅ Expandable "Description" and "Specification" sections

### 🛍️ Cart Page

-   ✅ Product list display with name, image, color, size, quantity, and price
-   ✅ Quantity updater per item
-   ✅ Item removal from cart
-   ✅ Real-time subtotal and total price calculation
-   ✅ Terms & Conditions agreement checkbox
-   ✅ "Proceed to Checkout" button (non-functional demo)

---

## 🛠️ Tech Stack

| Tech             | Usage                        |
| ---------------- | ---------------------------- |
| **Next.js**      | React framework with routing |
| **React**        | Front-end UI                 |
| **Tailwind CSS** | Utility-first styling        |
| **Shadcn**       | Used Shadcn component        |
| **TypeScript**   | Type-safe development        |
| **LocalStorage** | Client-side cart persistence |
| **Lucide React** | Icons for UI elements        |

---

## 🗃️ API Endpoints Used

| Purpose           | Endpoint                                                   |
| ----------------- | ---------------------------------------------------------- |
| 🏷️ Categories     | `http://157.230.240.97:9999/api/v1/categories`             |
| 🛍️ All Products   | `http://157.230.240.97:9999/api/v1/shop/products`          |
| 📦 Single Product | `http://157.230.240.97:9999/api/v1/product/iphone-15-plus` |

---

## 📦 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/NiharMondal/steadfast-assignment
cd steadfast-assignment
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Run the Development Server

```bash
pnpm run dev
```

---

## 📱 Responsive Design

---

The entire UI is designed to be mobile-friendly and works seamlessly across device sizes, following the Figma design specs.
