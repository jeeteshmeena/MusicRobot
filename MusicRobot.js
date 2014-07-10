function canvasClicked(canvasNumber)
{
 theCanvas = "canvas"+canvasNumber;
 c = document.getElementById(theCanvas);
 cxt = c.getContext("2d");
 if(theCanvas === 'canvas1')
    {
    var audio = new Audio("mp3Songs/1.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 280);  
    } 
  if(theCanvas === 'canvas2')
    {
    var audio = new Audio("mp3Songs/2.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 380);  
    } 
    if(theCanvas === 'canvas3')
    {
    var audio = new Audio("mp3Songs/3.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680); 
    } 
    if(theCanvas === 'canvas4')
    {
    var audio = new Audio("mp3Songs/4.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
    if(theCanvas === 'canvas5')
    {
    var audio = new Audio("mp3Songs/5.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
    if(theCanvas === 'canvas6')
    {
    	
    var audio = new Audio("mp3Songs/6.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
    if(theCanvas === 'canvas7')
    {
    var audio = new Audio("mp3Songs/7.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
    if(theCanvas === 'canvas8')
    {
    var audio = new Audio("mp3Songs/8.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
    if(theCanvas === 'canvas9')
    {
    var audio = new Audio("mp3Songs/9.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
    if(theCanvas === 'canvas10')
    {
    var audio = new Audio("mp3Songs/10.mp3");
    audio.play();
    setTimeout(function(){audio.pause();}, 680);  
    } 
 }