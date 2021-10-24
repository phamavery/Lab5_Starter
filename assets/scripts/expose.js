// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  let horn_image = document.getElementsByTagName('img')[0];
  let vol_image = document.getElementsByTagName('img')[1];
  let audio = document.getElementsByTagName('audio')[0];
  let horn_selected;
  document.getElementById("horn-select")
  .addEventListener("change", function(horn) {
    console.log(horn.target.value);
    //console.log(image);
    horn_selected = horn.target.value;
    horn_image.src = "assets/images/" + horn.target.value + ".svg";
    audio.src = "assets/audio/" + horn.target.value + ".mp3";
    console.log(audio.src);
  });

  document.getElementById("volume")
  .addEventListener("change", function(vol) {
    console.log(vol.target.value);
    //console.log(typeof(vol.target.value));
    const vol_value = parseInt(vol.target.value, 10);
    if(vol_value === 0) {
      vol_image.src  = "assets/icons/volume-level-0.svg"; 
    }
    else if(vol_value >= 1 && vol_value < 33) {
      vol_image.src  = "assets/icons/volume-level-1.svg"; 
    }
    else if(vol_value >= 33 && vol_value < 67) {
      vol_image.src  = "assets/icons/volume-level-2.svg"; 
    }
    else {
      vol_image.src  = "assets/icons/volume-level-3.svg"; 
    }
  });
  let x = document.getElementsByTagName("button")[0];
  console.log(x)
  document.getElementsByTagName("button")[0]
  .addEventListener("click", function() {
    console.log(audio.src)
    audio.play()
    if(horn_selected === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        confettiRadius: 10,
        confettiNumber: 500,
      });
    }
    
  });
  
}