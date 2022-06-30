// I have to create an object first that will be the player. SO that way it can use methods, and stuff

const Player =  () => {
    const player = document.createElement('div');
    player.classList.add('player');
    document.body.appendChild(player);


    const move = (e) => {
        switch(e.code) {
            case 'KeyW':
                console.log("W was pressed");
                player.style.marginBottom = 10 + "px";
                break;
            case 'KeyA':
                console.log("A was pressed");
                player.style.marginRight = 10 + "px";
                break;
            case 'KeyS':
                console.log("S was pressed");
                player.style.marginTop = 5 + "px";
                break;
            case 'KeyD':
                console.log("D was pressed");
                player.style.marginLeft = 5 + "px";
                break;
        }
    }

    window.addEventListener('keydown', move);
}


    const player = Player();