// Dữ liệu ngữ pháp tiếng Nhật N5 - N1 & Mindmap
export const bunpoData = [
  {
    "id": "b1",
    "title": "〜は〜です",
    "level": "N5",
    "meaning": "A là B (Khẳng định danh từ)",
    "structure": "N1 は N2 です",
    "explanation": "Trợ từ は (đọc là 'wa') đánh dấu chủ đề của câu. です dùng để kết thúc câu thể lịch sự khẳng định.",
    "examples": [
      {
        "ja": "私はベトナム人です。",
        "vi": "Tôi là người Việt Nam."
      },
      {
        "ja": "マイク・ミラーさんはアメリカ人です。",
        "vi": "Anh Mike Miller là người Mỹ."
      }
    ],
    "mindmap": {
      "root": "N1 は N2 です",
      "branches": [
        {
          "concept": "Khẳng định",
          "rule": "〜です",
          "ex": "学生です (Là học sinh)"
        },
        {
          "concept": "Phủ định",
          "rule": "〜じゃありません / ではありません",
          "ex": "学生じゃありません (Không phải là học sinh)"
        },
        {
          "concept": "Nghi vấn",
          "rule": "〜ですか",
          "ex": "学生ですか (Có phải là học sinh không?)"
        },
        {
          "concept": "Quá khứ",
          "rule": "〜でした / ではありませんでした",
          "ex": "学生でした (Đã từng là học sinh)"
        }
      ]
    }
  },
  {
    "id": "b2",
    "title": "〜てください",
    "level": "N5",
    "meaning": "Xin hãy làm V... (Yêu cầu, nhờ vả lịch sự)",
    "structure": "Vて + ください",
    "explanation": "Dùng thể て của động từ kết hợp với ください để nhờ vả, yêu cầu ai đó làm việc gì một cách nhã nhặn.",
    "examples": [
      {
        "ja": "ちょっと待ってください。",
        "vi": "Xin hãy đợi một chút."
      },
      {
        "ja": "ここに名前を書いてください。",
        "vi": "Xin hãy viết tên vào đây."
      }
    ],
    "mindmap": {
      "root": "Vてください",
      "branches": [
        {
          "concept": "Nhờ vả thân mật",
          "rule": "Vて (bỏ ください)",
          "ex": "待って！ (Đợi đã!)"
        },
        {
          "concept": "Lịch sự trang trọng",
          "rule": "お + V bỏ ます + ください",
          "ex": "お入りください (Mời vào)"
        },
        {
          "concept": "Xin đừng làm",
          "rule": "Vないで + ください",
          "ex": "入らないでください (Xin đừng vào)"
        }
      ]
    }
  },
  {
    "id": "b3",
    "title": "〜たことがあります",
    "level": "N5",
    "meaning": "Đã từng làm V (Kể về kinh nghiệm trong quá khứ)",
    "structure": "Vた + ことがあります",
    "explanation": "Diễn tả một trải nghiệm hoặc kinh nghiệm mà người nói đã từng thực hiện trong quá khứ (không dùng cho thói quen hàng ngày).",
    "examples": [
      {
        "ja": "日本へ行ったことがあります。",
        "vi": "Tôi đã từng đi Nhật Bản rồi."
      },
      {
        "ja": "富士山に登ったことがありますか。",
        "vi": "Bạn đã từng leo núi Phú Sĩ bao giờ chưa?"
      }
    ],
    "mindmap": {
      "root": "Vたことがあります",
      "branches": [
        {
          "concept": "Đã từng",
          "rule": "Vた ことがあります",
          "ex": "寿司を食べたことがあります (Đã từng ăn sushi)"
        },
        {
          "concept": "Chưa từng",
          "rule": "一度も Vた ことがありません",
          "ex": "一度も行ったことがありません (Chưa một lần từng đi)"
        }
      ]
    }
  },
  {
    "id": "b4",
    "title": "〜んです / のです",
    "level": "N4",
    "meaning": "Giải thích lý do, nhấn mạnh tình huống, tò mò hỏi han",
    "structure": "Thể thông thường (TTT) + んです (Aな/N bỏ だ thành な)",
    "explanation": "Được dùng rất nhiều trong văn nói giao tiếp để giải thích hoàn cảnh, biểu thị sự tò mò muốn biết nguyên nhân.",
    "examples": [
      {
        "ja": "頭が痛いんです。",
        "vi": "Vì em bị đau đầu ạ (giải thích lý do)."
      },
      {
        "ja": "どうして遅れたんですか。",
        "vi": "Tại sao anh lại đến muộn vậy thế?"
      }
    ],
    "mindmap": {
      "root": "〜んです",
      "branches": [
        {
          "concept": "Hỏi lý do",
          "rule": "どうして〜んですか",
          "ex": "どうしたんですか (Có chuyện gì thế?)"
        },
        {
          "concept": "Giải thích",
          "rule": "〜んです",
          "ex": "電車が遅れたんです (Tại tàu bị trễ ạ)"
        },
        {
          "concept": "Mở đầu nhờ vả",
          "rule": "〜んですが、Vてください",
          "ex": "日本語を勉強したいんですが (Em muốn học tiếng Nhật nên...)"
        }
      ]
    }
  },
  {
    "id": "b5",
    "title": "〜たら / 〜ば (Điều kiện)",
    "level": "N4",
    "meaning": "Nếu... thì... / Sau khi... thì...",
    "structure": "Vたら / Vば / Aければ",
    "explanation": "Dùng để biểu thị giả định điều kiện hoặc hành động tiếp nối theo thời gian.",
    "examples": [
      {
        "ja": "雨が降ったら、出かけません。",
        "vi": "Nếu trời mưa thì tôi sẽ không đi ra ngoài."
      },
      {
        "ja": "安ければ、買います。",
        "vi": "Nếu rẻ thì tôi sẽ mua."
      }
    ],
    "mindmap": {
      "root": "Điều kiện tiếng Nhật",
      "branches": [
        {
          "concept": "〜たら",
          "rule": "Dùng phổ biến nhất, mọi ngữ cảnh",
          "ex": "時間があったら (Nếu có thời gian)"
        },
        {
          "concept": "〜ば",
          "rule": "Điều kiện hiển nhiên, tất yếu",
          "ex": "春になれば (Hễ xuân sang)"
        },
        {
          "concept": "〜と",
          "rule": "Quy luật tự nhiên, chỉ đường",
          "ex": "右へ曲がると (Rẽ phải là thấy)"
        },
        {
          "concept": "〜なら",
          "rule": "Tiếp nhận chủ đề của đối phương",
          "ex": "日本へ行くなら (Nếu mà đi Nhật thì...)"
        }
      ]
    }
  },
  {
    "id": "b6",
    "title": "〜わけではない / 〜わけがない",
    "level": "N3",
    "meaning": "Không hẳn là... / Tuyệt đối không có lý nào...",
    "structure": "TTT + わけではない / わけがない",
    "explanation": "わけではない: Phủ định một phần (không phải là hoàn toàn như thế). わけがない: Phủ định tuyệt đối (không thể nào có chuyện đó).",
    "examples": [
      {
        "ja": "嫌いなわけではないが、あまり食べたくない。",
        "vi": "Không hẳn là tôi ghét, nhưng tôi không muốn ăn lắm."
      },
      {
        "ja": "そんな簡単な問題、彼が間違えるわけがない。",
        "vi": "Câu hỏi dễ như vậy, không đời nào anh ấy lại làm sai được."
      }
    ],
    "mindmap": {
      "root": "Ngữ pháp 〜わけ",
      "branches": [
        {
          "concept": "わけではない",
          "rule": "Phủ định một phần (Không hẳn là)",
          "ex": "お金がないわけではない"
        },
        {
          "concept": "わけがない",
          "rule": "Tuyệt đối không thể (Làm gì có chuyện)",
          "ex": "勝てるわけがない"
        },
        {
          "concept": "わけにはいかない",
          "rule": "Không thể làm vì đạo lý/lương tâm",
          "ex": "休むわけにはいかない"
        }
      ]
    }
  },
  {
    "id": "b7",
    "title": "〜にしたがって / 〜につれて",
    "level": "N2",
    "meaning": "Cùng với việc A thay đổi, B cũng dần biến đổi theo",
    "structure": "Vる / N + にしたがって / につれて",
    "explanation": "Diễn tả sự thay đổi đồng thời theo một chiều hướng tỉ lệ thuận hoặc kéo theo giữa vế trước và vế sau.",
    "examples": [
      {
        "ja": "年をとるにしたがって、体力が衰えてくる。",
        "vi": "Càng nhiều tuổi thì thể lực càng suy giảm theo."
      },
      {
        "ja": "台風が近づくにつれて、風が強くなってきた。",
        "vi": "Khi bão càng tới gần thì gió càng lúc càng mạnh lên."
      }
    ],
    "mindmap": {
      "root": "Biến đổi tỉ lệ",
      "branches": [
        {
          "concept": "にしたがって",
          "rule": "Biến đổi kéo theo (cả văn viết & nói)",
          "ex": "標高が高くなるにしたがって"
        },
        {
          "concept": "につれて",
          "rule": "Diễn tiến tự nhiên theo thời gian",
          "ex": "時間が経つにつれて"
        }
      ]
    }
  },
  {
    "id": "b8",
    "title": "〜を皮切りに / 〜を皮切りにして",
    "level": "N1",
    "meaning": "Khởi đầu bằng..., mở màn với... rồi sau đó lan rộng",
    "structure": "N + を皮切りに(して) / を皮切りとして",
    "explanation": "Xuất phát từ từ da đầu (khởi điểm), dùng để chỉ một sự kiện mở màn tạo đà cho hàng loạt chuỗi hành động cùng quy mô tiếp nối.",
    "examples": [
      {
        "ja": "東京公演を皮切りに、全国ツアーがスタートした。",
        "vi": "Bắt đầu với buổi diễn tại Tokyo, tour lưu diễn toàn quốc đã chính thức khởi động."
      }
    ],
    "mindmap": {
      "root": "Khởi đầu N1",
      "branches": [
        {
          "concept": "を皮切りに",
          "rule": "Mở đầu một chuỗi sự kiện cùng loại phát triển",
          "ex": "東京を皮切りに全国へ"
        }
      ]
    }
  }
];
