import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className='core-container'>
      {children}
    </div>
  );
};

export default Container;