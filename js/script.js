const toggle = document.getElementById('toggle');
const toggle_bar = document.querySelector('.toggle-bar');

toggle_bar.addEventListener('click', () => {
   console.log('hi');
   document.body.classList.toggle('show-filter');
   toggle_bar.classList.toggle('active');
});
