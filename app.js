// Example 1 using a Maker and receiver function


// const apiKey = "";
// const lat = 6.524379;
// const lon = 3.379206;

// Promise maker
// function getInfo () {
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

// const apiKey = "";
// const lat = 6.524379;
// const lon = 3.379206;

// Promise creator
// function getInfo () {
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
// async function start() {
//     try {
//         const result = await countryInfo()
//         recieveData(result)

//     } catch (error) {
//         console.log(error)
//     }
// }

// start()



// Exampe 2 - Request and Reciever


// const clientId = ''
// const token = '';

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  }); // Request Object created with headers
  return await res.json(); // Response Object returned from request and "Jsonified"
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=10', 'GET')).items;
}

async function start() {
    const topTracks = await getTopTracks();
    console.log(
        topTracks?.map(
          ({name, artists}) =>
            `${name} by ${artists.map(artist => artist.name).join(', ')}`
        )
      );
}
start()




