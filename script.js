const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));

document.querySelectorAll(".heart").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    btn.textContent = btn.classList.contains("active") ? "♥" : "♡";
  });
});

document.querySelector(".search-btn").addEventListener("click", () => {
  document.querySelector("#uylar").scrollIntoView({ behavior: "smooth" });
});

const menu = document.querySelector(".menu-btn");
menu.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "65px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "18px 25px";
  nav.style.background = "#fff";
  nav.style.flexDirection = "column";
  nav.style.gap = "15px";
});
