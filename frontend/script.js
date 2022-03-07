const loadEvent = () => {

    // counter
    let i = 0;

    // create object
    imageObj = new Image(128, 128);

    // set image list
    images = new Array();
    images[0] = "";
    images[1] = "";
    images[2] = "";
    images[3] = "";
    images[4] = "";

    let imgLen = images.length;

    const rootElement = document.getElementById("root")
    let go = document.getElementById('go');
    let select = document.getElementById('selectBox');
    let desc = document.getElementById('desc');
    go.addEventListener("click", loadItem);

    function loadItem() {
    const holder = document.getElementById("holder");

    if (document.getElementById('selectBox').value == 0) {
        holder.src = images[0];
        desc.innerHTML = document.getElementById("select0").getAttribute("data-desc");
        i = 0;
    } else if (document.getElementById('selectBox').value == 1) {
        holder.src = images[1];
        desc.innerHTML = document.getElementById("select1").getAttribute("data-desc");
        i = 1;
    } else if (document.getElementById('selectBox').value == 2) {
        holder.src = images[2];
        desc.innerHTML = document.getElementById("select2").getAttribute("data-desc");
        i = 2;
    } else if (document.getElementById('selectBox').value == 3) {
        holder.src = images[3];
        desc.innerHTML = document.getElementById("select3").getAttribute("data-desc");
        i = 3;
    } else if (document.getElementById('selectBox').value == 4) {
        holder.src = images[4];
        desc.innerHTML = document.getElementById("select4").getAttribute("data-desc");
        i = 4;
    }
    document.getElementById('prev').style.display = "";
    document.getElementById('next').style.display = "";
    }

    function nxt() {
    if (i < imgLen - 1) {
        i++;
    } else {
        i = 0;
    }
    select.value = i;
    desc.innerHTML = document.getElementById("select" + i).getAttribute("data-desc");
    document.getElementById("holder").src = images[i];
    }

    function prvs() {
    if (i > 0) {
        i--;
    } else {
        i = imgLen - 1;
    }
    select.value = i;
    desc.innerHTML = document.getElementById("select" + i).getAttribute("data-desc");
    document.getElementById("holder").src = images[i];
    }
}

window.addEventListener("load", loadEvent) 