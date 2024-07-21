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
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body)
//   }); // Request Object created with headers
//   return await res.json(); // Response Object returned from request and "Jsonified"
// }

// async function getTopTracks(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=10', 'GET')).items;
// }

// async function start() {
//     const topTracks = await getTopTracks();
//     console.log(
//         topTracks?.map(
//           ({name, artists}) =>
//             `${name} by ${artists.map(artist => artist.name).join(', ')}`
//         )
//       );
// }
// start()



// Example 3 Youtube MP3 download
const url = 'https://youtube-mp310.p.rapidapi.com/download/mp3?url=https://youtu.be/wbQLEXg_urE?list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': 'youtube-mp310.p.rapidapi.com'
	}
};


async function start() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
start()

// Example 4 Shazam API

// const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';
// const request = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '',
// 		'x-rapidapi-host': 'shazam.p.rapidapi.com'
// 	}
// };

// async function start() {
//   try {
//     const response = await fetch(url, request);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// start()





// Example 4 - ChatGPT API


// let reply;
// let message;

// let ul = document.getElementById('ul')


// const storedChats = localStorage.getItem('prevChat');

// function saveItem() { 
//   let previousChatItems = document.querySelectorAll('#ul li');
//   let previousChatTexts = Array.from(previousChatItems).map(li => li.innerText);
//   localStorage.setItem('prevChat', JSON.stringify(previousChatTexts));
// }
// if (storedChats) {
//   const chatArray = JSON.parse(storedChats);
  
//   chatArray.forEach(chat => {
//     const li = document.createElement('li');
//     li.textContent = chat;
//     ul.appendChild(li);
//   });
// }

// const url = 'https://chatgpt-42.p.rapidapi.com/chatgpt';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'x-rapidapi-key': '',
// 		'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}};


// function messageNode(message) {
//   let li = document.createElement('li')
//   li.innerHTML = `ME: ${message}`
//   ul.appendChild(li)
// }

// function replyNode (reply) {
//   let ul = document.getElementById('ul')
//   let li = document.createElement('li')
//   li.innerHTML = `AI: ${reply}`
//   ul.appendChild(li)
// }


// async function start(message) {
//   try {
//     options.body = JSON.stringify({
//       messages: [
//         {
//           role: 'user',
//           content: message
//         }
//       ],
//       web_access: false
//     });

//     const response = await fetch(url, options);
//     const result = await response.json();
//     reply = result.result
//     replyNode(reply)
//     saveItem()
//   } catch (error) {
//     console.error(error);
//   }
// }

// function formSubmit(e) {
//   e.preventDefault()
//   let message = document.querySelector('#message').value;
//   messageNode(message)
//   saveItem()
//   start(message);
//   document.querySelector('#message').value = '';
// }

// document.getElementById("form").addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault()
//     formSubmit(e);
//   }
// })
// document.getElementById("form").onsubmit = formSubmit
