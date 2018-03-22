window.onload = function () {

    document.querySelector('.closebtn').onclick = function(){
        document.getElementById("mySidenav").style.width = "0";
    };
    document.querySelector('.openbtn').onclick = function(){
        document.getElementById("mySidenav").style.width = "250px";

    };
};