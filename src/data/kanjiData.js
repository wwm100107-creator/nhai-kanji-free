// Dữ liệu Kanji chiết tự, sơ đồ tư duy, âm On/Kun & mẹo nhớ
export const kanjiData = [
  {
    "kanji": "休",
    "hanViet": "HƯU",
    "meaning": "Nghỉ ngơi, ngừng lại, an nhàn",
    "level": "N5",
    "strokes": 6,
    "kun": [
      "やす.む",
      "やす.まる",
      "やす.める"
    ],
    "on": [
      "キュウ"
    ],
    "radicals": [
      "亻",
      "木"
    ],
    "radicalNames": [
      "Bộ Nhân đứng (亻: người)",
      "Bộ Mộc (木: cây cối)"
    ],
    "mnemonic": "Người đứng (亻) tựa lưng vào gốc cây (木) để nghỉ ngơi (休) sau ngày dài làm việc mệt mỏi.",
    "phoneticRule": "Âm Hán Việt bắt đầu bằng 'H' thường chuyển sang âm On là 'K' hoặc 'KYU' (HƯU -> キュウ, HOA -> カ, HỌC -> ガク).",
    "mindmap": {
      "root": "休 (HƯU: Nghỉ ngơi)",
      "branches": [
        {
          "part": "亻 (Nhân đứng)",
          "meaning": "Con người đang đứng nghỉ",
          "compounds": [
            "休み (やすみ - Kỳ nghỉ)",
            "休日 (きゅうじつ - Ngày nghỉ)"
          ]
        },
        {
          "part": "木 (Mộc)",
          "meaning": "Cây cối che bóng mát",
          "compounds": [
            "休憩 (きゅうけい - Nghỉ giải lao)",
            "定休 (ていきゅう - Nghỉ định kỳ)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "休み",
        "furigana": "やすみ",
        "hanViet": "HƯU",
        "meaning": "Ngày nghỉ, kỳ nghỉ"
      },
      {
        "word": "休日",
        "furigana": "きゅうじつ",
        "hanViet": "HƯU NHẬT",
        "meaning": "Ngày nghỉ lễ, ngày phép"
      },
      {
        "word": "休憩",
        "furigana": "きゅうけい",
        "hanViet": "HƯU KHẾ",
        "meaning": "Nghỉ giải lao, xả hơi"
      },
      {
        "word": "夏休み",
        "furigana": "なつやすみ",
        "hanViet": "HẠ HƯU",
        "meaning": "Nghỉ hè"
      },
      {
        "word": "休業",
        "furigana": "きゅうぎょう",
        "hanViet": "HƯU NGHIỆP",
        "meaning": "Đóng cửa tạm ngừng kinh doanh"
      }
    ]
  },
  {
    "kanji": "日",
    "hanViet": "NHẬT",
    "meaning": "Mặt trời, ban ngày, ngày",
    "level": "N5",
    "strokes": 4,
    "kun": [
      "ひ",
      "-び",
      "-か"
    ],
    "on": [
      "ニチ",
      "ジツ"
    ],
    "radicals": [
      "日"
    ],
    "radicalNames": [
      "Bộ Nhật (日: mặt trời)"
    ],
    "mnemonic": "Vẽ hình mặt trời hình tròn có vệt sáng ở giữa, sau biến đổi thành hình chữ nhật có nét gạch ngang (日).",
    "phoneticRule": "Âm Hán Việt bắt đầu bằng 'NH' thường chuyển sang âm On là 'NICHI' hoặc 'JITSU' (NHẬT -> ニチ, NHẬP -> ニュウ).",
    "mindmap": {
      "root": "日 (NHẬT: Mặt trời, ngày)",
      "branches": [
        {
          "part": "Khung ngoài 冂",
          "meaning": "Hình dáng mặt trời tỏa sáng",
          "compounds": [
            "日本 (にほん - Nước Nhật)",
            "毎日 (まいにち - Hàng ngày)"
          ]
        },
        {
          "part": "Nét gạch trong 一",
          "meaning": "Tia sáng và nguồn năng lượng",
          "compounds": [
            "日曜日 (にちようび - Chủ nhật)",
            "日光 (にっこう - Ánh sáng mặt trời)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "日本",
        "furigana": "にほん",
        "hanViet": "NHẬT BẢN",
        "meaning": "Nước Nhật Bản"
      },
      {
        "word": "毎日",
        "furigana": "まいにち",
        "hanViet": "MỖI NHẬT",
        "meaning": "Mỗi ngày, hàng ngày"
      },
      {
        "word": "日曜日",
        "furigana": "にちようび",
        "hanViet": "NHẬT DIỆU NHẬT",
        "meaning": "Chủ nhật"
      },
      {
        "word": "誕生日",
        "furigana": "たんじょうび",
        "hanViet": "ĐẢN SINH NHẬT",
        "meaning": "Ngày sinh nhật"
      }
    ]
  },
  {
    "kanji": "月",
    "hanViet": "NGUYỆT",
    "meaning": "Mặt trăng, tháng",
    "level": "N5",
    "strokes": 4,
    "kun": [
      "つき"
    ],
    "on": [
      "ゲツ",
      "ガツ"
    ],
    "radicals": [
      "月"
    ],
    "radicalNames": [
      "Bộ Nguyệt (月: mặt trăng)"
    ],
    "mnemonic": "Mặt trăng khuyết hình lưỡi liềm uốn cong trên bầu trời đêm (月).",
    "phoneticRule": "Âm Hán Việt 'NG' chuyển sang On 'G' (NGUYỆT -> ゲツ / ガツ, NGUYÊN -> ゲン).",
    "mindmap": {
      "root": "月 (NGUYỆT: Mặt trăng, tháng)",
      "branches": [
        {
          "part": "Mặt trăng",
          "meaning": "Ánh trăng soi đêm",
          "compounds": [
            "月 (つき - Mặt trăng)",
            "満月 (まんげつ - Trăng tròn)"
          ]
        },
        {
          "part": "Thời gian",
          "meaning": "Đơn vị đo tháng trong năm",
          "compounds": [
            "一月 (いちがつ - Tháng một)",
            "今月 (こんげつ - Tháng này)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "今月",
        "furigana": "こんげつ",
        "hanViet": "KIM NGUYỆT",
        "meaning": "Tháng này"
      },
      {
        "word": "来月",
        "furigana": "らいげつ",
        "hanViet": "LAI NGUYỆT",
        "meaning": "Tháng sau"
      },
      {
        "word": "月曜日",
        "furigana": "げつようび",
        "hanViet": "NGUYỆT DIỆU NHẬT",
        "meaning": "Thứ hai"
      },
      {
        "word": "毎月",
        "furigana": "まいつき",
        "hanViet": "MỖI NGUYỆT",
        "meaning": "Hàng tháng"
      }
    ]
  },
  {
    "kanji": "木",
    "hanViet": "MỘC",
    "meaning": "Cây cối, gỗ",
    "level": "N5",
    "strokes": 4,
    "kun": [
      "き",
      "こ-"
    ],
    "on": [
      "ボク",
      "モク"
    ],
    "radicals": [
      "木"
    ],
    "radicalNames": [
      "Bộ Mộc (木: cây)"
    ],
    "mnemonic": "Hình cái cây có thân ở giữa (十), rễ đâm xuống đất và cành lá xòe sang hai bên (八) -> (木).",
    "phoneticRule": "Âm Hán Việt 'M' chuyển sang On 'M' hoặc 'B' (MỘC -> モク/ボク, MỤC -> モク).",
    "mindmap": {
      "root": "木 (MỘC: Cây cối)",
      "branches": [
        {
          "part": "Một cây 木",
          "meaning": "Cây đơn lẻ",
          "compounds": [
            "木曜日 (もくようび - Thứ năm)",
            "木材 (もくざい - Gỗ)"
          ]
        },
        {
          "part": "Nhiều cây ghép lại",
          "meaning": "Tạo thành rừng",
          "compounds": [
            "林 (はやし - Rừng thưa: 2 cây)",
            "森 (もり - Rừng rậm: 3 cây)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "木曜日",
        "furigana": "もくようび",
        "hanViet": "MỘC DIỆU NHẬT",
        "meaning": "Thứ năm"
      },
      {
        "word": "木",
        "furigana": "き",
        "hanViet": "MỘC",
        "meaning": "Cây cối, gỗ"
      },
      {
        "word": "木材",
        "furigana": "もくざい",
        "hanViet": "MỘC TÀI",
        "meaning": "Vật liệu gỗ"
      },
      {
        "word": "大木",
        "furigana": "たいぼく",
        "hanViet": "ĐẠI MỘC",
        "meaning": "Cây cổ thụ to lớn"
      }
    ]
  },
  {
    "kanji": "林",
    "hanViet": "LÂM",
    "meaning": "Rừng thưa, lùm cây",
    "level": "N5",
    "strokes": 8,
    "kun": [
      "はやし"
    ],
    "on": [
      "リン"
    ],
    "radicals": [
      "木",
      "木"
    ],
    "radicalNames": [
      "Bộ Mộc (木: cây cối)",
      "Bộ Mộc (木: cây cối)"
    ],
    "mnemonic": "Hai cái cây (木 + 木) đứng cạnh nhau tạo thành một khu rừng nhỏ, rừng thưa (林).",
    "phoneticRule": "Âm Hán Việt 'L' chuyển sang On 'R' (LÂM -> リン, LẬP -> リツ, LÃM -> ラン).",
    "mindmap": {
      "root": "林 (LÂM: Rừng thưa)",
      "branches": [
        {
          "part": "Cây bên trái 木",
          "meaning": "Hàng cây",
          "compounds": [
            "小林 (こばやし - Rừng nhỏ / họ Kobayashi)"
          ]
        },
        {
          "part": "Cây bên phải 木",
          "meaning": "Mở rộng rừng",
          "compounds": [
            "山林 (さんりん - Rừng núi)",
            "森林 (しんりん - Rừng rậm rạp)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "林",
        "furigana": "はやし",
        "hanViet": "LÂM",
        "meaning": "Rừng thưa"
      },
      {
        "word": "森林",
        "furigana": "しんりん",
        "hanViet": "SÂM LÂM",
        "meaning": "Rừng rú, rừng rậm"
      },
      {
        "word": "山林",
        "furigana": "さんりん",
        "hanViet": "SƠN LÂM",
        "meaning": "Rừng núi"
      },
      {
        "word": "林道",
        "furigana": "りんどう",
        "hanViet": "LÂM ĐẠO",
        "meaning": "Đường xuyên rừng"
      }
    ]
  },
  {
    "kanji": "森",
    "hanViet": "SÂM",
    "meaning": "Rừng rậm, rậm rạp, bao la",
    "level": "N5",
    "strokes": 12,
    "kun": [
      "もり"
    ],
    "on": [
      "シン"
    ],
    "radicals": [
      "木",
      "木",
      "木"
    ],
    "radicalNames": [
      "Ba bộ Mộc (木) chồng lên nhau"
    ],
    "mnemonic": "Ba cái cây (木) xếp tầng lên nhau tạo thành một khu rừng rậm rạp, bạt ngàn không thấy ánh mặt trời (森).",
    "phoneticRule": "Âm Hán Việt 'S' thường chuyển sang On 'SHIN' hoặc 'SAN' (SÂM -> シン, SƠN -> サン, SINH -> セイ).",
    "mindmap": {
      "root": "森 (SÂM: Rừng rậm)",
      "branches": [
        {
          "part": "Cây trên đỉnh 木",
          "meaning": "Tán rừng cao ngút ngàn",
          "compounds": [
            "森 (もり - Khu rừng rậm)"
          ]
        },
        {
          "part": "Hai cây phía dưới 木 木",
          "meaning": "Cây cối chen chúc um tùm",
          "compounds": [
            "森林 (しんりん - Rừng đại ngàn)",
            "青森 (あおもり - Tỉnh Aomori)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "森",
        "furigana": "もり",
        "hanViet": "SÂM",
        "meaning": "Rừng rậm"
      },
      {
        "word": "森林",
        "furigana": "しんりん",
        "hanViet": "SÂM LÂM",
        "meaning": "Rừng rậm rạp bạt ngàn"
      },
      {
        "word": "青森",
        "furigana": "あおもり",
        "hanViet": "THANH SÂM",
        "meaning": "Tỉnh Aomori (Rừng xanh)"
      }
    ]
  },
  {
    "kanji": "学",
    "hanViet": "HỌC",
    "meaning": "Học tập, học vấn, trường học",
    "level": "N5",
    "strokes": 8,
    "kun": [
      "まな.ぶ"
    ],
    "on": [
      "ガク"
    ],
    "radicals": [
      "⺌",
      "冖",
      "子"
    ],
    "radicalNames": [
      "Ba chấm kiến thức (⺌)",
      "Mái nhà / Mịch (冖)",
      "Bộ Tử (子: đứa trẻ)"
    ],
    "mnemonic": "Đứa trẻ (子) ngồi dưới mái trường (冖) tiếp thu những luồng tri thức tinh hoa (⺌) chính là học tập (学).",
    "phoneticRule": "Âm Hán Việt 'H' tận cùng 'C' chuyển sang On 'GAKU' (HỌC -> ガク, HẠC -> カク).",
    "mindmap": {
      "root": "学 (HỌC: Học tập)",
      "branches": [
        {
          "part": "Phần trên (⺌ + 冖)",
          "meaning": "Mái trường & ngọn đèn tri thức",
          "compounds": [
            "学校 (がっこう - Trường học)",
            "大学 (だいがく - Đại học)"
          ]
        },
        {
          "part": "Bộ Tử 子",
          "meaning": "Người học trò, sinh viên",
          "compounds": [
            "学生 (がくせい - Học sinh, sinh viên)",
            "学者 (がくしゃ - Học giả)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "学校",
        "furigana": "がっこう",
        "hanViet": "HỌC HIỆU",
        "meaning": "Trường học"
      },
      {
        "word": "学生",
        "furigana": "がくせい",
        "hanViet": "HỌC SINH",
        "meaning": "Học sinh, sinh viên"
      },
      {
        "word": "大学",
        "furigana": "だいがく",
        "hanViet": "ĐẠI HỌC",
        "meaning": "Trường đại học"
      },
      {
        "word": "学ぶ",
        "furigana": "まなぶ",
        "hanViet": "HỌC",
        "meaning": "Học hỏi, tiếp thu"
      },
      {
        "word": "留学生",
        "furigana": "りゅうがくせい",
        "hanViet": "LƯU HỌC SINH",
        "meaning": "Du học sinh"
      }
    ]
  },
  {
    "kanji": "校",
    "hanViet": "HIỆU",
    "meaning": "Trường học, so sánh đối chiếu",
    "level": "N5",
    "strokes": 10,
    "kun": [],
    "on": [
      "コウ"
    ],
    "radicals": [
      "木",
      "交"
    ],
    "radicalNames": [
      "Bộ Mộc (木: cây, gỗ)",
      "Bộ Giao (交: giao thoa, kết nối)"
    ],
    "mnemonic": "Trường học là nơi được dựng bằng gỗ (木) để thầy trò gặp gỡ và giao lưu tri thức (交).",
    "phoneticRule": "Chữ có phần giao '交' hầu hết đều có âm On là 'KOU' (HIỆU -> コウ, GIAO -> コウ, HIỆU NGHIỆM -> コウ).",
    "mindmap": {
      "root": "校 (HIỆU: Trường học)",
      "branches": [
        {
          "part": "Bộ Mộc 木",
          "meaning": "Cơ sở vật chất bằng gỗ",
          "compounds": [
            "校舎 (こうしゃ - Giảng đường, tòa nhà trường)"
          ]
        },
        {
          "part": "Bộ Giao 交",
          "meaning": "Nơi hội tụ giao lưu học tập",
          "compounds": [
            "高校 (こうこう - Cấp 3)",
            "校長 (こうちょう - Hiệu trưởng)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "高校",
        "furigana": "こうこう",
        "hanViet": "CAO HIỆU",
        "meaning": "Trường trung học phổ thông (Cấp 3)"
      },
      {
        "word": "校長",
        "furigana": "こうちょう",
        "hanViet": "HIỆU TRƯỞNG",
        "meaning": "Hiệu trưởng"
      },
      {
        "word": "小学校",
        "furigana": "しょうがっこう",
        "hanViet": "TIỂU HỌC HIỆU",
        "meaning": "Trường tiểu học"
      },
      {
        "word": "中学校",
        "furigana": "ちゅうがっこう",
        "hanViet": "TRUNG HỌC HIỆU",
        "meaning": "Trường trung học cơ sở (Cấp 2)"
      }
    ]
  },
  {
    "kanji": "明",
    "hanViet": "MINH",
    "meaning": "Sáng sủa, thông minh, rõ ràng",
    "level": "N5",
    "strokes": 8,
    "kun": [
      "あ.かり",
      "あか.るい",
      "あき.らか"
    ],
    "on": [
      "メイ",
      "ミョウ"
    ],
    "radicals": [
      "日",
      "月"
    ],
    "radicalNames": [
      "Bộ Nhật (日: mặt trời)",
      "Bộ Nguyệt (月: mặt trăng)"
    ],
    "mnemonic": "Khi cả mặt trời (日) lẫn mặt trăng (月) cùng tụ hội thì bầu trời tràn ngập ánh sáng rực rỡ (明).",
    "phoneticRule": "Âm Hán Việt 'M' chuyển sang On 'MEI' hoặc 'MYOU' (MINH -> メイ, MỆNH -> メイ).",
    "mindmap": {
      "root": "明 (MINH: Sáng tỏ)",
      "branches": [
        {
          "part": "Mặt trời 日",
          "meaning": "Nguồn sáng ban ngày",
          "compounds": [
            "明日 (あした / みょうにち - Ngày mai)"
          ]
        },
        {
          "part": "Mặt trăng 月",
          "meaning": "Nguồn sáng ban đêm",
          "compounds": [
            "明るい (あかるい - Sáng sủa, tươi vui)",
            "説明 (せつめい - Giải thích rõ ràng)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "明るい",
        "furigana": "あかるい",
        "hanViet": "MINH",
        "meaning": "Sáng sủa, hoạt bát vui vẻ"
      },
      {
        "word": "明日",
        "furigana": "あした",
        "hanViet": "MINH NHẬT",
        "meaning": "Ngày mai"
      },
      {
        "word": "説明",
        "furigana": "せつめい",
        "hanViet": "THUYẾT MINH",
        "meaning": "Giải thích, thuyết minh"
      },
      {
        "word": "発明",
        "furigana": "はつめい",
        "hanViet": "PHÁT MINH",
        "meaning": "Phát minh, sáng chế"
      }
    ]
  },
  {
    "kanji": "暗",
    "hanViet": "ÁM",
    "meaning": "Tối tăm, mờ mịt, bí mật",
    "level": "N4",
    "strokes": 13,
    "kun": [
      "くら.い"
    ],
    "on": [
      "アン"
    ],
    "radicals": [
      "日",
      "音"
    ],
    "radicalNames": [
      "Bộ Nhật (日: mặt trời)",
      "Bộ Âm (音: âm thanh)"
    ],
    "mnemonic": "Mặt trời (日) đã lặn xuống, trong màn đêm chỉ còn nghe thấy tiếng âm thanh (音) vọng lại -> bóng tối (暗).",
    "phoneticRule": "Âm Hán Việt 'A' chuyển sang On 'AN' (ÁM -> アン, AN -> アン, ÁN -> アン).",
    "mindmap": {
      "root": "暗 (ÁM: Tối tăm)",
      "branches": [
        {
          "part": "Bộ Nhật 日",
          "meaning": "Mặt trời bị che lấp",
          "compounds": [
            "暗い (くらい - Tối tăm, u ám)"
          ]
        },
        {
          "part": "Bộ Âm 音",
          "meaning": "Âm thanh trong đêm",
          "compounds": [
            "暗記 (あんき - Học thuộc lòng)",
            "暗号 (あんごう - Mật mã)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "暗い",
        "furigana": "くらい",
        "hanViet": "ÁM",
        "meaning": "Tối tăm, u tối, buồn rầu"
      },
      {
        "word": "暗記",
        "furigana": "あんき",
        "hanViet": "ÁM KÝ",
        "meaning": "Ghi nhớ, học thuộc lòng"
      },
      {
        "word": "暗号",
        "furigana": "あんごう",
        "hanViet": "ÁM HIỆU",
        "meaning": "Mật mã bí mật"
      },
      {
        "word": "暗闇",
        "furigana": "くらやみ",
        "hanViet": "ÁM ÁM",
        "meaning": "Màn đêm tăm tối"
      }
    ]
  },
  {
    "kanji": "時",
    "hanViet": "THỜI",
    "meaning": "Thời gian, giờ giấc, thời khắc",
    "level": "N5",
    "strokes": 10,
    "kun": [
      "とき",
      "-どき"
    ],
    "on": [
      "ジ"
    ],
    "radicals": [
      "日",
      "寺"
    ],
    "radicalNames": [
      "Bộ Nhật (日: mặt trời)",
      "Bộ Tự (寺: ngôi chùa)"
    ],
    "mnemonic": "Mặt trời (日) chiếu lên ngôi chùa (寺) theo từng góc bóng đổ giúp các nhà sư xác định thời gian trong ngày (時).",
    "phoneticRule": "Âm Hán Việt 'TH' thường chuyển sang On 'JI' hoặc 'SHI' (THỜI -> ジ, THỊ -> シ, THỰC -> ショク).",
    "mindmap": {
      "root": "時 (THỜI: Giờ, thời gian)",
      "branches": [
        {
          "part": "Mặt trời 日",
          "meaning": "Chuyển động của ngày",
          "compounds": [
            "時間 (じかん - Thời gian)",
            "時 (とき - Khi, lúc)"
          ]
        },
        {
          "part": "Ngôi chùa 寺",
          "meaning": "Tiếng chuông chùa điểm canh giờ",
          "compounds": [
            "時計 (とけい - Đồng hồ)",
            "同時 (どうじ - Đồng thời)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "時間",
        "furigana": "じかん",
        "hanViet": "THỜI GIAN",
        "meaning": "Thời gian, tiếng đồng hồ"
      },
      {
        "word": "時計",
        "furigana": "とけい",
        "hanViet": "THỜI KẾ",
        "meaning": "Đồng hồ đeo tay/treo tường"
      },
      {
        "word": "時々",
        "furigana": "ときどき",
        "hanViet": "THỜI THỜI",
        "meaning": "Thỉnh thoảng, đôi khi"
      },
      {
        "word": "時代",
        "furigana": "じだい",
        "hanViet": "THỜI ĐẠI",
        "meaning": "Thời đại, kỷ nguyên"
      }
    ]
  },
  {
    "kanji": "雨",
    "hanViet": "VŨ",
    "meaning": "Mưa, hạt mưa rơi",
    "level": "N5",
    "strokes": 8,
    "kun": [
      "あめ",
      "あま-"
    ],
    "on": [
      "ウ"
    ],
    "radicals": [
      "雨"
    ],
    "radicalNames": [
      "Bộ Vũ (雨: mưa)"
    ],
    "mnemonic": "Bầu trời có mây bao phủ (一 + 冂), từ đó bốn giọt nước mưa (丶丶丶丶) rơi lộp độp xuống đất (雨).",
    "phoneticRule": "Âm Hán Việt 'V' thường chuyển sang On 'U' (VŨ -> ウ, VÔ -> ム/ブ, VƯƠNG -> オウ).",
    "mindmap": {
      "root": "雨 (VŨ: Cơn mưa)",
      "branches": [
        {
          "part": "Khung mây che trên",
          "meaning": "Bầu trời mây đen",
          "compounds": [
            "雨 (あめ - Mưa)",
            "大雨 (おおあめ - Mưa to)"
          ]
        },
        {
          "part": "Hạt mưa rơi",
          "meaning": "Nước từ trời rơi xuống",
          "compounds": [
            "雨季 (うき - Mùa mưa)",
            "梅雨 (つゆ - Mùa mưa đầu hè)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "雨",
        "furigana": "あめ",
        "hanViet": "VŨ",
        "meaning": "Cơn mưa"
      },
      {
        "word": "大雨",
        "furigana": "おおあめ",
        "hanViet": "ĐẠI VŨ",
        "meaning": "Mưa to bão bùng"
      },
      {
        "word": "雨期",
        "furigana": "うき",
        "hanViet": "VŨ KỲ",
        "meaning": "Mùa mưa"
      },
      {
        "word": "雨水",
        "furigana": "あまみず",
        "hanViet": "VŨ THỦY",
        "meaning": "Nước mưa"
      }
    ]
  },
  {
    "kanji": "電",
    "hanViet": "ĐIỆN",
    "meaning": "Điện năng, tia chớp, điện thoại",
    "level": "N5",
    "strokes": 13,
    "kun": [],
    "on": [
      "デン"
    ],
    "radicals": [
      "雨",
      "申/电"
    ],
    "radicalNames": [
      "Bộ Vũ (雨: mưa giông)",
      "Bộ Thân/Điện (电: tia chớp uốn lượn)"
    ],
    "mnemonic": "Trong cơn mưa giông (雨), một luồng sét giáng xuống đất uốn ngoằn ngoèo (电) tạo nên điện (電).",
    "phoneticRule": "Âm Hán Việt 'Đ' thường chuyển sang On 'D' hoặc 'T' (ĐIỆN -> デン, ĐẠI -> ダイ, ĐỒNG -> ドウ).",
    "mindmap": {
      "root": "電 (ĐIỆN: Điện lực, sấm sét)",
      "branches": [
        {
          "part": "Bộ Vũ 雨",
          "meaning": "Hiện tượng trời đất",
          "compounds": [
            "雷電 (らいでん - Sấm chớp)"
          ]
        },
        {
          "part": "Phần 电",
          "meaning": "Dòng điện, thiết bị công nghệ",
          "compounds": [
            "電車 (でんしゃ - Tàu điện)",
            "電話 (でんわ - Điện thoại)",
            "電気 (でんき - Điện gia dụng)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "電車",
        "furigana": "でんしゃ",
        "hanViet": "ĐIỆN XA",
        "meaning": "Tàu điện"
      },
      {
        "word": "電話",
        "furigana": "でんわ",
        "hanViet": "ĐIỆN THOẠI",
        "meaning": "Điện thoại"
      },
      {
        "word": "電気",
        "furigana": "でんき",
        "hanViet": "ĐIỆN KHÍ",
        "meaning": "Điện, đèn điện"
      },
      {
        "word": "電力",
        "furigana": "でんりょく",
        "hanViet": "ĐIỆN LỰC",
        "meaning": "Điện năng, điện lực"
      }
    ]
  },
  {
    "kanji": "車",
    "hanViet": "XA",
    "meaning": "Xe cộ, bánh xe",
    "level": "N5",
    "strokes": 7,
    "kun": [
      "くるま"
    ],
    "on": [
      "シャ"
    ],
    "radicals": [
      "車"
    ],
    "radicalNames": [
      "Bộ Xa (車: cỗ xe)"
    ],
    "mnemonic": "Nhìn từ trên cao xuống: cỗ xe ngựa có trục xe ở giữa và hai bánh xe lăn hai bên (車).",
    "phoneticRule": "Âm Hán Việt 'X' chuyển sang On 'SH' (XA -> シャ, XÃ -> シャ).",
    "mindmap": {
      "root": "車 (XA: Xe cộ)",
      "branches": [
        {
          "part": "Bánh xe lăn",
          "meaning": "Phương tiện di chuyển",
          "compounds": [
            "自動車 (じどうしゃ - Ô tô)",
            "自転車 (じてんしゃ - Xe đạp)"
          ]
        },
        {
          "part": "Trục quay",
          "meaning": "Vòng quay chuyển động",
          "compounds": [
            "車掌 (しゃしょう - Trưởng tàu)",
            "車庫 (しゃこ - Nhà để xe)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "車",
        "furigana": "くるま",
        "hanViet": "XA",
        "meaning": "Xe hơi, xe cộ"
      },
      {
        "word": "自転車",
        "furigana": "じてんしゃ",
        "hanViet": "TỰ CHUYỂN XA",
        "meaning": "Xe đạp"
      },
      {
        "word": "自動車",
        "furigana": "じどうしゃ",
        "hanViet": "TỰ ĐỘNG XA",
        "meaning": "Xe ô tô tự hành"
      },
      {
        "word": "駐車場",
        "furigana": "ちゅうしゃじょう",
        "hanViet": "TRÚ XA TRƯỜNG",
        "meaning": "Bãi đỗ xe"
      }
    ]
  },
  {
    "kanji": "食",
    "hanViet": "THỰC",
    "meaning": "Ăn uống, thực phẩm, đồ ăn",
    "level": "N5",
    "strokes": 9,
    "kun": [
      "く.う",
      "く.らう",
      "た.べる"
    ],
    "on": [
      "ショク",
      "ジキ"
    ],
    "radicals": [
      "人",
      "良"
    ],
    "radicalNames": [
      "Bộ Nhân (人: người)",
      "Bộ Lương (良: tốt lành)"
    ],
    "mnemonic": "Con người (人) ăn những thực phẩm tốt lành (良) để nuôi sống cơ thể (食).",
    "phoneticRule": "Âm Hán Việt 'TH' tận cùng 'C' chuyển sang On 'SHOKU' (THỰC -> ショク, THỤC -> ジュク).",
    "mindmap": {
      "root": "食 (THỰC: Ẩm thực)",
      "branches": [
        {
          "part": "Hành động ăn",
          "meaning": "Thưởng thức món ăn",
          "compounds": [
            "食べる (たべる - Ăn)",
            "食事 (しょくじ - Bữa ăn)"
          ]
        },
        {
          "part": "Món ăn / Đồ dùng",
          "meaning": "Thực phẩm nuôi sống",
          "compounds": [
            "食べ物 (たべもの - Thức ăn)",
            "食堂 (しょくどう - Nhà ăn, căng tin)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "食べる",
        "furigana": "たべる",
        "hanViet": "THỰC",
        "meaning": "Ăn uống"
      },
      {
        "word": "食事",
        "furigana": "しょくじ",
        "hanViet": "THỰC SỰ",
        "meaning": "Bữa ăn"
      },
      {
        "word": "食べ物",
        "furigana": "たべもの",
        "hanViet": "THỰC VẬT",
        "meaning": "Thức ăn, đồ ăn"
      },
      {
        "word": "食堂",
        "furigana": "しょくどう",
        "hanViet": "THỰC ĐƯỜNG",
        "meaning": "Nhà ăn, căng tin"
      },
      {
        "word": "朝食",
        "furigana": "ちょうしょく",
        "hanViet": "TRIÊU THỰC",
        "meaning": "Bữa ăn sáng"
      }
    ]
  },
  {
    "kanji": "飲",
    "hanViet": "ẨM",
    "meaning": "Uống nước, nuốt",
    "level": "N5",
    "strokes": 12,
    "kun": [
      "の.む"
    ],
    "on": [
      "イン"
    ],
    "radicals": [
      "飠",
      "欠"
    ],
    "radicalNames": [
      "Bộ Thực (飠: đồ ăn, uống)",
      "Bộ Khiếm (欠: há miệng thiếu thốn)"
    ],
    "mnemonic": "Sau khi ăn (飠) xong thấy khát, há to miệng (欠) ra để tu ừng ực một ngụm nước lớn (飲).",
    "phoneticRule": "Âm Hán Việt 'Â' chuyển sang On 'IN' (ẨM -> イン, ÂM -> イン).",
    "mindmap": {
      "root": "飲 (ẨM: Uống)",
      "branches": [
        {
          "part": "Bộ Thực 飠",
          "meaning": "Chất lỏng dung nạp",
          "compounds": [
            "飲み物 (のみもの - Đồ uống)",
            "飲む (のむ - Uống)"
          ]
        },
        {
          "part": "Bộ Khiếm 欠",
          "meaning": "Há miệng đưa nước vào",
          "compounds": [
            "飲食店 (いんしょくてん - Quán ăn uống)",
            "飲酒 (いんしゅ - Uống rượu)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "飲む",
        "furigana": "のむ",
        "hanViet": "ẨM",
        "meaning": "Uống"
      },
      {
        "word": "飲み物",
        "furigana": "のみもの",
        "hanViet": "ẨM VẬT",
        "meaning": "Đồ uống, thức uống"
      },
      {
        "word": "飲食店",
        "furigana": "いんしょくてん",
        "hanViet": "ẨM THỰC ĐIẾM",
        "meaning": "Nhà hàng, quán ăn uống"
      },
      {
        "word": "飲み会",
        "furigana": "のみかい",
        "hanViet": "ẨM HỘI",
        "meaning": "Buổi tiệc nhậu, liên hoan"
      }
    ]
  },
  {
    "kanji": "語",
    "hanViet": "NGỮ",
    "meaning": "Ngôn ngữ, lời nói, thuật lại",
    "level": "N5",
    "strokes": 14,
    "kun": [
      "かた.る",
      "かた.らう"
    ],
    "on": [
      "ゴ"
    ],
    "radicals": [
      "言",
      "五",
      "口"
    ],
    "radicalNames": [
      "Bộ Ngôn (言: lời nói)",
      "Số năm (五: năm người)",
      "Bộ Khẩu (口: cái miệng)"
    ],
    "mnemonic": "Năm (五) cái miệng (口) cùng cất lên lời nói (言) để trao đổi tiếng nói và ngôn ngữ chung (語).",
    "phoneticRule": "Âm Hán Việt 'NG' chuyển sang On 'G' (NGỮ -> ゴ, NGHĨA -> ギ, NGU -> グ).",
    "mindmap": {
      "root": "語 (NGỮ: Ngôn ngữ)",
      "branches": [
        {
          "part": "Bộ Ngôn 言",
          "meaning": "Lời ăn tiếng nói",
          "compounds": [
            "日本語 (にほんご - Tiếng Nhật)",
            "言語 (げんご - Ngôn ngữ)"
          ]
        },
        {
          "part": "Ngũ + Khẩu (五 + 口)",
          "meaning": "Nhiều người đàm thoại",
          "compounds": [
            "物語 (ものがたり - Câu chuyện kể)",
            "単語 (たんご - Từ vựng)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "日本語",
        "furigana": "にほんご",
        "hanViet": "NHẬT BẢN NGỮ",
        "meaning": "Tiếng Nhật Bản"
      },
      {
        "word": "英語",
        "furigana": "えいご",
        "hanViet": "ANH NGỮ",
        "meaning": "Tiếng Anh"
      },
      {
        "word": "単語",
        "furigana": "たんご",
        "hanViet": "ĐƠN NGỮ",
        "meaning": "Từ vựng"
      },
      {
        "word": "語る",
        "furigana": "かたる",
        "hanViet": "NGỮ",
        "meaning": "Kể chuyện, thuật lại"
      }
    ]
  },
  {
    "kanji": "話",
    "hanViet": "THOẠI",
    "meaning": "Nói chuyện, câu chuyện",
    "level": "N5",
    "strokes": 13,
    "kun": [
      "はな.す",
      "はなし"
    ],
    "on": [
      "ワ"
    ],
    "radicals": [
      "言",
      "舌"
    ],
    "radicalNames": [
      "Bộ Ngôn (言: lời nói)",
      "Bộ Thiệt (舌: cái lưỡi)"
    ],
    "mnemonic": "Muốn nói ra những lời hay (言) thì cái lưỡi (舌) trong miệng phải uốn lượn nhịp nhàng (話).",
    "phoneticRule": "Âm Hán Việt 'TH' có vần 'OAI' chuyển sang On 'WA' (THOẠI -> ワ, HOÀ -> ワ).",
    "mindmap": {
      "root": "話 (THOẠI: Nói chuyện)",
      "branches": [
        {
          "part": "Bộ Ngôn 言",
          "meaning": "Nội dung cuộc trò chuyện",
          "compounds": [
            "話す (はなす - Trò chuyện)",
            "昔話 (むかしばなし - Chuyện xưa tích cũ)"
          ]
        },
        {
          "part": "Bộ Thiệt 舌",
          "meaning": "Lưỡi cử động tạo âm",
          "compounds": [
            "会話 (かいわ - Hội thoại)",
            "世話 (せわ - Chăm sóc, giúp đỡ)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "話す",
        "furigana": "はなす",
        "hanViet": "THOẠI",
        "meaning": "Nói chuyện, đàm đạo"
      },
      {
        "word": "電話",
        "furigana": "でんわ",
        "hanViet": "ĐIỆN THOẠI",
        "meaning": "Điện thoại"
      },
      {
        "word": "会話",
        "furigana": "かいわ",
        "hanViet": "HỘI THOẠI",
        "meaning": "Hội thoại, giao tiếp"
      },
      {
        "word": "話題",
        "furigana": "わだい",
        "hanViet": "THOẠI ĐỀ",
        "meaning": "Chủ đề câu chuyện"
      }
    ]
  },
  {
    "kanji": "聞",
    "hanViet": "VĂN",
    "meaning": "Nghe, hỏi, nghe thấy tin tức",
    "level": "N5",
    "strokes": 14,
    "kun": [
      "き.く",
      "き.こえる"
    ],
    "on": [
      "ブン",
      "モン"
    ],
    "radicals": [
      "門",
      "耳"
    ],
    "radicalNames": [
      "Bộ Môn (門: cánh cổng)",
      "Bộ Nhĩ (耳: cái tai)"
    ],
    "mnemonic": "Ghé sát cái tai (耳) vào khe cánh cổng (門) để nghe lỏm xem người bên trong đang nói gì (聞).",
    "phoneticRule": "Âm Hán Việt 'V' chuyển sang On 'B' hoặc 'M' (VĂN -> ブン / モン, VĂN CHƯƠNG -> ブン).",
    "mindmap": {
      "root": "聞 (VĂN: Lắng nghe)",
      "branches": [
        {
          "part": "Cánh cổng 門",
          "meaning": "Ngăn cách bên ngoài",
          "compounds": [
            "新聞 (しんぶん - Báo chí tin tức)"
          ]
        },
        {
          "part": "Cái tai 耳",
          "meaning": "Lắng nghe thanh âm",
          "compounds": [
            "聞く (きく - Nghe, hỏi)",
            "聞こえる (きこえる - Nghe thấy)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "聞く",
        "furigana": "きく",
        "hanViet": "VĂN",
        "meaning": "Nghe, hỏi thăm"
      },
      {
        "word": "新聞",
        "furigana": "しんぶん",
        "hanViet": "TÂN VĂN",
        "meaning": "Báo giấy, tin tức"
      },
      {
        "word": "聞こえる",
        "furigana": "きこえる",
        "hanViet": "VĂN",
        "meaning": "Nghe thấy, vang lên"
      },
      {
        "word": "見聞",
        "furigana": "けんぶん",
        "hanViet": "KIẾN VĂN",
        "meaning": "Kiến thức nghe thấy thấy thấy"
      }
    ]
  },
  {
    "kanji": "見",
    "hanViet": "KIẾN",
    "meaning": "Nhìn thấy, quan sát, ý kiến",
    "level": "N5",
    "strokes": 7,
    "kun": [
      "み.る",
      "み.える",
      "み.せる"
    ],
    "on": [
      "ケン"
    ],
    "radicals": [
      "目",
      "儿"
    ],
    "radicalNames": [
      "Bộ Mục (目: con mắt)",
      "Bộ Nhi (儿: đôi chân người)"
    ],
    "mnemonic": "Con người bước chân (儿) tới tận nơi và mở to đôi mắt (目) ra để nhìn thấy (見) sự thật.",
    "phoneticRule": "Âm Hán Việt 'K' chuyển sang On 'K' (KIẾN -> ケン, KIỆM -> ケン).",
    "mindmap": {
      "root": "見 (KIẾN: Trông thấy, cái nhìn)",
      "branches": [
        {
          "part": "Đôi mắt 目",
          "meaning": "Thị giác nhìn nhận",
          "compounds": [
            "見る (みる - Nhìn, xem)",
            "意見 (いけん - Ý kiến đóng góp)"
          ]
        },
        {
          "part": "Đôi chân 儿",
          "meaning": "Đi đến tận nơi chứng kiến",
          "compounds": [
            "見学 (けんがく - Tham quan học hỏi)",
            "発見 (はっけん - Khám phá, phát hiện)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "見る",
        "furigana": "みる",
        "hanViet": "KIẾN",
        "meaning": "Nhìn, ngắm, xem"
      },
      {
        "word": "見える",
        "furigana": "みえる",
        "hanViet": "KIẾN",
        "meaning": "Nhìn thấy, có thể thấy"
      },
      {
        "word": "見せる",
        "furigana": "みせる",
        "hanViet": "KIẾN",
        "meaning": "Cho xem, trưng bày"
      },
      {
        "word": "意見",
        "furigana": "いけん",
        "hanViet": "Ý KIẾN",
        "meaning": "Ý kiến, quan điểm"
      }
    ]
  },
  {
    "kanji": "行",
    "hanViet": "HÀNH",
    "meaning": "Đi lại, tiến hành, ngân hàng",
    "level": "N5",
    "strokes": 6,
    "kun": [
      "い.く",
      "ゆ.く",
      "おこな.う"
    ],
    "on": [
      "コウ",
      "ギョウ",
      "アン"
    ],
    "radicals": [
      "彳",
      "亍"
    ],
    "radicalNames": [
      "Bộ Xích (彳: bước chân trái)",
      "Bộ Xúc (亍: bước chân phải)"
    ],
    "mnemonic": "Hình ngã tư đường phố, chân trái bước (彳) rồi chân phải tiếp nối (亍) cùng tiến về phía trước (行).",
    "phoneticRule": "Âm Hán Việt 'H' tận cùng 'ANH' chuyển sang On 'KOU' hoặc 'GYOU' (HÀNH -> コウ / ギョウ).",
    "mindmap": {
      "root": "行 (HÀNH: Đi, tiến hành)",
      "branches": [
        {
          "part": "Bước chân 彳",
          "meaning": "Chuyển dịch không gian",
          "compounds": [
            "行く (いく - Đi)",
            "旅行 (りょこう - Du lịch)"
          ]
        },
        {
          "part": "Tổ chức hành động 亍",
          "meaning": "Thực hiện việc",
          "compounds": [
            "行動 (こうどう - Hành động)",
            "銀行 (ぎんこう - Ngân hàng)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "行く",
        "furigana": "いく",
        "hanViet": "HÀNH",
        "meaning": "Đi tới"
      },
      {
        "word": "銀行",
        "furigana": "ぎんこう",
        "hanViet": "NGÂN HÀNH",
        "meaning": "Ngân hàng"
      },
      {
        "word": "旅行",
        "furigana": "りょこう",
        "hanViet": "LỮ HÀNH",
        "meaning": "Chuyến du lịch"
      },
      {
        "word": "行う",
        "furigana": "おこなう",
        "hanViet": "HÀNH",
        "meaning": "Tiến hành, tổ chức"
      }
    ]
  },
  {
    "kanji": "来",
    "hanViet": "LAI",
    "meaning": "Đến, tới, tương lai",
    "level": "N5",
    "strokes": 7,
    "kun": [
      "く.る",
      "きた.る",
      "きた.す"
    ],
    "on": [
      "ライ",
      "タイ"
    ],
    "radicals": [
      "木",
      "丷"
    ],
    "radicalNames": [
      "Bộ Mộc (木: cây)",
      "Nét phẩy (丷: hạt lúa chín rơi đến)"
    ],
    "mnemonic": "Cây lúa trĩu hạt từ phương xa mang vụ mùa ấm no bay đến (来).",
    "phoneticRule": "Âm Hán Việt 'L' vần 'AI' chuyển sang On 'RAI' (LAI -> ライ, LẠI -> ライ).",
    "mindmap": {
      "root": "来 (LAI: Đến, tương lai)",
      "branches": [
        {
          "part": "Hành động đến",
          "meaning": "Đi tới đích",
          "compounds": [
            "来る (くる - Đến nơi)",
            "来年 (らいねん - Năm sau)"
          ]
        },
        {
          "part": "Thời gian tới",
          "meaning": "Tương lai phía trước",
          "compounds": [
            "未来 (みらい - Tương lai tươi sáng)",
            "本来 (ほんらい - Vốn dĩ)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "来る",
        "furigana": "くる",
        "hanViet": "LAI",
        "meaning": "Đi đến, tới"
      },
      {
        "word": "来週",
        "furigana": "らいしゅう",
        "hanViet": "LAI CHU",
        "meaning": "Tuần sau"
      },
      {
        "word": "来年",
        "furigana": "らいねん",
        "hanViet": "LAI NIÊN",
        "meaning": "Năm sau"
      },
      {
        "word": "未来",
        "furigana": "みらい",
        "hanViet": "VỊ LAI",
        "meaning": "Tương lai"
      }
    ]
  },
  {
    "kanji": "金",
    "hanViet": "KIM",
    "meaning": "Vàng, kim loại, tiền bạc",
    "level": "N5",
    "strokes": 8,
    "kun": [
      "かね",
      "かな-"
    ],
    "on": [
      "キン",
      "コン"
    ],
    "radicals": [
      "金"
    ],
    "radicalNames": [
      "Bộ Kim (金: vàng, quặng kim loại)"
    ],
    "mnemonic": "Dưới lòng đất (土) chôn giấu hai cục quặng vàng quý giá (丶丶) được mái che giữ gìn (人) -> (金).",
    "phoneticRule": "Âm Hán Việt 'K' vần 'IM' chuyển sang On 'KIN' (KIM -> キン, CẨM -> キン).",
    "mindmap": {
      "root": "金 (KIM: Vàng, tiền)",
      "branches": [
        {
          "part": "Kim loại quý",
          "meaning": "Kho báu lấp lánh",
          "compounds": [
            "金 (きん - Vàng)",
            "金曜日 (きんようび - Thứ sáu)"
          ]
        },
        {
          "part": "Tiền tệ",
          "meaning": "Phương tiện mua sắm",
          "compounds": [
            "お金 (おかね - Tiền nong)",
            "料金 (りょうきん - Tiền cước phí)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "お金",
        "furigana": "おかね",
        "hanViet": "KIM",
        "meaning": "Tiền bạc"
      },
      {
        "word": "金曜日",
        "furigana": "きんようび",
        "hanViet": "KIM DIỆU NHẬT",
        "meaning": "Thứ sáu"
      },
      {
        "word": "料金",
        "furigana": "りょうきん",
        "hanViet": "LIỆU KIM",
        "meaning": "Tiền cước, chi phí"
      },
      {
        "word": "現金",
        "furigana": "げんきん",
        "hanViet": "HIỆN KIM",
        "meaning": "Tiền mặt"
      }
    ]
  },
  {
    "kanji": "人",
    "hanViet": "NHÂN",
    "meaning": "Con người, nhân loại",
    "level": "N5",
    "strokes": 2,
    "kun": [
      "ひと"
    ],
    "on": [
      "ジン",
      "ニン"
    ],
    "radicals": [
      "人"
    ],
    "radicalNames": [
      "Bộ Nhân (人: người)"
    ],
    "mnemonic": "Hình tượng hai chân người vững chãi nương tựa vào nhau mà đứng thẳng (人).",
    "phoneticRule": "Âm Hán Việt 'NH' chuyển sang On 'JIN' hoặc 'NIN' (NHÂN -> ジン/ニン, NHIÊN -> ネン).",
    "mindmap": {
      "root": "人 (NHÂN: Con người)",
      "branches": [
        {
          "part": "Cá nhân",
          "meaning": "Mỗi con người",
          "compounds": [
            "人 (ひと - Người)",
            "大人 (おとな - Người lớn)"
          ]
        },
        {
          "part": "Quốc tịch / Danh xưng",
          "meaning": "Người nước nào đó",
          "compounds": [
            "日本人 (にほんじん - Người Nhật)",
            "人気 (にんき - Được yêu thích)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "人",
        "furigana": "ひと",
        "hanViet": "NHÂN",
        "meaning": "Người"
      },
      {
        "word": "日本人",
        "furigana": "にほんじん",
        "hanViet": "NHẬT BẢN NHÂN",
        "meaning": "Người Nhật Bản"
      },
      {
        "word": "大人",
        "furigana": "おとな",
        "hanViet": "ĐẠI NHÂN",
        "meaning": "Người trưởng thành"
      },
      {
        "word": "人気",
        "furigana": "にんき",
        "hanViet": "NHÂN KHÍ",
        "meaning": "Nổi tiếng, được mến mộ"
      }
    ]
  },
  {
    "kanji": "新",
    "hanViet": "TÂN",
    "meaning": "Mới mẻ, tươi mới",
    "level": "N4",
    "strokes": 13,
    "kun": [
      "あたら.しい",
      "あら.た",
      "にい-"
    ],
    "on": [
      "シン"
    ],
    "radicals": [
      "立",
      "木",
      "斤"
    ],
    "radicalNames": [
      "Thân cây đứng (立+木: thân cây)",
      "Bộ Cân (斤: cái rìu)"
    ],
    "mnemonic": "Dùng cây rìu sắt (斤) đốn ngã thân cây đứng (立+木) để lấy ra những thớ gỗ mới toanh thơm mùi nhựa (新).",
    "phoneticRule": "Âm Hán Việt 'T' vần 'ÂN' chuyển sang On 'SHIN' (TÂN -> シン, THÂN -> シン).",
    "mindmap": {
      "root": "新 (TÂN: Mới)",
      "branches": [
        {
          "part": "Cái rìu 斤",
          "meaning": "Chặt bớt cái cũ",
          "compounds": [
            "新幹線 (しんかんせん - Tàu cao tốc)",
            "新年 (しんねん - Năm mới)"
          ]
        },
        {
          "part": "Gỗ mới 立木",
          "meaning": "Sự tươi mới",
          "compounds": [
            "新しい (あたらしい - Mới mẻ)",
            "新聞 (しんぶん - Báo tin tức)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "新しい",
        "furigana": "あたらしい",
        "hanViet": "TÂN",
        "meaning": "Mới mẻ"
      },
      {
        "word": "新聞",
        "furigana": "しんぶん",
        "hanViet": "TÂN VĂN",
        "meaning": "Báo chí"
      },
      {
        "word": "新年",
        "furigana": "しんねん",
        "hanViet": "TÂN NIÊN",
        "meaning": "Năm mới"
      },
      {
        "word": "新幹線",
        "furigana": "しんかんせん",
        "hanViet": "TÂN CÁN TUYẾN",
        "meaning": "Tàu Shinkansen"
      }
    ]
  },
  {
    "kanji": "古",
    "hanViet": "CỔ",
    "meaning": "Cũ kỹ, cổ xưa, lâu đời",
    "level": "N5",
    "strokes": 5,
    "kun": [
      "ふる.い",
      "-ふる.す"
    ],
    "on": [
      "コ"
    ],
    "radicals": [
      "十",
      "口"
    ],
    "radicalNames": [
      "Số mười (十)",
      "Bộ Khẩu (口: miệng kể chuyện)"
    ],
    "mnemonic": "Câu chuyện đã truyền qua mười (十) đời miệng (口) người kể lại chắc chắn là chuyện cổ xưa (古).",
    "phoneticRule": "Âm Hán Việt 'C' vần 'Ô' chuyển sang On 'KO' (CỔ -> コ, CÔ -> コ).",
    "mindmap": {
      "root": "古 (CỔ: Xưa cũ)",
      "branches": [
        {
          "part": "Mười đời 十",
          "meaning": "Thời gian trôi qua dài",
          "compounds": [
            "古代 (こだい - Thời cổ đại)"
          ]
        },
        {
          "part": "Lời miệng 口",
          "meaning": "Truyền tụng dân gian",
          "compounds": [
            "古い (ふるい - Cũ kỹ)",
            "中古 (ちゅうこ - Đồ cũ, second-hand)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "古い",
        "furigana": "ふるい",
        "hanViet": "CỔ",
        "meaning": "Cũ, cổ xưa"
      },
      {
        "word": "古代",
        "furigana": "こだい",
        "hanViet": "CỔ ĐẠI",
        "meaning": "Thời cổ đại"
      },
      {
        "word": "中古",
        "furigana": "ちゅうこ",
        "hanViet": "TRUNG CỔ",
        "meaning": "Đồ đã qua sử dụng, xe cũ"
      }
    ]
  },
  {
    "kanji": "高",
    "hanViet": "CAO",
    "meaning": "Cao ráo, đắt đỏ, cao thượng",
    "level": "N5",
    "strokes": 10,
    "kun": [
      "たか.い",
      "たか",
      "-だか",
      "たか.まる",
      "たか.める"
    ],
    "on": [
      "コウ"
    ],
    "radicals": [
      "高"
    ],
    "radicalNames": [
      "Bộ Cao (高: tháp lầu cao)"
    ],
    "mnemonic": "Tòa vọng lâu cao chót vót có cổng vào (口) và mái che chóp đỉnh vươn lên mây trời (高).",
    "phoneticRule": "Âm Hán Việt 'C' vần 'AO' chuyển sang On 'KOU' (CAO -> コウ, CẢO -> コウ).",
    "mindmap": {
      "root": "高 (CAO: Chiều cao, đắt đỏ)",
      "branches": [
        {
          "part": "Mái tháp cao",
          "meaning": "Độ cao vươn lên",
          "compounds": [
            "高い (たかい - Cao, đắt)",
            "高校 (こうこう - Trường cấp 3)"
          ]
        },
        {
          "part": "Mức độ / Giá cả",
          "meaning": "Chi phí hoặc trình độ cao",
          "compounds": [
            "高級 (こうきゅう - Cao cấp, xịn)",
            "最高 (さいこう - Tuyệt vời nhất)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "高い",
        "furigana": "たかい",
        "hanViet": "CAO",
        "meaning": "Cao, đắt tiền"
      },
      {
        "word": "高校",
        "furigana": "こうこう",
        "hanViet": "CAO HIỆU",
        "meaning": "Trường cấp 3"
      },
      {
        "word": "高級",
        "furigana": "こうきゅう",
        "hanViet": "CAO CẤP",
        "meaning": "Cao cấp, sang trọng"
      },
      {
        "word": "最高",
        "furigana": "さいこう",
        "hanViet": "TỐI CAO",
        "meaning": "Tốt nhất, tuyệt vời nhất"
      }
    ]
  },
  {
    "kanji": "安",
    "hanViet": "AN",
    "meaning": "Bình an, yên ổn, rẻ",
    "level": "N5",
    "strokes": 6,
    "kun": [
      "やす.い",
      "やす.まる",
      "やす"
    ],
    "on": [
      "アン"
    ],
    "radicals": [
      "宀",
      "女"
    ],
    "radicalNames": [
      "Bộ Miên (宀: mái nhà)",
      "Bộ Nữ (女: phụ nữ)"
    ],
    "mnemonic": "Người phụ nữ (女) được che chở bình yên dưới mái nhà (宀) thì gia đạo luôn an lành (安), tâm hồn thư thái.",
    "phoneticRule": "Âm Hán Việt 'A' chuyển sang On 'AN' (AN -> アン, ÁM -> アン).",
    "mindmap": {
      "root": "安 (AN: Yên bình, giá rẻ)",
      "branches": [
        {
          "part": "Mái nhà 宀",
          "meaning": "Sự che chở, vững chắc",
          "compounds": [
            "安全 (あんぜん - An toàn)",
            "安心 (あんしん - Yên tâm)"
          ]
        },
        {
          "part": "Người nữ 女",
          "meaning": "Hiền dịu, không áp lực",
          "compounds": [
            "安い (やすい - Giá rẻ)",
            "不安 (ふあん - Bất an)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "安い",
        "furigana": "やすい",
        "hanViet": "AN",
        "meaning": "Rẻ (tiền)"
      },
      {
        "word": "安全",
        "furigana": "あんぜん",
        "hanViet": "AN TOÀN",
        "meaning": "An toàn"
      },
      {
        "word": "安心",
        "furigana": "あんしん",
        "hanViet": "AN TÂM",
        "meaning": "Yên tâm, thanh thản"
      },
      {
        "word": "不安",
        "furigana": "ふあん",
        "hanViet": "BẤT AN",
        "meaning": "Lo lắng, bất an"
      }
    ]
  },
  {
    "kanji": "大",
    "hanViet": "ĐẠI",
    "meaning": "To lớn, vĩ đại",
    "level": "N5",
    "strokes": 3,
    "kun": [
      "おお-",
      "おお.きい",
      "-おお.いに"
    ],
    "on": [
      "ダイ",
      "タイ"
    ],
    "radicals": [
      "大"
    ],
    "radicalNames": [
      "Bộ Đại (大: to lớn)"
    ],
    "mnemonic": "Hình dáng con người đứng dang rộng hai cánh tay và hai chân hết cỡ để diễn tả sự to lớn (大).",
    "phoneticRule": "Âm Hán Việt 'Đ' vần 'AI' chuyển sang On 'DAI' hoặc 'TAI' (ĐẠI -> ダイ/タイ).",
    "mindmap": {
      "root": "大 (ĐẠI: To lớn)",
      "branches": [
        {
          "part": "Kích thước lớn",
          "meaning": "Rộng lớn về quy mô",
          "compounds": [
            "大きい (おおきい - To lớn)",
            "大学 (だいがく - Đại học)"
          ]
        },
        {
          "part": "Mức độ quan trọng",
          "meaning": "Vô cùng, rất đỗi",
          "compounds": [
            "大変 (たいへん - Vất vả, ghê gớm)",
            "大切 (たいせつ - Trân quý, quan trọng)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "大きい",
        "furigana": "おおきい",
        "hanViet": "ĐẠI",
        "meaning": "To lớn, vĩ đại"
      },
      {
        "word": "大学",
        "furigana": "だいがく",
        "hanViet": "ĐẠI HỌC",
        "meaning": "Trường đại học"
      },
      {
        "word": "大変",
        "furigana": "たいへん",
        "hanViet": "ĐẠI BIẾN",
        "meaning": "Vất vả, khó khăn, rất"
      },
      {
        "word": "大切",
        "furigana": "たいせつ",
        "hanViet": "ĐẠI THIẾT",
        "meaning": "Quan trọng, quý giá"
      }
    ]
  },
  {
    "kanji": "小",
    "hanViet": "TIỂU",
    "meaning": "Nhỏ bé, vụn vặt",
    "level": "N5",
    "strokes": 3,
    "kun": [
      "ちい.さい",
      "こ-",
      "お-",
      "さ-"
    ],
    "on": [
      "ショウ"
    ],
    "radicals": [
      "小"
    ],
    "radicalNames": [
      "Bộ Tiểu (小: nhỏ)"
    ],
    "mnemonic": "Một vật thể ở giữa bị hai nhát dao tách nhỏ ra thành hai mảnh vụn tí hon (小).",
    "phoneticRule": "Âm Hán Việt 'T' vần 'IỂU' chuyển sang On 'SHOU' (TIỂU -> ショウ, THIẾU -> ショウ).",
    "mindmap": {
      "root": "小 (TIỂU: Nhỏ bé)",
      "branches": [
        {
          "part": "Kích thước nhỏ",
          "meaning": "Bé bỏng",
          "compounds": [
            "小さい (ちいさい - Nhỏ bé)",
            "小学校 (しょうがっこう - Tiểu học)"
          ]
        },
        {
          "part": "Chi tiết phụ",
          "meaning": "Mẩu nhỏ",
          "compounds": [
            "小説 (しょうせつ - Tiểu thuyết)",
            "小鳥 (ことり - Chú chim nhỏ)"
          ]
        }
      ]
    },
    "compounds": [
      {
        "word": "小さい",
        "furigana": "ちいさい",
        "hanViet": "TIỂU",
        "meaning": "Nhỏ, bé"
      },
      {
        "word": "小学校",
        "furigana": "しょうがっこう",
        "hanViet": "TIỂU HỌC HIỆU",
        "meaning": "Trường tiểu học"
      },
      {
        "word": "小説",
        "furigana": "しょうせつ",
        "hanViet": "TIỂU THUYẾT",
        "meaning": "Tiểu thuyết, truyện dài"
      },
      {
        "word": "小包",
        "furigana": "こづつみ",
        "hanViet": "TIỂU BAO",
        "meaning": "Bưu phẩm, gói hàng nhỏ"
      }
    ]
  }
];
