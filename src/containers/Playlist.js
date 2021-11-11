import { useSelector, useDispatch } from 'react-redux';
import {
  delete_song,
  sort_songs,
  filter_songs,
  change_route,
} from '../actions';
import ButtonsBar from '../components/ButtonsBar';
import PlaylistHeader from '../components/PlaylistHeader';
import Song from '../components/Song';

const Playlist = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
  const sortingMethod = useSelector((state) => state.sortingMethod);
  const filters = useSelector((state) => state.filter);

  const handleDelete = (id) => {
    dispatch(delete_song(id));
  };

  const handleSort = (event) => {
    dispatch(sort_songs(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filter_songs(event.target.value, event.target.checked));
  };

  const changeRoute = () => {
    dispatch(change_route('about-me'));
  };

  const mappedSongs = songs
    .filter((song) => {
      // Filter by the filters currently in state
      if (filters.length === 0) {
        return song;
      }

      if (filters.includes(song.genre)) {
        return song;
      }
    })
    .sort((a, b) => {
      // Sort by the given sorting method
      switch (sortingMethod) {
        case 'none':
          return a.id - b.id;
        case 'latest':
          return b.id - a.id;
        case 'song-az':
          return a.title.toUpperCase() === b.title.toUpperCase()
            ? 0
            : a.title.toUpperCase() > b.title.toUpperCase()
            ? 1
            : -1;
        case 'song-za':
          return b.title.toUpperCase() === a.title.toUpperCase()
            ? 0
            : b.title.toUpperCase() > a.title.toUpperCase()
            ? 1
            : -1;
        case 'artist-az':
          return a.artist.toUpperCase() === b.artist.toUpperCase()
            ? 0
            : a.artist.toUpperCase() > b.artist.toUpperCase()
            ? 1
            : -1;
        case 'artist-za':
          return b.artist.toUpperCase() === a.artist.toUpperCase()
            ? 0
            : b.artist.toUpperCase() > a.artist.toUpperCase()
            ? 1
            : -1;
        case 'rating-lowhigh':
          return a.rating - b.rating;
        case 'rating-highlow':
          return b.rating - a.rating;
        default:
          return a.id - b.id;
      }
    })
    .map((song) => {
      // Map to individual components
      return <Song song={song} key={song.id} handleDelete={handleDelete} />;
    });

  return (
    <div>
      <ButtonsBar
        handleSort={handleSort}
        handleFilter={handleFilter}
        changeRoute={changeRoute}
      />

      <div className="playlist-container">
        <table>
          <PlaylistHeader />
          <tbody>{mappedSongs}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
