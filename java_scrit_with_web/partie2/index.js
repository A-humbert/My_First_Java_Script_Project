/*   let button = document.querySelector(".Boutton")

button.addEventListener("click", (e) => {
    e.target.style.color="red"
    e.target.style.fontWeight="bold"
    e.target.style.fontSize="20px"
})
 
 //button.addEventListener("mouseover",(e) => (e.target.textContent = "fuck you🤷‍♀️🤦‍♂️")) 



let firstbutton = document.querySelector(".first")

firstbutton.addEventListener("click", (a) =>{
    a.target.style.color ="wheat"
    a.target.style.fontSize ="20px"
    a.target.style.fonWeight ="bold"
}) 
 */
/* firstbutton.addEventListener("mouseover", (a) => (
    a.target.textContent = "fuck you baby🤦‍♂️")
) */



let suscribes = {
    username: "",
    password: "",
    sexe: "",
    contactWays: [], 
    country: ""
}

// reaction des elements du formulaire

let inputUsername = document.getElementById("username")
let inputPassword = document.getElementById("pwd")
let inputSexe = document.getElementsByName("sexe")

let inputMail = document.getElementById("mail")
let inputTel = document.getElementById("tel")
let inputBp = document.getElementById("Bp")

let selectCountry = document.getElementById("country")


// input events

inputUsername.addEventListener("input",(e) =>{
    
    suscribes.username = e.target.value
} )

inputPassword.addEventListener("input", (e) =>{
suscribes.password = e.target.value
})

for(let myInput of inputSexe){
    myInput.addEventListener("change",(e) => {
        suscribes.sexe = e.target.value
    })
}

inputBp.addEventListener("change", (e) =>{
    e.target.checked? suscribes.contactWays.push("Bp") : null;

})

inputMail.addEventListener("change", (e) =>{
    e.target.checked? suscribes.contactWays.push("mail") : null;
})

inputTel.addEventListener("change", (e) =>{
    e.target.checked? suscribes.contactWays.push("tel") : null;
})

selectCountry.addEventListener("change",(e)=>{
suscribes.country = e.target.value
})

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(suscribes)
})

    