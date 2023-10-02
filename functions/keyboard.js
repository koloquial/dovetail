//globals
let KEY_LOCK = [];
let SELECTED = 0;

function keyPress(e){
    e = e || window.event;

    let key = e.key.toLowerCase();
    console.log('input', key)

    if(key === 'i'){
        //open menu > inventory
        openMenu('inventory');
    }

    if(key === 'a'){
        //action
        if(HERO.toolbar[SELECTED]){
            HERO.toolbar[SELECTED].action()
        }else{
            console.log('No action available');
        }
    }

    if(key === 'z'){
        //move toolbar selection left
        if(SELECTED <= 0){
            SELECTED = 4;
        }else{
            SELECTED -= 1;
        }
        renderToolbar();
    }

    if(key === 'x'){
        //move toolbar selection right
        if(SELECTED >= 4){
            SELECTED = 0;
        }else{
            SELECTED += 1;
        }
        renderToolbar();
    }

    //movement arrow keys
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