const music = document.getElementById("song");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

play.onclick = function(){
  music.play();
  console.log("The music is played");
}
stop.onclick = function(){
  music.pause();
  console.log("The music is stopped");
}
reset.onclick = function(){
  music.pause();
  music.currentTime = 0;
  console.log("The music is reset");
}