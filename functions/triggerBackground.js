function triggerBackground(){ 
    setInterval(() => {
        if(LOADING){
            setLoadingBackground();
        }else{
            clearInterval(triggerBackground);
        }
    }, 5000)
}