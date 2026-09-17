// ==========================================
// WhatColor v3
// Color Detection + Fashion Coordination
// ==========================================

const camera = document.getElementById("camera");
const canvas = document.getElementById("canvas");

const startButton = document.getElementById("startButton");
const detectButton = document.getElementById("detectButton");

const statusText = document.getElementById("status");
const colorPreview = document.getElementById("colorPreview");
const colorName = document.getElementById("colorName");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");

const outfitSection = document.getElementById("outfitSection");
const topButton = document.getElementById("topButton");
const bottomButton = document.getElementById("bottomButton");

const recommendationSection =
    document.getElementById("recommendationSection");

const recommendationTitle =
    document.getElementById("recommendationTitle");

const recommendationDescription =
    document.getElementById("recommendationDescription");

const safeRecommendations =
    document.getElementById("safeRecommendations");

const toneRecommendations =
    document.getElementById("toneRecommendations");

const pointRecommendations =
    document.getElementById("pointRecommendations");


let currentMeasuredColor = null;


// ==========================================
// 코디용 대표 색상
// ==========================================

const FASHION_COLORS = {

    black: {
        name: "Black",
        ko: "블랙",
        hex: "#111111"
    },

    charcoal: {
        name: "Charcoal",
        ko: "차콜",
        hex: "#36454F"
    },

    gray: {
        name: "Gray",
        ko: "그레이",
        hex: "#808080"
    },

    lightGray: {
        name: "Light Gray",
        ko: "라이트 그레이",
        hex: "#D3D3D3"
    },

    white: {
        name: "White",
        ko: "화이트",
        hex: "#FFFFFF"
    },

    offWhite: {
        name: "Off White",
        ko: "오프화이트",
        hex: "#FAF9F6"
    },

    ivory: {
        name: "Ivory",
        ko: "아이보리",
        hex: "#FFFFF0"
    },

    cream: {
        name: "Cream",
        ko: "크림",
        hex: "#FFFDD0"
    },

    beige: {
        name: "Beige",
        ko: "베이지",
        hex: "#F5F5DC"
    },

    camel: {
        name: "Camel",
        ko: "카멜",
        hex: "#C19A6B"
    },

    brown: {
        name: "Brown",
        ko: "브라운",
        hex: "#795548"
    },

    darkBrown: {
        name: "Espresso",
        ko: "다크 브라운",
        hex: "#4B3621"
    },

    navy: {
        name: "Navy",
        ko: "네이비",
        hex: "#000080"
    },

    blue: {
        name: "Blue",
        ko: "블루",
        hex: "#4169E1"
    },

    lightBlue: {
        name: "Light Blue",
        ko: "라이트 블루",
        hex: "#ADD8E6"
    },

    denim: {
        name: "Denim Blue",
        ko: "데님 블루",
        hex: "#1560BD"
    },

    olive: {
        name: "Olive",
        ko: "올리브",
        hex: "#6B7045"
    },

    sage: {
        name: "Sage Green",
        ko: "세이지 그린",
        hex: "#9CAF88"
    },

    green: {
        name: "Forest Green",
        ko: "그린",
        hex: "#355E3B"
    },

    burgundy: {
        name: "Burgundy",
        ko: "버건디",
        hex: "#800020"
    },

    red: {
        name: "Red",
        ko: "레드",
        hex: "#C62828"
    },

    pink: {
        name: "Dusty Rose",
        ko: "더스티 핑크",
        hex: "#C9A9A6"
    },

    purple: {
        name: "Dusty Purple",
        ko: "더스티 퍼플",
        hex: "#825F87"
    },

    mustard: {
        name: "Mustard",
        ko: "머스타드",
        hex: "#D4A017"
    }
};


// ==========================================
// 패션 코디 추천 데이터
//
// safe  = 가장 무난한 조합
// tone  = 톤온톤 / 자연스러운 조합
// point = 포인트 조합
// ==========================================

