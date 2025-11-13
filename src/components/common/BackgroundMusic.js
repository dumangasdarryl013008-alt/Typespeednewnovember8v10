import React, { useEffect, useRef } from 'react';

const BackgroundMusic = ({ isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    if (isPlaying) {
      audio.play().catch(error => {
        console.log('Auto-play prevented by browser:', error);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/typeblast-bgm.mp3"
      loop
      autoPlay
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundMusic;
