// I have to create an object first that will be the player. SO that way it can use methods, and stuff

const Player =  () => {
    const player = document.createElement('div');
    player.classList.add('player');
    document.body.appendChild(player);
}


    const player = Player();

