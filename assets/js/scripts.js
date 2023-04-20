
function digimonList() {
    let apiDigimon = document.getElementById('digimonSelec').value
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${apiDigimon}`)
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)

        let imageDigimon = data[0].img   
        let nameDigimon = data[0].name
        let levelDigimon = data[0].level   

        
        let imagenDigimon = document.getElementById('imgDigimon')
            imagenDigimon.src = imageDigimon

        let nombreDigimon = document.getElementById('nombreDigimon')
            nombreDigimon.innerHTML = nameDigimon

        let nivelDigimon = document.getElementById('nivelDigimon')
            nivelDigimon.innerHTML = levelDigimon
    })
}

function seleccionado() {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then(response => response.json())
    .then(data => {
        let seleccion = document.getElementById('digimonSelec')
            data.forEach(digimon => {
        
                let escogido = document.createElement('option')
                escogido.text = digimon.name
                seleccion.add(escogido)
        });
    })
}
document.addEventListener('DOMContentLoaded', seleccionado)
