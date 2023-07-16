'use strict';


    const form=document.getElementById("frmUser");
    const inputs =[...document.querySelectorAll("#frmUser Input")] ;
    const btn = document.querySelector("#btnAdd");
    const btnJson = document.querySelector("#btnJson");

    const datos= document.querySelector("#datos")
    /*form.addEventListener("submit",function(e){
        e.preventDefault();
    });*/
    function deleteItem(btn) {

        //alert(e);
        //event.target.parentElement.remove();
        btn.parentElement.remove();
        //console.log(event.target.parentElement);
    }

    const item=(valor)=>{
        const div=document.createElement("div");
        div.innerHTML = `<div class="notification is-info is-light py-2 my-1 mx-3">
        <button  class="delete" onclick="deleteItem(this)">x</button>
        <strong>User-</strong> ${form.name.value} | ${form.lastName.value}  </div>`
        return div ;
    };
    const data=[];
    const addJson = (json)=>{
        data.push(json);
    };


    btn.addEventListener("click",() => {
        //alert("Please enter:"+datos);
        //datos.append(item(form.name.value)); 
        addJson({
            "name":form.name.value,
            "lastName":form.lastName.value,
        });
        datos.insertBefore(item(form.name.value),datos.firstChild);
        //console.log(form.name.value);
        form.reset();
    })
  
    btnJson.addEventListener("click",() => {
        document.querySelector("#json").innerText=JSON.stringify(data);
    })

    




