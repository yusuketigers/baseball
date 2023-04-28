const team1 = {};
const team2 = {};

const container = document.querySelector(".container");
const startButton = document.querySelector(".start-button");

const team1NameInputs = document.querySelectorAll(".team1-name-input");
const team2NameInputs = document.querySelectorAll(".team2-name-input");
const playerInputs = document.querySelectorAll(".player-input");

playerInputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});

function validateInputs() {
  let inputsFilled = true;

  team1NameInputs.forEach((input) => {
    if (input.value.trim() === "") {
      inputsFilled = false;
    }
  });

  team2NameInputs.forEach((input) => {
    if (input.value.trim() === "") {
      inputsFilled = false;
    }
  });

  playerInputs.forEach((input) => {
    if (input.value.trim() === "") {
      inputsFilled = false;
    }
  });

  if (inputsFilled) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

function showError() {
  const error = document.createElement("div");
  error.classList.add("error");
  error.innerText = "チーム名と選手名を入力してください。";

  container.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 3000);
}

function handleStartButtonClick() {
  let inputsFilled = true;

  team1NameInputs.forEach((input) => {
    if (input.value.trim() === "") {
      inputsFilled = false;
    }
  });

  team2NameInputs.forEach((input) => {
    if (input.value.trim() === "") {
      inputsFilled = false;
    }
  });

  playerInputs.forEach((input) => {
    if (input.value.trim() === "") {
      inputsFilled = false;
    }
  });

  if (!inputsFilled) {
    showError();
    return;
  }

  for (let i = 1; i <= 18; i++) {
    const numberInput = document.querySelector(`[name=number${i}]`);
    const playerInput = document.querySelector(`[name=player${i}]`);

    if (i <= 9) {
      team1[numberInput.value] = playerInput.value;
    } else {
      team2[numberInput.value] = playerInput.value;
    }
  }

  localStorage.setItem("team1", JSON.stringify(team1));
  localStorage.setItem("team2", JSON.stringify(team2));

  window.location.href = "index.html";
}

startButton.addEventListener("click", handleStartButtonClick);

// 1から9以外の入力を削除する
const numberInputs = document.querySelectorAll('.number-input');
numberInputs.forEach(input => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^1-9]/g, '');
    validateInputs();
  });
})

const backButton = document.querySelector('.back-to-top');
backButton.addEventListener('click', () => {
  window.history.back();
});

