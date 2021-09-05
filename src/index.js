'use strict';
import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import smoothScrolling from './modules/smoothScrolling';
import tabs from './modules/tabs';
import slider from './modules/slider';
import team from './modules/team';
import banPrint from './modules/banPrint';
import calculator from './modules/calculator';
import sendForm from './modules/sendFrom';

// Таймер
countTimer('30 sept 2021');

// Меню ToDo document
toggleMenu();

// Всплывающее окно ToDo forEach buttonsGetPopup
togglePopup();

//Плавная прокрутка для всех якорных ссылок
smoothScrolling();

// Табы ToDo
tabs();

// Слайдер
slider();

// Блок с командой
team();

// Валидация форм ToDo blur
banPrint();

// Калькулятор
calculator();

//Send ajax forms
sendForm();
