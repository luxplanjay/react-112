import { useSelector } from 'react-redux';

export default function NoteList() {
  const notes = useSelector((state) => state.notes.items);

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
}
