function stopSound(id){
    switch(id){
        case 'mute':
            document.getElementById('music-title').pause();
            break;
        case 'music':
            document.getElementById('music-title').pause();
            break;
        default: break;
    }
}