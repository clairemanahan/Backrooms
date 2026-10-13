function getRandomCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumberOfImages() {
    const container = document.getElementById("room-3");
    container.innerHTML = ""; }

    const numberOfImages = getRandomCount(5, 15);
    console.log(`Generating ${numberOfImages} images...`);
    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement("img");
        
        img.src = `images/Cloud.png ?${Math.random()}`;
        img.style.margin = "10px";
    }

function generateRandomImages() {
    const container = document.getElementById("room-3");
    container.innerHTML = "";
    src = `images/Cloud.png ?${Math.random()}`;
    container.appendChild(img);}