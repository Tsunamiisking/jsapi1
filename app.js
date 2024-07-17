const apiKey = "c07bdb9c2fe0287884f7bb9b874b8360";
const lat = 6.524379;
const lon = 3.379206;


function countryInfo () {
    return new Promise((resolve, reject) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(reply => reply.json())
        .then(data => resolve(data))
        
    })
}


function recieveData(data) {
    const weather = data.weather[0].main
    const description = data.weather[0].description
    const info = [data.weather[0].main, data.weather.description]
    console.log(`Weather Conditon: ${weather} Description: ${description}`)
}

countryInfo()
    .then(recieveData)