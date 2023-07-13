import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../contexts/AuthContext';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceType, setVoiceType] = useState('UK English Female');

  const { currentUser } = useAuth(); 

  useEffect(() => {
    if(currentUser && currentUser.voiceType) {
      setVoiceType(currentUser.voiceType);
    }
  }, [currentUser]);

  const handleSpeak = () => {
    window.responsiveVoice.speak(text, voiceType, {
      onstart: () => setIsSpeaking(true),
      onend: () => setIsSpeaking(false),
    });
  };

  const handlePause = () => {
    window.responsiveVoice.pause();
    setIsSpeaking(false);
  };

  const handleResume = () => {
    window.responsiveVoice.resume();
    setIsSpeaking(true);
  };

  const handleStop = () => {
    window.responsiveVoice.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      {isSpeaking ? (
        <>
          <FontAwesomeIcon icon={faPause} onClick={handlePause} className="mr-2" style={{cursor: "pointer", margin: '2px'}} />
          <FontAwesomeIcon icon={faStop} onClick={handleStop} className="mr-2" style={{cursor: "pointer", margin: '2px'}} />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faPlay} onClick={handleSpeak} className="mr-2" style={{cursor: "pointer", margin: '2px'}} />
          <FontAwesomeIcon icon={faVolumeUp} onClick={handleResume} className="mr-2" style={{cursor: "pointer", margin: '2px'}} />
        </>
      )}
    </div>
  );
};

export default TextToSpeech;
