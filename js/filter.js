const category_container = document.getElementById('category');
const collection_container = document.getElementById('collection');
const color_container = document.getElementById('color');

function getCategory() {
   category_container.innerHTML = '';
   fetch(`http://localhost:3000/categories`)
      .then((res) => res.json())
      .then((data) => {
         category_container.innerHTML = data
            .map(
               (data) =>
                  ` <button class="tag" data-category=${
                     data.name
                  }>${data.name.replace(/-/g, ' ')}</button>`
            )
            .join('');
      });
}
function getCollection() {
   collection_container.innerHTML = '<div>Hi</div>';
   fetch(`http://localhost:3000/collection`)
      .then((res) => res.json())
      .then((data) => {
         collection_container.innerHTML = data
            .map(
               (data) =>
                  `<button class="tag" data-collection=${
                     data.name
                  }>${data.name.replace(/-/g, ' ')}</button>`
            )
            .join('');
      });
}
function getColor() {
   color_container.innerHTML = '';
   fetch(`http://localhost:3000/color`)
      .then((res) => res.json())
      .then((data) => {
         color_container.innerHTML = data
            .map(
               (data) =>
                  ` <button class="tag" data-color=${
                     data.name
                  }>${data.name.replace(/-/g, ' ')}</button>`
            )
            .join('');
      });
}
getCategory();
getColor();
getCollection();
