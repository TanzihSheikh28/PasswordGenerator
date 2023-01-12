import React from "react";
import "./PasswordGenerator.css"

export default function PasswordGenerator() {
    var password = document.getElementById("password");

    const generatePassword = () => {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("password").value = password;
    }

    const copyPassword = () => {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");
    }

    return (
        <>
            <div className="box-wrapper">
                <div className="text-center mt-4 heading">
                    Random Password Generator
                </div>
                <div className="mt-3 form-field d-flex align-items-center">
                    <input type="text" name="" id="password" readOnly />
                </div>
                <button className="btn mt-3" onClick={generatePassword} >Generate Password</button>
                <button className="btn mt-3" onClick={copyPassword} >Copy Password</button>
            </div>
        </>
    )
}