const COORDINATION_RULES = {

    black: {
        safe: ["white", "offWhite", "gray", "beige"],
        tone: ["charcoal", "lightGray", "cream"],
        point: ["burgundy", "olive", "blue"]
    },

    charcoal: {
        safe: ["white", "offWhite", "lightGray", "beige"],
        tone: ["black", "gray", "navy"],
        point: ["burgundy", "sage", "lightBlue"]
    },

    gray: {
        safe: ["white", "black", "navy", "offWhite"],
        tone: ["charcoal", "lightGray", "cream"],
        point: ["burgundy", "blue", "olive"]
    },

    lightGray: {
        safe: ["white", "black", "navy", "charcoal"],
        tone: ["gray", "offWhite", "cream"],
        point: ["burgundy", "green", "blue"]
    },

    white: {
        safe: ["black", "navy", "gray", "beige"],
        tone: ["offWhite", "cream", "lightGray"],
        point: ["olive", "burgundy", "denim"]
    },

    offWhite: {
        safe: ["navy", "black", "charcoal", "beige"],
        tone: ["cream", "camel", "lightGray"],
        point: ["olive", "burgundy", "denim"]
    },

    ivory: {
        safe: ["navy", "brown", "charcoal", "beige"],
        tone: ["cream", "camel", "sage"],
        point: ["burgundy", "olive", "denim"]
    },

    cream: {
        safe: ["navy", "brown", "charcoal", "black"],
        tone: ["ivory", "beige", "camel"],
        point: ["olive", "burgundy", "denim"]
    },

    beige: {
        safe: ["white", "navy", "black", "charcoal"],
        tone: ["cream", "camel", "brown"],
        point: ["olive", "burgundy", "denim"]
    },

    camel: {
        safe: ["white", "black", "navy", "cream"],
        tone: ["beige", "brown", "ivory"],
        point: ["olive", "burgundy", "denim"]
    },

    brown: {
        safe: ["white", "cream", "beige", "navy"],
        tone: ["camel", "ivory", "darkBrown"],
        point: ["sage", "lightBlue", "burgundy"]
    },

    darkBrown: {
        safe: ["cream", "white", "beige", "lightGray"],
        tone: ["brown", "camel", "ivory"],
        point: ["sage", "lightBlue", "denim"]
    },

    navy: {
        safe: ["white", "ivory", "beige", "lightGray"],
        tone: ["lightBlue", "denim", "gray"],
        point: ["camel", "brown", "olive"]
    },

    blue: {
        safe: ["white", "offWhite", "gray", "beige"],
        tone: ["navy", "lightBlue", "denim"],
        point: ["camel", "brown", "burgundy"]
    },

    lightBlue: {
        safe: ["white", "navy", "beige", "charcoal"],
        tone: ["denim", "blue", "lightGray"],
        point: ["brown", "camel", "burgundy"]
    },

    denim: {
        safe: ["white", "offWhite", "gray", "beige"],
        tone: ["navy", "lightBlue", "blue"],
        point: ["brown", "olive", "burgundy"]
    },

    olive: {
        safe: ["white", "offWhite", "beige", "black"],
        tone: ["sage", "brown", "camel"],
        point: ["burgundy", "denim", "lightBlue"]
    },

    sage: {
        safe: ["white", "cream", "beige", "charcoal"],
        tone: ["olive", "ivory", "camel"],
        point: ["burgundy", "navy", "brown"]
    },

    green: {
        safe: ["white", "cream", "beige", "black"],
        tone: ["olive", "sage", "brown"],
        point: ["burgundy", "denim", "camel"]
    },

    burgundy: {
        safe: ["white", "cream", "gray", "black"],
        tone: ["charcoal", "brown", "beige"],
        point: ["navy", "sage", "denim"]
    },

    red: {
        safe: ["white", "black", "charcoal", "beige"],
        tone: ["gray", "cream", "brown"],
        point: ["navy", "denim", "olive"]
    },

    pink: {
        safe: ["white", "cream", "gray", "navy"],
        tone: ["beige", "lightGray", "ivory"],
        point: ["denim", "olive", "brown"]
    },

    purple: {
        safe: ["white", "gray", "black", "cream"],
        tone: ["charcoal", "lightGray", "navy"],
        point: ["sage", "denim", "beige"]
    },

    mustard: {
        safe: ["white", "cream", "navy", "charcoal"],
        tone: ["brown", "camel", "beige"],
        point: ["denim", "olive", "burgundy"]
    }
};


