// === Course Data ===
const courseData = {
  1: {
    title: "Lesson 1: Where are you from?",
    words: [
      { text: "the USA", category: "noun", flag: "usa" },
      { text: "Japan", category: "noun", flag: "japan" },
      { text: "the UK", category: "noun", flag: "uk" },
      { text: "Taiwan", category: "noun", flag: "taiwan" },
      { text: "France", category: "noun", flag: "france" },
      { text: "Australia", category: "noun", flag: "australia" },
      { text: "Vietnam", category: "noun", flag: "vietnam" },
      { text: "Korea", category: "noun", flag: "korea" }
    ],
    sentences: [
      { english: "Where are you from?", chinese: "你來自哪裡？" },
      { english: "I’m from Taiwan.", chinese: "我來自台灣。" },
      { english: "Is he from the USA?", chinese: "他來自美國嗎？" },
      { english: "Yes, he is.", chinese: "是的，他是。" },
      { english: "Is she from France?", chinese: "她來自法國嗎？" },
      { english: "No, she isn’t.", chinese: "不，她不是。" },
      { english: "She’s from the UK.", chinese: "她來自英國。" }
    ]
  },
  2: {
    title: "Lesson 2: What do you like to do?",
    words: [
      { text: "play basketball", category: "verb" },
      { text: "watch TV", category: "verb" },
      { text: "play video games", category: "verb" },
      { text: "go shopping", category: "verb" },
      { text: "ride a bike", category: "verb" },
      { text: "go camping", category: "verb" },
      { text: "visit my friend", category: "verb" }
    ],
    sentences: [
      { english: "What do you like to do in your free time?", chinese: "你空閒時間喜歡做什麼？" },
      { english: "I like to ride a bike.", chinese: "我喜歡騎腳踏車。" },
      { english: "What does he like to do in his free time?", chinese: "他空閒時間喜歡做什麼？" },
      { english: "He likes to go camping.", chinese: "他喜歡去露營。" }
    ]
  },
  3: {
    title: "Lesson 3: How much is it?",
    words: [
      { text: "eggs", category: "noun" },
      { text: "sandwiches", category: "noun" },
      { text: "oranges", category: "noun" },
      { text: "strawberries", category: "noun" },
      { text: "watermelons", category: "noun" },
      { text: "cookies", category: "noun" },
      { text: "hamburgers", category: "noun" },
      { text: "hot dogs", category: "noun" },
      { text: "how many", category: "wh" },
      { text: "need", category: "verb" },
      { text: "how much", category: "wh" },
      { text: "dollar", category: "noun" },
      { text: "hundred", category: "adjective" }
    ],
    sentences: [
      { english: "How many eggs do you need?", chinese: "你需要多少顆蛋？" },
      { english: "I need ten eggs.", chinese: "我需要十顆蛋。" },
      { english: "How much is the hot dog?", chinese: "這熱狗多少錢？" },
      { english: "It’s fifty dollars.", chinese: "它五十元。" },
      { english: "How much are the cookies?", chinese: "這些餅乾多少錢？" },
      { english: "They’re one hundred dollars.", chinese: "它們一百元。" }
    ]
  },
  4: {
    title: "Lesson 4: What would you like?",
    words: [
      { text: "breakfast", category: "noun" },
      { text: "dinner", category: "noun" },
      { text: "lunch", category: "noun" },
      { text: "rice", category: "noun" },
      { text: "bread", category: "noun" },
      { text: "soup", category: "noun" },
      { text: "chicken", category: "noun" },
      { text: "noodles", category: "noun" },
      { text: "would like", category: "verb" }
    ],
    sentences: [
      { english: "What would you like for breakfast?", chinese: "你早餐想要吃什麼？" },
      { english: "I would like some bread.", chinese: "我想要一些麵包。" },
      { english: "Would you like some rice for lunch?", chinese: "你午餐想要吃一些飯嗎？" },
      { english: "Yes, please.", chinese: "好的，麻煩了。" },
      { english: "No, thank you.", chinese: "不，謝謝你。" }
    ]
  }
};

