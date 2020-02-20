


export const getMultipleMovie = async (user: any):Promise<object> => {
    let response =[];
    for (let i = 0; i < user.list.length; i++){

        response[i] = `http://www.omdbapi.com/?apikey=45c8ca64&i=` + user.list[i].apiId;
    
    }
    
    return response;
}

export const getMovieByUrl = async (url:string):Promise<object> => {
    let response = await fetch(url)
    let body = await response.json()
    return body
}