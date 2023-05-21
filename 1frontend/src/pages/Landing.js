import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job<span> tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel
              delectus officiis magnam quaerat nam nulla molestias quis maxime
              cum? Dignissimos magni commodi asperiores error? Esse, suscipit!
              Accusamus natus dolores perspiciatis, adipisci consequuntur
              tempore, aspernatur consectetur hic labore reprehenderit
              blanditiis laborum. Recusandae sequi voluptatum placeat eaque
              itaque, debitis odio consequatur.
            </p>
            <Link to='/Register' className='btn btn-hero'>
              login/register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
