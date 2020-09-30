const fight = () => {

    const hero = prompt("Name your hero: ");
    const villain = prompt("Name your villain: ");
    const winner = document.querySelector('#winner');

    let villainHealth = 50;
    let heroHealth = 50;

    while (heroHealth > 0 && villainHealth > 0) {
        let heroDice = Math.round(Math.random() * 20);
        let villainDice = Math.round(Math.random() * 20);

        switch (true) {
            case heroDice >= 18:
                alert(`Hit! ${hero} lands a CRITICAL STRIKE on ${villain}!!!`);
                villainHealth -= 20;
                break;
            case heroDice >= 11:
                alert(`${hero} lands a successful hit on ${villain}!`);
                villainHealth -= 10;
                break;
            case heroDice >= 3:
                alert(`${hero}'s attack missed! No damage given.`);
                break;
            case heroDice < 3:
                alert(`${hero} stabs self accidentally! Critical failure by ${hero}!`);
                heroHealth -= 5;
                break;
        }

        switch (true) {
            case villainDice >= 18:
                alert(`Hit! ${villain} lands a CRITICAL STRIKE on ${hero}!!!`);
                heroHealth -= 20;
                break;
            case villainDice >= 11:
                alert(`${villain} lands a successful hit on ${hero}!`);
                heroHealth -= 10;
                break;
            case villainDice >= 3:
                alert(`${villain}'s attack missed! No damage given.`);
                break;
            case villainDice < 3:
                alert(`${villain} stabs self accidentally! Critical failure by ${villain}!`);
                heroHealth -= 5;
                break;
        }

        alert(`HEALTH STATUS: \n\n${hero}'s HP is now ${heroHealth} \n${villain}'s HP now is ${villainHealth}`);
    }

    if (heroHealth <= 0 && villainHealth <= 0) {
        alert(`It's a draw!`)
        winner.innerText = `<< The hero ${hero} and the villain ${villain} have killed eachother in battle! >>`
    } else if (villainHealth <= 0) {
        alert(`${hero} the hero won!`)
        winner.innerText = `<< ${hero} won! The world is saved >>`
    } else if (heroHealth <= 0) {
        alert(`${villain} the villain won!`);
        winner.innerText = `<< ${villain} the villain won. The world is doomed! >>`
    }

    const restart = () => {
        const playAgain = prompt("Play again? Type 'yes' or 'no'");
        playAgain.toLowerCase();
        (playAgain === "yes") ? fight() :
            (playAgain === "no") ? alert("Thanks for playing!") :
                restart();
    }

    restart();

};

const play = document.querySelector('#play');

play.addEventListener('click', () => {
    fight();
})



