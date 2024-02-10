/*============= Random Joke Generator ===============*/

import React, { useState, useEffect } from 'react'; // I have used useEffect react hook to run side effects(there is a state change every time randomly) in function components. 
import axios from 'axios'; // importing axios for making an Http request 

const jokeGenerator = () => {
    const[joke, setJoke] = useState({}); // we have a state variable joke and setJoke method to update the state

useEffect(() => {
    const fetchJoke = async() => { //fetchJoke function makes an asynchronous GET request to the URL using axios
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke'); //await keyword is used to wait for the response before proceeding to the next line of code.
        setJoke(response.data); //once the response is received from the API, the data returned from the response (which contains the random joke) is extracted and set as the state of the `joke` variable using the `setJoke` function.
    }
    fetchJoke(); 
},[]); // an empty dependency array 

return ( //diplays the random joke type, setup and punchline and I have used tailwind css to style it
    <div className="p-4 bg-gray-200 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">{joke.type}</h2>
        <p className="text-gray-700 mb-2">{joke.setup}</p>
        <p className="text-blue-500 font-semibold">{joke.punchline}</p>
    </div>
);
};

export default jokeGenerator;
