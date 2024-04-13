import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  imageUrl?: string; // New prop for background image URL
};

const Background1 = (props: IBackgroundProps) => {
  const { children, color, imageUrl } = props;

  const style: React.CSSProperties = {
    backgroundColor: color, // Apply background color if provided
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none', // Apply background image if provided
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
  };

  return <div style={style}>{children}</div>;
};

export { Background1 };
