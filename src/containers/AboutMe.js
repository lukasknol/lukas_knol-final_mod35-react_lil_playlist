import { useDispatch } from 'react-redux';
import { change_route } from '../actions';

const AboutMe = () => {
  const dispatch = useDispatch();

  const changeRoute = () => {
    dispatch(change_route('playlist'));
  };

  return (
    <div className="about-container">
      <div className="center">
        Hi music lovers, ready to rock the Internet? The Lil' Playlist is a
        Single Page Application (SPA) made with React to save your favorite
        rated songs. Simply type in the song title, the artist name, add the
        genre, rate the song and click on "Add song". You can sort your list by
        date, song title, artist name or rating. By clicking on the "bin" you
        can remove unwanted songs.
        <br />
        <br />
        This playlist is created by Lukas Knol as part of Winc Academy's course
        Front-end Development.
      </div>

      <div className="center">
        <button onClick={changeRoute}>Return to Lil' Playlist</button>
      </div>
    </div>
  );
};

export default AboutMe;
