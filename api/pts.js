export default function handler(req, res) {
  const chance = Math.random();
  let result;

  if (chance < 0.75) {
    result = -Math.floor(Math.random() * 65) - 1; // -65 до -1
  } else {
    result = Math.floor(Math.random() * 401); // 0 до 400
  }

  res.status(200).json({
    message: `Rolling points for the next game... 🎲 The next game will be worth ${result} pts!`
  });
}
