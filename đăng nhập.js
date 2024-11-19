//let password = document.getElementsByClass('#mk');
    //if(password.type == 'text'){
        //password.type = 'password';
    //}else{
        //password.type = 'text';
    //}

function hienMk() {
    const passwordInput = document.getElementById("mk");
    const eyeIcon = document.getElementById("eyeIcon"); // Sửa lại từ eyeInput thành eyeIcon

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye"); // Hiển thị mắt không gạch chéo
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); // Hiển thị mắt có gạch chéo
    }
}

//kiểm tra mk
// Hàm kiểm tra điều kiện mật khẩu
function isValidPassword(password) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@$!%*?&]/.test(password);
    
    return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}

// Hàm cập nhật trạng thái nút Đăng Nhập
function updateLoginButtonState() {
    const passwordInput = document.querySelector(".mk");
    const password = passwordInput.value;
    const loginButton = document.querySelector(".nut");
    const errorMessage = document.querySelector(".passwordError");
    
    // Bật nút nếu mật khẩu hợp lệ, ngược lại vô hiệu hóa nút
    if (isValidPassword(password)) {
        loginButton.disabled = false;
        errorMessage.style.display = "none"; // Ẩn thông báo lỗi nếu mật khẩu hợp lệ
    } else {
        loginButton.disabled = true;
        errorMessage.style.display = "block"; // Hiển thị thông báo lỗi nếu mật khẩu không hợp lệ
        // Đặt vị trí của tooltip ở bên phải của ô nhập mật khẩu
        //errorMessage.style.top = `${passwordInput.offsetTop}px`;
        //errorMessage.style.left = `${passwordInput.offsetLeft + passwordInput.offsetWidth + 15}px`;
    }
}

// Lắng nghe sự kiện nhập vào ô mật khẩu
document.querySelector(".mk").addEventListener("input", updateLoginButtonState);

//document.getElementById("mk1").addEventListener("input", updateLoginButtonState);
