const pageNumbers = document.querySelectorAll('.page');
let activePage;
// const pageNumbers = Array.prototype.slice.call(pageNum);

pageNumbers.forEach((page) => {
   page.addEventListener('click', (e) => {
      e.preventDefault();
      activePage = document.querySelector('.active');
      if (activePage) {
         activePage.classList.remove('active');
      }
      page.classList.add('active');
   });
});
