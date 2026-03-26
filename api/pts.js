export default function handler(req, res) {
  const chance = Math.random();
  let result;

  if (chance < 0.8) {
    result = -Math.floor(Math.random() * 65) - 1;
  } else {
    result = Math.floor(Math.random() * 401);
  }

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
    `Rolling points for the next game... The next game will be worth ${result} pts!`
  );
}
