import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const text = useRef('');

  const { filterContacts, clearFilter, filter } = contactContext;

  useEffect(() => {
    if (filter === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      // if there is text in the input field then filter the contacts
      filterContacts(e.target.value); // filterContacts is a function in the ContactContext file which is passed down as a prop
    } else {
      clearFilter(); // clearFilter is a function in the ContactContext file which is passed down as a prop and clears the filter when the input field is empty
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
