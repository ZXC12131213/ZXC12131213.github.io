import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import './style.scss';

const HomePage: React.FC = () => {
  const [vanta, setVanta] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vanta) {
      setVanta(
        BIRDS({
          el: vantaRef.current,
          birdSize: 2,
          backgroundColor: 'black',
        }),
      );
    }
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);
  return (
    <div className="home-wrap" ref={vantaRef}>
      <div className="content">
        <div className="content-title">打怪升级小驿站</div>
        <div className="content-user">@超早睡超晚起</div>
      </div>
    </div>
  );
};

export default HomePage;
