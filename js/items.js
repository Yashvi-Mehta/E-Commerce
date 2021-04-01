const container = document.querySelector('.grid-container');
const search = document.querySelector('#search');
const searchbtn = document.querySelector('.search-bar');
const footer = document.querySelector('.pagination');

searchbtn.addEventListener('click', () => {
   init(`?title=${search.value}`);
});

function init(term = '') {
   container.innerHTML = '';
   fetch(`http://localhost:3000/items${term}`)
      .then((res) => res.json())
      .then((data) => {
         if (data.length == 0) {
            container.innerHTML =
               '<div class="no-result">Sorry, we could not find any results</div>';
            footer.style.display = 'none';
         } else {
            container.innerHTML = data
               .map(
                  (data) =>
                     `<div class="item">
                <div class="item-image">
                   <img
                      src=${data.img_url}
                      alt=${data.title}
                      class="item-photo"
                   />
                </div>
                <div class="details">
                   <h2 class="item-name">${data.title}</h2>
                   <h4 class="item-category">${data.category}</h4>

                   <h5 class="rating">
                   ${
                      data.star == 1
                         ? `<i class="fas fa-star"></i>`
                         : ` <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>`
                   }
                     
                  </h5>
                   <div class="add-to-cart left-view">
                      <i class="fas fa-cart-plus"></i>
                   </div>
                   <h4 class="item-price left-view">${data.price}</h4>
                </div>
             </div>`
               )

               .join('');
         }
      });
}
init();
