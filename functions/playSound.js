//global sound settings
let SYSTEM = true;
let BACKGROUND = true;
let MUSIC = true;
let SFX = true;
let MUTED = false;

function playSound(id){

    if(!MUTED){
        switch(id.split('-')[0]){
            case 'system':
                if(SYSTEM){
                    document.getElementById(id).play();
                }
                break;
            case 'music':
                break;
            default: break;
        }
    }
    
}