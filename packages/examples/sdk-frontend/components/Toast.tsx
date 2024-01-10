import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ToastProps {
  message: string;
}

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 1.5s ease-in-out;
  z-index: 1000;
`;

const Toast: React.FC<ToastProps> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <ToastContainer visible={visible}>{message}</ToastContainer>;
};

export default Toast;
