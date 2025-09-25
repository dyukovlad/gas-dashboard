import React from 'react';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 shadow-md">
      {title && (
        <h3 className="text-sm text-gasGreen font-semibold mb-2">{title}</h3>
      )}
      {children}
    </div>
  );
};

export default Card;
