import "./slider";

import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import gallery from './modules/gallery';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let modalState = {};
  let deadline = '2021-06-01';
  const width = window.innerWidth - document.body.scrollWidth;

  changeModalState(modalState);
  modals(modalState, width);
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active', '.glazing_block a');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div >div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', '.balcon_icons_img',
        'inline-block');
  forms(modalState, width);
  timer('#timer', deadline);
  gallery('.works > .container > .row', width);
});