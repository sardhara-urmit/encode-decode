let btn1=document.querySelector("#btn1");
let encode=document.querySelector("#encode");

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

btn1.addEventListener("click",()=>{
   let  text=encode.value;
   let result="";
   let token="$";
   

   for(let i=0;i<text.length;i++){
    let char=text[i].toLowerCase();

    if(myLab[char]){
        result+=myLab[char];
    }
    else{
        result+=text[i];
    }
   }
   encode.value+="\n\n Encoded Succsesful:\n"+token+result;
    
   
})