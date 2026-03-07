let btn1=document.querySelector("#btn1");
let bnt2=document.querySelector("#btn2");
let encode=document.querySelector("#encode");
let decode=document.querySelector("#decode");


// dicsnory
let myLab= {
    a: "c",
    b: "f",
    c: "k",
    d: "p",
    e: "x",
    f: "m",
    g: "z",
    h: "q",
    i: "r",
    j: "t",
    k: "y",
    l: "u",
    m: "v",
    n: "w",
    o: "s",
    p: "b",
    q: "h",
    r: "i",
    s: "j",
    t: "l",
    u: "n",
    v: "o",
    w: "a",
    x: "d",
    y: "e",
    z: "g"
};




// encoder  -----------------------------------------------
// btn1.addEventListener("click",()=>{
//     console.log("btn1 is click");
//     console.log(encode.value);
// });

btn1.addEventListener("click",()=>{
    let text = encode.value;
    let result = "";

    for(let i=0; i<text.length; i++){
        let char = text[i].toLowerCase();

        if(myLab[char]){
            result += myLab[char]; 
        }
        else{
            result += text[i];
        }
    }

    encode.value += "\n\nEncoded Successful:\n" + result;
});

// decoder-------------------------------------------------

let decodeLab = {
    c: "a",
    f: "b",
    k: "c",
    p: "d",
    x: "e",
    m: "f",
    z: "g",
    q: "h",
    r: "i",
    t: "j",
    y: "k",
    u: "l",
    v: "m",
    w: "n",
    s: "o",
    b: "p",
    h: "q",
    i: "r",
    j: "s",
    l: "t",
    n: "u",
    o: "v",
    a: "w",
    d: "x",
    e: "y",
    g: "z"
};

// bnt2.addEventListener("click",()=>{
//     console.log("btn2 is click");
//     console.log(decode.value);
// })

bnt2.addEventListener("click",()=>{
    let text = decode.value;
    let result = "";

    for(let i=0; i<text.length; i++){
        let char = text[i].toLowerCase();

        if(decodeLab[char]){
            result += decodeLab[char];
        }
        else{
            result += text[i];
        }
    }

    decode.value += "\n\nDecoded Successful:\n" + result;
});