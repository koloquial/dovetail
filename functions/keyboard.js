function keyPress(e){
    e = e || window.event;

    let key = e.key.toLowerCase();
    // console.log(key)

    if(key === 'arrowdown'){
        e.preventDefault();
        if(HERO.getDirection() === 'down'){
            if(HERO.checkSpace('down')){
                HERO.walk('down');
            }else{
                //space below not avail
            }
        }else{
            HERO.setDirection('down');
        }
    }

    if(key === 'arrowup'){
        e.preventDefault();
        if(HERO.getDirection() === 'up'){
            if(HERO.checkSpace('up')){
                HERO.walk('up');
            }else{
                //space below not avail
            }
        }else{
            HERO.setDirection('up');
        }
    }

    if(key === 'arrowleft'){
        e.preventDefault();
        if(HERO.getDirection() === 'left'){
            if(HERO.checkSpace('left')){
                HERO.walk('left');
            }else{
                //space below not avail
            }
        }else{
            HERO.setDirection('left');
        }
    }

    if(key === 'arrowright'){
        e.preventDefault();
        if(HERO.getDirection() === 'right'){
            if(HERO.checkSpace('right')){
                HERO.walk('right');
            }else{
                //space below not avail
            }
        }else{
            HERO.setDirection('right');
        }
    }

    renderMap(HERO.location);
}

document.onkeydown = keyPress;