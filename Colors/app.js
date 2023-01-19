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
        console.log(col);
    })
}

setRandomColors()