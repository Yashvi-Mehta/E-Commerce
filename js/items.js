const container = document.querySelector('.grid-container');
const search = document.querySelector('#search');
const searchbtn = document.querySelector('.search-bar');
const footer = document.querySelector('.pagination');

const BaseUrl = 'http://localhost:3000/items';

searchbtn.addEventListener('click', () => {
   if (search.value.trim() == '') {
      console.log('no value');
      init();
   } else {
      init(`?title=${search.value}`);
   }
});

function init(term = '') {
   container.innerHTML = '';
   fetch(`${BaseUrl}${term}`)
      .then((res) => res.json())
      .then((data) => {
         if (data.length == 0) {
            container.innerHTML =
               '<div class="no-result">Sorry, we could not find any results</div>';
            footer.style.display = 'none';
         } else {
            mapItems(data);
         }
      });
}

function mapItems(data) {
   container.innerHTML = data
      .map(
         (data) =>
            `<div class="item" >
                <div class="item-image">
                   <img
                      src=${data.img_url}
                      alt=${data.title}
                      class="item-photo"
                   />
                </div>
                <div class="details" >
                   <a href="detail.html" class="item-name" data-id=${data.id}>${
               data.title
            }</a>
                   <h4 class="item-category" >${data.category.replace(
                      /-/g,
                      ' '
                   )}</h4>

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

init();
