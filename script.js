const wordList = [
    { word: "banana", hint: "It's a fruit " },
    { word: "elephant", hint: "Largest land animal " },
    { word: "computer", hint: "You’re using it now " },
    { word: "pyramid", hint: "Famous ancient structure " },
    { word: "guitar", hint: "A musical instrument " }
  ];
  
  let word = "", hint = "";
  let guessedLetters = [];
  let wrongGuesses = 0;
  const maxWrong = 6;
  
  const wordDisplay = document.getElementById("wordDisplay");
  const lettersDisplay = document.getElementById("letters");
  const coinDisplay = document.getElementById("coinCount");
  const hintDisplay = document.querySelector(".hint");
  const resultText = document.getElementById("resultText");
  const parts = document.querySelectorAll(".body-part");
  const hangman = document.querySelector(".hangman");
  const nextBtn = document.getElementById("nextBtn");
  const playAgainBtn = document.getElementById("playAgainBtn");
  
  let coins = parseInt(sessionStorage.getItem("coins")) || 10;
  coinDisplay.textContent = coins;
  
  function pickNewWord() {
    const random = wordList[Math.floor(Math.random() * wordList.length)];
    word = random.word;
    hint = random.hint;
  }
  
  function updateWordDisplay() {
    const display = word.split('').map(letter =>
      guessedLetters.includes(letter) ? letter : "_"
    ).join(" ");
    wordDisplay.textContent = display;
  }
  
  function updateUsedLetters() {
    lettersDisplay.textContent = guessedLetters.length > 0 ? guessedLetters.join(", ") : "None";
  }
  
  function drawHangman() {
    if (wrongGuesses <= maxWrong) {
      const part = parts[wrongGuesses - 1];
      if (part) {
        part.style.display = "block";
        hangman.classList.add("swinging");
        setTimeout(() => hangman.classList.remove("swinging"), 800);
      }
    }
  }
  
  function checkGameOver() {
    const isWin = !word.split('').some(l => !guessedLetters.includes(l));
  
    if (isWin) {
      const reward = word.length * 2;
      coins += reward;
      sessionStorage.setItem("coins", coins);
      coinDisplay.textContent = coins;
      resultText.innerHTML = `🎉 You Win! You earned ${reward} coins.`;
      document.removeEventListener("keydown", handleKey);
      nextBtn.classList.remove("hidden");
    } else if (wrongGuesses >= maxWrong) {
      let change = 1;
      let message = "";
      if (coins >= 100) {
        change = word.length;
        coins = Math.max(0, coins - change);
        message = `You lost ${change} coins.`;
      } else {
        coins += 1;
        message = `You earned 1 coin.`;
      }
      sessionStorage.setItem("coins", coins);
      coinDisplay.textContent = coins;
      resultText.innerHTML = `💀 Game Over! The word was "<strong>${word}</strong>". ${message}`;
      document.removeEventListener("keydown", handleKey);
      playAgainBtn.classList.remove("hidden");
    }
  }
  
  function handleKey(e) {
    const letter = e.key.toLowerCase();
    if (!/^[a-z]$/.test(letter) || guessedLetters.includes(letter)) return;
  
    guessedLetters.push(letter);
    updateUsedLetters();
  
    if (word.includes(letter)) {
      updateWordDisplay();
    } else {
      wrongGuesses++;
      drawHangman();
    }
  
    checkGameOver();
  }
  
  function resetGame() {
    guessedLetters = [];
    wrongGuesses = 0;
    resultText.textContent = "";
    parts.forEach(part => part.style.display = "none");
    pickNewWord();
    hintDisplay.innerHTML = `<strong>Hint:</strong> ${hint}`;
    updateWordDisplay();
    updateUsedLetters();
    document.addEventListener("keydown", handleKey);
    nextBtn.classList.add("hidden");
    playAgainBtn.classList.add("hidden");
  }
  
  nextBtn.addEventListener("click", resetGame);
  playAgainBtn.addEventListener("click", resetGame);
  
  resetGame();
  