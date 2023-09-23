//global sound settings
let SYSTEM = true;
let BACKGROUND = true;
let MUSIC = true;
let SFX = true;
let MUTE = false;

function playSound(id){

    if(!MUTE){
        let prefix = id.split('-')[0];

        switch(prefix){
            case 'system': SYSTEM ? document.getElementById(id).play() : ''; break;
            case 'background': BACKGROUND ? document.getElementById(id).play() : ''; break;
            case 'music': MUSIC ? document.getElementById(id).play() : ''; break;
            case 'sfx': SFX ? document.getElementById(id).play() : ''; break;
            default: break;
        }
    }

}