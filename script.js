console.log("aiu")

let batFirst = [
    "1番 近本",
    "2番 中野",
    "3番 ノイジー",
    "4番 大山",
    "5番 佐藤輝",
    "6番 森下",
    "7番 梅野",
    "8番 木浪",
    "9番 村上"
]

let fieldFirst = [
    "1番 オコエ",
    "2番 吉川",
    "3番 丸",
    "4番 岡本",
    "5番 中田",
    "6番 大城",
    "7番 ブリンソン",
    "8番 中山",
    "9番 戸郷"
]

let inning = [
    "1回表",
    "1回ウラ",
    "2回表",
    "2回ウラ",
    "3回表",
    "3回ウラ",
    "4回表",
    "4回ウラ",
    "5回表",
    "5回ウラ",
    "6回表",
    "6回ウラ",
    "7回表",
    "7回ウラ",
    "8回表",
    "8回ウラ",
    "9回表",
    "9回ウラ",
    "10回表",
    "10回ウラ",
    "11回表",
    "11回ウラ",
    "12回表",
    "12回ウラ",
]

let strike = [
    "0ストライク",
    "1ストライク",
    "2ストライク",
]

let ball = [
    "0ボール",
    "1ボール",
    "2ボール",
    "3ボール"
]

let out = [
    "0アウト",
    "1アウト",
    "2アウト",
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

let progress = [
    "[先攻の攻撃]1番 近本"
]

let batFirstShowing = document.getElementById("bat-first-showing")
let batFirstcurrentIndex = 0;
let fieldFirstShowing = document.getElementById("field-first-showing")
let fieldFirstcurrentIndex = 0;
let inningShowing = document.getElementById("inning-showing")
let inningcurrentIndex = 0;
let strikeShowing = document.getElementById("strike-showing")
let strikecurrentIndex = 0;
let ballShowing = document.getElementById("ball-showing")
let ballcurrentIndex = 0;
let outShowing = document.getElementById("out-showing")
let outcurrentIndex = 0;
let runnerShowing = document.getElementById("runner-showing")
let runnercurrentIndex = 0;
let scoreShowing = document.getElementById("score-showing")
let scorecurrentIndex = 0;

let hitButton = document.getElementById("hit-button");
hitButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ヒット 1点 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
});


let twobasehitButton = document.getElementById("two-base-hit-button");
twobasehitButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 0アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 0アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 0アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 1アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 2アウト2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 0アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 1アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 2アウト2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 0アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 0アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 0アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 1アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 1点 2アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 0アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 1アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 2アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 0アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 1アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーベースヒット 2点 2アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
});


let threebasehitButton = document.getElementById("three-base-hit-button");
threebasehitButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 1点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 2点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 3点 0アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 3点 1アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーベースヒット 3点 2アウト3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
            fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
            fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (runnercurrentIndex === 0) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 1) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 2) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 3) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 1点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 4) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 5) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 6) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 2点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 7) {
            runnercurrentIndex = 3;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 3点 0アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 3点 1アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",スリーベースヒット 3点 2アウト3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
        }
});


let homerunButton = document.getElementById("homerun-button");
homerunButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ソロホームラン！ 1点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ソロホームラン！ 1点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ソロホームラン！ 1点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 4) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",満塁ホームラン！ 4点 0アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",満塁ホームラン！ 4点 1アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",満塁ホームラン！ 4点 2アウトランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ソロホームラン！ 1点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ソロホームラン！ 1点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ソロホームラン！ 1点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 2) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ツーランホームラン！ 2点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 3) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",スリーランホームラン！ 3点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 4) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",満塁ホームラン！ 4点 0アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",満塁ホームラン！ 4点 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",満塁ホームラン！ 4点 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
});

