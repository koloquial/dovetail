let LOADING = true;

function setLoading(setting, time, func){
    if(setting){
        LOADING = true;
        triggerBackground();
        triggerTip();
        document.querySelector("#container").style.display = "none";
        document.querySelector("#footer").style.display = "none";
        document.querySelector("#loading-container").style.display = "block";
    }else{
        document.querySelector("#loading-container").style.display = "none";
        document.querySelector("#container").style.display = "block"; 
        document.querySelector("#footer").style.display = "block"; 
        LOADING = false;
    }

    if(time){
        setTimeout(() => func(), time)
    }
}