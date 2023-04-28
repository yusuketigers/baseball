let batFirst = [
    ["1番 近本", 0],
    ["2番 中野", 0],
    ["3番 ノイジー", 0],
    ["4番 大山", 0],
    ["5番 佐藤輝", 0],
    ["6番 森下", 0],
    ["7番 梅野", 0],
    ["8番 木浪", 0],
    ["9番 村上", 0]
]

let batFirstResult = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]

let fieldFirst = [
    ["1番 オコエ", 0],
    ["2番 吉川", 0],
    ["3番 丸", 0],
    ["4番 岡本", 0],
    ["5番 中田", 0],
    ["6番 大城", 0],
    ["7番 ブリンソン", 0],
    ["8番 中山", 0],
    ["9番 戸郷", 0]
]

let fieldFirstResult = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
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

let progress = [
    "[1回表の攻撃]1番 近本"
]

let batFirstShowing = document.getElementById("bat-first-showing")
let batFirstcurrentIndex = 0;
let batFirstResultShowing = document.getElementById("bat-first-result-showing")
let fieldFirstShowing = document.getElementById("field-first-showing")
let fieldFirstcurrentIndex = 0;
let fieldFirstResultShowing = document.getElementById("field-first-result-showing")
let inningShowing = document.getElementById("inning-showing")
let inningcurrentIndex = 0;
let strikecurrentIndex = 0;
let ballcurrentIndex = 0;
let outcurrentIndex = 0;
let runnerShowing = document.getElementById("runner-showing")
let runnerbase = "ランナーなし"
let scoreShowing = document.getElementById("score-showing")
let scorecurrentIndex = 0;

function hit(buttonId, plusbase, positiontext) {;
    document.getElementById(buttonId).addEventListener("click", () => {
        countreset()

        if (inningcurrentIndex % 2 === 0) { //表の攻撃
            moveAllRunner(batFirst,plusbase,batFirstcurrentIndex)
            batFirstResult[batFirstcurrentIndex] = batFirstResult[batFirstcurrentIndex] + positiontext + "<br>" //打撃結果に追加
            batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length; //次の打者
            batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex][0]; //打者を表示
            batFirstResultShowing.innerHTML = batFirstResult[batFirstcurrentIndex]; //打席結果表示
            progressText = localStorage.getItem("progressText")
            if (scorecount > 0){
                progressText += "," + positiontext + " " + scorecount + "点！ " + outcurrentIndex + "アウト" + runnerbase + ", " + batFirstShowing.innerHTML //試合経過
            } else{
                progressText += "," + positiontext + " " + outcurrentIndex + "アウト" + runnerbase + ", " + batFirstShowing.innerHTML //試合経過
            }
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }

        if (inningcurrentIndex % 2 === 1) { //裏の攻撃
            moveAllRunner(fieldFirst,plusbase,fieldFirstcurrentIndex)
            fieldFirstResult[fieldFirstcurrentIndex] = fieldFirstResult[fieldFirstcurrentIndex] + " " + positiontext //打撃結果に追加
            fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length; //次の打者
            fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex][0]; //打者を表示
            fieldFirstResultShowing.innerHTML = fieldFirstResult[fieldFirstcurrentIndex]; //打席結果表示
            progressText = localStorage.getItem("progressText")
            if (scorecount > 0){
                progressText += "," + positiontext + " " + scorecount + "点！ " + outcurrentIndex + "アウト" + runnerbase + ", " + fieldFirstShowing.innerHTML //試合経過
            } else{
                progressText += "," + positiontext + " " + outcurrentIndex + "アウト" + runnerbase + ", " + fieldFirstShowing.innerHTML //試合経過
            }
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
        scoreShowing.innerHTML = scorecurrentIndex + "点"
    })
}

