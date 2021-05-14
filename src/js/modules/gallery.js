import {closeModal} from './modals';

const gallery = (parentSelector, width) => {
  const parent = document.querySelector(parentSelector);
  

  //Create modal
  const modal = document.createElement('div'),
    modalDialog = document.createElement('div'),
    modalImg = document.createElement('img');

  modal.classList.add('popup', 'popup_img');
  modal.style.display = 'none';
  modalDialog.classList.add('popup_dialog');
  modalImg.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-height: 90%;
    `;
  modalImg.setAttribute('alt', 'img-big');

  modalDialog.append(modalImg);
  modal.append(modalDialog);
  parent.append(modal);

  // Add event to parent
  parent.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.closest('a')) {
      const src = target.closest('a').getAttribute('href');
      modalImg.setAttribute('src', src);
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.style.paddingRight = width + 'px';
    }

    if (target && target === modal) {
      closeModal(modal);
    }
  });

};

export default gallery;