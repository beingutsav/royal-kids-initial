import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  imageUrl: string; // New prop for the image URL
};

const Logo = (props: ILogoProps) => {
  const { xl, imageUrl } = props; // Destructure props
  const size = xl ? '132px' : '96px';
  const fontStyle = xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <div className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        className="mr-1"
        src={imageUrl} // Use the imageUrl prop dynamically
        alt={AppConfig.site_name}
        width={size}
        height={size}
      />
      {AppConfig.site_name}
    </div>
  );
};

export { Logo };
