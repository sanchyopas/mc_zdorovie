if (typeof lightbox !== 'undefined' && typeof lightbox.option === 'function') {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
}

if (document.querySelector('.swiper')) {
  new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}


const menu = document.querySelector('.menu-items');
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownBtn = document.querySelector('.dropdown-btn');

const adjustMenu = () => {
  const menuItems = Array.from(menu.children);
  const visibleItems = menuItems.filter(item => !item.classList.contains('dropdown'));
  const moreWidth = dropdownBtn.parentElement.offsetWidth;
  let totalWidth = moreWidth; // Учитываем ширину кнопки "Еще"

  // Убедимся, что кнопка "Еще" скрыта перед расчетами
  dropdown.classList.add('hidden');

  visibleItems.forEach(item => {
    totalWidth += item.offsetWidth;
  });

  // Если меню переполняется, переносим пункты в подменю
  if (totalWidth > menu.offsetWidth) {
    dropdown.classList.remove('hidden');

    while (totalWidth > menu.offsetWidth && (visibleItems.length - 100) > 0) {
      const lastItem = visibleItems.pop();
      dropdownContent.insertBefore(lastItem, dropdownContent.firstChild);
      totalWidth -= lastItem.offsetWidth;
    }
  }

  // Проверяем, нужно ли вернуть элементы из подменю обратно
  while (totalWidth + dropdownContent.firstChild?.offsetWidth <= menu.offsetWidth && dropdownContent.children.length > 0) {
    const firstHiddenItem = dropdownContent.firstChild;
    menu.insertBefore(firstHiddenItem, dropdown);
    totalWidth += firstHiddenItem.offsetWidth;

    if (dropdownContent.children.length === 0) {
      dropdown.classList.add('hidden');
    }
  }
}

window.addEventListener('resize', adjustMenu);
window.addEventListener('load', adjustMenu);

const playVideo = (e) => {
  const parent = e.currentTarget;
  let video = parent.querySelector('video');
  video.play();
  if (!video.paused) {
    parent.querySelector('.video-doc__poster').classList.add('no-poster');
  }
}

const pauseVideo = (e) => {
  const parent = e.currentTarget;
  let video = parent.querySelector('video');
  video.pause();
}

const videoCard = document.querySelectorAll('.video-doc__card');
if (videoCard) {
  videoCard.forEach(card => card.addEventListener('mouseover', playVideo))
  videoCard.forEach(card => card.addEventListener('mouseout', pauseVideo))
}




document.addEventListener('DOMContentLoaded', function () {
  let contentElement = document.getElementById('text');

  if (contentElement) {
    let text = contentElement.textContent || contentElement.innerText;

    let words = text.trim().split(/\s+/).length;

    let wordsPerMinute = 250

    let readingTime = Math.ceil(words / wordsPerMinute);

    document.getElementById('time-count').innerText = readingTime
  }
}, false);


const openeningMenu = (event) => document.querySelector('.nav').classList.add('_active');
if (document.getElementById('burger')) {
  document.getElementById('burger').addEventListener('click', openeningMenu);
}

const closeMenu = (event) => document.querySelector('.nav').classList.remove('_active');
if (document.getElementById('close-menu')) {
  document.getElementById('close-menu').addEventListener('click', closeMenu);
}



const highAndLow = (numbers) => {
  console.log(Array.from(numbers, Number));
  console.log(Array.from(numbers, Number).map(a => a + 1));
}
highAndLow("1 2 3 4 5")

// Input: "1 2 3 4 5"   =>  Output: "5 1"
// Input: "1 2 -3 4 5"  =>  Output: "5 -3"
// Input: "1 9 3 4 -5"  =>  Output: "9 -5"

function removeClass(element, className) {
  element.forEach((btn) => btn.classList.remove(className))
}
const tabBody = document.querySelectorAll('.tab__body');
const tabTriggerBtn = document.querySelectorAll('.tab__trigger-btn');
if (tabTriggerBtn) {
  tabTriggerBtn.forEach((btn) => btn.addEventListener('click', function (e) {
    removeClass(tabTriggerBtn, '_active');
    e.currentTarget.classList.add('_active');


    removeClass(tabBody, '_active');
    const tabBodyElem = document.getElementById(e.currentTarget.dataset.id);
    if (tabBodyElem) {
      tabBodyElem.classList.add('_active');
    }
  }))
}






