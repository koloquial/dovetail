function setLoadingBackground(){
    let randomImage = Math.ceil(Math.random() * 10);
    document.getElementById("loading-container").style.backgroundImage = "url('./images/loading/" + randomImage + ".png')";
}