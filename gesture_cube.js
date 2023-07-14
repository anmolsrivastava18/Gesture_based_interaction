document.addEventListener("DOMContentLoaded", function () {
    const cube = document.querySelector('.cube');
    let rotationX = 60;
    let rotationY = 30;
    let isRotating = true;

    // The below piece of code rotates the cube according to the input from the user
    window.addEventListener('keydown', (event) => {
        if (isRotating) {
            // Stop rotating and align to show only one face
            isRotating = false;
            rotationX = 0;
            rotationY = 0;
        } else {
            const key = event.key;

            if (key === 'ArrowUp') {
                rotationX += 90;
            } else if (key === 'ArrowDown') {
                rotationX -= 90;
            } else if (key === 'ArrowRight') {
                rotationY += 90;
            } else if (key === 'ArrowLeft') {
                rotationY -= 90;
            }
        }
        cube.style.setProperty('--rotation', `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);
    });

    // The below piece of code keeps the cube in continuous rotation, unless interrupted by the user
    function rotateCube() {
        if (isRotating) {
            rotationX -= 0.2;
            rotationY -= 0.5;
            cube.style.setProperty('--rotation', `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`);
        }

        requestAnimationFrame(rotateCube);
    }

    rotateCube();
});
