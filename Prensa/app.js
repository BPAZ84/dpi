// 1. Botón menú hamburguesa
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', (e) => {
  // Evita que el click en el botón cierre inmediatamente el menú
  e.stopPropagation();
  menu.classList.toggle('active');
});

// Cerrar menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
  // Si el menú está abierto y el click no se originó ni en el menú ni en el botón
  if (menu.classList.contains('active') && 
      !menu.contains(e.target) && 
      e.target !== menuButton) {
    menu.classList.remove('active');
  }
});

// 2. Tabs Noticias / Eventos (opcional)
const tabNoticias = document.getElementById('tabNoticias');
const tabEventos = document.getElementById('tabEventos');

if (tabNoticias && tabEventos) {
  tabNoticias.addEventListener('click', () => {
    tabNoticias.classList.add('active');
    tabEventos.classList.remove('active');
    // Aquí podrías mostrar u ocultar la sección de noticias/eventos
  });

  tabEventos.addEventListener('click', () => {
    tabEventos.classList.add('active');
    tabNoticias.classList.remove('active');
  });
}

// 3. Filtros de noticias (opcional)
const filterAno = document.getElementById('filterAno');
const filterCategoria = document.getElementById('filterCategoria');
const newsList = document.getElementById('newsList');

if (filterAno && filterCategoria && newsList) {
  filterAno.addEventListener('change', filtrarNoticias);
  filterCategoria.addEventListener('change', filtrarNoticias);
}

function filtrarNoticias() {
  const anoSeleccionado = filterAno.value;
  const categoriaSeleccionada = filterCategoria.value;
  const newsCards = document.querySelectorAll('.news-card');

  newsCards.forEach(card => {
    const cardAno = card.getAttribute('data-ano');
    const cardCategoria = card.getAttribute('data-categoria');
    let mostrar = true;

    // Filtro de año
    if (anoSeleccionado !== 'todos' && cardAno !== anoSeleccionado) {
      mostrar = false;
    }

    // Filtro de categoría
    if (categoriaSeleccionada !== 'todas' && cardCategoria !== categoriaSeleccionada) {
      mostrar = false;
    }

    // Mostrar u ocultar la tarjeta
    card.style.display = mostrar ? 'flex' : 'none';
  });
}

// 4. Barra flotante de redes - cierre con la X
const closeFloatingBar = document.getElementById('closeFloatingBar');
const floatingBar = document.getElementById('floatingBar');

if (closeFloatingBar && floatingBar) {
  closeFloatingBar.addEventListener('click', (e) => {
    e.preventDefault();
    // Ocultamos la barra flotante
    floatingBar.style.display = 'none';
  });
}

 // Solo cierra si el menú está activo
 if (menu.classList.contains('active')) {
  // Si el click no está dentro de menuContainer => cierra
  if (!menuContainer.contains(event.target)) {
    menu.classList.remove('active');
  }
}

/************************************************
*  CERRAR BARRA FLOTANTE AL DAR CLIC A LA 'X'
***********************************************/
document.addEventListener('DOMContentLoaded', () => {
// Obtenemos el botón 'X' dentro de la barra flotante
const closeBtn = document.querySelector('.floating-social-bar .close');
if (closeBtn) {
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar un posible enlace
    const socialBar = document.querySelector('.floating-social-bar');
    if (socialBar) {
      socialBar.style.display = 'none'; // Oculta la barra flotante
    }
  });
}
});