let swingStrikeButton = document.getElementById("swing-strike-button");
swingStrikeButton.addEventListener("click", () => {
    strikecurrentIndex = (strikecurrentIndex + 1) % strike.length;
    strikeShowing.innerHTML = strike[strikecurrentIndex];

    if (strikecurrentIndex === 1) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 0-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 1-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 2-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 3-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    if (strikecurrentIndex === 2) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 0-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 1-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 2-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 3-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    
    if (strikecurrentIndex === 0) {
        outcurrentIndex = (outcurrentIndex + 1) % out.length;
        outShowing.innerHTML = out[outcurrentIndex];
        ballcurrentIndex = 0
        ballShowing.innerHTML = ball[ballcurrentIndex];

        if (inningcurrentIndex % 2 === 0) {
            batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
            batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウトランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }

        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウトランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",空振り 三振！ 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }

        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 3アウトチェンジ<先攻チーム " + scoreShowing.innerHTML + ">,[後攻の攻撃]" + fieldFirstShowing.innerHTML
            scorecurrentIndex = 0
            scoreShowing.innerHTML = score[scorecurrentIndex];
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (outcurrentIndex === 1) {
        if (runnercurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 4) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 5) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 6) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 7) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }

    if (outcurrentIndex === 2) {
        if (runnercurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 4) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 5) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 6) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 7) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",空振り 三振！ 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }

    if (outcurrentIndex === 0) {
        inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
        inningShowing.innerHTML = inning[inningcurrentIndex];
        let progressText = localStorage.getItem("progressText")
        progressText += ",空振り 三振！ 3アウトチェンジ <後攻チーム " + scoreShowing.innerHTML + ">,[先攻の攻撃]" + batFirstShowing.innerHTML
        scorecurrentIndex = 0
        scoreShowing.innerHTML = score[scorecurrentIndex];
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
    }
    }
    }
});

let lookingStrikeButton = document.getElementById("looking-strike-button");
lookingStrikeButton.addEventListener("click", () => {
    strikecurrentIndex = (strikecurrentIndex + 1) % strike.length;
    strikeShowing.innerHTML = strike[strikecurrentIndex];

    if (strikecurrentIndex === 1) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 0-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 1-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 2-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 3-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    if (strikecurrentIndex === 2) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 0-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 1-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 2-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 3-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    
    if (strikecurrentIndex === 0) {
        outcurrentIndex = (outcurrentIndex + 1) % out.length;
        outShowing.innerHTML = out[outcurrentIndex];
        ballcurrentIndex = 0
        ballShowing.innerHTML = ball[ballcurrentIndex];

        if (inningcurrentIndex % 2 === 0) {
            batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
            batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウトランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }

        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウトランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",見逃し 三振！ 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }

        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 3アウトチェンジ<先攻チーム " + scoreShowing.innerHTML + ">,[後攻の攻撃]" + fieldFirstShowing.innerHTML
            scorecurrentIndex = 0
            scoreShowing.innerHTML = score[scorecurrentIndex];
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (outcurrentIndex === 1) {
        if (runnercurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 4) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 5) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 6) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 7) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }

    if (outcurrentIndex === 2) {
        if (runnercurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウトランナーなし" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 4) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 5) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 6) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト2,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 7) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",見逃し 三振！ 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }

    if (outcurrentIndex === 0) {
        inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
        inningShowing.innerHTML = inning[inningcurrentIndex];
        let progressText = localStorage.getItem("progressText")
        progressText += ",見逃し 三振！ 3アウトチェンジ<後攻チーム " + scoreShowing.innerHTML + ">,[先攻の攻撃]" + batFirstShowing.innerHTML
        scorecurrentIndex = 0
        scoreShowing.innerHTML = score[scorecurrentIndex];
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
    }
    }
    }
});

