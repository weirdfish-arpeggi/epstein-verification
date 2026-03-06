function confirm() {
    const modal = document.getElementById('modal');
    const success = document.getElementById('success');
    modal.style.animation = 'none';
    modal.style.transition = 'opacity 0.25s, transform 0.25s';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';
    setTimeout(() => {
    modal.style.display = 'none';
    success.style.display = 'flex';
    }, 260);
}

function deny() {
    history.back();
    // Fallback if there's no history
    setTimeout(() => {
        window.location.href = 'about:blank';
    }, 100);
}


const noBtn = document.querySelector('.btn-no');
const peekImg = document.getElementById('peek-image');

let prePosX, prePosY;
let currentRotation, currentHideTranslate, currentShowTranslate, currentPosX, currentPosY, dimensions;

noBtn.addEventListener('mouseenter', () => {
    const sides = ['left', 'right', 'top', 'bottom'];
    const side = sides[Math.floor(Math.random() * sides.length)];

    dimensions = 'height: 80vh; width: auto;'; // consistent sizing for all sides

    switch (side) {
        case 'left':
            currentRotation = 90;
            currentPosX = 'left: 0; right: auto;';
            currentPosY = 'top: 50%; bottom: auto;';
            currentHideTranslate = 'translate(-110%, -50%)';
            currentShowTranslate = 'translate(0, -50%)';
            break;
        case 'right':
            currentRotation = -90;
            currentPosX = 'right: 0; left: auto;';
            currentPosY = 'top: 50%; bottom: auto;';
            currentHideTranslate = 'translate(110%, -50%)';
            currentShowTranslate = 'translate(0, -50%)';
            break;
        case 'top':
            currentRotation = 180;
            currentPosX = 'left: 50%; right: auto;';
            currentPosY = 'top: 0; bottom: auto;';
            currentHideTranslate = 'translate(-50%, -110%)';
            currentShowTranslate = 'translate(-50%, -10%)';
            break;
        case 'bottom':
            currentRotation = 0;
            currentPosX = 'left: 50%; right: auto;';
            currentPosY = 'bottom: 0; top: auto;';
            currentHideTranslate = 'translate(-50%, 110%)';
            currentShowTranslate = 'translate(-50%, 10%)';
            break;
    }

    // apply hidden position and rotation immediately
    peekImg.style.cssText = `${currentPosX} ${currentPosY} ${dimensions} transform: ${currentHideTranslate} rotate(${currentRotation}deg); transition: none;`;

    // force reflow to apply styles before animation
    peekImg.offsetHeight;

    // switch to slow transition and animate to shown position
    peekImg.style.transition = 'transform 3s ease-out';
    peekImg.style.transform = `${currentShowTranslate} rotate(${currentRotation}deg)`;
});

noBtn.addEventListener('mouseleave', () => {
    // switch to fast transition and animate back to hidden
    peekImg.style.transition = 'transform 0.15s ease-in';
    peekImg.style.transform = `${currentHideTranslate} rotate(${currentRotation}deg)`;
});