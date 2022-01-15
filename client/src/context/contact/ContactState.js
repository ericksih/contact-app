import React, { useReducer } from 'react';
// import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import // ADD_CONTACT,
// DELETE_CONTACT,
// SET_CURRENT,
// CLEAR_CURRENT,
// UPDATE_CONTACT,
// FILTER_CONTACTS,
// CLEAR_FILTER,
'../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'erick',
        email: 'erick@gmail.com',
        phone: '1234567890',
        type: 'personal',
      },
      {
        id: 2,
        name: 'juan',
        email: 'juan@gmail.com',
        phone: '1234567890',
        type: 'personal',
      },
      {
        id: 3,
        name: 'jose',
        email: 'jose.com',
        phone: '1234567890',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear FIlter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
