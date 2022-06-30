// I have to create an object first that will be the player. SO that way it can use methods, and stuff

const Player =  () => {
    const player = document.createElement('div');
    player.classList.add('player');
    document.body.appendChild(player);


    const move = (e) => {
        let coords = player.getBoundingClientRect();
        switch(e.code) {
            case 'KeyW':
                console.log("W was pressed");
                console.log(coords);
                player.style.top = coords.bottom + 20 + "px";
                break;
            case 'KeyA':
                console.log("A was pressed");
                console.log(coords);
                player.style.marginRight = 10 + "px";
                break;
            case 'KeyS':
                console.log("S was pressed");
                console.log(coords);
                player.style.marginTop = 5 + "px";
                break;
            case 'KeyD':
                console.log("D was pressed");
                console.log(coords);
                player.style.top = coords.left + 20 + "px";
                break;
        }
    }

    window.addEventListener('keydown', move);
}


    const player = Player();