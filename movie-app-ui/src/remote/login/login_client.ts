
import axios from 'axios';
import { Redirect } from 'react-router';
export const apiLogin = async (username: string, password: string): Promise<object> => {
    let credentials = {
        username,
        password
    }
    try {
        const response = await fetch('http://localhost:8080/movie/test', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log(body)
            return {
                body,
                loginMessage: 'successful login'
                
                
               
            }
        } else if (response.status === 401) {
            return {
                loginMessage: "Incorrect Username or Password",
                body: null
            }
        } else {
            return {
                loginMessage: "Something Went Wrong",
                body: null
            }
        }
    } catch (e) {
        console.log(e);
        return {
            loginMessage: "Something Went Wrong",

        }
    }
}