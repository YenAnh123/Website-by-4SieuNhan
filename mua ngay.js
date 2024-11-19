// Lấy danh sách các nút "Mua ngay"
const buyButtons = document.querySelectorAll(".buy-button");

// Lấy phần tử giỏ hàng
const cart = document.getElementById("cart");

// Xử lý sự kiện khi nhấn nút "Mua ngay"
buyButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Lấy thông tin sản phẩm
        const productName = this.getAttribute("data-name");
        const productPrice = this.getAttribute("data-price");

        // Tạo một mục mới trong giỏ hàng
        const cartItem = document.createElement("li");
        cartItem.textContent = `${productName} - Giá: ${productPrice} VND`;

        // Thêm mục vào giỏ hàng
        cart.appendChild(cartItem);

        // Thông báo người dùng
        alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng!`);
    });
});
