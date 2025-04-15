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
  