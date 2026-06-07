import React from 'react'
import Gramophone from './components/NewGramophone/Gramophone'
import VinylDisc from './components/Vinyl/VinylDisc'
import './index.css'
import {useState, useRef} from 'react'
import {songs} from './data/songs.js'

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentArtist, setCurrentArtist] = useState("");

  const [discInserted, setDiscInserted] = useState(false);
  const [armPlaced, setArmPlaced] = useState(false);
  const [showCollection, setShowCollection] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  

  //brain of website
  function handleSongClick(song) {
    setCurrentSong(song);
    setCurrentTitle(song.title);
    setCurrentArtist(song.artist);

    audioRef.current.src = song.audio;
    audioRef.current.play();

    setIsPlaying(true);

    audioRef.current.onloadedmetadata = ()=>{
      setDuration(audioRef.current.duration);
    };

    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };


  }

  function toggleMusic() {
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying(false);
    }
    else{
      audioRef.current.play();
      setIsPlaying(true);
    }

  }

  function previousSong(){
    if (!currentSong) return;

    const currentIndex = songs.findIndex(
      songs => songs.id === currentSong.id
    );

    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;

    handleSongClick(songs[previousIndex]);
  }

  function nextSong(){
    if (!currentSong) return;

    const currentIndex = songs.findIndex(
      songs => songs.id === currentSong.id
    );

    const nextIndex = (currentIndex + 1) % songs.length;

    handleSongClick(songs[nextIndex]);
  }

  function handleSeek(event){
    audioRef.current.currentTime = event.target.value;

    setCurrentTime(event.target.value);
  }

  function handleVolume(){
    audioRef.current.volume = event.target.value;
    setCurrentVolume(Math.floor(event.target.value*100));
  }


  function formatTime(seconds){
    if(!seconds) return "0:00";

    const minutes = Math.floor(seconds/60)

    const remainingSeconds = Math.floor(seconds%60);

    return `${minutes}:${remainingSeconds.toString().padStart(2,"0")}`


  }





  return (
    
    
    <div className='mainContainer'>
      {showCollection &&
      <div className='songContainer1'>
        {
          songs.map((song)=>(
          
            <VinylDisc key={song.id} song={song} onClick={()=>handleSongClick(song)} />
            
          ))
        }
        
      </div>
      }

      <Gramophone 
        isPlaying={isPlaying} 
        toggleMusic={toggleMusic} 
        previousSong={previousSong} 
        nextSong={nextSong} 
        handleSeek={handleSeek} 
        handleVolume={handleVolume} 
        formatTime={formatTime}
        currentTime={currentTime}
        duration={duration}
        currentVolume={currentVolume}
        currentTitle={currentTitle}
        currentArtist={currentArtist}
      />

      
      <button onClick={()=>setShowCollection(false)}>Show Gallery</button>
      
    </div>
  )
}

export default App
