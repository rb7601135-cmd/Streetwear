import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductGrid from './components/ProductGrid';
import PromoBanners from './components/PromoBanners';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import Toast from './components/Toast';

import { products } from './data/products';
import './App.css';

function App() {
  // E-Commerce States
  const [cartItems, setCartItems] = useState([
    { product: products[0], size: 'L', quantity: 1 }
  ]);
  const [wishlistIds, setWishlistIds] = useState([2]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // UI Modals & Drawers States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type = 'cart') => {
    setToast({ message, type });
  };

  // Add to cart
  const handleAddToCart = (product, size = 'M', quantity = 1) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { product, size, quantity }];
      }
    });
    showToast(`Added "${product.name}" (${size}) to your cart!`, 'cart');
  };

  // Update quantity in cart
  const handleUpdateQuantity = (productId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Remove from cart
  const handleRemoveCartItem = (productId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      )
    );
    showToast('Item removed from cart', 'cart');
  };

  // Toggle Wishlist
  const handleToggleWishlist = (product) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistIds((prev) => prev.filter((id) => id !== product.id));
      showToast(`Removed "${product.name}" from wishlist`, 'wishlist');
    } else {
      setWishlistIds((prev) => [...prev, product.id]);
      showToast(`Added "${product.name}" to wishlist!`, 'wishlist');
    }
  };

  // Move from wishlist to cart
  const handleMoveWishlistToCart = (product) => {
    handleAddToCart(product, 'M', 1);
    setWishlistIds((prev) => prev.filter((id) => id !== product.id));
  };

  // Category filter selection with smooth scroll to products
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    const grid = document.querySelector('#new-arrivals');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Total cart item count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Wishlist products array
  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  // Cart item IDs for fast badge checking
  const cartItemIds = cartItems.map((item) => item.product.id);

  return (
    <div className="streetwear-app">
      {/* Toast Feedback */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onStartShopping={() => handleSelectCategory('All')}
        />

        {/* Benefits Section */}
        <Benefits />

        {/* New Arrivals Product Grid */}
        <ProductGrid
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          wishlistIds={wishlistIds}
          cartItemIds={cartItemIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* Promotional Side-by-Side Banners */}
        <PromoBanners onExploreCategory={handleSelectCategory} />

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckoutSuccess={() => {
          setCartItems([]);
          showToast('Checkout complete! Order placed.', 'success');
        }}
      />

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistedProducts}
        onRemoveWishlist={(id) => {
          setWishlistIds((prev) => prev.filter((pId) => pId !== id));
          showToast('Item removed from wishlist', 'wishlist');
        }}
        onMoveToCart={handleMoveWishlistToCart}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(product) => setQuickViewProduct(product)}
        onAddToCart={(product) => handleAddToCart(product)}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;
