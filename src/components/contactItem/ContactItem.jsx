import PropTypes from 'prop-types';
export default function ContactItem({ name, number, removeContact, id }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  removeContact: PropTypes.func,
};
