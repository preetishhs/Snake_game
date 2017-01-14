var player = 1, pos =[[0],[0],[0],[0],[0],[0]];
var board_size = 25;
var snake = [[17,4],[19,7],[21,9],[27,1]];
var ladder = [[3,22],[5,8],[11,26],[20,29]];
function play() {
	var score = Math.floor((Math.random() * 10)%6 + 1);
	var value = pos[player] + score;
	var shift_pos,move_up = true, jump = false;
	document.getElementById("msg").innerHTML = "Dice Roll Value:" + value;
	if(value > board_size)
	{
		//player = (player + 1)%6;
		//not possible
		document.getElementById("msg").innerHTML = "Move not possible! Try again!";
		return;
	}
	
	if(value === board_size)
	{
		//player = (player + 1)%6;
		//not possible
		document.getElementById("msg").innerHTML = "You Won the Match!";
		return;
	}
	
	for(var i = 0; i < 4; i++) {
		var j = 0;
		if(value === snake[i][j]) {
			shift_pos = snake[i][j+1];
			move_up = true;
			jump = true;
			break;
		}
		if(value === ladder[i][j]) {
			shift_pos = ladder[i][j+1];
			move_up = false;
			jump = true;
			break;
		}
	}
	move(shift_pos,move_up, value, jump);
}

function move(var shift_pos, var move_up, var value, var jump) {
	if(1) {
		var n = value,id1,id2;
		if(jump) {
			n = shift_pos - pos[player];
		}
		id2 = "b" + n;
		id1 = "b" + pos[player];
		document.getElementById(id1.div).style.display = "none";
		document.getElementById(id2.div).style.display = "block";
		document.getElementById("msg").innerHTML = "Go on! Keep playing";
	}
}