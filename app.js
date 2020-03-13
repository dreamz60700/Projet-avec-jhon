//dom du texte des cadre
let nom = document.querySelector('.nom')
let message = document.querySelector('#texte1')
//dom btn loupe du formulaire
let btnRecherche = document.querySelector('.loupe')

btnRecherche.onclick = () => {
//dom input recherche
let recherche = document.getElementById('inrecherche').value

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

                    console.log(utilisateur.name)
                    console.log(utilisateur.prenom)
                    console.log(utilisateur.message)
                });

                console.log(res.utilisateur)
        
            })
        })
    
    }

}


/*res.forEach(utilisateur => {
                    console.log(utilisateur)
                })
                
                nom.textContent = res.utilisateur[0].prenom + " " + res.utilisateur[0].name*/