import React from "react";

export function UserForm() {
    const [state, setState] = React.useState({ userId: '', name: '', password: '', address: '', zipCode: '', email: '', sex: '', country: '', english: '', nonEnglish: '', about: '', userIdValid: false, nameValid: false, passwordValid: false, addressValid: false, zipCodeValid: false, emailValid: false });

    function validateId(userId) {
        return userId.length >= 5 && userId.length <= 7;
    }

    function validatePassword(password) {
        return password.length >= 7 && password.length <= 12;
    }
    function validateName(name) {
        return /^[A-Za-z]+$/.test(name);
    }

    function validateAddress(address) {
        return /^\w+$/.test(address);
    }

    function validateZipCode(zipCode) {
        return /^\w+$/.test(zipCode);
    }

    function validateEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    }

    function onPasswordChange(e) {
        var val = e.target.value;
        var valid = validatePassword(val);
        setState({ name: state.name, nameValid: state.nameValid, password: val, passwordValid: valid, address: state.address, addressValid: state.addressValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onUserIdChange(e) {
        var val = e.target.value;
        var valid = validateId(val);
        setState({ userId: val, userIdValid: valid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.address, addressValid: state.addressValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onNameChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = validateName(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: val, nameValid: valid, password: state.password, passwordValid: state.passwordValid, address: state.address, addressValid: state.addressValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onAddressChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = validateAddress(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: val, addressValid: valid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onCountryChange(e) {
        var val = e.target.value;
        console.log(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: val, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });

    }

    function onZipCodeChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = validateZipCode(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: state.country, zipCode: val, zipCodeValid: valid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onEmailChange(e) {
        var val = e.target.value;
        console.log(val);
        var valid = validateEmail(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: val, emailValid: valid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onMaleFemaleChange(e) {
        var val = e.target.value;
        console.log(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: val, english: state.english, nonEnglish: state.nonEnglish, about: state.about });
    }

    function onEnglishChange(e) {
        var val = '';
        if (e.target.checked) {
            val = e.target.value;
            console.log(val);
        }
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: val, nonEnglish: state.nonEnglish, about: state.about });

    }

    function onNonEnglishChange(e) {
        var val = '';
        if (e.target.checked) {
            val = e.target.value;
            console.log(val);
        }
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: val, about: state.about });

    }

    function onAboutChange(e) {
        var val = e.target.value;
        console.log(val);
        setState({ userId: state.userId, userIdValid: state.userIdValid, name: state.name, nameValid: state.nameValid, password: state.password, passwordValid: state.passwordValid, address: state.password, addressValid: state.passwordValid, country: state.country, zipCode: state.zipCode, zipCodeValid: state.zipCodeValid, email: state.email, emailValid: state.emailValid, sex: state.sex, english: state.english, nonEnglish: state.nonEnglish, about: val });
    }

    function handleSubmit(e) {

        if (state.nameValid === true && state.passwordValid === true && state.userIdValid === true) {
            alert(`Имя: ${state.name} Возраст: ${state.password}`);
        }
        else {
            e.preventDefault();
        }
    }
    var userIdValid = state.userIdValid === true ? "valid" : "invalid";
    var passwordValid = state.passwordValid === true ? "valid" : "invalid";
    var namevalid = state.nameValid === true ? "valid" : "invalid";
    var addressValid = state.addressValid === true ? "valid" : "invalid";
    var zipCodeValid = state.zipCodeValid === true ? "valid" : "invalid";
    var emailValid = state.emailValid === true ? "valid" : "invalid";
    var about = state.about
    return (

        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td> <label for="userId">User id [5 to 7 characters] :</label></td>
                    <td><input type="text" value={state.userId} onChange={onUserIdChange} className={userIdValid} id="userId" required /></td>
                </tr>
                <tr>
                    <td><label for="password">Password [7 to 12 characters] : </label></td>
                    <td><input type="text" value={state.password} onChange={onPasswordChange} className={passwordValid} id="password" required /></td>
                </tr>
                <tr>
                    <td><label for="name">Name [Alphabates characters] :</label></td>
                    <td><input type="text" value={state.name} onChange={onNameChange} className={namevalid} id="name" required /></td>
                </tr>
                <tr>
                    <td><label for="address">Address [Alphanumeric characters] : </label></td>
                    <td><input type="text" value={state.address} onChange={onAddressChange} className={addressValid} id="address" required /></td>
                </tr>
                <tr>
                    <td><label for="country">Country [Must select a country] :</label></td>
                    <td>
                        <select value={state.country} onChange={onCountryChange} id="country" required>
                            <option value="Ukraine">Ukraine</option>
                            <option value="Romania">Romania</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Other">Other</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><label for="zipCode">ZIP Code [Alphanumeric characters] :</label></td>
                    <td><input type="text" value={state.zipCode} onChange={onZipCodeChange} className={zipCodeValid} id="zipCode" required /></td>
                </tr>
                <tr>
                    <td><label for="email">Email [Valid email] :</label></td>
                    <td><input type="text" value={state.email} onChange={onEmailChange} className={emailValid} id="email" required /></td>
                </tr>
                <tr>
                    <td><label>Sex [Select Male or Female] :</label></td>
                    <td>
                        <label>
                            <input type="radio" name="MaleFemale" value="Male" onChange={onMaleFemaleChange} required></input>
                            Male
                        </label>

                        <label>
                            <input type="radio" name="MaleFemale" onChange={onMaleFemaleChange} value="Female" required></input>
                            Female
                        </label>
                    </td>
                </tr>
                <tr>
                    <td><label>Language [Optional] :</label></td>
                    <td>
                        <label>
                            <input type="checkbox" value="English" onChange={onEnglishChange}></input>
                            English
                        </label>
                        <label>
                            <input type="checkbox" value="Non-English" onChange={onNonEnglishChange}></input>
                            Non-English
                        </label>
                    </td>
                </tr>
                <tr>
                    <td><label for="about">About [Optional] :</label></td>
                    <td><textarea value={about} onChange={onAboutChange} id="about" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="Submit" /></td>
                </tr>
            </table>
            
        </form>
    );
}
