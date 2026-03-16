const star = document.querySelector('.star');
const sky = document.querySelector('.sky');
const sun = document.querySelector('.sun');
const cloud = document.querySelector('.cloud');
const moon = document.querySelector('.moon');

skyWidth = getComputedStyle(sky).width;
skyHeight = getComputedStyle(sky).height;


const minStarQuantity = 5;
const maxStarQuantity = 24;
const maxStarSize = 40
const maxStarDegrees = 360;

const maxCloudQuantity = 10;
const minCloudQuantity = 3;
const maxCloudSize = 30;
const minCloudSize = 5;

for (let i = 0; i < Math.random() * (maxCloudQuantity - minCloudQuantity) + minCloudQuantity; i++) {
    const cloneCloud = cloud.cloneNode(true);
    size = `${(Math.random() + minCloudSize) * maxCloudSize}`;
    const sizePercent = size * 100 / Math.min(parseInt(skyHeight), parseInt(skyWidth));
    cloneCloud.style.cssText =
        'position: absolute;' +
        `width: ${size}px;` +
        `height: ${size}px;` +
        `top: ${Math.random() * (100 - sizePercent)}%;` +
        `left: ${Math.random() * (100 - sizePercent)}%;`
        sky.appendChild(cloneCloud);
}
cloud.style.display = 'none';


for (let i = 0; i < Math.random() * (maxStarQuantity - minStarQuantity) + minStarQuantity; i++) {
    const clone = star.cloneNode(true);
    size = `${(Math.random() + 1) * maxStarSize}`;
    const sizePercent = size * 100 / Math.min(parseInt(skyHeight), parseInt(skyWidth));
    clone.style.cssText =
        'position: absolute;' +
        `width: ${size}px;` +
        `height: ${size}px;` +
        `top: ${Math.random() * (100 - sizePercent)}%;` +
        `left: ${Math.random() * (100 - sizePercent)}%;` +
        `transform: rotate(${Math.random() * maxStarDegrees}deg);`
    sky.appendChild(clone);
}
star.style.display = 'none';


sky.addEventListener('click', function () {
    sky.classList.toggle('darkBg');
    sun.classList.toggle('active');
    moon.classList.toggle('active');
    const clouds = document.getElementsByClassName('cloud');
    const stars = document.getElementsByClassName('star')
    for (const star of stars) {
        star.classList.toggle('starYellow');
    }
    for (const cloud of clouds) {
        cloud.classList.toggle('active');
    }
})
