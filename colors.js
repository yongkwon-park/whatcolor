// ==========================================
// WhatColor v2 - Color Database
// 세부 색상 데이터베이스
// ==========================================

const COLOR_DATABASE = [

    // =====================
    // BLACK / GRAY
    // =====================

    { name: "Black", ko: "검정", hex: "#000000" },
    { name: "Jet Black", ko: "제트 블랙", hex: "#0A0A0A" },
    { name: "Off Black", ko: "오프화이트 블랙", hex: "#1B1B1B" },
    { name: "Charcoal", ko: "차콜", hex: "#36454F" },
    { name: "Anthracite", ko: "앤트러사이트", hex: "#383E42" },
    { name: "Graphite", ko: "그래파이트", hex: "#41424C" },
    { name: "Dark Slate Gray", ko: "다크 슬레이트 그레이", hex: "#2F4F4F" },
    { name: "Dim Gray", ko: "딤 그레이", hex: "#696969" },
    { name: "Slate Gray", ko: "슬레이트 그레이", hex: "#708090" },
    { name: "Cool Gray", ko: "쿨 그레이", hex: "#8C92AC" },
    { name: "Warm Gray", ko: "웜 그레이", hex: "#8D837A" },
    { name: "Stone Gray", ko: "스톤 그레이", hex: "#928E85" },
    { name: "Gray", ko: "회색", hex: "#808080" },
    { name: "Smoke Gray", ko: "스모크 그레이", hex: "#848884" },
    { name: "Dark Gray", ko: "다크 그레이", hex: "#A9A9A9" },
    { name: "Ash Gray", ko: "애쉬 그레이", hex: "#B2BEB5" },
    { name: "Silver", ko: "실버", hex: "#C0C0C0" },
    { name: "Light Gray", ko: "라이트 그레이", hex: "#D3D3D3" },
    { name: "Gainsboro", ko: "게인즈버러", hex: "#DCDCDC" },
    { name: "White Smoke", ko: "화이트 스모크", hex: "#F5F5F5" },


    // =====================
    // WHITE / CREAM
    // =====================

    { name: "White", ko: "흰색", hex: "#FFFFFF" },
    { name: "Off White", ko: "오프화이트", hex: "#FAF9F6" },
    { name: "Snow", ko: "스노우 화이트", hex: "#FFFAFA" },
    { name: "Ghost White", ko: "고스트 화이트", hex: "#F8F8FF" },
    { name: "Floral White", ko: "플로럴 화이트", hex: "#FFFAF0" },
    { name: "Ivory", ko: "아이보리", hex: "#FFFFF0" },
    { name: "Cream", ko: "크림", hex: "#FFFDD0" },
    { name: "Eggshell", ko: "에그쉘", hex: "#F0EAD6" },
    { name: "Pearl", ko: "펄", hex: "#EAE0C8" },
    { name: "Bone", ko: "본", hex: "#E3DAC9" },
    { name: "Linen", ko: "리넨", hex: "#FAF0E6" },
    { name: "Old Lace", ko: "올드 레이스", hex: "#FDF5E6" },
    { name: "Antique White", ko: "앤티크 화이트", hex: "#FAEBD7" },
    { name: "Cornsilk", ko: "콘실크", hex: "#FFF8DC" },
    { name: "Vanilla", ko: "바닐라", hex: "#F3E5AB" },


    // =====================
    // BEIGE / TAN
    // =====================

    { name: "Beige", ko: "베이지", hex: "#F5F5DC" },
    { name: "Ecru", ko: "에크루", hex: "#C2B280" },
    { name: "Oatmeal", ko: "오트밀", hex: "#D6C4A8" },
    { name: "Sand", ko: "샌드", hex: "#C2B280" },
    { name: "Tan", ko: "탄", hex: "#D2B48C" },
    { name: "Wheat", ko: "위트", hex: "#F5DEB3" },
    { name: "Burlywood", ko: "벌리우드", hex: "#DEB887" },
    { name: "Camel", ko: "카멜", hex: "#C19A6B" },
    { name: "Taupe", ko: "토프", hex: "#8B7D6B" },
    { name: "Greige", ko: "그레이지", hex: "#B0A999" },
    { name: "Bisque", ko: "비스크", hex: "#FFE4C4" },
    { name: "Moccasin", ko: "모카신", hex: "#FFE4B5" },
    { name: "Navajo White", ko: "나바호 화이트", hex: "#FFDEAD" },
    { name: "Peach Puff", ko: "피치 퍼프", hex: "#FFDAB9" },


    // =====================
    // BROWN
    // =====================

    { name: "Brown", ko: "브라운", hex: "#A52A2A" },
    { name: "Saddle Brown", ko: "새들 브라운", hex: "#8B4513" },
    { name: "Sienna", ko: "시에나", hex: "#A0522D" },
    { name: "Chocolate", ko: "초콜릿", hex: "#D2691E" },
    { name: "Coffee", ko: "커피", hex: "#6F4E37" },
    { name: "Mocha", ko: "모카", hex: "#967969" },
    { name: "Espresso", ko: "에스프레소", hex: "#4B3621" },
    { name: "Chestnut", ko: "체스트넛", hex: "#954535" },
    { name: "Mahogany", ko: "마호가니", hex: "#C04000" },
    { name: "Caramel", ko: "카라멜", hex: "#C68E17" },
    { name: "Rosy Brown", ko: "로지 브라운", hex: "#BC8F8F" },
    { name: "Peru", ko: "페루 브라운", hex: "#CD853F" },
    { name: "Sandy Brown", ko: "샌디 브라운", hex: "#F4A460" },


    // =====================
    // RED
    // =====================

    { name: "Red", ko: "빨강", hex: "#FF0000" },
    { name: "Dark Red", ko: "다크 레드", hex: "#8B0000" },
    { name: "Scarlet", ko: "스칼렛", hex: "#FF2400" },
    { name: "Crimson", ko: "크림슨", hex: "#DC143C" },
    { name: "Firebrick", ko: "파이어브릭", hex: "#B22222" },
    { name: "Brick Red", ko: "브릭 레드", hex: "#AA4A44" },
    { name: "Indian Red", ko: "인디언 레드", hex: "#CD5C5C" },
    { name: "Cherry Red", ko: "체리 레드", hex: "#D2042D" },
    { name: "Ruby", ko: "루비", hex: "#E0115F" },
    { name: "Burgundy", ko: "버건디", hex: "#800020" },
    { name: "Wine", ko: "와인", hex: "#722F37" },
    { name: "Oxblood", ko: "옥스블러드", hex: "#4A0000" },
    { name: "Rose Red", ko: "로즈 레드", hex: "#C21E56" },


    // =====================
    // ORANGE / CORAL
    // =====================

    { name: "Orange", ko: "주황", hex: "#FFA500" },
    { name: "Dark Orange", ko: "다크 오렌지", hex: "#FF8C00" },
    { name: "Orange Red", ko: "오렌지 레드", hex: "#FF4500" },
    { name: "Tangerine", ko: "탠저린", hex: "#F28500" },
    { name: "Coral", ko: "코랄", hex: "#FF7F50" },
    { name: "Tomato", ko: "토마토", hex: "#FF6347" },
    { name: "Terracotta", ko: "테라코타", hex: "#E2725B" },
    { name: "Rust", ko: "러스트", hex: "#B7410E" },
    { name: "Copper", ko: "코퍼", hex: "#B87333" },
    { name: "Bronze", ko: "브론즈", hex: "#CD7F32" },
    { name: "Peach", ko: "피치", hex: "#FFE5B4" },
    { name: "Apricot", ko: "애프리콧", hex: "#FBCEB1" },
    { name: "Salmon", ko: "살몬", hex: "#FA8072" },
    { name: "Light Salmon", ko: "라이트 살몬", hex: "#FFA07A" },
    { name: "Dark Salmon", ko: "다크 살몬", hex: "#E9967A" },


    // =====================
    // YELLOW / GOLD
    // =====================

    { name: "Yellow", ko: "노랑", hex: "#FFFF00" },
    { name: "Lemon Yellow", ko: "레몬 옐로", hex: "#FFF44F" },
    { name: "Canary Yellow", ko: "카나리아 옐로", hex: "#FFFF8F" },
    { name: "Butter Yellow", ko: "버터 옐로", hex: "#FFFD74" },
    { name: "Light Yellow", ko: "라이트 옐로", hex: "#FFFFE0" },
    { name: "Gold", ko: "골드", hex: "#FFD700" },
    { name: "Amber", ko: "앰버", hex: "#FFBF00" },
    { name: "Mustard", ko: "머스타드", hex: "#FFDB58" },
    { name: "Ochre", ko: "오커", hex: "#CC7722" },
    { name: "Goldenrod", ko: "골든로드", hex: "#DAA520" },
    { name: "Dark Goldenrod", ko: "다크 골든로드", hex: "#B8860B" },
    { name: "Khaki", ko: "카키", hex: "#F0E68C" },
    { name: "Dark Khaki", ko: "다크 카키", hex: "#BDB76B" },
    { name: "Pale Goldenrod", ko: "페일 골든로드", hex: "#EEE8AA" },


    // =====================
    // GREEN
    // =====================

    { name: "Green", ko: "초록", hex: "#008000" },
    { name: "Dark Green", ko: "다크 그린", hex: "#006400" },
    { name: "Forest Green", ko: "포레스트 그린", hex: "#228B22" },
    { name: "Hunter Green", ko: "헌터 그린", hex: "#355E3B" },
    { name: "Bottle Green", ko: "보틀 그린", hex: "#006A4E" },
    { name: "Pine Green", ko: "파인 그린", hex: "#01796F" },
    { name: "Emerald", ko: "에메랄드", hex: "#50C878" },
    { name: "Jade", ko: "제이드", hex: "#00A86B" },
    { name: "Kelly Green", ko: "켈리 그린", hex: "#4CBB17" },
    { name: "Sea Green", ko: "씨 그린", hex: "#2E8B57" },
    { name: "Medium Sea Green", ko: "미디엄 씨 그린", hex: "#3CB371" },
    { name: "Dark Sea Green", ko: "다크 씨 그린", hex: "#8FBC8F" },
    { name: "Light Green", ko: "라이트 그린", hex: "#90EE90" },
    { name: "Pale Green", ko: "페일 그린", hex: "#98FB98" },
    { name: "Mint", ko: "민트", hex: "#98FF98" },
    { name: "Mint Cream", ko: "민트 크림", hex: "#F5FFFA" },
    { name: "Seafoam", ko: "씨폼", hex: "#9FE2BF" },
    { name: "Sage Green", ko: "세이지 그린", hex: "#9CAF88" },
    { name: "Moss Green", ko: "모스 그린", hex: "#8A9A5B" },
    { name: "Army Green", ko: "아미 그린", hex: "#4B5320" },
    { name: "Olive Green", ko: "올리브 그린", hex: "#808000" },
    { name: "Olive Drab", ko: "올리브 드랩", hex: "#6B8E23" },
    { name: "Dark Olive Green", ko: "다크 올리브 그린", hex: "#556B2F" },
    { name: "Yellow Green", ko: "옐로 그린", hex: "#9ACD32" },
    { name: "Lime Green", ko: "라임 그린", hex: "#32CD32" },
    { name: "Lawn Green", ko: "론 그린", hex: "#7CFC00" },
    { name: "Chartreuse", ko: "샤르트뢰즈", hex: "#7FFF00" },
    { name: "Spring Green", ko: "스프링 그린", hex: "#00FF7F" },


    // =====================
    // TEAL / TURQUOISE
    // =====================

    { name: "Teal", ko: "틸", hex: "#008080" },
    { name: "Teal Blue", ko: "틸 블루", hex: "#367588" },
    { name: "Petrol Blue", ko: "페트롤 블루", hex: "#005F6A" },
    { name: "Dark Cyan", ko: "다크 시안", hex: "#008B8B" },
    { name: "Turquoise", ko: "터쿼이즈", hex: "#40E0D0" },
    { name: "Medium Turquoise", ko: "미디엄 터쿼이즈", hex: "#48D1CC" },
    { name: "Dark Turquoise", ko: "다크 터쿼이즈", hex: "#00CED1" },
    { name: "Pale Turquoise", ko: "페일 터쿼이즈", hex: "#AFEEEE" },
    { name: "Aquamarine", ko: "아쿠아마린", hex: "#7FFFD4" },


    // =====================
    // BLUE
    // =====================

    { name: "Navy", ko: "네이비", hex: "#000080" },
    { name: "Midnight Blue", ko: "미드나이트 블루", hex: "#191970" },
    { name: "Oxford Blue", ko: "옥스퍼드 블루", hex: "#002147" },
    { name: "Prussian Blue", ko: "프러시안 블루", hex: "#003153" },
    { name: "Marine Blue", ko: "마린 블루", hex: "#01386A" },
    { name: "Dark Blue", ko: "다크 블루", hex: "#00008B" },
    { name: "Blue", ko: "파랑", hex: "#0000FF" },
    { name: "Medium Blue", ko: "미디엄 블루", hex: "#0000CD" },
    { name: "Cobalt Blue", ko: "코발트 블루", hex: "#0047AB" },
    { name: "Sapphire Blue", ko: "사파이어 블루", hex: "#0F52BA" },
    { name: "Royal Blue", ko: "로열 블루", hex: "#4169E1" },
    { name: "French Blue", ko: "프렌치 블루", hex: "#0072BB" },
    { name: "Denim Blue", ko: "데님 블루", hex: "#1560BD" },
    { name: "Cerulean", ko: "세룰리언", hex: "#007BA7" },
    { name: "Steel Blue", ko: "스틸 블루", hex: "#4682B4" },
    { name: "Cadet Blue", ko: "카뎃 블루", hex: "#5F9EA0" },
    { name: "Dodger Blue", ko: "도저 블루", hex: "#1E90FF" },
    { name: "Deep Sky Blue", ko: "딥 스카이 블루", hex: "#00BFFF" },
    { name: "Sky Blue", ko: "스카이 블루", hex: "#87CEEB" },
    { name: "Light Sky Blue", ko: "라이트 스카이 블루", hex: "#87CEFA" },
    { name: "Cornflower Blue", ko: "콘플라워 블루", hex: "#6495ED" },
    { name: "Light Blue", ko: "라이트 블루", hex: "#ADD8E6" },
    { name: "Powder Blue", ko: "파우더 블루", hex: "#B0E0E6" },
    { name: "Baby Blue", ko: "베이비 블루", hex: "#89CFF0" },
    { name: "Pastel Blue", ko: "파스텔 블루", hex: "#A7C7E7" },
    { name: "Ice Blue", ko: "아이스 블루", hex: "#D6F1F5" },
    { name: "Alice Blue", ko: "앨리스 블루", hex: "#F0F8FF" },
    { name: "Light Steel Blue", ko: "라이트 스틸 블루", hex: "#B0C4DE" },


    // =====================
    // INDIGO / PURPLE
    // =====================

    { name: "Indigo", ko: "인디고", hex: "#4B0082" },
    { name: "Dark Slate Blue", ko: "다크 슬레이트 블루", hex: "#483D8B" },
    { name: "Slate Blue", ko: "슬레이트 블루", hex: "#6A5ACD" },
    { name: "Medium Slate Blue", ko: "미디엄 슬레이트 블루", hex: "#7B68EE" },
    { name: "Blue Violet", ko: "블루 바이올렛", hex: "#8A2BE2" },
    { name: "Purple", ko: "보라", hex: "#800080" },
    { name: "Dark Violet", ko: "다크 바이올렛", hex: "#9400D3" },
    { name: "Dark Orchid", ko: "다크 오키드", hex: "#9932CC" },
    { name: "Medium Orchid", ko: "미디엄 오키드", hex: "#BA55D3" },
    { name: "Orchid", ko: "오키드", hex: "#DA70D6" },
    { name: "Violet", ko: "바이올렛", hex: "#EE82EE" },
    { name: "Amethyst", ko: "애머시스트", hex: "#9966CC" },
    { name: "Grape", ko: "그레이프", hex: "#6F2DA8" },
    { name: "Eggplant", ko: "에그플랜트", hex: "#614051" },
    { name: "Plum Purple", ko: "플럼 퍼플", hex: "#673147" },
    { name: "Dusty Purple", ko: "더스티 퍼플", hex: "#825F87" },
    { name: "Mauve", ko: "모브", hex: "#E0B0FF" },
    { name: "Lilac", ko: "라일락", hex: "#C8A2C8" },
    { name: "Lavender", ko: "라벤더", hex: "#E6E6FA" },
    { name: "Periwinkle", ko: "페리윙클", hex: "#CCCCFF" },
    { name: "Pastel Purple", ko: "파스텔 퍼플", hex: "#C3B1E1" },
    { name: "Plum", ko: "플럼", hex: "#DDA0DD" },
    { name: "Thistle", ko: "시슬", hex: "#D8BFD8" },


    // =====================
    // PINK / ROSE
    // =====================

    { name: "Pink", ko: "핑크", hex: "#FFC0CB" },
    { name: "Light Pink", ko: "라이트 핑크", hex: "#FFB6C1" },
    { name: "Baby Pink", ko: "베이비 핑크", hex: "#F4C2C2" },
    { name: "Pastel Pink", ko: "파스텔 핑크", hex: "#FFD1DC" },
    { name: "Hot Pink", ko: "핫 핑크", hex: "#FF69B4" },
    { name: "Deep Pink", ko: "딥 핑크", hex: "#FF1493" },
    { name: "Rose", ko: "로즈", hex: "#FF007F" },
    { name: "Blush", ko: "블러시", hex: "#DE5D83" },
    { name: "Dusty Rose", ko: "더스티 로즈", hex: "#C9A9A6" },
    { name: "Salmon Pink", ko: "살몬 핑크", hex: "#FF91A4" },
    { name: "Pale Violet Red", ko: "페일 바이올렛 레드", hex: "#DB7093" },
    { name: "Medium Violet Red", ko: "미디엄 바이올렛 레드", hex: "#C71585" },
    { name: "Lavender Blush", ko: "라벤더 블러시", hex: "#FFF0F5" },
    { name: "Misty Rose", ko: "미스티 로즈", hex: "#FFE4E1" },


    // =====================
    // PASTEL
    // =====================

    { name: "Pastel Green", ko: "파스텔 그린", hex: "#C1E1C1" },
    { name: "Pastel Yellow", ko: "파스텔 옐로", hex: "#FDFD96" },


    // =====================
    // NEON
    // =====================

    { name: "Neon Red", ko: "네온 레드", hex: "#FF3131" },
    { name: "Neon Orange", ko: "네온 오렌지", hex: "#FF5F1F" },
    { name: "Neon Yellow", ko: "네온 옐로", hex: "#FFF01F" },
    { name: "Neon Green", ko: "네온 그린", hex: "#39FF14" },
    { name: "Neon Blue", ko: "네온 블루", hex: "#1F51FF" },
    { name: "Electric Blue", ko: "일렉트릭 블루", hex: "#7DF9FF" },
    { name: "Neon Pink", ko: "네온 핑크", hex: "#FF10F0" },


    // =====================
    // ADDITIONAL COLORS
    // =====================

    { name: "Aqua", ko: "아쿠아", hex: "#00FFFF" },
    { name: "Azure", ko: "애저", hex: "#F0FFFF" },
    { name: "Light Cyan", ko: "라이트 시안", hex: "#E0FFFF" },
    { name: "Honeydew", ko: "허니듀", hex: "#F0FFF0" },
    { name: "Lemon Chiffon", ko: "레몬 시폰", hex: "#FFFACD" },
    { name: "Light Goldenrod Yellow", ko: "라이트 골든로드 옐로", hex: "#FAFAD2" },
    { name: "Papaya Whip", ko: "파파야 휩", hex: "#FFEFD5" },
    { name: "Seashell", ko: "씨쉘", hex: "#FFF5EE" }
];