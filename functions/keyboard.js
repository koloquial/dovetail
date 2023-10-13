//globals
let KEY_LOCK = false;
let SELECTED = 0;
let MINIMAP = false;

function keyPress(e){
    // e = e || window.event;

    let key = e.key.toLowerCase();

    if(key === 'i'){
        //open menu > inventory
        openMenu('inventory');
    }

    if(key === 'm'){
        //reveal minimap
       if(!MINIMAP){
            document.getElementById('minimap').style.visibility = 'visible';
            MINIMAP = true;
       }else{
            document.getElementById('minimap').style.visibility = 'hidden';
            MINIMAP = false;
        }
    }

    if(key === 'a' && !KEY_LOCK){
        //action
        if(HERO.toolbar[SELECTED]){
            KEY_LOCK = true;
            document.getElementById(`inventory-icon-${SELECTED}`).classList.add('flip');
            HERO.toolbar[SELECTED].action();

            setTimeout(() => { 
                document.getElementById(`inventory-icon-${SELECTED}`).classList.remove('flip');
                KEY_LOCK = false;
            }, 500);
        }else{
            setSnackbar(`<p>No action available.</p>`);
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