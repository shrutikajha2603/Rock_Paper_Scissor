function playGame(userChoice) {
    let randomNumber = Math.random() * 3;
    let computerChoice;
    let resultMsg;
    
    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Rock';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissor';
    }

    if (computerChoice === userChoice) {
        resultMsg = `It's a tie`;
    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissor') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        resultMsg = 'You win';
    } else {
        resultMsg = 'Computer wins';
    }

    document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. Result: ${resultMsg}`;
}
