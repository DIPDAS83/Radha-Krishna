// ----- LOADING SCREEN -----
document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loadingScreen');
    const progress = document.getElementById('progressBar');
    let p = 0;
    const interval = setInterval(() => {
        p += Math.random() * 12;
        if (p > 100) p = 100;
        progress.style.width = p + '%';
        if (p === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loading.classList.add('hide');
                document.body.style.cursor = 'none';
                initParticles();
                initCollectionCards();
                initProductCards();
                initTestimonials();
                initGallery();
                initBeforeAfter();
                initHeroAlbumTilt();
                initNavbarScroll();
                initMobileMenu();
                initSearchOverlay();
                initCartDrawer();
                initCustomCursor();
            }, 400);
        }
    }, 180);
});

// ----- CUSTOM CURSOR -----
function initCustomCursor() {
    const cursor = document.getElementById('customCursor');
    let x = 0, y = 0;
    let targetX = 0, targetY = 0;
    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });
    function animateCursor() {
        x += (targetX - x) * 0.12;
        y += (targetY - y) * 0.12;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverElements = document.querySelectorAll('a, button, .collection-card, .product-card, .testimonial-card, .gallery-grid img, .album-mockup');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ----- FLOATING PARTICLES -----
function initParticles() {
    const container = document.getElementById('floatingParticles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.width = (4 + Math.random() * 8) + 'px';
        p.style.height = p.style.width;
        p.style.animationDuration = (14 + Math.random() * 20) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        container.appendChild(p);
    }
}

// ----- COLLECTION CARDS -----
function initCollectionCards() {
    const data = [
        { name: 'Radha Krishna Collection', desc: 'Divine love in every page', price: '₹2,499', img: 'https://encrypted.google.com/images?q=tbn:TJeQSmH4czjPHM' },
        { name: 'Vrindavan Memories', desc: 'The land of eternal play', price: '₹1,999', img: 'https://encrypted.google.com/images?q=tbn:x1l-qeuCrCj_WM' },
        { name: 'Divine Art Collection', desc: 'Sacred artistry', price: '₹3,299', img: 'https://encrypted.google.com/images?q=tbn:ZIctezZ2lb_rNM' },
        { name: 'Wedding Memories', desc: 'Your eternal story', price: '₹4,499', img: 'https://encrypted.google.com/images?q=tbn:-lAh6HLXn243AM' }
    ];
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = data.map(item => `
        <div class="collection-card">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <div class="collection-info">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="price">${item.price}</div>
                <button class="btn-secondary" style="margin-top:12px; padding:8px 24px;">Explore</button>
            </div>
        </div>
    `).join('');
}

// ----- PRODUCT CARDS -----
function initProductCards() {
    const data = [
        { name: 'Eternal Radha', category: 'Radha Krishna', price: '₹1,899', img: 'https://encrypted.google.com/images?q=tbn:T6sauBG2SLsNHM' },
        { name: 'Vrindavan Dawn', category: 'Vrindavan', price: '₹1,499', img: 'https://encrypted.google.com/images?q=tbn:o3E3mWSZqW1YHM' },
        { name: 'Divine Union', category: 'Wedding', price: '₹2,299', img: 'https://encrypted.google.com/images?q=tbn:oYglQWC6wbIkwM' },
        { name: 'Sacred Lotus', category: 'Spiritual', price: '₹1,799', img: 'https://encrypted.google.com/images?q=tbn:OWcoLjJNMdcT0M' }
    ];
    const grid = document.getElementById('productGrid');
    grid.innerHTML = data.map(item => `
        <div class="product-card">
            <img src="${item.img}" alt="${item.name}" loading="lazy" />
            <h4>${item.name}</h4>
            <div class="category">${item.category}</div>
            <div class="price">${item.price}</div>
            <div class="actions">
                <button onclick="addToCart('${item.name}', '${item.price}')">Add to Cart</button>
                <button><i class="far fa-heart"></i></button>
            </div>
        </div>
    `).join('');
}

// ----- TESTIMONIALS -----
function initTestimonials() {
    const data = [
        { name: 'Priya Sharma', text: 'The most beautiful album I have ever owned. Truly divine.', stars: 5 },
        { name: 'Arjun Mehta', text: 'Every page tells a story. The craftsmanship is unmatched.', stars: 5 },
        { name: 'Radhika Rao', text: 'A spiritual experience. The golden details are breathtaking.', stars: 5 }
    ];
    const grid = document.getElementById('testimonialGrid');
    grid.innerHTML = data.map(item => `
        <div class="testimonial-card">
            <div class="name">${item.name}</div>
            <div class="stars">${'★'.repeat(item.stars)}</div>
            <p>${item.text}</p>
        </div>
    `).join('');
}

// ----- GALLERY -----
function initGallery() {
    const images = [
        'https://encrypted.google.com/images?q=tbn:u70Iuv9YNB15QM',
        'https://encrypted.google.com/images?q=tbn:T6sauBG2SLsNHM',
        'https://encrypted.google.com/images?q=tbn:4G9I7yCrjx0GNM',
        'https://i.pinimg.com/736x/ff/8b/95/ff8b950b2c935bb33f7f13a0be2b39c1.jpg',
        'https://encrypted.google.com/images?q=tbn:x1l-qeuCrCj_WM',
        'https://encrypted.google.com/images?q=tbn:oYglQWC6wbIkwM'
    ];
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = images.map(src => `
        <img src="${src}" loading="lazy" />
    `).join('');
}

// ----- BEFORE/AFTER SLIDER -----
function initBeforeAfter() {
    const slider = document.getElementById('baSlider');
    const handle = document.getElementById('baHandle');
    let isDragging = false;
    const update = (x) => {
        const rect = slider.getBoundingClientRect();
        let pos = (x - rect.left) / rect.width;
        pos = Math.max(0, Math.min(1, pos));
        const after = slider.querySelector('.ba-after');
        after.style.clipPath = `inset(0 ${(1 - pos) * 100}% 0 0)`;
        handle.style.left = pos * 100 + '%';
    };
    handle.addEventListener('mousedown', (e) => { isDragging = true; e.preventDefault(); });
    document.addEventListener('mousemove', (e) => { if (isDragging) update(e.clientX); });
    document.addEventListener('mouseup', () => { isDragging = false; });
    // touch support
    handle.addEventListener('touchstart', (e) => { isDragging = true; });
    document.addEventListener('touchmove', (e) => { if (isDragging) update(e.touches[0].clientX); });
    document.addEventListener('touchend', () => { isDragging = false; });
}

// ----- HERO ALBUM 3D TILT -----
function initHeroAlbumTilt() {
    const album = document.querySelector('.album-mockup');
    if (!album) return;
    document.addEventListener('mousemove', (e) => {
        const rect = album.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        const rotY = dx * 10;
        const rotX = -dy * 10;
        album.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    });
    album.addEventListener('mouseleave', () => {
        album.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}

// ----- NAVBAR SCROLL -----
function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// ----- MOBILE MENU -----
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('mobileMenu');
    const close = document.getElementById('mobileMenuClose');
    toggle.addEventListener('click', () => menu.classList.add('open'));
    close.addEventListener('click', () => menu.classList.remove('open'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// ----- SEARCH OVERLAY -----
function initSearchOverlay() {
    const toggle = document.getElementById('searchToggle');
    const overlay = document.getElementById('searchOverlay');
    const close = document.getElementById('searchClose');
    toggle.addEventListener('click', () => overlay.classList.add('open'));
    close.addEventListener('click', () => overlay.classList.remove('open'));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
}

// ----- CART DRAWER -----
function initCartDrawer() {
    const toggle = document.getElementById('cartToggle');
    const drawer = document.getElementById('cartDrawer');
    const close = document.getElementById('cartClose');
    toggle.addEventListener('click', () => drawer.classList.add('open'));
    close.addEventListener('click', () => drawer.classList.remove('open'));
}

// ----- ADD TO CART (global) -----
window.addToCart = function(name, price) {
    const drawer = document.getElementById('cartDrawer');
    const items = document.getElementById('cartItems');
    const total = document.getElementById('cartTotal');
    // remove empty message
    const empty = items.querySelector('.cart-empty');
    if (empty) empty.remove();
    // add item
    const div = document.createElement('div');
    div.style.cssText = 'display:flex; justify-content:space-between; padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.05);';
    div.innerHTML = `<span>${name}</span><span>${price}</span>`;
    items.appendChild(div);
    // update total
    const current = parseInt(total.textContent.replace(/[₹,]/g, '')) || 0;
    const add = parseInt(price.replace(/[₹,]/g, ''));
    total.textContent = '₹' + (current + add);
    // open drawer
    drawer.classList.add('open');
    // subtle notification
    const note = document.createElement('div');
    note.style.cssText = 'position:fixed; bottom:30px; left:50%; transform:translateX(-50%); background:rgba(230,194,140,0.15); backdrop-filter:blur(12px); padding:14px 32px; border-radius:60px; border:1px solid rgba(230,194,140,0.2); z-index:9999; font-size:0.9rem; letter-spacing:1px;';
    note.textContent = '✨ Added to your collection.';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 2000);
};