// ==========================================
// 카메라 시작
// ==========================================

startButton.addEventListener("click", async () => {

    try {

        const stream =
            await navigator.mediaDevices.getUserMedia({

                video: {
                    facingMode: {
                        ideal: "environment"
                    }
                },

                audio: false
            });

        camera.srcObject = stream;

        await camera.play();

        startButton.textContent =
            "카메라 실행 중";

        startButton.disabled = true;

        detectButton.disabled = false;

        statusText.textContent =
            "가운데 사각형에 옷의 색상을 맞춰주세요.";

    } catch (error) {

        console.error(error);

        statusText.textContent =
            "카메라를 사용할 수 없습니다.";
    }
});


// ==========================================
// 색상 측정
// ==========================================

detectButton.addEventListener("click", () => {

    if (
        !camera.videoWidth ||
        !camera.videoHeight
    ) {
        return;
    }

    canvas.width =
        camera.videoWidth;

    canvas.height =
        camera.videoHeight;

    const ctx =
        canvas.getContext(
            "2d",
            {
                willReadFrequently: true
            }
        );

    ctx.drawImage(
        camera,
        0,
        0,
        canvas.width,
        canvas.height
    );


    const centerX =
        Math.floor(
            canvas.width / 2
        );

    const centerY =
        Math.floor(
            canvas.height / 2
        );

    const sampleSize = 40;


    const imageData =
        ctx.getImageData(

            centerX -
            sampleSize / 2,

            centerY -
            sampleSize / 2,

            sampleSize,
            sampleSize
        );


    const data =
        imageData.data;


    // ======================================
    // Median 대표색 추출
    // ======================================

    const redValues = [];
    const greenValues = [];
    const blueValues = [];


    for (
        let i = 0;
        i < data.length;
        i += 4
    ) {

        redValues.push(
            data[i]
        );

        greenValues.push(
            data[i + 1]
        );

        blueValues.push(
            data[i + 2]
        );
    }


    redValues.sort(
        (a, b) => a - b
    );

    greenValues.sort(
        (a, b) => a - b
    );

    blueValues.sort(
        (a, b) => a - b
    );


    const middle =
        Math.floor(
            redValues.length / 2
        );


    const r =
        redValues[middle];

    const g =
        greenValues[middle];

    const b =
        blueValues[middle];


    // ======================================
    // 가장 가까운 색상 찾기
    // ======================================

    const measuredHex =
        rgbToHex(r, g, b);

    const closestColor =
        findClosestColor(
            r,
            g,
            b
        );


    currentMeasuredColor = {

        r,
        g,
        b,

        hex: measuredHex,

        closestColor,

        fashionGroup:
            classifyFashionColor(
                r,
                g,
                b
            )
    };


    // ======================================
    // 화면 출력
    // ======================================

    colorPreview.style.backgroundColor =
        `rgb(${r}, ${g}, ${b})`;


    colorName.innerHTML =

        `${closestColor.ko}
        <br>
        <small>
            ${closestColor.name}
        </small>`;


    hexValue.textContent =
        measuredHex;


    rgbValue.textContent =
        `${r}, ${g}, ${b}`;


    statusText.textContent =
        "색상 측정 완료";


    // 상의 / 하의 선택 표시

    outfitSection.classList.remove(
        "hidden"
    );


    // 이전 추천 초기화

    recommendationSection.classList.add(
        "hidden"
    );

    topButton.classList.remove(
        "selected"
    );

    bottomButton.classList.remove(
        "selected"
    );
});


