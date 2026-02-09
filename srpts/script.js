let scale = 1;
const MAX_SCALE = 3;

function enlargeButton() {
    const btn = document.getElementById("yes-btn");
    if (!btn) return;

    if (scale < MAX_SCALE) {
        scale += 0.2;
        btn.style.transform = `scale(${scale})`;
    }
}


function yes(){
    
}