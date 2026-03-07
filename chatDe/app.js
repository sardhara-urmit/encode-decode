let btn2 = document.querySelector("#btn2");
let decode = document.querySelector("#decode");

// Decode dictionary (reverse)
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

btn2.addEventListener("click", ()=>{

    let text = decode.value;
    let result = "";
    let token="$";
  
   if(text.includes(token)){

    for(let i=0; i<text.length; i++){

        let char = text[i].toLowerCase();

         if(char === token){
        continue;
        }

        if(decodeLab[char]){
            result += decodeLab[char];
        }
        else{
            result += text[i];
        }
    }
        decode.value += "\n\nDecoded Successful:\n" + result;
}

else{
    decode.value = "You Are Not Encoded In The Urmit's Secret Site";
}
    
      
});