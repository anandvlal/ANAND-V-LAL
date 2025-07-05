var playing =false;
var score;
var action;
var timeremaining;
var correctAns;

document.getElementById("startrestart").onclick=function(){
	if(playing==true){
		location.reload();
	}else{
		playing=true;
		score=0;
		document.getElementById("scorevalue").innerHTML=score;
		document.getElementById("timeremainig").style.display="block";
		timeremaining=60;
		document.getElementById("timeremainingvalue").innerHTML=timeremaining;
		hide("gameover");
		document.getElementById("startrestart").innerHTML="Reset Game";
		
		startcountdown();
		generateQA();
	}
};
for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
	if(playing==true){
		if(this.innerHTML==correctAns){
			score++;
			document.getElementById("scorevalue").innerHTML=score;
			hide("wrong");
			show("correct");
			setTimeout(function(){
				hide("correct");
			},1000);
			generateQA();
		}else{
			hide("correct");
			show("wrong");
			setTimeout(function(){
				hide("wrong");
			},1000);
		}
	}
};
}

function startcountdown(){
	action = setInterval(function(){
		timeremaining -= 1;
		document.getElementById("timeremainingvalue").innerHTML=timeremaining;
		if(timeremaining==0){
			stopcountdown();
			show("gameover");
			document.getElementById("gameover").innerHTML="<p>game over</p><p>your score:"+ score +"</P>";
			hide("timeremainig");
			hide("correct");
			hide("wrong");
			playing =false;
			document.getElementById("startrestart").innerHTML="Start Game";
			
		}
	},1000);
	
}
function stopcountdown(){
	clearInterval(action);
}
function hide(Id){
	document.getElementById(Id).style.display="none";
}
function show(Id){
	document.getElementById(Id).style.display="block";
}

function generateQA(){
	
	var x = 1+ Math.round(9* Math.random());
	var y = 1+ Math.round(9* Math.random());
	correctAns = x*y;
	document.getElementById("question").innerHTML= x +"X"+ y;
	var correctposition=1+Math.round(3* Math.random());
	document.getElementById("box"+correctposition).innerHTML=correctAns;
	
	var answers = [correctAns];
	
	for(i=1;i<5;i++){
		if(i !=correctposition){
			var wrongAns;
			do{
				 wrongAns = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
			}
			while(answers.indexOf(wrongAns)>-1){
				document.getElementById("box"+i).innerHTML=wrongAns;
			answers.push(wrongAns);}
		}
	}
}
