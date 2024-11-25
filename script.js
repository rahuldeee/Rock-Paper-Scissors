let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0};

    function updateScore() {
        document.querySelector('.js-score').innerHTML = 
        `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {

        const randomNum = Math.random();
        let computerMove = '';

        if(randomNum > 0 && randomNum < 1/3){
            computerMove = "rock";
        }
        else if(randomNum > 1/3 && randomNum < 2/3){
            computerMove = "paper";
        }
        else if(randomNum > 2/3 && randomNum < 1){
            computerMove = "scissors";
        }

        return computerMove;
    }




    function playGame(playerMove) {

        const computerMove = pickComputerMove();

        let result = '';

        if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = "tie";
         }
        else if(computerMove === 'paper'){
            result = "you lose!";
         }
        else if(computerMove === 'scissors'){
            result = "you win!";
         }



        } else if(playerMove === 'paper'){

            if(computerMove === 'rock') {
            result = "you win!";
        }
        else if(computerMove === 'paper'){
            result = "tie!";
        }
        else if(computerMove === 'scissors'){
            result = "you lose!";
        }        }

        else if(playerMove === 'scissors'){

            if(computerMove === 'rock') {
            result = "you lose!";
        }
        else if(computerMove === 'paper'){
            result = "you win!";
        }
        else if(computerMove === 'scissors'){
            result = "tie!";
        }

        }

        if(result === 'you win!'){
            score.wins += 1;
        }  
        else if(result === 'you lose!'){
            score.loses += 1;
        }
        else if(result === 'tie!'){
            score.ties += 1;

        }
        
        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = 

        `You Chose 
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    Computer Chose 
    <img src="images/${computerMove}-emoji.png" class="move-icon">`;


        updateScore();
    }

    updateScore();


