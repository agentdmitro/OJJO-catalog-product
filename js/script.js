lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    
  })


// Вызов модального окна
$('.button').click( function() {
  $('.overlay').fadeIn();
body.classList.toggle('lock');
});

$('.register__link').click( function() {
  $('.register__overlay').fadeIn();
body.classList.toggle('lock');
});

$('.login__link').click( function() {
  $('.overlay').fadeIn();
body.classList.toggle('lock');
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
  $('.overlay').fadeOut();
body.classList.toggle('lock');
});

$('.close-popup').click( function() {
  $('.register__overlay').fadeOut();
body.classList.toggle('lock');
});
window.onscroll = function(){
  return false;
}

// Закрытие окна на поле
$(document).mouseup( function (e) { 
  var popup = $('.popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0){
      $('.overlay').fadeOut();
  body.classList.toggle('lock');
  }
});

$(document).mouseup( function (e) { 
  var popup = $('.register__popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0){
      $('.register__overlay').fadeOut();
  body.classList.toggle('lock');
  }
});


let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
menu_button.classList.toggle('active');
menu_itself.classList.toggle('active');
body.classList.toggle('lock');
};

menu_list.onclick = function() {
menu_button.classList.toggle('active');
menu_itself.classList.toggle('active');
body.classList.toggle('lock');
};


/*с подключением библиотеки jquery:

$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
  $('.header__list').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});*/






/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};;


function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
};

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns2 = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2');
      }
    }
  }
};;

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show3");
};

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns3 = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns3.length; i++) {
      var openDropdown3 = dropdowns3[i];
      if (openDropdown3.classList.contains('show3')) {
        openDropdown3.classList.remove('show3');
      }
    }
  }
};;


function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show4");
};

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn4')) {
    var dropdowns4 = document.getElementsByClassName("dropdown-content4");
    var i;
    for (i = 0; i < dropdowns4.length; i++) {
      var openDropdown4 = dropdowns4[i];
      if (openDropdown4.classList.contains('show4')) {
        openDropdown4.classList.remove('show4');
      }
    }
  }
};;

function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show5");
};

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn5')) {
    var dropdowns5 = document.getElementsByClassName("dropdown-content5");
    var i;
    for (i = 0; i < dropdowns5.length; i++) {
      var openDropdown5 = dropdowns5[i];
      if (openDropdown5.classList.contains('show5')) {
        openDropdown5.classList.remove('show5');
      }
    }
  }
};;



function myFunction6() {
  document.getElementById("myDropdown6").classList.toggle("show6");
};

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn6')) {
    var dropdowns6 = document.getElementsByClassName("dropdown-content6");
    var i;
    for (i = 0; i < dropdowns6.length; i++) {
      var openDropdown6 = dropdowns6[i];
      if (openDropdown6.classList.contains('show6')) {
        openDropdown6.classList.remove('show6');
      }
    }
  }
};;



var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    550: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});