var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .pauseFor(500)
  .typeString('Design for today...')
  .pauseFor(300)
  .deleteAll()
  .typeString('Design for the future.')
  .pauseFor(1000)
  .start();