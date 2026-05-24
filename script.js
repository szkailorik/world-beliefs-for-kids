const cards = [
  {
    id: 1,
    category: "safe",
    icon: "shield",
    scene: "shelter",
    color: "#2f7d58",
    title: "世界大体安全",
    titleEn: "The world is mostly safe",
    line: "我可以放心探索，但世界不是只围着我转。",
    lineEn: "I can explore with trust, but the world does not revolve around me.",
  },
  {
    id: 2,
    category: "safe",
    icon: "boundary",
    scene: "boundary",
    color: "#386fa4",
    title: "善意也有边界",
    titleEn: "Kindness has boundaries",
    line: "大多数人愿意友好，但我可以说“不”。",
    lineEn: "Most people want to be kind, and I can still say no.",
  },
  {
    id: 3,
    category: "safe",
    icon: "home",
    scene: "home",
    color: "#8a5a3b",
    title: "家是可靠基地",
    titleEn: "Home is a steady base",
    line: "爸爸妈妈会爱我，也会有自己的事情。",
    lineEn: "Mom and Dad love me, and they have their own things to do.",
  },
  {
    id: 4,
    category: "safe",
    icon: "person",
    scene: "important",
    color: "#ba4a62",
    title: "我重要，但不是唯一",
    titleEn: "I matter, but I am not the only one",
    line: "我的感受重要，别人的感受也重要。",
    lineEn: "My feelings matter, and other people's feelings matter too.",
  },
  {
    id: 5,
    category: "wonder",
    icon: "cause",
    scene: "cause",
    color: "#2f8f9d",
    title: "事情有原因",
    titleEn: "Things have reasons",
    line: "很多事不是“就是这样”，可以慢慢找原因。",
    lineEn: "Many things are not just because; we can look for reasons slowly.",
  },
  {
    id: 6,
    category: "wonder",
    icon: "info",
    scene: "clue",
    color: "#e3a322",
    title: "错误是信息",
    titleEn: "Mistakes are information",
    line: "错了说明我发现了一条线索，不是我很糟糕。",
    lineEn: "A mistake means I found a clue, not that I am bad.",
  },
  {
    id: 7,
    category: "alive",
    icon: "growth",
    scene: "growth",
    color: "#4f8b42",
    title: "能力会长大",
    titleEn: "Abilities can grow",
    line: "练习、方法和时间，会让本领一点点长出来。",
    lineEn: "Practice, good methods, and time help skills grow bit by bit.",
  },
  {
    id: 8,
    category: "wonder",
    icon: "question",
    scene: "question",
    color: "#386fa4",
    title: "不懂可以问",
    titleEn: "It is okay to ask",
    line: "提问不是丢脸，是大脑在开灯。",
    lineEn: "Asking is not shameful; it turns the light on in my brain.",
  },
  {
    id: 9,
    category: "wonder",
    icon: "scale",
    scene: "truth",
    color: "#5b6270",
    title: "事实比面子重要",
    titleEn: "Facts matter more than pride",
    line: "真相能帮我们修正，面子不能解决问题。",
    lineEn: "Truth helps us adjust; pride cannot solve the problem.",
  },
  {
    id: 10,
    category: "safe",
    icon: "fork",
    scene: "choice",
    color: "#a45c3c",
    title: "选择有后果",
    titleEn: "Choices have consequences",
    line: "我可以选择，也要接住选择带来的结果。",
    lineEn: "I can choose, and I also need to accept what follows.",
  },
  {
    id: 11,
    category: "safe",
    icon: "resource",
    scene: "resource",
    color: "#2f7d58",
    title: "资源要取舍",
    titleEn: "Resources need trade-offs",
    line: "时间、钱和力气都有限，所以要学会选择。",
    lineEn: "Time, money, and energy are limited, so I learn to choose.",
  },
  {
    id: 12,
    category: "safe",
    icon: "coin",
    scene: "money",
    color: "#b1842e",
    title: "金钱是工具",
    titleEn: "Money is a tool",
    line: "钱能帮我们做事，但不能决定一个人的价值。",
    lineEn: "Money helps us do things, but it does not decide a person's worth.",
  },
  {
    id: 13,
    category: "alive",
    icon: "heartBoundary",
    scene: "feeling",
    color: "#ba4a62",
    title: "感受是真的",
    titleEn: "Feelings are real",
    line: "别人的难过是真的，但不是所有情绪都要我负责。",
    lineEn: "Other people's sadness is real, but I am not responsible for every feeling.",
  },
  {
    id: 14,
    category: "safe",
    icon: "rules",
    scene: "rules",
    color: "#386fa4",
    title: "规则保护大家",
    titleEn: "Rules protect everyone",
    line: "规则不是为了压我，是让大家能一起玩下去。",
    lineEn: "Rules are not here to press me down; they help everyone keep playing together.",
  },
  {
    id: 15,
    category: "alive",
    icon: "pulse",
    scene: "signal",
    color: "#2f8f9d",
    title: "身体和情绪是信号",
    titleEn: "Body and feelings are signals",
    line: "累、怕、生气都在提醒我，不是敌人。",
    lineEn: "Tired, scared, and angry are reminders, not enemies.",
  },
  {
    id: 16,
    category: "wonder",
    icon: "focus",
    scene: "focus",
    color: "#5b6270",
    title: "注意力很宝贵",
    titleEn: "Attention is precious",
    line: "我看哪里、想哪里，时间就流向哪里。",
    lineEn: "Where I look and think is where my time flows.",
  },
  {
    id: 17,
    category: "wonder",
    icon: "globe",
    scene: "horizon",
    color: "#2f8f9d",
    title: "世界比我看到的大",
    titleEn: "The world is bigger than what I see",
    line: "我现在看到的，只是世界的一小块。",
    lineEn: "What I see now is only a small piece of the world.",
  },
  {
    id: 18,
    category: "alive",
    icon: "hands",
    scene: "together",
    color: "#4f8b42",
    title: "合作更强",
    titleEn: "Cooperation is stronger",
    line: "很多事一起做，会比一个人硬扛更好。",
    lineEn: "Many things go better together than by pushing alone.",
  },
  {
    id: 19,
    category: "wonder",
    icon: "compass",
    scene: "curiosity",
    color: "#e3a322",
    title: "好奇比表现重要",
    titleEn: "Curiosity matters more than performance",
    line: "想弄明白，比装作很厉害更有力量。",
    lineEn: "Wanting to understand is more powerful than pretending to be great.",
  },
  {
    id: 20,
    category: "alive",
    icon: "worldHeart",
    scene: "change",
    color: "#2f7d58",
    title: "我能爱，也能改变世界",
    titleEn: "I can love and change the world",
    line: "我可以珍惜这个世界，也可以让它变好一点。",
    lineEn: "I can care for the world and make it a little better.",
  },
];

