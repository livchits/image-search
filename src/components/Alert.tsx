import * as React from 'react';

interface AlertProps {
  type?: 'error';
  children: React.ReactNode;
}

function Alert({ type, children }: AlertProps) {
  const bgColor = type === 'error' ? 'bg-red-900' : 'bg-gray-700';

  return (
    <p
      className={`px-12 py-12 mt-12 font-mono text-xl leading-relaxed text-center text-gray-800 rounded-lg shadow-sm max-w-max bg-opacity-10 mx-auto ${bgColor}`}
    >
      {children}
    </p>
  );
}

export default Alert;
