//global variables
let KEY_LOCK = false;
let SELECTED = 0;
let MINIMAP = false;

function keyPress(e){
    // e = e || window.event;

    if(HERO){
        //force key to be lowercase
        let key = e.key.toLowerCase();

        //open menu > inventory
        if(key === 'i' && !KEY_LOCK && !SHOW_FISHING){
            openMenu('inventory');
        }
    
        //reveal minimap
        if(key === 'm' && !KEY_LOCK && !SHOW_FISHING){
           if(!MINIMAP){
                document.getElementById('minimap').style.visibility = 'visible';
                MINIMAP = true;
           }else{
                document.getElementById('minimap').style.visibility = 'hidden';
                MINIMAP = false;
            }
        }
    
        if(key === 'a' && !KEY_LOCK){
    
            if(SHOW_FISHING){
                //fishing functions
    
            }else{
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
            
        }
    
        if(key === '1' && !KEY_LOCK && !SHOW_FISHING){
            SELECTED = 0;
            renderToolbar();
        }
    
        if(key === '2' && !KEY_LOCK && !SHOW_FISHING){
            SELECTED = 1;
            renderToolbar();
        }
    
        if(key === '3' && !KEY_LOCK && !SHOW_FISHING){
            SELECTED = 2;
            renderToolbar();
        }
    
        if(key === '4' && !KEY_LOCK && !SHOW_FISHING){
            SELECTED = 3;
            renderToolbar();
        }
    
        if(key === '5' && !KEY_LOCK && !SHOW_FISHING){
            SELECTED = 4;
            renderToolbar();
        }
    
        if(key === 'z' && !KEY_LOCK && !SHOW_FISHING){
            //move toolbar selection left
            if(SELECTED <= 0){
                SELECTED = 4;
            }else{
                SELECTED -= 1;
            }
            renderToolbar();
        }
    
        if(key === 'x' && !KEY_LOCK && !SHOW_FISHING){
            //move toolbar selection right
            if(SELECTED >= 4){
                SELECTED = 0;
            }else{
                SELECTED += 1;
            }
            renderToolbar();
        }
    
        //movement arrow keys
        if(key === 'arrowdown' && !KEY_LOCK && !SHOW_FISHING){
            try{
                e.preventDefault();
            }catch(e){
                // console.log('prevent default failed');
            }
    
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
    
        if(key === 'arrowup' && !KEY_LOCK && !SHOW_FISHING){
            try{
                e.preventDefault();
            }catch(e){
                // console.log('prevent default failed');
            }
    
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
    
        if(key === 'arrowleft' && !KEY_LOCK && !SHOW_FISHING){
            try{
                e.preventDefault();
            }catch(e){
                // console.log('prevent default failed');
            }
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
    
        if(key === 'arrowright' && !KEY_LOCK && !SHOW_FISHING){
            try{
                e.preventDefault();
            }catch(e){
                // console.log('prevent default failed');
            }
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

    
}

document.onkeydown = keyPress;



