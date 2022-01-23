
import Player from '../components/Player';
import { createButtons, createDOMBoard, winner } from './Dom';

export default function Load() {
  const container = document.getElementById('root');
  const { row: boardDOM, gPlayer, gEnemy } = createDOMBoard();

  const { row: buttonsDOM, startBtn } = createButtons();
  const { winnerDOM, winnerText } = winner();
  container.appendChild(boardDOM);
  container.appendChild(buttonsDOM);
  container.appendChild(winnerDOM);

  const player = Player('Player1', false);
  const computer = Player('Computer', true);
  player.grid = gPlayer;
  computer.grid = gEnemy;
  const players = [player, computer];
  return { startBtn, players, winnerDOM, winnerText };
}