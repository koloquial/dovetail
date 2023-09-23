function stopSound(id){
    let currentlyPlaying;
    switch(id){
        case 'mute':
            currentlyPlaying = JSON.parse(localStorage.getItem("dovetail-sounds"));

            currentlyPlaying.playing.forEach(song => {
                document.getElementById(song).pause();
            })
            
            break;
        case 'music':
            currentlyPlaying = JSON.parse(localStorage.getItem("dovetail-sounds"));

            currentlyPlaying.playing.forEach(song => {
                if(song.split("-")[0] === 'music'){
                    document.getElementById(song).pause();
                }
            })
            
            break;
        default: break;
    }
}