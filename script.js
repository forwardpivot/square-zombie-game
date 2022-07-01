// I have to create an object first that will be the player. SO that way it can use methods, and stuff

const Player =  () => {
    const player = document.createElement('div');
    player.classList.add('player');
    document.body.appendChild(player);

    const move = (e) => {
        switch(e.code) {

            case 'KeyW':
                console.log("W was pressed");
                player.style.marginBottom += 4 + "px";
                console.log(player.style.marginBottom);
                break;
            case 'KeyA':
                console.log("A was pressed");
                player.style.marginRight += 4 + "px";
                console.log(player.style.marginRight);
                pressed = false;
                break;
            case 'KeyS':
                console.log("S was pressed");
                player.style.marginTop += 7 + "px";
                console.log(player.style.marginTop);
                break;
            case 'KeyD':
                console.log("D was pressed");
                player.style.marginLeft += 2 + "px";
                console.log(player.style.marginLeft);
                break;
        }
    }
    window.addEventListener('keydown', move);
    return {move}
}

const player = Player();

