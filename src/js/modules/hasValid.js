const hasValid = (selector, state) => {


  const calc = '.popup_calc_button',
        profile = '.popup_calc_profile_button';

  if (selector !== calc && selector !== profile) {
    return true;
  } else {
    let res;
    switch (selector) {
      case '.popup_calc_button':
        res = checkValid('.popup_calc_button');
        return res;
      case '.popup_calc_profile_button':
        res = checkValid('.popup_calc_profile_button');
        return res;
    }
  }

  function checkValid(selector) {
    const mes = document.querySelector('.message_err'),
          btn = document.querySelector(selector);

    const messageError = {
      input: 'Введите пожалуйста данные',
      chose: 'Сделайте пожалуйста выбор'
    };

    let valid;

    if (selector === '.popup_calc_button') {
      valid = state.form && state.width && state.height;
    } else {
      valid = state.type && state.profile;
    }

    if (!valid) {

      if (!mes) {
        const message = document.createElement('div');
        message.classList.add('status', 'message_err');
        message.style.marginTop = '10px';
        btn.after(message);
      }

      const newMes = document.querySelector('.message_err');
      if (!state.width || !state.height) {
        newMes.textContent = messageError.input;
      } else {
        newMes.textContent = messageError.chose;
      }
      return false;

    } else {
      if (mes) {
        mes.remove();
      }
      return true;
    }
  }
};

export default hasValid;