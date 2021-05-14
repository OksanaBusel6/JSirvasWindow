import checkNumInputs from './checkNumInputs';
import { closeModal } from './modals';

const forms = (state, width) => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    sucsses: 'Спасибо, скоро с Вами свяжутся!',
    failure: 'Что-то пошло не так'
  };

  const postData = async(url, data) => {
    document.querySelector('.status').innerHTML = message.loading;
    const res = await fetch(url, {
      method: 'POST',
      body: data
    });

    if (!res.ok) {
      throw new Error(`Server: ${url}, error: ${res.status}`);
    }

    return await res.text();
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.append(statusMessage);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        for(let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
        .then(data => {
          console.log(data);
          statusMessage.innerHTML = message.sucsses; 
        })
        .catch(() => {
          statusMessage.innerHTML = message.failure;
        })
        .finally(() => {
          inputs.forEach(input => {
            input.value = '';
          });
          setTimeout(() => {
            statusMessage.remove();
            closeModal(item.closest('div[data-modal]'));
          }, 3000);
        });
      
    });

  });


};

export default forms;