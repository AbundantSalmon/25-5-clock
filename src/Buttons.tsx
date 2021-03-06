import React from 'react';
import './Buttons.css';

type ButtonProps = {
  id: string;
  label: JSX.Element;
  onClick(event: React.MouseEvent<HTMLElement>): void;
};

export const Button: React.VFC<ButtonProps> = ({ id, label, onClick }) => {
  return (
    <div id={id} className={'button'} onClick={onClick}>
      {label}
    </div>
  );
};
