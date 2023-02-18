import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts =>
    contacts.contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul>
      {filteredContacts(contacts).map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
