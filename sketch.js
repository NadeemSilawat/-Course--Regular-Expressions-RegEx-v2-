var textfield;
var output;
var input;

function setup(){
    noCanvas();
    textfield = select("#input");
    // textfield.changed(newText);
    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);
}

function newText(){
    var s = textfield.value();

    var r = /\w+@\w+\.(net|com|org)/;
    createP(r.test(s))
}