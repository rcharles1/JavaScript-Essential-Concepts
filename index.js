function* randomNumbers() {
    while (true) {
      yield Math.random();
    }
  }

  const generator = randomNumbers();

