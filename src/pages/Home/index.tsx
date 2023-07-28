import React, { useState, useEffect, useRef } from 'react';
import { Slider } from 'antd';
import { history } from '@umijs/max';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { UP_GRADE } from '@/constants';
import { BIRED_OPTION } from './constants';
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
const description = `划此前端结界，闭环修炼，踩坑，历劫，励志菜鸟变大佬，飞升成"神"......`;
const HomePage: React.FC = () => {
  const [vanta, setVanta] = useState<any>(0);
  const [showdDescription, setShowdDescription] = useState<boolean>(false);
  const [showdBtn, setShowdBtn] = useState<boolean>(false);
  const [birdSize, setBirdSize] = useState<number>(4);
  const vantaRef = useRef(null);

  let descriptionTimer: NodeJS.Timeout;
  let btnTimer: NodeJS.Timeout;

  const uninstall = () => {
    clearTimeout(descriptionTimer);
    clearTimeout(btnTimer);
  };

  useEffect(() => {
    descriptionTimer = setTimeout(() => {
      setShowdDescription(true);
    }, 2200);

    btnTimer = setTimeout(() => {
      setShowdBtn(true);
    }, 7000);

    return uninstall;
  }, []);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        BIRDS({
          ...BIRED_OPTION,
          el: vantaRef.current,
        }),
      );
    }
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta, birdSize]);

  useEffect(() => {
    setVanta(
      BIRDS({
        ...BIRED_OPTION,
        el: vantaRef.current,
        birdSize,
      }),
    );
  }, [birdSize]);

  const dealDelayTime = (index: number, type: number) => {
    const num = type === 0 ? 4 - index : index + 1;
    return `${num * 0.1}s`;
  };

  return (
    <div className="home-wrap" ref={vantaRef}>
      <div className="home-mask">
        <div className="home">
          <div className="home-bird">
            <div className="home-bird-text">size of bird ：</div>
            <Slider
              className="home-bird-slider"
              defaultValue={4}
              max={4}
              min={0.5}
              step={0.1}
              onChange={(value: number) => {
                setBirdSize(value);
              }}
            />
          </div>
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
          {showdBtn && (
            <div
              className="home-btn btn-shine"
              onClick={() => {
                history.push('/snake');
              }}
            >
              开战
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
