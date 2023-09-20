// каталог
const buttonCatalog = document.querySelector('.nav-menu__link-catalog');
const catalogMenu = document.querySelector('.catalog-menu');

buttonCatalog.addEventListener('click', function () {
  if (buttonCatalog.classList.contains('nav-menu__link--active')) {
    catalogMenu.classList.remove('catalog-menu-opened');
    buttonCatalog.classList.remove('nav-menu__link--active');
  } else {
    catalogMenu.classList.add('catalog-menu-opened');
    buttonCatalog.classList.add('nav-menu__link--active');
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    catalogMenu.classList.remove('catalog-menu-opened');
    buttonCatalog.classList.remove('nav-menu__link--active');
  }
})

document.addEventListener('mouseup', (e) => {
  if (!e.target.classList.contains('catalog-menu-opened') && !e.target.classList.contains('nav-menu__link--active')) {
    catalogMenu.classList.remove('catalog-menu-opened');
    buttonCatalog.classList.remove('nav-menu__link--active');
  }
});

// поповеры поиска, корзины и авторизации
let list = Array.from(document.querySelectorAll('.nav-bar__item'));

list.shift(0);

function update() {
  list.forEach((e) => {
    e.firstElementChild.classList.remove('nav-bar__link--active');
    e.lastElementChild.classList.remove('popover-active');
  })
}

for (let item in list) {
  let itemChild = list[item].lastElementChild;
  let btnChild = list[item].firstElementChild;

  btnChild.addEventListener('click', function () {
    if (btnChild.classList.contains('nav-bar__link--active')) {
      itemChild.classList.remove('popover-active');
      btnChild.classList.remove('nav-bar__link--active');
    } else {
      update();
      itemChild.classList.add('popover-active');
      btnChild.classList.add('nav-bar__link--active');
    }
  })

  document.addEventListener('mouseup', (e) => {
    const block = e.composedPath().includes(itemChild);
    const btn = e.composedPath().includes(btnChild);
    if (!block && !btn) {
      itemChild.classList.remove('popover-active');
      btnChild.classList.remove('nav-bar__link--active');
    }
  })
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    update()
  }
})

// слайдер
const slider = document.querySelector('.slider');
const page = document.querySelector('.page');
const prevButton = document.querySelectorAll('.slider-prev');
const nextButton = document.querySelectorAll('.slider-next');
const slides = Array.from(slider.querySelectorAll('.slide'));
const pagination = Array.from(document.querySelectorAll('.slider-pagination__item'));
const slideCount = slides.length;
let slideIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slide-active');
      page.style.backgroundColor = document.querySelector('.slide-active').dataset.colors;

      for (let i = 0; i < pagination.length; i++) {
        let paginationBtn = pagination[i].firstElementChild;
        if (i == slideIndex) {
          paginationBtn.classList.add('slider-pagination-current');
        } else {
          paginationBtn.classList.remove('slider-pagination-current');
        }
      }

    } else {
      slide.classList.remove('slide-active');
    }
  });
}

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// for (const paginationBtn in pagination) {
//   pagination[paginationBtn].firstElementChild.addEventListener('click', () => {
//     if (slideIndex == paginationBtn) {
//       updateSlider()
//     }
//   })

// }


for (const prevBtn of prevButton) {
  prevBtn.addEventListener('click', showPreviousSlide);
}

for (const nextBtn of nextButton) {
  nextBtn.addEventListener('click', showNextSlide);
}


// модалка
const contactsBtn = document.querySelector('.contacts-text__btn');
const modalCloseButton = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');


contactsBtn.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-close');
})

modalCloseButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-close');
})

modalContainer.addEventListener('click', (e) => {
  const click = e.composedPath().includes(modal);
  if (!click) {
    modalContainer.classList.add('modal-container-close');
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modalContainer.classList.add('modal-container-close');
  }
});
