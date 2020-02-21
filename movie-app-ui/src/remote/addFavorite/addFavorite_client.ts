export const apiFavorite = async ( movieName: string, apiId: string,userId:number): Promise<string> => {
    let credentials = {
        movieName,
        apiId,
        userId

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
          
            return 'successful add this movie to your favorite list'
        } else if(response.status === 203){
            return "you are not admin"
        }

         else if(response.status === 401){
            return "Something Went Wrong"
        } else {
            return "Something Went Wrong"
        }
    } catch (e) {
        console.log(e);
        return "Something Went Wrong"
    }
}