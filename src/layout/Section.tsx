import type { ReactNode } from 'react';

import { Logo } from '@/templates/Logo'; // Change the import statement to use the default export

type ISectionProps = {
  logo?: string;
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${
      props.yPadding ? props.yPadding : 'py-16'
    }`}
  >
    {(props.logo || props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.logo && <Logo xl imageUrl={props.logo} />}{' '}
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
