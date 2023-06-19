import './App.css';
import Video from './components/pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>videos videos videos
        <Video
          likes={100}
          messages={200}
          shares={300}
          name={"Sandro"}
          description={"Gato pulando"}
          music={"Música de suspense"}
          url={"https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"}
        />
        <Video
          likes={100}
          messages={200}
          shares={300}
          name={"Ptak"}
          description={"Gato olhando"}
          music={"Clap your hands"}
          url={"https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"}
          />
      </div>
    </div>
  );
}

export default App;
