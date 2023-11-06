import { IMAGE } from '@/constants';
import type { TitleType } from './types';

const BIRED_OPTION = {
  el: '',
  birdSize: 4,
  backgroundColor: 'FFFFFF',
  quantity: 5,
  height: '100px',
  width: '100px',
};

const TITLE_DATA: TitleType[] = [
  {
    id: 'first',
    value: '踩坑升级',
  },
  {
    id: 'icon',
    value: IMAGE.UP_GRADE,
  },
  {
    id: 'last',
    value: '修成正果',
  },
];

export { BIRED_OPTION, TITLE_DATA };
