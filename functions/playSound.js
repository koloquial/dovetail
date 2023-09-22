//global sound settings
let SYSTEM = true;
let BACKGROUND = true;
let MUSIC = true;
let SFX = true;
let MUTE = false;

function playSound(id){

    if(!MUTE){
        switch(id.split('-')[0]){
            case 'system':
                if(SYSTEM){
                    document.getElementById(id).play();
                }
                break;
            case 'music':
                if(MUSIC){
                    document.getElementById(id).play();
                }
                break;
            case 'background':
                if(BACKGROUND){
                    document.getElementById(id).play();
                }
                break;
            default: break;
        }
    }

}