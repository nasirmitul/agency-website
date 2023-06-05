import React, { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log('LoggedIn user: ', user.email);
                form.reset();
                toast.success('Logged in')
                navigate('/admin');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=''>
            <div className="login">
                <h1 className='title'>Login to Admin Panel</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <input className="common email" type="email" name="email" placeholder="Email" required />
                    <input className="common password" name="password" placeholder="Password" required />
                    <button className="submit-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;