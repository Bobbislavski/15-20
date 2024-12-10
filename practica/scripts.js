document.addEventListener('DOMContentLoaded', function() {
    let startTime = Date.now();
    let timeSpentElement = document.getElementById('timeSpent');

    function updateTimeSpent() {
        let currentTime = Date.now();
        let timeSpent = Math.floor((currentTime - startTime) / 1000); 
        timeSpentElement.textContent = `время, проведенное на сайте: ${timeSpent} секунд`;
    }
    setInterval(updateTimeSpent, 1000);
});

document.addEventListener('DOMContentLoaded', function() {

    function showAdPopup() {
        const popup = document.querySelector('.ad-popup');
        const overlay = document.querySelector('.ad-popup-overlay');
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closeAdPopup() {
        const popup = document.querySelector('.ad-popup');
        const overlay = document.querySelector('.ad-popup-overlay');
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeAdPopup);

    showAdPopup();
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

var amountScrolled = 200;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
     $('a.back-to-top').fadeIn('slow');
    } else {
     $('a.back-to-top').fadeOut('slow');
    }
   });
   
   $('a.back-to-top').click(function() {
    $('html, body').animate({
     scrollTop: 0
    }, 700);
    return false;
   });

//ИДЗ (3-4 часть(она же 18-20 ЛР))
   document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('custom-form');
    const firstNameInput = form.querySelector('input[name="first-name"]');
    const lastNameInput = form.querySelector('input[name="last-name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const subjectInput = form.querySelector('input[name="subject"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const submitButton = document.getElementById('submit-button');
    const clearCookiesButton = document.getElementById('clear-cookies');
    const clearLocalStorageButton = document.getElementById('clear-localstorage');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (checkFormValidity()) {
            const formData = {
                firstName: firstNameInput.value.trim(),
                lastName: lastNameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                subject: subjectInput.value.trim(),
                message: messageInput.value.trim(),
            };

            alert(JSON.stringify(formData, null, 2));
            localStorage.setItem('formData', JSON.stringify(formData));
            setCookie('formData', JSON.stringify(formData), 7);
        }
    });

    function validateField(field, regex) {
        const value = field.value.trim();
        return regex.test(value);
    }

    function checkFormValidity() {
        const isFirstNameValid = validateField(firstNameInput, /^[А-Яа-яA-Za-z]+$/);
        const isLastNameValid = validateField(lastNameInput, /^[А-Яа-яA-Za-z]+$/);
        const isEmailValid = validateField(emailInput, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        const isPhoneValid = validateField(phoneInput, /^\+?[0-9\s-]+$/);

        let errorMessage = [];

        if (!isFirstNameValid) {
            errorMessage.push("Имя введено неправильно. Используйте буквы кириллицы или латиницы.");
        }
        if (!isLastNameValid) {
            errorMessage.push("Фамилия введена неправильно. Используйте буквы кириллицы или латиницы.");
        }
        if (!isEmailValid) {
            errorMessage.push("Email введен неправильно. Пример: example@example.com");
        }
        if (!isPhoneValid) {
            errorMessage.push("Телефон введен неправильно. Используйте формат: +375-29-1234567");
        }

        if (errorMessage.length > 0) {
            alert(errorMessage.join("\n"));
            return false;
        }

        return true;
    }

    window.setCookie = function (name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    clearCookiesButton.addEventListener('click', function () {
        const cookies = document.cookie.split(";");
        for (let cookie of cookies) {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
        alert("Все cookies удалены");
    });

    clearLocalStorageButton.addEventListener('click', function () {
        localStorage.clear();
        alert("LocalStorage очищен");
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".flex-container").classList.toggle("open");
    });
});
document.addEventListener('DOMContentLoaded', function() {


    const primaryButton = document.querySelector('.primary-button');
    primaryButton.addEventListener('mouseover', function() {
        primaryButton.style.backgroundColor = '#534fd0';
    });
    primaryButton.addEventListener('mouseout', function() {
        primaryButton.style.backgroundColor = ''; 
    });

    
    var amountScrolled = 200;
    const backToTop = document.querySelector('a.back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > amountScrolled) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  //таймер(7)
    let startTime = Date.now();
    let timeSpentElement = document.getElementById('timeSpent');

    function updateTimeSpent() {
        let currentTime = Date.now();
        let timeSpent = Math.floor((currentTime - startTime) / 1000); 
        timeSpentElement.textContent = `Time spent: ${timeSpent} seconds`;
    }
    setInterval(updateTimeSpent, 1000);
});
//мышь(1)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('timeSpent').addEventListener('click', function() {
        alert('Кнопка была нажата!');
    });
});
//клава(2)
document.addEventListener('keydown', function(event) {
    console.log('Нажата клавиша: ' + event.key);
});
//указатель(4)
document.getElementById('timeSpent').addEventListener('burger', function(event) {
    console.log('Pointer ID: ' + event.pointerId + ' был нажат.');
});
//прокрутка(5)
window.addEventListener('scroll', function() {
    console.log('Текущая позиция прокрутки: ' + window.scrollY);
});
//сенсор(6)
document.getElementById('burger').addEventListener('touchstart', function(event) {
    console.log('Касание экрана: ' + event.touches.length);
});




   


   

