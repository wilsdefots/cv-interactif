

document.addEventListener("DOMContentLoaded", () => {

    /* pour mettre la date actuelle */ 
    const date_actuelle = new Date();
    document.getElementById("valeur_date").textContent = date_actuelle.toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'short', year: 'numeric'
    });

    /* Pour connaitre le temps passer à consulter mon cv */

    let temps = 0;
    setInterval(() => {
        temps++;
        document.getElementById("compteur").textContent = temps;
    }, 1000);


    /* Pour le passage du mode clai au mode sombre, et inversement */

    let selection_mode = document.getElementById("mode");

    selection_mode.addEventListener("change", () => {
        if (selection_mode.value === "sombre") {
            document.body.classList.remove("mode_clair");
            document.body.classList.add("mode_sombre");
        } else {
            document.body.classList.remove("mode_sombre");
            document.body.classList.add("mode_clair");
        }
    });


    /* Pour permettre à l'utilisateur de donner ses coordonnées*/

    const bouton_rappel = document.getElementById("rappel");
    bouton_rappel.addEventListener("click", () => {
        let numero = prompt("Veuillez entrer votre numéro de téléphone :");
        while (!numero) {
            alert("Entrez une valeur !");
            numero = prompt("Veuillez entrer votre numéro de téléphone :");
        }
        alert("Merci ! Vous serez rappelé au : " + numero + " dans les meilleurs délais");
    });



    let bouton_telecharger = document.getElementById("telechargement");
    bouton_telecharger.addEventListener("click",  ()=> {
        alert("Toi aussi! pourquoi télécharges-tu mon cv au lieu de simplement me contacter. Lol !") });

});




