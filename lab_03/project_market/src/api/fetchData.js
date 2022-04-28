
const fetchData = ()=>{
    return fetch(
        'db.json',
        {
            headers :{
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    ).then((response) =>{
        return response.json();
    });
};

export default fetchData;