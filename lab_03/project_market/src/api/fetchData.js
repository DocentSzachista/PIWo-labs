
import axios from 'axios';
export const fetchData =(url) =>{

    return axios.get(url)
    .then( (response) =>{
        return response.data;
    });
};
export const fetchImage = (url) =>{
    console.log ( axios.get(url).then( (response) => {
        return response.data;
    }) );
}


// export const fetchData = (url)=>{
//     return fetch(
//         url,
//         {
//             headers :{
//                 'Access-Control-Allow-Origin': '*',
//                 //'Content-type': 'application/json',
//                 //'Accept': 'application/json'
//             }
//         }
//     ).then((response) =>{
//         return response.json();
//     }).then ((data) => {
//         return data;
//     });
// };

// normally data is sent to server and it sends response with JWT or other authetication token,
// here it will be simulated though we dont have any API in first place
// yes its not safe, but hey, we are storing pwd in public users.json file right ? :P
export const  loginUser = async (credentials) =>{
    let data = await fetch(
        'users.json',
        {
            headers :{
                'Content-type': 'application/json',
                'Accept': 'application/json'     
            }
        }
    ).then((response) => {
        return response.json();
    });
    let user = data.filter( (it) => { return it.login === credentials.login && 
                                            credentials.password === it.password });
    return user[0];
};

export const registerUser = async (credentials) =>{
    const data = {
         "login"   : credentials.login,
         "password": credentials.password
    };
    const file = await fetch("users.json",
        {
            headers: {"Content-type": "application/json"}
        }
    ).then((response) => {
        return response.json()
    }).then((data) =>{
        return data
    });
    
    file.push(data);
};




// export default fetchData;