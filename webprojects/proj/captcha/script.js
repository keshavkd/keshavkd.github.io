$('.invalid').fadeOut(0);
$('.valid').fadeOut(0);

var right = 0;
var wrong = 0;

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var canvas = document.getElementById('textCanvas');
var ctx = canvas.getContext('2d');

window.temp = makeid(6);
draw(window.temp);
update();

function generate() {
    clear();
    window.temp = makeid(6);
    draw(window.temp);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(temp) {
    ctx.font = '30px Poppins';
    ctx.textAlign = "center";
    ctx.fillStyle = "#039BE5";
    ctx.font = "30px Poppins";
    ctx.fillText(temp, canvas.width / 2, canvas.height / 2 + 10);
}

function update() {
    $('#right').text("Right: " + right);
    $('#wrong').text("Wrong: " + wrong);
}

function validate() {
    $('.invalid').fadeOut(200);
    $('.valid').fadeOut(200);
    if (document.getElementById("inp-text").value == window.temp) {
        $('.invalid').fadeOut(200);
        $('.valid').show(200);
        generate();
        right += 1;
    } else {
        $('.valid').fadeOut(200);
        $('.invalid').show(200);
        wrong += 1;
    }
    update();
}