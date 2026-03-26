export default function handler(req, res) {
  const rand = Math.random();
  let points;

  if (rand < 0.7) {
    points = Math.floor(Math.random() * 101) - 100; // -100 до 0 (70%)
  } else {
    points = Math.floor(Math.random() * 501); // 0 до 500 (30%)
  }

  res.status(200).send(`Rolling... ${points} points for next game! 🎲`);
}
