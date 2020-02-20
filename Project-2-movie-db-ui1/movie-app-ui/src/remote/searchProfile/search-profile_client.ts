export const apiSearchProfile = async ( username: string, role: string): Promise<string> => {
    let credentials = {
        username,
        role
    }
    try {
        const response = await fetch('http://movie-env.m2ppetmuqd.us-east-2.elasticbeanstalk.com/findusername', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log(body)
            return 'successful user search'
        } else if(response.status === 203){
            return "you are not a basic user"
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