// ==========================================
// 상의 선택
// ==========================================

topButton.addEventListener(
    "click",
    () => {

        if (!currentMeasuredColor) {
            return;
        }

        topButton.classList.add(
            "selected"
        );

        bottomButton.classList.remove(
            "selected"
        );

        showRecommendations(
            "top"
        );
    }
);


// ==========================================
// 하의 선택
// ==========================================

bottomButton.addEventListener(
    "click",
    () => {

        if (!currentMeasuredColor) {
            return;
        }

        bottomButton.classList.add(
            "selected"
        );

        topButton.classList.remove(
            "selected"
        );

        showRecommendations(
            "bottom"
        );
    }
);


// ==========================================
// 패션 색상군 판별
// HSL 기반
// ==========================================

function classifyFashionColor(
    r,
    g,
    b
) {

    const hsl =
        rgbToHsl(
            r,
            g,
            b
        );

    const h = hsl.h;
    const s = hsl.s;
    const l = hsl.l;


    // ======================================
    // 무채색 / 뉴트럴
    // ======================================

    if (
        l < 12
    ) {
        return "black";
    }


    if (
        s < 12 &&
        l < 30
    ) {
        return "charcoal";
    }


    if (
        s < 12 &&
        l < 65
    ) {
        return "gray";
    }


    if (
        s < 12 &&
        l < 88
    ) {
        return "lightGray";
    }


    if (
        s < 10 &&
        l >= 88
    ) {
        return "white";
    }


    // ======================================
    // 밝은 크림 / 베이지
    // ======================================

    if (
        h >= 35 &&
        h <= 65 &&
        s < 45 &&
        l > 88
    ) {
        return "ivory";
    }


    if (
        h >= 30 &&
        h <= 60 &&
        s < 55 &&
        l > 78
    ) {
        return "cream";
    }


    if (
        h >= 25 &&
        h <= 55 &&
        s < 50 &&
        l > 58
    ) {
        return "beige";
    }


    // ======================================
    // 브라운 / 카멜
    // ======================================

    if (
        h >= 20 &&
        h <= 45 &&
        l >= 45 &&
        l <= 70
    ) {
        return "camel";
    }


    if (
        h >= 10 &&
        h <= 45 &&
        l < 45
    ) {

        if (l < 25) {
            return "darkBrown";
        }

        return "brown";
    }


    // ======================================
    // 빨강 / 버건디 / 핑크
    // ======================================

    if (
        h >= 340 ||
        h < 15
    ) {

        if (
            l < 38
        ) {
            return "burgundy";
        }


        if (
            l > 70
        ) {
            return "pink";
        }


        return "red";
    }


    if (
        h >= 320 &&
        h < 340
    ) {

        if (
            l < 45
        ) {
            return "burgundy";
        }

        return "pink";
    }


    // ======================================
    // 주황 / 노랑
    // 패션에서는 머스타드/브라운 계열로 정리
    // ======================================

    if (
        h >= 15 &&
        h < 35
    ) {

        if (
            l < 45
        ) {
            return "brown";
        }

        return "camel";
    }


    if (
        h >= 35 &&
        h < 65
    ) {
        return "mustard";
    }


    // ======================================
    // 그린
    // ======================================

    if (
        h >= 65 &&
        h < 165
    ) {

        if (
            s < 35 &&
            l > 55
        ) {
            return "sage";
        }


        if (
            s < 55 ||
            l < 42
        ) {
            return "olive";
        }


        return "green";
    }


    // ======================================
    // 청록
    // ======================================

    if (
        h >= 165 &&
        h < 195
    ) {

        if (
            l < 40
        ) {
            return "navy";
        }

        return "blue";
    }


    // ======================================
    // 블루
    // ======================================

    if (
        h >= 195 &&
        h < 255
    ) {

        if (
            l < 32
        ) {
            return "navy";
        }


        if (
            l > 72
        ) {
            return "lightBlue";
        }


        if (
            s < 55
        ) {
            return "denim";
        }


        return "blue";
    }


    // ======================================
    // 보라
    // ======================================

    if (
        h >= 255 &&
        h < 320
    ) {

        if (
            l > 72
        ) {
            return "pink";
        }

        return "purple";
    }


    // fallback

    return "gray";
}


