
import axios from 'axios';
import { Redirect } from 'react-router';
export const apiLogin = async (username: string, password: string): Promise<object> => {
    let credentials = {
        username,
        password
    }
    try {
        const response = await fetch('http://movie-env.m2ppetmuqd.us-east-2.elasticbeanstalk.com/test', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            const body = await response.json()
            console.log("bbbbb"+body)
            return {
                body,
                loginMessage: 'successful login'
  
            }
        }
        else if (response.status === 203) {
            return {
                loginMessage: "incorrect password",
                body: null
            }
        }
        else if (response.status === 204) {
            return {
                loginMessage: "too many wrongtime, account was locked",
                body: null
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