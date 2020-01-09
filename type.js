let wordss = ["hey guys this is my first boring typing test game",
                "hope you will enjoy it",
            "please type some words to check the speed",
            "so this is your final speed ",
            "Check the address for typing errors such as ww.example.",
            "com instead of www.example.com",
            "If you are unable to load any pages", 
            "check your computer’s network connection" ];

const typedword=document.getElementById("txtara");

const msg=document.getElementById("msg");

let startTime, endTime;


const playGame = () =>{
    
    let num = Math.floor(Math.random()*wordss.length);
    msg.innerText=wordss[num];
    let date = new Date();
    startTime = date.getTime();
    typedword.innerText="";
    bttn.innerText = "Done";

}

const end = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);



    let totalstrlenth = typedword.value;
    let wordcount = wordcounter(totalstrlenth);
    let speed = Math.round((wordcount/totalTime)*60);

    let finalmsg = "your typing speed is  " + speed +" words per minute. ";

    finalmsg+= compareWords(msg.innerText,totalstrlenth);

    msg.innerText=finalmsg;

    
}

const compareWords = (str1,str2) =>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;
    // let flse = 0;

    word1.forEach(function(item , index){
        if(item==word2[index]){
            count++;
        }
        // else if(item != word2[index])
        // {
            // flse++;
        // }

    });
      
    let errWords= (word1.length - count);

    return (count + " correct out of " + word1.length + " words and the total number of error are " + errWords + ".");
    

}


const wordcounter = (str) =>{
    let response = str.split(" ").length;
    return response;

}



const bttn = document.getElementById("btn");
bttn.addEventListener("click", function(){
if(this.innerHTML=="Start")
{
     typedword.disabled = false;
     
     playGame();   
}else if(this.innerHTML= "Done")
{
    typedword.disabled=true;
    bttn.innerText="Start";
    end();
}


})


// cleartextcode

// function clearContents(){
    // document.getElementById("txtara").value = " ";
// }