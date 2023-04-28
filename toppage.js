// 記録タイトルを保持する配列
let titleList = [];

// 要素の取得
const scoreButton = document.querySelector(".score-button");
const addButton = document.querySelector(".add-button");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector(".close-button");
const titleInput = document.querySelector("#title-input");
const createButton = document.querySelector("#create-button");
const recordButtonsDiv = document.getElementById("record-buttons");

// 試合成績ボタンがクリックされたときの処理
scoreButton.addEventListener("click", () => {
  // ここに処理を記述
});

// +ボタンがクリックされたときの処理
addButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// モーダルの閉じるボタンがクリックされたときの処理
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// 作成ボタンがクリックされたときの処理
createButton.addEventListener("click", () => {
  const title = titleInput.value;
  if (title) {
    titleList.push(title);
    addRecordButton(title);
    modal.style.display = "none";
    titleInput.value = "";
  }
});

// 「記録タイトル」ボタンがクリックされたときに実行される関数
function handleRecordButtonClick() {
  // 選手入力ページに遷移する処理をここに実装する
  window.location.href = "player-input.html"; // 例: 選手入力ページのファイル名をplayer-input.htmlとする場合
}

// 「記録タイトル」ボタンを動的に追加する関数
function addRecordButton(title) {
  const button = document.createElement("button");
  button.textContent = title;
  button.classList.add("record-button");
  button.addEventListener("click", handleRecordButtonClick); // クリックイベントを設定
  recordButtonsDiv.appendChild(button);
}

