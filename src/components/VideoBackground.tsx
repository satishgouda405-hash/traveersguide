import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

const FADE_DURATION = 0.5; // seconds

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tick = () => {
      if (!video.duration) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const t = video.currentTime;
      const d = video.duration;

      if (t < FADE_DURATION) {
        // Fade in
        video.style.opacity = String(t / FADE_DURATION);
      } else if (t > d - FADE_DURATION) {
        // Fade out
        video.style.opacity = String((d - t) / FADE_DURATION);
      } else {
        video.style.opacity = '1';
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div
      className="absolute left-0 right-0 bottom-0"
      style={{ top: '300px', zIndex: 0 }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          transition: 'none',
        }}
        src={VIDEO_URL}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  );
}
