document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('custom-form');
  const firstNameInput = form.querySelector('input[name="first-name"]');
  const lastNameInput = form.querySelector('input[name="last-name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const subjectInput = form.querySelector('input[name="subject"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const subscribeInput = form.querySelector('input[name="subscribe"]');
  const contactMethodInputs = form.querySelectorAll('input[name="contact-method"]');
  const experienceSelect = form.querySelector('select[name="experience-level"]');
  const submitButton = document.getElementById('submit-button');

  submitButton.addEventListener('click', function (event) {
      event.preventDefault();

      if (checkFormValidity()) {
          const selectedContactMethod = [...contactMethodInputs].find(input => input.checked).value;
          const formData = {
              firstName: firstNameInput.value.trim(),
              lastName: lastNameInput.value.trim(),
              email: emailInput.value.trim(),
              phone: phoneInput.value.trim(),
              subject: subjectInput.value.trim(),
              message: messageInput.value.trim(),
              subscribe: subscribeInput.checked,
              contactMethod: selectedContactMethod,
              experienceLevel: experienceSelect.value
          };

          alert(JSON.stringify(formData, null, 2));
          localStorage.setItem('formData', JSON.stringify(formData));
          setCookie('formData', JSON.stringify(formData), 9);
      }
  });

  function validateField(field, regex) {
      const value = field.value.trim();
      return regex.test(value);
  }

  function checkFormValidity() {
      const isFirstNameValid = validateField(firstNameInput, /^[А-Яа-я]+$/);
      const isLastNameValid = validateField(lastNameInput, /^[А-Яа-я]+$/);
      const isEmailValid = validateField(emailInput, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
      const isPhoneValid = validateField(phoneInput, /^\+?[0-9\s-]+$/);
      
      let errorMessage = [];

      if (!isFirstNameValid) {
          errorMessage.push("Имя введено неправильно. Используйте только буквы кириллицы.");
      }
      if (!isLastNameValid) {
          errorMessage.push("Фамилия введена неправильно. Используйте только буквы кириллицы.");
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

  window.delLoc = function () {
      localStorage.clear();
      alert(localStorage.getItem('formData') === null ? 'Данные удалены' : 'Данные существуют');
  };

  window.setCookie = function (name, value, days) {
      let expires = "";
      if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  window.clearCookies = function () {
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
      alert('Все cookies удалены');
  };
});
