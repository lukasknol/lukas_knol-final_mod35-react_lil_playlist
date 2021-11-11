import { useSelector } from 'react-redux';
import './styles/styles.css';
import Header from './components/Header';
import AddSong from './containers/AddSong';
import Playlist from './containers/Playlist';
import AboutMe from './containers/AboutMe';

function App() {
  const route = useSelector((state) => state.route);

  return (
    <div className="container">
      <Header />

      <main>
        {route === 'playlist' ? (
          <div>
            <AddSong />
            <Playlist />
          </div>
        ) : (
          <AboutMe />
        )}
      </main>
    </div>
  );
}

export default App;