// ==========================================
// 코디 추천 출력
// ==========================================

function showRecommendations(
    clothingType
) {

    const group =
        currentMeasuredColor
            .fashionGroup;


    const rules =
        COORDINATION_RULES[group] ||
        COORDINATION_RULES.gray;


    const measuredName =
        currentMeasuredColor
            .closestColor
            .ko;


    if (
        clothingType === "top"
    ) {

        recommendationTitle.textContent =
            "추천 하의 색상";

        recommendationDescription.textContent =
            `${measuredName} 상의와 어울리기 쉬운 하의 색상입니다.`;

    } else {

        recommendationTitle.textContent =
            "추천 상의 색상";

        recommendationDescription.textContent =
            `${measuredName} 하의와 어울리기 쉬운 상의 색상입니다.`;
    }


    renderRecommendations(
        safeRecommendations,
        rules.safe
    );


    renderRecommendations(
        toneRecommendations,
        rules.tone
    );


    renderRecommendations(
        pointRecommendations,
        rules.point
    );


    recommendationSection
        .classList
        .remove(
            "hidden"
        );


    // 추천 결과 위치로 자연스럽게 이동

    setTimeout(
        () => {

            recommendationSection
                .scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"
                });

        },
        100
    );
}


// ==========================================
// 추천 카드 생성
// ==========================================

function renderRecommendations(
    container,
    colorKeys
) {

    container.innerHTML = "";


    colorKeys.forEach(
        key => {

            const color =
                FASHION_COLORS[key];


            if (!color) {
                return;
            }


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "color-card";


            card.innerHTML = `

                <div
                    class="color-card-preview"
                    style="
                        background-color:
                        ${color.hex};
                    "
                ></div>

                <div
                    class="color-card-text"
                >

                    <span
                        class="color-card-name"
                    >
                        ${color.ko}
                    </span>

                    <span
                        class="color-card-en"
                    >
                        ${color.name}
                    </span>

                </div>
            `;


            container.appendChild(
                card
            );
        }
    );
}


// ==========================================
// RGB → HSL
// 패션 색상군 분류용
// ==========================================

function rgbToHsl(
    r,
    g,
    b
) {

    r /= 255;
    g /= 255;
    b /= 255;


    const max =
        Math.max(
            r,
            g,
            b
        );


    const min =
        Math.min(
            r,
            g,
            b
        );


    let h;
    let s;

    const l =
        (
            max +
            min
        ) / 2;


    if (
        max === min
    ) {

        h = 0;
        s = 0;

    } else {

        const d =
            max - min;


        s =
            l > 0.5

                ? d /
                  (
                      2 -
                      max -
                      min
                  )

                : d /
                  (
                      max +
                      min
                  );


        switch (max) {

            case r:

                h =
                    (
                        g -
                        b
                    ) / d

                    +

                    (
                        g < b
                            ? 6
                            : 0
                    );

                break;


            case g:

                h =
                    (
                        b -
                        r
                    ) / d
                    + 2;

                break;


            default:

                h =
                    (
                        r -
                        g
                    ) / d
                    + 4;
        }


        h /= 6;
    }


    return {

        h:
            h * 360,

        s:
            s * 100,

        l:
            l * 100
    };
}


// ==========================================
// RGB → HEX
// ==========================================

function rgbToHex(
    r,
    g,
    b
) {

    return "#" +

        [r, g, b]

            .map(
                value =>

                    value
                        .toString(16)
                        .padStart(
                            2,
                            "0"
                        )
            )

            .join("")

            .toUpperCase();
}


// ==========================================
// HEX → RGB
// ==========================================

