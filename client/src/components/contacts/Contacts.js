import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <ContactItem contact={contact} />
        </div>
      ))}
    </Fragment>
  );
};

export default Contacts;
