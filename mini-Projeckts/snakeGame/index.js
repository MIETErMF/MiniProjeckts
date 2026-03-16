let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let snake = [
    {x: 200, y: 200},
    {x: 180, y: 200},
    {x: 160, y: 200},
];

let size = 20;
let dx = 0;
let dy = 0;

let food = {x: 0, y: 0};
spawnFood();

function spawnFood() {
    food = {
        x: Math.floor(Math.random() * 25) * size,
        y: Math.floor(Math.random() * 25) * size
    };
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp') {
        dx = 0;
        dy = -size;
    } else if (e.key === 'ArrowDown') {
        dx = 0;
        dy = size;
    } else if (e.key === 'ArrowLeft') {
        dx = -size;
        dy = 0;
    } else if (e.key === 'ArrowRight') {
        dx = size;
        dy = 0;
    }
});

window.setInterval(function () {
    let head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        spawnFood();
    } else {
        snake.pop();
    }

    if (head.x < 0) head.x = 0;
    if (head.y < 0) head.y = 0;
    if (head.x + size > 500) head.x = 500 - size;
    if (head.y + size > 500) head.y = 500 - size;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 500, 500);

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, size, size);

    ctx.fillStyle = "lime";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, size, size);
    }
}, 150);