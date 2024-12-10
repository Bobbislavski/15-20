const phone = {
  brand: "Apple",
  model: "iPhone 14",
  year: 2022,
};

document.write(phone.brand + "<br>");
document.write(phone["model"] + "<br>");

delete phone.year;


document.write("brand" in phone ? "brand находится в обьекте телефон <br>" : "brand - нет <br>");
document.write("year" in phone ? "year - да <br>" : "year - не находится в обьекте телефон <br>");

for (let key in phone) {
  document.write(`${key}: ${phone[key]}<br>`);
}

class Phone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  call() {
    document.write(`${this.brand} ${this.model} звонит<br>`);
  }
}

const myPhone = new Phone("Apple", "iPhone 14", 2022);
document.write(JSON.stringify(myPhone) + "<br>");

myPhone.call();
document.write(myPhone.brand + "<br>");

class SecurePhone {
  #isLocked = true;

  unlock() {
    this.#isLocked = false;
    document.write("Телефон разблокирован<br>");
  }

  lock() {
    this.#isLocked = true;
    document.write("Телефон заблокирован<br>");
  }
}

const securePhone = new SecurePhone();
securePhone.unlock();

class Utility {
  static formatNumber(number) {
    return number.toLocaleString();
  }
}

document.write(Utility.formatNumber(375297522935) + "<br>");

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}

const user = new User("Artem");
document.write(user.name + "<br>");
user.name = "Robert";
document.write(user.name + "<br>");

class Contact {
  #phoneNumber = "+375297522935";

  setPhoneNumber(newNumber) {
    if (newNumber.length === 12) {
      this.#phoneNumber = newNumber;
    }
  }

  getPhoneNumber() {
    return this.#phoneNumber;
  }
}

const contact = new Contact();
contact.setPhoneNumber("+375292275395");
document.write(contact.getPhoneNumber() + "<br>");

class SmartDevice {
  constructor(brand) {
    this.brand = brand;
  }

  use() {
    document.write(`${this.brand} уже используется<br>`);
  }
}

class Smartphone extends SmartDevice {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  displayInfo() {
    document.write(`${this.brand} ${this.model}<br>`);
  }
}

const mySmartphone = new Smartphone("Apple", "iPhone 14");
mySmartphone.use();
mySmartphone.displayInfo();

class Notification {
  show() {
    document.write("Вам пришло уведомление<br>");
  }
}

class MessageNotification extends Notification {
  show() {
    document.write("Вам пришло сообщение<br>");
  }
}

class CallNotification extends Notification {
  show() {
    document.write("У вас есть пропущенный звонок<br>");
  }
}

const notifications = [new MessageNotification(), new CallNotification()];
notifications.forEach(notification => notification.show());
