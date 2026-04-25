/**
 * NanRezz Portfolio Logic
 * Custom Smooth Scroll & Hamburger Animation
 * Fully optimized with error handling and validation
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Portfolio Script Loaded Successfully');

    // Get DOM elements with validation
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Validate elements exist
    if (!hamburger || !navMenu) {
        console.error('❌ Error: Hamburger or Navigation Menu not found in DOM');
        return;
    }

    if (navLinks.length === 0) {
        console.warn('⚠️ Warning: No navigation links found');
    }

    // 1. Toggle Hamburger Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Lock/Unlock scroll body saat menu terbuka/tertutup
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            console.log('📌 Menu opened - scroll locked');
        } else {
            document.body.style.overflow = 'auto';
            console.log('📌 Menu closed - scroll unlocked');
        }
    });

    // 2. Smooth Scroll & Auto Close Menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump behavior

            // Get target ID from href attribute
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Validate target exists
            if (!targetSection) {
                console.warn(`⚠️ Warning: Target section "${targetId}" not found`);
                return;
            }

            // Auto close hamburger menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';

            // Execute Smooth Scroll dengan offset header (80px)
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            console.log(`🔗 Scrolling to ${targetId} at position ${offsetTop}px`);
        });
    });

    // 3. Header Blur Effect on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (!header) return;

        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        }
    });

    // 4. Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            console.log('🔐 Menu closed with Escape key');
        }
    });

    console.log('✅ All portfolio features initialized');
});
