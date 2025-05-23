export const GameState = {
    START: 'start',
    SELECTING: 'selecting',
    DECIDING: 'deciding',
    WIN: 'win',
    LOSE: 'lose',
    REPLAY: 'replay',
};

export const UserAnswerStatus = {
    NONE: '',
    SELECT: 'select',
    SUBMIT: 'submit',
};

export const prizes = [
    '0',
    '200.000',
    '400.000',
    '600.000',
    '1.000.000',
    '2.000.000',
    '3.000.000',
    '6.000.000',
    '10.000.000',
    '14.000.000',
    '22.000.000',
    '30.000.000',
    '40.000.000',
    '60.000.000',
    '85.000.000',
    '150.000.000'
];

export const questions = [
    // Bộ 1: Rất dễ (kiến thức cơ bản, phù hợp với học sinh tiểu học)
    [
        {
            question: "Thủ đô của Việt Nam là gì?",
            options: [
                { id: "A", text: "TP.HCM" },
                { id: "B", text: "Hà Nội" },
                { id: "C", text: "Huế" },
                { id: "D", text: "Đà Nẵng" },
            ],
            answer: "B",
        },
        {
            question: "Màu cờ của Việt Nam là gì?",
            options: [
                { id: "A", text: "Đỏ - Vàng" },
                { id: "B", text: "Xanh - Trắng" },
                { id: "C", text: "Đỏ - Trắng" },
                { id: "D", text: "Vàng - Đen" },
            ],
            answer: "A",
        },
        {
            question: "1 ngày có bao nhiêu giờ?",
            options: [
                { id: "A", text: "12" },
                { id: "B", text: "24" },
                { id: "C", text: "48" },
                { id: "D", text: "36" },
            ],
            answer: "B",
        },
        {
            question: "Con vật nào kêu 'meo meo'?",
            options: [
                { id: "A", text: "Chó" },
                { id: "B", text: "Mèo" },
                { id: "C", text: "Gà" },
                { id: "D", text: "Vịt" },
            ],
            answer: "B",
        },
        {
            question: "Mặt trời mọc ở hướng nào?",
            options: [
                { id: "A", text: "Đông" },
                { id: "B", text: "Tây" },
                { id: "C", text: "Nam" },
                { id: "D", text: "Bắc" },
            ],
            answer: "A",
        },
        {
            question: "1 tuần có bao nhiêu ngày?",
            options: [
                { id: "A", text: "5" },
                { id: "B", text: "6" },
                { id: "C", text: "7" },
                { id: "D", text: "8" },
            ],
            answer: "C",
        },
        {
            question: "Loài hoa nào là quốc hoa của Việt Nam?",
            options: [
                { id: "A", text: "Hoa hồng" },
                { id: "B", text: "Hoa sen" },
                { id: "C", text: "Hoa mai" },
                { id: "D", text: "Hoa đào" },
            ],
            answer: "B",
        },
        {
            question: "Màu gì tượng trưng cho hòa bình?",
            options: [
                { id: "A", text: "Đỏ" },
                { id: "B", text: "Trắng" },
                { id: "C", text: "Xanh" },
                { id: "D", text: "Vàng" },
            ],
            answer: "B",
        },
        {
            question: "Quả gì màu đỏ, thường dùng làm nước ép?",
            options: [
                { id: "A", text: "Cam" },
                { id: "B", text: "Dưa hấu" },
                { id: "C", text: "Cà chua" },
                { id: "D", text: "Táo" },
            ],
            answer: "C",
        },
        {
            question: "Mùa nào lạnh nhất trong năm?",
            options: [
                { id: "A", text: "Xuân" },
                { id: "B", text: "Hạ" },
                { id: "C", text: "Thu" },
                { id: "D", text: "Đông" },
            ],
            answer: "D",
        },
    ],

    // Bộ 2: Dễ (kiến thức phổ thông cơ bản)
    [
        {
            question: "1 năm có bao nhiêu ngày?",
            options: [
                { id: "A", text: "365" },
                { id: "B", text: "366" },
                { id: "C", text: "360" },
                { id: "D", text: "364" },
            ],
            answer: "A",
        },
        {
            question: "Quốc kỳ Việt Nam có hình gì ở giữa?",
            options: [
                { id: "A", text: "Trăng" },
                { id: "B", text: "Sao" },
                { id: "C", text: "Mặt trời" },
                { id: "D", text: "Hình tròn" },
            ],
            answer: "B",
        },
        {
            question: "Thủ đô của Nhật Bản là gì?",
            options: [
                { id: "A", text: "Osaka" },
                { id: "B", text: "Tokyo" },
                { id: "C", text: "Kyoto" },
                { id: "D", text: "Hiroshima" },
            ],
            answer: "B",
        },
        {
            question: "Con vật nào là bạn của con người?",
            options: [
                { id: "A", text: "Chó" },
                { id: "B", text: "Mèo" },
                { id: "C", text: "Chim" },
                { id: "D", text: "Cá" },
            ],
            answer: "A",
        },
        {
            question: "Màu của bầu trời thường là gì?",
            options: [
                { id: "A", text: "Xanh" },
                { id: "B", text: "Đỏ" },
                { id: "C", text: "Vàng" },
                { id: "D", text: "Đen" },
            ],
            answer: "A",
        },
        {
            question: "Quả gì màu cam, giàu vitamin C?",
            options: [
                { id: "A", text: "Táo" },
                { id: "B", text: "Cam" },
                { id: "C", text: "Lê" },
                { id: "D", text: "Chuối" },
            ],
            answer: "B",
        },
        {
            question: "1 giờ có bao nhiêu phút?",
            options: [
                { id: "A", text: "30" },
                { id: "B", text: "60" },
                { id: "C", text: "90" },
                { id: "D", text: "120" },
            ],
            answer: "B",
        },
        {
            question: "Loài cây nào là biểu tượng của Việt Nam?",
            options: [
                { id: "A", text: "Cây tre" },
                { id: "B", text: "Cây dừa" },
                { id: "C", text: "Cây thông" },
                { id: "D", text: "Cây bàng" },
            ],
            answer: "A",
        },
        {
            question: "Thành phố nào là thủ đô của Pháp?",
            options: [
                { id: "A", text: "Lyon" },
                { id: "B", text: "Paris" },
                { id: "C", text: "Marseille" },
                { id: "D", text: "Nice" },
            ],
            answer: "B",
        },
        {
            question: "Mặt trăng là vệ tinh của hành tinh nào?",
            options: [
                { id: "A", text: "Sao Hỏa" },
                { id: "B", text: "Trái Đất" },
                { id: "C", text: "Sao Mộc" },
                { id: "D", text: "Sao Thổ" },
            ],
            answer: "B",
        },
    ],

    // Bộ 3: Dễ hơn trung bình
    [
        {
            question: "Hành tinh chúng ta đang sống là gì?",
            options: [
                { id: "A", text: "Sao Hỏa" },
                { id: "B", text: "Trái Đất" },
                { id: "C", text: "Sao Kim" },
                { id: "D", text: "Sao Thủy" },
            ],
            answer: "B",
        },
        {
            question: "Quốc gia nào có hình dạng giống chiếc ủng?",
            options: [
                { id: "A", text: "Pháp" },
                { id: "B", text: "Ý" },
                { id: "C", text: "Tây Ban Nha" },
                { id: "D", text: "Đức" },
            ],
            answer: "B",
        },
        {
            question: "1 phút có bao nhiêu giây?",
            options: [
                { id: "A", text: "30" },
                { id: "B", text: "60" },
                { id: "C", text: "90" },
                { id: "D", text: "120" },
            ],
            answer: "B",
        },
        {
            question: "Loài hoa nào tượng trưng cho tình yêu?",
            options: [
                { id: "A", text: "Hoa hồng" },
                { id: "B", text: "Hoa cúc" },
                { id: "C", text: "Hoa lan" },
                { id: "D", text: "Hoa sen" },
            ],
            answer: "A",
        },
        {
            question: "Thủ đô của Trung Quốc là gì?",
            options: [
                { id: "A", text: "Thượng Hải" },
                { id: "B", text: "Bắc Kinh" },
                { id: "C", text: "Quảng Châu" },
                { id: "D", text: "Thâm Quyến" },
            ],
            answer: "B",
        },
        {
            question: "Màu gì tượng trưng cho hy vọng?",
            options: [
                { id: "A", text: "Xanh dương" },
                { id: "B", text: "Đỏ" },
                { id: "C", text: "Vàng" },
                { id: "D", text: "Trắng" },
            ],
            answer: "A",
        },
        {
            question: "Quốc gia nào tổ chức Thế vận hội đầu tiên?",
            options: [
                { id: "A", text: "Hy Lạp" },
                { id: "B", text: "Pháp" },
                { id: "C", text: "Anh" },
                { id: "D", text: "Mỹ" },
            ],
            answer: "A",
        },
        {
            question: "Đơn vị tiền tệ của Việt Nam là gì?",
            options: [
                { id: "A", text: "Yên" },
                { id: "B", text: "Đô la" },
                { id: "C", text: "Đồng" },
                { id: "D", text: "Euro" },
            ],
            answer: "C",
        },
        {
            question: "Loài nào là biểu tượng của nước Mỹ?",
            options: [
                { id: "A", text: "Đại bàng" },
                { id: "B", text: "Gấu" },
                { id: "C", text: "Sư tử" },
                { id: "D", text: "Hươu" },
            ],
            answer: "A",
        },
        {
            question: "Thành phố nào là thủ đô của Anh?",
            options: [
                { id: "A", text: "Manchester" },
                { id: "B", text: "London" },
                { id: "C", text: "Birmingham" },
                { id: "D", text: "Liverpool" },
            ],
            answer: "B",
        },
    ],

    // Bộ 4: Trung bình (kiến thức phổ thông trung học)
    [
        {
            question: "Thủ đô của Brazil là gì?",
            options: [
                { id: "A", text: "Rio de Janeiro" },
                { id: "B", text: "São Paulo" },
                { id: "C", text: "Brasília" },
                { id: "D", text: "Salvador" },
            ],
            answer: "C",
        },
        {
            question: "Ai là tác giả của 'Truyện Kiều'?",
            options: [
                { id: "A", text: "Nguyễn Du" },
                { id: "B", text: "Tố Hữu" },
                { id: "C", text: "Xuân Diệu" },
                { id: "D", text: "Hồ Xuân Hương" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào lớn nhất trong hệ Mặt Trời?",
            options: [
                { id: "A", text: "Trái Đất" },
                { id: "B", text: "Sao Mộc" },
                { id: "C", text: "Sao Thổ" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "B",
        },
        {
            question: "Núi nào cao nhất thế giới?",
            options: [
                { id: "A", text: "Everest" },
                { id: "B", text: "K2" },
                { id: "C", text: "Kangchenjunga" },
                { id: "D", text: "Annapurna" },
            ],
            answer: "A",
        },
        {
            question: "Loài nào là động vật lớn nhất trên cạn?",
            options: [
                { id: "A", text: "Voi" },
                { id: "B", text: "Hà mã" },
                { id: "C", text: "Tê giác" },
                { id: "D", text: "Hươu cao cổ" },
            ],
            answer: "A",
        },
        {
            question: "Đơn vị đo chiều dài trong hệ mét là gì?",
            options: [
                { id: "A", text: "Kilogram" },
                { id: "B", text: "Lít" },
                { id: "C", text: "Mét" },
                { id: "D", text: "Giây" },
            ],
            answer: "C",
        },
        {
            question: "Ai là tổng thống đầu tiên của Hoa Kỳ?",
            options: [
                { id: "A", text: "Abraham Lincoln" },
                { id: "B", text: "George Washington" },
                { id: "C", text: "Thomas Jefferson" },
                { id: "D", text: "John Adams" },
            ],
            answer: "B",
        },
        {
            question: "Châu lục nào có dân số đông nhất?",
            options: [
                { id: "A", text: "Châu Phi" },
                { id: "B", text: "Châu Âu" },
                { id: "C", text: "Châu Á" },
                { id: "D", text: "Châu Mỹ" },
            ],
            answer: "C",
        },
        {
            question: "Ai vẽ bức tranh 'Mona Lisa'?",
            options: [
                { id: "A", text: "Vincent van Gogh" },
                { id: "B", text: "Leonardo da Vinci" },
                { id: "C", text: "Pablo Picasso" },
                { id: "D", text: "Michelangelo" },
            ],
            answer: "B",
        },
        {
            question: "Đại dương nào lớn nhất thế giới?",
            options: [
                { id: "A", text: "Đại Tây Dương" },
                { id: "B", text: "Thái Bình Dương" },
                { id: "C", text: "Ấn Độ Dương" },
                { id: "D", text: "Bắc Băng Dương" },
            ],
            answer: "B",
        },
    ],

    // Bộ 5: Trung bình
    [
        {
            question: "Sông nào dài nhất thế giới?",
            options: [
                { id: "A", text: "Sông Nile" },
                { id: "B", text: "Sông Amazon" },
                { id: "C", text: "Sông Mississippi" },
                { id: "D", text: "Sông Mekong" },
            ],
            answer: "A",
        },
        {
            question: "Ai là người đầu tiên đặt chân lên Mặt Trăng?",
            options: [
                { id: "A", text: "Yuri Gagarin" },
                { id: "B", text: "Neil Armstrong" },
                { id: "C", text: "Buzz Aldrin" },
                { id: "D", text: "John Glenn" },
            ],
            answer: "B",
        },
        {
            question: "Hành tinh nào có vành đai nổi bật nhất?",
            options: [
                { id: "A", text: "Sao Mộc" },
                { id: "B", text: "Sao Thổ" },
                { id: "C", text: "Sao Thiên Vương" },
                { id: "D", text: "Sao Hải Vương" },
            ],
            answer: "B",
        },
        {
            question: "Ai viết 'Tuyên ngôn Độc lập' của Việt Nam?",
            options: [
                { id: "A", text: "Hồ Chí Minh" },
                { id: "B", text: "Võ Nguyên Giáp" },
                { id: "C", text: "Phan Bội Châu" },
                { id: "D", text: "Nguyễn Ái Quốc" },
            ],
            answer: "A",
        },
        {
            question: "Châu lục nào có sa mạc Sahara?",
            options: [
                { id: "A", text: "Châu Á" },
                { id: "B", text: "Châu Phi" },
                { id: "C", text: "Châu Âu" },
                { id: "D", text: "Châu Úc" },
            ],
            answer: "B",
        },
        {
            question: "Loài chim nào không biết bay?",
            options: [
                { id: "A", text: "Đại bàng" },
                { id: "B", text: "Chim cánh cụt" },
                { id: "C", text: "Chim sẻ" },
                { id: "D", text: "Chim ưng" },
            ],
            answer: "B",
        },
        {
            question: "Đơn vị đo khối lượng là gì?",
            options: [
                { id: "A", text: "Kilogram" },
                { id: "B", text: "Lít" },
                { id: "C", text: "Mét" },
                { id: "D", text: "Newton" },
            ],
            answer: "A",
        },
        {
            question: "Ai là nhà khoa học phát hiện ra trọng lực?",
            options: [
                { id: "A", text: "Albert Einstein" },
                { id: "B", text: "Isaac Newton" },
                { id: "C", text: "Galileo Galilei" },
                { id: "D", text: "Stephen Hawking" },
            ],
            answer: "B",
        },
        {
            question: "Công thức tính diện tích hình tròn là gì?",
            options: [
                { id: "A", text: "πr^2" },
                { id: "B", text: "2πr" },
                { id: "C", text: "r^2" },
                { id: "D", text: "πd" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Harry Potter'?",
            options: [
                { id: "A", text: "J.K. Rowling" },
                { id: "B", text: "J.R.R. Tolkien" },
                { id: "C", text: "George R.R. Martin" },
                { id: "D", text: "C.S. Lewis" },
            ],
            answer: "A",
        },
    ],

    // Bộ 6: Trung bình hơn
    [
        {
            question: "Núi nào cao nhất Việt Nam?",
            options: [
                { id: "A", text: "Fansipan" },
                { id: "B", text: "Ngọc Linh" },
                { id: "C", text: "Tà Chì Nhù" },
                { id: "D", text: "Ba Vì" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Tắt đèn'?",
            options: [
                { id: "A", text: "Ngô Tất Tố" },
                { id: "B", text: "Nam Cao" },
                { id: "C", text: "Vũ Trọng Phụng" },
                { id: "D", text: "Nguyễn Công Hoan" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào gần Mặt Trời nhất?",
            options: [
                { id: "A", text: "Sao Thủy" },
                { id: "B", text: "Sao Kim" },
                { id: "C", text: "Trái Đất" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "A",
        },
        {
            question: "Châu lục nào không có người sinh sống cố định?",
            options: [
                { id: "A", text: "Châu Phi" },
                { id: "B", text: "Châu Nam Cực" },
                { id: "C", text: "Châu Á" },
                { id: "D", text: "Châu Âu" },
            ],
            answer: "B",
        },
        {
            question: "Loài nào là động vật ăn thịt lớn nhất?",
            options: [
                { id: "A", text: "Sư tử" },
                { id: "B", text: "Gấu trắng" },
                { id: "C", text: "Hổ" },
                { id: "D", text: "Cá sấu" },
            ],
            answer: "B",
        },
        {
            question: "Đơn vị đo điện áp là gì?",
            options: [
                { id: "A", text: "Ampere" },
                { id: "B", text: "Volt" },
                { id: "C", text: "Watt" },
                { id: "D", text: "Ohm" },
            ],
            answer: "B",
        },
        {
            question: "Ai phát minh ra bóng đèn sợi đốt?",
            options: [
                { id: "A", text: "Thomas Edison" },
                { id: "B", text: "Nikola Tesla" },
                { id: "C", text: "Humphry Davy" },
                { id: "D", text: "Benjamin Franklin" },
            ],
            answer: "A",
        },
        {
            question: "Công thức tính vận tốc là gì?",
            options: [
                { id: "A", text: "s = v/t" },
                { id: "B", text: "v = s/t" },
                { id: "C", text: "v = t/s" },
                { id: "D", text: "s = v*t^2" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Đồi gió hú'?",
            options: [
                { id: "A", text: "Emily Brontë" },
                { id: "B", text: "Jane Austen" },
                { id: "C", text: "Charlotte Brontë" },
                { id: "D", text: "Charles Dickens" },
            ],
            answer: "A",
        },
        {
            question: "Đại dương nào nhỏ nhất thế giới?",
            options: [
                { id: "A", text: "Thái Bình Dương" },
                { id: "B", text: "Đại Tây Dương" },
                { id: "C", text: "Bắc Băng Dương" },
                { id: "D", text: "Ấn Độ Dương" },
            ],
            answer: "C",
        },
    ],

    // Bộ 7: Trung bình khá
    [
        {
            question: "Thủ đô của Hàn Quốc là gì?",
            options: [
                { id: "A", text: "Busan" },
                { id: "B", text: "Seoul" },
                { id: "C", text: "Incheon" },
                { id: "D", text: "Daegu" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Romeo và Juliet'?",
            options: [
                { id: "A", text: "William Shakespeare" },
                { id: "B", text: "Charles Dickens" },
                { id: "C", text: "Jane Austen" },
                { id: "D", text: "Mark Twain" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có nhiệt độ cao nhất?",
            options: [
                { id: "A", text: "Sao Thủy" },
                { id: "B", text: "Sao Kim" },
                { id: "C", text: "Sao Hỏa" },
                { id: "D", text: "Mặt Trời" },
            ],
            answer: "B",
        },
        {
            question: "Sông nào dài nhất Việt Nam?",
            options: [
                { id: "A", text: "Sông Hồng" },
                { id: "B", text: "Sông Mekong" },
                { id: "C", text: "Sông Đồng Nai" },
                { id: "D", text: "Sông Cửu Long" },
            ],
            answer: "B",
        },
        {
            question: "Loài nào là động vật nhanh nhất thế giới?",
            options: [
                { id: "A", text: "Báo săn" },
                { id: "B", text: "Chim ưng" },
                { id: "C", text: "Ngựa" },
                { id: "D", text: "Chó" },
            ],
            answer: "B",
        },
        {
            question: "Đơn vị đo công suất là gì?",
            options: [
                { id: "A", text: "Joule" },
                { id: "B", text: "Watt" },
                { id: "C", text: "Volt" },
                { id: "D", text: "Ampere" },
            ],
            answer: "B",
        },
        {
            question: "Ai là người phát minh ra điện thoại?",
            options: [
                { id: "A", text: "Thomas Edison" },
                { id: "B", text: "Alexander Graham Bell" },
                { id: "C", text: "Nikola Tesla" },
                { id: "D", text: "Michael Faraday" },
            ],
            answer: "B",
        },
        {
            question: "Hệ mặt trời có bao nhiêu hành tinh?",
            options: [
                { id: "A", text: "7" },
                { id: "B", text: "8" },
                { id: "C", text: "9" },
                { id: "D", text: "10" },
            ],
            answer: "B",
        },
        {
            question: "Chất nào có công thức hóa học là H2O?",
            options: [
                { id: "A", text: "Oxy" },
                { id: "B", text: "Hydro" },
                { id: "C", text: "Nước" },
                { id: "D", text: "Carbon dioxide" },
            ],
            answer: "C",
        },
        {
            question: "Ai là nhà soạn nhạc của bản giao hưởng số 9?",
            options: [
                { id: "A", text: "Mozart" },
                { id: "B", text: "Beethoven" },
                { id: "C", text: "Bach" },
                { id: "D", text: "Chopin" },
            ],
            answer: "B",
        },
    ],

    // Bộ 8: Trung bình khá
    [
        {
            question: "Thủ đô của Ấn Độ là gì?",
            options: [
                { id: "A", text: "Mumbai" },
                { id: "B", text: "New Delhi" },
                { id: "C", text: "Kolkata" },
                { id: "D", text: "Chennai" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Les Misérables'?",
            options: [
                { id: "A", text: "Victor Hugo" },
                { id: "B", text: "Alexandre Dumas" },
                { id: "C", text: "Gustave Flaubert" },
                { id: "D", text: "Honoré de Balzac" },
            ],
            answer: "A",
        },
        {
            question: "Đỉnh núi nào cao thứ hai thế giới?",
            options: [
                { id: "A", text: "Everest" },
                { id: "B", text: "K2" },
                { id: "C", text: "Kangchenjunga" },
                { id: "D", text: "Lhotse" },
            ],
            answer: "B",
        },
        {
            question: "Loài cá nào lớn nhất đại dương?",
            options: [
                { id: "A", text: "Cá mập trắng" },
                { id: "B", text: "Cá voi xanh" },
                { id: "C", text: "Cá mập voi" },
                { id: "D", text: "Cá đuối" },
            ],
            answer: "B",
        },
        {
            question: "Đơn vị đo năng lượng là gì?",
            options: [
                { id: "A", text: "Joule" },
                { id: "B", text: "Watt" },
                { id: "C", text: "Volt" },
                { id: "D", text: "Ampere" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra xe hơi đầu tiên?",
            options: [
                { id: "A", text: "Henry Ford" },
                { id: "B", text: "Karl Benz" },
                { id: "C", text: "Nikola Tesla" },
                { id: "D", text: "Gottlieb Daimler" },
            ],
            answer: "B",
        },
        {
            question: "Hành tinh nào có bầu khí quyển dày nhất?",
            options: [
                { id: "A", text: "Sao Kim" },
                { id: "B", text: "Sao Mộc" },
                { id: "C", text: "Trái Đất" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "A",
        },
        {
            question: "Công thức hóa học của muối ăn là gì?",
            options: [
                { id: "A", text: "NaCl" },
                { id: "B", text: "KCl" },
                { id: "C", text: "CaCO3" },
                { id: "D", text: "H2SO4" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Chiến tranh và hòa bình'?",
            options: [
                { id: "A", text: "Leo Tolstoy" },
                { id: "B", text: "Fyodor Dostoevsky" },
                { id: "C", text: "Victor Hugo" },
                { id: "D", text: "Charles Dickens" },
            ],
            answer: "A",
        },
        {
            question: "Hồ nào sâu nhất thế giới?",
            options: [
                { id: "A", text: "Hồ Baikal" },
                { id: "B", text: "Hồ Superior" },
                { id: "C", text: "Hồ Victoria" },
                { id: "D", text: "Hồ Tanganyika" },
            ],
            answer: "A",
        },
    ],

    // Bộ 9: Khó hơn trung bình
    [
        {
            question: "Thủ đô của Nga là gì?",
            options: [
                { id: "A", text: "Moscow" },
                { id: "B", text: "Saint Petersburg" },
                { id: "C", text: "Kazan" },
                { id: "D", text: "Novosibirsk" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Don Quixote'?",
            options: [
                { id: "A", text: "Miguel de Cervantes" },
                { id: "B", text: "Gabriel García Márquez" },
                { id: "C", text: "Pablo Neruda" },
                { id: "D", text: "Jorge Luis Borges" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có kích thước nhỏ nhất?",
            options: [
                { id: "A", text: "Sao Thủy" },
                { id: "B", text: "Sao Hỏa" },
                { id: "C", text: "Sao Kim" },
                { id: "D", text: "Trái Đất" },
            ],
            answer: "A",
        },
        {
            question: "Sa mạc nào lớn nhất thế giới?",
            options: [
                { id: "A", text: "Sahara" },
                { id: "B", text: "Gobi" },
                { id: "C", text: "Kalahari" },
                { id: "D", text: "Antarctica" },
            ],
            answer: "D",
        },
        {
            question: "Loài nào là động vật có vú sống dưới nước?",
            options: [
                { id: "A", text: "Cá voi" },
                { id: "B", text: "Cá mập" },
                { id: "C", text: "Cá heo" },
                { id: "D", text: "Cả A và C" },
            ],
            answer: "D",
        },
        {
            question: "Đơn vị đo áp suất là gì?",
            options: [
                { id: "A", text: "Pascal" },
                { id: "B", text: "Newton" },
                { id: "C", text: "Joule" },
                { id: "D", text: "Watt" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra máy bay?",
            options: [
                { id: "A", text: "Wright Brothers" },
                { id: "B", text: "Leonardo da Vinci" },
                { id: "C", text: "Thomas Edison" },
                { id: "D", text: "Henry Ford" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào chiếm phần lớn trong khí quyển Trái Đất?",
            options: [
                { id: "A", text: "Oxy" },
                { id: "B", text: "Nitơ" },
                { id: "C", text: "Carbon dioxide" },
                { id: "D", text: "Hydro" },
            ],
            answer: "B",
        },
        {
            question: "Công thức nào biểu thị định luật II Newton?",
            options: [
                { id: "A", text: "F = ma" },
                { id: "B", text: "E = mc^2" },
                { id: "C", text: "v = u + at" },
                { id: "D", text: "P = F/A" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Nhật ký trong tù'?",
            options: [
                { id: "A", text: "Hồ Chí Minh" },
                { id: "B", text: "Tố Hữu" },
                { id: "C", text: "Xuân Diệu" },
                { id: "D", text: "Chế Lan Viên" },
            ],
            answer: "A",
        },
    ],

    // Bộ 10: Khó hơn trung bình
    [
        {
            question: "Thủ đô của Canada là gì?",
            options: [
                { id: "A", text: "Toronto" },
                { id: "B", text: "Ottawa" },
                { id: "C", text: "Vancouver" },
                { id: "D", text: "Montreal" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Tội ác và hình phạt'?",
            options: [
                { id: "A", text: "Fyodor Dostoevsky" },
                { id: "B", text: "Leo Tolstoy" },
                { id: "C", text: "Anton Chekhov" },
                { id: "D", text: "Nikolai Gogol" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có ngày ngắn nhất?",
            options: [
                { id: "A", text: "Sao Mộc" },
                { id: "B", text: "Sao Thổ" },
                { id: "C", text: "Sao Kim" },
                { id: "D", text: "Trái Đất" },
            ],
            answer: "A",
        },
        {
            question: "Dãy núi nào dài nhất thế giới?",
            options: [
                { id: "A", text: "Himalaya" },
                { id: "B", text: "Andes" },
                { id: "C", text: "Rocky" },
                { id: "D", text: "Alps" },
            ],
            answer: "B",
        },
        {
            question: "Loài nào là chim lớn nhất thế giới?",
            options: [
                { id: "A", text: "Đà điểu" },
                { id: "B", text: "Đại bàng" },
                { id: "C", text: "Chim ưng" },
                { id: "D", text: "Chim hồng hạc" },
            ],
            answer: "A",
        },
        {
            question: "Đơn vị đo điện trở là gì?",
            options: [
                { id: "A", text: "Volt" },
                { id: "B", text: "Ampere" },
                { id: "C", text: "Ohm" },
                { id: "D", text: "Watt" },
            ],
            answer: "C",
        },
        {
            question: "Ai phát minh ra Internet?",
            options: [
                { id: "A", text: "Tim Berners-Lee" },
                { id: "B", text: "Bill Gates" },
                { id: "C", text: "Steve Jobs" },
                { id: "D", text: "Mark Zuckerberg" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào là kim loại lỏng ở nhiệt độ thường?",
            options: [
                { id: "A", text: "Sắt" },
                { id: "B", text: "Thủy ngân" },
                { id: "C", text: "Đồng" },
                { id: "D", text: "Nhôm" },
            ],
            answer: "B",
        },
        {
            question: "Công thức nào biểu thị định luật bảo toàn năng lượng?",
            options: [
                { id: "A", text: "E = mc^2" },
                { id: "B", text: "F = ma" },
                { id: "C", text: "W = Fd" },
                { id: "D", text: "E = E0" },
            ],
            answer: "C",
        },
        {
            question: "Hồ nào lớn nhất Việt Nam?",
            options: [
                { id: "A", text: "Hồ Hoàn Kiếm" },
                { id: "B", text: "Hồ Ba Bể" },
                { id: "C", text: "Hồ Thác Bà" },
                { id: "D", text: "Hồ Dầu Tiếng" },
            ],
            answer: "D",
        },
    ],

    // Bộ 11: Khó (kiến thức chuyên sâu hơn)
    [
        {
            question: "Thủ đô của Đức là gì?",
            options: [
                { id: "A", text: "Munich" },
                { id: "B", text: "Berlin" },
                { id: "C", text: "Hamburg" },
                { id: "D", text: "Frankfurt" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Chúa tể những chiếc nhẫn'?",
            options: [
                { id: "A", text: "J.R.R. Tolkien" },
                { id: "B", text: "C.S. Lewis" },
                { id: "C", text: "George R.R. Martin" },
                { id: "D", text: "J.K. Rowling" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có nhiệt độ thấp nhất?",
            options: [
                { id: "A", text: "Sao Thiên Vương" },
                { id: "B", text: "Sao Hải Vương" },
                { id: "C", text: "Sao Thổ" },
                { id: "D", text: "Sao Mộc" },
            ],
            answer: "B",
        },
        {
            question: "Dãy núi nào cao nhất Việt Nam?",
            options: [
                { id: "A", text: "Hoàng Liên Sơn" },
                { id: "B", text: "Trường Sơn" },
                { id: "C", text: "Ngọc Linh" },
                { id: "D", text: "Tam Đảo" },
            ],
            answer: "A",
        },
        {
            question: "Loài nào là động vật có túi?",
            options: [
                { id: "A", text: "Kangaroo" },
                { id: "B", text: "Gấu" },
                { id: "C", text: "Sư tử" },
                { id: "D", text: "Hà mã" },
            ],
            answer: "A",
        },
        {
            question: "Đơn vị đo tần số là gì?",
            options: [
                { id: "A", text: "Hertz" },
                { id: "B", text: "Watt" },
                { id: "C", text: "Joule" },
                { id: "D", text: "Newton" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra vaccine?",
            options: [
                { id: "A", text: "Edward Jenner" },
                { id: "B", text: "Louis Pasteur" },
                { id: "C", text: "Alexander Fleming" },
                { id: "D", text: "Jonas Salk" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào là nguyên tố nhẹ nhất?",
            options: [
                { id: "A", text: "Hydro" },
                { id: "B", text: "Heli" },
                { id: "C", text: "Oxy" },
                { id: "D", text: "Nitơ" },
            ],
            answer: "A",
        },
        {
            question: "Công thức hóa học của axit sunfuric là gì?",
            options: [
                { id: "A", text: "H2SO4" },
                { id: "B", text: "HNO3" },
                { id: "C", text: "HCl" },
                { id: "D", text: "H3PO4" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Bố già'?",
            options: [
                { id: "A", text: "Mario Puzo" },
                { id: "B", text: "Ernest Hemingway" },
                { id: "C", text: "F. Scott Fitzgerald" },
                { id: "D", text: "John Steinbeck" },
            ],
            answer: "A",
        },
    ],

    // Bộ 12: Khó
    [
        {
            question: "Thủ đô của Úc là gì?",
            options: [
                { id: "A", text: "Sydney" },
                { id: "B", text: "Melbourne" },
                { id: "C", text: "Canberra" },
                { id: "D", text: "Perth" },
            ],
            answer: "C",
        },
        {
            question: "Ai là tác giả của 'Nhật ký trong tù'?",
            options: [
                { id: "A", text: "Hồ Chí Minh" },
                { id: "B", text: "Tố Hữu" },
                { id: "C", text: "Xuân Diệu" },
                { id: "D", text: "Chế Lan Viên" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có gió mạnh nhất?",
            options: [
                { id: "A", text: "Sao Mộc" },
                { id: "B", text: "Sao Hải Vương" },
                { id: "C", text: "Sao Thổ" },
                { id: "D", text: "Trái Đất" },
            ],
            answer: "B",
        },
        {
            question: "Loài nào là động vật nhỏ nhất thế giới?",
            options: [
                { id: "A", text: "Kiến" },
                { id: "B", text: "Vi khuẩn" },
                { id: "C", text: "Châu chấu" },
                { id: "D", text: "Bọ chét" },
            ],
            answer: "B",
        },
        {
            question: "Đơn vị đo thể tích là gì?",
            options: [
                { id: "A", text: "Mét khối" },
                { id: "B", text: "Kilogram" },
                { id: "C", text: "Newton" },
                { id: "D", text: "Joule" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra động cơ hơi nước?",
            options: [
                { id: "A", text: "James Watt" },
                { id: "B", text: "Thomas Edison" },
                { id: "C", text: "George Stephenson" },
                { id: "D", text: "Henry Ford" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào là khí hiếm trong bảng tuần hoàn?",
            options: [
                { id: "A", text: "Oxy" },
                { id: "B", text: "Heli" },
                { id: "C", text: "Nitơ" },
                { id: "D", text: "Hydro" },
            ],
            answer: "B",
        },
        {
            question: "Hành tinh nào có khoảng cách xa Mặt Trời nhất?",
            options: [
                { id: "A", text: "Sao Mộc" },
                { id: "B", text: "Sao Thổ" },
                { id: "C", text: "Sao Hải Vương" },
                { id: "D", text: "Sao Thiên Vương" },
            ],
            answer: "C",
        },
        {
            question: "Công thức nào biểu thị định luật Ohm?",
            options: [
                { id: "A", text: "V = I * R" },
                { id: "B", text: "P = I * V" },
                { id: "C", text: "E = m * c^2" },
                { id: "D", text: "F = m * a" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra máy tính đầu tiên?",
            options: [
                { id: "A", text: "Charles Babbage" },
                { id: "B", text: "Alan Turing" },
                { id: "C", text: "John von Neumann" },
                { id: "D", text: "Bill Gates" },
            ],
            answer: "A",
        },
    ],

    // Bộ 13: Rất khó (kiến thức chuyên sâu)
    [
        {
            question: "Thủ đô của Ý là gì?",
            options: [
                { id: "A", text: "Milan" },
                { id: "B", text: "Rome" },
                { id: "C", text: "Venice" },
                { id: "D", text: "Florence" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Lý thuyết nào giải thích hiện tượng giao thoa ánh sáng'?",
            options: [
                { id: "A", text: "Lý thuyết lượng tử" },
                { id: "B", text: "Lý thuyết sóng" },
                { id: "C", text: "Lý thuyết tương đối" },
                { id: "D", text: "Lý thuyết hấp dẫn" },
            ],
            answer: "B",
        },
        {
            question: "Hành tinh nào có quỹ đạo elip nhất?",
            options: [
                { id: "A", text: "Sao Thủy" },
                { id: "B", text: "Sao Kim" },
                { id: "C", text: "Trái Đất" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào là nguyên tố phóng xạ tự nhiên?",
            options: [
                { id: "A", text: "Uranium" },
                { id: "B", text: "Sắt" },
                { id: "C", text: "Đồng" },
                { id: "D", text: "Nhôm" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra tia X?",
            options: [
                { id: "A", text: "Wilhelm Röntgen" },
                { id: "B", text: "Marie Curie" },
                { id: "C", text: "Thomas Edison" },
                { id: "D", text: "Nikola Tesla" },
            ],
            answer: "A",
        },
        {
            question: "Đơn vị đo lực là gì?",
            options: [
                { id: "A", text: "Newton" },
                { id: "B", text: "Joule" },
                { id: "C", text: "Watt" },
                { id: "D", text: "Pascal" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra bom nguyên tử?",
            options: [
                { id: "A", text: "Robert Oppenheimer" },
                { id: "B", text: "Albert Einstein" },
                { id: "C", text: "Enrico Fermi" },
                { id: "D", text: "Niels Bohr" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có áp suất khí quyển cao nhất?",
            options: [
                { id: "A", text: "Sao Kim" },
                { id: "B", text: "Sao Mộc" },
                { id: "C", text: "Trái Đất" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "A",
        },
        {
            question: "Công thức nào biểu thị thuyết tương đối đặc biệt?",
            options: [
                { id: "A", text: "E = mc^2" },
                { id: "B", text: "F = ma" },
                { id: "C", text: "v = s/t" },
                { id: "D", text: "P = F/A" },
            ],
            answer: "A",
        },
        {
            question: "Nguyên tố hóa học nào có số nguyên tử là 79?",
            options: [
                { id: "A", text: "Bạc" },
                { id: "B", text: "Vàng" },
                { id: "C", text: "Đồng" },
                { id: "D", text: "Sắt" },
            ],
            answer: "B",
        },
    ],

    // Bộ 14: Rất khó
    [
        {
            question: "  của Nam Phi là gì?",
            options: [
                { id: "A", text: "Cape Town" },
                { id: "B", text: "Pretoria" },
                { id: "C", text: "Johannesburg" },
                { id: "D", text: "Durban" },
            ],
            answer: "B",
        },
        {
            question: "Ai là tác giả của 'Ulysses'?",
            options: [
                { id: "A", text: "James Joyce" },
                { id: "B", text: "William Faulkner" },
                { id: "C", text: "Ernest Hemingway" },
                { id: "D", text: "F. Scott Fitzgerald" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào quay chậm nhất quanh trục?",
            options: [
                { id: "A", text: "Sao Kim" },
                { id: "B", text: "Sao Thủy" },
                { id: "C", text: "Trái Đất" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào có điện tích âm lớn nhất trong bảng tuần hoàn?",
            options: [
                { id: "A", text: "Flo" },
                { id: "B", text: "Oxy" },
                { id: "C", text: "Nitơ" },
                { id: "D", text: "Clo" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra định luật vạn vật hấp dẫn?",
            options: [
                { id: "A", text: "Isaac Newton" },
                { id: "B", text: "Albert Einstein" },
                { id: "C", text: "Galileo Galilei" },
                { id: "D", text: "Johannes Kepler" },
            ],
            answer: "A",
        },
        {
            question: "Đơn vị đo nhiệt độ trong hệ SI là gì?",
            options: [
                { id: "A", text: "Celsius" },
                { id: "B", text: "Kelvin" },
                { id: "C", text: "Fahrenheit" },
                { id: "D", text: "Rankine" },
            ],
            answer: "B",
        },
        {
            question: "Hành tinh nào có nhiều vệ tinh nhất?",
            options: [
                { id: "A", text: "Sao Mộc" },
                { id: "B", text: "Sao Thổ" },
                { id: "C", text: "Sao Thiên Vương" },
                { id: "D", text: "Trái Đất" },
            ],
            answer: "B",
        },
        {
            question: "Phản ứng hóa học nào tạo ra năng lượng trong Mặt Trời?",
            options: [
                { id: "A", text: "Phân hủy" },
                { id: "B", text: "Tổng hợp hạt nhân" },
                { id: "C", text: "Oxy hóa" },
                { id: "D", text: "Phân rã phóng xạ" },
            ],
            answer: "B",
        },
        {
            question: "Công thức nào biểu thị định luật Kepler thứ ba?",
            options: [
                { id: "A", text: "T^2 = kR^3" },
                { id: "B", text: "F = ma" },
                { id: "C", text: "E = mc^2" },
                { id: "D", text: "v = u + at" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra định luật Ohm?",
            options: [
                { id: "A", text: "Georg Simon Ohm" },
                { id: "B", text: "Michael Faraday" },
                { id: "C", text: "James Maxwell" },
                { id: "D", text: "Nikola Tesla" },
            ],
            answer: "A",
        },
    ],

    // Bộ 15: Cực khó (kiến thức chuyên ngành)
    [
        {
            question: "Thủ đô của Argentina là gì?",
            options: [
                { id: "A", text: "Buenos Aires" },
                { id: "B", text: "Córdoba" },
                { id: "C", text: "Rosario" },
                { id: "D", text: "Mendoza" },
            ],
            answer: "A",
        },
        {
            question: "Ai là tác giả của 'Một trăm năm cô đơn'?",
            options: [
                { id: "A", text: "Gabriel García Márquez" },
                { id: "B", text: "Pablo Neruda" },
                { id: "C", text: "Jorge Luis Borges" },
                { id: "D", text: "Mario Vargas Llosa" },
            ],
            answer: "A",
        },
        {
            question: "Hành tinh nào có áp suất khí quyển cao nhất?",
            options: [
                { id: "A", text: "Sao Kim" },
                { id: "B", text: "Sao Mộc" },
                { id: "C", text: "Trái Đất" },
                { id: "D", text: "Sao Hỏa" },
            ],
            answer: "A",
        },
        {
            question: "Chất nào là nguyên tố phóng xạ tự nhiên?",
            options: [
                { id: "A", text: "Uranium" },
                { id: "B", text: "Sắt" },
                { id: "C", text: "Đồng" },
                { id: "D", text: "Nhôm" },
            ],
            answer: "A",
        },
        {
            question: "Ai phát minh ra thuyết tương đối?",
            options: [
                { id: "A", text: "Isaac Newton" },
                { id: "B", text: "Albert Einstein" },
                { id: "C", text: "Galileo Galilei" },
                { id: "D", text: "Niels Bohr" },
            ],
            answer: "B",
        },
        {
            question: "Phản ứng nào xảy ra trong pin năng lượng mặt trời?",
            options: [
                { id: "A", text: "Phản ứng hạt nhân" },
                { id: "B", text: "Hiệu ứng quang điện" },
                { id: "C", text: "Phản ứng hóa học" },
                { id: "D", text: "Phản ứng nhiệt hạch" },
            ],
            answer: "B",
        },
        {
            question: "Trong vật lý, 'hiệu ứng Doppler' là gì?",
            options: [
                { id: "A", text: "Sự thay đổi tần số sóng do chuyển động tương đối" },
                { id: "B", text: "Sự phân rã của các hạt nhân nguyên tử" },
                { id: "C", text: "Sự phản xạ của sóng âm" },
                { id: "D", text: "Sự nhiễu xạ của ánh sáng" },
            ],
            answer: "A",
        },
        {
            question: "Công thức nào biểu thị định luật bảo toàn khối lượng?",
            options: [
                { id: "A", text: "Khối lượng trước phản ứng = khối lượng sau phản ứng" },
                { id: "B", text: "Khối lượng giảm dần theo thời gian" },
                { id: "C", text: "Khối lượng thay đổi theo nhiệt độ" },
                { id: "D", text: "Khối lượng tăng lên theo thời gian" },
            ],
            answer: "A",
        },
        {
            question: "Nguyên tố nào có số nguyên tử là 1?",
            options: [
                { id: "A", text: "Oxy" },
                { id: "B", text: "Hydro" },
                { id: "C", text: "Heli" },
                { id: "D", text: "Nitơ" },
            ],
            answer: "B",
        },
        {
            question: "Trong toán học, tập hợp nào vô hạn đếm được?",
            options: [
                { id: "A", text: "Tập các số thực" },
                { id: "B", text: "Tập các số nguyên" },
                { id: "C", text: "Tập các điểm trên đoạn thẳng" },
                { id: "D", text: "Tập các số vô tỉ" },
            ],
            answer: "B",
        },
    ],
];
