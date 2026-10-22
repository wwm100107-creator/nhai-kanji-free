// Dữ liệu lộ trình tự học tiếng Nhật chuyên sâu từ 0 đến N1 (Chuẩn thi thật JLPT)
export const roadmapData = [
  {
    id: "zero_to_n5",
    level: "N5",
    title: "Mới Bắt Đầu → N5 (Nhập Môn & Tạo Nền)",
    subtitle: "Chinh phục bảng chữ cái, phát âm chuẩn tự nhiên và 25 bài sơ cấp nền tảng",
    badge: "Giai đoạn 1",
    tagColor: "from-sky-500 to-blue-600",
    overview: {
      duration: "2.5 – 3 tháng",
      totalHours: "150 – 200 giờ tự học (khoảng 2 tiếng/ngày)",
      vocabTarget: "~800 từ vựng",
      kanjiTarget: "100 – 120 chữ Hán căn bản (bộ thủ 1-5 nét)",
      grammarTarget: "25 bài sơ cấp Minna I (khoảng 60 mẫu câu)",
      jlptPassingScore: "≥ 80 / 180 điểm",
      sectionPassing: "Kiến thức NN + Đọc hiểu: ≥ 38/120 | Nghe hiểu: ≥ 19/60",
      examDate: "Kỳ thi tháng 7 hoặc tháng 12"
    },
    skills: {
      listening: {
        title: "Kỹ năng Nghe (Choukai)",
        target: "Bắt kịp tốc độ đọc chậm, hiểu đối thoại giới thiệu bản thân, số tiền, thời gian, phương hướng.",
        method: [
          "Quy trình Shadowing 5 bước: Nghe chay 2 lần -> Đọc script -> Shadowing có nhìn -> Shadowing nhắm mắt -> Tự ghi âm đối chiếu.",
          "Nghe các đoạn hội thoại thực tế bài 1-25 giáo trình Minna no Nihongo (không bật phụ đề tiếng Việt).",
          "Luyện nghe số đếm, giờ giấc (〜時, 〜分), ngày tháng, thứ trong tuần và các từ chỉ vị trí (trên, dưới, trong, ngoài)."
        ],
        resources: ["Audio Minna no Nihongo I", "Podcast: Comprehensible Japanese (Complete Beginner)", "Shadowing: Nihongo o Hanasou (Sơ cấp Bài 1-15)"]
      },
      speaking: {
        title: "Kỹ năng Nói (Kaiwa)",
        target: "Phản xạ chào hỏi chuẩn ngữ điệu, giới thiệu bản thân mạch lạc, gọi món ăn, hỏi đường.",
        method: [
          "Luyện phản xạ 'Self-talk' (tự độc thoại): Hàng ngày nhìn đồ vật xung quanh và tự gọi tên bằng tiếng Nhật.",
          "Phản xạ chia thể nhanh: Tập chia tức thì các động từ bài 1-25 sang thể ます / ました / ません / ませんでした.",
          "Áp dụng nguyên tắc 'Bắt chước cao độ' (Pitch Accent) ngay từ đầu để tránh nói giọng phẳng lì, lơ lớ."
        ],
        resources: ["Minna no Nihongo Hội thoại (Kaiwa)", "App HelloTalk / HiNative để giao lưu phản xạ"]
      },
      reading: {
        title: "Kỹ năng Đọc (Dokkai)",
        target: "Đọc trơn tru Hiragana, Katakana và đoạn văn ngắn (100–150 từ) có kèm Furigana.",
        method: [
          "2 tuần đầu tiên: Bắt buộc thuộc nằm lòng bảng chữ cái Hiragana & Katakana (không dùng Romaji từ tuần thứ 3).",
          "Đọc to thành tiếng (Sound reading): Giúp liên kết giữa mặt chữ, âm thanh và não bộ.",
          "Tập đọc hiểu các biển báo thông dụng tại Nhật (Lối vào, Lối ra, Giờ mở cửa, Giá tiền)."
        ],
        resources: ["Minna no Nihongo I - Dokkai 25 bài", "Tadoku Graded Readers (Level 0 - Siêu dễ)", "Truyện cổ tích song ngữ Nhật - Việt"]
      },
      writing: {
        title: "Kỹ năng Viết (Kanji & Output)",
        target: "Viết chuẩn nét 100 chữ Kanji N5, viết được đoạn văn ngắn giới thiệu bản thân.",
        method: [
          "Học Kanji bằng phương pháp CHIẾT TỰ & BỘ THỦ: Tuyệt đối không chép phạt một chữ 50 lần. Hãy phân tích bộ thủ (Ví dụ: 休 = Người tựa cây nghỉ ngơi).",
          "Mỗi mẫu ngữ pháp học xong: Tự viết 2-3 câu liên hệ trực tiếp đến đời sống cá nhân của mình.",
          "Viết nhật ký 3 dòng mỗi tối (Hôm nay dậy lúc mấy giờ, làm gì, cảm thấy thế nào)."
        ],
        resources: ["Kanji Look and Learn (Bài 1-10)", "214 Bộ thủ Khang Hy (tập trung 50 bộ căn bản)", "Bảng luyện viết ô chữ điền (Tian-grid)"]
      }
    },
    materials: {
      core: [
        { name: "Minna no Nihongo Sơ cấp 1 (Học từ bài 1 đến 25)", role: "Giáo trình xương sống ngữ pháp & từ vựng" },
        { name: "Kanji Look and Learn (Bài 1 - 10, ~160 chữ)", role: "Sách chiết tự Kanji bằng hình ảnh" },
        { name: "Minna no Nihongo Honsatsu (Bản dịch & Giải thích ngữ pháp tiếng Việt)", role: "Tra cứu nghĩa và cách dùng chuẩn" }
      ],
      supplementary: [
        { name: "Shadowing: Nihongo o Hanasou Sơ cấp", role: "Rèn phản xạ cơ miệng và ngữ điệu tự nhiên" },
        { name: "Anki / Nhai Kanji Flashcard", role: "Lặp lại ngắt quãng (SRS) chống quên từ vựng" }
      ]
    },
    examTactics: {
      timeAllocation: [
        { section: "Từ vựng (Goi)", time: "25 phút", tip: "Làm quyết đoán, mỗi câu dưới 30 giây, từ nào không biết thì chọn phương án đầu tiên nảy ra rồi đi tiếp." },
        { section: "Ngữ pháp + Đọc hiểu", time: "50 phút", tip: "Dành 20 phút cho Ngữ pháp, 30 phút cho Đọc hiểu. Đọc câu hỏi trước khi đọc đoạn văn." },
        { section: "Nghe hiểu (Choukai)", time: "30 phút", tip: "Ghi chú nhanh các mốc thời gian, số tiền và phương án đối thoại loại trừ." }
      ],
      trapsToAvoid: [
        "Bẫy phát âm Katakana: Nhầm lẫn giữa các âm ngắn/âm ngắt (ット) và âm kéo dài (ー).",
        "Bẫy trợ từ: Nhầm lẫn giữa に (mốc thời gian cụ thể) và で (nơi chốn xảy ra hành động).",
        "Bẫy nghe tranh ảnh: Người nói thường phủ định phương án ban đầu ở câu cuối cùng (VD: 'A nhé! À thôi, đổi thành B đi')."
      ]
    },
    dailyRoutine: [
      { time: "15 phút sáng", task: "Lật 20 thẻ Flashcard Kanji/Từ vựng trên điện thoại (SRS) ôn tập trí nhớ." },
      { time: "45 phút tối (Phần 1)", task: "Học 1 bài ngữ pháp mới trong Minna, ghi chép cấu trúc và tự đặt 3 câu ví dụ." },
      { time: "30 phút tối (Phần 2)", task: "Luyện bài tập Đọc hiểu hoặc Nghe hiểu đi kèm bài học." },
      { time: "15 phút trước khi ngủ", task: "Shadowing 2 đoạn hội thoại ngắn để tai quen âm thanh người Nhật." }
    ],
    milestones: [
      "Thuộc nhuần nhuyễn 2 bảng chữ cái Hiragana & Katakana không cần tra cứu",
      "Làm chủ 50 bộ thủ thông dụng và 100 chữ Kanji N5 chiết tự",
      "Nắm chắc cách chia thể Động từ: ます, ました, ません, ませんでした",
      "Thuộc quy tắc trợ từ nền tảng: は, が, を, に, で, へ, と, から, まで",
      "Giải thử 2 đề thi JLPT N5 chính thức đạt trên 110/180 điểm"
    ]
  },

  {
    id: "n5_to_n4",
    level: "N4",
    title: "N5 → N4 (Tăng Tốc Đột Phá & Làm Chủ Thể Động Từ)",
    subtitle: "Làm chủ 12 thể biến đổi động từ, giao tiếp tình huống hàng ngày và văn bản đời sống",
    badge: "Giai đoạn 2",
    tagColor: "from-emerald-500 to-teal-600",
    overview: {
      duration: "3 – 3.5 tháng",
      totalHours: "200 – 250 giờ tự học",
      vocabTarget: "Lũy kế ~1.500 từ vựng",
      kanjiTarget: "~300 chữ Hán (nắm thêm 100 bộ thủ)",
      grammarTarget: "Minna no Nihongo II (Bài 26 - 50, làm chủ toàn bộ các thể)",
      jlptPassingScore: "≥ 90 / 180 điểm",
      sectionPassing: "Kiến thức NN + Đọc hiểu: ≥ 38/120 | Nghe hiểu: ≥ 19/60",
      examDate: "Kỳ thi tháng 7 hoặc tháng 12"
    },
    skills: {
      listening: {
        title: "Kỹ năng Nghe (Choukai)",
        target: "Nghe hiểu tốc độ tự nhiên về đời sống, hội thoại xin phép, từ chối, giải thích lý do.",
        method: [
          "Bắt đầu làm quen với cách nói nuốt âm, nói tắt của người Nhật: 〜てる (〜ている), 〜なきゃ (〜なければならない), 〜とく (〜ておく).",
          "Luyện nghe hiểu dạng bài 'Phản xạ câu ngắn' (即時応答): Nghe một câu hỏi và chọn câu đáp lại phù hợp trong 3 giây.",
          "Nghe podcast hàng ngày khi làm việc nhà hoặc di chuyển (Comprehensible Japanese cấp độ Elementary)."
        ],
        resources: ["Audio Minna no Nihongo II", "Podcast: Nihongo con Teppei for Beginners", "Shadowing Nihongo o Hanasou (Bài 16-35)"]
      },
      speaking: {
        title: "Kỹ năng Nói (Kaiwa)",
        target: "Nói được câu ghép phức tạp, biết đưa ra lý do khách quan/chủ quan, xin lời khuyên (〜たらいいですか).",
        method: [
          "Bắt buộc luyện phản xạ chia thể động từ đạt tốc độ 0.5s/thể (Thể Te, Thể Nai, Khả năng, Bị động, Sai khiến, Điều kiện).",
          "Thực hành giao tiếp tình huống: Đi khám bệnh, xin nghỉ phép, nhờ vả đối tác, giải thích lý do đi muộn (〜んです).",
          "Tập thuyết trình ngắn 1 phút bằng tiếng Nhật về chủ đề cuối tuần, món ăn yêu thích."
        ],
        resources: ["Bộ video Kaiwa Minna II", "Bảng chia thể động từ tự động trên web Nhai Kanji"]
      },
      reading: {
        title: "Kỹ năng Đọc (Dokkai)",
        target: "Đọc hiểu các thông báo hành chính, thư từ, tờ rơi quảng cáo và bài báo ngắn trên NHK Easy News.",
        method: [
          "Đọc NHK News Web Easy mỗi ngày 1 bài báo (đọc hiểu đại ý, không tra từng từ một ngay từ đầu).",
          "Kỹ thuật đọc lướt (Skimming) tìm từ khóa chỉ mốc thời gian, điều kiện (〜たら, 〜ば, 〜なら).",
          "Phân tích cấu trúc câu dài có mệnh đề định ngữ bổ nghĩa cho danh từ."
        ],
        resources: ["Minna no Nihongo II - Đọc hiểu 25 bài", "Trang tin tức NHK News Web Easy", "Tadoku Graded Readers (Level 1 & 2)"]
      },
      writing: {
        title: "Kỹ năng Viết (Kanji & Output)",
        target: "Viết được email xin việc/xin nghỉ phép đơn giản, nhật ký biểu cảm 150-200 chữ.",
        method: [
          "Kanji N4 có nhiều chữ cấu tạo từ 2-3 bộ thủ kết hợp. Học phân biệt các chữ dễ nhầm (VD: 待 - đợi vs 持 - cầm vs 特 - đặc biệt).",
          "Viết email ngắn theo khuôn mẫu chuẩn của người Nhật (Kính gửi, Thưa gửi, Cảm ơn vì đã luôn giúp đỡ, Nội dung chính, Lời chúc kết thúc).",
          "Sử dụng các liên từ kết nối câu: それから, それで, しかし, でも, だから."
        ],
        resources: ["Kanji Look and Learn (Bài 11 - 32)", "Sách Minna Sakubun (Viết văn sơ cấp)"]
      }
    },
    materials: {
      core: [
        { name: "Minna no Nihongo Sơ cấp 2 (Bài 26 đến 50)", role: "Toàn bộ hệ thống thể động từ & kính ngữ sơ cấp" },
        { name: "Kanji Look and Learn (Bài 11 - 32, ~350 chữ)", role: "Kho chữ Hán sơ cấp trọng tâm" },
        { name: "Goukaku Dekiru N4 - N5", role: "Sách luyện đề thi thật format chuẩn" }
      ],
      supplementary: [
        { name: "Shin Nihongo no Kiso / Shadowing N4", role: "Luyện ngữ điệu đàm thoại thực chiến" },
        { name: "Nihongo Challenge N4 (Từ vựng & Kanji)", role: "Hệ thống từ vựng theo chủ đề minh họa" }
      ]
    },
    examTactics: {
      timeAllocation: [
        { section: "Kiến thức ngôn ngữ (Từ vựng)", time: "30 phút", tip: "Ưu tiên làm nhanh các câu tìm cách đọc Kanji và câu điền từ đồng nghĩa." },
        { section: "Ngữ pháp + Đọc hiểu", time: "60 phút", tip: "25 phút cho ngữ pháp (chú ý câu điền dấu sao ★), 35 phút cho bài đọc hiểu trung văn và tìm kiếm thông tin." },
        { section: "Nghe hiểu (Choukai)", time: "35 phút", tip: "Khi nghe dạng bài đối thoại không hình: Tập trung cao độ vào câu hỏi chốt ở cuối đoạn." }
      ],
      trapsToAvoid: [
        "Bẫy kính ngữ: Nhầm lẫn giữa Tôn kính ngữ (nâng người khác) và Khiêm nhường ngữ (hạ mình).",
        "Bẫy thể Sai khiến - Bị động: Xác định sai ai là người thực hiện hành động, ai là người bị ép/cho phép.",
        "Bẫy câu hỏi sắp xếp dấu sao (★): Hãy ghép các cụm từ đi liền với nhau thành một khối trước rồi mới xếp vào câu."
      ]
    },
    dailyRoutine: [
      { time: "20 phút sáng", task: "Ôn tập 30 thẻ Anki/Nhai Kanji từ vựng và Kanji N4." },
      { time: "50 phút tối (Phần 1)", task: "Học 1 bài ngữ pháp mới, thực hành chia động từ 12 thể tương ứng." },
      { time: "30 phút tối (Phần 2)", task: "Đọc 1 bài báo trên NHK News Web Easy và dịch thô sang tiếng Việt." },
      { time: "20 phút trước khi ngủ", task: "Luyện nghe Choukai đề thi thử hoặc podcast tiếng Nhật." }
    ],
    milestones: [
      "Nắm chắc và chia thành thạo 12 thể động từ trong vòng 1 giây",
      "Hiểu rõ và sử dụng đúng Kính ngữ (Sonkeigo) và Khiêm nhường ngữ (Kenjougo) cơ bản",
      "Đọc hiểu trôi chảy các bài báo trên NHK Easy News",
      "Làm chủ 300 chữ Kanji N4 theo phương pháp chiết tự",
      "Luyện đề thi thử JLPT N4 đạt từ 120/180 điểm trở lên"
    ]
  },

  {
    id: "n4_to_n3",
    level: "N3",
    title: "N4 → N3 (Cột Mốc Chuyển Giao & Bước Nhảy Vượt Bậc)",
    subtitle: "Vượt qua 'cửa tử' trung cấp, làm quen tiếng Nhật tự nhiên, đọc bài văn 450 chữ",
    badge: "Giai đoạn 3 (Quan trọng nhất)",
    tagColor: "from-amber-500 to-orange-600",
    overview: {
      duration: "5 – 6 tháng",
      totalHours: "350 – 450 giờ tự học chuyên sâu",
      vocabTarget: "Lũy kế ~3.000 từ vựng",
      kanjiTarget: "~650 chữ Hán (nắm 150 bộ thủ)",
      grammarTarget: "Khoảng 130 mẫu ngữ pháp trung cấp N3",
      jlptPassingScore: "≥ 95 / 180 điểm",
      sectionPassing: "Kiến thức NN: ≥ 19/60 | Đọc hiểu: ≥ 19/60 | Nghe hiểu: ≥ 19/60 (Bắt đầu áp dụng điểm liệt riêng)",
      examDate: "Kỳ thi tháng 7 hoặc tháng 12"
    },
    skills: {
      listening: {
        title: "Kỹ năng Nghe (Choukai)",
        target: "Nghe hiểu các bài hội thoại công sở, trường học, dạng câu hỏi tóm tắt ý chính và hành động tiếp theo.",
        method: [
          "Bắt đầu luyện chuyên biệt dạng bài 'Khái quát vấn đề' (概要理解) và 'Hành động tiếp theo' (課題理解).",
          "Nghe chép chính tả (Dictation) các đoạn văn ngắn 1-2 phút trong sách Shinkanzen Choukai.",
          "Chuyển dần sang nghe podcast native không giản lược: Nihongo con Teppei (Intermediate), Japanese with Shun."
        ],
        resources: ["Shinkanzen Master N3 Choukai (Bắt buộc)", "Mimikara Oboeru N3 Nghe hiểu", "Podcast: Nihongo con Teppei Z"]
      },
      speaking: {
        title: "Kỹ năng Nói (Kaiwa)",
        target: "Tranh luận nhẹ nhàng, nêu quan điểm cá nhân, diễn tả sự phỏng đoán, hối tiếc hoặc biện hộ khéo léo.",
        method: [
          "Luyện nói phản xạ với các cấu trúc phức tạp: 〜わけではない (không hẳn là), 〜はずだ (chắc chắn là), 〜に違いない.",
          "Áp dụng kỹ thuật Paraphrasing (diễn đạt lại bằng cách khác): Nếu quên một từ vựng, tập giải thích định nghĩa từ đó bằng tiếng Nhật đơn giản.",
          "Shadowing ở tốc độ 1.0x - 1.1x để bắt kịp nhịp điệu nói nhanh của người Tokyo."
        ],
        resources: ["Shadowing: Nihongo o Hanasou Trung cấp", "Kênh YouTube: Dogen (Học ngữ điệu & văn hóa Nhật)"]
      },
      reading: {
        title: "Kỹ năng Đọc (Dokkai)",
        target: "Đọc hiểu các bài nghị luận xã hội ngắn (Trung văn 450 chữ), thư cảm ơn, văn bản thông báo hợp đồng.",
        method: [
          "Chiến thuật Đọc hiểu Shinkanzen Master: Đọc câu hỏi trước -> Khoanh vùng đoạn chứa thông tin -> Tìm liên từ chuyển ý (しかし, つまり, したがって).",
          "Rèn kỹ năng ngắt câu dài: Tách mệnh đề chính và mệnh đề phụ để không bị rối nghĩa.",
          "Đo thời gian khi đọc: Mỗi bài đoản văn tối đa 2.5 phút, trung văn tối đa 7 phút."
        ],
        resources: ["Shinkanzen Master N3 Dokkai (Kinh thánh đọc hiểu)", "Soumatome N3 Đọc hiểu", "Trang tin tức Yahoo News Japan (mục đời sống)"]
      },
      writing: {
        title: "Kỹ năng Viết (Kanji & Output)",
        target: "Viết được bài luận ngắn 300–400 chữ nêu quan điểm cá nhân, thư phàn nàn/khiếu nại lịch sự.",
        method: [
          "Kanji N3 cần nắm vững QUY TẮC CHUYỂN ÂM Hán Việt: Ví dụ âm tận cùng 'T' sang On là 'TSU' hoặc 'CHI' (Nhất -> Ichi, Thất -> Shichi).",
          "Học theo cụm từ cố định (Collocations) thay vì học từ đơn lẻ (VD: 責任を取る - chịu trách nhiệm, 息を吸う - hít thở).",
          "Mỗi tuần viết một bài luận ngắn và đọc lại để rèn tính mạch lạc logic."
        ],
        resources: ["Kanji Look and Learn N3 (Bài 33 - 51)", "Mimikara Oboeru N3 Goi (Từ vựng)"]
      }
    },
    materials: {
      core: [
        { name: "Shinkanzen Master N3 (Trọn bộ 4 cuốn: Ngữ pháp, Đọc hiểu, Từ vựng, Nghe hiểu)", role: "Bộ sách vàng chuẩn format đề thi thật khó nhất" },
        { name: "Mimikara Oboeru N3 (Từ vựng & Ngữ pháp)", role: "Luyện nghe ngấm từ vựng qua file âm thanh lặp lại" },
        { name: "Bộ đề thi chính thức JLPT N3 các năm gần nhất", role: "Đo lường năng lực thực chiến" }
      ],
      supplementary: [
        { name: "Soumatome N3 (Ôn tập cấp tốc)", role: "Hệ thống lại kiến thức theo tuần trước khi thi" },
        { name: "Speed Master N3 Choukai", role: "Luyện bài tập nghe phản xạ nhanh" }
      ]
    },
    examTactics: {
      timeAllocation: [
        { section: "Kiến thức ngôn ngữ (Từ vựng)", time: "30 phút", tip: "Phân biệt từ gần nghĩa và từ đồng âm khác nghĩa. Làm nhanh để không mất sức." },
        { section: "Ngữ pháp + Đọc hiểu", time: "70 phút", tip: "Ngữ pháp tối đa 20 phút. Còn lại 50 phút trọn vẹn cho Đọc hiểu (Đoản văn 10p, Trung văn 25p, Tìm kiếm thông tin 15p)." },
        { section: "Nghe hiểu (Choukai)", time: "40 phút", tip: "Đặc biệt chú ý phần nghe không có hình (即時応答). Nghe xong chọn ngay trong 3 giây, tuyệt đối không chần chừ." }
      ],
      trapsToAvoid: [
        "Bẫy điểm liệt Nghe hiểu: Rất nhiều thí sinh điểm tổng trên 100 nhưng nghe chỉ 17/60 -> Trượt oan uổng.",
        "Bẫy quan điểm tác giả trong bài đọc: Đáp án chứa từ ngữ giống hệt trong bài thường là bẫy gài. Đáp án đúng thường được paraphrase lại bằng từ đồng nghĩa.",
        "Bẫy thời gian: Đọc hiểu N3 dài hơn N4 rất nhiều. Đọc câu nào quá 2 phút không ra thì đánh dấu lại rồi làm câu tiếp theo ngay."
      ]
    },
    dailyRoutine: [
      { time: "25 phút sáng", task: "Ôn tập 40 thẻ Anki từ vựng và Kanji N3 kèm phát âm Audio." },
      { time: "50 phút chiều/tối", task: "Học 3 mẫu ngữ pháp Shinkanzen Master N3, phân biệt cách dùng với các mẫu tương tự." },
      { time: "35 phút tối", task: "Làm 2 bài Đọc hiểu Shinkanzen Dokkai, bấm giờ nghiêm ngặt và tra cứu từ nối logic." },
      { time: "25 phút trước khi ngủ", task: "Luyện nghe Choukai hoặc nghe Podcast tiếng Nhật." }
    ],
    milestones: [
      "Vượt qua mốc 650 chữ Kanji N3 và quy tắc chuyển âm Hán Việt",
      "Làm chủ 130 mẫu ngữ pháp trung cấp và phân biệt được sắc thái tinh tế",
      "Đọc hiểu được văn bản 450 chữ mà không bị hết giờ",
      "Điểm nghe hiểu thử nghiệm ổn định trên 30/60 điểm",
      "Giải đề thi thử N3 thật đạt từ 110/180 điểm trở lên"
    ]
  },

  {
    id: "n3_to_n2",
    level: "N2",
    title: "N3 → N2 (Cột Mốc Nghề Nghiệp & Trưởng Thành Ngôn Ngữ)",
    subtitle: "Tấm vé vàng làm việc tại Nhật Bản, đọc hiểu báo chí xã luận, giao tiếp công sở chuyên nghiệp",
    badge: "Giai đoạn 4 (Bắt buộc cho công việc)",
    tagColor: "from-rose-500 to-red-600",
    overview: {
      duration: "6 – 8 tháng",
      totalHours: "550 – 650 giờ tự học có kỷ luật cao",
      vocabTarget: "Lũy kế ~6.000 từ vựng",
      kanjiTarget: "~1.000 – 1.200 chữ Hán",
      grammarTarget: "Khoảng 150 mẫu ngữ pháp trung-cao cấp",
      jlptPassingScore: "≥ 90 / 180 điểm",
      sectionPassing: "Kiến thức NN: ≥ 19/60 | Đọc hiểu: ≥ 19/60 | Nghe hiểu: ≥ 19/60",
      examDate: "Kỳ thi tháng 7 hoặc tháng 12"
    },
    skills: {
      listening: {
        title: "Kỹ năng Nghe (Choukai)",
        target: "Nghe hiểu thời sự, tin tức đài truyền hình NHK, thảo luận chiến lược kinh doanh, nghe bắt ý ngầm.",
        method: [
          "Nghe bản tin NHK News (bản thật, không dùng bản Easy nữa): Mỗi ngày nghe 1 bản tin thời sự 15 phút.",
          "Rèn kỹ năng nghe hiểu câu dài có nhiều tầng phủ định lồng nhau: 〜ないわけではない, 〜ざるを得ない.",
          "Luyện nghe dạng bài 'Tích hợp thông tin' (統合理解 - Mondai 5): Vừa nghe 2 người tranh luận vừa ghi chú bảng so sánh ưu/nhược điểm để chọn phương án tối ưu."
        ],
        resources: ["Shinkanzen Master N2 Choukai", "Bản tin thời sự NHK Radio News", "Kênh YouTube: Rebuild.fm, Horiemon, TEDx Kyoto"]
      },
      speaking: {
        title: "Kỹ năng Nói (Kaiwa)",
        target: "Thuyết trình công việc, đàm phán hợp đồng, báo cáo HORENSO chuẩn mực, kính ngữ công sở nhã nhặn.",
        method: [
          "Thực hành văn hóa kinh doanh Nhật Bản: Cách chào hỏi đối tác danh thiếp, cách xin lỗi giải trình sự cố.",
          "Tập tranh biện song song: Tự đưa ra luận điểm (賛成 - Đồng ý) rồi tự phản bác lại bằng luận điểm ngược lại (反対 - Phản đối).",
          "Luyện nói câu phức bằng cách ghép 2-3 mẫu ngữ pháp N2 trong một phát ngôn."
        ],
        resources: ["Sách: Business Japanese (Giao tiếp công sở)", "Sách: Shadowing Shokuba no Nihongo (Tiếng Nhật nơi làm việc)"]
      },
      reading: {
        title: "Kỹ năng Đọc (Dokkai)",
        target: "Đọc hiểu xã luận báo Asahi, bài phê bình văn học, văn bản hợp đồng kinh tế và bài đọc dài 800 từ.",
        method: [
          "Chiến lược phân bổ 105 phút: Khối thi gộp Từ vựng + Ngữ pháp + Đọc hiểu trong 105 phút duy nhất. Bắt buộc: 35 phút làm xong Từ vựng + Ngữ pháp, dành trọn vẹn 70 phút cho Đọc hiểu.",
          "Kỹ thuật đọc bài so sánh 2 văn bản (比較理解): Lập bảng nháp so sánh quan điểm của tác giả A và tác giả B về cùng một đề tài.",
          "Nhận diện 'Tư tưởng cốt lõi của tác giả' (筆者の主張): Thường nằm ở đoạn cuối cùng sau các từ chuyển ý như: ではないだろうか, と考える, べきである."
        ],
        resources: ["Shinkanzen Master N2 Dokkai (Bắt buộc)", "Báo điện tử Asahi Shimbun, Nikkei Business", "Bộ đề thi JLPT N2 thật 2012 - 2024"]
      },
      writing: {
        title: "Kỹ năng Viết (Kanji & Output)",
        target: "Viết email báo cáo công việc chuyên nghiệp, viết đơn giải trình, viết bài luận thể hiện lập trường.",
        method: [
          "Kanji N2: Nắm vững các chữ Hán trừu tượng và từ vựng 2 chữ Hán (Goi ghép). Nhớ từ qua gốc Hán Việt.",
          "Viết báo cáo theo cấu trúc PREP: Point (Luận điểm) -> Reason (Lý do) -> Example (Ví dụ chứng minh) -> Point (Khẳng định lại).",
          "Thành thạo cấu trúc viết email thương mại (Keigo Business Email)."
        ],
        resources: ["Shinkanzen Master N2 Goi & Kanji", "Sách: メール・ビジネス文書の書き方 (Cách viết email thương mại)"]
      }
    },
    materials: {
      core: [
        { name: "Shinkanzen Master N2 (Trọn bộ 4 kỹ năng)", role: "Bộ sách chuẩn mực đào tạo tư duy thi đậu N2 thật" },
        { name: "Mimikara Oboeru N2 (Goi & Bunpou)", role: "Học từ vựng và ngữ pháp qua tai nghe cực kỳ hiệu quả" },
        { name: "Bộ đề thi JLPT N2 chính thức (Koushiki Mondaishuu)", role: "Luyện đề thi thật bấm giờ nghiêm ngặt" }
      ],
      supplementary: [
        { name: "Nihongo Power Drill N2 (Moji/Goi & Bunpou)", role: "Luyện bài tập phản xạ tốc độ cao mỗi ngày 10 phút" },
        { name: "Try! N2 Japanese Language Proficiency Test", role: "Học ngữ pháp thông qua các bài đọc bối cảnh thực tế" }
      ]
    },
    examTactics: {
      timeAllocation: [
        { section: "Từ vựng (Moji/Goi)", time: "18 phút", tip: "Mỗi câu tối đa 20 giây. Bỏ qua ngay câu không nhớ để không chiếm dụng thời gian đọc hiểu." },
        { section: "Ngữ pháp (Bunpou)", time: "17 phút", tip: "Câu sao ★ tối đa 1 phút. Dành tổng cộng không quá 35 phút cho cả phần Từ vựng + Ngữ pháp." },
        { section: "Đọc hiểu (Dokkai)", time: "70 phút", tip: "Phân chia: Đoản văn (15p) -> Trung văn (25p) -> Trường văn & So sánh (20p) -> Tìm kiếm thông tin (10p)." },
        { section: "Nghe hiểu (Choukai)", time: "50 phút", tip: "Tập trung tuyệt đối vào Mondai 5 (Tích hợp thông tin) chiếm điểm số rất lớn." }
      ],
      trapsToAvoid: [
        "Bẫy cháy giờ đọc hiểu: Đây là lý do số 1 khiến 70% người thi trượt N2. Quá chậm ở phần từ vựng khiến không kịp đọc 2 bài văn dài.",
        "Bẫy từ láy (Gitaigo / Giongo): Rất hay xuất hiện trong bài thi N2 (ぎっしり, ぐっすり, さっぱり, うっかり).",
        "Bẫy phủ định kép: Câu văn chứa nhiều tầng phủ định để đánh lạc hướng thí sinh."
      ]
    },
    dailyRoutine: [
      { time: "30 phút sáng", task: "Ôn tập 50 thẻ Anki từ vựng và chữ Hán N2, nghe phát âm." },
      { time: "60 phút chiều/tối", task: "Làm bài tập Shinkanzen Master Ngữ pháp hoặc Đọc hiểu (luôn bấm đồng hồ đếm ngược)." },
      { time: "30 phút tối", task: "Đọc 1 bài báo trên Nikkei hoặc Asahi Shimbun, ghi lại từ mới." },
      { time: "30 phút trước khi ngủ", task: "Nghe đài NHK Radio News hoặc luyện 1 đề nghe hiểu Choukai." }
    ],
    milestones: [
      "Làm chủ 1.000 chữ Kanji N2 và khả năng đoán nghĩa từ vựng qua âm Hán Việt",
      "Quản lý thời gian hoàn hảo: 35 phút làm xong Từ vựng + Ngữ pháp",
      "Đọc hiểu trôi chảy bài trường văn 800 chữ trong vòng 10 phút",
      "Điểm số bài thi thử N2 đạt từ 115/180 điểm trở lên (không có phần nào dưới 25/60)",
      "Tự tin phỏng vấn việc làm bằng tiếng Nhật với nhà tuyển dụng"
    ]
  },

  {
    id: "n2_to_n1",
    level: "N1",
    title: "N2 → N1 (Đỉnh Cao Tiếng Nhật — Tinh Hoa Ngôn Ngữ)",
    subtitle: "Thấu suốt tư duy bản xứ, đọc hiểu triết học, nghệ thuật, xã luận hàn lâm và đàm phán cấp cao",
    badge: "Giai đoạn 5 (Cấp bậc cao nhất)",
    tagColor: "from-purple-600 via-indigo-600 to-slate-900",
    overview: {
      duration: "8 – 12 tháng",
      totalHours: "800 – 1.000 giờ tự học chuyên sâu & kiên trì bền bỉ",
      vocabTarget: "Vượt mốc 10.000 – 12.000 từ vựng chuyên ngành & thành ngữ",
      kanjiTarget: "2.136 chữ Hán thường dùng (Joyo Kanji toàn diện)",
      grammarTarget: "Hơn 120 mẫu ngữ pháp cổ văn, trang trọng & hiếm gặp",
      jlptPassingScore: "≥ 100 / 180 điểm",
      sectionPassing: "Kiến thức NN: ≥ 19/60 | Đọc hiểu: ≥ 19/60 | Nghe hiểu: ≥ 19/60",
      examDate: "Kỳ thi tháng 7 hoặc tháng 12"
    },
    skills: {
      listening: {
        title: "Kỹ năng Nghe (Choukai)",
        target: "Nghe hiểu các bài giảng đại học, tọa đàm triết học, tranh luận nghị viện, tiếng địa phương và khẩu ngữ cực nhanh.",
        method: [
          "Nghe các buổi Debate / Talkshow kinh tế, chính trị Nhật Bản trên TV Asahi (Houdou Station) hoặc YouTube chính luận.",
          "Luyện phản xạ ghi chú ký hiệu tốc ký (Shorthand note-taking) trong phần nghe tích hợp thông tin N1.",
          "Nghe hiểu các cấu trúc ngữ pháp cổ điển được lồng trong khẩu ngữ của người cao tuổi hoặc lãnh đạo."
        ],
        resources: ["Shinkanzen Master N1 Choukai", "Chương trình thời sự: WBS (World Business Satellite)", "Podcast: Bilingual News, NHK Special"]
      },
      speaking: {
        title: "Kỹ năng Nói (Kaiwa)",
        target: "Đàm phán thương vụ cấp cao, trình bày tham luận, bảo vệ luận điểm, sử dụng thành ngữ 4 chữ (Yojijukugo) tinh tế.",
        method: [
          "Nói tiếng Nhật ở mức độ Nuance (sắc thái biểu cảm): Biết cách diễn đạt ẩn ý tế nhị mà không làm mất lòng người nghe.",
          "Thực hành phát biểu theo văn phong nghị viện / hội nghị khoa học.",
          "Tham gia các cộng đồng chuyên môn bằng tiếng Nhật (IT, Tài chính, Y học)."
        ],
        resources: ["Sách: 日本語上級話者への道 (Con đường trở thành người nói tiếng Nhật cao cấp)", "Giao lưu học thuật song phương"]
      },
      reading: {
        title: "Kỹ năng Đọc (Dokkai)",
        target: "Đọc hiểu các bài xã luận hóc búa (Tensei Jingo), tiểu thuyết đương đại, văn bản học thuật và triết luận trừu tượng.",
        method: [
          "Đọc chuyên mục 'Thiên Thanh Nhân Ngữ' (天声人語 - Tensei Jingo) của báo Asahi Shimbun mỗi ngày.",
          "Nắm bắt tư duy triết học Nhật Bản: Phân biệt giữa Hiện thực (Tatemae) và Bản chất thực tâm (Honne) thể hiện qua ngôn từ tác giả.",
          "Phân bổ thời gian sống còn: 110 phút = 30 phút Từ vựng + Ngữ pháp, 80 phút cho Đọc hiểu cực dài."
        ],
        resources: ["Shinkanzen Master N1 Dokkai (Sách số 1 luyện thi N1)", "Asahi Shimbun Tensei Jingo", "Bộ đề thi thật JLPT N1 10 năm gần nhất"]
      },
      writing: {
        title: "Kỹ năng Viết (Kanji & Output)",
        target: "Soạn thảo văn bản quy phạm, bài báo nghiên cứu khoa học, hợp đồng pháp lý, thư ngỏ đối ngoại cấp cao.",
        method: [
          "Kanji N1: Đạt mốc 2.136 chữ Hán Joyo. Nắm chắc các chữ Hán hiếm, từ ghép 4 chữ (四字熟語: 一期一会, 臥薪嘗胆, 臨機応変).",
          "Viết luận văn phân tích đa chiều (Thesis statement & Counter-argument).",
          "Thành thạo văn phong viết luận hàn lâm (Văn phong である / だ thay vì です / ます)."
        ],
        resources: ["Shinkanzen Master N1 Goi", "Kanzen Master N1 Kanji", "Từ điển Thành ngữ 4 chữ Hán Nhật Bản"]
      }
    },
    materials: {
      core: [
        { name: "Shinkanzen Master N1 (Trọn bộ 4 cuốn)", role: "Giáo trình tiêu chuẩn cao nhất cho người muốn đỗ N1 điểm cao" },
        { name: "Try! N1 Japanese Language Proficiency Test", role: "Tổng hợp ngữ pháp N1 qua các văn bản bối cảnh thực tế" },
        { name: "Bộ đề thi chính thức JLPT N1 từ năm 2010 đến nay", role: "Tài liệu bắt buộc phải giải sạch trước ngày thi" }
      ],
      supplementary: [
        { name: "Nihongo Power Drill N1", role: "Luyện 30 đề thi cấp tốc phần Từ vựng & Ngữ pháp" },
        { name: "Sách Tensei Jingo (Asahi Shimbun)", role: "Nguồn văn phong đọc hiểu tinh tế chuẩn Nhật" }
      ]
    },
    examTactics: {
      timeAllocation: [
        { section: "Từ vựng (Goi)", time: "18 phút", tip: "Mỗi câu tối đa 20 giây. Bỏ qua ngay câu thành ngữ hiếm nếu không biết để giữ đầu óc tỉnh táo." },
        { section: "Ngữ pháp (Bunpou)", time: "17 phút", tip: "Tìm ngay cấu trúc chính và liên từ. Dành tối đa không quá 35 phút cho toàn bộ phần này." },
        { section: "Đọc hiểu (Dokkai)", time: "75 – 80 phút", tip: "Thứ tự tối ưu: Đoản văn (15p) -> Tìm kiếm thông tin (10p) -> Trung văn (25p) -> Trường văn & So sánh (25p)." },
        { section: "Nghe hiểu (Choukai)", time: "60 phút", tip: "Nghe hiểu N1 rất nhanh và có tiếng ồn nền thực tế. Bắt buộc ghi chép từ khóa logic." }
      ],
      trapsToAvoid: [
        "Bẫy suy đoán cảm tính: Đọc hiểu N1 không hỏi ý kiến của BẠN, mà hỏi suy nghĩ của TÁC GIẢ. Mọi suy diễn không có căn cứ từ văn bản đều là bẫy.",
        "Bẫy ngữ pháp cổ: Các cấu trúc văn học cổ như 〜であれ, 〜ずくめ, 〜を皮切りに, 〜ごとき dễ làm thí sinh hoang mang nếu chưa từng gặp.",
        "Bẫy đuối sức tâm lý: Bài thi N1 kéo dài gần 3 tiếng liên tục. Cần rèn luyện giải đề hoàn chỉnh vào đúng khung giờ thi thật để não bộ thích nghi."
      ]
    },
    dailyRoutine: [
      { time: "30 phút sáng", task: "Lật 60 thẻ Anki từ vựng N1 và thành ngữ 4 chữ Hán (Yojijukugo)." },
      { time: "60 phút chiều", task: "Làm 2 bài đọc hiểu trường văn Shinkanzen N1, tra cứu cấu trúc câu trừu tượng." },
      { time: "40 phút tối", task: "Đọc 1 bài xã luận Asahi Tensei Jingo và dịch tóm tắt luận điểm chính." },
      { time: "30 phút trước khi ngủ", task: "Nghe bản tin WBS hoặc thời sự chuyên sâu tiếng Nhật." }
    ],
    milestones: [
      "Hoàn thành toàn diện 2.136 chữ Hán Joyo và hàng trăm thành ngữ thông dụng",
      "Đọc hiểu các bài bình luận thời sự, kinh tế, triết học Nhật Bản với tốc độ 300 từ/phút",
      "Làm chủ 120 mẫu ngữ pháp N1 chuyên sâu và cổ văn",
      "Đạt điểm số bài thi thử JLPT N1 chính thức từ 110/180 điểm trở lên",
      "Đủ năng lực làm việc chuyên môn cấp cao, dịch thuật cabin hoặc nghiên cứu tại Nhật Bản"
    ]
  }
];
