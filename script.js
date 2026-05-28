const cards = [
  {
    id: 1,
    category: "safe",
    color: "#2f7d58",
    image: "assets/card-01-safe.jpg",
    imageAlt: "孩子站在桥边望向安全山谷",
    title: "世界大体安全",
    titleEn: "The world is mostly safe",
    line: "我可以放心探索，但世界不是只围着我转。",
    lineEn: "I can explore with trust, but the world does not revolve around me.",
  },
  {
    id: 2,
    category: "safe",
    color: "#386fa4",
    image: "assets/card-02-boundary.jpg",
    imageAlt: "孩子站在灯光边界和花园门旁",
    title: "善意也有边界",
    titleEn: "Kindness has boundaries",
    line: "大多数人愿意友好，但我可以说“不”。",
    lineEn: "Most people want to be kind, and I can still say no.",
  },
  {
    id: 3,
    category: "safe",
    color: "#8a5a3b",
    image: "assets/card-03-home.jpg",
    imageAlt: "孩子从温暖的家望向远方山谷",
    title: "家是可靠基地",
    titleEn: "Home is a steady base",
    line: "爸爸妈妈会爱我，也会有自己的事情。",
    lineEn: "Mom and Dad love me, and they have their own things to do.",
  },
  {
    id: 4,
    category: "safe",
    color: "#ba4a62",
    image: "assets/card-04-important.jpg",
    imageAlt: "孩子站在许多灯光组成的山坡上",
    title: "我重要，但不是唯一",
    titleEn: "I matter, but I am not the only one",
    line: "我的感受重要，别人的感受也重要。",
    lineEn: "My feelings matter, and other people's feelings matter too.",
  },
  {
    id: 5,
    category: "wonder",
    color: "#2f8f9d",
    image: "assets/card-05-reasons.jpg",
    imageAlt: "孩子沿着发光脚印寻找原因",
    title: "事情有原因",
    titleEn: "Things have reasons",
    line: "很多事不是“就是这样”，可以慢慢找原因。",
    lineEn: "Many things are not just because; we can look for reasons slowly.",
  },
  {
    id: 6,
    category: "wonder",
    color: "#e3a322",
    image: "assets/card-06-mistakes.jpg",
    imageAlt: "孩子在裂开的地图前发现线索",
    title: "错误是信息",
    titleEn: "Mistakes are information",
    line: "错了说明我发现了一条线索，不是我很糟糕。",
    lineEn: "A mistake means I found a clue, not that I am bad.",
  },
  {
    id: 7,
    category: "alive",
    color: "#4f8b42",
    image: "assets/card-07-growth.jpg",
    imageAlt: "孩子照看山路旁正在生长的藤树",
    title: "能力会长大",
    titleEn: "Abilities can grow",
    line: "练习、方法和时间，会让本领一点点长出来。",
    lineEn: "Practice, good methods, and time help skills grow bit by bit.",
  },
  {
    id: 8,
    category: "wonder",
    color: "#386fa4",
    image: "assets/card-08-questions.jpg",
    imageAlt: "孩子用灯光向远方观测台提问",
    title: "不懂可以问",
    titleEn: "It is okay to ask",
    line: "提问不是丢脸，是大脑在开灯。",
    lineEn: "Asking is not shameful; it turns the light on in my brain.",
  },
  {
    id: 9,
    category: "wonder",
    color: "#5b6270",
    image: "assets/card-09-facts.jpg",
    imageAlt: "孩子用指南针和水面倒影寻找真实路线",
    title: "事实比面子重要",
    titleEn: "Facts matter more than pride",
    line: "真相能帮我们修正，面子不能解决问题。",
    lineEn: "Truth helps us adjust; pride cannot solve the problem.",
  },
  {
    id: 10,
    category: "safe",
    color: "#a45c3c",
    image: "assets/card-10-choices.jpg",
    imageAlt: "孩子站在两条不同山路前选择",
    title: "选择有后果",
    titleEn: "Choices have consequences",
    line: "我可以选择，也要接住选择带来的结果。",
    lineEn: "I can choose, and I also need to accept what follows.",
  },
  {
    id: 11,
    category: "safe",
    color: "#2f7d58",
    image: "assets/card-11-resources.jpg",
    imageAlt: "孩子带着有限灯光跨过水中石阶",
    title: "资源要取舍",
    titleEn: "Resources need trade-offs",
    line: "时间、钱和力气都有限，所以要学会选择。",
    lineEn: "Time, money, and energy are limited, so I learn to choose.",
  },
  {
    id: 12,
    category: "safe",
    color: "#b1842e",
    image: "assets/card-12-money.jpg",
    imageAlt: "孩子用金色钥匙启动桥梁机关",
    title: "金钱是工具",
    titleEn: "Money is a tool",
    line: "钱能帮我们做事，但不能决定一个人的价值。",
    lineEn: "Money helps us do things, but it does not decide a person's worth.",
  },
  {
    id: 13,
    category: "alive",
    color: "#ba4a62",
    image: "assets/card-13-feelings.jpg",
    imageAlt: "孩子站在雨天与晴天山谷之间的灯线旁",
    title: "感受是真的",
    titleEn: "Feelings are real",
    line: "别人的难过是真的，但不是所有情绪都要我负责。",
    lineEn: "Other people's sadness is real, but I am not responsible for every feeling.",
  },
  {
    id: 14,
    category: "safe",
    color: "#386fa4",
    image: "assets/card-14-rules.jpg",
    imageAlt: "孩子们在有护栏和光线规则的场地玩耍",
    title: "规则保护大家",
    titleEn: "Rules protect everyone",
    line: "规则不是为了压我，是让大家能一起玩下去。",
    lineEn: "Rules are not here to press me down; they help everyone keep playing together.",
  },
  {
    id: 15,
    category: "alive",
    color: "#2f8f9d",
    image: "assets/card-15-signals.jpg",
    imageAlt: "孩子沿着脚印、风和微光识别身体信号",
    title: "身体和情绪是信号",
    titleEn: "Body and feelings are signals",
    line: "累、怕、生气都在提醒我，不是敌人。",
    lineEn: "Tired, scared, and angry are reminders, not enemies.",
  },
  {
    id: 16,
    category: "wonder",
    color: "#5b6270",
    image: "assets/card-16-attention.jpg",
    imageAlt: "孩子用灯光照亮一条清晰路线",
    title: "注意力很宝贵",
    titleEn: "Attention is precious",
    line: "我看哪里、想哪里，时间就流向哪里。",
    lineEn: "Where I look and think is where my time flows.",
  },
  {
    id: 17,
    category: "wonder",
    color: "#2f8f9d",
    image: "assets/card-17-world.jpg",
    imageAlt: "孩子站在山脊上眺望更大的世界",
    title: "世界比我看到的大",
    titleEn: "The world is bigger than what I see",
    line: "我现在看到的，只是世界的一小块。",
    lineEn: "What I see now is only a small piece of the world.",
  },
  {
    id: 18,
    category: "alive",
    color: "#4f8b42",
    image: "assets/card-18-cooperation.jpg",
    imageAlt: "几个孩子一起搭建发光吊桥",
    title: "合作更强",
    titleEn: "Cooperation is stronger",
    line: "很多事一起做，会比一个人硬扛更好。",
    lineEn: "Many things go better together than by pushing alone.",
  },
  {
    id: 19,
    category: "wonder",
    color: "#e3a322",
    image: "assets/card-19-curiosity.jpg",
    imageAlt: "孩子用望远镜观察隐藏的小世界",
    title: "好奇比表现重要",
    titleEn: "Curiosity matters more than performance",
    line: "想弄明白，比装作很厉害更有力量。",
    lineEn: "Wanting to understand is more powerful than pretending to be great.",
  },
  {
    id: 20,
    category: "alive",
    color: "#2f7d58",
    image: "assets/card-20-change.jpg",
    imageAlt: "孩子在桥边种下一颗发光种子",
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

function thumbImage(image) {
  return image.replace(".jpg", "-thumb.jpg");
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
  dialogVisual.className = "dialog-visual dialog-image";
  dialogVisual.innerHTML = `<img src="${card.image}" alt="${card.imageAlt}" decoding="async" />`;
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
      <div class="card-image">
        <img
          src="${thumbImage(card.image)}"
          alt="${card.imageAlt}"
          loading="lazy"
          decoding="async"
        />
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