// === Country flag SVGs (Windows-safe inline SVGs) ===
const flagSVGs = {
  taiwan: `<svg class="card-flag-svg" viewBox="0 0 30 20" width="30" height="20" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="30" height="20" fill="#F00"/><rect width="15" height="10" fill="#009"/><circle cx="7.5" cy="5" r="2.5" fill="#FFF"/><circle cx="7.5" cy="5" r="2" fill="#009"/><polygon points="7.5,2 7.8,3.5 9.3,3 8.3,4.2 9.7,4.7 8.2,5.2 9,6.5 7.7,5.8 7.5,7.3 7.3,5.8 6,6.5 6.8,5.2 5.3,4.7 6.7,4.2 5.7,3 7.2,3.5" fill="#FFF"/></svg>`,
  usa: `<svg class="card-flag-svg" viewBox="0 0 26 14" width="30" height="16" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="26" height="14" fill="#B22234"/><rect width="26" height="1" y="1" fill="#fff"/><rect width="26" height="1" y="3" fill="#fff"/><rect width="26" height="1" y="5" fill="#fff"/><rect width="26" height="1" y="7" fill="#fff"/><rect width="26" height="1" y="9" fill="#fff"/><rect width="26" height="1" y="11" fill="#fff"/><rect width="26" height="1" y="13" fill="#fff"/><rect width="10.4" height="7.53" fill="#3C3B6E"/></svg>`,
  uk: `<svg class="card-flag-svg" viewBox="0 0 60 30" width="30" height="15" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2"/><path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" stroke-width="10"/><path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" stroke-width="6"/></svg>`,
  japan: `<svg class="card-flag-svg" viewBox="0 0 30 20" width="30" height="20" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#bc002d"/></svg>`,
  france: `<svg class="card-flag-svg" viewBox="0 0 30 20" width="30" height="20" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="10" height="20" fill="#00209f"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#f31830"/></svg>`,
  australia: `<svg class="card-flag-svg" viewBox="0 0 30 15" width="30" height="15" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="30" height="15" fill="#00008b"/><path d="M0,0 L10,5 M10,0 L0,5" stroke="#fff" stroke-width="1"/><path d="M5,0 L5,5 M0,2.5 L10,2.5" stroke="#fff" stroke-width="1.5"/><circle cx="22.5" cy="3.75" r="1.5" fill="#fff"/><circle cx="15" cy="10.5" r="1.2" fill="#fff"/><circle cx="18" cy="12.5" r="1.2" fill="#fff"/><circle cx="21" cy="11.5" r="1.2" fill="#fff"/><circle cx="24" cy="9.5" r="1.2" fill="#fff"/><circle cx="22.5" cy="7.5" r="0.6" fill="#fff"/></svg>`,
  vietnam: `<svg class="card-flag-svg" viewBox="0 0 30 20" width="30" height="20" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="30" height="20" fill="#da251d"/><polygon points="15,4 16.2,8.8 21,8.8 17.1,11.7 18.6,16.5 15,13.5 11.4,16.5 12.9,11.7 9,8.8 13.8,8.8" fill="#ffff00"/></svg>`,
  korea: `<svg class="card-flag-svg" viewBox="0 0 30 20" width="30" height="20" style="border:1px solid #1A1A1A; border-radius:3px;"><rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="5" fill="#c60c30"/><path d="M15,10 A5,5 0 0,1 15,5 A2.5,2.5 0 0,1 15,10" fill="#003478"/><circle cx="15" cy="10" r="5" stroke="#1A1A1A" stroke-width="0.5" fill="none"/></svg>`
};

// === Synthesized Web Audio Sound FX ===
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const SoundEffects = {
  playClick() {
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) { console.error(e); }
  },
  playSnap() {
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.06);
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.06);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) { console.error(e); }
  },
  playSuccess() {
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      // Happy arpeggio: C4 -> E4 -> G4 -> C5
      const notes = [261.63, 329.63, 392.00, 523.25];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.08 + 0.02);
        gain.gain.linearRampToValueAtTime(0, now + idx * 0.08 + 0.22);
        
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } catch (e) { console.error(e); }
  },
  playError() {
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(90, ctx.currentTime + 0.25);
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.25);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) { console.error(e); }
  }
};

// === Lightweight Confetti System ===
let confettiParticles = [];
let confettiAnimationFrame = null;

function burstConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Cancel previous loop
  if (confettiAnimationFrame) {
    cancelAnimationFrame(confettiAnimationFrame);
  }
  
  confettiParticles = [];
  const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#C8B6FF', '#A8E6CF'];
  
  for (let i = 0; i < 90; i++) {
    confettiParticles.push({
      x: canvas.width / 2 + (Math.random() * 200 - 100),
      y: canvas.height * 0.6 + (Math.random() * 100 - 50),
      size: Math.random() * 8 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: -(Math.random() * 8 + 7), // shoot upwards
      speedX: Math.random() * 10 - 5,
      gravity: 0.25,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 10 - 5,
      opacity: 1
    });
  }
  
  function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let remaining = false;
    
    confettiParticles.forEach(p => {
      p.speedY += p.gravity;
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      
      if (p.y < canvas.height && p.opacity > 0) {
        remaining = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
        ctx.restore();
      }
    });
    
    if (remaining) {
      confettiAnimationFrame = requestAnimationFrame(updateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  
  updateConfetti();
}

// === Speech Synthesis wrapper ===
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  // Clean text slightly (remove trailing commas, periods)
  const cleanText = text.replace(/([.,?!])/g, ' $1').replace(/\s+/g, ' ').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-US';
  
  // Try to find a nice English voice
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Google')) ||
                  voices.find(v => v.lang.includes('en-US')) ||
                  voices.find(v => v.lang.startsWith('en'));
  if (enVoice) {
    utterance.voice = enVoice;
  }
  
  utterance.rate = 0.85; // Slightly slower for language learners
  window.speechSynthesis.speak(utterance);
}

// Ensure voices are loaded
if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// === Grammar category finder ===
function getPOSCategory(word) {
  // Standardize curly apostrophe to normal single quote for matching
  const clean = word.toLowerCase().trim().replace(/[.,?!，。？]/g, '').replace(/’/g, "'");
  if (!clean) return 'punctuation';
  
  const subjects = ['i', 'you', 'he', 'she', 'it', 'we', 'they', "i'm", "she's", "he's", "it's", "they're", "yes", "no"];
  const whWords = ['where', 'what', 'how', 'how many', 'how much'];
  const verbs = ['are', 'am', 'is', 'do', 'does', 'like', 'likes', 'need', 'needs', 'would', 'play', 'watch', 'go', 'ride', 'visit', 'would like', "isn't"];
  const adjectives = ['ten', 'fifty', 'one', 'hundred', 'some', 'many', 'much', 'free', 'my'];
  const nouns = [
    'taiwan', 'usa', 'uk', 'japan', 'france', 'australia', 'vietnam', 'korea', 'the usa', 'the uk',
    'eggs', 'sandwiches', 'oranges', 'strawberries', 'watermelons', 'cookies', 'hamburgers', 'hot dogs',
    'rice', 'bread', 'soup', 'chicken', 'noodles', 'breakfast', 'lunch', 'dinner',
    'dollar', 'dollars', 'friend', 'time', 'tv', 'bike', 'camping', 'shopping', 'basketball', 'games', 'video games'
  ];
  const other = ['from', 'to', 'in', 'for', 'thank', 'please', 'thanks', 'a', 'the', 'some'];
  
  if (subjects.includes(clean)) return 'subject';
  if (whWords.includes(clean)) return 'wh';
  if (verbs.some(v => clean.includes(v) || v.includes(clean))) return 'verb';
  if (nouns.includes(clean)) return 'noun';
  if (adjectives.includes(clean)) return 'adjective';
  if (other.includes(clean)) return 'other';
  return 'other';
}

// === Core Card App Code ===
class WordCardsApp {
  constructor() {
    this.currentLesson = 1;
    this.currentMode = 'sandbox'; // 'sandbox' or 'puzzle'
    this.activeDragCard = null;
    this.dragOffset = { x: 0, y: 0 };
    
    // Puzzle state
    this.currentPuzzleIndex = null;
    this.puzzleTokens = []; // Target order of strings
    
    // DOM Elements
    this.workspace = document.getElementById('workspace');
    this.cardsContainer = document.getElementById('cards-container');
    this.trayCardsContainer = document.getElementById('tray-cards-container');
    this.puzzleSlotsContainer = document.getElementById('puzzle-slots-container');
    this.puzzleGuidanceBar = document.getElementById('puzzle-guidance-bar');
    this.sentenceListContainer = document.getElementById('sentence-buttons-container');
    
    // Bind Event Listeners
    this.initEventListeners();
    
    // Load default Lesson
    this.loadLesson(1);
    
    // Prevent iPad elastic page scrolling while actively dragging cards
    document.addEventListener('touchmove', (e) => {
      if (this.activeDragCard) {
        e.preventDefault();
      }
    }, { passive: false });
  }
  
