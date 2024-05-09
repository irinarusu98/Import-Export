// Импортируйте класс Character из модуля domain:
import Character from './domain';

// Определите класс Game:
class Game {
  start() {
    console.log('game started');
  }
}

// Определите класс GameSavingData:
class GameSavingData {
}

// Определите функции readGameSaving и writeGameSaving:
function readGameSaving() {
}

function writeGameSaving() {
}

// Экспортируйте класс Game как default, а также класс GameSavingData и функции readGameSaving и writeGameSaving:
export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
