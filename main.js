var progressBar=document.querySelector(".outer");
var valuediv=document.querySelector(".txt");
console.log(progressBar,valuediv);

var progressValue=0;
var progressEndvalue=75;
let speed=50;
var progress=setInterval( ()=>{
	progressValue++;
	
	valuediv.innerHTML=`${progressValue}%`;
	progressBar.style.background = `conic-gradient(
		red ${progressValue * 3.6}deg, #F5D3D3 ${progressValue * 3.6}deg)`;
	
	if(progressValue == progressEndvalue){
		clearInterval(progress);
	}
},speed);
