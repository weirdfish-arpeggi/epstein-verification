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

let currentRotation, currentHideTranslate, currentShowTranslate, currentPosX, currentPosY, currentDimProp;

noBtn.addEventListener('mouseenter', () => {
    const sides = ['left', 'right', 'top', 'bottom'];
    const side = sides[Math.floor(Math.random() * sides.length)];

    currentDimProp = 'height: 80vh; width: auto;'; // Consistent sizing for all sides

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
            currentShowTranslate = 'translate(-50%, 0)';
            break;
        case 'bottom':
            currentRotation = 0;
            currentPosX = 'left: 50%; right: auto;';
            currentPosY = 'bottom: 0; top: auto;';
            currentHideTranslate = 'translate(-50%, 110%)';
            currentShowTranslate = 'translate(-50%, 0)';
            break;
    }

    // Apply hidden position and rotation immediately
    peekImg.style.cssText = `${currentPosX} ${currentPosY} ${currentDimProp} transform: ${currentHideTranslate} rotate(${currentRotation}deg);`;

    // Force reflow to apply styles before animation
    peekImg.offsetHeight;

    // Switch to slow transition and animate to shown position
    peekImg.classList.add('peeking');
    peekImg.style.transform = `${currentShowTranslate} rotate(${currentRotation}deg)`;
});

noBtn.addEventListener('mouseleave', () => {
    // Switch to fast transition and animate back to hidden
    peekImg.classList.remove('peeking');
    peekImg.style.transform = `${currentHideTranslate} rotate(${currentRotation}deg)`;
});