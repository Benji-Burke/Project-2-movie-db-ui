export const apiFavorite = async (movieName: string, apiId:string, userId: number): Promise<string> => {
    let credentials = {
        movieName,
        apiId,
        userId,
       
    }
    try {
        const response = await fetch('http://movie-env.m2ppetmuqd.us-east-2.elasticbeanstalk.com/addlist', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log(body)
            return 'successfully added'
        } else if(response.status === 401){
            return "favorited already added"
        } else {
            return "Something Went Wrong"
        }
    } catch (e) {
        console.log(e);
        return "Something Went Wrong"
    }
}