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
/* 
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

// } */


/* 
function newText(){
    var s = textfield.value();
    // var r = /[.,!?\s]+/g;
    var r = /(\w+)/g;
    var word = s.split(r);
    console.log(word);

    for(var i =0 ;i<word.length;i++){
        createP(word[i] );
    }        
} */

// REGEX :-  replace() => use String , Function 

function newText(){
    var s = textfield.value();
    var r = /\d\w+\d/;

    var newString = s.replace(r,replacer);
    console.log(newString);
    createP(newString);
}

function replacer(match){
    console.log(match);

    if(match.length == 4){
        return match.toUpperCase();
    }else{
        return match;
    }
}