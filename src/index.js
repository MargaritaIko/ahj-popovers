import './css/style.css';

import Popover from './js/app';

const popUpMsg = new Popover(
  'Secret message just for you',
  'This message will disappear in 5 sec...',
);
popUpMsg.onClick(2500);
