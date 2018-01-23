function KeepGoingDownRed {
	while (GetColor != "red"){
		down
	}
}
function KeepGoingUpRed {
	while (GetColor != "red"){
		up
	}
}
var count = 0
while (count < 2){
	KeepGoingDownRed
	right
	right
	KeepGoingUpRed
	right
	right
	count = count + 1
}
KeepGoingDownRed
right
