import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  color: 'orange' | 'purple' | 'red' | 'green';
  variant: 'solid' | 'outline';
  onClick?: () => void;
  icon?: React.ReactNode;
  children: React.ReactNode;
  margin?: number;
}

export const Button = ({ color, variant, onClick, icon, children, margin }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex self-center ${margin ? 'mt-' + margin : ''} ${styles.btn} ${styles[color]} ${styles[variant]}`}
    >
      {children}
      {icon && <span className="ml-5">{icon}</span>}
    </button>
  );
};
