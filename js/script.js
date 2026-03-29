document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('open');
    });
  }

  // Sticky Header Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Simple floating animation logic for images
  const floatingImages = document.querySelectorAll('.floating, .floating-slow');
  floatingImages.forEach((img, index) => {
    // Add slight random delay to make them float independently
    img.style.animationDelay = `${index * 0.5}s`;
  });

  // Initialize Swiper Hero
  if (typeof Swiper !== 'undefined') {
    const heroSwiper = new Swiper('.heroSwiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });

    // Initialize Category Swiper
    const categorySwiper = new Swiper('.categorySwiper', {
      slidesPerView: 1.5,
      spaceBetween: 15,
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }
    });

    // Initialize New Arrivals Swiper
    const newArrivalsSwiper = new Swiper('.newArrivalsSwiper', {
      slidesPerView: 1.4,   // mobile: ~71% active + clear peek on each side
      centeredSlides: true,
      loop: true,
      spaceBetween: 16,
      pagination: {
        el: '.newArrivalsSwiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.newArrivalsSwiper .swiper-button-next',
        prevEl: '.newArrivalsSwiper .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        }
      }
    });

    // Initialize Review Swiper
    const reviewSwiper = new Swiper('.reviewSwiper', {
      slidesPerView: 1.15,
      spaceBetween: 15,
      pagination: {
        el: '.reviewSwiper .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
  }
});
