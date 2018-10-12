window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    var txt = document.createTextNode("Hello world!");
    testdiv.appendChild(para);
    para.appendChild(txt);
    var emphasis = document.createElement("em");
    var txt1 = document.createTextNode("hello")
    emphasis.appendChild(txt1);
    para.appendChild(emphasis);
}