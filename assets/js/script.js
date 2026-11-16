 // Theme toggle
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    
    // Load saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      html.classList.remove('dark');
    } else if (savedTheme === 'dark') {
      html.classList.add('dark');
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      html.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });

    // Mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Smooth reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    
    reveals.forEach(el => observer.observe(el));

    // Contact form (demo only)
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.classList.remove('hidden');
      status.className = 'text-sm text-emerald-600 dark:text-pastel-mint';
      status.textContent = 'پیام شما با موفقیت ثبت شد. به زودی با شما تماس گرفته می‌شود.';
      form.reset();
      
      setTimeout(() => {
        status.classList.add('hidden');
      }, 5000);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });