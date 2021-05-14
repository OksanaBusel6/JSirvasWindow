const timer = (id, dedline) => {

  const getTimeRemaining = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = (t / (1000 * 60 * 60 * 24)).toFixed(0),
          hours = ((t / (1000 * 60 * 60)) % 24).toFixed(0),
          minutes = ((t / (1000 * 60)) % 60).toFixed(0),
          seconds = ((t / 1000) % 60).toFixed(0);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds
    };
  };

  const addZero = (num) => {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
          
    updateClock();
    function updateClock() {

      const t = getTimeRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, dedline);
};

export default timer;