const STATUS_LOG = [];

function addStatusUpdate(status){
    STATUS_LOG.push(status);
    renderStatusUpdate();
}

function renderStatusUpdate(){
    let html = ''

    for(let i = 0; i < STATUS_LOG.length; i++){
        html += `${STATUS_LOG[i]}<br />`
    }

    document.getElementById("status-update").innerHTML = html;

    if(STATUS_LOG.length){
        setTimeout(() => {
            STATUS_LOG.pop(); 
            renderStatusUpdate();
        }, 5000);
    }
}