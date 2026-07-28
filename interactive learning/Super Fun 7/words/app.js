// Vocabulary Database
const VOCABULARY = {
  "1": [
    { english: "the USA", chinese: "美國" },
    { english: "Japan", chinese: "日本" },
    { english: "the UK", chinese: "英國" },
    { english: "Taiwan", chinese: "臺灣" },
    { english: "France", chinese: "法國" },
    { english: "Australia", chinese: "澳洲" },
    { english: "Vietnam", chinese: "越南" },
    { english: "from", chinese: "來自" },
    { english: "Korea", chinese: "韓國" }
  ],
  "2": [
    { english: "play basketball", chinese: "打籃球" },
    { english: "watch TV", chinese: "看電視" },
    { english: "play video games", chinese: "打電動遊戲" },
    { english: "go shopping", chinese: "逛街購物" },
    { english: "ride a bike", chinese: "騎腳踏車" },
    { english: "go camping", chinese: "露營" },
    { english: "visit my friend", chinese: "拜訪朋友" },
    { english: "free time", chinese: "空閒時間" }
  ],
  "3": [
    { english: "eggs", chinese: "雞蛋（複數）" },
    { english: "sandwiches", chinese: "三明治（複數）" },
    { english: "oranges", chinese: "柳橙（複數）" },
    { english: "how many", chinese: "幾個" },
    { english: "strawberries", chinese: "草莓（複數）" },
    { english: "need", chinese: "需要" },
    { english: "watermelons", chinese: "西瓜（複數）" },
    { english: "how much", chinese: "多少錢" },
    { english: "cookies", chinese: "餅乾（複數）" },
    { english: "dollar", chinese: "元（貨幣單位）" },
    { english: "hamburgers", chinese: "漢堡（複數）" },
    { english: "hundred", chinese: "百（數字）" },
    { english: "hot dogs", chinese: "熱狗（複數）" }
  ],
  "4": [
    { english: "breakfast", chinese: "早餐" },
    { english: "dinner", chinese: "晚餐" },
    { english: "rice", chinese: "米飯" },
    { english: "bread", chinese: "麵包" },
    { english: "soup", chinese: "湯" },
    { english: "chicken", chinese: "雞肉" },
    { english: "lunch", chinese: "午餐" },
    { english: "would like", chinese: "想要" },
    { english: "noodles", chinese: "麵" }
  ]
};

// Game State Management
let currentLesson = "1";
let currentWord = null;
let isSpinning = false;
let audioCtx = null;
let synthesisVoice = null;

// DOM Element Selectors
const displayContainer = document.getElementById("display-container");
const leverAssembly = document.getElementById("lever-assembly");
const leverShaft = document.getElementById("lever-shaft");
const btnSpin = document.getElementById("btn-spin");
const btnSpeak = document.getElementById("btn-speak");
const btnTranslation = document.getElementById("btn-translation");
const audioOverlay = document.getElementById("audio-overlay");
const btnStartGame = document.getElementById("btn-start-game");

const lightsLeft = document.getElementById("lights-left");
const lightsRight = document.getElementById("lights-right");

// Initialize Bulbs on side panels
function initLights() {
  const lightColors = ["red", "yellow", "green"];
  for (let i = 0; i < 5; i++) {
    // Left bulb
    const bulbLeft = document.createElement("div");
    bulbLeft.className = `light-bulb ${lightColors[i % 3]}`;
    lightsLeft.appendChild(bulbLeft);

    // Right bulb
    const bulbRight = document.createElement("div");
    bulbRight.className = `light-bulb ${lightColors[(i + 1) % 3]}`;
    lightsRight.appendChild(bulbRight);
  }
}

// Audio Synthesizer (Web Audio API)
function initAudioContext() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playSynthSound(type, freqStart, freqEnd, duration, volume = 0.1) {
  if (!audioCtx) return;
  
  // Resume context if suspended (common browser security constraint)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
  osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
  if (freqEnd && freqEnd !== freqStart) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);
  }

  gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// Specialized Sound Effects
const SoundEffects = {
  playLeverPull() {
    playSynthSound("sawtooth", 120, 40, 0.2, 0.15);
  },
  playTick(frequency = 250) {
    playSynthSound("triangle", frequency, frequency - 50, 0.05, 0.1);
  },
  playStop() {
    playSynthSound("sine", 600, 600, 0.1, 0.15);
    setTimeout(() => {
      playSynthSound("sine", 800, 800, 0.12, 0.12);
    }, 70);
  },
  playWin() {
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C4, E4, G4, C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        playSynthSound("triangle", freq, freq, 0.25, 0.08);
      }, idx * 75);
    });
  }
};