  initEventListeners() {
    // Lesson switching
    document.querySelectorAll('.btn-lesson').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-lesson').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.loadLesson(parseInt(e.currentTarget.dataset.lesson));
      });
    });
    
    // Mode switching
    const btnSandbox = document.getElementById('btn-mode-sandbox');
    const btnPuzzle = document.getElementById('btn-mode-puzzle');
    
    btnSandbox.addEventListener('click', () => {
      btnSandbox.classList.add('active');
      btnPuzzle.classList.remove('active');
      this.switchMode('sandbox');
    });
    
    btnPuzzle.addEventListener('click', () => {
      btnPuzzle.classList.add('active');
      btnSandbox.classList.remove('active');
      this.switchMode('puzzle');
    });
    
    // Action panel
    document.getElementById('btn-reset').addEventListener('click', () => this.resetCanvas());
    document.getElementById('btn-scatter').addEventListener('click', () => this.scatterCardsInWorkspace());
    document.getElementById('btn-check-puzzle').addEventListener('click', () => this.checkPuzzle());
    document.getElementById('btn-speak-all').addEventListener('click', () => this.speakSentenceFromWorkspace());
    document.getElementById('btn-show-hint').addEventListener('click', () => this.showHint());
    
    // Custom Card tool
    document.getElementById('btn-add-custom').addEventListener('click', () => this.addCustomCard());
    document.getElementById('custom-card-text').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.addCustomCard();
    });
    
    // Workspace Resize listener to prevent cards going offscreen
    window.addEventListener('resize', () => {
      this.boundaryCheckAllCards();
    });
  }
  
  loadLesson(lessonNum) {
    this.currentLesson = lessonNum;
    this.currentPuzzleIndex = null;
    
    // Re-populate left sidebar puzzle sentences
    this.sentenceListContainer.innerHTML = '';
    const lesson = courseData[this.currentLesson];
    
    lesson.sentences.forEach((sentenceObj, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-sentence-select';
      btn.innerText = sentenceObj.english;
      btn.title = sentenceObj.english;
      btn.addEventListener('click', () => this.loadPuzzle(idx));
      this.sentenceListContainer.appendChild(btn);
    });
    
    // Update translation preview
    document.getElementById('target-translation').innerText = '請選擇一個句子開始挑戰！';
    
    // Reload cards for the current mode
    this.resetCanvas();
  }
  
  switchMode(mode) {
    this.currentMode = mode;
    
    const puzzleMenu = document.getElementById('puzzle-menu');
    const sandboxMenu = document.getElementById('sandbox-menu');
    const checkBtn = document.getElementById('btn-check-puzzle');
    
    if (mode === 'puzzle') {
      puzzleMenu.classList.remove('hidden');
      sandboxMenu.classList.add('hidden');
      checkBtn.classList.remove('hidden');
      this.puzzleGuidanceBar.classList.remove('hidden');
      this.puzzleSlotsContainer.classList.remove('hidden');
      
      // Auto-load first sentence of the lesson in puzzle mode
      this.loadPuzzle(0);
    } else {
      puzzleMenu.classList.add('hidden');
      sandboxMenu.classList.remove('hidden');
      checkBtn.classList.add('hidden');
      this.puzzleGuidanceBar.classList.add('hidden');
      this.puzzleSlotsContainer.classList.add('hidden');
      
      this.resetCanvas();
    }
  }
  
  resetCanvas() {
    this.cardsContainer.innerHTML = '';
    this.trayCardsContainer.innerHTML = '';
    this.puzzleSlotsContainer.innerHTML = '';
    
    const lesson = courseData[this.currentLesson];
    
    if (this.currentMode === 'sandbox') {
      // Sandbox mode: Spawn vocabulary cards and unique words from sentences into tray
      const wordCounts = {}; // word -> max frequency count in a single sentence
      
      // 1. Add direct words (at least frequency 1)
      lesson.words.forEach(w => {
        wordCounts[w.text] = 1;
      });
      
      // 2. Count tokens from sentences and keep the maximum single-sentence frequency
      lesson.sentences.forEach(s => {
        const tokens = this.tokenize(s.english);
        const sentenceFrequencies = {};
        
        tokens.forEach(t => {
          sentenceFrequencies[t] = (sentenceFrequencies[t] || 0) + 1;
        });
        
        for (const [token, count] of Object.entries(sentenceFrequencies)) {
          // Match case-insensitively with existing keys to merge frequency counts
          const existingKey = Object.keys(wordCounts).find(k => k.toLowerCase() === token.toLowerCase());
          if (existingKey) {
            wordCounts[existingKey] = Math.max(wordCounts[existingKey], count);
          } else {
            wordCounts[token] = count;
          }
        }
      });
      
      // Convert to card objects and create copies for frequencies > 1
      for (const [text, count] of Object.entries(wordCounts)) {
        const meta = lesson.words.find(w => w.text.toLowerCase() === text.toLowerCase());
        const category = getPOSCategory(text);
        const flag = meta ? meta.flag : null;
        
        for (let i = 0; i < count; i++) {
          this.createCard(text, category, flag, false);
        }
      }
      
      this.updateTrayCount();
    } else {
      // Puzzle mode: load selected puzzle sentence
      if (this.currentPuzzleIndex !== null) {
        this.loadPuzzle(this.currentPuzzleIndex);
      }
    }
  }
  
  loadPuzzle(idx) {
    this.currentPuzzleIndex = idx;
    
    // Highlight sidebar active sentence button
    const buttons = this.sentenceListContainer.querySelectorAll('.btn-sentence-select');
    buttons.forEach((btn, bIdx) => {
      if (bIdx === idx) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    
    // Set target translation text
    const sentenceObj = courseData[this.currentLesson].sentences[idx];
    document.getElementById('target-translation').innerText = sentenceObj.chinese;
    
    // Clean canvas & slot containers
    this.cardsContainer.innerHTML = '';
    this.trayCardsContainer.innerHTML = '';
    this.puzzleSlotsContainer.innerHTML = '';
    
    // Tokenize target sentence
    const originalText = sentenceObj.english;
    this.puzzleTokens = this.tokenize(originalText);
    
    // Create empty target slot placeholders
    this.puzzleTokens.forEach((token, sIdx) => {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.slotIndex = sIdx;
      slot.innerText = `卡片 ${sIdx + 1}`;
      this.puzzleSlotsContainer.appendChild(slot);
    });
    
    // Shuffle puzzle cards and spawn into tray
    const shuffledTokens = [...this.puzzleTokens]
      .map((text, originalIndex) => ({ text, originalIndex }))
      .sort(() => Math.random() - 0.5);
    
    shuffledTokens.forEach(item => {
      // Find potential flag matching the token (e.g. Taiwan, France)
      const lessonWords = courseData[this.currentLesson].words;
      const meta = lessonWords.find(w => w.text.toLowerCase() === item.text.toLowerCase());
      const flag = meta ? meta.flag : null;
      
      this.createCard(item.text, getPOSCategory(item.text), flag, false);
    });
    
    this.updateTrayCount();
    SoundEffects.playClick();
  }
  
  tokenize(sentence) {
    // Splits words (including contractions with curly/straight apostrophes) and terminal punctuations (English and Chinese)
    // "Yes, he is." -> ['Yes', ',', 'he', 'is', '.']
    return sentence.match(/[\w'’]+|[.,?!，。？]/g) || [];
  }
  
  createCard(text, category, flagKey = null, isCustom = false) {
    const card = document.createElement('div');
    card.className = `word-card pos-${category}`;
    card.innerText = text;
    card.dataset.text = text;
    card.dataset.category = category;
    
    // Prepend custom SVG flag if flagKey is matched
    if (flagKey && flagSVGs[flagKey]) {
      card.innerHTML = flagSVGs[flagKey] + ` <span>${text}</span>`;
    }
    
    // Add close button if it is a custom card
    if (isCustom) {
      const closeBtn = document.createElement('span');
      closeBtn.className = 'card-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.remove();
        this.updateTrayCount();
        SoundEffects.playClick();
      });
      card.appendChild(closeBtn);
    }
    
    // Mouse / Touch Event Drag handlers via pointer events
    card.addEventListener('pointerdown', (e) => this.onPointerDown(e, card));
    
    // Click speaks the text
    card.addEventListener('click', (e) => {
      // Only speak if not dragging
      if (!card.classList.contains('dragging')) {
        speakText(text);
      }
    });
    
    this.trayCardsContainer.appendChild(card);
    this.updateTrayCount();
    return card;
  }
  
  addCustomCard() {
    const input = document.getElementById('custom-card-text');
    const text = input.value.trim();
    if (!text) return;
    
    const category = getPOSCategory(text);
    const card = this.createCard(text, category, null, true);
    
    // Play sound and clear input
    SoundEffects.playClick();
    input.value = '';
    
    // Visual pop animation
    card.style.transform = 'scale(0)';
    card.style.transition = 'transform 0.2s ease-out';
    setTimeout(() => card.style.transform = '', 50);
  }
  
  updateTrayCount() {
    const count = this.trayCardsContainer.querySelectorAll('.word-card').length;
    document.getElementById('tray-count').innerText = `${count} 張`;
    
    // Show placeholder if empty
    let placeholder = this.trayCardsContainer.querySelector('.tray-empty-placeholder');
    if (count === 0) {
      if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.className = 'tray-empty-placeholder';
        placeholder.innerText = '字卡庫空了，拖曳卡片回到此處或重置！';
        this.trayCardsContainer.appendChild(placeholder);
      }
    } else {
      if (placeholder) {
        placeholder.remove();
      }
    }
  }
  
  // === Pointer Drag and Drop engine ===
  onPointerDown(e, card) {
    // Left mouse click or touch down
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    
    e.preventDefault();
    e.stopPropagation();
    
    SoundEffects.playClick();
    
    this.activeDragCard = card;
    card.classList.add('dragging');
    
    // Handle coordinates depending on if card is absolute in workspace or in tray
    const isAbsolute = card.classList.contains('absolute');
    
    const wsRect = this.workspace.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    
    if (!isAbsolute) {
      // Transition from flow layout in tray to absolute positioning in workspace
      card.classList.add('absolute');
      this.cardsContainer.appendChild(card);
      
      // Calculate coordinates relative to workspace top-left
      const left = cardRect.left - wsRect.left;
      const top = cardRect.top - wsRect.top;
      
      card.style.left = `${left}px`;
      card.style.top = `${top}px`;
    }
    
    // Calculate distance from pointer down coordinates to card top-left
    this.dragOffset.x = e.clientX - card.getBoundingClientRect().left;
    this.dragOffset.y = e.clientY - card.getBoundingClientRect().top;
    
    this.pointerMoveHandler = (ev) => this.onPointerMove(ev);
    this.pointerUpHandler = (ev) => this.onPointerUp(ev);
    
    // Bind tracking events to document for extremely smooth drag tracking on iPad/tablets
    document.addEventListener('pointermove', this.pointerMoveHandler, { passive: false });
    document.addEventListener('pointerup', this.pointerUpHandler);
    document.addEventListener('pointercancel', this.pointerUpHandler);
  }
  
  onPointerMove(e) {
    if (!this.activeDragCard) return;
    
    const card = this.activeDragCard;
    const wsRect = this.workspace.getBoundingClientRect();
    
    // Calculate new position relative to workspace top-left
    let newLeft = e.clientX - wsRect.left - this.dragOffset.x;
    let newTop = e.clientY - wsRect.top - this.dragOffset.y;
    
    // Boundary check so cards do not leave workspace borders
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    
    newLeft = Math.max(0, Math.min(newLeft, wsRect.width - cardWidth));
    newTop = Math.max(-20, Math.min(newTop, wsRect.height - cardHeight + 50)); // Allow slightly overlapping tray bounds for smooth drop
    
    card.style.left = `${newLeft}px`;
    card.style.top = `${newTop}px`;
    
    // Puzzle Snapping hover feedback
    if (this.currentMode === 'puzzle') {
      const hoveringSlotIdx = this.findHoveringSlotIndex(card);
      
      // Clear visual hovers on slots
      const slots = this.puzzleSlotsContainer.querySelectorAll('.puzzle-slot');
      slots.forEach((slot, sIdx) => {
        if (sIdx === hoveringSlotIdx) {
          slot.classList.add('active-hover');
        } else {
          slot.classList.remove('active-hover');
        }
      });
    }
  }
  
  onPointerUp(e) {
    if (!this.activeDragCard) return;
    
    const card = this.activeDragCard;
    card.classList.remove('dragging');
    
    document.removeEventListener('pointermove', this.pointerMoveHandler);
    document.removeEventListener('pointerup', this.pointerUpHandler);
    document.removeEventListener('pointercancel', this.pointerUpHandler);
    
    const wsRect = this.workspace.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const trayRect = document.getElementById('card-tray').getBoundingClientRect();
    
    // Check if card is dropped over the bottom tray
    const isOverTray = cardRect.top + cardRect.height / 2 > trayRect.top;
    
    if (isOverTray) {
      // Put card back to tray
      card.classList.remove('absolute');
      card.style.left = '';
      card.style.top = '';
      card.style.transform = '';
      this.trayCardsContainer.appendChild(card);
      this.updateTrayCount();
      SoundEffects.playClick();
    } else {
      // Card is staying in workspace: Snapping check in Puzzle Mode
      if (this.currentMode === 'puzzle') {
        const slotIdx = this.findHoveringSlotIndex(card);
        const slots = this.puzzleSlotsContainer.querySelectorAll('.puzzle-slot');
        
        // Reset slots visual highlights
        slots.forEach(s => s.classList.remove('active-hover'));
        
        if (slotIdx !== -1) {
          // Snap card directly to the slot position
          const slot = slots[slotIdx];
          
          // If the slot is already occupied, kick the old card to the workspace
          const existingCard = this.getCardInSlot(slotIdx);
          if (existingCard && existingCard !== card) {
            this.displaceCard(existingCard);
          }
          
          // Position card inside the slot coordinates
          const slotRect = slot.getBoundingClientRect();
          const snapLeft = slotRect.left - wsRect.left + (slotRect.width - cardRect.width) / 2;
          const snapTop = slotRect.top - wsRect.top + (slotRect.height - cardRect.height) / 2;
          
          card.style.left = `${snapLeft}px`;
          card.style.top = `${snapTop}px`;
          card.dataset.snappedSlot = slotIdx;
          
          SoundEffects.playSnap();
          
          // Animate small snap pulse
          card.classList.add('bounce-animation');
          setTimeout(() => card.classList.remove('bounce-animation'), 600);
        } else {
          // Cards dropped outside slots on the workspace
          delete card.dataset.snappedSlot;
        }
      }
    }
    
    this.activeDragCard = null;
  }
  
  // Find index of slot that matches the center of card
  findHoveringSlotIndex(card) {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    const slots = this.puzzleSlotsContainer.querySelectorAll('.puzzle-slot');
    let bestSlotIndex = -1;
    let minDistance = 60; // Max hover snap radius in pixels
    
    slots.forEach((slot, sIdx) => {
      const slotRect = slot.getBoundingClientRect();
      const slotCenterX = slotRect.left + slotRect.width / 2;
      const slotCenterY = slotRect.top + slotRect.height / 2;
      
      const dist = Math.hypot(cardCenterX - slotCenterX, cardCenterY - slotCenterY);
      if (dist < minDistance) {
        minDistance = dist;
        bestSlotIndex = sIdx;
      }
    });
    
    return bestSlotIndex;
  }
  
  getCardInSlot(slotIdx) {
    const cards = this.cardsContainer.querySelectorAll('.word-card');
    for (let c of cards) {
      if (c.dataset.snappedSlot === String(slotIdx)) {
        return c;
      }
    }
    return null;
  }
  
  // Pushes a card away from its slot slightly to make space
  displaceCard(card) {
    delete card.dataset.snappedSlot;
    
    // Slide card down from slots
    const wsRect = this.workspace.getBoundingClientRect();
    const currentLeft = parseFloat(card.style.left) || 100;
    
    card.style.transition = 'top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    card.style.top = `${wsRect.height / 2 + Math.random() * 40}px`;
    
    // Clear transition property after animation completes
    setTimeout(() => {
      card.style.transition = '';
    }, 300);
  }
  
  // === Toolbar Button actions ===
  scatterCardsInWorkspace() {
    const cards = this.cardsContainer.querySelectorAll('.word-card');
    if (cards.length === 0) return;
    
    const wsRect = this.workspace.getBoundingClientRect();
    
    cards.forEach(card => {
      delete card.dataset.snappedSlot;
      
      // Calculate random coordinates inside workspace
      const maxX = wsRect.width - card.offsetWidth;
      const maxY = wsRect.height - card.offsetHeight;
      
      const randomX = Math.max(10, Math.random() * maxX);
      // Keep cards in sandbox below slot areas in Puzzle Mode
      const startY = this.currentMode === 'puzzle' ? 120 : 10;
      const randomY = Math.max(startY, Math.random() * maxY);
      
      // Add slight rotation for visual playfulness
      const randomRot = Math.random() * 8 - 4;
      
      card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      card.style.left = `${randomX}px`;
      card.style.top = `${randomY}px`;
      card.style.transform = `rotate(${randomRot}deg)`;
      
      setTimeout(() => {
        card.style.transition = '';
      }, 500);
    });
    
    SoundEffects.playClick();
  }
  
  boundaryCheckAllCards() {
    const cards = this.cardsContainer.querySelectorAll('.word-card.absolute');
    const wsRect = this.workspace.getBoundingClientRect();
    
    cards.forEach(card => {
      let x = parseFloat(card.style.left) || 0;
      let y = parseFloat(card.style.top) || 0;
      
      x = Math.max(0, Math.min(x, wsRect.width - card.offsetWidth));
      y = Math.max(0, Math.min(y, wsRect.height - card.offsetHeight));
      
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
    });
  }
  
  // === Checking the Puzzle solution ===
  checkPuzzle() {
    if (this.currentMode !== 'puzzle' || this.currentPuzzleIndex === null) return;
    
    const slotsCount = this.puzzleTokens.length;
    let correctCount = 0;
    const cardsToCheck = [];
    const incorrectCards = [];
    
    for (let i = 0; i < slotsCount; i++) {
      const card = this.getCardInSlot(i);
      const targetToken = this.puzzleTokens[i];
      
      if (card && card.dataset.text.toLowerCase() === targetToken.toLowerCase()) {
        correctCount++;
        cardsToCheck.push(card);
      } else {
        if (card) incorrectCards.push(card);
      }
    }
    
    if (correctCount === slotsCount) {
      // Puzzle Solved Successfully!
      SoundEffects.playSuccess();
      burstConfetti();
      
      // Visual bounce & glow
      cardsToCheck.forEach(card => {
        card.classList.add('success-glow', 'bounce-animation');
        setTimeout(() => card.classList.remove('bounce-animation'), 600);
      });
      
      // Wait slightly then speak sentence
      const fullSentence = courseData[this.currentLesson].sentences[this.currentPuzzleIndex].english;
      setTimeout(() => speakText(fullSentence), 300);
    } else {
      // Incorrect Solution
      SoundEffects.playError();
      
      // Shake incorrect cards
      incorrectCards.forEach(card => {
        card.classList.add('shake-animation');
        card.style.borderColor = '#FFADAD'; // visual error highlight
        setTimeout(() => {
          card.classList.remove('shake-animation');
          card.style.borderColor = '';
        }, 500);
      });
      
      // Also check any empty slots and animate them red/shake if helpful
      const slots = this.puzzleSlotsContainer.querySelectorAll('.puzzle-slot');
      slots.forEach((slot, sIdx) => {
        const card = this.getCardInSlot(sIdx);
        if (!card) {
          slot.style.borderColor = '#FF5252';
          slot.style.borderStyle = 'solid';
          setTimeout(() => {
            slot.style.borderColor = '';
            slot.style.borderStyle = '';
          }, 600);
        }
      });
    }
  }
  
  // === Speak sentence from workspace ===
  speakSentenceFromWorkspace() {
    let sentenceText = '';
    
    if (this.currentMode === 'puzzle') {
      // Build text from cards in slots
      const words = [];
      for (let i = 0; i < this.puzzleTokens.length; i++) {
        const card = this.getCardInSlot(i);
        if (card) {
          words.push(card.dataset.text);
        }
      }
      sentenceText = words.join(' ');
    } else {
      // Sandbox: sort all cards in workspace from left to right (x-axis)
      const cards = Array.from(this.cardsContainer.querySelectorAll('.word-card'));
      if (cards.length === 0) return;
      
      cards.sort((a, b) => {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        return aRect.left - bRect.left;
      });
      
      sentenceText = cards.map(c => c.dataset.text).join(' ');
    }
    
    if (sentenceText.trim()) {
      speakText(sentenceText);
    } else {
      // Speak the prompt lesson name if empty
      speakText(courseData[this.currentLesson].title);
    }
  }
  
  showHint() {
    if (this.currentMode !== 'puzzle' || this.currentPuzzleIndex === null) return;
    
    const sentenceObj = courseData[this.currentLesson].sentences[this.currentPuzzleIndex];
    // Speak sentence as hint
    speakText(sentenceObj.english);
    
    // Temporarily overlay small text hints inside empty slots
    const slots = this.puzzleSlotsContainer.querySelectorAll('.puzzle-slot');
    slots.forEach((slot, sIdx) => {
      const card = this.getCardInSlot(sIdx);
      if (!card) {
        const token = this.puzzleTokens[sIdx];
        const oldText = slot.innerText;
        slot.innerText = `💡 ${token}`;
        slot.style.color = '#1A1A1A';
        slot.style.fontWeight = 'bold';
        
        setTimeout(() => {
          slot.innerText = oldText;
          slot.style.color = '';
          slot.style.fontWeight = '';
        }, 1500);
      }
    });
  }
}

// Instantiate on Page Load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new WordCardsApp();
});
