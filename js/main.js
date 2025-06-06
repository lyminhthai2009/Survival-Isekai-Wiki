document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // NƠI ĐỂ BẠN CẬP NHẬT CÁC TÍNH NĂNG MỚI CỦA SERVER
    // Chỉ cần thêm một dòng mới vào danh sách này, web sẽ tự cập nhật.
    // =================================================================
    const features = [
        {
            name: 'Hệ thống Rank',
            icon: 'fa-solid fa-crown', // Lấy tên icon từ Font Awesome
            url: 'features/he-thong-rank.html'
        },
        {
            name: 'Vũ khí Isekai',
            icon: 'fa-solid fa-wand-sparkles',
            url: 'features/vu-khi-isekai.html'
        },
        {
            name: 'Nhiệm vụ hàng ngày',
            icon: 'fa-solid fa-scroll',
            url: 'features/nhiem-vu.html'
        },
        {
            name: 'Các loại Boss',
            icon: 'fa-solid fa-dragon',
            url: 'features/boss.html'
        }
        // Thêm tính năng mới ở đây, ví dụ:
        // {
        //     name: 'Tính năng ABC',
        //     icon: 'fa-solid fa-star',
        //     url: 'features/tinh-nang-abc.html'
        // }
    ];

    // --- Phần mã tự động tạo danh sách tính năng ---
    const featureList = document.getElementById('feature-list');
    let featureHTML = '';
    features.forEach(feature => {
        featureHTML += `
            <li>
                <a href="${feature.url}">
                    <i class="${feature.icon}"></i>
                    ${feature.name}
                </a>
            </li>
        `;
    });
    featureList.innerHTML = featureHTML;

    // --- Phần mã điều khiển Menu (Sidebar) ---
    const menuIcon = document.getElementById('menu-icon');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function openMenu() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    menuIcon.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // --- Phần mã điều khiển menu con (Dropdown) ---
    const featuresMenu = document.querySelector('.features-menu');
    featuresMenu.addEventListener('click', function(event) {
        // Chỉ toggle khi click vào link chính, không phải link con
        if (event.target.closest('a') === this.querySelector('a')) {
            event.preventDefault(); // Ngăn chuyển trang khi click vào "Các tính năng chính"
            this.classList.toggle('open');
        }
    });

});