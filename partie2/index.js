/* let person = {
    nom: "amah",
    age: 2001,
    presentation(){
        return`hello je suis ${this.nom} et j'ai ${this.age} ans`
    }
};

console.log(person.presentation()) */


/*  let notes = [{matiere:"reseau",note: 04,},{matiere:"gestion de projet",note:19},{matiere:"poo",note:18}]
let sum=0
let moy=0
for(let object of notes){
    console.log(object)
    sum+=object.note;
}
moy = sum/notes.length;
console.log(moy);  */



/* class Person {
    constructor(nom,age,classe){
this.nom = nom;
this.age = age;
this.classe = classe;
    }
    presentation(){
        return`hello je suis ${this.nom} et j'ai ${this.age} ans`
    }
}


const humbert = new Person("humbert", 210, "1ere anne")
console.log(humbert)
 */


/* class Compte {
    constructor(titulaire){
        this.titulaire = titulaire;
        this.solde = 0
    }
        Credite(montant){
             
             if(montant<0){
                console.log("erreur")
             }else{
                this.solde = montant + this.solde;
             }
        }

        }
const money = new Compte("humbert")
 money.Credite(100000);
 console.log(money) */

 /*  class Compte {
    constructor(detenteur){
        this.detenteur = detenteur;
        this.solde = 0;
    }
    recharger(montant){
            this.solde = this.solde + montant;
    }

 }
          const money = new Compte("doflamingo");
          money.recharger(2000); 
          console.log(money); */


         /*  class Homme {
            constructor(nom,prenom,sexe,age,passion){
                this.nom = nom
                this.prenom = prenom
                this.sexe = sexe
                this.age = age
                this.passion = passion

            }
            sentences(){
                return `je me nomme ${this.nom} ${this.prenom}, je suis du sexe ${this.sexe} et ma passion c'est le ${this.passion} `
            }
          }
          const situation = new Homme("AMAH","humbert","masculin",20,"informatique")
          console.log(situation) */


/* 
                            function getmysterynumber(){
                                return Math.floor(Math.random()*(10-1))+1
                           }
                           let nbreEssai = 3
                           let Mysterynumbers = getmysterynumber()
                           let usersNumbers = Number(prompt("enter yours numbers"))

                           while(isNaN(usersNumbers)){
                            usersNumbers = Number(prompt("enter yours numbers"))
                           }

                           while(nbreEssai>0){
                            nbreEssai = nbreEssai-1
                            switch(true){
                                case usersNumbers < Mysterynumbers: alert("c'est moins")
                                usersNumbers = Number(prompt("enter yours numbers"))
                                break;
                                case  usersNumbers > Mysterynumbers: alert("c'est plus")
                                usersNumbers = Number(prompt("enter yours numbers"))
                                break;
                                default: alert("c'est egale")
                            }
                            (nbreEssai===1)?alert("this is your last try"):alert("try again")
                           }
 */
 
                        
                    



/* 
              let nbre = Number(prompt("saisissez votre nombre"))
                 function multiplication(nombresaisie){
                    for(let i = 0; i<=12; i++){
                        console.log(`${nombresaisie}*${i} = ${nombresaisie*i}`) 
                    }
                 }
                 multiplication(nbre)
 */

                














/* person.nom ="luffy"
console.log(person.nom) */ 