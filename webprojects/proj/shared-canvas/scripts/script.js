window.addEventListener("load", () => {
    const canvas = document.querySelector("#c1");
    const ctx = canvas.getContext("2d");
    const colorPicker = document.getElementById("cwheel");
    const strokeWidth = document.getElementById("stwidth");
    const plusStroke = document.getElementById("plus");
    const subStroke = document.getElementById("sub");
    const clear = document.getElementById("clearBtn");

    let index = 2;
    let strokeArray = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    let draw = false;

    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight * 0.7;

    function start(e) {
        draw = true;
        move(e);
    }

    function end() {
        draw = false;
        ctx.beginPath();
    }

    function move(e) {
        if (!draw) return;
        if (e.clientX > canvas.width || e.clientY > canvas.height) {
            end();
            return;
        }
        ctx.lineWidth = strokeArray[index];
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    function selectColor() {
        console.log("COLOR: " + colorPicker.value);
        ctx.strokeStyle = colorPicker.value;
    }

    function strokeUp() {
        console.log("UP");
        if (index == 10) return;
        ctx.lineWidth = strokeArray[++index];
        console.log(index + ": " + strokeArray[index]);
        strokeWidth.innerHTML = strokeArray[index];
    }

    function strokeDown() {
        console.log("DOWN");
        if (index == 0) return;
        ctx.lineWidth = strokeArray[--index];
        console.log(index + ": " + strokeArray[index]);
        strokeWidth.innerHTML = strokeArray[index];
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    plusStroke.addEventListener("click", strokeUp);
    subStroke.addEventListener("click", strokeDown);
    clear.addEventListener("click", clearCanvas);
    colorPicker.addEventListener("input", selectColor);
    colorPicker.addEventListener("change", selectColor);
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mouseup", end);
    canvas.addEventListener("mousemove", move);
})