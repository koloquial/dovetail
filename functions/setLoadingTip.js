function setLoadingTip(){
    const tips = [
        "If your inputs aren't being recognized, be sure to click the mouse inside of the browswer window to make sure it is active.",
        "Once I have tips to write here this is where they will go.",
        "Perhaps locations of easter eggs will be located here.",
        "Perhaps messages will cycle based on rarity rather than completely random."
    ]

    let randomTip = Math.floor(Math.random() * tips.length);
    document.getElementById("loading-tip").innerHTML = tips[randomTip];
}