const validation = (userData) => {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = "ingresa un email valido";
    }
    if(!userData.email){
        errors.email = "debe ingresar un email";
    }
    if(userData.email.length > 35){
        errors.email = "no debe superar los  35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "debe contener al menos 1 numero"
    } 
    if (userData.password.length < 6 || userData.password.length > 10){
        errors.password = "debe contener entre 6 y 10 caracteres"
    }
    return errors;
}
export default validation;

