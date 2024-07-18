// Example 1 using a Maker and receiver function


// const apiKey = "c07bdb9c2fe0287884f7bb9b874b8360";
// const lat = 6.524379;
// const lon = 3.379206;

// Promise maker
// function countryInfo () {
//     return new Promise((resolve, reject) => {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
//         .then(reply => reply.json())
//         .then(data => resolve(data))
        
//     })
// }


// function recieveData(data) {
//     const weather = data.weather[0].main
//     const description = data.weather[0].description
//     const info = [data.weather[0].main, data.weather.description]
//     console.log(`Weather Conditon: ${weather} Description: ${description}`)
// }


// Promise reciever
// countryInfo()
//     .then(recieveData)



// Exampe 1.1 - Modifying the first example using try add catch

const apiKey = "c07bdb9c2fe0287884f7bb9b874b8360";
const lat = 6.524379;
const lon = 3.379206;

// Promise creator
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


// Promise reciever
async function start() {
    try {
        const result = await countryInfo()
        recieveData(result)

    } catch (error) {
        console.log(error)
    }
}

start()