function count(buttonId, positiontext) {;
    document.getElementById(buttonId).addEventListener("click", () => {
        strikecurrentIndex++; //ストライク1追加
        let strikeLight = document.getElementById("strike-light")
        strikeLight.children[strikecurrentIndex-1].classList.add("yellow")

        if (strikecurrentIndex === 3) { //3つ目のストライク
            outcurrentIndex++; //アウト1追加
            let outLight = document.getElementById("out-light")
            outLight.children[outcurrentIndex-1].classList.add("red")
            countreset()
    
            if (inningcurrentIndex % 2 === 0) { //表
                batFirstResult[batFirstcurrentIndex] = batFirstResult[batFirstcurrentIndex] + " " + positiontext + "三振" //打撃結果に追加
                batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
                batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex][0]; //打者を表示
                batFirstResultShowing.innerHTML = batFirstResult[batFirstcurrentIndex]; //打席結果表示
                if (outcurrentIndex === 3) { //3アウト
                    outInningRunnerReset(batFirst)
                    let progressText = localStorage.getItem("progressText")
                    progressText += "," + positiontext + "三振！ 3アウトチェンジ<先攻チーム " + scorecurrentIndex + "点>,[" + inningShowing.innerHTML + "の攻撃]" + fieldFirstShowing.innerHTML //試合経過
                    scorecurrentIndex = 0
                    scoreShowing.innerHTML = scorecurrentIndex + "点"; //0点に戻す
                    console.log(progressText)
                    localStorage.setItem("progressText", progressText)
                    showProgressLocalStorage()
                } else {
                    let progressText = localStorage.getItem("progressText")
                    progressText += "," + positiontext + "三振！ " + outcurrentIndex + "アウト" + runnerbase + "," + batFirstShowing.innerHTML //試合経過
                    console.log(progressText)
                    localStorage.setItem("progressText", progressText)
                    showProgressLocalStorage()
                }
            } else { //裏
                fieldFirstResult[fieldFirstcurrentIndex] = fieldFirstResult[fieldFirstcurrentIndex] + " " + positiontext + "三振" //打撃結果に追加
                fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
                fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex][0]; //打者を表示
                fieldFirstResultShowing.innerHTML = fieldFirstResult[fieldFirstcurrentIndex]; //打席結果表示
                if (outcurrentIndex === 3) {
                    outInningRunnerReset(fieldFirst)
                    let progressText = localStorage.getItem("progressText")
                    progressText += "," + positiontext + "三振！ 3アウトチェンジ<先攻チーム " + scorecurrentIndex + "点>,[" + inningShowing.innerHTML + "の攻撃]" + batFirstShowing.innerHTML
                    scorecurrentIndex = 0
                    scoreShowing.innerHTML = scorecurrentIndex + "点"; //0点に戻す
                    console.log(progressText)
                    localStorage.setItem("progressText", progressText)
                    showProgressLocalStorage()
                } else {
                    let progressText = localStorage.getItem("progressText")
                    progressText += "," + positiontext + "三振！ " + outcurrentIndex + "アウト" + runnerbase + "," + fieldFirstShowing.innerHTML
                    console.log(progressText)
                    localStorage.setItem("progressText", progressText)
                    showProgressLocalStorage()
            }
            }   
        } else { //1,2ストライク目
            progressText = localStorage.getItem("progressText")
            progressText += "," + positiontext + " " + ballcurrentIndex + "-" + strikecurrentIndex
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    })
}

let foulButton = document.getElementById("foul-button");
foulButton.addEventListener("click", () => { //ファール押したら
    if (strikecurrentIndex === 2) { //2ストだったら
        progressText = localStorage.getItem("progressText")
        progressText += ",ファール " + ballcurrentIndex + "-" + strikecurrentIndex //カウントそのまま
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
    } else {
        strikecurrentIndex++; //ストライク+1
        progressText = localStorage.getItem("progressText")
        progressText += ",ファール " + ballcurrentIndex + "-" + strikecurrentIndex
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
        let strikeLight = document.getElementById("strike-light")
        strikeLight.children[strikecurrentIndex-1].classList.add("yellow")
    }
});

