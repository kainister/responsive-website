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
};