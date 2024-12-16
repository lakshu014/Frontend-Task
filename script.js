// // Smooth scroll functionality
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });

// // Simple alert for buttons
// document.querySelectorAll(".btn").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Thank you for choosing Amiso! We'll get back to you shortly.");
//     });
// });



// Smooth scrolling for navigation links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
  
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector(".btn-toggle-menu");
  const nav = document.querySelector("nav");
  
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("d-none");
    });
  }
  
