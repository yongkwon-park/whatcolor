// ==========================================
// WhatColor v2
// Camera Color Detection
// LAB + CIEDE2000 + Median Sampling
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


// ==========================================
// 카메라 시작
// ==========================================

startButton.addEventListener("click", async () => {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: {
                    ideal: "environment"
                }
            },
            audio: false
        });

        camera.srcObject = stream;

        await camera.play();

        startButton.textContent = "카메라 실행 중";
        startButton.disabled = true;

        detectButton.disabled = false;

        statusText.textContent =
            "가운데 사각형에 측정할 색상을 맞춰주세요.";

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

    if (!camera.videoWidth || !camera.videoHeight) {
        return;
    }

    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;

    const ctx = canvas.getContext(
        "2d",
        { willReadFrequently: true }
    );

    ctx.drawImage(
        camera,
        0,
        0,
        canvas.width,
        canvas.height
    );


    // --------------------------------------
    // 중앙 40 x 40 영역 측정
    // --------------------------------------

    const centerX = Math.floor(canvas.width / 2);
    const centerY = Math.floor(canvas.height / 2);

    const sampleSize = 40;

    const imageData = ctx.getImageData(

        centerX - sampleSize / 2,
        centerY - sampleSize / 2,

        sampleSize,
        sampleSize
    );

    const data = imageData.data;


    // --------------------------------------
    // Median 방식 대표색 추출
    // --------------------------------------

    const redValues = [];
    const greenValues = [];
    const blueValues = [];

    for (let i = 0; i < data.length; i += 4) {

        redValues.push(data[i]);

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


    // --------------------------------------
    // 색상 계산
    // --------------------------------------

    const measuredHex =
        rgbToHex(r, g, b);

    const closestColor =
        findClosestColor(r, g, b);


    // --------------------------------------
    // 화면 표시
    // --------------------------------------

    colorPreview.style.backgroundColor =
        `rgb(${r}, ${g}, ${b})`;

    colorName.innerHTML =
        `${closestColor.ko}
        <br>
        <small>${closestColor.name}</small>`;

    hexValue.textContent =
        measuredHex;

    rgbValue.textContent =
        `${r}, ${g}, ${b}`;


    statusText.textContent =
        "색상 측정 완료";
});


// ==========================================
// RGB → HEX
// ==========================================

function rgbToHex(r, g, b) {

    return "#" +

        [r, g, b]

            .map(value =>

                value
                    .toString(16)
                    .padStart(2, "0")

            )

            .join("")

            .toUpperCase();
}


// ==========================================
// HEX → RGB
// ==========================================

function hexToRgb(hex) {

    const value =
        hex.replace("#", "");

    return {

        r: parseInt(
            value.substring(0, 2),
            16
        ),

        g: parseInt(
            value.substring(2, 4),
            16
        ),

        b: parseInt(
            value.substring(4, 6),
            16
        )
    };
}


// ==========================================
// RGB → LAB
// ==========================================

function rgbToLab(r, g, b) {

    r /= 255;
    g /= 255;
    b /= 255;


    r =
        r > 0.04045

            ? Math.pow(
                (r + 0.055) / 1.055,
                2.4
            )

            : r / 12.92;


    g =
        g > 0.04045

            ? Math.pow(
                (g + 0.055) / 1.055,
                2.4
            )

            : g / 12.92;


    b =
        b > 0.04045

            ? Math.pow(
                (b + 0.055) / 1.055,
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


    x = labTransform(x);
    y = labTransform(y);
    z = labTransform(z);


    return {

        L:
            (116 * y) - 16,

        a:
            500 * (x - y),

        b:
            200 * (y - z)
    };
}


function labTransform(value) {

    return value > 0.008856

        ? Math.cbrt(value)

        : (7.787 * value) +
          (16 / 116);
}


// ==========================================
// CIEDE2000
// ==========================================

function deltaE2000(lab1, lab2) {

    const L1 = lab1.L;
    const a1 = lab1.a;
    const b1 = lab1.b;

    const L2 = lab2.L;
    const a2 = lab2.a;
    const b2 = lab2.b;


    const avgL =
        (L1 + L2) / 2;


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
        (C1 + C2) / 2;


    const avgC7 =
        Math.pow(avgC, 7);


    const G =
        0.5 *
        (
            1 -
            Math.sqrt(
                avgC7 /
                (
                    avgC7 +
                    Math.pow(25, 7)
                )
            )
        );


    const a1Prime =
        (1 + G) * a1;


    const a2Prime =
        (1 + G) * a2;


    const C1Prime =
        Math.sqrt(
            a1Prime * a1Prime +
            b1 * b1
        );


    const C2Prime =
        Math.sqrt(
            a2Prime * a2Prime +
            b2 * b2
        );


    const avgCPrime =
        (C1Prime + C2Prime) / 2;


    let h1Prime =
        radiansToDegrees(
            Math.atan2(
                b1,
                a1Prime
            )
        );


    if (h1Prime < 0) {
        h1Prime += 360;
    }


    let h2Prime =
        radiansToDegrees(
            Math.atan2(
                b2,
                a2Prime
            )
        );


    if (h2Prime < 0) {
        h2Prime += 360;
    }


    const deltaLPrime =
        L2 - L1;


    const deltaCPrime =
        C2Prime - C1Prime;


    let deltahPrime;


    if (
        C1Prime * C2Prime === 0
    ) {

        deltahPrime = 0;

    } else if (
        Math.abs(
            h2Prime - h1Prime
        ) <= 180
    ) {

        deltahPrime =
            h2Prime -
            h1Prime;

    } else if (
        h2Prime <= h1Prime
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
        C1Prime * C2Prime === 0
    ) {

        avgHPrime =
            h1Prime +
            h2Prime;

    } else if (
        Math.abs(
            h1Prime - h2Prime
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

            -

            Math.pow(
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

        termL * termL +

        termC * termC +

        termH * termH +

        RT *
        termC *
        termH
    );
}


// ==========================================
// 각도 변환
// ==========================================

function degreesToRadians(degrees) {

    return degrees *
        Math.PI /
        180;
}


function radiansToDegrees(radians) {

    return radians *
        180 /
        Math.PI;
}


// ==========================================
// 가장 가까운 색상 찾기
// ==========================================

function findClosestColor(r, g, b) {

    const measuredLab =
        rgbToLab(r, g, b);


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