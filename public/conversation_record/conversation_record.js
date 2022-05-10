import "../firebase_initialization.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";



const cnt = 0;

const url = new URL(window.location.href);
const urlParams = url.searchParams;
const roomId = urlParams.get("roomCode");
const date = urlParams.get("date");
const opponent = urlParams.get("opponent");
const auth = getAuth();
const db = getFirestore();

let myName = null;
onAuthStateChanged(auth, (user) => {
    if (user) {
        myName = user.displayName;
        showChats();
    } else {
        console.log("No User.");
    }
});


async function showChats() {
    const chatCol = collection(db, "chats");
    const chatRef = doc(chatCol, roomId);
    const querySnapshot = await getDocs(collection(chatRef, "speeches"));

    let sub_stTime = document.querySelector(".sub_stTime");
    sub_stTime.textContent += date;

    let title_area = document.querySelector(".title_area");
    title_area.textContent = opponent + "님과의 대화";

    querySnapshot.forEach((doc) => {
        let parsed_data = JSON.parse(JSON.stringify(doc.data()));
        let speecher = parsed_data.speecher;
        let text = parsed_data.text;
      
        console.log(myName);

        if (speecher == myName) {
            let myBox = document.createElement("div");
            myBox.setAttribute("class", "myBox");

            let myText = document.createElement("div");

            myText.setAttribute("class", "myText");
            myText.textContent = text;

            console.log("my text: ", myText.textContent);

            myBox.append(myText);
            document
                .querySelector(".chatLog")
                .append(myBox);

            

        } else {
            let oppBox = document.createElement('div');
            oppBox.setAttribute("class", "oppBox");
          
            let oppText = document.createElement('div');
            oppText.setAttribute("class", "oppText");
            oppText.textContent = text;
            console.log("opponent text : ", oppText.textContent);
           
            
            oppBox.append(oppText);
            document
                .querySelector('.chatLog')
                .append(oppBox);


        }
        let minbox = document.querySelector(".min-content");
        minbox.scrollTop = minbox.scrollHeight;

        // // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
    });
}

document.querySelector("#input_search_text").addEventListener('keyup',(e)=>{
  if (e.keyCode === 27) { 
    console.log("esc 누름");
    unfilter(); 
  }
});
document.querySelector("#icon_cancel").addEventListener("click", unfilter);

function unfilter(){
  var value,  myBox, oppBox, myText, oppText, myidx, oppidx , i,j, minbox, regex2, orgmy, orgopp, box;
  myidx = 0;
  myidx = 0;

  value = document.getElementById("input_search_text").value.toUpperCase();


  myBox = document.getElementsByClassName("myBox");
  oppBox = document.getElementsByClassName("oppBox");
  
  minbox = document.querySelector(".min-content");


  for(i=0;i<myBox.length;i++){
      myText = myBox[i].getElementsByClassName("myText");
      
    if(myText[0].innerHTML.toUpperCase().indexOf(value) > -1){

      var regex = new RegExp(value,'gi');
      myText[0].innerHTML = myText[0].innerHTML.replace(regex, "<span class='unhighlight-my'>" + value + "</span>") ;
      
    }else {
      //   myBox[i].style.display = "none";
    }
  }
  for(j=0;j<oppBox.length;j++){
      oppText = oppBox[j].getElementsByClassName("oppText");
      
    if(oppText[0].innerHTML.toUpperCase().indexOf(value) > -1){
      var regex = new RegExp(value, 'gi');
      oppText[0].innerHTML = oppText[0].innerHTML.replace(regex, "<span class='unhighlight-opp'>" + value + "</span>") ;
    }else {
      //   oppBox[j].style.display = "none";
    }

  }
  document.getElementById("input_search_text").value = "";
}



// 검색기능
document.querySelector("#input_search_text").addEventListener('keyup',(e)=>{
  if (e.keyCode === 13) { 
    console.log("enterkey 누름");
    filter(); 
  }
});

document.querySelector('.icon_search').addEventListener("click", filter);

var flag ;
function filter(){

    var value,  myBox, oppBox, myText, oppText, myidx, oppidx , i,j, minbox, regex2, orgmy, orgopp, box;
    myidx = 0;
    myidx = 0;

    value = document.getElementById("input_search_text").value.toUpperCase();


    myBox = document.getElementsByClassName("myBox");
    oppBox = document.getElementsByClassName("oppBox");
    
    minbox = document.querySelector(".min-content");


    for(i=0;i<myBox.length;i++){
        myText = myBox[i].getElementsByClassName("myText");
        
      if(myText[0].innerHTML.toUpperCase().indexOf(value) > -1){

        var regex = new RegExp(value,'gi');
        myText[0].innerHTML = myText[0].innerHTML.replace(regex, "<span class='highlight'>" + value + "</span>") ;
        minbox.scrollTop = myBox[i].scrollHeight;
        console.log("i : ",i);
      }else {
        //   myBox[i].style.display = "none";
      }
    }
    for(j=0;j<oppBox.length;j++){
        oppText = oppBox[j].getElementsByClassName("oppText");
        
      if(oppText[0].innerHTML.toUpperCase().indexOf(value) > -1){
        var regex = new RegExp(value, 'gi');
        oppText[0].innerHTML = oppText[0].innerHTML.replace(regex, "<span class='highlight'>" + value + "</span>") ;
       
        minbox.scrollTop = oppBox[j].scrollHeight;
        console.log("j : ",j);
        //색 입히기
        
      }else {
        //   oppBox[j].style.display = "none";
      }

    }

    
    
  }
  

console.log(document.getElementsByClassName("chatLog"));