function hexToRgb(
    hex
) {

    const value =
        hex.replace(
            "#",
            ""
        );


    return {

        r:
            parseInt(
                value.substring(
                    0,
                    2
                ),
                16
            ),

        g:
            parseInt(
                value.substring(
                    2,
                    4
                ),
                16
            ),

        b:
            parseInt(
                value.substring(
                    4,
                    6
                ),
                16
            )
    };
}


// ==========================================
// RGB → LAB
// ==========================================

function rgbToLab(
    r,
    g,
    b
) {

    r /= 255;
    g /= 255;
    b /= 255;


    r =
        r > 0.04045

            ? Math.pow(
                (
                    r +
                    0.055
                ) /
                1.055,
                2.4
            )

            : r / 12.92;


    g =
        g > 0.04045

            ? Math.pow(
                (
                    g +
                    0.055
                ) /
                1.055,
                2.4
            )

            : g / 12.92;


    b =
        b > 0.04045

            ? Math.pow(
                (
                    b +
                    0.055
                ) /
                1.055,
                2.4
            )

            : b / 12.92;


    let x =
        r * 0.4124 +
        g * 0.3576 +
        b * 0.1805;


    let y =
        r * 0.2126 +
        g * 0.7152 +
        b * 0.0722;


    let z =
        r * 0.0193 +
        g * 0.1192 +
        b * 0.9505;


    x /= 0.95047;
    y /= 1.00000;
    z /= 1.08883;


    x =
        labTransform(x);

    y =
        labTransform(y);

    z =
        labTransform(z);


    return {

        L:
            116 * y - 16,

        a:
            500 *
            (
                x - y
            ),

        b:
            200 *
            (
                y - z
            )
    };
}


function labTransform(
    value
) {

    return (
        value > 0.008856
    )

        ? Math.cbrt(
            value
        )

        : (
            7.787 *
            value
        ) +
        (
            16 / 116
        );
}


// ==========================================
// CIEDE2000
// ==========================================

