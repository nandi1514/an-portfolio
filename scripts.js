// toggle icon nav
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // <!-- STICKY NAVBAR -->
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// <!-- SCROLL REVEAL -->
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .skills", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//  <!-- TYPEDJS -->
const typed = new Typed(".multiple-text", {
  strings: ["", "Frontend Developer."],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var typedFooter = new Typed(".multiple-text-footer", {
  strings: ["", "by Akash Nandi.", "in 2023."],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// <!-- SEND EMAIL -->
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_6qjtr4s";
  const templateID = "template_8s6e0vm";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent successfully.");
    })
    .catch((error) => console.log(error));
}
