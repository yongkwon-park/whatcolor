const camera = document.getElementById("camera");
const canvas = document.getElementById("canvas");

const startButton = document.getElementById("startButton");
const detectButton = document.getElementById("detectButton");

const statusText = document.getElementById("status");

const colorPreview = document.getElementById("colorPreview");
const colorName = document.getElementById("colorName");

const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");


// 카메라 시작
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

        statusText.textContent = "가운데 사각형에 측정할 색상을 맞춰주세요.";

    } catch (error) {

        console.error(error);

        statusText.textContent =
            "카메라를 사용할 수 없습니다.";

    }

});


// 색상 측정
detectButton.addEventListener("click", () => {

    if (!camera.videoWidth || !camera.videoHeight) {
        return;
    }

    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;

    const ctx = canvas.getContext("2d", {
        willReadFrequently: true
    });

    ctx.drawImage(
        camera,
        0,
        0,
        canvas.width,
        canvas.height
    );


    // 카메라 원본 영상 중앙
    const centerX = Math.floor(canvas.width / 2);
    const centerY = Math.floor(canvas.height / 2);


    // 중앙 40x40 픽셀 영역 측정
    const sampleSize = 40;

    const imageData = ctx.getImageData(
        centerX - sampleSize / 2,
        centerY - sampleSize / 2,
        sampleSize,
        sampleSize
    );


    const data = imageData.data;

    let r = 0;
    let g = 0;
    let b = 0;

    let pixelCount = 0;


    // 모든 픽셀 평균 계산
    for (let i = 0; i < data.length; i += 4) {

        r += data[i];
        g += data[i + 1];
        b += data[i + 2];

        pixelCount++;

    }


    r = Math.round(r / pixelCount);
    g = Math.round(g / pixelCount);
    b = Math.round(b / pixelCount);


    const hex = rgbToHex(r, g, b);

    const name = getColorName(r, g, b);


    // 결과 출력
    colorPreview.style.backgroundColor =
        `rgb(${r}, ${g}, ${b})`;

    colorName.textContent = name;

    hexValue.textContent = hex;

    rgbValue.textContent =
        `${r}, ${g}, ${b}`;

});


// RGB → HEX
function rgbToHex(r, g, b) {

    return "#" + [r, g, b]
        .map(value =>
            value.toString(16)
                .padStart(2, "0")
        )
        .join("")
        .toUpperCase();

}


// 기본 색상 이름 판별
function getColorName(r, g, b) {

    const colors = [

        { name: "검정색", rgb: [0, 0, 0] },
        { name: "흰색", rgb: [255, 255, 255] },
        { name: "회색", rgb: [128, 128, 128] },

        { name: "빨간색", rgb: [255, 0, 0] },
        { name: "주황색", rgb: [255, 165, 0] },
        { name: "노란색", rgb: [255, 255, 0] },

        { name: "초록색", rgb: [0, 128, 0] },
        { name: "파란색", rgb: [0, 0, 255] },

        { name: "남색", rgb: [0, 0, 128] },
        { name: "보라색", rgb: [128, 0, 128] },

        { name: "분홍색", rgb: [255, 192, 203] },
        { name: "갈색", rgb: [139, 69, 19] },

        { name: "베이지", rgb: [245, 245, 220] },
        { name: "카키", rgb: [128, 128, 0] }

    ];


    let closestColor = "";
    let closestDistance = Infinity;


    colors.forEach(color => {

        const [cr, cg, cb] = color.rgb;

        const distance =
            Math.sqrt(
                Math.pow(r - cr, 2) +
                Math.pow(g - cg, 2) +
                Math.pow(b - cb, 2)
            );


        if (distance < closestDistance) {

            closestDistance = distance;
            closestColor = color.name;

        }

    });


    return closestColor;
}