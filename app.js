//3 nom dans le json pour tester le code
//henry, blanc, petit

//dom du texte des cadre
let nom = document.querySelector('.nom')
let message = document.querySelector('#texte1')
//dom btn loupe du formulaire
let btnRecherche = document.querySelector('.loupe')

btnRecherche.onclick = () => {
//dom input recherche
let recherche = document.getElementById('inrecherche').value
recherche = recherche.charAt(0).toUpperCase() + recherche.substring(1).toLowerCase()

    if (recherche == "") {

        console.log("veuillez renseigner le champs")
        
    }else{
        let jsonU = fetch("utilisateurs.json")
        //recherche dans le json uutilisateur
        jsonU.then((res) => {
            res.json().then((res) => {

                res.utilisateur.forEach(utilisateur => {

                    if (recherche == utilisateur.name){
                        nom.textContent = utilisateur.prenom + " " + utilisateur.name
                        message.textContent = utilisateur.message
                    }else{
                        console.log('erreur')
                    }

                });

        
            })
        })
    
    }

}

