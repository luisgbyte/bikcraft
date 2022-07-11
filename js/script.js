// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(links) {
  const url = location.href;
  const href = links.href;

  if (url.includes(href)) {
    links.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Items do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
