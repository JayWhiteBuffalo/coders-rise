import React from 'react';
import Navbar from "../components/Navbar";
import {useNavigate} from 'react-router-dom';
import UserContext from '../UserContext';
import { useContext } from 'react';

const RegisterThankYou = () => {
    const navigate = useNavigate();
    const { user} = useContext(UserContext);

    if (!user) {
        navigate('/register');

        alert('Please try registering again!');
        return null;
    }
  return (
    <div>
        <Navbar/>
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Thank you for registering!</h1>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <p className='lead'>If you have any questions or concerns please contact the development team!</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default RegisterThankYou;