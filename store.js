
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              500: '#1a1a2e', // Deep navy
              600: '#16213e',
            },
            secondary: {
              500: '#d4af37', // Gold
              600: '#c9a227',
            },
            accent: {
              500: '#e5e5e5', // Platinum
              600: '#d1d1d1',
            },
            background: {
              500: '#f8f4e9', // Cream
              600: '#ede8d9',
            },
            dark: {
              500: '#0f0f1a', // Darker navy
              600: '#0a0a12',
            }
          },
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Playfair Display', 'serif'],
            display: ['Cinzel', 'serif'],
          },
        }
      }
    }

    // Convert prices from USD to MAD (1 USD ≈ 10 MAD)
    function convertToMAD(usdPrice) {
      const exchangeRate = 10;
      const madPrice = parseFloat(usdPrice.replace('$', '')) * exchangeRate;
      return madPrice.toFixed(2) + ' MAD';
    }

    // Product Data with real brands (Nike, Adidas, etc.)
    const products = {
      men: [
        {
          id: 'm1',
          title: 'Nike Air Max T-Shirt',
          description: 'Classic Nike t-shirt with Air Max logo. 100% cotton for ultimate comfort.',
          price: '$29.99',
          image: 'https://images.unsplash.com/photo-1585036156404-f11b0f784515?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMGFpciUyMG1heCUyMHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          id: 'm2',
          title: 'Adidas Originals Jeans',
          description: 'Slim fit jeans with Adidas Originals branding. Stretch denim for comfort.',
          price: '$59.99',
          image: 'https://i.pinimg.com/736x/9e/cf/dd/9ecfddeda156e4121470ab9ddcc8d60a.jpg'
        },
        {
          id: 'm3',
          title: 'Levi\'s 501 Original Jeans',
          description: 'Iconic Levi\'s 501 jeans in classic straight fit. 100% cotton denim.',
          price: '$79.99',
          image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        {
          id: 'm4',
          title: 'Puma Classic Polo',
          description: 'Breathable pique polo shirt with Puma logo. Available in multiple colors.',
          price: '$39.99',
          image: 'https://thumblr.uniid.it/product/341379/973104505445.jpg?width=3840&format=webp&q=75'
        },
        {
          id: 'm5',
          title: 'Tommy Hilfiger Oxford Shirt',
          description: 'Classic Oxford shirt with Tommy Hilfiger logo. Button-down collar.',
          price: '$49.99',
          image: 'https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW35774_0G0_alternate4?$b2c_updp_m_mainImage_1920$'
        },
        {
          id: 'm6',
          title: 'Calvin Klein Slim Fit Chinos',
          description: 'Premium slim fit chinos with Calvin Klein branding. Stretch fabric.',
          price: '$69.99',
          image: 'https://cdn14.nnnow.com/web-images/large/styles/VXVGCN0S2VN/1721815769169/1.JPG'
        },
        {
          id: 'm7',
          title: 'Ralph Lauren Polo Shirt',
          description: 'Iconic Ralph Lauren polo shirt with embroidered logo. Classic fit.',
          price: '$59.99',
          image: 'https://rustans.com/cdn/shop/files/203927471.jpg?v=1727231757'
        },
        {
          id: 'm8',
          title: 'Hugo Boss Suit Jacket',
          description: 'Premium wool suit jacket from Hugo Boss. Tailored fit.',
          price: '$299.99',
          image: 'https://images.hugoboss.com/is/image/boss/hbeu50479994_021_100?$re_fullPageZoom$&qlt=85&fit=crop,1&align=1,1&bgcolor=ebebeb&lastModified=1716992502000&wid=1200&hei=1818'
        }
      ],
      shoes: [
        {
          id: 's1',
          title: 'Nike Air Force 1',
          description: 'Classic white Nike Air Force 1 sneakers. Leather upper with Air cushioning.',
          price: '$99.99',
          image: 'https://images.unsplash.com/photo-1656164847621-4665c4c397da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmlrZSUyMGFpciUyMGZvcmNlJTIwMXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
          id: 's2',
          title: 'Adidas Ultraboost',
          description: 'Adidas Ultraboost running shoes with responsive cushioning. Primeknit upper.',
          price: '$179.99',
          image: 'https://images.unsplash.com/photo-1546200843-d3a4e1e0103d?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          id: 's3',
          title: 'Puma RS-X',
          description: 'Retro-inspired Puma RS-X sneakers with chunky sole. Bold colorways.',
          price: '$89.99',
          image: 'https://planetsport.ma/13295-large_default/rs-x-efekt-prm-puma-black-strong-gray.jpg'
        },
        {
          id: 's4',
          title: 'New Balance 574',
          description: 'Classic New Balance 574 sneakers. Suede and mesh upper.',
          price: '$79.99',
          image: 'https://i5.walmartimages.com/seo/New-Balance-574-Men-s-Running-Shoes-Size-9-5D_f4f85206-a6eb-40e5-9025-b2162a4d3ac4_1.1193d5f2132b5553def5b4b69ac09fcb.jpeg'
        },
        {
          id: 's5',
          title: 'Converse Chuck Taylor',
          description: 'Iconic Converse Chuck Taylor All Star high tops. Canvas upper.',
          price: '$59.99',
          image: 'https://ma.mojaa.com/cdn/shop/files/58t3p2ro.png?v=1750329847'
        },
        {
          id: 's6',
          title: 'Vans Old Skool',
          description: 'Classic Vans Old Skool skate shoes. Suede and canvas upper.',
          price: '$69.99',
          image: 'https://m.media-amazon.com/images/I/51GdEP3xqML._AC_SL1500_.jpg'
        }
      ],
      accessories: [
        {
          id: 'a1',
          title: 'Ray-Ban Aviator Sunglasses',
          description: 'Classic Ray-Ban aviator sunglasses with UV protection. Gold frame with green lenses.',
          price: '$159.99',
          image: 'https://assets.lenscrafters.com/is/image/LensCrafters/805289305033__STD__shad__fr.png?impolicy=LC_grey'
        },
        {
          id: 'a2',
          title: 'Gucci Leather Belt',
          description: 'Authentic Gucci leather belt with GG buckle. Black or brown available.',
          price: '$299.99',
          image: 'https://www.mrporter.com/variants/images/16114163150441162/in/w2000_q60.jpg'
        },
        {
          id: 'a3',
          title: 'Rolex Submariner Watch',
          description: 'Luxury Rolex Submariner dive watch. Stainless steel with black dial.',
          price: '$8999.99',
          image:'https://images.hbjo-online.com/images/rolex/v7/upright_watch_assets_portrait/m126613lb-0002.webp'
        },
        {
          id: 'a4',
          title: 'Louis Vuitton Wallet',
          description: 'Genuine Louis Vuitton monogram wallet. Multiple card slots.',
          price: '$499.99',
          image: 'https://i.ebayimg.com/images/g/Yr0AAOSwuQ9k6Bvx/s-l1200.jpg'
        },
        {
          id: 'a5',
          title: 'Oakley Holbrook Sunglasses',
          description: 'Sporty Oakley Holbrook sunglasses with polarized lenses. Matte black frame.',
          price: '$129.99',
          image: 'https://m.media-amazon.com/images/I/618RD2rf+UL._AC_SL1500_.jpg'
        },
        {
          id: 'a6',
          title: 'Hermes Silk Tie',
          description: 'Luxury Hermes silk tie with iconic pattern. Hand-rolled edges.',
          price: '$199.99',
          image: 'https://assets.hermes.com/is/image/hermesproduct/grenadine-de-soie-tie--153821T%2005-folded-wm-2-0-0-800-800_g.jpg'
        }
      ]
    };

    // DOM Elements
    const loadingOverlay = document.getElementById('loading-overlay');
    const spinner = document.getElementById('spinner');
    const productModal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const addToCartBtn = document.getElementById('add-to-cart');
    const buyNowBtn = document.getElementById('buy-now');
    const sizeSelect = document.getElementById('size-select');
    const colorButtons = document.querySelectorAll('.color-select button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const cartClose = document.getElementById('cart-close');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const floatingCartBtn = document.getElementById('floating-cart-btn');
    const floatingCartCount = document.getElementById('floating-cart-count');
    const addedToCartNotification = document.getElementById('added-to-cart-notification');
    const notificationMessage = document.getElementById('notification-message');
    const productsSection = document.getElementById('products-section');
    const productsContainer = document.getElementById('products-container');
    const productsTitle = document.getElementById('products-title');
    const backToCategories = document.getElementById('back-to-categories');
    const sortButton = document.getElementById('sort-button');
    const sortDropdown = document.getElementById('sort-dropdown');
    const sortOptions = document.querySelectorAll('.sort-option');
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    const shopNowBtn = document.getElementById('shop-now-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainHeader = document.getElementById('main-navigation');

    // State
    let currentProduct = null;
    let currentCategory = null;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let selectedColor = 'black';

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
      // Hide loading screen after 2 seconds
      setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
          loadingOverlay.style.display = 'none';
          initScrollAnimations();
        }, 500);
      }, 2000);
      
      updateCartCount();
      setupEventListeners();
      
      // Check for dark mode preference
      if (localStorage.getItem('darkMode') === 'true' || 
          (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      }
    });

    // Initialize scroll animations
    function initScrollAnimations() {
      const scrollElements = document.querySelectorAll('[data-scroll]');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, {
        threshold: 0.1
      });
      
      scrollElements.forEach(el => observer.observe(el));
    }

    // Event Listeners
    function setupEventListeners() {
      // Modal
      modalClose.addEventListener('click', closeModal);
      
      // Cart
      addToCartBtn.addEventListener('click', addToCart);
      buyNowBtn.addEventListener('click', buyNow);
      cartButton.addEventListener('click', toggleCart);
      cartClose.addEventListener('click', toggleCart);
      floatingCartBtn.addEventListener('click', toggleCart);
      checkoutBtn.addEventListener('click', checkout);
      
      // Color selection
      colorButtons.forEach(button => {
        button.addEventListener('click', () => {
          colorButtons.forEach(btn => btn.classList.remove('border-gray-500', 'border-gray-300'));
          button.classList.add('border-gray-500', 'dark:border-gray-300');
          selectedColor = getColorName(button.style.backgroundColor);
        });
      });
      
      // Navigation
      backToCategories.addEventListener('click', () => {
        productsSection.classList.add('hidden');
        document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
      });
      
      // Sorting
      sortButton.addEventListener('click', toggleSortDropdown);
      sortOptions.forEach(option => {
        option.addEventListener('click', () => sortProducts(option.dataset.sort));
      });
      
      // Search
      searchToggle.addEventListener('click', toggleSearch);
      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          searchProducts(e.target.value);
        }
      });
      
      // Shop now button
      shopNowBtn.addEventListener('click', () => {
        document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
      });
      
      // Theme toggle
      themeToggle.addEventListener('click', toggleTheme);
      
      // Mobile menu
      mobileMenuButton.addEventListener('click', toggleMobileMenu);
      
      // Close dropdowns when clicking outside
      document.addEventListener('click', (e) => {
        if (!sortButton.contains(e.target) && !sortDropdown.contains(e.target)) {
          sortDropdown.classList.remove('open');
        }
      });
    }

    // Product Functions
    function showProducts(category) {
      currentCategory = category;
      productsSection.classList.remove('hidden');
      
      // Set the title based on category
      let title = '';
      switch(category) {
        case 'men':
          title = "MEN'S APPAREL";
          break;
        case 'shoes':
          title = "FOOTWEAR";
          break;
        case 'accessories':
          title = "ACCESSORIES";
          break;
      }
      productsTitle.textContent = title;
      
      // Clear previous products
      productsContainer.innerHTML = '';
      
      // Add new products
      products[category].forEach(product => {
        const productElement = createProductCard(product);
        productsContainer.appendChild(productElement);
      });
      
      // Scroll to products section
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function createProductCard(product) {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105';
      card.innerHTML = `
        <div class="relative h-64 overflow-hidden">
          <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
          <div class="product-details-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <button class="view-details-btn bg-secondary-500 dark:bg-accent-500 hover:bg-secondary-600 dark:hover:bg-accent-600 text-white py-2 px-6 rounded-full transition-colors">
              View Details
            </button>
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg mb-1">${product.title}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">${product.description}</p>
          <div class="flex justify-between items-center">
            <span class="text-secondary-500 dark:text-accent-500 font-bold price-display">${convertToMAD(product.price)}</span>
            <button class="add-to-cart-btn p-2 rounded-full bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
              <i class="fas fa-shopping-cart text-primary-500 dark:text-accent-500"></i>
            </button>
          </div>
        </div>
      `;
      
      // Add event listeners
      const viewDetailsBtn = card.querySelector('.view-details-btn');
      const addToCartBtn = card.querySelector('.add-to-cart-btn');
      
      viewDetailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showProductDetails(product);
      });
      
      addToCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addProductToCart(product);
      });
      
      card.addEventListener('click', () => {
        showProductDetails(product);
      });
      
      return card;
    }

    function showProductDetails(product) {
      currentProduct = product;
      modalTitle.textContent = product.title;
      modalDescription.textContent = product.description;
      modalPrice.textContent = convertToMAD(product.price);
      modalImage.src = product.image;
      modalImage.alt = product.title;
      productModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      productModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // Cart Functions
    function addToCart() {
      if (!currentProduct) return;
      
      const productToAdd = {
        ...currentProduct,
        size: sizeSelect.value,
        color: selectedColor,
        quantity: 1
      };
      
      addProductToCart(productToAdd);
      closeModal();
    }

    function buyNow() {
      addToCart();
      toggleCart();
    }

    function addProductToCart(product) {
      // Check if product already exists in cart
      const existingItemIndex = cart.findIndex(item => 
        item.id === product.id && 
        item.size === product.size && 
        item.color === product.color
      );
      
      if (existingItemIndex >= 0) {
        // Increase quantity
        cart[existingItemIndex].quantity += 1;
      } else {
        // Add new item
        cart.push(product);
      }
      
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Update UI
      updateCartCount();
      showAddedToCartNotification(product.title);
      updateCartItems();
    }

    function updateCartCount() {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      cartCount.textContent = totalItems;
      floatingCartCount.textContent = totalItems;
      
      // Show/hide floating cart button
      if (totalItems > 0) {
        floatingCartBtn.classList.remove('hidden');
      } else {
        floatingCartBtn.classList.add('hidden');
      }
    }

    function toggleCart() {
      if (cartSidebar.classList.contains('translate-x-full')) {
        cartSidebar.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
        updateCartItems();
      } else {
        cartSidebar.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
      }
    }

    function updateCartItems() {
      cartItemsContainer.innerHTML = '';
      
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center py-8 text-gray-500">Your cart is empty</p>';
        cartSubtotal.textContent = '0.00 MAD';
        cartTotal.textContent = '0.00 MAD';
        return;
      }
      
      let subtotal = 0;
      
      cart.forEach((item, index) => {
        const price = parseFloat(item.price.replace('$', '')) * 10; // Convert to MAD
        subtotal += price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'flex gap-4 border-b border-gray-200 dark:border-gray-700 pb-4';
        cartItem.innerHTML = `
          <div class="w-20 h-20 bg-gray-100 dark:bg-gray-600 rounded-lg overflow-hidden">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
          </div>
          <div class="flex-1">
            <h4 class="font-medium">${item.title}</h4>
            <p class="text-sm text-gray-500 dark:text-gray-400">${item.size} | ${item.color}</p>
            <div class="flex justify-between items-center mt-2">
              <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                <button class="decrease-quantity px-2 py-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700" data-index="${index}">-</button>
                <span class="quantity px-2">${item.quantity}</span>
                <button class="increase-quantity px-2 py-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700" data-index="${index}">+</button>
              </div>
              <span class="price font-medium">${convertToMAD(item.price)}</span>
            </div>
          </div>
          <button class="remove-item text-gray-400 hover:text-red-500" data-index="${index}">
            <i class="fas fa-times"></i>
          </button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
      });
      
      // Add event listeners to quantity buttons
      document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = e.target.dataset.index;
          cart[index].quantity += 1;
          updateCart();
        });
      });
      
      document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = e.target.dataset.index;
          if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
          } else {
            cart.splice(index, 1);
          }
          updateCart();
        });
      });
      
      document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
          const index = e.target.closest('button').dataset.index;
          cart.splice(index, 1);
          updateCart();
        });
      });
      
      // Update totals
      cartSubtotal.textContent = subtotal.toFixed(2) + ' MAD';
      cartTotal.textContent = subtotal.toFixed(2) + ' MAD';
    }

    function updateCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      updateCartItems();
    }

    function checkout() {
      showSpinner();
      // Simulate checkout process
      setTimeout(() => {
        hideSpinner();
        alert('Checkout completed! Thank you for your purchase.');
        cart = [];
        updateCart();
        toggleCart();
      }, 2000);
    }

    function showAddedToCartNotification(productTitle) {
      notificationMessage.textContent = `${productTitle} added to cart`;
      addedToCartNotification.classList.remove('hidden');
      addedToCartNotification.classList.add('animate-slide');
      
      setTimeout(() => {
        addedToCartNotification.classList.remove('animate-slide');
        addedToCartNotification.classList.add('hidden');
      }, 3000);
    }

    // Utility Functions
    function getColorName(color) {
      const colors = {
        'rgb(239, 68, 68)': 'red',
        'rgb(59, 130, 246)': 'blue',
        'rgb(0, 0, 0)': 'black',
        'rgb(255, 255, 255)': 'white'
      };
      return colors[color] || color;
    }

    function toggleSortDropdown() {
      sortDropdown.classList.toggle('open');
    }

    function sortProducts(sortType) {
      if (!currentCategory) return;
      
      let sortedProducts = [...products[currentCategory]];
      
      switch(sortType) {
        case 'price-low':
          sortedProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
          break;
        case 'price-high':
          sortedProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
          break;
        case 'name-asc':
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name-desc':
          sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
      
      // Update products display
      productsContainer.innerHTML = '';
      sortedProducts.forEach(product => {
        const productElement = createProductCard(product);
        productsContainer.appendChild(productElement);
      });
      
      // Close dropdown
      sortDropdown.classList.remove('open');
    }

    function toggleSearch() {
      searchInput.classList.toggle('open');
      if (searchInput.classList.contains('open')) {
        searchInput.focus();
      }
    }

    function searchProducts(query) {
      if (!currentCategory || !query.trim()) return;
      
      const filteredProducts = products[currentCategory].filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      
      // Update products display
      productsContainer.innerHTML = '';
      
      if (filteredProducts.length === 0) {
        productsContainer.innerHTML = '<p class="col-span-full text-center py-12 text-gray-500">No products found matching your search</p>';
      } else {
        filteredProducts.forEach(product => {
          const productElement = createProductCard(product);
          productsContainer.appendChild(productElement);
        });
      }
      
      // Close search and clear input
      searchInput.classList.remove('open');
      searchInput.value = '';
    }

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      
      if (document.documentElement.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('darkMode', 'true');
      } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('darkMode', 'false');
      }
    }

    function toggleMobileMenu() {
      mobileMenu.classList.toggle('hidden');
    }

    function showSpinner() {
      spinner.classList.remove('hidden');
    }

    function hideSpinner() {
      spinner.classList.add('hidden');
    }

    // Make functions available globally
    window.showProducts = showProducts;