function deltaE2000(
    lab1,
    lab2
) {

    const L1 = lab1.L;
    const a1 = lab1.a;
    const b1 = lab1.b;

    const L2 = lab2.L;
    const a2 = lab2.a;
    const b2 = lab2.b;


    const avgL =
        (
            L1 +
            L2
        ) / 2;


    const C1 =
        Math.sqrt(
            a1 * a1 +
            b1 * b1
        );


    const C2 =
        Math.sqrt(
            a2 * a2 +
            b2 * b2
        );


    const avgC =
        (
            C1 +
            C2
        ) / 2;


    const avgC7 =
        Math.pow(
            avgC,
            7
        );


    const G =
        0.5 *
        (
            1 -
            Math.sqrt(

                avgC7 /

                (
                    avgC7 +
                    Math.pow(
                        25,
                        7
                    )
                )
            )
        );


    const a1Prime =
        (
            1 + G
        ) * a1;


    const a2Prime =
        (
            1 + G
        ) * a2;


    const C1Prime =
        Math.sqrt(

            a1Prime *
            a1Prime +

            b1 *
            b1
        );


    const C2Prime =
        Math.sqrt(

            a2Prime *
            a2Prime +

            b2 *
            b2
        );


    const avgCPrime =
        (
            C1Prime +
            C2Prime
        ) / 2;


    let h1Prime =
        radiansToDegrees(

            Math.atan2(
                b1,
                a1Prime
            )
        );


    if (
        h1Prime < 0
    ) {
        h1Prime += 360;
    }


    let h2Prime =
        radiansToDegrees(

            Math.atan2(
                b2,
                a2Prime
            )
        );


    if (
        h2Prime < 0
    ) {
        h2Prime += 360;
    }


    const deltaLPrime =
        L2 - L1;


    const deltaCPrime =
        C2Prime -
        C1Prime;


    let deltahPrime;


    if (
        C1Prime *
        C2Prime === 0
    ) {

        deltahPrime = 0;

    } else if (

        Math.abs(
            h2Prime -
            h1Prime
        ) <= 180

    ) {

        deltahPrime =
            h2Prime -
            h1Prime;

    } else if (
        h2Prime <=
        h1Prime
    ) {

        deltahPrime =
            h2Prime -
            h1Prime +
            360;

    } else {

        deltahPrime =
            h2Prime -
            h1Prime -
            360;
    }


    const deltaHPrime =

        2 *

        Math.sqrt(
            C1Prime *
            C2Prime
        )

        *

        Math.sin(

            degreesToRadians(
                deltahPrime / 2
            )
        );


    let avgHPrime;


    if (
        C1Prime *
        C2Prime === 0
    ) {

        avgHPrime =
            h1Prime +
            h2Prime;

    } else if (

        Math.abs(
            h1Prime -
            h2Prime
        ) <= 180

    ) {

        avgHPrime =
            (
                h1Prime +
                h2Prime
            ) / 2;

    } else if (

        h1Prime +
        h2Prime <
        360

    ) {

        avgHPrime =
            (
                h1Prime +
                h2Prime +
                360
            ) / 2;

    } else {

        avgHPrime =
            (
                h1Prime +
                h2Prime -
                360
            ) / 2;
    }


    const T =

        1

        -

        0.17 *
        Math.cos(
            degreesToRadians(
                avgHPrime - 30
            )
        )

        +

        0.24 *
        Math.cos(
            degreesToRadians(
                2 * avgHPrime
            )
        )

        +

        0.32 *
        Math.cos(
            degreesToRadians(
                3 * avgHPrime + 6
            )
        )

        -

        0.20 *
        Math.cos(
            degreesToRadians(
                4 * avgHPrime - 63
            )
        );


    const deltaTheta =

        30 *

        Math.exp(

            -Math.pow(

                (
                    avgHPrime -
                    275
                ) / 25,

                2
            )
        );


    const RC =

        2 *

        Math.sqrt(

            Math.pow(
                avgCPrime,
                7
            )

            /

            (
                Math.pow(
                    avgCPrime,
                    7
                )

                +

                Math.pow(
                    25,
                    7
                )
            )
        );


    const SL =

        1 +

        (
            0.015 *

            Math.pow(
                avgL - 50,
                2
            )
        )

        /

        Math.sqrt(

            20 +

            Math.pow(
                avgL - 50,
                2
            )
        );


    const SC =
        1 +
        0.045 *
        avgCPrime;


    const SH =
        1 +
        0.015 *
        avgCPrime *
        T;


    const RT =

        -Math.sin(

            degreesToRadians(
                2 *
                deltaTheta
            )
        )

        *

        RC;


    const termL =
        deltaLPrime / SL;


    const termC =
        deltaCPrime / SC;


    const termH =
        deltaHPrime / SH;


    return Math.sqrt(

        termL *
        termL

        +

        termC *
        termC

        +

        termH *
        termH

        +

        RT *
        termC *
        termH
    );
}


// ==========================================
// Degree / Radian
// ==========================================

function degreesToRadians(
    degrees
) {

    return (
        degrees *
        Math.PI /
        180
    );
}


function radiansToDegrees(
    radians
) {

    return (
        radians *
        180 /
        Math.PI
    );
}


// ==========================================
// 246색 DB에서 가장 가까운 색 찾기
// ==========================================

function findClosestColor(
    r,
    g,
    b
) {

    const measuredLab =
        rgbToLab(
            r,
            g,
            b
        );


    let closestColor = null;

    let smallestDifference =
        Infinity;


    COLOR_DATABASE.forEach(
        color => {

            const rgb =
                hexToRgb(
                    color.hex
                );


            const colorLab =
                rgbToLab(
                    rgb.r,
                    rgb.g,
                    rgb.b
                );


            const difference =
                deltaE2000(
                    measuredLab,
                    colorLab
                );


            if (
                difference <
                smallestDifference
            ) {

                smallestDifference =
                    difference;

                closestColor =
                    color;
            }
        }
    );


    return {

        ...closestColor,

        deltaE:
            smallestDifference
    };
}