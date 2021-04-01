const accordion = document.querySelectorAll('.filter-subheading');

accordion.forEach((acc) => {
   acc.addEventListener('click', () => {
      acc.classList.toggle('active');
      let panel = acc.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      } else {
         panel.style.maxHeight = panel.scrollHeight + 'px';
      }
   });
});
