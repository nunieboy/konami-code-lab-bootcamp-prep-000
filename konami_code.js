const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', function(e){
     console.log(`button pressed`, e)
    // debugger
    const key = e.key;

    for (let i = 0; i < codes.length; i++){
      if (key === codes[i]) {
        console.log(`should be letter`, codes[i])
        debugger
          if (i === codes.length) {
          alert("Hurray!");
          i = 0;
          }
      } else {
        i = 0;
        }
    }
  })
};
