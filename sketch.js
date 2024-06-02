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

// Use test(),match(),exec() Method...

function newText(){
    var s = textfield.value();

    // var r = /\w+@\w+\.(net|com|org)/;
    // var r = /\d{3}[-.]\d{4}/g

    var r = /(\d{3})[-.]\d{4}/g

    // var matches = s.match(r);

    // var result  = r.exec(s)
    while(result = r.exec(s)){
       createP(result[1]);
        // result = r.exec(s);x
    }   
    /* uSING  match() */
    // for(var i = 0;i<match.length;i++){
        
    //    createP(matches[i])
    // }

}