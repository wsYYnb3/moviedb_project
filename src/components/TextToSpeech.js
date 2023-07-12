import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import ResponsiveVoice from 'responsivevoice';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    ResponsiveVoice.speak(text, undefined, {
      onstart: () => setIsSpeaking(true),
      onend: () => setIsSpeaking(false),
    });
  };

  const handlePause = () => {
    ResponsiveVoice.pause();
    setIsSpeaking(false);
  };

  const handleResume = () => {
    ResponsiveVoice.resume();
    setIsSpeaking(true);
  };

  const handleStop = () => {
    ResponsiveVoice.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      {isSpeaking ? (
        <>
          <FontAwesomeIcon icon={faPause} onClick={handlePause} className="mr-2" />
          <FontAwesomeIcon icon={faStop} onClick={handleStop} className="mr-2" />
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faPlay} onClick={handleSpeak} className="mr-2" />
          <FontAwesomeIcon icon={faVolumeUp} onClick={handleSpeak} className="mr-2" />
        </>
      )}
    </div>
  );
};

export default TextToSpeech;
