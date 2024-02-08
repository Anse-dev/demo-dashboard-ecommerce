import clsx from 'clsx';
import React from 'react';

const Header = ({
  user,
}: {
  user: {
    name: string;
    id: string;
    password: string;
    role: string;
  };
}) => {
  return (
    <div>
      <button
        className={clsx('border-t-neutral-400', {
          'btn-primary': user.role === 'admin',
          'btn-secondary': user.role === 'customer',
          'btn-seco': user.role === 'anomy',
        })}
      >
        delete
      </button>
    </div>
  );
};

export default Header;
