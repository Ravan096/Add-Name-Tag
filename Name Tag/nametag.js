const name= document.getElementById("name");
const tags= document.querySelector(".tags");

const Create=()=>{  

    if(name.value==""){
        return null;
    }
    const tag = document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText= `Hello detective ${name.value}`;
    tags.append(tag);

};