let ballButton = document.getElementById("ball-button");
ballButton.addEventListener("click", () => {
        ballcurrentIndex++; //ボール1追加
        let ballLight = document.getElementById("ball-light")
        
        if (ballcurrentIndex === 4) {
            countreset()
    
            if (inningcurrentIndex % 2 === 0) { //表
                oneMove(batFirst,batFirstcurrentIndex)
                batFirstResult[batFirstcurrentIndex] = batFirstResult[batFirstcurrentIndex] + " " + "四球" //打撃結果に追加
                batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
                batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex][0]; //打者を表示
                batFirstResultShowing.innerHTML = batFirstResult[batFirstcurrentIndex]; //打席結果表示
                let progressText = localStorage.getItem("progressText")
                if (scorecount > 0){
                    progressText += ",押し出し四球 " + scorecount + "点！ " + outcurrentIndex + "アウト" + runnerbase + ", " + batFirstShowing.innerHTML //試合経過
                } else{
                    progressText += ",四球 " + outcurrentIndex + "アウト" + runnerbase + ", " + batFirstShowing.innerHTML //試合経過
                }
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()
                } else { //裏
                oneMove(fieldFirst,fieldFirstcurrentIndex)
                fieldFirstResult[fieldFirstcurrentIndex] = fieldFirstResult[fieldFirstcurrentIndex] + " " + "四球" //打撃結果に追加
                fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
                fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex][0]; //打者を表示
    
                fieldFirstResultShowing.innerHTML = fieldFirstResult[fieldFirstcurrentIndex]; //打席結果表示
                let progressText = localStorage.getItem("progressText")
                if (scorecount > 0){
                    progressText += ",押し出し四球 " + scorecount + "点！ " + outcurrentIndex + "アウト" + runnerbase + ", " + fieldFirstShowing.innerHTML //試合経過
                } else{
                    progressText += ",四球 " + outcurrentIndex + "アウト" + runnerbase + ", " + fieldFirstShowing.innerHTML //試合経過
                }
                console.log(progressText)
                localStorage.setItem("progressText", progressText)
                showProgressLocalStorage()  
            }
        } else { //1,2,3ボール目
            progressText = localStorage.getItem("progressText")
            progressText += ",ボール " + ballcurrentIndex + "-" + strikecurrentIndex
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
            ballLight.children[ballcurrentIndex-1].classList.add("green")
        }
        scoreShowing.innerHTML = scorecurrentIndex + "点"
    })

function walk(buttonId, positiontext) {;
    document.getElementById(buttonId).addEventListener("click", () => {
        countreset()

    if (inningcurrentIndex % 2 === 0) {
        oneMove(batFirst,batFirstcurrentIndex)
        batFirstResult[batFirstcurrentIndex] = batFirstResult[batFirstcurrentIndex] + " " + positiontext //打撃結果に追加
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex][0]; //打者を表示
        batFirstResultShowing.innerHTML = batFirstResult[batFirstcurrentIndex]; //打席結果表示
        let progressText = localStorage.getItem("progressText")
        if (scorecount > 0){
            progressText += ",押し出し" + positiontext + " " + scorecount + "点！ " + outcurrentIndex + "アウト" + runnerbase + ", " + batFirstShowing.innerHTML //試合経過
        } else{
            progressText += "," + positiontext + " " + outcurrentIndex + "アウト" + runnerbase + ", " + batFirstShowing.innerHTML //試合経過
        }
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
    } else {
        oneMove(fieldFirst,fieldFirstcurrentIndex)
        fieldFirstResult[fieldFirstcurrentIndex] = fieldFirstResult[fieldFirstcurrentIndex] + " " + positiontext //打撃結果に追加
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex][0]; //打者を表示
        fieldFirstResultShowing.innerHTML = fieldFirstResult[fieldFirstcurrentIndex]; //打席結果表示
        let progressText = localStorage.getItem("progressText")
        if (scorecount > 0){
            progressText += ",押し出し" + positiontext + " " + scorecount + "点！ " + outcurrentIndex + "アウト" + runnerbase + ", " + fieldFirstShowing.innerHTML //試合経過
        } else{
            progressText += "," + positiontext + " " + outcurrentIndex + "アウト" + runnerbase + ", " + fieldFirstShowing.innerHTML //試合経過
        }
        console.log(progressText)
        localStorage.setItem("progressText", progressText)
        showProgressLocalStorage()
    }
    scoreShowing.innerHTML = scorecurrentIndex + "点"
});
}

let scoreresetButton = document.getElementById("score-reset-button");
scoreresetButton.addEventListener("click", () => {
    scorecurrentIndex = 0;
    scoreShowing.innerHTML = scorecurrentIndex + "点";
});

