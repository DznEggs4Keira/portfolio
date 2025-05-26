// components/VideoPlayer.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import 'plyr/dist/plyr.css';
// Import the type but not the actual implementation
import type Plyr from 'plyr';

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, poster }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef<Plyr | null>(null);
  
  // Extract YouTube ID once when src changes
  const getYouTubeId = (url: string): string | null => {
    try {
      // Handle youtu.be format
      if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1].split(/[?&]/)[0];
      }
      // Handle youtube.com/watch format
      else if (url.includes('youtube.com/watch')) {
        return new URL(url).searchParams.get('v');
      }
      // Handle youtube.com/embed format
      else if (url.includes('youtube.com/embed/')) {
        return url.split('youtube.com/embed/')[1].split(/[?&]/)[0];
      }
      return null;
    } catch (e) {
      console.error('Error parsing YouTube URL:', e);
      return null;
    }
  };

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    let isMounted = true;
    setIsLoading(true);
    
    const initializePlyr = async () => {
      if (!videoRef.current || !isMounted) return;
      
      // Clean up previous element
      while (videoRef.current.firstChild) {
        videoRef.current.removeChild(videoRef.current.firstChild);
      }
      
      // Determine if the source is YouTube
      const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
      
      if (isYouTube) {
        const videoId = getYouTubeId(src);
        
        if (!videoId) {
          console.error('Invalid YouTube URL:', src);
          setIsLoading(false);
          return;
        }
        
        // Create a div for the YouTube player
        const div = document.createElement('div');
        div.setAttribute('data-plyr-provider', 'youtube');
        div.setAttribute('data-plyr-embed-id', videoId);
        videoRef.current.appendChild(div);
      } else {
        // Create a video element for local videos
        const video = document.createElement('video');
        video.controls = true;
        video.src = src;
        video.playsInline = true;
        if (poster) video.poster = poster;
        videoRef.current.appendChild(video);
      }
      
      try {
        // Import Plyr dynamically
        const PlyrModule = await import('plyr');
        
        // Destroy previous player if it exists
        if (playerRef.current) {
          playerRef.current.destroy();
        }
        
        // Initialize Plyr
        const newPlayer = new PlyrModule.default(videoRef.current.children[0] as HTMLDivElement, {
          controls: [
            'play-large', 'play', 'progress', 'current-time', 
            'mute', 'volume', 'captions', 'settings', 'pip', 'fullscreen'
          ],
          autoplay: false,
          muted: false,
        });
        
        playerRef.current = newPlayer;
        if (isMounted) setIsLoading(false);
      } catch (error) {
        console.error('Failed to load Plyr:', error);
        if (isMounted) setIsLoading(false);
      }
    };
    
    initializePlyr();
    
    return () => {
      isMounted = false;
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [src, poster]);
  
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
      <div ref={videoRef} className="plyr-container w-full h-full" aria-label={title}></div>
    </div>
  );
};

export default VideoPlayer;
