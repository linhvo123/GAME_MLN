// ============================================================
//  game.js — Logic điều khiển game
//  Không cần chỉnh file này khi chỉ muốn sửa câu hỏi.
//  Các hằng số cấu hình nằm ở phần CONFIG bên dưới.
// ============================================================

// ── CONFIG ──────────────────────────────────────────────────
const CONFIG = {
  maxLives:     3,       // số mạng ban đầu
  totalStages:  10,      // số ải (lấy đúng số này từ QUESTIONS)
  delayCorrect: 1200,    // ms tự động qua ải khi trả lời đúng (0 = tắt)
};
// ────────────────────────────────────────────────────────────

// ── STATE ────────────────────────────────────────────────────
const state = {
  currentQ:   0,
  lives:      CONFIG.maxLives,
  wrongCount: 0,
  answered:   false,
  questions:  [],        // sẽ được gán từ QUESTIONS (data.js)
};
// ────────────────────────────────────────────────────────────

// ── DOM HELPERS ──────────────────────────────────────────────
const $ = (id) => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) =>
    s.classList.remove("active")
  );
  $(id).classList.add("active");
}

function setHTML(id, html) {
  $(id).innerHTML = html;
}

function setText(id, text) {
  $(id).textContent = text;
}
// ────────────────────────────────────────────────────────────

// ── HUD ──────────────────────────────────────────────────────
function renderHUD() {
  const { currentQ, lives } = state;
  const total = state.questions.length;

  setText("hud-stage", `Ải ${currentQ + 1} / ${total}`);

  setText(
    "hud-lives",
    "❤️".repeat(lives) + "🖤".repeat(CONFIG.maxLives - lives)
  );

  const pct = (currentQ / total) * 100;
  $("prog-fill").style.width = pct + "%";
  setText("prog-label", `${currentQ} / ${total} ải đã vượt`);
}
// ────────────────────────────────────────────────────────────

// ── LOAD QUESTION ────────────────────────────────────────────
function loadQuestion() {
  state.answered = false;
  const q = state.questions[state.currentQ];

  renderHUD();

  setText("guardian-emoji", q.guardian);
  setText("guardian-name", q.name);
  setText("question-text", q.q);

  // render các lựa chọn
  const grid = $("options-grid");
  grid.innerHTML = "";
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className   = "opt-btn";
    btn.textContent = opt;
    btn.dataset.idx = i;
    btn.addEventListener("click", () => selectAnswer(i));
    grid.appendChild(btn);
  });

  // reset feedback & nút tiếp
  const fb = $("feedback");
  fb.className   = "feedback";
  fb.textContent = "";

  const nb = $("next-btn");
  nb.style.display = "none";
  nb.textContent   = "";
}
// ────────────────────────────────────────────────────────────

// ── SELECT ANSWER ─────────────────────────────────────────────
function selectAnswer(idx) {
  if (state.answered) return;
  state.answered = true;

  const q    = state.questions[state.currentQ];
  const btns = document.querySelectorAll(".opt-btn");

  btns.forEach((b) => (b.disabled = true));

  const fb = $("feedback");
  const nb = $("next-btn");

  if (idx === q.ans) {
    // ── ĐÚNG ──
    btns[idx].classList.add("correct");

    fb.textContent = "✅ " + q.explain;
    fb.className   = "feedback ok show";

    const isLast   = state.currentQ === state.questions.length - 1;
    nb.textContent = isLast ? "🏆 Nhận kho báu!" : "⚔️ Tiến đến ải tiếp theo →";
    nb.style.display = "block";

    // tự động chuyển nếu CONFIG.delayCorrect > 0
    if (CONFIG.delayCorrect > 0 && !isLast) {
      setTimeout(() => nextQuestion(), CONFIG.delayCorrect);
    }
  } else {
    // ── SAI ──
    btns[idx].classList.add("wrong");
    btns[q.ans].classList.add("correct");

    state.lives--;
    state.wrongCount++;
    renderHUD();

    fb.textContent = "❌ Sai rồi! " + q.explain;
    fb.className   = "feedback fail show";

    nb.textContent =
      state.lives <= 0
        ? "💀 Xem kết quả..."
        : `💔 Còn ${state.lives} mạng — tiếp tục!`;
    nb.style.display = "block";
  }
}
// ────────────────────────────────────────────────────────────

// ── NEXT ─────────────────────────────────────────────────────
function nextQuestion() {
  // hết mạng → thua
  if (state.lives <= 0) {
    setText(
      "lose-desc",
      `Bạn hết mạng tại ải ${state.currentQ + 1}. ` +
        `Chỉ vượt được ${state.currentQ} / ${state.questions.length} ải. ` +
        `Cố lên, thử lại nào!`
    );
    showScreen("screen-lose");
    return;
  }

  state.currentQ++;

  // hết câu → thắng
  if (state.currentQ >= state.questions.length) {
    const correct = state.questions.length - state.wrongCount;
    setText(
      "win-score",
      `🌟 Đúng: ${correct} / ${state.questions.length} — còn ${state.lives} mạng sót lại!`
    );
    showScreen("screen-win");
    return;
  }

  loadQuestion();
}
// ────────────────────────────────────────────────────────────

// ── START / RESTART ──────────────────────────────────────────
function startGame() {
  // shuffle câu hỏi nếu muốn ngẫu nhiên (bỏ comment dòng dưới)
  // state.questions = shuffle([...QUESTIONS]).slice(0, CONFIG.totalStages);

  state.questions  = QUESTIONS.slice(0, CONFIG.totalStages);
  state.currentQ   = 0;
  state.lives      = CONFIG.maxLives;
  state.wrongCount = 0;
  state.answered   = false;

  loadQuestion();
  showScreen("screen-question");
}

// Hàm shuffle (dùng khi bật chế độ ngẫu nhiên)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
// ────────────────────────────────────────────────────────────

// ── BOOT ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // nút màn intro
  $("btn-start").addEventListener("click", startGame);

  // nút "tiếp theo" trong màn chơi
  $("next-btn").addEventListener("click", nextQuestion);

  // nút chơi lại (thắng + thua)
  document.querySelectorAll(".btn-restart").forEach((btn) =>
    btn.addEventListener("click", startGame)
  );
});