window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});
function enter(){
    setTimeout(function() {
        window.location.href = "home.html";
    }, 4800);
}
function travel(){
    var p="<p onmouseout='untravel()' id='unship'>"
    var fire="<a href='vid.html'><img src='shiphover.gif' class='ship'></a>"
    var pcl="</p>"
    document.getElementById("spaceship").innerHTML=p+fire+pcl
}
function untravel(){
    var pa="<p onmouseover='travel()' id='spaceship'>";
    var i="<img src='ship.png' class='ship'>";
    var c="</p>";
    document.getElementById("unship").innerHTML=pa+i+c;
}
function travel2(){
    var p="<p onmouseout='untravel2()' id='unship2'>"
    var fire="<a href='vid.html'><img src='shiphover.gif' class='ship2'></a>"
    var pcl="</p>"
    document.getElementById("spaceship2").innerHTML=p+fire+pcl
}
function untravel2(){
    var pa="<p onmouseover='travel2()' id='spaceship'>";
    var i="<img src='ship.png' class='ship2'>";
    var c="</p>";
    document.getElementById("unship2").innerHTML=pa+i+c;
}
function trav() {
    setTimeout(function() {
        window.location.href = "home.html";
    }, 4800);
}
