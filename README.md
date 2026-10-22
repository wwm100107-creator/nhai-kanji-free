# Nhai Kanji Free — Xóa Mù Kanji Chiết Tự & Luyện Thi JLPT Miễn Phí

> **Phiên bản mã nguồn mở, độc lập và hoàn toàn miễn phí** được tái cấu trúc (Reverse-Engineered & Rebuilt) từ nền tảng [Nhai Kanji](https://nhaikanji.com/).
> 
> ✅ **100% Free** — Không ép buộc đăng nhập, không giới hạn tính năng (paywall/VIP).
> 
> ✅ **Không có tính năng Chat với AI** (theo đúng yêu cầu của người dùng, toàn bộ xử lý ngôn ngữ chạy trực tiếp phía Client bằng thuật toán hình thái học và nhận diện nét vẽ mở).
> 
> ✅ **Hỗ trợ Offline & PWA** — Dữ liệu và tiến trình học lưu trữ an toàn trên thiết bị (`LocalStorage`).

---

## 🌟 Các tính năng chính (Feature Matrix)

### 1. Nhai Kanji (Chiết tự & Sơ đồ tư duy)
- **Tra cứu Kanji thông minh**: Tìm kiếm theo chữ Kanji, âm Hán Việt (có dấu / không dấu), Kana, Romaji hoặc nghĩa tiếng Việt.
- **Bảng vẽ Kanji bằng tay (Handwriting Recognition Canvas)**: Nhận diện chữ viết tay qua API nhận diện nét chữ Nhật chuẩn xác, không cần gõ bàn phím.
- **Hoạt hình thứ tự nét vẽ (Stroke Order Animation)**: Xem hoạt hình từng nét vẽ chuẩn KanjiVG và bảng luyện viết trên ô lưới chữ điền (田字格).
- **Chiết tự & Bộ thủ cấu thành (Decomposition)**: Bóc tách từng chữ thành các bộ thủ thành phần (VD: `休` = `亻` (người) + `木` (cây)).
- **Mẹo nhớ chiết tự (Mnemonics)**: Câu chuyện liên tưởng giúp nhớ sâu bản chất chữ thay vì học vẹt.
- **Sơ đồ tư duy (Mindmap Tree)**: Cây phả hệ phân nhánh từ Kanji gốc ra các biến thể và từ ghép.
- **Quy tắc chuyển âm**: Hướng dẫn quy tắc biến âm Hán Việt sang âm On/Kun.

### 2. Nhai Tango (Từ vựng N5 — N1)
- Kho từ vựng bám sát các giáo trình kinh điển: Minna no Nihongo, Mimikara Oboeru, Soumatome.
- Phát âm chuẩn tiếng Nhật qua Web Speech Synthesis API.
- Chế độ **Flashcard SRS (Spaced Repetition)**: Đã thuộc, Nhớ mang máng, Chưa thuộc.
- Chế độ **Quiz trắc nghiệm** tính điểm và thưởng hiệu ứng Confetti.

### 3. Nhai Bunpo (Ngữ pháp & Phân tích câu)
- **Công cụ Phân tích câu tự động (Sentence Breakdown)**: Bóc tách câu tiếng Nhật thành các từ loại, nhận diện trợ từ (`は`, `が`, `を`, `に`, `で`, `と`, `から`, `まで`, `へ`), động từ, tính từ và giải thích vai trò ngữ pháp.
- **Bảng chia thể Động từ & Tính từ toàn diện (12 thể)**: Tự động chia thể từ điển, lịch sự (ます), thể て, thể ない, thể た, khả năng, bị động, sai khiến, điều kiện, ý chí, mệnh lệnh, tôn kính ngữ và khiêm nhường ngữ.
- Thư viện mẫu ngữ pháp N5 — N1 kèm sơ đồ tư duy liên tưởng.

### 4. NhaiJLPT (Phòng thi thử JLPT N5 — N1)
- Đề thi mô phỏng định dạng thi thật của JEES (Chữ Hán - Từ vựng, Ngữ pháp, Đọc hiểu).
- Đồng hồ đếm ngược thời gian thực.
- Chấm điểm tự động và lời giải thích chi tiết cho từng câu hỏi ngay khi nộp bài.

### 5. アクセント辞典 (Từ điển Trọng âm Pitch Accent)
- Tra cứu và trực quan hóa cao độ âm (Mora Tone Graph) theo các mẫu: Heiban (Bằng phẳng), Atamadaka (Đầu cao), Nakadaka (Giữa cao), Odaka (Đuôi cao).
- Nghe phát âm mẫu cho từng từ.

### 6. 214 Bộ Thủ Khang Hy (Radicals)
- Đầy đủ 214 bộ thủ tiếng Nhật từ 1 đến 17 nét.
- Lọc theo số nét, tra cứu tên Hán Việt, ý nghĩa, biến thể và các ví dụ chữ Kanji sử dụng.

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy (Getting Started)

### Yêu cầu môi trường
- Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18+).

### Chạy ứng dụng

```bash
# 1. Di chuyển vào thư mục dự án
cd nhai-kanji-free

# 2. Cài đặt các gói phụ thuộc (nếu chưa cài)
npm install

# 3. Khởi chạy máy chủ phát triển
npm run dev
```

Truy cập trên trình duyệt tại: `http://localhost:5173`

### Đóng gói sản phẩm (Production Build)

```bash
npm run build
npm run preview
```
Thư mục `dist/` có thể được triển khai trực tiếp lên Vercel, Netlify, Cloudflare Pages hoặc GitHub Pages hoàn toàn miễn phí.
