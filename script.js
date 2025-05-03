// Set current year in footer
document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;

  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when a nav link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate position accounting for fixed navbar
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      // Simple validation
      if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        messageInput.value.trim() === ""
      ) {
        alert("Please fill all fields");
        return;
      }

      // In a real-world scenario, you would send this data to a server
      alert("Thank you for your message. I will get back to you soon!");
      contactForm.reset();
    });
  }

  // Add animation to elements when they come into view
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
