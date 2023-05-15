import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { history } from '@umijs/max';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { UP_GRADE } from '@/constants';
import type { TitleType } from './types';
import './style.scss';

const titleData: TitleType[] = [
  {
    id: 'first',
    value: '踩坑升级',
  },
  {
    id: 'icon',
    value: UP_GRADE,
  },
  {
    id: 'last',
    value: '修成正果',
  },
];
const description = `划此前端结界，闭环修炼，踩各种坑，历各种劫，励志菜鸟变大佬，飞升成"神"......`;
const HomePage: React.FC = () => {
  const [vanta, setVanta] = useState<any>(0);
  const [showdDescription, setShowdDescription] = useState<boolean>(false);
  const vantaRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setShowdDescription(true);
    }, 2200);
  }, []);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        BIRDS({
          el: vantaRef.current,
          birdSize: 4,
          backgroundColor: 'black',
          quantity: 5,
          height: '100px',
          width: '100px',
        }),
      );
    }
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  const dealDelayTime = (index: number, type: number) => {
    const num = type === 0 ? 4 - index : index + 1;
    return `${num * 0.1}s`;
  };

  return (
    <div className="home-wrap" ref={vantaRef}>
      <div className="home-mask">
        <div className="home">
          <div className="home-title ">
            {titleData.map((item: TitleType, indexTitle: number) => {
              if (item.id === 'icon') {
                return item.value;
              } else {
                return (
                  <div key={indexTitle}>
                    {item.value
                      .split('')
                      .map((letter: string, indexItem: number) => (
                        <span
                          className="home-title-letter light"
                          key={indexItem}
                          style={{
                            animationDelay: dealDelayTime(
                              indexItem,
                              indexTitle,
                            ),
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                  </div>
                );
              }
            })}
          </div>
          {showdDescription && (
            <div className="home-description light">
              {description
                .split('')
                .map((letter: string, indexDescription: number) => (
                  <span
                    className="home-description-letter"
                    key={indexDescription}
                    style={{
                      animationDelay: `${indexDescription * 0.1}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
            </div>
          )}
          <div
            className="home-go"
            onClick={() => {
              history.push('/snake');
            }}
          >
            开战
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
