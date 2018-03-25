window.onload = function () {

    document.querySelector('.closebtn').onclick = function(){
        document.getElementById("mySidenav").style.width = "0";
    };
    document.querySelector('.openbtn').onclick = function(){
        document.getElementById("mySidenav").style.width = "250px";

    };
    var sideNav = document.querySelectorAll('.side-nav-a');
    for (var i = 0; i < sideNav.length; i++) {
        sideNav[i].onclick = function () {
            document.getElementById("mySidenav").style.width = "0";
        }
    }

    var pano1 = document.querySelector('.panoramas1');
    var pano2 = document.querySelector('.panoramas2');
    var portrait1 = document.querySelector('.portraits1');
    var portrait2 = document.querySelector('.portraits2');
    var macro1 = document.querySelector('.macro1');
    var macro2 = document.querySelector('.macro2');
    var journal1 = document.querySelector('.journal1');
    var journal2 = document.querySelector('.journal2');

    document.querySelector('.allBtn').onclick = function() {
        var block = [pano1, pano2, portrait1, portrait2, macro1, macro2, journal1, journal2];
        addAll(block);
    };
    document.querySelector('.panoramasBtn').onclick = function() {
        var none = [portrait1, portrait2, macro1, macro2, journal1, journal2];
        addBlock(pano1, pano2, none);
    };
    document.querySelector('.portraitsBtn').onclick = function() {
        var none = [pano1, pano2, macro1, macro2, journal1, journal2];
        addBlock(portrait1, portrait2, none);
    };
    document.querySelector('.macroBtn').onclick = function() {
        var none = [pano1, pano2, portrait1, portrait2, journal1, journal2];
        addBlock(macro1, macro2, none);
    };
    document.querySelector('.journalBtn').onclick = function() {
        var none = [pano1, pano2, portrait1, portrait2, macro1, macro2];
        addBlock(journal1, journal2, none);
    };
};

function addBlock (img1, img2, remove) {
    img1.classList.remove('none');
    img2.classList.remove('none');
    for (var i in remove) {
        remove[i].classList.remove('block');
        remove[i].classList.add('none');
    }

    img1.classList.add('block');
    img2.classList.add('block');
}
function addAll (all) {
    for (var i in all) {
        all[i].classList.remove('none');
        all[i].classList.add('block');
    }
}