let foulButton = document.getElementById("foul-button");
foulButton.addEventListener("click", () => {
    
    if (strikecurrentIndex === 0) {
        strikecurrentIndex = (strikecurrentIndex + 1) % strike.length;
        strikeShowing.innerHTML = strike[strikecurrentIndex];
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 0-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 1-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 2-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 3-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (strikecurrentIndex === 1) {
        strikecurrentIndex = (strikecurrentIndex + 1) % strike.length;
        strikeShowing.innerHTML = strike[strikecurrentIndex];
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 0-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 1-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 2-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 3-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (strikecurrentIndex === 2) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 0-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 1-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 2-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファール 3-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } 
    
});

let ballButton = document.getElementById("ball-button");
ballButton.addEventListener("click", () => {
    ballcurrentIndex = (ballcurrentIndex + 1) % ball.length;
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (ballcurrentIndex === 1) {
        if (strikecurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 1-0"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (strikecurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 1-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (strikecurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 1-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    if (ballcurrentIndex === 2) {
        if (strikecurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 2-0"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (strikecurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 2-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (strikecurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 2-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    if (ballcurrentIndex === 3) {
        if (strikecurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 3-0"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (strikecurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 3-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (strikecurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ボール 3-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    
    if (ballcurrentIndex === 0) {
        strikecurrentIndex = 0
        strikeShowing.innerHTML = strike[strikecurrentIndex];

        if (inningcurrentIndex % 2 === 0) {
            batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
            batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (runnercurrentIndex === 0) {
            runnercurrentIndex = 1;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 1) {
            runnercurrentIndex = 4;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 2) {
            runnercurrentIndex = 4;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 3) {
            runnercurrentIndex = 5;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 4) {
            runnercurrentIndex = 7;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 5) {
            runnercurrentIndex = 7;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 6) {
            runnercurrentIndex = 7;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 0アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        } else if (runnercurrentIndex === 7) {
            runnercurrentIndex = 7;
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
            scoreShowing.innerHTML = score[scorecurrentIndex];
            if (outcurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1点 0アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1点 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (outcurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",フォアボール 1点 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1点 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1点 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",フォアボール 1点 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
    }
});

let deadballButton = document.getElementById("dead-ball-button");
deadballButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1点 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1点 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1点 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1点 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1点 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",デッドボール 1点 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
});

let walkButton = document.getElementById("walk-button");
walkButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1点 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1点 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1点 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1点 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1点 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",申告敬遠 1点 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
});

let scoreresetButton = document.getElementById("score-reset-button");
scoreresetButton.addEventListener("click", () => {
    scorecurrentIndex = 0;
    scoreShowing.innerHTML = score[scorecurrentIndex];
});

let pitcherGroundButton = document.getElementById("pitcher-ground-button");
pitcherGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ピッチャーゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ピッチャーゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let catcherGroundButton = document.getElementById("catcher-ground-button");
catcherGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",キャッチャーゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",キャッチャーゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let firstGroundButton = document.getElementById("first-ground-button");
firstGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファーストゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファーストゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let secondGroundButton = document.getElementById("second-ground-button");
secondGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",セカンドゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",セカンドゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let thirdGroundButton = document.getElementById("third-ground-button");
thirdGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",サードゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",サードゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let shortGroundButton = document.getElementById("short-ground-button");
shortGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ショートゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ショートゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let leftGroundButton = document.getElementById("left-ground-button");
leftGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",レフトゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",レフトゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let centerGroundButton = document.getElementById("center-ground-button");
centerGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",センターゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",センターゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let rightGroundButton = document.getElementById("right-ground-button");
rightGroundButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ライトゴロ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトゴロ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ライトゴロ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let pitcherflyButton = document.getElementById("pitcher-fly-button");
pitcherflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ピッチャーフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ピッチャーフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ピッチャーフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let catcherflyButton = document.getElementById("catcher-fly-button");
catcherflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",キャッチャーフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",キャッチャーフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",キャッチャーフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let firstflyButton = document.getElementById("first-fly-button");
firstflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファーストフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ファーストフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ファーストフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let secondflyButton = document.getElementById("second-fly-button");
secondflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",セカンドフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",セカンドフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",セカンドフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let thirdflyButton = document.getElementById("third-fly-button");
thirdflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",サードフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",サードフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",サードフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let shortflyButton = document.getElementById("short-fly-button");
shortflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ショートフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ショートフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ショートフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let leftflyButton = document.getElementById("left-fly-button");
leftflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",レフトフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",レフトフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",レフトフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let centerflyButton = document.getElementById("center-fly-button");
centerflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",センターフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",センターフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",センターフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let rightflyButton = document.getElementById("right-fly-button");
rightflyButton.addEventListener("click", () => {
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト ランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ライトフライ 3アウトチェンジ" + ",[後攻の攻撃]" + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; 
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 1アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト ランナーなし" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 1塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 1,2塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 1,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 2,3塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ライトフライ 2アウト 満塁" + "," + fieldFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }
    
        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            runnercurrentIndex = 0
            runnerShowing.innerHTML = runner[runnercurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ライトフライ 3アウトチェンジ" + ",[先攻の攻撃]" + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let errorButton = document.getElementById("error-button");
errorButton.addEventListener("click", () => {
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (inningcurrentIndex % 2 === 0) {
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    } else if (inningcurrentIndex % 2 === 1) {
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex];
    if (runnercurrentIndex === 0) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 1) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 1;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト1塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 4;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト1,2塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 5;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト1,3塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 0アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 1アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",エラー 1点 2アウト満塁" + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    }
});

let stealButton = document.getElementById("steal-button");
stealButton.addEventListener("click", () => {
    let progressText = localStorage.getItem("progressText")
    progressText += ""
    console.log(progressText)
    localStorage.setItem("progressText", progressText)
    showProgressLocalStorage()

    if (runnercurrentIndex === 1) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 0アウト2塁"
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 0アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 1アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 2アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 0アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",盗塁成功！ 1点 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let restriantErrorButton = document.getElementById("restraint-error-button");
restriantErrorButton.addEventListener("click", () => {
    let progressText = localStorage.getItem("progressText")
    progressText += ""
    console.log(progressText)
    localStorage.setItem("progressText", progressText)
    showProgressLocalStorage()

    if (runnercurrentIndex === 1) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 0アウト2塁"
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 0アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 1アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 2アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 0アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",牽制エラー 1点 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let wildPicthButton = document.getElementById("wild-pitch-button");
wildPicthButton.addEventListener("click", () => {
    let progressText = localStorage.getItem("progressText")
    progressText += ""
    console.log(progressText)
    localStorage.setItem("progressText", progressText)
    showProgressLocalStorage()

    if (runnercurrentIndex === 1) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 0アウト2塁"
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 0アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 1アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 2アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 0アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ワイルドピッチ 1点 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

let passBallButton = document.getElementById("pass-ball-button");
passBallButton.addEventListener("click", () => {
    let progressText = localStorage.getItem("progressText")
    progressText += ""
    console.log(progressText)
    localStorage.setItem("progressText", progressText)
    showProgressLocalStorage()

    if (runnercurrentIndex === 1) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 0アウト2塁"
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 2) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 3) {
        runnercurrentIndex = 0;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 0アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 1アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 2アウトランナーなし"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 4) {
        runnercurrentIndex = 6;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 5) {
        runnercurrentIndex = 2;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 0アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 1アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 2アウト2塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 6) {
        runnercurrentIndex = 3;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 0アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 1アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 2アウト3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else if (runnercurrentIndex === 7) {
        runnercurrentIndex = 7;
        runnerShowing.innerHTML = runner[runnercurrentIndex];
        scorecurrentIndex = (scorecurrentIndex + 1) % score.length;
        scoreShowing.innerHTML = score[scorecurrentIndex];
        if (outcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 0アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 1アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (outcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",パスボール 1点 2アウト2,3塁"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});

localStorage.removeItem("batFirstText")
if (localStorage.getItem("batFirstText") == null) {
    localStorage.setItem("batFirstText", batFirst.toString())
}

showLocalStorage()

let removeAllButton = document.getElementById("remove-all-button")
removeAllButton.addEventListener("click", () => {
    localStorage.removeItem("batFirstText")
    let localStorageValue = localStorage.getItem("batFirstText")
    console.log(localStorageValue)
    showLocalStorage()
})

progressLocalStorage = localStorage
progressLocalStorage.removeItem("progressText")
if (progressLocalStorage.getItem("progressText") == null) {
    progressLocalStorage.setItem("progressText", progress.toString())
}

fieldFirstLocalStorage = localStorage
fieldFirstLocalStorage.removeItem("fieldFirstText")
if (fieldFirstLocalStorage.getItem("fieldFirstText") == null) {
    fieldFirstLocalStorage.setItem("fieldFirstText", fieldFirst.toString())
}

showProgressLocalStorage()
showFieldFirstLocalStorage()

function showLocalStorage(){
    let ls = document.getElementById("local-storage")
    ls.innerHTML = localStorage.getItem("batFirstText")
}

function showFieldFirstLocalStorage(){
    let ls = document.getElementById("field-first-local-storage")
    ls.innerHTML = localStorage.getItem("fieldFirstText")
}

function showProgressLocalStorage(){
    let ls = document.getElementById("progress-local-storage")
    ls.innerHTML = progressLocalStorage.getItem("progressText")
}