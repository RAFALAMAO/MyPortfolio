import React, { useEffect, useState } from 'react';
import { HiOutlineArrowCircleUp } from 'react-icons/hi';
import { Button } from './ScrollButtonStyles';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <Button>
      <HiOutlineArrowCircleUp
        onClick={scrollToTop}
        style={{
          display: visible ? 'inline' : 'none',
          zIndex: 1
        }}
      />
    </Button>
  );
};

export default ScrollButton;
