// Unified Phonics Flashcard Application Data and Logic
// Consolidating Lessons 1, 2, 3, and 4 (7-1, 7-2, 7-3, 7-4)

const lessons = {
  1: {
    title: "Lesson 1: Countries",
    subtitle: "跟著自然拼讀學國家單字！",
    cards: [
      {
        word: "the USA",
        translation: "美國",
        ttsWord: "the U S A",
        image: "assets/usa.png",
        segmented: [
          { text: "th", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "U", type: "vowel" },
          { text: "S", type: "consonant" },
          { text: "A", type: "vowel" }
        ]
      },
      {
        word: "Japan",
        translation: "日本",
        ttsWord: "Japan",
        image: "assets/japan.png",
        segmented: [
          { text: "J", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "p", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "n", type: "consonant" }
        ]
      },
      {
        word: "the UK",
        translation: "英國",
        ttsWord: "the U K",
        image: "assets/uk.png",
        segmented: [
          { text: "th", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "U", type: "vowel" },
          { text: "K", type: "consonant" }
        ]
      },
      {
        word: "Taiwan",
        translation: "臺灣",
        ttsWord: "Taiwan",
        image: "assets/taiwan.png",
        segmented: [
          { text: "T", type: "consonant" },
          { text: "ai", type: "vowel" },
          { text: "w", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "n", type: "consonant" }
        ]
      },
      {
        word: "France",
        translation: "法國",
        ttsWord: "France",
        image: "assets/france.png",
        segmented: [
          { text: "Fr", type: "blend" },
          { text: "a", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "c", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "Australia",
        translation: "澳洲",
        ttsWord: "Australia",
        image: "assets/australia.png",
        segmented: [
          { text: "Au", type: "vowel" },
          { text: "st", type: "blend" },
          { text: "r", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "l", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "a", type: "vowel" }
        ]
      },
      {
        word: "Vietnam",
        translation: "越南",
        ttsWord: "Vietnam",
        image: "assets/vietnam.png",
        segmented: [
          { text: "V", type: "consonant" },
          { text: "ie", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: "n", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "m", type: "consonant" }
        ]
      },
      {
        word: "from",
        translation: "來自",
        ttsWord: "from",
        image: "assets/from.png",
        segmented: [
          { text: "fr", type: "blend" },
          { text: "o", type: "vowel" },
          { text: "m", type: "consonant" }
        ]
      },
      {
        word: "Korea",
        translation: "韓國",
        ttsWord: "Korea",
        image: "assets/korea.png",
        segmented: [
          { text: "K", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "r", type: "consonant" },
          { text: "ea", type: "vowel" }
        ]
      }
    ]
  },
  2: {
    title: "Lesson 2: Activities",
    subtitle: "跟著自然拼讀學休閒活動！",
    cards: [
      {
        word: "play basketball",
        translation: "打籃球",
        ttsWord: "play basketball",
        image: "assets/play_basketball.png",
        segmented: [
          { text: "pl", type: "blend" },
          { text: "ay", type: "vowel" },
          { text: " ", type: "space" },
          { text: "b", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "sk", type: "blend" },
          { text: "e", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: "b", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "ll", type: "blend" }
        ]
      },
      {
        word: "watch TV",
        translation: "看電視",
        ttsWord: "watch T V",
        image: "assets/watch_tv.png",
        segmented: [
          { text: "w", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "tch", type: "digraph" },
          { text: " ", type: "space" },
          { text: "T", type: "consonant" },
          { text: "V", type: "consonant" }
        ]
      },
      {
        word: "play video games",
        translation: "打電動遊戲",
        ttsWord: "play video games",
        image: "assets/play_video_games.png",
        segmented: [
          { text: "pl", type: "blend" },
          { text: "ay", type: "vowel" },
          { text: " ", type: "space" },
          { text: "v", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "d", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "o", type: "vowel" },
          { text: " ", type: "space" },
          { text: "g", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "go shopping",
        translation: "逛街購物",
        ttsWord: "go shopping",
        image: "assets/go_shopping.png",
        segmented: [
          { text: "g", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: " ", type: "space" },
          { text: "sh", type: "digraph" },
          { text: "o", type: "vowel" },
          { text: "pp", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "ng", type: "digraph" }
        ]
      },
      {
        word: "ride a bike",
        translation: "騎腳踏車",
        ttsWord: "ride a bike",
        image: "assets/ride_a_bike.png",
        segmented: [
          { text: "r", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "d", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: " ", type: "space" },
          { text: "a", type: "vowel" },
          { text: " ", type: "space" },
          { text: "b", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "k", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "go camping",
        translation: "露營",
        ttsWord: "go camping",
        image: "assets/go_camping.png",
        segmented: [
          { text: "g", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: " ", type: "space" },
          { text: "c", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "mp", type: "blend" },
          { text: "i", type: "vowel" },
          { text: "ng", type: "digraph" }
        ]
      },
      {
        word: "visit my friend",
        translation: "拜訪朋友",
        ttsWord: "visit my friend",
        image: "assets/visit_my_friend.png",
        segmented: [
          { text: "v", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "s", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "m", type: "consonant" },
          { text: "y", type: "vowel" },
          { text: " ", type: "space" },
          { text: "fr", type: "blend" },
          { text: "ie", type: "vowel" },
          { text: "nd", type: "blend" }
        ]
      },
      {
        word: "free time",
        translation: "空閒時間",
        ttsWord: "free time",
        image: "assets/free_time.png",
        segmented: [
          { text: "fr", type: "blend" },
          { text: "ee", type: "vowel" },
          { text: " ", type: "space" },
          { text: "t", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      }
    ]
  },
  3: {
    title: "Lesson 3: Food & Numbers",
    subtitle: "跟著自然拼讀學食物與數量！",
    cards: [
      {
        word: "eggs",
        translation: "雞蛋（複數）",
        ttsWord: "eggs",
        image: "assets/eggs.png",
        segmented: [
          { text: "e", type: "vowel" },
          { text: "gg", type: "consonant" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "oranges",
        translation: "柳橙（複數）",
        ttsWord: "oranges",
        image: "assets/oranges.png",
        segmented: [
          { text: "o", type: "vowel" },
          { text: "r", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "ng", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "strawberries",
        translation: "草莓（複數）",
        ttsWord: "strawberries",
        image: "assets/strawberries.png",
        segmented: [
          { text: "str", type: "blend" },
          { text: "aw", type: "vowel" },
          { text: "b", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "rr", type: "consonant" },
          { text: "ie", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "watermelons",
        translation: "西瓜（複數）",
        ttsWord: "watermelons",
        image: "assets/watermelons.png",
        segmented: [
          { text: "w", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: "er", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "l", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "cookies",
        translation: "餅乾（複數）",
        ttsWord: "cookies",
        image: "assets/cookies.png",
        segmented: [
          { text: "c", type: "consonant" },
          { text: "oo", type: "vowel" },
          { text: "k", type: "consonant" },
          { text: "ie", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "hamburgers",
        translation: "漢堡（複數）",
        ttsWord: "hamburgers",
        image: "assets/hamburgers.png",
        segmented: [
          { text: "h", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "m", type: "consonant" },
          { text: "b", type: "consonant" },
          { text: "ur", type: "vowel" },
          { text: "g", type: "consonant" },
          { text: "er", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "hot dogs",
        translation: "熱狗（複數）",
        ttsWord: "hot dogs",
        image: "assets/hot_dogs.png",
        segmented: [
          { text: "h", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "t", type: "consonant" },
          { text: " ", type: "space" },
          { text: "d", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "g", type: "consonant" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "sandwiches",
        translation: "三明治（複數）",
        ttsWord: "sandwiches",
        image: "assets/sandwiches.png",
        segmented: [
          { text: "s", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "nd", type: "blend" },
          { text: "w", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "ch", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      },
      {
        word: "how many",
        translation: "幾個",
        ttsWord: "how many",
        image: "assets/how_many.png",
        segmented: [
          { text: "h", type: "consonant" },
          { text: "ow", type: "vowel" },
          { text: " ", type: "space" },
          { text: "m", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "y", type: "vowel" }
        ]
      },
      {
        word: "need",
        translation: "需要",
        ttsWord: "need",
        image: "assets/need.svg",
        segmented: [
          { text: "n", type: "consonant" },
          { text: "ee", type: "vowel" },
          { text: "d", type: "consonant" }
        ]
      },
      {
        word: "how much",
        translation: "多少錢",
        ttsWord: "how much",
        image: "assets/how_much.svg",
        segmented: [
          { text: "h", type: "consonant" },
          { text: "ow", type: "vowel" },
          { text: " ", type: "space" },
          { text: "m", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "ch", type: "digraph" }
        ]
      },
      {
        word: "dollar",
        translation: "元（貨幣單位）",
        ttsWord: "dollar",
        image: "assets/dollar.svg",
        segmented: [
          { text: "d", type: "consonant" },
          { text: "o", type: "vowel" },
          { text: "ll", type: "blend" },
          { text: "ar", type: "vowel" }
        ]
      },
      {
        word: "hundred",
        translation: "百（數字）",
        ttsWord: "hundred",
        image: "assets/hundred.svg",
        segmented: [
          { text: "h", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "nd", type: "blend" },
          { text: "r", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "d", type: "consonant" }
        ]
      }
    ]
  },
  4: {
    title: "Lesson 4: Meals & Food",
    subtitle: "跟著自然拼讀學三餐與食物！",
    cards: [
      {
        word: "breakfast",
        translation: "早餐",
        ttsWord: "breakfast",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#E8F1F5" />
          <circle cx="110" cy="110" r="70" fill="#FFFFFF" stroke="#D3E0EA" stroke-width="4" />
          <circle cx="110" cy="110" r="55" fill="#FFFFFF" stroke="#E6EEF4" stroke-width="2" />
          <path d="M70,85 C70,75 80,75 90,75 C100,75 100,85 100,85 L100,120 C100,123 97,125 94,125 L76,125 C73,125 70,123 70,120 Z" fill="#EAD5C3" stroke="#C49B76" stroke-width="3" />
          <path d="M74,87 C74,80 81,80 87,80 C93,80 96,80 96,87 L96,119 C96,121 94,122 92,122 L78,122 C76,122 74,121 74,119 Z" fill="#F4EAE1" />
          <ellipse cx="130" cy="120" rx="25" ry="20" fill="#FFFFFF" stroke="#E6EEF4" stroke-width="1" />
          <circle cx="130" cy="118" r="11" fill="#FFC93C" />
          <circle cx="127" cy="115" r="3" fill="#FFFFFF" opacity="0.8" />
          <rect x="135" y="70" width="22" height="35" rx="4" fill="#FFFFFF" opacity="0.9" stroke="#B2C8DF" stroke-width="2" />
          <rect x="137" y="75" width="18" height="28" fill="#F9F9F9" />
          <line x1="142" y1="70" x2="148" y2="60" stroke="#FF6B6B" stroke-width="2" stroke-linecap="round" />
          <path d="M60,60 L62,55 L67,53 L62,51 L60,46 L58,51 L53,53 L58,55 Z" fill="#FFD93D" />
          <path d="M165,55 L167,52 L171,51 L167,50 L165,47 L163,50 L159,51 L163,52 Z" fill="#FFD93D" />
          <circle cx="80" cy="98" r="2" fill="#2C3E50" />
          <circle cx="90" cy="98" r="2" fill="#2C3E50" />
          <path d="M83,103 Q85,106 87,103" stroke="#2C3E50" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </svg>`,
        segmented: [
          { text: "br", type: "blend" },
          { text: "ea", type: "vowel" },
          { text: "k", type: "consonant" },
          { text: "f", type: "consonant" },
          { text: "a", type: "vowel" },
          { text: "st", type: "blend" }
        ]
      },
      {
        word: "dinner",
        translation: "晚餐",
        ttsWord: "dinner",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#2D3250" />
          <circle cx="40" cy="50" r="1.5" fill="#FFF" />
          <circle cx="180" cy="40" r="2" fill="#FFF" opacity="0.8" />
          <circle cx="60" cy="150" r="1" fill="#FFF" />
          <path d="M160,70 L162,66 L166,65 L162,64 L160,60 L158,64 L154,65 L158,66 Z" fill="#F9D949" />
          <path d="M105,40 A15,15 0 0,0 85,25 A18,18 0 1,1 105,40" fill="#F9D949" />
          <rect x="20" y="160" width="180" height="40" rx="5" fill="#7077A1" />
          <ellipse cx="110" cy="150" rx="65" ry="22" fill="#FFFFFF" stroke="#424769" stroke-width="3" />
          <ellipse cx="110" cy="150" rx="50" ry="15" fill="#F6F5F5" />
          <path d="M75,148 C75,138 90,132 110,132 C125,132 145,138 145,148 C145,155 130,160 110,160 C90,160 75,155 75,148 Z" fill="#8C3333" stroke="#5C1D1D" stroke-width="2" />
          <path d="M85,144 L135,152 M95,140 L125,156 M80,150 L115,155" stroke="#5C1D1D" stroke-width="1.5" stroke-linecap="round" />
          <path d="M135,148 Q150,140 155,144 Q160,148 152,152 Z" fill="#EFE7BC" stroke="#5C1D1D" stroke-width="1.5" />
          <rect x="50" y="95" width="10" height="35" fill="#F875AA" rx="2" />
          <path d="M55,95 Q55,87 56,87 Q57,87 55,95" stroke="#F9D949" stroke-width="2" fill="#FFB000" />
        </svg>`,
        segmented: [
          { text: "d", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "nn", type: "consonant" },
          { text: "er", type: "vowel" }
        ]
      },
      {
        word: "rice",
        translation: "米飯",
        ttsWord: "rice",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#FFF3E2" />
          <path d="M95,55 Q90,45 95,35" fill="none" stroke="#DCD6CD" stroke-width="3" stroke-linecap="round" />
          <path d="M110,50 Q105,40 110,30" fill="none" stroke="#DCD6CD" stroke-width="3" stroke-linecap="round" />
          <path d="M125,55 Q120,45 125,35" fill="none" stroke="#DCD6CD" stroke-width="3" stroke-linecap="round" />
          <line x1="60" y1="110" x2="160" y2="70" stroke="#8D4B32" stroke-width="4" stroke-linecap="round" />
          <line x1="60" y1="120" x2="155" y2="78" stroke="#8D4B32" stroke-width="4" stroke-linecap="round" />
          <path d="M50,110 Q50,170 110,170 Q170,170 170,110 Z" fill="#6499E9" stroke="#3A4D39" stroke-width="4" />
          <rect x="90" y="170" width="40" height="10" rx="3" fill="#6499E9" stroke="#3A4D39" stroke-width="4" />
          <path d="M50,110 C50,80 80,70 110,70 C140,70 170,80 170,110 Z" fill="#FFFFFF" stroke="#3A4D39" stroke-width="4" />
          <circle cx="95" cy="135" r="3" fill="#3A4D39" />
          <circle cx="125" cy="135" r="3" fill="#3A4D39" />
          <path d="M106,143 Q110,147 114,143" stroke="#3A4D39" stroke-width="2.5" fill="none" stroke-linecap="round" />
          <ellipse cx="87" cy="138" rx="4" ry="2" fill="#FF8E9E" />
          <ellipse cx="133" cy="138" rx="4" ry="2" fill="#FF8E9E" />
        </svg>`,
        segmented: [
          { text: "r", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "c", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "bread",
        translation: "麵包",
        ttsWord: "bread",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#FAF0D7" />
          <ellipse cx="110" cy="175" rx="65" ry="12" fill="#E8D2A6" opacity="0.6" />
          <path d="M60,110 C60,65 90,60 110,60 C130,60 160,65 160,110 C160,150 150,170 145,170 L75,170 C70,170 60,150 60,110 Z" fill="#C58940" stroke="#8E5417" stroke-width="4.5" />
          <path d="M66,112 C66,73 92,68 110,68 C128,68 154,73 154,112 C154,148 145,164 140,164 L80,164 C75,164 66,148 66,112 Z" fill="#F4EAD4" />
          <rect x="98" y="85" width="24" height="20" rx="3" fill="#FFD93D" stroke="#E2B714" stroke-width="2.5" transform="rotate(10 110 95)" />
          <path d="M102,106 Q107,118 112,107" fill="none" stroke="#FFD93D" stroke-width="4.5" stroke-linecap="round" />
          <circle cx="92" cy="130" r="3.5" fill="#8E5417" />
          <circle cx="128" cy="130" r="3.5" fill="#8E5417" />
          <path d="M106,138 Q110,143 114,138" stroke="#8E5417" stroke-width="3" fill="none" stroke-linecap="round" />
          <circle cx="84" cy="133" r="3.5" fill="#FFB3B3" opacity="0.9" />
          <circle cx="136" cy="133" r="3.5" fill="#FFB3B3" opacity="0.9" />
        </svg>`,
        segmented: [
          { text: "br", type: "blend" },
          { text: "ea", type: "vowel" },
          { text: "d", type: "consonant" }
        ]
      },
      {
        word: "soup",
        translation: "湯",
        ttsWord: "soup",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#EEF1FF" />
          <path d="M95,55 Q90,42 97,30" fill="none" stroke="#B1B2FF" stroke-width="3" stroke-linecap="round" />
          <path d="M115,50 Q110,38 117,25" fill="none" stroke="#B1B2FF" stroke-width="3" stroke-linecap="round" />
          <path d="M135,55 Q130,42 137,30" fill="none" stroke="#B1B2FF" stroke-width="3" stroke-linecap="round" />
          <path d="M165,70 L140,105 Q135,110 130,107 L127,104 Q125,99 130,95 L155,60 Z" fill="#E8F9FD" stroke="#4D96FF" stroke-width="3.5" />
          <path d="M40,110 Q40,175 110,175 Q180,175 180,110 Z" fill="#FFD2D7" stroke="#FF8E9E" stroke-width="4.5" />
          <rect x="85" y="175" width="50" height="10" rx="3" fill="#FFD2D7" stroke="#FF8E9E" stroke-width="4.5" />
          <ellipse cx="110" cy="110" rx="70" ry="18" fill="#FFE2C0" stroke="#FF8E9E" stroke-width="4.5" />
          <circle cx="90" cy="112" r="3" fill="#6BCB77" />
          <circle cx="130" cy="108" r="2.5" fill="#6BCB77" />
          <circle cx="108" cy="115" r="3.5" fill="#FF6B6B" />
          <path d="M85,138 Q90,135 95,138" stroke="#4A4A4A" stroke-width="3" fill="none" stroke-linecap="round" />
          <path d="M125,138 Q130,135 135,138" stroke="#4A4A4A" stroke-width="3" fill="none" stroke-linecap="round" />
          <path d="M106,146 Q110,152 114,146" stroke="#4A4A4A" stroke-width="3.5" fill="none" stroke-linecap="round" />
        </svg>`,
        segmented: [
          { text: "s", type: "consonant" },
          { text: "ou", type: "vowel" },
          { text: "p", type: "consonant" }
        ]
      },
      {
        word: "chicken",
        translation: "雞肉",
        ttsWord: "chicken",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#E8F9FD" />
          <ellipse cx="110" cy="155" rx="75" ry="22" fill="#FFFFFF" stroke="#B2C8DF" stroke-width="3.5" />
          <ellipse cx="110" cy="155" rx="60" ry="15" fill="#F5F9FC" />
          <path d="M65,115 C50,110 50,85 75,75 C95,65 125,80 145,100 C155,110 160,122 145,130 C130,138 115,135 95,135 C80,135 70,122 65,115 Z" fill="#E28F23" stroke="#8E5417" stroke-width="4.5" />
          <path d="M142,105 L170,125 C173,127 175,123 172,120 L160,111" stroke="#8E5417" stroke-width="4.5" stroke-linecap="round" />
          <path d="M165,112 C170,108 178,112 178,118 C178,124 170,128 165,123 C160,128 152,124 152,118 C152,112 160,108 165,112 Z" fill="#FFFFFF" stroke="#8E5417" stroke-width="3" />
          <circle cx="85" cy="95" r="2" fill="#C58940" />
          <circle cx="100" cy="115" r="1.5" fill="#C58940" />
          <circle cx="115" cy="90" r="2.5" fill="#C58940" />
          <circle cx="125" cy="110" r="2" fill="#C58940" />
          <path d="M50,55 L52,50 L56,48 L52,46 L50,41 L48,46 L44,48 L48,50 Z" fill="#FFD93D" />
          <path d="M175,65 L177,61 L181,60 L177,59 L175,55 L173,59 L169,60 L173,61 Z" fill="#FFD93D" />
        </svg>`,
        segmented: [
          { text: "ch", type: "digraph" },
          { text: "i", type: "vowel" },
          { text: "ck", type: "digraph" },
          { text: "e", type: "vowel" },
          { text: "n", type: "consonant" }
        ]
      },
      {
        word: "lunch",
        translation: "午餐",
        ttsWord: "lunch",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#F8E8EE" />
          <rect x="40" y="60" width="140" height="110" rx="15" fill="#F05A7E" stroke="#5F0F40" stroke-width="4.5" />
          <rect x="46" y="66" width="128" height="98" rx="10" fill="#FFD8A9" stroke="#5F0F40" stroke-width="3" />
          <line x1="110" y1="66" x2="110" y2="164" stroke="#5F0F40" stroke-width="3" />
          <path d="M55,145 L55,85 L100,120 Z" fill="#FFFFFF" stroke="#5F0F40" stroke-width="3" />
          <path d="M52,148 L52,82 L103,120 Z" fill="none" stroke="#C58940" stroke-width="3" stroke-linecap="round" />
          <path d="M70,100 C73,95 78,95 80,102 C82,105 85,108 90,105" fill="none" stroke="#6BCB77" stroke-width="4.5" stroke-linecap="round" />
          <circle cx="130" cy="95" r="14" fill="#FFD8A9" stroke="#5F0F40" stroke-width="3" />
          <circle cx="126" cy="91" r="3" fill="#FFFFFF" opacity="0.8" />
          <path d="M150,140 Q150,125 140,125 Q130,125 132,140 Z" fill="#6BCB77" stroke="#5F0F40" stroke-width="3" />
          <path d="M130,120 C130,110 145,105 150,115 C155,105 170,110 170,120 C170,130 160,135 150,132 C140,135 130,130 130,120 Z" fill="#4E9F3D" stroke="#5F0F40" stroke-width="2.5" />
        </svg>`,
        segmented: [
          { text: "l", type: "consonant" },
          { text: "u", type: "vowel" },
          { text: "n", type: "consonant" },
          { text: "ch", type: "digraph" }
        ]
      },
      {
        word: "would like",
        translation: "想要",
        ttsWord: "would like",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#E1ECC8" />
          <circle cx="65" cy="150" r="35" fill="#FFFFFF" stroke="#4E9F3D" stroke-width="4" />
          <circle cx="78" cy="138" r="3.5" fill="#4E9F3D" />
          <circle cx="92" cy="144" r="3.5" fill="#4E9F3D" />
          <circle cx="72" cy="146" r="4" fill="#FF8E9E" opacity="0.8" />
          <circle cx="96" cy="153" r="4" fill="#FF8E9E" opacity="0.8" />
          <circle cx="84" cy="149" r="4" fill="#FFB7B2" stroke="#4E9F3D" stroke-width="2" />
          <circle cx="115" cy="115" r="5" fill="#FFFFFF" stroke="#4E9F3D" stroke-width="2.5" />
          <circle cx="130" cy="95" r="8" fill="#FFFFFF" stroke="#4E9F3D" stroke-width="2.5" />
          <path d="M140,75 C130,75 125,60 145,50 C155,40 180,45 185,55 C195,55 200,70 190,80 C195,90 180,100 170,95 C160,102 145,95 140,75 Z" fill="#FFFFFF" stroke="#4E9F3D" stroke-width="3" />
          <path d="M165,72 C160,65 150,65 150,75 C150,85 165,95 165,95 C165,95 180,85 180,75 C180,65 170,65 165,72 Z" fill="#FF6B6B" stroke="#B20606" stroke-width="1.5" />
        </svg>`,
        segmented: [
          { text: "w", type: "consonant" },
          { text: "ou", type: "vowel" },
          { text: "l", type: "consonant" },
          { text: "d", type: "consonant" },
          { text: " ", type: "space" },
          { text: "l", type: "consonant" },
          { text: "i", type: "vowel" },
          { text: "k", type: "consonant" },
          { text: "e", type: "vowel" }
        ]
      },
      {
        word: "noodles",
        translation: "麵",
        ttsWord: "noodles",
        svg: `<svg viewBox="0 0 220 220" width="100%" height="100%">
          <rect width="220" height="220" rx="24" fill="#FFF5E4" />
          <path d="M90,65 Q85,52 92,40" fill="none" stroke="#D3C5B5" stroke-width="3" stroke-linecap="round" />
          <path d="M110,60 Q105,47 112,35" fill="none" stroke="#D3C5B5" stroke-width="3" stroke-linecap="round" />
          <line x1="85" y1="40" x2="165" y2="70" stroke="#8D4B32" stroke-width="4.5" stroke-linecap="round" />
          <line x1="80" y1="52" x2="165" y2="78" stroke="#8D4B32" stroke-width="4.5" stroke-linecap="round" />
          <path d="M102,60 Q102,90 100,105 M110,64 Q112,92 114,105 M120,68 Q118,92 116,105" fill="none" stroke="#FFCC1D" stroke-width="4" stroke-linecap="round" />
          <path d="M50,115 Q50,175 110,175 Q170,175 170,115 Z" fill="#FF6B6B" stroke="#B20606" stroke-width="4.5" />
          <rect x="85" y="175" width="50" height="10" rx="3" fill="#FF6B6B" stroke="#B20606" stroke-width="4.5" />
          <ellipse cx="110" cy="115" rx="60" ry="15" fill="#FFE3A8" stroke="#B20606" stroke-width="4.5" />
          <path d="M65,115 Q75,125 90,118 Q105,110 120,122 Q135,120 155,115" fill="none" stroke="#FFCC1D" stroke-width="3.5" stroke-linecap="round" />
          <path d="M75,118 Q90,128 110,120 Q130,115 145,122" fill="none" stroke="#FFCC1D" stroke-width="3.5" stroke-linecap="round" />
          <circle cx="95" cy="142" r="3" fill="#FFFFFF" />
          <circle cx="125" cy="142" r="3" fill="#FFFFFF" />
          <path d="M106,148 Q110,152 114,148" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round" />
        </svg>`,
        segmented: [
          { text: "n", type: "consonant" },
          { text: "oo", type: "vowel" },
          { text: "d", type: "consonant" },
          { text: "l", type: "consonant" },
          { text: "e", type: "vowel" },
          { text: "s", type: "consonant" }
        ]
      }
    ]
  }
};

// Application State
let currentLesson = 1;
let currentIndex = 0;
let isAutoplayActive = false;
let autoplayTimer = null;
let voices = [];

// DOM Elements
const cardEl = document.getElementById("flashcard");
const cardImageContainer = document.getElementById("card-image-container");
const wordContainerEl = document.getElementById("word-container");
const translationTextEl = document.getElementById("translation-text");
const dotsContainerEl = document.getElementById("dots-indicators");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSubtitleEl = document.getElementById("lesson-subtitle");

const btnPrev = document.getElementById("btn-prev");
const btnSpeak = document.getElementById("btn-speak");
const btnAutoplay = document.getElementById("btn-autoplay");
const btnNext = document.getElementById("btn-next");
const autoplayTextEl = document.getElementById("autoplay-text");
const autoplayIconEl = document.getElementById("autoplay-icon");

// Lesson Tab Buttons
const lessonTabs = {
  1: document.getElementById("tab-lesson-1"),
  2: document.getElementById("tab-lesson-2"),
  3: document.getElementById("tab-lesson-3"),
  4: document.getElementById("tab-lesson-4")
};

// Initialize Application
function init() {
  initVoices();
  setupLessonTabs();
  setupEventListeners();
  loadLesson(1);
}

// Speech voices setup
function initVoices() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    voices = window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
      };
    }
  }
}

// Setup Lesson Tabs
function setupLessonTabs() {
  Object.keys(lessonTabs).forEach((num) => {
    const lessonNum = parseInt(num);
    const tabEl = lessonTabs[lessonNum];
    if (tabEl) {
      tabEl.addEventListener("click", () => {
        if (currentLesson !== lessonNum) {
          loadLesson(lessonNum);
        }
      });
    }
  });
}

// Load Selected Lesson
function loadLesson(lessonNum) {
  if (isAutoplayActive) stopAutoplay();
  
  // Update Active Tab UI
  Object.keys(lessonTabs).forEach((num) => {
    const tabEl = lessonTabs[num];
    if (tabEl) {
      if (parseInt(num) === lessonNum) {
        tabEl.classList.add("active");
      } else {
        tabEl.classList.remove("active");
      }
    }
  });

  currentLesson = lessonNum;
  currentIndex = 0;

  // Set titles
  const lessonData = lessons[currentLesson];
  lessonTitleEl.textContent = lessonData.title;
  lessonSubtitleEl.textContent = lessonData.subtitle;

  // Render first card and recreate dots
  createIndicators();
  renderCard(currentIndex);
}

// Render Card Content
function renderCard(index) {
  const lessonData = lessons[currentLesson];
  const cardData = lessonData.cards[index];
  
  // Apply a clean fade/transition
  cardEl.classList.remove("fade-in");
  cardEl.classList.add("fade-out");
  
  setTimeout(() => {
    // Render image or inline SVG
    if (cardData.svg) {
      cardImageContainer.innerHTML = cardData.svg;
    } else if (cardData.image) {
      cardImageContainer.innerHTML = `<img src="${cardData.image}" alt="${cardData.word} illustration" class="card-image">`;
    } else {
      cardImageContainer.innerHTML = "";
    }
    
    // Render phonics segmented word
    wordContainerEl.innerHTML = "";
    cardData.segmented.forEach((segment) => {
      const span = document.createElement("span");
      
      if (segment.type === "space") {
        span.className = "word-letter space";
        span.innerHTML = "&nbsp;";
      } else {
        span.className = `word-letter ${segment.type}`;
        
        // Split text into characters to style 'J' with a top-bar (Comic Neue style)
        const chars = Array.from(segment.text);
        chars.forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          if (char === 'J') {
            charSpan.style.fontFamily = "'Comic Neue', 'Comic Sans MS', 'Georgia', serif";
            charSpan.style.display = "inline-block";
          }
          span.appendChild(charSpan);
        });
        
        // Children click individual letter segments to hear phoneme sounds
        span.title = `點擊發音 "${segment.text}"`;
        span.addEventListener("click", (e) => {
          e.stopPropagation(); // Prevent card body click from reading full word
          // Speak segment slightly slower and higher pitch for phonetics
          speakWord(segment.text, 1.25, 0.7);
        });
      }
      
      wordContainerEl.appendChild(span);
    });
    
    // Render translation
    translationTextEl.textContent = cardData.translation;
    
    // Update active dot indicator
    updateDots(index);
    
    // Trigger fade in
    cardEl.classList.remove("fade-out");
    cardEl.classList.add("fade-in");
    
    // Speak current word
    speakCurrentWord();
  }, 200);
}

// Create Dot Indicators
function createIndicators() {
  dotsContainerEl.innerHTML = "";
  const lessonData = lessons[currentLesson];
  lessonData.cards.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.className = `dot ${idx === currentIndex ? 'active' : ''}`;
    dot.setAttribute("aria-label", `移至第 ${idx + 1} 張字卡`);
    dot.addEventListener("click", () => {
      if (isAutoplayActive) stopAutoplay();
      currentIndex = idx;
      renderCard(currentIndex);
    });
    dotsContainerEl.appendChild(dot);
  });
}

// Update Dots
function updateDots(index) {
  const dots = dotsContainerEl.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Speak Voice Synthesis (Web Speech API)
function speakWord(text, pitch = 1.15, rate = 0.85) {
  if (!('speechSynthesis' in window)) return;
  
  // Cancel current speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = rate; // Kid-friendly: slightly slower
  utterance.pitch = pitch; // Kid-friendly: slightly higher pitch
  
  // Attempt to select a high quality natural US English voice
  let selectedVoice = voices.find(voice => voice.lang.includes("en-US") && !voice.name.includes("Google"));
  if (!selectedVoice) {
    selectedVoice = voices.find(voice => voice.lang.includes("en"));
  }
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  
  window.speechSynthesis.speak(utterance);
}

// Speak the current card's full word
function speakCurrentWord() {
  const lessonData = lessons[currentLesson];
  const cardData = lessonData.cards[currentIndex];
  const ttsText = cardData.ttsWord || cardData.word;
  speakWord(ttsText);
}

// Navigation Functions
function nextCard() {
  const lessonData = lessons[currentLesson];
  currentIndex = (currentIndex + 1) % lessonData.cards.length;
  renderCard(currentIndex);
}

// Prev Card
function prevCard() {
  const lessonData = lessons[currentLesson];
  currentIndex = (currentIndex - 1 + lessonData.cards.length) % lessonData.cards.length;
  renderCard(currentIndex);
}

// Autoplay Slideshow
function startAutoplay() {
  isAutoplayActive = true;
  btnAutoplay.classList.add("active");
  autoplayTextEl.textContent = "停止播放";
  autoplayIconEl.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  
  speakCurrentWord();
  
  autoplayTimer = setInterval(() => {
    nextCard();
  }, 4000);
}

// Stop Autoplay
function stopAutoplay() {
  isAutoplayActive = false;
  btnAutoplay.classList.remove("active");
  autoplayTextEl.textContent = "自動播放";
  autoplayIconEl.innerHTML = `<path d="M8 5v14l11-7z"/>`;
  
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

// Toggle Autoplay
function toggleAutoplay() {
  if (isAutoplayActive) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

// Event Listeners Setup
function setupEventListeners() {
  btnNext.addEventListener("click", () => {
    if (isAutoplayActive) stopAutoplay();
    nextCard();
  });
  
  btnPrev.addEventListener("click", () => {
    if (isAutoplayActive) stopAutoplay();
    prevCard();
  });
  
  btnSpeak.addEventListener("click", () => {
    speakCurrentWord();
  });
  
  btnAutoplay.addEventListener("click", () => {
    toggleAutoplay();
  });
  
  cardEl.addEventListener("click", (e) => {
    // Avoid triggering full speech if a child span (phoneme) was clicked
    if (e.target.closest('.word-letter') && !e.target.closest('.space')) return;
    speakCurrentWord();
  });
  
  // Keyboard Navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      if (isAutoplayActive) stopAutoplay();
      nextCard();
    } else if (e.key === "ArrowLeft") {
      if (isAutoplayActive) stopAutoplay();
      prevCard();
    } else if (e.key === " " || e.code === "Space") {
      e.preventDefault(); // Stop page scrolling
      speakCurrentWord();
    } else if (e.key === "Enter") {
      e.preventDefault();
      speakCurrentWord();
    }
  });
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", init);
