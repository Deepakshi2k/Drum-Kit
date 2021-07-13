var drumItems = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumItems; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function key(){
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(event){
  sound(event.key);
  buttonAnimation(event.key);
})

function sound(key){
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(activeButton){
    var activeKey = document.querySelector("."+ activeButton);
    activeKey.classList.add("pressed");

    setTimeout(function(){
      activeKey.classList.remove("pressed");
    },200);
}
