//Dans le fichier script.js, écrivez une requête ciblant l’URL du backend hébergé sur Vercel pour récupérer l’année.

fetch ('https://test-naz-backend.vercel.app/year')
.then (response => response.json())
.then (data => console.log(data))
.then (data => {
    let yearTextToAdd = document.querySelector("#year")
yearTextToAdd.textContent = "cest la date du jour" + data.date

})
   