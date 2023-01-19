const cols = document.querySelectorAll(".col");

function generateRandomColor() {
    const hexCodex = '0123456789ABCDEF';
    let color = '';
    
    for (let i = 0; i < 6; i++) {
        color += hexCodex[Math.floor(Math.random() * hexCodex.length)]; 
    }

    return '#' + color;
}

function setRandomColors() {
    cols.forEach(col => {
        const text = col.querySelector('h2');
        const color = generateRandomColor();

        text.textContent = color;

        col.style.background = color;
    })
}

setRandomColors()