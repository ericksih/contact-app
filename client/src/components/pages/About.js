import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link className='btn bg-primary' to='/'>
        Back
      </Link>
      <h1 className='my-1'>ABOUT THIS APP</h1>
      <p className='my-1'>
        This is just a simple React App to manage your contacts. You can also
        create a new account and login to your account. You can create, edit,
        delete and view your contacts. You can also search for a contact by name
        or email.
      </p>
      <h1 className='my-1'>
        Built with: <i className='fab fa-react' /> for the frontend and{' '}
        <i className='fab fa-node' /> for the backend using Express and MongoDB
        as the database.
      </h1>
      <p className='bg-dark p'>
        <strong>Version: 1.0.0</strong>
      </p>
    </div>
  );
};

export default About;
