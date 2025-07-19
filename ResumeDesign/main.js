/*
	Name: Emmanuel Kaye
	File: main.js
	Date:  17JUL2025
	This is the main javascript file for Emmanuel Kaye's Resume Design.
	*/
// Fade out loader when page fully loads
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Mouse-controlled background sparkle 
document.body.addEventListener("mousemove", (e) => {
  document.body.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #1e1e2f, #0f0f1b)`;
});

// Glow on flip-back reveal
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 25px #00fff2";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// Pulse effect when clicking contact links
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    link.style.transform = "scale(1.1)";
    setTimeout(() => link.style.transform = "scale(1)", 300);
  });
});

// Credits:
// Mousemove background effect adapted from Stack Overflow: https://stackoverflow.com/questions/3437786/