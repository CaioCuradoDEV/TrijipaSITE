document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault(); // Previne navegação
        const parent = toggle.closest(".dropdown");
  
        // Fecha os outros abertos
        document.querySelectorAll(".dropdown").forEach(drop => {
          if (drop !== parent) drop.classList.remove("open");
        });
  
        // Alterna visibilidade
        parent.classList.toggle("open");
      });
    });
  
    // Fecha dropdowns ao clicar fora
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(drop => drop.classList.remove("open"));
      }
    });
  });

const imagens = document.querySelectorAll('.galeria-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

imagens.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    lightbox.style.display = 'none';
  }
});
  