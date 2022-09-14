import PropTypes from 'prop-types';
import ContactItem from 'components/contactItem/ContactItem';
export default function ContactsList({
  contacts,
  value,
  onChange,
  deleteContact,
}) {
  return (
    <div>
      <h1>Contacts</h1>
      <input type="text" value={value} onChange={onChange} />
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              removeContact={() => deleteContact(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};
