import { useState } from "react";
import ApiServices from "../Services/ApiServices";
import './Register.css';

function Register() {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [clickRegister, setclickRegister] = useState(false);

    function onChangeId(e){
        setId(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function onChangeUsername(e){
        setUsername(e.target.value)
    }

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function clickRegisterButton(e){
        e.preventDefault();
        ApiServices.addEmployeeDetail({
            username,
            password,
            email,
            id

        })
        .then(res=>{
            setclickRegister(true);
        })
        .catch(err => alert("user already registered"));
    }

     function ClearData(){
         setUsername("");
         setPassword("");
         setEmail("");
         setId("");
     }

    return (
        <div className = "Register-container">
            <h1>Register</h1>
            <form className ="form-inline">
                User ID:   <input type = "text" placeholder = "enter name"
                onChange = {onChangeId} value= {id} id = "text-box"/><br/>
                UserName: <input type = "text" placeholder = "enter user name"
                onChange = {onChangeUsername} value = {username} id = "text-box"/><br/>
                Password: <input type = "password" placeholder = "enter password"
                onChange = {onChangePassword} value = {password} id = "text-box"/><br/>
                Email: <input type = "email" placeholder = "enter email"
                onChange = {onChangeEmail} value = {email} id = "text-box"/><br/>
                <button type = "submit" onClick = {clickRegisterButton} className = "register-btn">Register</button>&nbsp;
                <button type = "button" onClick ={ClearData} className = "reset-btn">Reset</button>
            </form>
            {
                clickRegister && <h3>User Registered Successfully</h3>
            }
        </div>
    )
}


export default Register;