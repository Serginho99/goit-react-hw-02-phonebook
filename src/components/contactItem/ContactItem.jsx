export default function ContactItem({ name, number, id, deleteContact }) {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
