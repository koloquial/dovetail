function setModalContent(screen){
    let modal = document.getElementById("modal");
    modal.style.display = "block";
    document.getElementById("modal-content").innerHTML = screen();
}