function displayOrder(a, b) {
    return a - b;
  }
  const nombres = [5, 2, 9, 1, 3];
  nombres.sort(displayOrder);
  console.log(nombres);