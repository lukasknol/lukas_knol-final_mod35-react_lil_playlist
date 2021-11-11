import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Song = (props) => {
  const song = props.song;

  return (
    <tr>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre ? song.genre : ''}</td>
      <td>{song.rating ? song.rating : ''}</td>
      <td onClick={() => props.handleDelete(song.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </td>
    </tr>
  );
};

export default Song;
