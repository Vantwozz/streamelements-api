export default function handler(req, res) {
  const chance = Math.random();
  let result;

  if (chance < 0.7) {
    result = -Math.floor(Math.random() * 101);
  } else {
    result = Math.floor(Math.random() * 401);
  }

  res.status(200).json({ value: result });
}
