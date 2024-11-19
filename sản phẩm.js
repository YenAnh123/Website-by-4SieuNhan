const container = document.getElementById("productContainer");

    function scrollRight() {
        container.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
}
const sanpham = document.querySelector('.sanpham');
const productWidth = document.querySelector('.product').offsetWidth;
function slideLeft() {
    sanpham.scrollLeft += productWidth; 
}
document.querySelector('.next-button').addEventListener('click', slideLeft);
