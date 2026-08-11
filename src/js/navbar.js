document.addEventListener('DOMContentLoaded', () => {
  function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../';
    return './';
  }
  const prefix = getPathPrefix();

  // Apply stored theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark');
  }

  // Apply stored direction (LTR/RTL)
  const currentDir = localStorage.getItem('direction') || 'ltr';
  document.documentElement.setAttribute('dir', currentDir);

  const styleTag = document.createElement('style');
  styleTag.textContent = `
    body { overflow-x: hidden !important; }
    [dir="rtl"] .header-inner { direction: rtl; }
    [dir="rtl"] .nav-list { direction: rtl; }
    [dir="rtl"] .hero-grid { direction: rtl; }
  `;
  document.head.appendChild(styleTag);

  // Active page detection helper
  const currentPath = window.location.pathname.toLowerCase();
  function isActive(pageName) {
    if (pageName === 'index' && (currentPath.endsWith('/') || currentPath.endsWith('index.html'))) return true;
    if (pageName === 'home-2' && currentPath.includes('home-2.html')) return true;
    if (pageName === 'services' && (currentPath.includes('services.html') || currentPath.includes('service-details.html'))) return true;
    if (pageName === 'about' && currentPath.includes('about.html')) return true;
    if (pageName === 'blog' && (currentPath.includes('blog.html') || currentPath.includes('blog-details.html'))) return true;
    if (pageName === 'contact' && currentPath.includes('contact.html')) return true;
    if (pageName === 'booking' && currentPath.includes('booking.html')) return true;
    return false;
  }

  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  if (navbarPlaceholder) {
    const hasHero = document.querySelector('.hero-wrapper, .hero') !== null;
    const headerClass = hasHero ? 'site-header' : 'site-header site-header-light';
    navbarPlaceholder.innerHTML = `
      <header class="${headerClass}" id="siteHeader">
        <div class="wrap header-inner">
          <a href="${prefix}index.html" class="brand" aria-label="Plumpin Home">
            <img src="${prefix}assets/img/favicon.png" alt="Plumpin Logo" class="brand-logo-img">
            <div class="brand-name">Plump<span>in</span></div>
          </a>
          
          <nav aria-label="Main Navigation">
            <ul class="nav-list">
              <li><a href="${prefix}index.html" class="${isActive('index') ? 'active' : ''}">Home</a></li>
              <li><a href="${prefix}public/pages/home-2.html" class="${isActive('home-2') ? 'active' : ''}">Home 2</a></li>
              <li><a href="${prefix}public/pages/about.html" class="${isActive('about') ? 'active' : ''}">About Us</a></li>
              <li><a href="${prefix}public/pages/services.html" class="${isActive('services') ? 'active' : ''}">Services</a></li>
              <li><a href="${prefix}public/pages/blog.html" class="${isActive('blog') ? 'active' : ''}">Blog</a></li>
              <li><a href="${prefix}public/pages/contact.html" class="${isActive('contact') ? 'active' : ''}">Contact</a></li>
            </ul>
          </nav>

          <div class="nav-actions">
            <!-- Tooltip explaining RTL Toggle -->
            <div class="tooltip-wrapper">
              <button id="rtlToggle" class="icon-btn rtl-btn" title="Switch text direction (LTR/RTL)" aria-label="Toggle LTR/RTL Text Direction">
                <span class="btn-lbl">${currentDir.toUpperCase()}</span>
              </button>
              <span class="tooltip-text">Switch layout text direction (LTR/RTL)</span>
            </div>

            <!-- Theme Toggle -->
            <button id="themeToggle" class="icon-btn" title="Toggle Light/Dark Theme" aria-label="Toggle Light/Dark Theme">
              <i class="fas ${currentTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>
            </button>

            <!-- Prominent Primary CTA: Book a Technician -->
            <a href="${prefix}public/pages/booking.html" class="nav-primary-cta">
              <i class="fas fa-calendar-check"></i>
              <span>Book a Technician</span>
            </a>

            <!-- Mobile Hamburger -->
            <button class="hamburger" id="hamburgerBtn" aria-label="Open navigation menu">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav" id="mobileNav">
        <button class="mobile-nav-close" id="mobileNavClose" aria-label="Close navigation menu"><i class="fas fa-times"></i></button>
        <a href="${prefix}index.html" class="${isActive('index') ? 'active' : ''}"> Home </a>
        <a href="${prefix}public/pages/home-2.html" class="${isActive('home-2') ? 'active' : ''}"> Home 2</a>
        <a href="${prefix}public/pages/about.html" class="${isActive('about') ? 'active' : ''}"> About Us</a>
        <a href="${prefix}public/pages/services.html" class="${isActive('services') ? 'active' : ''}"> Services</a>
        <a href="${prefix}public/pages/blog.html" class="${isActive('blog') ? 'active' : ''}"> Blog</a>
        <a href="${prefix}public/pages/contact.html" class="${isActive('contact') ? 'active' : ''}"> Contact Us</a>
        <div class="mobile-cta-wrap">
          <a href="${prefix}public/pages/booking.html" class="btn-primary-block" style="display:flex;justify-content:center;align-items:center">
            Book a Technician 
          </a>
        </div>
      </div>

      <!-- Persistent Floating Bottom Action Bar for Quick Conversions -->
      <div class="floating-cta-bar" id="floatingCtaBar">
        <div class="wrap floating-cta-inner">
          <div class="floating-info">
            <div class="pulse-indicator">
              <span class="pulse-dot"></span>
              <span class="pulse-text">24/7 Emergency Plumbers On Call</span>
            </div>
            <div class="floating-phone">
              <i class="fas fa-headset"></i> <strong>(555) 019-2834</strong> — <span>Avg. 30 min response</span>
            </div>
          </div>
          <div class="floating-btns">
            <a href="tel:5550192834" class="float-btn float-call">
              <i class="fas fa-phone-alt"></i> <span>Call Emergency</span>
            </a>
            <a href="${prefix}public/pages/booking.html" class="float-btn float-book">
              <i class="fas fa-calendar-check"></i> <span>Book a Technician</span>
            </a>
          </div>
        </div>
      </div>
    `;

    // Header scroll effect
    const siteHeader = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });

    // Mobile nav toggles
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');

    if (hamburgerBtn && mobileNav) {
      hamburgerBtn.addEventListener('click', () => mobileNav.classList.add('open'));
      mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));
      mobileNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.closest('a')) mobileNav.classList.remove('open');
      });
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        const icon = themeToggle.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
      });
    }

    // RTL Toggle
    const rtlToggle = document.getElementById('rtlToggle');
    if (rtlToggle) {
      rtlToggle.addEventListener('click', () => {
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('direction', newDir);
        const lbl = rtlToggle.querySelector('.btn-lbl');
        if (lbl) lbl.textContent = newDir.toUpperCase();
      });
    }
  }

  // Inject Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer class="site-footer">
        <div class="wrap">
          <div class="footer-top-grid">
            <div class="footer-brand-col">
              <a href="${prefix}index.html" class="brand">
                <img src="${prefix}assets/img/favicon.png" alt="Plumpin Logo" class="brand-logo-img">
                <div class="brand-name">Plump<span>in</span></div>
              </a>
              <p class="footer-desc">Premium residential and commercial plumbing services. 24/7 emergency dispatch, upfront transparent pricing, and 100% satisfaction guaranteed.</p>
              <div class="footer-trust-pills">
                <span class="trust-pill"><i class="fas fa-shield-alt"></i> Licensed & Insured</span>
                <span class="trust-pill"><i class="fas fa-star"></i> 4.9/5 Rating</span>
              </div>
            </div>

            <div class="footer-links-col">
              <h5>Quick Links</h5>
              <a href="${prefix}index.html">Home</a>
              <a href="${prefix}public/pages/home-2.html">Home 2</a>
              <a href="${prefix}public/pages/about.html">About Us</a>
              <a href="${prefix}public/pages/services.html">All Services</a>
              <a href="${prefix}public/pages/blog.html">Plumbing Blog</a>
              <a href="${prefix}public/pages/contact.html">Contact Us</a>
            </div>

            <div class="footer-links-col">
              <h5>Services Offered</h5>
              <a href="${prefix}public/pages/service-details.html?service=drain-cleaning">Drain Cleaning & Jetting</a>
              <a href="${prefix}public/pages/service-details.html?service=burst-pipe">Leak Detection & Burst Pipe</a>
              <a href="${prefix}public/pages/service-details.html?service=water-heater">Water Heater Installation</a>
              <a href="${prefix}public/pages/service-details.html?service=pipe-refitting">Pipe Installation & Fitting</a>
            </div>

            <div class="footer-contact-col">
              <h5>Emergency Hotline</h5>
              <p class="footer-phone-highlight"><i class="fas fa-phone-alt"></i> (555) 019-2834</p>
              <p class="footer-contact-item"><i class="fas fa-envelope"></i> support@plumpin.com</p>
              <p class="footer-contact-item"><i class="fas fa-map-marker-alt"></i> 124 Main Street, Suite 400, Metro City</p>
            </div>
          </div>

          <div class="footer-bottom">
            <span>&copy; 2026 Plumpin Plumbing Inc. All rights reserved.</span>
            <div class="footer-bottom-links">
              <a href="${prefix}public/pages/Privacy-policy.html">Privacy Policy</a>
              <a href="${prefix}public/pages/Terms-of-service.html">Terms of Service</a>
              <a href="${prefix}public/pages/FAQ.html">FAQs</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
});
