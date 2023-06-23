//Dans le fichier script.js, écrivez une requête ciblant l’URL du backend hébergé sur Vercel pour récupérer l’année.

console.log ("toto est content")

fetch ('https://test-naz-backend.vercel.app/year')
.then (response => response.json())
.then (data => {
    let yearTextToAdd = document.querySelector("#year")
yearTextToAdd.textContent = data.year

})
       