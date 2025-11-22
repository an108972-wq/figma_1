// Đợi trang tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Medifit Website Loaded Successfully!");

    // Xử lý nút "Sign up" trong phần Newsletter
    const signupBtns = document.querySelectorAll('.custom-btn');
    
    signupBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Nếu nút nằm trong form, ngăn việc load lại trang để demo
            if (btn.type === 'submit') {
                e.preventDefault(); 
                
                // Tìm input email gần nhất
                const input = btn.previousElementSibling; // Trường hợp input nằm ngay trước nút
                // Hoặc tìm trong cùng form
                const form = btn.closest('form');
                const emailInput = form ? form.querySelector('input[type="email"]') : null;

                if (emailInput && emailInput.value) {
                    alert(`Cảm ơn bạn! Email "${emailInput.value}" đã được đăng ký nhận ưu đãi 15%.`);
                    emailInput.value = ''; // Xóa ô nhập
                } else {
                    alert("Vui lòng nhập email của bạn.");
                }
            }
        });
    });

    // Hiệu ứng đơn giản cho các nút "Shop now" / "Discover now"
    const ctaLinks = document.querySelectorAll('.cta-link');
    ctaLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Chuyển hướng đến trang bộ sưu tập...");
        });
    });

});