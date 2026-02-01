Code Explanation
1. types/index.ts
This file defines TypeScript types used throughout the application:

SelectOption: A type definition for select dropdown options
value: string - The underlying value used for the option
label: string - The display text shown to users
2. components/select-control.tsx
A reusable select dropdown component built with Shadcn UI:

Purpose: Provides a customizable select dropdown with label and grouped options
Props:
selectLabel: Text label displayed before the select
value: Current selected value (controlled)
onValueChange: Callback function when selection changes
options: Array of SelectOption objects
groupLabel: Label for the option group
placeholder: Placeholder text when no value selected
Features:
Uses Shadcn's Select components for a consistent UI
Styled with Tailwind CSS (white background, large text, custom height)
Displays label and select in a horizontal flex layout
3. components/product-card.tsx
A card component for displaying product information:

Purpose: Renders individual product details in a card format
Props:
name: Product name (string)
price: Product price (number)
category: Product category ("electronics" | "clothing" | string)
Features:
Uses Shadcn's Card components (Card, CardHeader, CardTitle, CardContent)
Displays product name as a large title (3xl)
Shows price formatted to 2 decimal places ($XX.XX)
Renders category as a colored badge:
"electronics" → default variant
"clothing" → secondary variant
Styled with white background and gray border
4. app/page.tsx
The main application page with product filtering and sorting:

Purpose: Homepage that displays a filterable and sortable product list
State Management:
filterCategory: Controls product filtering by category
sortBy: Controls product sorting order
Data:
Contains 4 sample products (2 electronics, 2 clothing items)
Each product has: id, name, price, category
Features:
Category Filter: Select between "All Products", "Electronics", or "Clothing"
Sort Options: Default, Price Low to High, or Price High to Low
Dynamic Filtering: Products filter based on selected category
Dynamic Sorting: Products sort by price (ascending/descending)
Responsive Grid: 1 column on mobile, 2 columns on medium+ screens
Clean UI: Gray background with centered content container
Application Flow
User selects a category filter (defaults to "All Products")
User selects a sort option (defaults to "Default")
Products are filtered by category (if not "all")
Filtered products are sorted by price (if not "default")
Results display in a responsive grid using ProductCard components
Technology Stack
Framework: Next.js 14+ (App Router with "use client")
UI Library: Shadcn UI
Styling: Tailwind CSS
Language: TypeScript
State Management: React useState hooks

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
