Menu.langs = ['EN', 'RU']
let now_lang = 0;

Menu.add('Main', [
    MenuBuilder.h1({
        'all': "Pong"
    }),
    MenuBuilder.button('play', {
        'EN': 'Play',
        'RU': 'Играть'
        }, () => {
            Menu.hide();
            const canvas = document.getElementById("canvas");
            canvas.hidden = true;
            Crafty.scene('Game');
        }),

    MenuBuilder.button('settings', {
        'EN': 'Settings',
        'RU': 'Настройки'
        }, () => {
            Menu.load('Settings');
        })
])
Menu.add('Settings', [
    MenuBuilder.h1({
        'EN': "Settings",
        'RU': "Настройки"
    }),
    MenuBuilder.button('change_lang', {
        'EN': 'Change language: EN',
        'RU': 'Изменить язык: RU'
        }, () => {
            now_lang = 1 - now_lang;
            Menu.lang = Menu.langs[now_lang];
            Menu.load('Settings');
    }),
    MenuBuilder.button('change_theme', {
        'EN': 'Change color scheme',
        'RU': 'Изменить цветовую схему'
        }, () => {
            Menu.load('Schemes')
    }),
    MenuBuilder.button('change_mode', {
        'EN': 'Change game mode',
        'RU': 'Изменить режим игры'
        }, () => {
            Menu.load('Modes')
    }),
    MenuBuilder.button('back', {
        'EN': 'Back',
        'RU': 'Назад'
        }, () => {               
            Menu.load('Main');
    }),
])

Menu.add('Schemes', [
    MenuBuilder.h1({
        'EN': "Color schemes",
        'RU': "Цветовые схемы"
    }),
    MenuBuilder.button('classic_scheme', {
        'EN': 'Classic',
        'RU': 'Классическая'
        }, () => {
            nowTheme = 0;
    }),
    MenuBuilder.button('patriotic_scheme', {
        'EN': 'Patriotic',
        'RU': 'Патриотическая'
        }, () => {
            nowTheme = 1;
            Menu.load('Schemes')
    }),
    MenuBuilder.button('back', {
        'EN': 'Back',
        'RU': 'Назад'
        }, () => {               
            Menu.load('Settings');
    }),
])

Menu.add('Modes', [
    MenuBuilder.h1({
        'EN': "Game modes",
        'RU': "Режимы игры"
    }),
    MenuBuilder.button('score_mode', {
        'EN': 'Till 5 goals',
        'RU': 'До 5 голов'
    }, () => {
        gameMode = 1 - gameMode;
        Menu.load('Modes')
    }),
    MenuBuilder.button('timer_mode', {
        'EN': 'With timer',
        'RU': 'С таймером'
    }, () => {
        gameMode = 1 - gameMode;
        Menu.load('Modes')
    }),
    MenuBuilder.button('back', {
        'EN': 'Back',
        'RU': 'Назад'
        }, () => {               
            Menu.load('Settings');
    }),
])

Menu.add('GameOver', [
    MenuBuilder.h1({
        'EN': "Game over!",
        'RU': "Игра окончена!" 
    }),
    MenuBuilder.button('back', {
        'EN': 'Back',
        'RU': 'Назад'
        }, () => {               
            Menu.load('Main');
    }),
])

Menu.load('Main')
