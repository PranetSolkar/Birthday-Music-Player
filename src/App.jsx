import React from 'react'
import Gramophone from './components/NewGramophone/Gramophone'
import VinylDisc from './components/Vinyl/VinylDisc'
import Gallery from './components/Gallery/Gallery.jsx'
import './index.css'
import {useState, useRef, useEffect} from 'react'
import {songs} from './data/songs.js'
import { LayoutGroup, useAnimationControls, AnimatePresence, motion } from "framer-motion";



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
  const fadeTitle = useAnimationControls();
  //Gallery Animation Controls
  const happyControls = useAnimationControls();
  const birthdayControls = useAnimationControls();
  const nameControls = useAnimationControls();
  const messageControls = useAnimationControls();
  const photoControls = useAnimationControls();


  const [galleryMode, setGalleryMode] = useState(false);
  const [startGalleryIntro, setStartGalleryIntro] = useState(false);

  const [discRotation, setDiscRotation] = useState(false)

  //useEffect
  useEffect(() => {
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    audioRef.current.onended = () => {
      nextSong();
    };
    
  }, []);

  useEffect(() => {

    if(!startGalleryIntro) return;

    async function playIntro(){
        await happyControls.start({
          clipPath: "inset(0 0% 0 0)",
          transition:{
            duration:4
          }
        });
        await birthdayControls.start({
          clipPath: "inset(0 0% 0 0)",
          transition:{
            duration:4
          }
        });
        await nameControls.start({
          clipPath: "inset(0 0% 0 0)",
          transition:{
            duration:4
          }
        });
        await messageControls.start({
          opacity:1,
          transition:{
            duration:5
          }
        });
        setTimeout(()=>{
          photoControls.start({
            opacity:1,
            transition:{
              duration:5
            }
          });
        },5000);
        // await photoControls.start({
        //   opacity:1,
        //   transition:{
        //     duration:7
        //   }
        // });
        setIntroPlayed(false);
    }
    playIntro();
}, [startGalleryIntro]);
  

  //brain of website
  async function handleSongClick(song) {
    if(!currentSong){
      setCurrentSong(song);
      setCurrentTitle(song.title);
      setCurrentArtist(song.artist);
      await fadeTitle.start({
        opacity: 1,
        transition: {
          duration: 1
        }
      })
      audioRef.current.src = song.audio;
      setDiscRotation(true);

      await autoShowGallery();
      
      return;
    }

    console.log("newSong")

    if(currentSong){
      setNewSong(song);
      // toggleMusic();
      if(isPlaying || newSong){
        console.log("newSongif")
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
        await fadeTitle.start({
          opacity: 0,
          transition: {
            duration: 1
          }
        })
        setCurrentTitle("");
        setCurrentArtist("");
        audioRef.current.src = null;
        

        
      }
      // else{
      //   await toneArmControls.start({
      //       rotate: 25,
      //       transition: {
      //           duration: 1
      //       }
      //   });
      //   playerControls.start({
      //       rotate: 360,
      //       transition: {
      //           duration: 5,
      //           repeat: Infinity,
      //           ease: "linear"
      //       }
      //   });
        
      //   audioRef.current.play();
      //   setIsPlaying(true);
      // }
    }
    setIsReturning(true);
    setCurrentSong(null);

    


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

  async function nextSong(){
    if (!currentSong) return;
    const currentIndex = songs.findIndex(
      songs => songs.id === currentSong.id
    );
    const nextIndex = (currentIndex + 1) % songs.length;
    await handleSongClick(songs[nextIndex]);
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

  // function hideCollection(){
  //   setTimeout(()=>{
  //     setShowCollection(false);
  //     setShowGallery(true);
  //   },4000)
  // }

  function autoShowGallery(){
    setTimeout(()=>{
        setGalleryMode(true);
        console.log("gallery mode true")
        // setStartGalleryIntro(true);
        setTimeout(()=>{
          setStartGalleryIntro(true);
        },3000);
    },6000);

}




  return (
    <LayoutGroup>
    
    
    <div className='mainContainer'>
      <div className= 'contentArea'>
      <AnimatePresence>

      <motion.div 
        className= { galleryMode ? "songContainerHidden" : 'songContainer1' }
        >
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
      </motion.div>
      

      </AnimatePresence>


      <AnimatePresence>

      
        <motion.div 
          className= { galleryMode ? "galleryVisible" : 'galleryHidden' }
          >
          {/* Photo Gallery */}
          {/* {galleryMode && <Gallery/>} */}
          {/* {galleryMode && <Gallery introPlayed={introPlayed} happy={happy}/>} */}
          <Gallery 
            galleryMode={galleryMode} 
            happyControls={happyControls}
            birthdayControls={birthdayControls}
            nameControls={nameControls}
            messageControls={messageControls}
            photoControls={photoControls}
            />
        </motion.div>
      

      </AnimatePresence>
      </div>

      <div className='rightPanel'>

        <button
          className='gallerySwitch'
          onClick={()=>{
              setGalleryMode(!galleryMode);
          }}
        >
          {
              galleryMode ? "🎵 Song Collection" : "🎞️ Memory Gallery"
              // 📸📷🎥🎦📹🎶🎵🎞️🎞️🎞️🎬
          }
        </button>

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
          fadeTitle={fadeTitle}
          // hideCollection={hideCollection}
        />

      </div>

    </div>
    </LayoutGroup>
  )
}

export default App
