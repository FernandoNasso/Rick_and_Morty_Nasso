import {useState} from "react";
import validation from "../Validation/Validation";
import styles from "./Form.module.css";


const Form = (props) => {
    const {login} = props
    const [errors, setErrors] = useState ({})  
    const[userData, setUserData] = useState({
        email:"", 
        password:""
    });

    const handleChange = (event) => {
        setUserData ({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors (validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
        

    }

    return (
        <form onSubmit = {handleSubmit} className={styles.Form}>
            <h1>Bienvenido</h1>
            <br/>
            <label className={styles.label} htmlFor="email">Email: </label>
            <input className={styles.input} name = "email" type = "email" placeholder= "ingrese su email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{color: "red"}}> {errors.email}  </p>}
            <br/>
            <label className={styles.label} htmlFor="password">Password: </label>
            <input className={styles.input} name = "password" type= "password" placeholder= "ingrese su password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{color: "red"}}> {errors.password} </p>}
            <br/>
            <button className={styles.button}>Login</button>
        </form>
    )


}

export default Form;