export const products = [
  {
    id: 1,
    name: "Black Graphic T-Shirt",
    category: "T-Shirts",
    price: 3490,
    originalPrice: 4200,
    onSale: true,
    tag: "Best Seller",
    rating: 4.9,
    reviewsCount: 38,
    image: "/images/product-1.jpg",
    description: "Heavyweight 240 GSM organic cotton t-shirt featuring our signature circular Urban Archive chest print. Relaxed streetwear fit with ribbed collar.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true
  },
  {
    id: 2,
    name: "Minimal Black T-Shirt",
    category: "T-Shirts",
    price: 2990,
    originalPrice: null,
    onSale: false,
    tag: "Essential",
    rating: 4.8,
    reviewsCount: 24,
    image: "/images/product-2.jpg",
    description: "Pure luxury minimalism. Made from premium combed cotton with a clean drop-shoulder cut. An everyday streetwear wardrobe staple.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    inStock: true
  },
  {
    id: 3,
    name: "Oversized Graphic T-Shirt",
    category: "T-Shirts",
    price: 3890,
    originalPrice: 4500,
    onSale: true,
    tag: "Hot Drop",
    rating: 5.0,
    reviewsCount: 52,
    image: "/images/product-3.jpg",
    description: "Boxy oversized streetwear silhouette featuring the high-contrast '705' distressed circle print. Double-needle stitched hems for durability.",
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
    inStock: true
  },
  {
    id: 4,
    name: "Black Hoodie",
    category: "Hoodies",
    price: 5990,
    originalPrice: 7200,
    onSale: true,
    tag: "Signature",
    rating: 4.9,
    reviewsCount: 67,
    image: "/images/product-4.jpg",
    description: "Ultra-heavyweight 450 GSM French terry fleece hoodie. Features a double-layered structured hood, kangaroo pocket, and matte metal eyelets.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true
  },
  {
    id: 5,
    name: "White Hoodie",
    category: "Hoodies",
    price: 6490,
    originalPrice: null,
    onSale: false,
    tag: "Iconic",
    rating: 4.9,
    reviewsCount: 43,
    image: "/images/product-5.jpg",
    description: "As seen in our flagship editorial campaign. Pristine white 420 GSM fleece hoodie with ribbed cuffs and subtle tonal branded detailing.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    inStock: true
  },
  {
    id: 6,
    name: "Black Sweatshirt",
    category: "Sweatshirts",
    price: 4790,
    originalPrice: 5500,
    onSale: true,
    tag: "Limited",
    rating: 4.7,
    reviewsCount: 19,
    image: "/images/product-6.jpg",
    description: "Minimalist crewneck sweatshirt stamped with '705' center typography. Soft brushed fleece interior for ultimate thermal comfort and street aesthetic.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    inStock: true
  }
];

export const benefits = [
  {
    id: 1,
    icon: "Truck",
    title: "Free Delivery",
    desc: "Free standard shipping on all nationwide orders above Rs. 5,000."
  },
  {
    id: 2,
    icon: "ShieldCheck",
    title: "100% Secure Payment",
    desc: "Card, Bank Transfer & Cash on Delivery with SSL encryption."
  },
  {
    id: 3,
    icon: "Award",
    title: "Quality Guarantee",
    desc: "30-day hassle-free returns and guaranteed 100% heavyweight cotton."
  },
  {
    id: 4,
    icon: "Coins",
    title: "Guaranteed Savings",
    desc: "Factory-direct pricing on premium luxury streetwear garments."
  }
];

export const formatPKR = (amount) => {
  return "Rs. " + amount.toLocaleString("en-PK");
};
