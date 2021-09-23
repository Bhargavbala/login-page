import { useState } from "react";
import ApiServices from "../Services/ApiServices";
import './Login.css'


function Login() {
    const[id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [auth , setAuth] = useState(false);
    const [failauth, setFailAuth] = useState(false);
       
    function onChangeId(e){
        setId(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function getEmployeeDetailById(e){
        e.preventDefault();
        ApiServices.fetchEmployeeDetailsById(id).then(res => res.json())
        .then(data => {
            if(password === data.password){
                setAuth(true);
                setFailAuth(false);
            }else{
                setFailAuth(true);
                setAuth(false);
            }
        })
    }
    return(
        <div className = "Login-container">
            <h1 >Login</h1>
            <form className = "form-inline">
            UserID: <input type = "text" placeholder = "enter userId"
            onChange = {onChangeId} value = {id} id = "text-box"/><br/>
            Password: <input type = "password" placeholder = "enter password"
            onChange ={onChangePassword} value = {password} id = "text-box"/><br/><br/>
            <button type = "submit" onClick={getEmployeeDetailById} className = "login-btn">Login</button>&nbsp;
            {/* <a href = "">Forgot password?</a> */}
            </form>
   {
       auth && <h3>User Logged In Successfully!!!</h3>
   }
   {
       failauth && <h3>User Not Authenticated</h3>
   }


    </div>
    )
}

export default Login;