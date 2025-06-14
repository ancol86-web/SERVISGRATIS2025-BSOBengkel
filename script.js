document.addEventListener("DOMContentLoaded", function () {
  console.log("Halaman Service Gratis BSO Bengkel HMDM ITS 2025 berhasil dimuat.");
  // Tambahkan fungsi JavaScript jika dibutuhkan di sini
});
// Animasi loading halaman
window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);
});

// Scroll ke atas saat klik judul
document.querySelectorAll("h1, h2").forEach(title => {
  title.style.cursor = "pointer";
  title.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});

// Hover animasi logo
const logo = document.querySelector('.logo-bso');
if (logo) {
  logo.addEventListener("mouseenter", () => {
    logo.style.transform = "rotate(10deg) scale(1.1)";
    logo.style.transition = "transform 0.3s";
  });
  logo.addEventListener("mouseleave", () => {
    logo.style.transform = "rotate(0deg) scale(1)";
  });
}
