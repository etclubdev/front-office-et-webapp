export const ABOUTUS_TITLE = {
    firstPart: "Câu lạc bộ",
    secondPart: "Công nghệ kinh tế"
}

export const ABOUTUS_IMAGE = "";

export const CHARACTERISTICS_TITLE = {
    firstPart: "ĐIỂM ĐẾN LÝ TƯỞNG CHO SINH VIÊN",
    secondPart: "ĐAM MÊ ỨNG DỤNG KHOA HỌC CÔNG NGHỆ"
};
export const DEPARTMENT_TITLE = {
    firstPart: "ĐIỂM GIAO THOA TUYỆT VỜI GIỮA",
    secondPart: "CÔNG NGHỆ & KINH TẾ"
};
export const GETINVOLVED_CONTENT = {
    title: "CHƯƠNG TRÌNH TUYỂN CỘNG TÁC VIÊN THÁNG 10/2024",
    desc: "Nhanh tay nhấn “ĐĂNG KÝ NGAY” bên dưới để trở thành mảnh ghép đặc biệt của ET",
    signUp: "ĐĂNG KÝ NGAY"
}
export const INTRODUCTION_IMAGE = "https://res.cloudinary.com/dgqolusci/image/upload/v1758389265/introduction-min_ofuwdl.jpg"

export const PARTNERS_CONTENT = {
    title: "CHUYÊN GIA ĐỒNG HÀNH",
    desc: "ET chân thành cảm ơn các thầy cô/ anh chị đã đồng hành và ủng hộ hoạt động của CLB"
}
export const COMPANION_CONTENT = {
    title: "ĐỐI TÁC ĐỒNG HÀNH",
    desc: "ET chân thành cảm ơn các đơn vị đối tác đã đồng hành và ủng hộ hoạt động của CLB"
}
export const STATISTICS_TITLE = "NHỮNG CON SỐ ẤN TƯỢNG";
export const STATISTICS_IMAGE = "https://res.cloudinary.com/dgqolusci/image/upload/v1758384788/hoatdongET_upp7ie.png"

export const FAQ_TITLE = "CÂU HỎI THƯỜNG GẶP";

export const navbarLinks = [
    {
        id: "about",
        label: "Về ET Club",
        dropdown: true,
        items: [
            { id: "1st", label: "Giới thiệu", url: "/introduction" },
            { id: "2nd", label: "Cơ cấu tổ chức", url: "/hr-structure" },
        ]
    },
    { id: "activities", label: "Hoạt động", url: "/activities" },
    {
        id: "etzone",
        label: "ET Zone",
        dropdown: true,
        items: [
            { id: "1st", label: "ET News", url: "/et-news" },
            { id: "2nd", label: "ET Blog", url: "/et-blog" },
        ]
    },
    { id: "ctv", label: "Tìm kiếm CTV", url: "https://ctv2025.etclub.vn/" },
    { id: "search", label: "Tìm kiếm", url: "/search", search: true } 
];