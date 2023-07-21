window.onload = function(){
    let heading = document.querySelector("h1");
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");
    let player1Count = Math.floor(Math.random()*6)+1;
    let player2Count = Math.floor(Math.random()*6)+1;
    if(player1Count === player2Count){
        heading.innerHTML="It's a tie!"
    }
    else if(player1Count > player2Count){
        heading.innerHTML = "&#128681Player1 Wins"
    }else {
        heading.innerHTML ="&#128681Player2 Wins"
    }
    // dice1.setAttribute("src","images/dice1,png");
    // dice1.setAttribute("src","images/dice2,png");
    switch(player1Count){
        case 1:dice1.setAttribute("src","images/dice1.png");
        break;
        case 2:dice1.setAttribute("src", "images/dice2.png");
        break;
        case 3:dice1.setAttribute("src", "images/dice3.png");
        break;
        case 4:dice1.setAttribute("src", "images/dice4.png");
        break;
        case 5:dice1.setAttribute("src", "images/dice5.png");
        break;
        default :dice1.setAttribute("src", "images/dice6.png") ;
        

    }
    switch(player2Count){
        case 1:dice2.setAttribute("src","images/dice1.png");
        break;
        case 2:dice2.setAttribute("src", "images/dice2.png");
        break;
        case 3:dice2.setAttribute("src", "images/dice3.png");
        break;
        case 4:dice2.setAttribute("src", "images/dice4.png");
        break;
        case 5:dice2.setAttribute("src", "images/dice5.png");
        break;
        default :dice2.setAttribute("src", "images/dice6.png") ;
        

    }

}
