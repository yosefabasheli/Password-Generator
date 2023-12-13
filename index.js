const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1Disp = document.querySelector("#password1");
let password2Disp = document.querySelector("#password2");

let passlength = 15;

 
 function randomCh() {
     let randomNo = Math.floor(Math.random() * characters.length);
     return characters[randomNo];
 }
 
 function genrateCh() {
      let answer= " " 
     for (let i = 0; i < passlength; i++){
       answer += randomCh();
       
     }
    return answer;
 }
 
 function showPasswords() {
    password1Disp.textContent = genrateCh();
    password2Disp.textContent = genrateCh();
 }

