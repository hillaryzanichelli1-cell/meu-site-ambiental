// script.js — animações, footer year, acessibilidade de modais
document.addEventListener('DOMContentLoaded', () => {

  // Sequência de animação para elementos com .fade-slide-up
  document.querySelectorAll('.fade-slide-up').forEach((el, i) => {
    el.style.animationDelay = (i * 120) + 'ms';
  });

  // Atualizar ano do rodapé
  document.querySelectorAll('#anoAtual').forEach(el => el.textContent = new Date().getFullYear());

  // Focus quando modal abrir (melhora acessibilidade)
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('shown.bs.modal', () => {
      const title = modal.querySelector('.modal-title');
      if(title) title.setAttribute('tabindex','-1'), title.focus();
    });
  });

  // Pequeno efeito ripple-like para outline buttons
  document.querySelectorAll('.btn-outline-v').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-3px)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0)');
  });

  // Ensure bootstrap tooltips (if used)
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (el) { return new bootstrap.Tooltip(el) });
});