// Speech Synthesis Setup (Web Speech API)
function loadVoices() {
  const voices = window.speechSynthesis.getVoices();
  // Find a native English voice (US or UK preferred, English match as general fallback)
  synthesisVoice = voices.find(v => v.lang.includes("en-US")) || 
                   voices.find(v => v.lang.includes("en-GB")) || 
                   voices.find(v => v.lang.startsWith("en")) || 
                   voices[0];
}

// Ensure voices are loaded, as they load asynchronously
if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
loadVoices();

function speakWord(text) {
  if (!text) return;
  // Cancel current speech if speaking
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  if (synthesisVoice) {
    utterance.voice = synthesisVoice;
  }
  utterance.rate = 0.85; // Slightly slower for kids to hear clearly
  utterance.pitch = 1.05; // Slightly higher pitch for playful sound

  window.speechSynthesis.speak(utterance);
}

// Particle Confetti Generator
function createConfetti() {
  const cabinet = document.querySelector(".spinner-cabinet");
  const container = document.createElement("div");
  container.className = "confetti-container";
  cabinet.appendChild(container);

  const colors = ["#f43f5e", "#3b82f6", "#10b981", "#f59e0b", "#a78bfa", "#ec4899"];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    
    // Random placement and animations
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = `${Math.random() * 6 + 6}px`;
    piece.style.height = `${Math.random() * 12 + 10}px`;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);
  }

  // Cleanup after animation completes
  setTimeout(() => {
    container.remove();
  }, 2000);
}

// Fetch current pool of words depending on lesson selection
function getWordPool() {
  if (currentLesson === "all") {
    // Combine words from all lessons
    return [
      ...VOCABULARY["1"],
      ...VOCABULARY["2"],
      ...VOCABULARY["3"],
      ...VOCABULARY["4"]
    ];
  }
  return VOCABULARY[currentLesson] || [];
}

