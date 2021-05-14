import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  let windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeight = document.querySelectorAll('#height'),
    windowTipe = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const saveValueState = (elements, event, prop) => {
    elements.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elements.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
          default:
            break;
        }

        console.log(state);
      });
    });
  };


  saveValueState(windowForm, 'click', 'form');
  saveValueState(windowWidth, 'input', 'width');
  saveValueState(windowHeight, 'input', 'height');
  saveValueState(windowTipe, 'change', 'type');
  saveValueState(windowProfile, 'change', 'profile');

};

export default changeModalState;