
import React, { useState } from 'react';
import { validateEmail } from './Util';

// const defaultemail = 'Aruna@gmail.com';
// const defaultpassword = 'ash@2024';


function Login({ setIsAuthenticated }) {
    const [userCred, setUserCred] = useState([{defaultemail: 'Aruna@gmail.com', defaultpassword: 'ash@2024'}])
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showRegisterFields, setShowRegisterFields] = useState(false);

    const handleLogin = (e) => {
        // const storedEmail = localStorage.getItem('registered_email');
        // const storedPassword = localStorage.getItem('registered_password');
// if (email === defaultemail && password === defaultpassword) {
        //     localStorage.setItem('is_authenticated', 'true');
        //   
        e.preventDefault();
        const result=userCred.find(element=>element.defaultemail===email);
if (result && result.defaultpassword === password){
    alert('login success')
    localStorage.setItem('is_authenticated', 'true')
          setIsAuthenticated(true);
        } 
        else {
            alert('Invalid email or password');
        }
    };

    const handleRegister = () => {
        setShowRegisterFields(!showRegisterFields);
    };

    const handleCreateLogin = (e) => {
        e.preventDefault();
        const result=userCred.find(element=>element.defaultemail===newEmail);
if (result){
    alert('Email already exists. Please use a different email.')
}

        else if (!newEmail || !newPassword || !confirmPassword) {
            alert('Please fill in all fields');
        }

        else if (!validateEmail(newEmail))
      { 
          alert("Please enter a valid email address");
    }

       else if (newPassword !== confirmPassword) {
            alert('Password and confirm password do not match');
                 }

        // const registeredEmail = localStorage.getItem('registered_email');

        // if (registeredEmail === newEmail) {
        //     alert('Email already exists. Please use a different email.');
        //     return;
        // }
        else {
        // localStorage.setItem('registered_email', newEmail);
        // localStorage.setItem('registered_password', newPassword);
        setUserCred([...userCred, {defaultemail: newEmail, defaultpassword: newPassword}])
        setShowRegisterFields(false);
        setNewEmail('')
        setNewPassword('')
setConfirmPassword('')
setShowRegisterFields('')
}
    };

    return (
        <div>
            {!showRegisterFields ? (
                <div>
                    <div>
                        <label>Email</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleRegister}>Register</button>
                </div>
            ) : (
                <div>
                    <div>
                        <label>Email</label>
                        <input type='text' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button onClick={handleCreateLogin}>Register</button>
                </div>
            )}
        </div>
    );
}

export default Login;



