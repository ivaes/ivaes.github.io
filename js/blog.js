const updateCalendarStyle = () => {
  const calendar = document.querySelector('.calendar');
  calendar.classList[document.documentElement.scrollTop > 0 ? 'add' : 'remove']('scrolled');
}

window.addEventListener('scroll', updateCalendarStyle);
