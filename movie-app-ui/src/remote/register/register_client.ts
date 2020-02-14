export const apiRegister = async (firstName: string, lastName: string, username: string, password: string, email:string): Promise<string> => {
    let credentials = {
        firstName,
        lastName,
        username,
        password,
        email,
        failTime : 0
    }
    try {
        const response = await fetch('http://localhost:8080/movie/users', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log(body)
            return 'successful register'
        } else if(response.status === 401){
            return "username used"
        } else {
            return "Something Went Wrong"
        }
    } catch (e) {
        console.log(e);
        return "Something Went Wrong"
    }
}