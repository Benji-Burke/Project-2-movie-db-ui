export const apiSearchProfile = async ( username: String, role: String): Promise<object> => {
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
            console.log("adc" + body)
            return {
                body,
                searchMessage: 'successful login'
            }
        }
         else if(response.status === 401){
            return {
                
                body:null,
                searchMessage: 'some thing went wrong'
            }
        } else {
            return {
                body:null,
                searchMessage: 'some thing went wrong'
            }
        }
    } catch (e) {
        console.log(e);
        return {
            body:null,
            loginMessage: 'some thing went wrong'
        }
    }

}