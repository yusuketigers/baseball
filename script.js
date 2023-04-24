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
    "1番 近本"
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
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

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
});


let twobasehitButton = document.getElementById("two-base-hit-button");
twobasehitButton.addEventListener("click", () => {
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

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
});


let threebasehitButton = document.getElementById("three-base-hit-button");
threebasehitButton.addEventListener("click", () => {
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

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
});


let homerunButton = document.getElementById("homerun-button");
homerunButton.addEventListener("click", () => {
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

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
});

let strikeButton = document.getElementById("strike-button");
strikeButton.addEventListener("click", () => {
    strikecurrentIndex = (strikecurrentIndex + 1) % strike.length;
    strikeShowing.innerHTML = strike[strikecurrentIndex];

    if (strikecurrentIndex === 1) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 0-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 1-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 2-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 3-1"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    if (strikecurrentIndex === 2) {
        if (ballcurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 0-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 1-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 2-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (ballcurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 3-2"
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
    
    if (strikecurrentIndex === 0) {
        outcurrentIndex = (outcurrentIndex + 1) % out.length;
        outShowing.innerHTML = out[outcurrentIndex];
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        ballcurrentIndex = 0
        ballShowing.innerHTML = ball[ballcurrentIndex];

        if (outcurrentIndex === 1) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウトランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 1アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }

        if (outcurrentIndex === 2) {
            if (runnercurrentIndex === 0) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウトランナーなし" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 1) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト1塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 2) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 3) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 4) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト1,2塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 5) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト1,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 6) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト2,3塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            } else if (runnercurrentIndex === 7) {
                let progressText = localStorage.getItem("progressText")
                progressText += ",ストライク 三振！ 2アウト満塁" + "," + batFirstShowing.innerHTML
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
            }
        }

        if (outcurrentIndex === 0) {
            inningcurrentIndex = (inningcurrentIndex + 1) % inning.length;
            inningShowing.innerHTML = inning[inningcurrentIndex];
            let progressText = localStorage.getItem("progressText")
            progressText += ",ストライク 三振！ 3アウトチェンジ" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
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
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
        strikecurrentIndex = 0
        strikeShowing.innerHTML = strike[strikecurrentIndex];

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
    }
});

let deadballButton = document.getElementById("dead-ball-button");
deadballButton.addEventListener("click", () => {
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

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
});

let walkButton = document.getElementById("walk-button");
walkButton.addEventListener("click", () => {
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];
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

let scoreresetButton = document.getElementById("score-reset-button");
scoreresetButton.addEventListener("click", () => {
    scorecurrentIndex = 0;
    scoreShowing.innerHTML = score[scorecurrentIndex];
});

let outButton = document.getElementById("out-button");
outButton.addEventListener("click", () => {
    batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; 
    batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex];
    outcurrentIndex = (outcurrentIndex + 1) % out.length;
    outShowing.innerHTML = out[outcurrentIndex];
    strikecurrentIndex = 0
    strikeShowing.innerHTML = strike[strikecurrentIndex];
    ballcurrentIndex = 0
    ballShowing.innerHTML = ball[ballcurrentIndex];

    if (outcurrentIndex === 1) {
        if (runnercurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト ランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
        } else if (runnercurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 4) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 5) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 6) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 7) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",1アウト 満塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }

    if (outcurrentIndex === 2) {
        if (runnercurrentIndex === 0) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト ランナーなし" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
        } else if (runnercurrentIndex === 1) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 1塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 2) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 3) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 4) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 1,2塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 5) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 1,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 6) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 2,3塁" + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else if (runnercurrentIndex === 7) {
            let progressText = localStorage.getItem("progressText")
            progressText += ",2アウト 満塁" + "," + batFirstShowing.innerHTML
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
        progressText += ",3アウトチェンジ" + "," + batFirstShowing.innerHTML
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
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