import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  videoUrl?: string; // New prop for background video URL
};

const Background1 = (props: IBackgroundProps) => {
  const { children, color, videoUrl } = props;

  const backgroundStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: color, // Apply background color if provided
    overflow: 'hidden',
  };

  const videoStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, // Ensure the video is behind the children
  };

  return (
    <div style={backgroundStyle}>
      {videoUrl && (
        <video autoPlay loop muted style={videoStyle}>
          <source src={videoUrl} type="video/mp4" />
          {/* Add additional source tags for different video formats if needed */}
          Your browser does not support the video tag.
        </video>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export { Background1 };
