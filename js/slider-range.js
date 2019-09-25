
// examples data:
const min = 100,
	  max = 1000;

// текстові поля
const plusminus = document.querySelectorAll('#plusminus input');

// повзунки
const range = document.querySelectorAll('#range input');

// дефолтні значення у текстових полях
plusminus[0].setAttribute('value', min);

// дефолтні значення у текстових полях
plusminus[1].setAttribute('value', max);

// дефолтні значення у повзунків
range[0].setAttribute('min', min);
range[1].setAttribute('min', min);

range[0].setAttribute('max', max);
range[1].setAttribute('max', max);

range[0].setAttribute('value', min);
range[1].setAttribute('value', max);

// міняємо значення лівого текстового поля за допомогою лівого повзунка
range[0].addEventListener('input', e => plusminus[0].value = e.target.value);

// міняємо значення правого текстового поля за допомогою правого повзунка
range[1].addEventListener('input', e => plusminus[1].value = e.target.value);

// міняємо розташування лівого повзунка за допомогою лівого поля
plusminus[0].addEventListener('input', e => range[0].value = e.target.value);

// міняємо розташування правого повзунка за допомогою правого поля
plusminus[1].addEventListener('input', e => range[1].value = e.target.value);
