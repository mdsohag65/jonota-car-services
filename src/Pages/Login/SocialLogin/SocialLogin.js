import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorMessage;
    if (error || gError) {
        errorMessage =
            <div>
                <p className='text-danger'>Error: {error?.message} {gError?.message}</p>
            </div>
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorMessage}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img style={{ height: 20, marginRight: 5 }} src={google} alt="" />
                    Google Sign In
                </button>
                <button className='btn btn-warning w-50 mx-auto d-block my-2'>
                    <img style={{ height: 20, marginRight: 5 }} src={facebook} alt="" />
                    Facebook Sign In
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-secondary w-50 mx-auto d-block my-2'>
                    <img style={{ height: 20, marginRight: 5 }} src={github} alt="" />
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;