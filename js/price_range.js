const price_range = document.querySelector('.price-range');
const price_display = document.querySelector('#selected-price');
price_range.addEventListener('change', () => {
   price_display.innerText = price_range.value;
});
