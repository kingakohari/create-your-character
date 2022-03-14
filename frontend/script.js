const loadEvent = () => {


    const imgArray  = new Array();

    imgArray[0] = new Image(150, 150);
    imgArray[0] = "male.jpg"
    imgArray[1] = new Image(150, 150);
    imgArray[1] = "female.jpg"
    imgArray[2] = new Image(150, 150);
    imgArray[2] = "transgender.jpg"


    const imgArrayRace  = new Array();

    imgArrayRace[0] = new Image();
    imgArrayRace[0] = "humans.jpg"
    imgArrayRace[1] = new Image();
    imgArrayRace[1] = "elves.png"
    imgArrayRace[2] = new Image();
    imgArrayRace[2] = "orcs.jpg"
    imgArrayRace[3] = new Image();
    imgArrayRace[3] = "trolls.jpg";
    imgArrayRace[4] = new Image();
    imgArrayRace[4] = "dwarves.jpg"

    const imgArrayClass  = new Array();

    imgArrayClass[0] = new Image();
    imgArrayClass[0] = "hunters.jpg"
    imgArrayClass[1] = new Image();
    imgArrayClass[1] = "priests.jpg"
    imgArrayClass[2] = new Image();
    imgArrayClass[2] = "assassins.jpg"
    imgArrayClass[3] = new Image();
    imgArrayClass[3] = "wizards.png";
    imgArrayClass[4] = new Image();
    imgArrayClass[4] = "necromancers.jpg"


    let goGender = document.getElementById("goGender");
    let goRace = document.getElementById("goRace");
    let goClass = document.getElementById("goClass");

    let descGender = document.getElementById("descGender");
    let descRace = document.getElementById("descRace");
    let descClass = document.getElementById("descClass");

    let holderGender = document.getElementById("holderGender");
    let holderRace = document.getElementById("holderRace");
    let holderClass = document.getElementById("holderClass");

    goGender.addEventListener("click", loadItem);
    goRace.addEventListener("click", loadItem2);
    goClass.addEventListener("click", loadItem3);

    function loadItem() {
    
        if (document.getElementById("selectBoxGender").value == 0) {
            holderGender.src = imgArray[0];
            descGender.innerHTML = document.getElementById("select0").getAttribute("data-desc");
            
            } else if (document.getElementById("selectBoxGender").value == 1) {
                holderGender.src = imgArray[1];
                descGender.innerHTML = document.getElementById("select1").getAttribute("data-desc");
            
            } else if (document.getElementById("selectBoxGender").value == 2) {
                holderGender.src = imgArray[2];
                descGender.innerHTML = document.getElementById("select2").getAttribute("data-desc");
            }
    }

    function loadItem2() {

        if (document.getElementById("selectBoxRace").value == 3) {
            holderRace.src = imgArrayRace[0];
            descRace.innerHTML = document.getElementById("select3").getAttribute("data-desc");
            
            } else if (document.getElementById("selectBoxRace").value == 4) {
                holderRace.src = imgArrayRace[1];
                descRace.innerHTML = document.getElementById("select4").getAttribute("data-desc");
            
            } else if (document.getElementById("selectBoxRace").value == 5) {
                holderRace.src = imgArrayRace[2];
                descRace.innerHTML = document.getElementById("select5").getAttribute("data-desc");
                
            } else if (document.getElementById("selectBoxRace").value == 6) {
                holderRace.src = imgArrayRace[3];
                descRace.innerHTML = document.getElementById("select6").getAttribute("data-desc");

            } else if (document.getElementById("selectBoxRace").value == 7) {
                holderRace.src = imgArrayRace[4];
                descRace.innerHTML = document.getElementById("select7").getAttribute("data-desc");
        }
    }

    function loadItem3() {

        if (document.getElementById("selectBoxClass").value == 8) {
            holderClass.src = imgArrayClass[0];
            descClass.innerHTML = document.getElementById("select8").getAttribute("data-desc");
            
            } else if (document.getElementById("selectBoxClass").value == 9) {
                holderClass.src = imgArrayClass[1];
                descClass.innerHTML = document.getElementById("select9").getAttribute("data-desc");
            
            } else if (document.getElementById("selectBoxClass").value == 10) {
                holderClass.src = imgArrayClass[2];
                descClass.innerHTML = document.getElementById("select10").getAttribute("data-desc");
                
            } else if (document.getElementById("selectBoxClass").value == 11) {
                holderClass.src = imgArrayClass[3];
                descClass.innerHTML = document.getElementById("select11").getAttribute("data-desc");

            } else if (document.getElementById("selectBoxClass").value == 12) {
                holderClass.src = imgArrayClass[4];
                descClass.innerHTML = document.getElementById("select12").getAttribute("data-desc");
        }
    }
} 


window.addEventListener("load", loadEvent) 