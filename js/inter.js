function ConsumoDigiApi(){

    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {       
        console.log('La DigiApi respondió ConsumoDigiApi');
        console.log(data);
        const largoApi = data.length;
        console.log(largoApi);

        var divDigimones = document.getElementById('digimones')

        for (let index = 0; index < largoApi; index++) {
            const img = document.createElement("img");
            img.src = data[index].img;
            img.className = "digimonesChiquitos"
            img.id = "digimon" + index
            divDigimones.appendChild(img);
        }

    })
    .catch(error => console.log('No encontré el Digimon :(' , error));
}

function listDigimon(){
    fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
        
        console.log('La DigiApi respondió listDigimon');
        console.log(data);
        const largoApi = data.length;
        console.log(largoApi);
        var digiList = document.getElementById('digimonesList');
        for (let index = 0; index < largoApi; index++) {
            const option = document.createElement("option");
            option.value = data[index].name;
            digiList.appendChild(option);
        }
    })
    .catch(error => console.log('No encontré el Digimon :(' , error));

}

function searchDigimon(objeto){
    const name = document.getElementById("search").value;
    console.log("nombre" + name);
    var url = "https://digimon-api.vercel.app/api/digimon/name/" + name
    fetch(url)
    .then(response => response.json())
    .then(data => {        
        console.log('La DigiApi respondió searchDigimon');
        console.log(data);
        var imagen = document.getElementById('imgDelDigimon');
        var nombre = document.getElementById('nombreDelDigimon');
        var nivel  = document.getElementById('nivelDelDigimon');
        imagen.src = data[0].img
        nombre.innerHTML = data[0].name
        nivel.innerHTML = data[0].level
    })
    .catch(error => console.log('No encontré el Digimon :(' , error));
}
