let nowTheme = 0
const numOfThemes = 3
const themes = [
    ["black", "white"],
    ["blue", "yellow"],
    ["white", "red"],
]
const themesNames = ["Classic", "Patriot", "POLSKA"]

const gameHeight = 700, gameWidth = 663
const downIndent = 10, upIndent = 70

let gameMode = 0, numModes = 2
const timerMode = 5
const modesNames = ["Score", "Timer"]

const platformHeight = 10, platformWidth = 100
const platformSpeed = 228

const blockHeight = 10, blockWidth = 30
const betweenBlocks = 3
const blocksInRow = 20, numOfRows = 10
const blockColorBrightness = 500

const ballRadius = 5
const ballSpeed = 400


//Alterable variables. Must be nullified
let nowScore = 0