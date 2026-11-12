function abrirPopup(src) {
  const popup = document.getElementById('popup');
  const imgPopup = document.getElementById('imagem-popup');

  imgPopup.src = src;
  popup.classList.add('ativo');
  document.body.style.overflow = 'hidden'; // trava o scroll da página
}

function fecharPopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('ativo');
  document.body.style.overflow = 'auto'; // libera o scroll
}

// Fechar com a tecla ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharPopup();
  }
});