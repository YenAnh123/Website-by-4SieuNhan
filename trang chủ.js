// Lấy danh sách các nút "Mua ngay"
const buyButtons = document.querySelectorAll(".buy-button");

// Lấy phần tử giỏ hàng
const cart = document.querySelector("#cart ul");

// Tạo mảng để lưu trữ sản phẩm trong giỏ hàng
const cartItems = [];

// Xử lý sự kiện khi nhấn nút "Mua ngay"
buyButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Lấy thông tin sản phẩm từ thuộc tính data của phần tử cha (product)
        const productElement = this.parentElement;
        const productId = productElement.getAttribute("data-id");
        const productName = productElement.getAttribute("data-name");
        const productPrice = productElement.getAttribute("data-price");

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingProduct = cartItems.find(item => item.id === productId);

        if (existingProduct) {
            // Nếu có, tăng số lượng
            existingProduct.quantity += 1;
        } else {
            // Nếu chưa, thêm sản phẩm vào mảng giỏ hàng
            cartItems.push({
                id: productId,
                name: productName,
                price: parseInt(productPrice),
                quantity: 1
            });
        }

        // Cập nhật giao diện giỏ hàng
        updateCartUI();
    });
});

// Hàm cập nhật giao diện giỏ hàng
function updateCartUI() {
    // Xóa danh sách cũ
    cart.innerHTML = "";

    // Duyệt qua các sản phẩm trong giỏ hàng và hiển thị
    cartItems.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - Giá: ${item.price} VND - Số lượng: ${item.quantity}`;
        cart.appendChild(cartItem);
    });
}
