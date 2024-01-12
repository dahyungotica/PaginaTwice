const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
 .typeString('¡One in a million!')
 .pauseFor(200)
 .start();