  
   
   const date_actuelle = new Date();
   document.getElementById("valeur_date").textContent = date_actuelle.toLocaleDateString('fr-FR', { 
		day: 'numeric', month: 'short', year: 'numeric'} );

   
  document.addEventListener("DOMContentLoaded", function() { 
	let temps = 0;
	
	function calculer_temps() {
		temps++;
		document.getElementById("compteur").textContent = temps;
	}
	
	setInterval(calculer_temps, 1000);
    });

    const mode_sombre = document.getElementById("sombre");
    const mode_clair = document.getElementById("clair");

   mode_sombre.addEventListener("click", () => {
	   document.body.classList.remove("mode_clair");
	   document.body.classList.add("mode_sombre"); 
   });


  mode_clair.addEventListener("click", () => {
	document.body.classList.remove("mode_sombre"); 
	document.body.classList.add("mode_clair")
  });	
 
 const bouton_rappel = document.getElementById("rappel");

 bouton_rappel.addEventListener("click", () => {
    let numero = prompt("Veuillez entrer votre numéro de téléphone :");
    console.log("Numéro de téléphone saisi :", numero);

    while (numero == "") {
        alert("invalide ! : ");
		console.log("Numéro de téléphone saisi :", numero);
		numero = prompt("Veuillez entrer votre numéro de téléphone :")
    }
        alert("Merci ! Vous serez rappelé au : " + numero + " dans les meilleurs delais");
  
 });
 
 

