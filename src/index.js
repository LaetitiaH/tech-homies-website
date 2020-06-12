const eltButtonUp = document.getElementById('scroll_up');

eltButtonUp.addEventListener('click', () => window.scrollTo({top: 0, behavior:'smooth'}));


eltButtonUp.addEventListener('mouseover', () => eltButtonUp.style.cursor = "pointer");
