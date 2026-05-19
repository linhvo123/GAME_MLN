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
    guardian: "📘",
    name: "Ngọn bút đỏ",
    q: "Ai là tác giả của bộ sách 'Tư bản luận'?",
    opts: ["Freud", "Marx", "Lenin", "Engels"],
    ans: 1,
    explain:
      "Karl Marx là tác giả của 'Tư bản luận', tác phẩm nền tảng của chủ nghĩa xã hội khoa học.",
  },
  {
    guardian: "🧨",
    name: "Làn gió cách mạng",
    q: "Ai là lãnh tụ chủ chốt của Cách mạng Tháng Mười Nga 1917?",
    opts: ["Stalin", "Trotsky", "Lenin", "Bukharin"],
    ans: 2,
    explain:
      "Vladimir Lenin lãnh đạo Đảng Bolshevik, dẫn đến thành công của Cách mạng Tháng Mười năm 1917.",
  },
  {
    guardian: "⚒️",
    name: "Búa liềm",
    q: "Khẩu hiệu nào sau đây là biểu tượng của phong trào vô sản?",
    opts: ["Tự do, bình đẳng, bác ái", "Nước nào cũng có chủ quyền", "Vô sản toàn thế giới, đoàn kết lại", "Nông dân làm chủ ruộng đất"],
    ans: 2,
    explain:
      "'Vô sản toàn thế giới, đoàn kết lại!' là khẩu hiệu quốc tế của phong trào công nhân và chủ nghĩa Mác.",
  },
  {
    guardian: "🎓",
    name: "Người học giả",
    q: "Khái niệm nào sau đây là trung tâm của lý luận Mác?",
    opts: ["Nền dân chủ tư sản", "Bầu cử phổ thông", "Giai cấp và đấu tranh giai cấp", "Lý tưởng cá nhân"],
    ans: 2,
    explain:
      "Marx coi đấu tranh giai cấp là động lực cơ bản của lịch sử và cách mạng xã hội.",
  },
  {
    guardian: "🌾",
    name: "Nông dân đỏ",
    q: "Trong kinh tế chính trị Mác-Lênin, 'vô sản' là gì?",
    opts: ["Giai cấp tư sản", "Nhóm chủ đất", "Công nhân không sở hữu tư liệu sản xuất", "Giới trí thức"],
    ans: 2,
    explain:
      "Vô sản là tầng lớp công nhân chỉ có sức lao động để bán và không sở hữu tư liệu sản xuất.",
  },
  {
    guardian: "📜",
    name: "Tài liệu lịch sử",
    q: "Tác phẩm nào của Lenin bàn về nhà nước và cách mạng?",
    opts: ["Nhà nước và cách mạng", "Chính trị và văn hóa", "Tư tưởng phê phán", "Lịch sử đảng Bolshevik"],
    ans: 0,
    explain:
      "'Nhà nước và cách mạng' là tác phẩm trọng yếu của Lenin về chức năng nhà nước trong xã hội chuyển tiếp.",
  },
  {
    guardian: "⚖️",
    name: "Cán cân đỏ",
    q: "Theo Marx, ai là người tạo ra giá trị thặng dư trong sản xuất tư bản?",
    opts: ["Nông dân", "Tư sản", "Vô sản", "Tiểu chủ"],
    ans: 2,
    explain:
      "Marx chỉ rõ giá trị thặng dư được tạo ra bởi lao động của tầng lớp vô sản trong hệ thống tư bản.",
  },
  {
    guardian: "🔥",
    name: "Ngọn lửa đấu tranh",
    q: "Tư tưởng Mác-Lênin coi 'Cách mạng vô sản' nhằm mục đích gì?",
    opts: ["Bảo vệ tư sản", "Duy trì chế độ phong kiến", "Thống nhất các nước tư bản", "Xóa bỏ tư hữu tư liệu sản xuất"],
    ans: 3,
    explain:
      "Cách mạng vô sản hướng tới xóa bỏ chế độ tư hữu tư liệu sản xuất và thiết lập chế độ xã hội chủ nghĩa.",
  },
  {
    guardian: "🕊️",
    name: "Hòa bình đỏ",
    q: "Trong lý luận Mác-Lênin, nhà nước chuyên chính vô sản dùng để làm gì?",
    opts: ["Bảo vệ chế độ tư sản", "Dập tắt mọi phong trào", "Bảo đảm chuyển tiếp sang xã hội không giai cấp", "Thực hiện chủ nghĩa cá nhân"],
    ans: 2,
    explain:
      "Nhà nước chuyên chính vô sản là công cụ để bảo đảm quá độ từ xã hội công nghiệp đến xã hội xã hội chủ nghĩa và chủ nghĩa cộng sản.",
  },
  {
    guardian: "🏆",
    name: "Cờ chiến thắng",
    q: "Ai là người cùng Marx viết Tuyên ngôn Đảng Cộng sản?",
    opts: ["Lenin", "Engels", "Proudhon", "Bakunin"],
    ans: 1,
    explain:
      "Friedrich Engels cùng Marx là đồng tác giả của Tuyên ngôn Đảng Cộng sản xuất bản năm 1848.",
  },
];