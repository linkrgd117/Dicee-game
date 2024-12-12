var dicee1 = document.querySelectorAll("#dicee1 *");
var dicee2 = document.querySelectorAll("#dicee2 *");
var roll1 = Math.floor(Math.random() * 6 + 1);
var roll2 = Math.floor(Math.random() * 6 + 1);
var p1Wins = "Player 1 wins";
var p2Wins = "Player 2 wins";
var draw = "It's a draw";


showDicee(roll1, dicee1);
showDicee(roll2, dicee2);
console.log(roll1);
console.log(roll2);

if (roll1 < roll2){
    document.querySelector("h1").textContent = p2Wins;
} else if(roll1 > roll2){
    document.querySelector("h1").textContent = p1Wins;
} else {
    document.querySelector("h1").textContent = draw;
}


function showDicee(n, dicee){
    switch(n){
        case 1:
            for (var i = 0; i < dicee.length - 1; i++) {
                dicee[i].style.visibility = "hidden";
            }
            dicee[6].style.visibility = "visible";
        break;

        case 2:
            dicee[1].style.visibility = "hidden";
            dicee[2].style.visibility = "hidden";
            dicee[3].style.visibility = "hidden";
            dicee[4].style.visibility = "hidden";
        break;
        
        case 3:
            dicee[1].style.visibility = "hidden";
            dicee[2].style.visibility = "hidden";
            dicee[3].style.visibility = "hidden";
            dicee[4].style.visibility = "hidden";
            dicee[6].style.visibility = "visible";
        break;

        case 4:
            dicee[2].style.visibility = "hidden";
            dicee[3].style.visibility = "hidden";
        break;

        case 5:
            dicee[2].style.visibility = "hidden";
            dicee[3].style.visibility = "hidden";
            dicee[6].style.visibility = "visible";
        break;

        default:
            break;
    }
}