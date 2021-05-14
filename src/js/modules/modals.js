import hasValid from './hasValid';

const modals = (state, width) => {
  function bindModal(triggerSelector, modalSelector, closeSelector = '.popup_close',
    closeClickOverlay = true) {

    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeSelector),
      windows = document.querySelectorAll('div[data-modal]');

    let nextModal;

    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        nextModal = hasValid(triggerSelector, state);

        if (nextModal) {
          windows.forEach(item => {
            item.style.display = 'none';
          });

          modal.style.display = 'block';
          document.body.classList.add('modal-open');
          document.body.style.paddingRight = width + 'px';
        }

      });
    });

    close.addEventListener('click', () => closeModal(modal, nextModal));

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeModal(modal, nextModal);
      }
    });
  }


  function showModalByTime(modalSelector, time) {
    setTimeout(() => {
      document.querySelector(modalSelector).style.display = 'block';
      document.body.classList.add('modal-open');
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer');
  bindModal('.phone_link', '.popup');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  //showModalByTime('.popup', 60000);
};

function closeModal(el, next = true) {
  if (next) {
    el.style.display = 'none';
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '0';
  }
}

export default modals;
export { closeModal };