// Main Slot Spin Logic
function triggerSpin() {
  if (isSpinning) return;
  isSpinning = true;

  initAudioContext();
  SoundEffects.playLeverPull();

  // Visual pulling lever animation
  leverAssembly.classList.add("pulled");
  setTimeout(() => {
    leverAssembly.classList.remove("pulled");
  }, 250);

  // Disable controls during spin
  btnSpin.disabled = true;
  btnSpeak.disabled = true;
  btnTranslation.disabled = true;
  document.querySelectorAll(".lesson-btn").forEach(btn => btn.disabled = true);

  // Select target word from current pool (try not to repeat immediately if possible)
  const pool = getWordPool();
  let target;
  if (pool.length > 1) {
    do {
      target = pool[Math.floor(Math.random() * pool.length)];
    } while (currentWord && target.english === currentWord.english);
  } else {
    target = pool[0];
  }

  // Generate sequence of items for slot reel
  const reelLength = 20; // Number of items in scrolling reel
  displayContainer.innerHTML = "";

  // Stack elements inside displayContainer
  // Item 0: Starting word (or hint)
  const itemHeight = 200; // Matches CSS viewport height
  
  for (let i = 0; i < reelLength; i++) {
    const card = document.createElement("div");
    card.className = "word-card";
    
    // Choose word for this index:
    // First index holds the previous current word (if any), last index holds target word, others are random
    let wordObj;
    if (i === 0) {
      wordObj = currentWord || { english: "🎯 Ready?", chinese: "準備好了嗎？" };
    } else if (i === reelLength - 1) {
      wordObj = target;
    } else {
      wordObj = pool[Math.floor(Math.random() * pool.length)];
    }

    card.innerHTML = `
      <span class="word-text spinning-blur">${wordObj.english}</span>
      <span class="translation-text hidden">${wordObj.chinese}</span>
    `;
    displayContainer.appendChild(card);
  }

  // Position at start
  displayContainer.style.transition = "none";
  displayContainer.style.transform = `translateY(0)`;
  
  // Force reflow
  displayContainer.offsetHeight;

  // Set transition for scroll momentum (ease out so it decelerates)
  const spinDuration = 2500; // 2.5 seconds
  displayContainer.style.transition = `transform ${spinDuration}ms cubic-bezier(0.12, 0.65, 0.18, 1)`;
  displayContainer.style.transform = `translateY(-${(reelLength - 1) * itemHeight}px)`;

  // Synthesize ticking sounds matching deceleration
  const totalTicks = 22;
  let tickCount = 0;
  
  function triggerNextTick() {
    if (tickCount >= totalTicks) return;
    
    // Decelerating calculation for ticks timing
    // Curve: tick rate starts extremely fast (~35ms) and slows down to over ~350ms
    const progress = tickCount / totalTicks;
    const nextInterval = 35 + Math.pow(progress, 3) * 350;

    // Pitch drops slightly as it slows down to simulate physical wheel momentum
    const tickFreq = 300 - progress * 120;
    
    SoundEffects.playTick(tickFreq);
    tickCount++;
    
    setTimeout(triggerNextTick, nextInterval);
  }
  
  // Start the ticking sequence shortly after pull
  setTimeout(triggerNextTick, 50);

  // Reel Stop and Cleanup
  setTimeout(() => {
    // Clear container and replace with single static card for performance and cleanliness
    displayContainer.style.transition = "none";
    displayContainer.style.transform = "translateY(0)";
    
    displayContainer.innerHTML = `
      <div class="word-card" id="word-card">
        <span class="word-text" id="display-word">${target.english}</span>
        <span class="translation-text hidden" id="display-translation">${target.chinese}</span>
      </div>
    `;

    currentWord = target;
    isSpinning = false;

    // Re-enable controls
    btnSpin.disabled = false;
    btnSpeak.disabled = false;
    btnTranslation.disabled = false;
    btnTranslation.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <span>Show Meaning</span>
    `;
    
    document.querySelectorAll(".lesson-btn").forEach(btn => btn.disabled = false);

    // Play final stop sound, arpeggio fanfare, and spawn confetti
    SoundEffects.playStop();
    setTimeout(() => {
      SoundEffects.playWin();
      createConfetti();
    }, 200);

  }, spinDuration);
}

// Event Listeners Configuration
function setupEventListeners() {
  // Lesson Buttons Selector
  document.querySelectorAll(".lesson-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Audio permission trigger
      initAudioContext();
      
      const targetBtn = e.currentTarget;
      document.querySelectorAll(".lesson-btn").forEach(b => b.classList.remove("active"));
      targetBtn.classList.add("active");
      currentLesson = targetBtn.getAttribute("data-lesson");

      // Reset displayed card
      currentWord = null;
      btnSpeak.disabled = true;
      btnTranslation.disabled = true;
      displayContainer.innerHTML = `
        <div class="word-card initial" id="word-card">
          <span class="word-text" id="display-word">Lesson ${currentLesson.toUpperCase()} Ready!</span>
          <span class="translation-text hidden" id="display-translation">拉下搖桿開始！</span>
        </div>
      `;
      SoundEffects.playTick(400);
    });
  });

  // Lever mechanical click
  leverAssembly.addEventListener("click", () => {
    if (!isSpinning) triggerSpin();
  });

  // Main Spin Button
  btnSpin.addEventListener("click", () => {
    if (!isSpinning) triggerSpin();
  });

  // Audio Pronunciation Player
  btnSpeak.addEventListener("click", () => {
    if (currentWord && !isSpinning) {
      speakWord(currentWord.english);
    }
  });

  // Translation Show/Hide Toggle
  btnTranslation.addEventListener("click", () => {
    if (!currentWord || isSpinning) return;

    const translationNode = document.getElementById("display-translation");
    if (translationNode) {
      const isHidden = translationNode.classList.contains("hidden");
      if (isHidden) {
        translationNode.classList.remove("hidden");
        btnTranslation.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
            <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
            <line x1="2" y1="2" x2="22" y2="22"/>
          </svg>
          <span>Hide Meaning</span>
        `;
        SoundEffects.playTick(500);
      } else {
        translationNode.classList.add("hidden");
        btnTranslation.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>Show Meaning</span>
        `;
        SoundEffects.playTick(300);
      }
    }
  });

  // Keyboard Event Handlers (Spacebar trigger)
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.keyCode === 32) {
      // Prevent default browser scrolling down when space is pressed
      e.preventDefault();
      if (!isSpinning) {
        triggerSpin();
      }
    }
  });

  // Audio overlay modal trigger (for browser restriction bypass)
  btnStartGame.addEventListener("click", () => {
    initAudioContext();
    audioOverlay.classList.add("hidden");
    // Play warm startup beep
    setTimeout(() => {
      SoundEffects.playWin();
    }, 100);
  });

  // Check if AudioContext needs manual starter click
  // Usually chrome allows it immediately after user gesture, but Safari needs a tap.
  // We'll show the overlay on startup if it's suspended, or keep it optional.
  // Actually, standard browsers will activate on the first lesson click or lever pull.
  // To avoid interrupting the experience, we'll keep the overlay hidden unless we strictly need it.
  // Let's show the overlay once if it detects potential safari/iOS, or just let users click naturally.
  // Clicking any button acts as a gesture, which automatically boots the AudioContext!
  // Thus we don't need a heavy overlay block - let's keep it hidden unless they trigger it.
}

// Initializer function on DOM loaded
window.addEventListener("DOMContentLoaded", () => {
  initLights();
  setupEventListeners();
});
