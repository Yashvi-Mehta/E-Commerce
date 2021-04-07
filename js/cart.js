const cart_container = document.querySelector('.cart-container');
var id = localStorage['data-id'];
let added_items = JSON.parse(localStorage.getItem('added-items'));

function fetch_cart(data) {
   data.forEach((data) => {
      console.log(data);
      fetch(`http://localhost:3000/items?id=${data}`)
         .then((res) => res.json())
         .then((data) => {
            if (data.length == 0) {
               cart_container.innerHTML =
                  '<div class="no-result">Sorry, we could not find any results</div>';
               footer.style.display = 'none';
            } else {
               displayDetails(data);
            }
         });
   });
}

function displayDetails(data) {
   cart_container.innerHTML = `<div class="item" >
                <div class="item-image">
                   <img
                      src=${data.img_url}
                      alt=${data.title}
                      class="item-photo"
                   />
                </div>
                <div class="details" >
                   <a href="detail.html" onclick='setData(${
                      data.id
                   })' class="item-name" data-id=${data.id}>${data.title}</a>
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
                      <i class="fas fa-cart-plus" onclick=addToCart(${
                         data.id
                      })></i>
                   </div>
                   <h4 class="item-price left-view">${data.price}</h4>
                </div>
             </div>`;
}

window.onload = fetch_cart(added_items);
