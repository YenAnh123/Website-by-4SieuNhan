// Hàm lọc danh sách
function filtershirt(event) {
    // Ngăn chặn hành động submit mặc định
    event.preventDefault();

    // Lấy từ khóa từ input và chuyển về chữ thường
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Lấy tất cả phần tử trong danh sách
    const items = document.querySelectorAll('.menu a');

    // Biến kiểm tra có kết quả hay không
    let coKetQua = false;

    // Duyệt qua danh sách và kiểm tra
    items.forEach((item) => {
        const title = item.getAttribute('title').toLowerCase();

        if (title.includes(query)) {
            item.style.display = ''; // Hiển thị nếu khớp
            coKetQua = true;         // Đánh dấu là có kết quả
        } else {
            item.style.display = 'none'; // Ẩn nếu không khớp
        }
    });

    // Hiển thị hoặc ẩn thông báo "không có kết quả"
    const thongBaoKhongCoKetQua = document.getElementById('no-results');
    if (coKetQua) {
        thongBaoKhongCoKetQua.style.display = 'none'; // Ẩn nếu có kết quả
    } else {
        thongBaoKhongCoKetQua.style.display = 'block'; // Hiển thị nếu không có kết quả
    }
}