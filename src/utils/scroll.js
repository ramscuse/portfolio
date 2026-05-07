export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = 60;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}
