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

  //brain of website
  function handleSongClick(song) {
    setCurrentSong(song);

    audioRef.current.src = song.audio;
    audioRef.current.play();

    setIsPlaying(true);



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





  return (
    // <div>
    //   {
    //     songs.map((song)=>(
        
          
    //         // <button
    //         // key={song.id}
    //         // onClick={()=>handleSongClick(song)}
    //         // >
    //         //   {song.title}
    //         // </button>
    //         <VinylDisc key={song.id} song={song} onClick={()=>handleSongClick(song)} />
           
    //     ))
    //   }

    //   <h2>
    //     Current Song: {currentSong?.title}
    //   </h2>
    //   <h2>
    //     Status: {isPlaying ? "Playing" : "Paused"}
    //   </h2>
    //   <button onClick={previousSong}>Previous</button>
    //   <button onClick={toggleMusic}>{isPlaying ? "Pause" : "Play"}</button>
    //   <button onClick={nextSong}>Next</button>
    // </div>
    


    <div className='mainContainer'>
      <div className='songContainer1'>
        {
          songs.map((song)=>(
          
            
              // <button
              // key={song.id}
              // onClick={()=>handleSongClick(song)}
              // >
              //   {song.title}
              // </button>
              <VinylDisc key={song.id} song={song} onClick={()=>handleSongClick(song)} />
            
          ))
        }
        {/* <VinylDisc/>
        <VinylDisc/>
        <VinylDisc/>
        <VinylDisc/>
        <VinylDisc/>
        <VinylDisc/> */}
      </div>

      <Gramophone/>
      
    </div>
  )
}

export default App
