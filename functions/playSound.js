function playSound(category, id){
    if(HERO.sounds[category]){
        document.getElementById(id).play();
    }
}