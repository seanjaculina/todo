const userInput = document.querySelector("#input");
const button = document.querySelector("#btn");
const list = document.querySelector("#list");

const listArray = [];

function addToDo(input){
    const toDo = {
        text: input,
        randomID: Math.random() * 13 * 7 * 5,
        completed: false
    };

    listArray.unshift(toDo);

    return toDo;
}

button.addEventListener("click", ()=>{

    const UI = userInput.value;
    const toDo = addToDo(UI);

    userInput.value = "";

    console.log(listArray);

    const li = document.createElement("li");
    li.innerText = UI;

    li.setAttribute("data-id", toDo.randomID);
    li.setAttribute("data-completed", toDo.completed);



    const deleteIcon = document.createElement("i");


    deleteIcon.classList.add("fas", "fa-trash", "trashicon");



    li.appendChild(deleteIcon);



    deleteIcon.addEventListener("click", ()=>{
        const parentEle = deleteIcon.parentElement;
        const parentID = parentEle.getAttribute("data-id");

        if(parentEle.completed === "false"){

            parentEle.setAttribute("data-completed","true");
        }
        else{

            parentEle.setAttribute("data-completed","false");
        }

        for(let i = 0; i < listArray.length; i++){
            if(listArray[i].randomID === parentID){
                listArray[i].splice(0, 1);
            }
        }

        list.removeChild(parentEle);

    })


   list.insertBefore(li, list.childNodes[0]);

});



/*
* a to do consists of 3 things
* 1. text
* 2. randomID
* 3. if completed or not
*
* { text: "", randomID: Math.random() * 13 * 7 * 5 * 1, completed: false
* }
*
*
* challenge: download google font to change font of the page --- DONE!
* challenge 2: download check mark icon and delete icon from font awesome and replace buttons with icons
* challenge 3: style page and remove list styles (bullet points)
* challenge 4: deploy website successfully
*
*
*
* */