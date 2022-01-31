function factorialize(num) {
  let fact = 1;
  while (num > 0) fact *= num--;
  return fact;
}

factorialize(5);