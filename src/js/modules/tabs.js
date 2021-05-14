const tabs = (headerSelector, tabSelector, contentSelector, activeClass, activeSelector = tabSelector, 
       display = 'block') => {

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector),
          activeTab = document.querySelectorAll(activeSelector);

    function hideTabContent() {
      content.forEach(item => {
        item.style.display = 'none';
      });

      activeTab.forEach(item => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      activeTab[i].classList.add(activeClass);
      content[i].style.display = display;
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
      const target = e.target;

      if (target &&
        (target.classList.contains(tabSelector.replace(/\./, '')) ||
          target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {

        e.preventDefault();
        tab.forEach((btn, i) => {
          if (target === btn || target.parentNode === btn) {
            hideTabContent();
            showTabContent(i);
          }
        });
        
      }
    });

};

export default tabs;
