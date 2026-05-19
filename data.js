// ============================================================
//  data.js — Dữ liệu câu hỏi (HARD CODE)
//  Thêm / sửa câu hỏi tại đây, code game không cần đụng.
//
//  Cấu trúc mỗi object:
//    guardian : emoji quái vật canh ải
//    name     : tên quái vật
//    q        : nội dung câu hỏi
//    opts     : mảng 4 lựa chọn (string)
//    ans      : index đáp án đúng (0 – 3)
//    explain  : giải thích hiển thị sau khi trả lời
// ============================================================

const QUESTIONS = [
  {
    guardian: "🧙‍♂️",
    name: "Pháp sư cổ đại",
    q: "Thủ đô của Việt Nam là thành phố nào?",
    opts: ["Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Huế"],
    ans: 0,
    explain:
      "Hà Nội là thủ đô của Việt Nam từ năm 1945, là trung tâm chính trị và văn hóa của cả nước.",
  },
  {
    guardian: "🐉",
    name: "Rồng lửa",
    q: "Trái Đất cách Mặt Trời khoảng bao nhiêu km?",
    opts: ["15 triệu km", "150 triệu km", "1,5 tỷ km", "15 tỷ km"],
    ans: 1,
    explain:
      "Khoảng cách trung bình Trái Đất – Mặt Trời là 150 triệu km, còn gọi là 1 đơn vị thiên văn (AU).",
  },
  {
    guardian: "🧟",
    name: "Zombie tiến sĩ",
    q: "Ai là tác giả của tác phẩm 'Truyện Kiều'?",
    opts: ["Hồ Xuân Hương", "Nguyễn Du", "Nguyễn Trãi", "Lê Quý Đôn"],
    ans: 1,
    explain:
      "Nguyễn Du (1765–1820) là đại thi hào dân tộc, tác giả Truyện Kiều — kiệt tác văn học chữ Nôm.",
  },
  {
    guardian: "🦁",
    name: "Sư tử thần",
    q: "Nước nào đông dân nhất thế giới hiện nay?",
    opts: ["Trung Quốc", "Hoa Kỳ", "Ấn Độ", "Indonesia"],
    ans: 2,
    explain:
      "Ấn Độ vượt qua Trung Quốc vào năm 2023 để trở thành quốc gia đông dân nhất thế giới.",
  },
  {
    guardian: "🤖",
    name: "Robot bảo vệ",
    q: "Ngôn ngữ lập trình nào chạy trực tiếp trên mọi trình duyệt web?",
    opts: ["Python", "Java", "JavaScript", "C++"],
    ans: 2,
    explain:
      "JavaScript là ngôn ngữ duy nhất chạy native trên trình duyệt, là trái tim của web hiện đại.",
  },
  {
    guardian: "🐺",
    name: "Sói bạch tuyết",
    q: "1 năm có bao nhiêu giây?",
    opts: [
      "31.536.000 giây",
      "8.760.000 giây",
      "86.400 giây",
      "3.153.600 giây",
    ],
    ans: 0,
    explain:
      "1 năm = 365 ngày × 24h × 3600s = 31.536.000 giây. Nhiều hơn bạn nghĩ phải không? 😄",
  },
  {
    guardian: "🧌",
    name: "Troll núi lửa",
    q: "Hành tinh nào lớn nhất trong Hệ Mặt Trời?",
    opts: ["Sao Thổ", "Sao Hỏa", "Sao Hải Vương", "Sao Mộc"],
    ans: 3,
    explain:
      "Sao Mộc (Jupiter) là hành tinh lớn nhất, thể tích bằng khoảng 1.321 lần Trái Đất.",
  },
  {
    guardian: "🦅",
    name: "Đại bàng thần",
    q: "Công thức hóa học của nước là gì?",
    opts: ["CO₂", "NaCl", "O₂", "H₂O"],
    ans: 3,
    explain:
      "Nước có công thức H₂O — 2 nguyên tử Hydro kết hợp với 1 nguyên tử Oxy.",
  },
  {
    guardian: "🧛",
    name: "Bá tước hút máu",
    q: "Bộ truyện 'Harry Potter' gồm bao nhiêu tập?",
    opts: ["5 tập", "6 tập", "7 tập", "8 tập"],
    ans: 2,
    explain:
      "Bộ Harry Potter của J.K. Rowling gồm 7 cuốn tiểu thuyết, xuất bản từ 1997 đến 2007.",
  },
  {
    guardian: "👾",
    name: "Vua quái vật cuối",
    q: "Cái gì có thể đi qua cửa kính mà không cần mở?",
    opts: ["Gió", "Nước", "Âm thanh", "Ánh sáng"],
    ans: 3,
    explain:
      "Ánh sáng xuyên qua kính mà không cần mở cửa — câu đố kinh điển! 😄 Chúc mừng, bạn đã thắng!",
  },
];