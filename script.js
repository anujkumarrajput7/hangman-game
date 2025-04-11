const wordList = [
  { word: "banana", hint: "It wears a yellow jacket and hangs out in bunches." },
  { word: "apple", hint: "Often associated with gravity and tech empires." },
  { word: "chair", hint: "This supports you without ever standing up for itself." },
  { word: "pencil", hint: "A stick that loses weight when you use it." },
  { word: "cloud", hint: "Carries weightless cargo and sometimes has thunderous moods." },
  { word: "train", hint: "It follows a set path and never thinks twice." },
  { word: "phone", hint: "Talks back when you press its buttons." },
  { word: "clock", hint: "It hands out time constantly, yet keeps none." },
  { word: "shirt", hint: "Often worn but never complains of being pressed." },
  { word: "shoes", hint: "They walk the talk without ever saying a word." },
  { word: "glass", hint: "You can see through it, yet it can break expectations." },
  { word: "spoon", hint: "It feeds without a mouth." },
  { word: "mouse", hint: "Both a rodent and a computer navigator." },
  { word: "bread", hint: "Slices of this build up your daily structure." },
  { word: "star", hint: "Seen from afar, but burns closer than you’d want." },
  { word: "book", hint: "A world pressed between two covers." },
  { word: "river", hint: "It always moves but never walks." },
  { word: "sun", hint: "A burning ball that lights up your reality." },
  { word: "moon", hint: "It borrows light and inspires wolves." },
  { word: "tree", hint: "It breathes out what you breathe in." },
  { word: "leaf", hint: "Part of a living thing, it falls when things change." },
  { word: "lamp", hint: "It lights the truth but stays in the dark." },
  { word: "door", hint: "It stands between entry and exit." },
  { word: "soap", hint: "Used to wash off mistakes." },
  { word: "knife", hint: "It cuts to the point—literally." },
  { word: "coin", hint: "It has two faces and a shiny personality." },
  { word: "rain", hint: "Falls when the sky can’t hold it in." },
  { word: "egg", hint: "Cracks under pressure to reveal life." },
  { word: "milk", hint: "White as snow, flows without falling." },
  { word: "desk", hint: "A surface where minds meet matter." },
  { word: "road", hint: "Takes you places, but never moves itself." },
  { word: "stone", hint: "Silent and heavy, a relic of patience." },
  { word: "cat", hint: "Walks like royalty and lands on its feet." },
  { word: "dog", hint: "Loyal without needing a reason." },
  { word: "car", hint: "It eats fuel and runs on four legs." },
  { word: "bike", hint: "Balanced in motion, doomed when still." },
  { word: "fish", hint: "Breathes where you can’t." },
  { word: "bird", hint: "Defies gravity with feathers." },
  { word: "net", hint: "Traps without chasing." },
  { word: "box", hint: "Holds secrets until unwrapped." },
  { word: "key", hint: "Opens minds and locks alike." },
  { word: "lock", hint: "Protects by denying access." },
  { word: "hat", hint: "Covers thoughts without knowing them." },
  { word: "bed", hint: "Where battles with sleep are lost." },
  { word: "ring", hint: "A circle that binds in silence." },
  { word: "belt", hint: "Holds tight without ever judging your size." },
  { word: "rope", hint: "Ties things together—or apart." },
  { word: "mirror", hint: "Never lies but always reverses." },
  { word: "plate", hint: "Carries meals but never eats." },
  { word: "cup", hint: "It’s always ready to hold your drink." },
  { word: "fan", hint: "Moves air without ever taking a breath." },
  { word: "eraser", hint: "Removes past errors, silently." },
  { word: "carpet", hint: "Softens your steps while bearing all weight." },
  { word: "sock", hint: "Hides your toes from the cold truth." },
  { word: "kite", hint: "Flies best when tied down." },
  { word: "glove", hint: "Hugs your fingers in cold times." },
  { word: "brush", hint: "It smooths or paints, but never creates." },
  { word: "clock", hint: "Marches in place while counting moments." },
  { word: "pen", hint: "Writes without a voice." },
  { word: "dust", hint: "Tiny chaos when left alone." },
  { word: "bell", hint: "It rings out only when shaken." },
  { word: "path", hint: "Exists only if someone walks it." },
  { word: "snow", hint: "It melts hearts and freezes roads." },
  { word: "seed", hint: "A small start with great potential." },
  { word: "rope", hint: "Connects when tension is high." },
  { word: "mud", hint: "Where water meets dirt in arguments." },
  { word: "nest", hint: "Home, but only until wings grow." },
  { word: "wing", hint: "Lifts without effort—at least to the eye." },
  { word: "dust", hint: "So small, yet always returns." },
  { word: "mask", hint: "Reveals by hiding." },
  { word: "web", hint: "Woven trap with invisible intentions." },
  { word: "rope", hint: "A flexible boundary." },
  { word: "leaf", hint: "Whispers the change of seasons." },
  { word: "note", hint: "Tiny paper that says much." },
  { word: "fire", hint: "Devours without chewing." },
  { word: "wind", hint: "Moves with force but stays invisible." },
  { word: "soap", hint: "Dissolves dirt and differences." },
  { word: "jam", hint: "Either sweet or stuck." },
  { word: "salt", hint: "Makes the bland bite back." },
  { word: "ring", hint: "Speaks of promises without a word." },
  { word: "tail", hint: "The end that wags the beginning." },
  { word: "oil", hint: "Smooths out friction in life." },
  { word: "ink", hint: "Its flow tells stories." },
  { word: "grape", hint: "Tiny fruit of vintage destiny." },
  { word: "cake", hint: "Layered with indulgence." },
  { word: "frog", hint: "Jumps from silence into surprise." },
  { word: "nest", hint: "A mother’s blueprint." },
  { word: "bark", hint: "Not always from a dog." },
  { word: "log", hint: "Wood with a story." },
  { word: "vein", hint: "Highways beneath your skin." },
  { word: "tent", hint: "A roof for the rootless." },
  { word: "coin", hint: "Chance and currency in a spin." },
  { word: "nail", hint: "Sharp helper for heavy tasks." },
  { word: "bell", hint: "Calls attention with a single hit." },
  { word: "soap", hint: "Cleans what you hide." },
  { word: "fish", hint: "Wears scales but sings none." },
  { word: "drum", hint: "Speaks in beats not words." },
  { word: "mint", hint: "Fresh breath or new beginnings." }
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
  