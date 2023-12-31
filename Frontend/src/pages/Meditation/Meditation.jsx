
import "./Meditation.css";
import Lottie from "lottie-react";
import timerback from "../../assets/timerBack.json";
import CountDownTimer from "./CountDownTimer";
import OpeningMessage from "./OpeningMessage";
import { useState } from "react";


const Meditation = () => {
  const [show,setshow] = useState(true);
    setTimeout(()=>setshow(false),4000)
  return (
    <div>
       <div className="mainMeditationBox">
        <div className='timerBack'>
          <CountDownTimer/>
        <Lottie animationData={timerback} 
                style={{
                    height:700
                }}
            />
        </div>
        {show && <OpeningMessage/>}
        <div className="spotifyPlayer">
        <iFrame src="https://open.spotify.com/embed/playlist/3ksy3Zso4vdt4JIzTYvpF9?theme=0" width="100%" height="500" frameBorder="0" allowtransparency="true" allow="encrypted-media" ></iFrame>
        </div>
        </div>
    </div>
  )
}

export default Meditation
