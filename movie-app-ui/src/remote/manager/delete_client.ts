export const apiDelete = async ( username: string, role: string): Promise<string> => {
    let credentials = {
        username,
        role
    }
    try {
        const response = await fetch('http://localhost:8080/movie/delete', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
          
            return 'successful delete user'
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