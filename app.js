let nom = document.querySelector('.nom')
let message = document.querySelector('#texte1')

let jsonU = fetch("utilisateurs.json")
let s
jsonU.then((res) => {
    res.json().then((res) => {

        nom.textContent = res.utilisateur[0].prenom + " " + res.utilisateur[0].name

        console.log(nom.textContent)
    })
})

