import Hud from "../molecules/Hud";
import {useState} from "react";
import CityInput from "../atoms/CityInput";
import CountryIsoInput from "../atoms/CountryIsoInput";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import {v4 as uuidv4} from "uuid";
import {useError} from "../atoms/ErrorContext";
import ErrorBar from "../molecules/ErrorBar";
import { useNavigate } from "react-router-dom";


const RegisterUser = () => {

    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const {isLoading, isAuthenticated, getIdTokenClaims} = useAuth0();
    const {setError} = useError();
    const navigate = useNavigate();

    const registerUserAction= async () => {
        const tokenResponse =  await getIdTokenClaims();
        const token = tokenResponse.__raw;
        const axiosConfig = {
            headers: {
                Authorization: "Bearer " + token,
                TRACE_ID: uuidv4()
            }
        }
        const registerRequestBody = {
            "email" : tokenResponse.email,
            "cityName" : city,
            "countryISO" : country
        }
        const registerUserResponse = axios.post("/user/create", registerRequestBody,axiosConfig).then(response => {
            console.log(registerUserResponse)
        }).catch((err) => {
            //City not found - invalid input
            if (err.response.status === 404){
                setError("City " + city + ", " + country + " not found!");
            }
            //User already exists
            else if (err.response.status === 409){
                setError("User with email " + tokenResponse.email + " is already signed up!")
            }
            else if (err.response.status !== 200){
                setError("Server error.")
            }
        })
    }

    if (isLoading){
        return  <div id="register">
                    <Hud/>
                    <p>Loading...</p>
                </div>
    }
    //When the user is not authentificated - we cannot register him to the service and redirect to homepage
    else if (!isAuthenticated){
        navigate("/")
    }
    return (
        <div id="register">
            <Hud/>
            <h1>Sign up for email weather info</h1>
            <CityInput setCity={setCity}/>
            <CountryIsoInput setCountry={setCountry}/>
            <button onClick={registerUserAction}>Submit!</button>
            <ErrorBar/>
        </div>
    )

}

export default RegisterUser