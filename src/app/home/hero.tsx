import React from 'react';

export default function Hero() {
  return (
    <div className="relative -ml-4 h-screen w-screen bg-black lg:-ml-10">
      <iframe
        src="https://player.vimeo.com/video/362997602?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1&controls=0"
        className="aspect-video h-full w-full"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
