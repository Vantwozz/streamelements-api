module.exports = (req, res) => {
  const chance = Math.random();
  let result;

  // 75% шанс на отрицательное число
  if (chance < 0.75) {
    // от -65 до -1
    result = -Math.floor(Math.random() * 65) - 1;
  } else {
    // от 0 до 400
    result = Math.floor(Math.random() * 401);
  }

  res.status(200).json({
    message: `Rolling points for the next game... 🎲 The next game will be worth ${result} pts!`
  });
};
