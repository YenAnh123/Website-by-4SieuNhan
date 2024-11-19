function hienMk1() {
    const passwordInput = document.getElementById("mk1");
    const eyeIcon = document.getElementById("eyeIcon1"); // Sửa lại từ eyeInput thành eyeIcon

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