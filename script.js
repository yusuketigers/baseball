console.log("aiu")

let batter = [
    "近本",
    "中野",
    "ノイジー",
    "大山",
    "佐藤輝",
    "森下",
    "梅野",
    "木浪",
    "村上"
]

let runner = [
    "ランナーなし",
    "ランナー1塁",
    "ランナー2塁",
    "ランナー3塁",
    "ランナー1・2塁",
    "ランナー1・3塁",
    "ランナー2・3塁",
    "ランナー満塁"
]

let score = [
    "0点",
    "1点",
    "2点",
    "3点",
    "4点",
    "5点",
    "6点",
    "7点",
    "8点",
    "9点",
    "10点"
]

let scoreShowing = document.getElementById("score-showing")
let runnerShowing = document.getElementById("runner-showing")
let hitButton = document.getElementById("hit-button");
let batterShowing = document.getElementById("batter-showing")
let runnercurrentIndex = 0;
let battercurrentIndex = 0;
let scorecurrentIndex = 0;
hitButton.addEventListener("click", () => {
    battercurrentIndex = (battercurrentIndex + 1) % batter.length;
    batterShowing.innerHTML = batter[battercurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    }
});


let twobasehitButton = document.getElementById("two-base-hit-button");
twobasehitButton.addEventListener("click", () => {
    battercurrentIndex = (battercurrentIndex + 1) % batter.length;
    batterShowing.innerHTML = batter[battercurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    }
});


let threebasehitButton = document.getElementById("three-base-hit-button");
threebasehitButton.addEventListener("click", () => {
    battercurrentIndex = (battercurrentIndex + 1) % batter.length;
    batterShowing.innerHTML = batter[battercurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    }
});


let homerunButton = document.getElementById("homerun-button");
homerunButton.addEventListener("click", () => {
    battercurrentIndex = (battercurrentIndex + 1) % batter.length;
    batterShowing.innerHTML = batter[battercurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 4) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
    }
});



let out = [
    "0アウト",
    "1アウト",
    "2アウト",
]

let outShowing = document.getElementById("out-showing")
let outcurrentIndex = 0;
let outButton = document.getElementById("out-button");
outButton.addEventListener("click", () => {
    battercurrentIndex = (battercurrentIndex + 1) % batter.length; 
    batterShowing.innerHTML = batter[battercurrentIndex];
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (outcurrentIndex === 0) {
        inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
        inningShowing.innerHTML = inning[inningcurrentIndex];
        runnercurrentIndex = 0
        runnerShowing.innerHTML = runner[runnercurrentIndex];
    }
});

let strike = [
    "0ストライク",
    "1ストライク",
    "2ストライク",
]

let strikeShowing = document.getElementById("strike-showing")
let strikecurrentIndex = 0;
let strikeButton = document.getElementById("strike-button");
strikeButton.addEventListener("click", () => {
    strikecurrentIndex = (strikecurrentIndex + 1) % strike.length;
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    
    if (strikecurrentIndex === 0) {
        outcurrentIndex = (outcurrentIndex + 1) % out.length;
        outShowing.innerHTML = out[outcurrentIndex];
        battercurrentIndex = (battercurrentIndex + 1) % batter.length;
        batterShowing.innerHTML = batter[battercurrentIndex];
        ballcurrentIndex = 0
        ballShowing.innerHTML = ball[ballcurrentIndex];

    if (outcurrentIndex === 0) {
        inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
        inningShowing.innerHTML = inning[inningcurrentIndex];
    }
    }
});


let ball = [
    "0ボール",
    "1ボール",
    "2ボール",
    "3ボール"
]

let ballShowing = document.getElementById("ball-showing")
let ballcurrentIndex = 0;
let ballButton = document.getElementById("ball-button");
ballButton.addEventListener("click", () => {
    ballcurrentIndex = (ballcurrentIndex + 1) % ball.length;
    ballShowing.innerHTML = ball[ballcurrentIndex];
    
    if (ballcurrentIndex === 0) {
        battercurrentIndex = (battercurrentIndex + 1) % batter.length;
        batterShowing.innerHTML = batter[battercurrentIndex];
        strikecurrentIndex = 0
        strikeShowing.innerHTML = strike[strikecurrentIndex];
    }
});


let inning = [
    "1回",
    "2回",
    "3回",
    "4回",
    "5回",
    "6回",
    "7回",
    "8回",
    "9回",
]

let inningShowing = document.getElementById("inning-showing")
let inningcurrentIndex = 0;


let scoreresetButton = document.getElementById("score-reset-button");
scoreresetButton.addEventListener("click", () => {
    scorecurrentIndex = 0;
    scoreShowing.innerHTML = score[scorecurrentIndex];
});

localStorage.removeItem("batterText")
if (localStorage.getItem("batterText") == null) {
    localStorage.setItem("batterText", batter.toString())
}

showLocalStorage()

let removeAllButton = document.getElementById("remove-all-button")
removeAllButton.addEventListener("click", () => {
    localStorage.removeItem("batterText")
    let localStorageValue = localStorage.getItem("batterText")
    console.log(localStorageValue)
    showLocalStorage()
})

function showLocalStorage(){
    let ls = document.getElementById("local-storage")
    ls.innerHTML = localStorage.getItem("batterText")
}
