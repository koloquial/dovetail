function triggerTip(){
    setInterval(() => {
        if(LOADING){
            setLoadingTip();
        }else{
            clearInterval(triggerTip);
        }
    }, 2500)
}