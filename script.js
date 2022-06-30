// I have to create an object first that will be the player. SO that way it can use methods, and stuff

const Player =  () => {
    const player = document.createElement('div');
    player.classList.add('player');
    document.body.appendChild(player);

}

const move = (e) => {
    switch(e.code) {
        case 'KeyW':
            console.log("W was pressed");
            break;
        case 'KeyA':
            console.log("A was pressed");
            break;
        case 'KeyS':
            console.log("S was pressed");
            break;
        case 'KeyD':
            console.log("D was pressed");
            break;
    }
}

    const player = Player();

    window.addEventListener('keydown', move);
