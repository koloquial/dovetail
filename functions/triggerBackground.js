function triggerBackground(){ 
    console.log('LOADING', LOADING)
    setInterval(() => {
        if(LOADING){
            setLoadingBackground();
        }else{
            clearInterval(triggerBackground);
        }
    }, 5000)
}