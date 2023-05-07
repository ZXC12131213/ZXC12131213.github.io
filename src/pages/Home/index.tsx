import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { UP_GRADE } from '@/constants';
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
          quantity: 5,
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
        <div className="content-title">踩坑升级{UP_GRADE}修成正果</div>
        <div className="content-description">
          划此前端结界，闭环修炼，踩各种坑，历各种劫，励志菜鸟变大佬，飞升成&quot;神&quot;......
        </div>
        <Button>开战......</Button>
      </div>
    </div>
  );
};

export default HomePage;
