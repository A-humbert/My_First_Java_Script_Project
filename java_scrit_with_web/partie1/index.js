// serach of element of HTML(document)

/* console.log( document.body.parentNode)
console.log(  document.body.childNodes) */
/* for(let element of document.body.childNodes){
    console.log(element)
} */
/* console.log(document.body.childNodes) */

/* console.log(document.getElementsByTagName("h1")) */
/* console.log(document.getElementsByClassName("daft")) */
 /*  console.log(document.getElementById("randomlist")) */


 /* let myULELT = document.getElementById("randomlist");
 console.log(myULELT.textContent);
 */

//* 
/*  let myULELT = document.getElementById("randomlist");
 myULELT.innerHTML += "<li>oops</li>" */   


/*  let myliELT = document.createElement("li")
 myliELT.textContent = "humbert";
 let myiELT = document.createElement("li")
 myiELT.textContent = "bebeto";
 let myaELT = document.createElement("li")
 myaELT.textContent = "francis";
 
 let myUL = document.createElement("ul")
 myUL.appendChild(myiELT)
 myUL.appendChild(myliELT)
 myUL.appendChild(myaELT)
 
 let myDiv = document.createElement("div")
 myDiv.appendChild(myUL)

 document.body.appendChild(myDiv) */



 /* let fruits = ["banane","orange","citron","tomate"]
let mytitle = document.createElement("h3")
mytitle.textContent = "mes fruits preferes"
let divElt = document.createElement("div")
document.body.appendChild(divElt)
divElt.appendChild(mytitle)
 let myUL = document.createElement("ul")
 divElt.appendChild(myUL)

 for(let fruit of fruits){
     let myLi = document.createElement("li")
     myLi.textContent= fruit
     myUL.appendChild(myLi)
 } */

//suppression d'un enfant a partir du parent
/* let myDivlist = document.getElementById("list")
let myUlrandomlist = document.getElementById("randomlist")
/* myDivlist.removeChild(myUlrandomlist) */

// remplacement d'un element enfant par un autre element
 /* let mynewul = document.createElement("ul")
let mynewli = document.createElement("li")
mynewli.textContent = "Range Rover"
mynewul.appendChild(mynewli) 
 myDivlist.replaceChild(mynewul,myUlrandomlist) 
 */
// attribution de l'attribut id du nom de popo....
/* mynewul.setAttribute("id","popo") */


/* let secondDiv = document.createElement("div")
document.body.appendChild(secondDiv)
secondDiv.style.height ="10vh"
secondDiv.style.width = "10vh"
secondDiv.style.backgroundColor = "red" */







