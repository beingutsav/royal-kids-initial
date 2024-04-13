import className from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';

type IButtonProps = {
  xl?: boolean;
  formId?: string; // Remove the requirement for formId
  linkTo?: string; // Add a new prop for the link
  children: string;
};

const Button: React.FC<IButtonProps> = (props) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  const router = useRouter();

  const handleClick = () => {
    // Check if a linkTo prop is provided
    if (props.linkTo) {
      // If yes, navigate to the provided link
      router.push(props.linkTo);
    } else if (props.formId) {
      // If not, check if formId prop is provided
      const formSection = document.getElementById(props.formId);
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={btnClass} onClick={handleClick}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-black bg-yellow-300;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
