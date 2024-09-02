let firstContainer=document.querySelector('#mainContainerOne');
let secondContainer=document.querySelector('#mainContainerTwo');
let firstInput=document.querySelector('.input1');
let secondInput=document.querySelector('.input2');
let messageOne;
let messageTwo;
let textmessage;
let TextMessage;
const formSelect1=document.querySelector('.form1');
formSelect1.addEventListener("submit",(event)=>{
    event.preventDefault();
    messageOne=firstInput.value;
    addNode();   
});
function addNode(){
    textmessage=document.createElement('span');
    textmessage.style.borderRadius=".3rem";
    textmessage.style.marginRight=".25rem"
    // textmessage.style.marginTop=".5rem"
    textmessage.style.backgroundColor="rgb(176,247,240)";
    let br=document.createElement('br');
    textmessage.innerText=messageOne;
    firstContainer.appendChild(textmessage);
    textmessage.appendChild(br);
    addNode1();
    // secondContainer.appendChild(textmessage);
}
function addNode1(){
  let textmessage1=document.createElement('div');
    textmessage1.style.borderRadius=".3rem";
    // textmessage.style.marginTop=".5rem"
    textmessage1.style.textAlign="left"
    textmessage1.style.marginLeft=".25rem"
    textmessage1.style.backgroundColor="rgb(176,247,240)";
    let br=document.createElement('br');
    textmessage1.innerText=messageOne;
    secondContainer.appendChild(textmessage1);
    textmessage1.appendChild(br);
}
const formSelect2=document.querySelector('.form2');
formSelect2.addEventListener("submit",(event)=>{
    event.preventDefault();
    messageTwo=secondInput.value;
   addnode();
});
function addnode(){
     TextMessage=document.createElement('span');
     TextMessage.style.borderRadius=".3rem";
     TextMessage.style.marginRight=".25rem"
     // TextMessage.style.marginTop=".5rem"
     TextMessage.style.backgroundColor="rgb(176,247,240)";
     let br=document.createElement('br');
     TextMessage.innerText=messageTwo;
     secondContainer.appendChild(TextMessage);
     TextMessage.appendChild(br);
     addnode1();
}
function addnode1(){
    let textmessage1=document.createElement('div');
    textmessage1.style.borderRadius=".3rem";
    // textmessage.style.marginTop=".5rem"
    textmessage1.style.textAlign="left"
    textmessage1.style.marginLeft=".25rem"
    textmessage1.style.backgroundColor="rgb(176,247,240)";
    let br=document.createElement('br');
    textmessage1.innerText=messageTwo;
    firstContainer.appendChild(textmessage1);
    textmessage1.appendChild(br);
}