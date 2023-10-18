let SHOW_FISHING = false;

function openFishing(){
    if(SHOW_FISHING){
        document.getElementById("fishing-window").style.visibility = 'hidden';
        SHOW_FISHING = false;
        
    }else{
        document.getElementById("fishing-window").style.visibility = 'visible';
        SHOW_FISHING = true;
        runFishing();
    }
}