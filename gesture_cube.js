document.addEventListener("DOMContentLoaded", function () {
    const cube = document.querySelector('.cube');
    let rotationX = 45;
    let rotationY = 45;

    window.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key === 'ArrowUp') {
            rotationX -= 10;
        } else if (key === 'ArrowDown') {
            rotationX += 10;
        } else if (key === 'ArrowRight') {
            rotationY += 10;
        } else if (key === 'ArrowLeft') {
            rotationY -= 10;
        }

        cube.style.setProperty('--rotation', `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);
    });
})