const categoryNames = {
  safe: "安全 / Safe",
  wonder: "精彩 / Wonder",
  alive: "有回应 / Responsive",
};

const grid = document.querySelector("#cards");
const dialog = document.querySelector("#cardDialog");
const dialogVisual = document.querySelector("#dialogVisual");
const dialogKicker = document.querySelector("#dialogKicker");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogTitleEn = document.querySelector("#dialogTitleEn");
const dialogLine = document.querySelector("#dialogLine");
const dialogLineEn = document.querySelector("#dialogLineEn");
const closeDialog = document.querySelector("#closeDialog");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const randomCard = document.querySelector("#randomCard");
const resetDone = document.querySelector("#resetDone");
const prevCard = document.querySelector("#prevCard");
const nextCard = document.querySelector("#nextCard");
const dialogDone = document.querySelector("#dialogDone");
const filterSegments = [...document.querySelectorAll("[data-filter]")];
const languageSegments = [...document.querySelectorAll("[data-language]")];
const doneKey = "world-belief-done";
const languageModeKey = "world-belief-language-mode";
let done = readDone();
let activeFilter = "all";
let languageMode = localStorage.getItem(languageModeKey) || "bilingual";
let currentCard = null;

function icon(name) {
  const icons = {
    shield:
      '<path d="M12 2.8 20 6v5.8c0 4.8-3.4 8.4-8 10-4.6-1.6-8-5.2-8-10V6l8-3.2Z"></path><path d="m8.2 12.2 2.4 2.4 5.2-5.6"></path>',
    boundary:
      '<circle cx="12" cy="12" r="7.4"></circle><path d="M5.8 15.8 18.2 8.2"></path>',
    home:
      '<path d="M3.8 11.2 12 4l8.2 7.2"></path><path d="M6.2 10.2v9h11.6v-9"></path><path d="M10 19.2v-5h4v5"></path>',
    person:
      '<circle cx="12" cy="7.4" r="3"></circle><path d="M5.5 20.5c1-4 3.2-6 6.5-6s5.5 2 6.5 6"></path><path d="M3.8 12h4"></path><path d="M16.2 12h4"></path>',
    cause:
      '<circle cx="7.2" cy="8" r="2.8"></circle><circle cx="16.8" cy="16" r="2.8"></circle><path d="M9.5 9.9 14.5 14.1"></path><path d="M11.3 5.3h7.5v7.5"></path>',
    info:
      '<circle cx="12" cy="12" r="8"></circle><path d="M12 10.8v5.8"></path><path d="M12 7.4h.01"></path>',
    growth:
      '<path d="M12 21V10"></path><path d="M12 12c-4.5-.5-7.4-3.3-8.5-8 5.2 0 8.5 2.7 8.5 8Z"></path><path d="M13 16c4.5-.5 7.4-3.3 7.5-8-5.2 0-7.5 3.1-7.5 8Z"></path>',
    question:
      '<path d="M8.2 8.4c.3-2.4 1.9-4 4.3-4 2.2 0 3.8 1.4 3.8 3.4 0 2.8-3 3.1-3.8 5.2"></path><path d="M12.4 18.8h.01"></path><circle cx="12" cy="12" r="9"></circle>',
    scale:
      '<path d="M12 4v16"></path><path d="M5.5 7h13"></path><path d="M7 7l-3 6h6L7 7Z"></path><path d="M17 7l-3 6h6l-3-6Z"></path><path d="M8.5 20h7"></path>',
    fork:
      '<path d="M12 21V4"></path><path d="M12 10c0-3 2-5 5-5h2"></path><path d="m17 2 3 3-3 3"></path><path d="M12 14c0-3-2-5-5-5H5"></path><path d="m7 6-3 3 3 3"></path>',
    resource:
      '<rect x="4" y="5" width="16" height="14" rx="2.5"></rect><path d="M8 9h8"></path><path d="M8 13h5"></path><path d="M16.5 16.5 20.5 20.5"></path>',
    coin:
      '<circle cx="12" cy="12" r="7.5"></circle><path d="M12 7.5v9"></path><path d="M9.7 9.5c.6-.8 1.4-1.2 2.5-1.2 1.4 0 2.3.7 2.3 1.8 0 2.5-4.8 1.5-4.8 4 0 1 .9 1.7 2.3 1.7 1.2 0 2.1-.4 2.8-1.2"></path>',
    heartBoundary:
      '<path d="M12 19.5s-7-4.1-7-9.2c0-2.3 1.5-4 3.6-4 1.4 0 2.6.8 3.4 2 .8-1.2 2-2 3.4-2 2.1 0 3.6 1.7 3.6 4 0 5.1-7 9.2-7 9.2Z"></path><path d="M4.5 21 19.5 3"></path>',
    rules:
      '<path d="M7 4.5h10a2 2 0 0 1 2 2v13H7a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z"></path><path d="M8.5 9h7"></path><path d="M8.5 13h7"></path><path d="M8.5 17h4"></path>',
    pulse:
      '<path d="M3.5 12h4l2-5 4.2 10 2-5H20.5"></path><circle cx="12" cy="12" r="8.5"></circle>',
    focus:
      '<circle cx="12" cy="12" r="3"></circle><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><path d="M5.6 5.6l2.2 2.2"></path><path d="M16.2 16.2l2.2 2.2"></path><path d="M18.4 5.6l-2.2 2.2"></path><path d="M7.8 16.2l-2.2 2.2"></path>',
    globe:
      '<circle cx="12" cy="12" r="8.5"></circle><path d="M3.8 12h16.4"></path><path d="M12 3.5c2.5 2.3 3.8 5.1 3.8 8.5s-1.3 6.2-3.8 8.5"></path><path d="M12 3.5c-2.5 2.3-3.8 5.1-3.8 8.5s1.3 6.2 3.8 8.5"></path>',
    hands:
      '<path d="M7.5 13.5 4.8 11a2 2 0 0 1 2.8-2.9L12 12.2"></path><path d="M16.5 13.5 19.2 11a2 2 0 0 0-2.8-2.9L12 12.2"></path><path d="M7.3 13.3 12 18l4.7-4.7"></path>',
    compass:
      '<circle cx="12" cy="12" r="8.5"></circle><path d="m15.7 8.3-2.2 5.2-5.2 2.2 2.2-5.2 5.2-2.2Z"></path>',
    worldHeart:
      '<circle cx="12" cy="12" r="8.5"></circle><path d="M8.5 11.2c0-1.1.8-2 1.9-2 .7 0 1.3.4 1.6 1 .3-.6.9-1 1.6-1 1.1 0 1.9.9 1.9 2 0 2.4-3.5 4.4-3.5 4.4s-3.5-2-3.5-4.4Z"></path><path d="M3.8 12h2.8"></path><path d="M17.4 12h2.8"></path>',
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
}

function saveDone() {
  localStorage.setItem(doneKey, JSON.stringify([...done]));
}

function readDone() {
  try {
    const saved = JSON.parse(localStorage.getItem(doneKey) || "[]");
    return new Set(saved.filter((id) => cards.some((card) => card.id === id)));
  } catch {
    return new Set();
  }
}

function visibleCards() {
  return activeFilter === "all"
    ? cards
    : cards.filter((card) => card.category === activeFilter);
}

function randomPool() {
  const pool = visibleCards();
  const unspoken = pool.filter((card) => !done.has(card.id));
  return unspoken.length > 0 ? unspoken : pool;
}

function cardNode(card) {
  return document.querySelector(`.belief-card[data-id="${card.id}"]`);
}

function updateDialogDone() {
  if (!currentCard) {
    return;
  }

  const isDone = done.has(currentCard.id);
  dialogDone.classList.toggle("is-done", isDone);
  dialogDone.setAttribute("aria-pressed", String(isDone));
  dialogDone.setAttribute("aria-label", isDone ? "取消标记已讲" : "标记已讲");
}

function toggleDone(card) {
  if (done.has(card.id)) {
    done.delete(card.id);
  } else {
    done.add(card.id);
  }

  saveDone();
  renderCards();
  updateDialogDone();
}

function updateProgress() {
  const percent = Math.round((done.size / cards.length) * 100);
  progressText.textContent =
    languageMode === "zh"
      ? `已讲 ${done.size} / ${cards.length} 张`
      : `已讲 ${done.size} / ${cards.length} 张 · ${done.size} / ${cards.length} discussed`;
  progressFill.style.width = `${percent}%`;
  resetDone.disabled = done.size === 0;
}

function applyLanguageMode() {
  document.body.classList.toggle("is-chinese-only", languageMode === "zh");
  languageSegments.forEach((segment) => {
    const isActive = segment.dataset.language === languageMode;
    segment.classList.toggle("is-active", isActive);
    segment.setAttribute("aria-pressed", String(isActive));
  });
  updateProgress();
}

function openCard(card) {
  currentCard = card;
  dialog.style.setProperty("--dialog-color", card.color);
  dialogVisual.className = `dialog-visual card-scene card-scene--${card.scene}`;
  dialogVisual.style.setProperty("--card-color", card.color);
  dialogVisual.innerHTML = `<div class="card-visual">${icon(card.icon)}</div>`;
  dialogKicker.textContent = `${String(card.id).padStart(2, "0")} · ${categoryNames[card.category]}`;
  dialogTitle.textContent = card.title;
  dialogTitleEn.textContent = card.titleEn;
  dialogLine.textContent = card.line;
  dialogLineEn.textContent = card.lineEn;
  updateDialogDone();

  if (typeof dialog.showModal === "function" && !dialog.open) {
    dialog.showModal();
  } else if (!dialog.open) {
    dialog.setAttribute("open", "");
  }
}

function moveDialog(offset) {
  const pool = visibleCards();
  const index = pool.findIndex((card) => card.id === currentCard?.id);
  const baseIndex = index === -1 ? 0 : index;
  const nextIndex = (baseIndex + offset + pool.length) % pool.length;
  openCard(pool[nextIndex]);
}

function renderCards() {
  grid.innerHTML = "";

  for (const card of cards) {
    const article = document.createElement("article");
    article.className = `belief-card ${done.has(card.id) ? "is-done" : ""}`;
    article.dataset.id = card.id;
    article.dataset.category = card.category;
    article.style.setProperty("--card-color", card.color);
    article.hidden = activeFilter !== "all" && activeFilter !== card.category;

    article.innerHTML = `
      <button class="open-card-button" type="button" aria-label="打开小卡：${card.title}"></button>
      <div class="card-top">
        <span class="card-number">${String(card.id).padStart(2, "0")}</span>
        <button
          class="done-button"
          type="button"
          aria-pressed="${done.has(card.id)}"
          aria-label="${done.has(card.id) ? `取消第 ${card.id} 张已讲` : `标记第 ${card.id} 张已讲`}"
        >
          ${done.has(card.id) ? "✓" : ""}
        </button>
      </div>
      <div class="card-scene card-scene--${card.scene}">
        <div class="card-visual">${icon(card.icon)}</div>
      </div>
      <h3>${card.title}</h3>
      <p class="card-title-en">${card.titleEn}</p>
      <p class="card-line">${card.line}</p>
      <p class="card-line-en">${card.lineEn}</p>
    `;

    article.querySelector(".open-card-button").addEventListener("click", () => openCard(card));

    article.querySelector(".done-button").addEventListener("click", (event) => {
      event.stopPropagation();
      toggleDone(card);
    });

    grid.append(article);
  }

  updateProgress();
}

filterSegments.forEach((segment) => {
  segment.setAttribute("aria-pressed", String(segment.classList.contains("is-active")));

  segment.addEventListener("click", () => {
    activeFilter = segment.dataset.filter;
    filterSegments.forEach((item) => {
      const isActive = item === segment;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderCards();
  });
});

languageSegments.forEach((segment) => {
  segment.addEventListener("click", () => {
    languageMode = segment.dataset.language;
    localStorage.setItem(languageModeKey, languageMode);
    applyLanguageMode();
  });
});

randomCard.addEventListener("click", () => {
  const pool = randomPool();
  const card = pool[Math.floor(Math.random() * pool.length)];
  const node = cardNode(card);
  node?.scrollIntoView({ behavior: "smooth", block: "center" });
  setTimeout(() => openCard(card), 360);
});

resetDone.addEventListener("click", () => {
  if (done.size === 0) {
    return;
  }

  done.clear();
  saveDone();
  renderCards();
  updateDialogDone();
});

prevCard.addEventListener("click", () => moveDialog(-1));
nextCard.addEventListener("click", () => moveDialog(1));
dialogDone.addEventListener("click", () => {
  if (currentCard) {
    toggleDone(currentCard);
  }
});

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (!dialog.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveDialog(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveDialog(1);
  }
});

renderCards();
applyLanguageMode();
