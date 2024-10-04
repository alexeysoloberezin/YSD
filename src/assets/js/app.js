const fon = document.querySelector('.fon');
const btns = document.querySelectorAll('.open-header-catalog');
const headerCatalog = document.querySelector('.header-catalog');
const mobileNav = document.querySelector('.mobile-nav');
const btnFormPopup = document.querySelectorAll('.open-formPopup');
const formPopup = document.querySelector('.formPopup');
const searchBox = document.querySelector('.searchBox');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnOpenModalThanks = document.querySelectorAll('.open-thanks');
const modalThanks = document.querySelector('.modalThanks')

btnOpenModalThanks.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    modalThanks.classList.add('active')
    fon.classList.add('active')
  })
})

btnCloseModal.forEach(el => el.addEventListener('click', () => {
  fon.classList.remove('active');
  fon.classList.remove('all');
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.classList.remove('active');
  })
}))

function headerCatalogInit() {
  btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      headerCatalog.classList.toggle('active');
      fon.classList.toggle('active');
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  });
}

fon.addEventListener('click', function () {
  headerCatalog.classList.remove('active');
  fon.classList.remove('active');
  document.querySelectorAll('.modal').forEach(el => {
    el.classList.remove('active')
  })
  searchBox.classList.remove('active');
  fon.classList.remove('all');
  mobileNav.classList.remove('active');
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
});

function accordion(){
  const accordions = document.querySelectorAll('.accord');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
      this.classList.toggle('active');

      const accordBlock = this.nextElementSibling;
      if (accordBlock && accordBlock.classList.contains('accord-block')) {
        accordBlock.classList.toggle('active');
      }
    });
  });
}

function goUp(){
  const goUpButton = document.querySelector('.goUp');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 400) {
      goUpButton.classList.add('active');
    } else {
      goUpButton.classList.remove('active');
    }
  });

  goUpButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function modals(){
  btnFormPopup.forEach((btn) => {
    btn.addEventListener('click', function () {
      fon.classList.add('active')
      fon.classList.add('all')
      formPopup.classList.add('active');
    })
  })
}

function select(){
  const customSelect = document.querySelector('.custom-select');
  const trigger = document.querySelector('.custom-select__trigger');
  const options = document.querySelectorAll('.custom-option');
  const hiddenInput = document.getElementById('select1'); // Скрытый input

  if(!customSelect){
    return false;
  }

  // Toggle dropdown
  trigger.addEventListener('click', function () {
    customSelect.classList.toggle('open');
  });

  // Close dropdown when clicked outside
  // window.addEventListener('click', function (e) {
  //   if (!customSelect.contains(e.target)) {
  //     customSelect.classList.remove('open');
  //   }
  // });

  // Handle option selection
  options.forEach(option => {
    option.addEventListener('click', function () {
      const value = this.getAttribute('data-value');
      const label = this.innerText;

      // Update trigger text
      trigger.querySelector('span').innerText = label;

      // Update hidden input value
      hiddenInput.value = value;

      // Remove 'selected' class from all options
      options.forEach(opt => opt.classList.remove('selected'));

      // Mark the clicked option as selected
      this.classList.add('selected');

      // Close the dropdown
      customSelect.classList.remove('open');
    });
  });
  // input debug
  // setInterval(() => {
  //   console.log(hiddenInput.value);
  // }, 1000)
}

function pageTabs(){
  const els = document.querySelectorAll('.tabs-item')
  const tabBoxes = document.querySelectorAll('.tab-box')

  if(els.length === 0 || !els){
    return
  }

  els.forEach(el => {
    el.addEventListener('click', function () {
      const value = this.getAttribute('data-key');
      const find = document.getElementById(value)

      els.forEach(e => e.classList.remove('active'));
      tabBoxes.forEach(box => box.classList.remove('active'));
      this.classList.add('active');
      if(find){
        find.classList.add('active')
      }
    })
  })
}

function cookie(){
  const cookieEl = document.querySelector('.cookie')
  const btnClose = document.querySelector('.close-cookie')

  if(!config || !config.showCookie){
    return
  }

  cookieEl.classList.add('show');

  btnClose.addEventListener('click', function(){
    cookieEl.classList.remove('show')
    setTimeout(() => {
      cookieEl.remove()
    }, 600)
  })
}

function search(){
  const searchBtns = document.querySelectorAll('.open-search')
  const closeSearch = document.querySelectorAll('.close-search')

  searchBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      fon.classList.add('active')
      searchBox.classList.add('active');
    })
  })

  closeSearch.forEach((btn) => {
    btn.addEventListener('click', function () {
      fon.classList.remove('active')
      searchBox.classList.remove('active');
    })
  })
}


document.querySelectorAll('.submitFormPopup').forEach(el => {
  el.addEventListener('click', function(e) {
    // const form = e.target;
    // const formData = new FormData(form);

    // debugger
    formPopup.classList.remove('active')
    modalThanks.classList.add('active')
    // fetch('/submit-form', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       document.getElementById('contactForm').classList.add('hidden');
    //       document.getElementById('success-block').classList.remove('hidden');
    //     } else {
    //       alert('Ошибка при отправке формы. Пожалуйста, попробуйте снова.');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Ошибка:', error);
    //   });
  });
})

headerCatalogInit();
cookie()
search()
select()
pageTabs()
modals();
goUp()
accordion()
