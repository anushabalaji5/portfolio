// Fixed mobile menu functionality
const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Check if elements exist before adding event listeners
  if (!navLinks || !menuBtn) {
    console.error('Navigation elements not found. Check your HTML IDs.');
    return;
  }
  
  const menuBtnIcon = menuBtn.querySelector("i");
  
  if (!menuBtnIcon) {
    console.error('Menu button icon not found. Check your HTML structure.');
    return;
  }

  // Toggle mobile menu
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
    
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
    
    console.log('Menu toggled:', isOpen ? 'open' : 'closed');
  });

  // Close menu when clicking on links
  document.querySelectorAll('.nav__links a, #nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove("open");
      if (menuBtnIcon) {
        menuBtnIcon.setAttribute("class", "ri-menu-3-line");
      }
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove("open");
      if (menuBtnIcon) {
        menuBtnIcon.setAttribute("class", "ri-menu-3-line");
      }
      document.body.style.overflow = "";
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Enhanced ScrollReveal configuration
const scrollRevealOption = {
  distance: "30px",
  origin: "bottom",
  duration: 800,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  mobile: true,
  reset: true,
  viewFactor: 0.1
};

// Header section animations
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 200
});

ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 400
});

ScrollReveal().reveal(".header_content .header_btn", {
  ...scrollRevealOption,
  delay: 600
});

ScrollReveal().reveal(".header__image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800
});

// About section animations
ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left",
  delay: 200
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 400
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 600
});

ScrollReveal().reveal(".about_content .about_btn", {
  ...scrollRevealOption,
  delay: 800
});

// Education/Experience sections
ScrollReveal().reveal(".education_card, .experience_card", {
  ...scrollRevealOption,
  interval: 200
});

// Projects section
ScrollReveal().reveal(".projects__card", {
  ...scrollRevealOption,
  interval: 200,
  delay: 200
});

// Skills section
ScrollReveal().reveal(".skills__category", {
  ...scrollRevealOption,
  interval: 200
});

// Contact section
ScrollReveal().reveal(".contact__container > *", {
  ...scrollRevealOption,
  interval: 200
});

// Initialize progress bar animations
document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  const animateProgressBars = () => {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
        bar.style.transition = 'width 1.5s ease-in-out';
      }, 100);
    });
  };
  
  // Run once on page load if skills section is visible
  if (document.querySelector('.skills_container')) {
    animateProgressBars();
  }
  
  // Alternatively, use IntersectionObserver to trigger when scrolled to
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  const skillsSection = document.querySelector('.skills_container');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});
