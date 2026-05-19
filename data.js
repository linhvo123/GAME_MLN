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
    guardian: "📈",
    name: "Dòng chảy phát triển",
    q: "Theo quan điểm biện chứng duy vật, phát triển là gì?",
    opts: [
      "Mọi sự vận động của sự vật, hiện tượng",
      "Sự vận động theo chiều hướng đi lên, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn",
      "Sự tuần hoàn, lặp đi lặp lại không thay đổi về chất",
      "Sự tăng lên hoặc giảm đi về mặt lượng"
    ],
    ans: 1,
    explain:
      "Theo quan điểm biện chứng duy vật, phát triển là sự vận động đi lên, từ thấp đến cao, từ kém hoàn thiện đến hoàn thiện hơn.",
  },

  {
    guardian: "🌀",
    name: "Tư duy biện chứng",
    q: "Điểm khác nhau cơ bản giữa quan điểm siêu hình và quan điểm biện chứng về sự phát triển là gì?",
    opts: [
      "Quan điểm siêu hình thừa nhận sự phát triển diễn ra theo đường xoáy ốc",
      "Quan điểm siêu hình coi phát triển chỉ là sự tăng/giảm về lượng, lặp đi lặp lại, không có sự thay đổi về chất",
      "Quan điểm biện chứng phủ nhận nguồn gốc bên trong của vận động",
      "Quan điểm biện chứng coi phát triển là sự tuần hoàn"
    ],
    ans: 1,
    explain:
      "Quan điểm siêu hình xem phát triển chỉ là biến đổi về lượng, không có sự thay đổi về chất.",
  },

  {
    guardian: "🧭",
    name: "Đường xoáy ốc",
    q: "Đặc điểm chung của sự phát triển là gì?",
    opts: [
      "Diễn ra hoàn toàn ngẫu nhiên, không có quy luật",
      "Tính tiến lên theo đường thẳng, không có bước thụt lùi",
      "Tính tiến lên theo đường xoáy ốc, có kế thừa, dường như lặp lại sự vật cũ nhưng trên cơ sở cao hơn",
      "Chỉ diễn ra trong lĩnh vực tự nhiên"
    ],
    ans: 2,
    explain:
      "Sự phát triển mang tính kế thừa và vận động theo đường xoáy ốc, cái mới ra đời trên nền tảng cao hơn.",
  },

  {
    guardian: "🌱",
    name: "Mầm sống mới",
    q: "Phát triển có những tính chất cơ bản nào?",
    opts: [
      "Tính chủ quan, tính cục bộ, tính tạm thời",
      "Tính khách quan, tính phổ biến, tính kế thừa, tính đa dạng phong phú",
      "Tính tuần hoàn, tính bảo thủ, tính ổn định",
      "Tính ngẫu nhiên, tính đơn giản, tính nhất thành bất biến"
    ],
    ans: 1,
    explain:
      "Phát triển có các tính chất cơ bản: khách quan, phổ biến, kế thừa và đa dạng phong phú.",
  },

  {
    guardian: "⚔️",
    name: "Hai quan niệm",
    q: "V.I. Lênin phân biệt hai quan niệm cơ bản về sự phát triển như thế nào?",
    opts: [
      "Phát triển là sự vận động từ cao xuống thấp và từ thấp lên cao",
      "Phát triển là sự lặp lại và phát triển là sự thống nhất của các mặt đối lập",
      "Phát triển là tuần hoàn và phát triển là tiến hóa",
      "Phát triển là bước nhảy vọt và phát triển là tiệm tiến"
    ],
    ans: 1,
    explain:
      "Lênin phân biệt quan niệm phát triển như sự lặp lại đơn thuần và phát triển thông qua sự thống nhất, đấu tranh của các mặt đối lập.",
  },

  {
    guardian: "🏛️",
    name: "Xã hội mới",
    q: "Trong lĩnh vực lịch sử - xã hội, đối tượng mới là gì?",
    opts: [
      "Là sự lặp lại của đối tượng cũ ở hình thức khác",
      "Là kết quả của hoạt động sáng tạo theo hướng tiến tiến của xã hội, phù hợp với lợi ích và nhu cầu của đông đảo nhân dân",
      "Là sự phủ định hoàn toàn, tuyệt đối đối tượng cũ",
      "Là sự áp đặt từ bên ngoài vào xã hội"
    ],
    ans: 1,
    explain:
      "Đối tượng mới trong xã hội là sản phẩm của sự sáng tạo tiến bộ, đáp ứng nhu cầu và lợi ích của nhân dân.",
  },

  {
    guardian: "🐢",
    name: "Tiến hóa chậm rãi",
    q: "Tiến hóa và tiến bộ khác nhau như thế nào?",
    opts: [
      "Tiến hóa là sự phát triển đột biến, tiến bộ là sự phát triển từ từ",
      "Tiến hóa là một dạng của phát triển diễn ra từ từ và thường là sự biến đổi hình thức; tiến bộ đề cập đến sự phát triển có giá trị tích cực, hướng tới cải thiện thực trạng xã hội",
      "Tiến hóa và tiến bộ hoàn toàn giống nhau",
      "Tiến hóa thuộc về tự nhiên, tiến bộ thuộc về con người"
    ],
    ans: 1,
    explain:
      "Tiến hóa thường diễn ra từ từ về hình thức, còn tiến bộ nhấn mạnh giá trị tích cực của sự phát triển xã hội.",
  },

  {
    guardian: "🔍",
    name: "Nhà nghiên cứu",
    q: "Nguyên tắc phát triển yêu cầu gì khi nghiên cứu sự vật, hiện tượng?",
    opts: [
      "Chỉ nhận thức sự vật ở trạng thái hiện tại, không cần dự báo tương lai",
      "Đặt đối tượng vào sự vận động, phát hiện xu hướng biến đổi và dự báo khuynh hướng phát triển trong tương lai",
      "Bảo tồn nguyên vẹn các yếu tố cũ, không thay đổi",
      "Phủ định hoàn toàn cái cũ để xây dựng cái mới"
    ],
    ans: 1,
    explain:
      "Nguyên tắc phát triển yêu cầu xem xét sự vật trong vận động và dự báo xu hướng tương lai.",
  },

  {
    guardian: "🌟",
    name: "Chiến thắng của cái mới",
    q: "Tại sao đối tượng mới tất yếu chiến thắng đối tượng cũ?",
    opts: [
      "Vì đối tượng mới xuất hiện sau nên luôn mạnh hơn",
      "Vì đối tượng mới có kết cấu và chức năng thích ứng với điều kiện mới, đồng thời nảy mầm từ trong lòng đối tượng cũ, phủ định những tiêu cực và bảo lưu những cái hợp lý",
      "Vì đối tượng cũ tự nguyện nhường chỗ cho đối tượng mới",
      "Vì đối tượng mới được tạo ra từ bên ngoài áp vào"
    ],
    ans: 1,
    explain:
      "Đối tượng mới thắng thế vì phù hợp điều kiện mới và kế thừa những yếu tố hợp lý của cái cũ.",
  },

  {
    guardian: "⚡",
    name: "Mâu thuẫn nội tại",
    q: "Theo quan điểm biện chứng duy vật, nguồn gốc bên trong của sự vận động và phát triển là gì?",
    opts: [
      "Tác động của các yếu tố bên ngoài sự vật",
      "Ý chí chủ quan của con người",
      "Đấu tranh giữa các mặt đối lập bên trong sự vật, hiện tượng",
      "Sự can thiệp của các lực lượng siêu nhiên"
    ],
    ans: 2,
    explain:
      "Nguồn gốc bên trong của vận động và phát triển là sự đấu tranh giữa các mặt đối lập trong bản thân sự vật.",
  },
];