function out(buttonId, positiontext) {;
    document.getElementById(buttonId).addEventListener("click", () => {
    outcurrentIndex++
    countreset()
    let outLight = document.getElementById("out-light")
    outLight.children[outcurrentIndex-1].classList.add("red")

    if (inningcurrentIndex % 2 === 0) {
        batFirstResult[batFirstcurrentIndex] = batFirstResult[batFirstcurrentIndex] + " " + positiontext //打撃結果に追加
        batFirstcurrentIndex = (batFirstcurrentIndex + 1) % batFirst.length;
        batFirstShowing.innerHTML = batFirst[batFirstcurrentIndex][0]; //打者を表示
        batFirstResultShowing.innerHTML = batFirstResult[batFirstcurrentIndex]; //打席結果表示
        if (outcurrentIndex === 3) {
            outInningRunnerReset(batFirst)
            let progressText = localStorage.getItem("progressText")
            progressText += ","+ positiontext +" 3アウトチェンジ<先攻チーム " + scoreShowing.innerHTML + ">,[" + inningShowing.innerHTML + "の攻撃]" + fieldFirstShowing.innerHTML
            scorecurrentIndex = 0
            scoreShowing.innerHTML = scorecurrentIndex + "点";
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else {
            let progressText = localStorage.getItem("progressText")
            progressText += "," + positiontext + " " + outcurrentIndex + "アウト" + runnerbase + "," + batFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    } else {
        fieldFirstResult[fieldFirstcurrentIndex] = fieldFirstResult[fieldFirstcurrentIndex] + " " + positiontext //打撃結果に追加
        fieldFirstcurrentIndex = (fieldFirstcurrentIndex + 1) % fieldFirst.length;
        fieldFirstShowing.innerHTML = fieldFirst[fieldFirstcurrentIndex][0]; //打者を表示
        fieldFirstResultShowing.innerHTML = fieldFirstResult[fieldFirstcurrentIndex]; //打席結果表示
        if (outcurrentIndex === 3) {
            outInningRunnerReset(fieldFirst)
            let progressText = localStorage.getItem("progressText")
            progressText += ","+ positiontext +" 3アウトチェンジ<後攻チーム " + scoreShowing.innerHTML + ">,[" + inningShowing.innerHTML + "の攻撃]" + batFirstShowing.innerHTML
            scorecurrentIndex = 0
            scoreShowing.innerHTML = scorecurrentIndex + "点";
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        } else {
            let progressText = localStorage.getItem("progressText")
            progressText += "," + positiontext + " " + outcurrentIndex + "アウト" + runnerbase + "," + fieldFirstShowing.innerHTML
            console.log(progressText)
            localStorage.setItem("progressText", progressText)
            showProgressLocalStorage()
        }
    }
});
}



hit("pitcher-hit-button", 1, "ピッチャーへの内野安打")
hit("catcher-hit-button", 1, "キャッチャーへの内野安打")
hit("first-hit-button", 1, "ファーストへの内野安打")
hit("second-hit-button", 1, "セカンドへの内野安打")
hit("third-hit-button", 1, "サードへの内野安打")
hit("short-hit-button", 1, "ショートへの内野安打")
hit("pitcher-attack-hit-button", 1, "ピッチャー強襲ヒット")
hit("first-attack-hit-button", 1, "ファースト強襲ヒット")
hit("second-attack-hit-button", 1, "セカンド強襲ヒット")
hit("third-attack-hit-button", 1, "サード強襲ヒット")
hit("short-attack-hit-button", 1, "ショート強襲ヒット")
hit("left-hit-button", 1, "レフト前ヒット")
hit("center-hit-button", 1, "センター前ヒット")
hit("right-hit-button", 1, "ライト前ヒット")
hit("first-line-hit-button", 1, "1塁線ヒット")
hit("third-line-hit-button", 1, "3塁線ヒット")
hit("left-line-hit-button", 1, "レフト線ヒット")
hit("right-line-hit-button", 1, "ライト線ヒット")
hit("left-bloop-hit-button", 1, "レフト前ポテンヒット")
hit("center-bloop-hit-button", 1, "センター前ポテンヒット")
hit("right-bloop-hit-button", 1, "ライト前ポテンヒット")
hit("pitcher-safety-hit-button", 1, "ピッチャーへのセーフティバント")
hit("catcher-safety-hit-button", 1, "キャッチャーへのセーフティバント")
hit("first-safety-hit-button", 1, "ファーストへのセーフティバント")
hit("second-safety-hit-button", 1, "セカンドへのセーフティバント")
hit("third-safety-hit-button", 1, "サードへのセーフティバント")
hit("short-safety-hit-button", 1, "ショートへのセーフティバント")

hit("two-base-left-line-hit-button", 2, "レフト線へのツーベース")
hit("two-base-right-line-hit-button", 2, "ライト線へのツーベース")
hit("two-base-first-line-hit-button", 2, "1塁線を抜けるツーベース")
hit("two-base-third-line-hit-button", 2, "3塁線を抜けるツーベース")
hit("two-base-left-over-hit-button", 2, "レフトオーバーのツーベース")
hit("two-base-center-over-hit-button", 2, "センターオーバーのツーベース")
hit("two-base-right-over-hit-button", 2, "ライトオーバーのツーベース")
hit("two-base-left-center-hit-button", 2, "左中間へのツーベース")
hit("two-base-center-right-hit-button", 2, "右中間へのツーベース")

hit("three-base-left-line-hit-button", 3, "レフト線へのスリーベース")
hit("three-base-right-line-hit-button", 3, "ライト線へのスリーベース")
hit("three-base-first-line-hit-button", 3, "1塁線を抜けるスリーベース")
hit("three-base-third-line-hit-button", 3, "3塁線を抜けるスリーベース")
hit("three-base-left-over-hit-button", 3, "レフトオーバーのスリーベース")
hit("three-base-center-over-hit-button", 3, "センターオーバーのスリーベース")
hit("three-base-right-over-hit-button", 3, "ライトオーバーのスリーベース")
hit("three-base-left-center-hit-button", 3, "左中間へのスリーベース")
hit("three-base-center-right-hit-button", 3, "右中間へのスリーベース")

hit("left-homerun-button", 4, "レフトへのホームラン")
hit("left-center-homerun-button", 4, "左中間へのホームラン")
hit("center-homerun-button", 4, "センターへのホームラン")
hit("center-right-homerun-button", 4, "右中間へのホームラン")
hit("right-homerun-button", 4, "ライトへのホームラン")
hit("left-running-homerun-button", 4, "レフトへのランニングホームラン")
hit("left-center-running-homerun-button", 4, "左中間へのランニングホームラン")
hit("center-running-homerun-button", 4, "センターへのランニングホームラン")
hit("center-right-running-homerun-button", 4, "右中間へのランニングホームラン")
hit("right-running-homerun-button", 4, "ライトへのランニングホームラン")

out("pitcher-ground-button", "ピッチャーゴロ")
out("catcher-ground-button", "キャッチャーゴロ")
out("first-ground-button", "ファーストゴロ")
out("second-ground-button", "セカンドゴロ")
out("third-ground-button", "サードゴロ")
out("short-ground-button", "ショートゴロ")
out("left-ground-button", "レフトゴロ")
out("center-ground-button", "センターゴロ")
out("right-ground-button", "ライトゴロ")
out("pitcher-fly-button", "ピッチャーフライ")
out("catcher-fly-button", "キャッチャーフライ")
out("first-fly-button", "ファーストフライ")
out("second-fly-button", "セカンドフライ")
out("third-fly-button", "サードフライ")
out("short-fly-button", "ショートフライ")
out("left-fly-button", "レフトフライ")
out("center-fly-button", "センターフライ")
out("right-fly-button", "ライトフライ")
out("pitcher-foul-fly-button", "ピッチャーファールフライ")
out("catcher-foul-fly-button", "キャッチャーファールフライ")
out("first-foul-fly-button", "ファーストファールフライ")
out("second-foul-fly-button", "セカンドファールフライ")
out("third-foul-fly-button", "サードファールフライ")
out("short-foul-fly-button", "ショートファールフライ")
out("left-foul-fly-button", "レフトファールフライ")
out("right-foul-fly-button", "ライトファールフライ")
out("pitcher-liner-button", "ピッチャーライナー")
out("first-liner-button", "ファーストライナー")
out("second-liner-button", "セカンドライナー")
out("third-liner-button", "サードライナー")
out("short-liner-button", "ショートライナー")
out("left-liner-button", "レフトライナー")
out("center-liner-button", "センターライナー")
out("right-liner-button", "ライトライナー")

count("looking-strike-button", "見逃し")
count("swing-strike-button", "空振り")
count("swing-bunt-strike-button", "バント空振り")
count("foul-bunt-button", "バントファール")

walk("dead-ball-button", "死球")
walk("walk-button", "申告敬遠")

let firstBat = batFirst.map(item => item[0]);
let firstField = fieldFirst.map(item => item[0]);

localStorage.removeItem("firstBatText")
if (localStorage.getItem("firstBatText") == null) {
    localStorage.setItem("firstBatText", firstBat.toString())
}

firstFieldLocalStorage = localStorage
firstFieldLocalStorage.removeItem("firstFieldText")
if (firstFieldLocalStorage.getItem("firstFieldText") == null) {
    firstFieldLocalStorage.setItem("firstFieldText", firstField.toString())
}

showLocalStorage()

let removeAllButton = document.getElementById("remove-all-button")
removeAllButton.addEventListener("click", () => {
    localStorage.removeItem("firstBatText")
    let localStorageValue = localStorage.getItem("firstBatText")
    console.log(localStorageValue)
    showLocalStorage()
})

progressLocalStorage = localStorage
progressLocalStorage.removeItem("progressText")
if (progressLocalStorage.getItem("progressText") == null) {
    progressLocalStorage.setItem("progressText", progress.toString())
}

showProgressLocalStorage()
showFieldFirstLocalStorage()

function showLocalStorage(){
    let ls = document.getElementById("local-storage")
    ls.innerHTML = localStorage.getItem("firstBatText")
}

function showFieldFirstLocalStorage(){
    let ls = document.getElementById("field-first-local-storage")
    ls.innerHTML = localStorage.getItem("firstFieldText")
}

function showProgressLocalStorage(){
    let ls = document.getElementById("progress-local-storage")
    ls.innerHTML = progressLocalStorage.getItem("progressText")
}

function countreset(){ //ボール・ストライクカウントをリセットして表示
    strikecurrentIndex = 0
    ballcurrentIndex = 0
    let strikeLight = document.getElementById("strike-light")
    for (let e of strikeLight.children) {
        e.classList.remove("yellow")
    }
    let ballLight = document.getElementById("ball-light")
    for (let e of ballLight.children) {
        e.classList.remove("green")
    }
}

function moveAllRunner(firstPosition,plusbase,firstPositioncurrentIndex){//すべてのランナーが同じ数ずつ進む
    for (i = 0; i < firstPosition.length; i++) {
        if (firstPosition[i][1] > 0) { // 塁上にいる選手のみ
            firstPosition[i][1] += plusbase; // 塁を進める
        }
    }

    firstPosition[firstPositioncurrentIndex][1] += plusbase //打者の塁を進める
    scorecount = 0; // 得点を初期化
    runner = ""; // 0でない要素を格納するための配列を初期化

    for (i = 0; i < firstPosition.length; i++) {
        if (firstPosition[i][1] >= 4) { // 本塁に帰ってきた選手のみ
            scorecount++; // 得点をカウントし
            firstPosition[i][1] = 0 //本塁に戻す
        }
    }
    scorecurrentIndex = scorecurrentIndex + scorecount //イニングの得点を記録

    runnerList = firstPosition.filter(function(element) { //ここから先はよく分からんがランナーの塁を求めてる
        return element[1] >= 1; 
    }).sort(function(a, b) { 
        return a[1] - b[1];
    });
    
    runner = runnerList.map(function(element) {
        return element[1];
    }).join(",");

    runnerbase = "ランナー" + runner + "塁"
    if (runner === ""){ //ランナーがいなかったら
        runnerbase = "ランナーなし" //ランナーなしとする
    }
    runnerShowing.innerHTML = runnerbase; //ランナーを表示
}

function outInningRunnerReset(firstPosition){
    outcurrentIndex = 0
    inningcurrentIndex = (inningcurrentIndex + 1) % inning.length; //イニング追加
    inningShowing.innerHTML = inning[inningcurrentIndex]; //イニング表示
    runnerbase = "ランナーなし" //ランナーなしとする
    runnerShowing.innerHTML = runnerbase;
    for (i = 0; i < firstPosition.length; i++) {
        firstPosition[i][1] = 0 //本塁に戻す
    }
    let outLight = document.getElementById("out-light")
    for (let e of outLight.children) {
        e.classList.remove("red")
    }
}

function oneMove(firstPosition,firstPositioncurrentIndex){
    // 各要素の2番目の要素の和を計算
    let secondElementSum = 0;
    for (let i = 0; i < firstPosition.length; i++) {
        secondElementSum += firstPosition[i][1];
    }
    
    // 各要素の2番目の要素のうち、0でないものの数を計算
    let secondElementNonZero = 0;
    for (let i = 0; i < firstPosition.length; i++) {
        if (firstPosition[i][1] !== 0) {
            secondElementNonZero++;
        }
    }
    
    secondElementSNZ = secondElementSum + secondElementNonZero

    // 2番目の要素の和が2または5または9の場合に、0でない要素を1ずつ増やす
    if (secondElementSNZ === 2 || secondElementSNZ === 5 || secondElementSNZ === 9) {
        for (let i = 0; i < firstPosition.length; i++) {
            if (firstPosition[i][1] !== 0) {
                firstPosition[i][1]++;
            }
        }
    } else if (secondElementSNZ === 6 ) {
        for (let i = 0; i < firstPosition.length; i++) {
            if (firstPosition[i][1] == 1) {
                firstPosition[i][1]++;
            }
        }
    }
    
    firstPosition[firstPositioncurrentIndex][1]++
    scorecount = 0; // 得点を初期化
    runner = ""; // 0でない要素を格納するための配列を初期化

    for (i = 0; i < firstPosition.length; i++) {
        if (firstPosition[i][1] >= 4) { // 本塁に帰ってきた選手のみ
            scorecount++; // 得点をカウントし
            firstPosition[i][1] = 0 //本塁に戻す
        }
    }
    scorecurrentIndex = scorecurrentIndex + scorecount

    runnerList = firstPosition.filter(function(element) { //ここから先はよく分からんがランナーの塁を求めてる
        return element[1] >= 1; 
    }).sort(function(a, b) { 
        return a[1] - b[1];
    });

    runner = runnerList.map(function(element) {
        return element[1];
    }).join(",");

    runnerbase = "ランナー" + runner + "塁"
    if (runner === ""){ //ランナーがいなかったら
        runnerbase = "ランナーなし" //ランナーなしとする
    }
    runnerShowing.innerHTML = runnerbase;
}

// メニューを開く関数
const slideDown = (el) => {
    el.style.height = 'auto'; //いったんautoに
    let h = el.offsetHeight; //autoにした要素から高さを取得
    el.style.height = h + 'px';
    el.animate([ //高さ0から取得した高さまでのアニメーション
      { height: 0 },
      { height: h + 'px' }
    ], {
      duration: 300, //アニメーションの時間（ms）
     });
  };

  // メニューを閉じる関数
  const slideUp = (el) => {
    el.style.height = 0;
  };
  
  //アコーディオンコンテナ全てで実行
  const accordions = document.querySelectorAll('ul.include-accordion');
  accordions.forEach((accordion) => {
  
    //アコーディオンボタン全てで実行
    const accordionBtns = accordion.querySelectorAll('.accordionBtn');
    accordionBtns.forEach((accordionBtn, index) => {
      accordionBtn.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('active'); //ボタンの親要素（=ul>li)にクラスを付与／削除
        const content = accordionBtn.nextElementSibling; //ボタンの次の要素（=ul>ul）
        if(e.target.parentNode.classList.contains('active')){
          slideDown(content); //クラス名がactive（＝閉じていた）なら上記で定義した開く関数を実行
        }else{
          slideUp(content); //クラス名にactiveがない（＝開いていた）なら上記で定義した閉じる関数を実行
        }
        //スクロール制御のために上位階層ulのクラス名を変える
        let container = accordion.closest('.scroll-control'); //sroll-controlnのクラス名である親要素を取得
        if(accordionBtn.parentNode.classList.contains('active') == false && container !== null ){
          container.classList.remove('active')
        }else if (container !== null){
          container.classList.add('active')
        }
      });
    });
  });

  const recordButtonsDiv = document.getElementById("record-buttons");

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

const backButton = document.querySelector('.back-to-top');
backButton.addEventListener('click', () => {
  window.history.back();
});