/**
 * NanRezz Portfolio Logic
 * Custom Smooth Scroll & Hamburger Animation
 */

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Toggle Hamburger Menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Kunci scroll body saat menu terbuka
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // 2. Smooth Scroll & Auto Close Menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah loncatan kasar

            // Ambil ID target dari atribut href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Tutup menu hamburger secara otomatis
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';

            // Eksekusi Smooth Scroll dengan offset header (80px)
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Header Blur Effect on Scroll (Opsional untuk estetika)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    })
