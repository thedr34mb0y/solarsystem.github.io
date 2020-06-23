var playmainvideo = document.getElementById('play-main-video');
var pausemainvideo = document.getElementById('pause-main-video');
var slidervideo = document.getElementById('mainslider');
var containervideo = document.getElementById('container-video');
var videovimeo = document.getElementById('video-vimeo');
var letstrip = document.getElementById('letstrip');
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

playmainvideo.addEventListener('click',function(){
  player.play();
  
  pausemainvideo.style.opacity = "1";
  playmainvideo.style.opacity = "0";
  slidervideo.style.overflow = "hidden";
  containervideo.style.display = "block";
  letstrip.style.bottom = "30%";
})

pausemainvideo.addEventListener('click',function(){
  player.pause();
  
  pausemainvideo.style.opacity = "0";
  playmainvideo.style.opacity = "1";
  slidervideo.style.overflow = "initial";
  containervideo.style.display = "none";
  letstrip.style.bottom = "-20px";
})