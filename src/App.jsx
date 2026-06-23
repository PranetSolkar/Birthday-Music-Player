import React from 'react'
import Gramophone from './components/NewGramophone/Gramophone'
import VinylDisc from './components/Vinyl/VinylDisc'
import './index.css'
import {useState, useRef, useEffect} from 'react'
import {songs} from './data/songs.js'
import { LayoutGroup } from "framer-motion";
import { useAnimationControls } from "framer-motion";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [newSong, setNewSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentArtist, setCurrentArtist] = useState("");
  const [showCollection, setShowCollection] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [isReturning, setIsReturning] = useState(false);

  // const discControls = useAnimationControls();
  const playerControls = useAnimationControls();
  const toneArmControls = useAnimationControls();

  const [discRotation, setDiscRotation] = useState(false)

  //useEffect
  useEffect(() => {
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  }, []);
  

  //brain of website
  async function handleSongClick(song) {
    if(!currentSong){
      setCurrentSong(song);
      setCurrentTitle(song.title);
      setCurrentArtist(song.artist);
      audioRef.current.src = song.audio;
      setDiscRotation(true);
      
      return;
    }

    setNewSong(song); 
    setIsReturning(true);
    setCurrentSong(null);

    // setCurrentTitle(song.title);
    // setCurrentArtist(song.artist);
    // audioRef.current.src = song.audio;
    // audioRef.current.play();

    // setIsPlaying(true);
    
    // audioRef.current.onloadedmetadata = ()=>{
    //   setDuration(audioRef.current.duration);
    // };

    // audioRef.current.ontimeupdate = () => {
    //   setCurrentTime(audioRef.current.currentTime);
    // };


  }

  async function toggleMusic() {
    if(isPlaying){
      await toneArmControls.start({
          rotate: 0,
          transition: {
              duration: 1
          }
      });
      playerControls.start({
          rotate: 0,
          transition: {
              duration: 0
          }
      });
      audioRef.current.pause();
      setIsPlaying(false);

      
    }
    else{
      await toneArmControls.start({
          rotate: 25,
          transition: {
              duration: 1
          }
      });
      playerControls.start({
          rotate: 360,
          transition: {
              duration: 5,
              repeat: Infinity,
              ease: "linear"
          }
      });
      
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
    <LayoutGroup>
    
    
    <div className='mainContainer'>
      {showCollection &&
      <div className='songContainer1'>
        {
          songs.map((song)=>(
          
            <VinylDisc 
              key={song.id} 
              song={song} 
              onClick={()=>handleSongClick(song)} 
              currentSong={currentSong} 
              isPlaying={isPlaying} 
              
              />
            
          ))
        }
      </div>
      }

      { showGallery &&
        <div className='gallery'>
          Photo Gallery
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
        currentSong={currentSong}      
        setCurrentSong={setCurrentSong}
        setNewSong={setNewSong}
        newSong={newSong}
        isReturning={isReturning}
        setIsReturning={setIsReturning}

        discRotation={discRotation}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        toneArmControls={toneArmControls}

        playerControls={playerControls}
      />

      
      
      <button onClick={()=>{setShowCollection(false); setShowGallery(true)}}>Show Gallery</button>
      
    </div>
    </LayoutGroup>
  )
}

export default App
