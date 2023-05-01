strikecurrentIndex=0
ballcurrentIndex=0
outcurrentIndex=0
battercurrentIndex1=0
battercurrentIndex2=0
playerRunner1=[0,0,0,0,0,0,0,0,0]
playerRunner2=[0,0,0,0,0,0,0,0,0]
playerShowing1 = document.getElementById("player-showing1")
playerShowing2 = document.getElementById("player-showing2")
score1=0
const squareLight = document.getElementById("square-light");

let foulButton = document.getElementById("foul-button");
foulButton.addEventListener("click", () => { //ファール押したら
    if (strikecurrentIndex === 2) { //2ストだったら
    } else {
        strikecurrentIndex++; //ストライク+1
        strikeLight = document.getElementById("strike-light")
        strikeLight.children[strikecurrentIndex-1].classList.add("yellow")
    }
});

function count(buttonId) {;
  document.getElementById(buttonId).addEventListener("click", () => {

  if (strikecurrentIndex === 2) { //3つ目のストライク
      countreset()
      outcount()
      if (outcurrentIndex === 0){
        for (let i = 0; i < playerRunner1.length; i++) {
          playerRunner1[i]=0
        }
        runnerLight()
        allPullDownChange()
      }
  } else { //1,2ストライク目
    strikecurrentIndex++; //ストライク1追加
    let strikeLight = document.getElementById("strike-light")
    strikeLight.children[strikecurrentIndex-1].classList.add("yellow")
  }
})
}

count("looking-strike-button")
count("swing-strike-button")
count("swing-bunt-strike-button")
count("foul-bunt-button")

let ballButton = document.getElementById("ball-button");
ballButton.addEventListener("click", () => { //ファール押したら

  if (ballcurrentIndex === 3) { //3つ目のストライク
      countreset()
  } else { //1,2ストライク目
    ballcurrentIndex++; //ストライク1追加
    let ballLight = document.getElementById("ball-light")
    ballLight.children[ballcurrentIndex-1].classList.add("green")
  }
})


// function out(buttonId) {;
//   document.getElementById(buttonId).addEventListener("click", () => {
//   countreset()
//   outcount()
// });
// }

// out("ground")
// out("fly")
// out("liner")

function outcount(){
  if (outcurrentIndex === 2) {
    outcurrentIndex=0
    let outLight = document.getElementById("out-light")
    for (let e of outLight.children) {
        e.classList.remove("red")
   }
  } else {
      outcurrentIndex++
      let outLight = document.getElementById("out-light")
      outLight.children[outcurrentIndex-1].classList.add("red")
  }
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



// let errorButton = document.getElementById("error");
// errorButton.addEventListener("click", () => { //ファール押したら

//   let squareLight = document.getElementById("square-light")
//     squareLight.children[0].classList.add("light")
// })


const hit1Button = document.querySelector('#hit1');

hit1Button.addEventListener('click', () => {
	hitModal.style.display = 'block';
});

const hitModal = document.querySelector('#hitModal');

const hitPitcherButton = document.querySelector('#hit-pitcher');
const hitCatcherButton = document.querySelector('#hit-catcher');
const hitFirstButton = document.querySelector('#hit-first');
const hitSecondButton = document.querySelector('#hit-second');
const hitThirdButton = document.querySelector('#hit-third');
const hitShortButton = document.querySelector('#hit-short');
const hitLeftButton = document.querySelector('#hit-left');
const hitCenterButton = document.querySelector('#hit-center');
const hitRightButton = document.querySelector('#hit-right');

hitPitcherButton.addEventListener('click', () => {
	hitPitcherModal.style.display = 'block';
});

hitCatcherButton.addEventListener('click', () => {
	hitCatcherModal.style.display = 'block';
});

hitFirstButton.addEventListener('click', () => {
	hitFirstModal.style.display = 'block';
});

hitSecondButton.addEventListener('click', () => {
	hitSecondModal.style.display = 'block';
});

hitThirdButton.addEventListener('click', () => {
	hitThirdModal.style.display = 'block';
});

hitShortButton.addEventListener('click', () => {
	hitShortModal.style.display = 'block';
});

hitLeftButton.addEventListener('click', () => {
	hitLeftModal.style.display = 'block';
});

hitCenterButton.addEventListener('click', () => {
	hitCenterModal.style.display = 'block';
});

hitRightButton.addEventListener('click', () => {
	hitRightModal.style.display = 'block';
});

const hitPitcherModal = document.querySelector('#hit-pitcher-Modal');
const hitCatcherModal = document.querySelector('#hit-catcher-Modal');
const hitFirstModal = document.querySelector('#hit-first-Modal');
const hitSecondModal = document.querySelector('#hit-second-Modal');
const hitThirdModal = document.querySelector('#hit-third-Modal');
const hitShortModal = document.querySelector('#hit-short-Modal');
const hitLeftModal = document.querySelector('#hit-left-Modal');
const hitCenterModal = document.querySelector('#hit-center-Modal');
const hitRightModal = document.querySelector('#hit-right-Modal');


function hit3(buttonId, position) {;
  document.querySelector(buttonId).addEventListener("click", () => {
    //alert(position);
  })
}

function homerun(buttonId) {;
  document.querySelector(buttonId).addEventListener("click", () => {
    score1++
    for (let i = 0; i < playerRunner1.length; i++) {
      countreset()
      if (playerRunner1[i] > 0){
        score1++
        console.log(score1)
        playerRunner1[i]=0
      }
    }
    console.log(playerRunner1)
    runnerLight()
    allModalNone()
    allPullDownChange()
  })
}

function allModalNone(){
  hitModal.style.display = 'none';
  hitPitcherModal.style.display = 'none';
  hitCatcherModal.style.display = 'none';
  hitFirstModal.style.display = 'none';
  hitSecondModal.style.display = 'none';
  hitThirdModal.style.display = 'none';
  hitShortModal.style.display = 'none';
  hitLeftModal.style.display = 'none';
  hitCenterModal.style.display = 'none';
  hitRightModal.style.display = 'none';
  outModal.style.display = 'none';
  outPitcherModal.style.display = 'none';
  outCatcherModal.style.display = 'none';
  outFirstModal.style.display = 'none';
  // outSecondModal.style.display = 'none';
  // outThirdModal.style.display = 'none';
  // outShortModal.style.display = 'none';
  // outLeftModal.style.display = 'none';
  // outCenterModal.style.display = 'none';
  // outRightModal.style.display = 'none';

  hitPitcherModal.style.display = 'none';
  hitCatcherModal.style.display = 'none';
  hitFirstModal.style.display = 'none';
  hitSecondModal.style.display = 'none';
  hitThirdModal.style.display = 'none';
  hitShortModal.style.display = 'none';

  onebaseLeftModal.style.display = 'none';
  twobaseLeftModal.style.display = 'none';
  threebaseLeftModal.style.display = 'none';
  onebaseCenterModal.style.display = 'none';
  twobaseCenterModal.style.display = 'none';
  threebaseCenterModal.style.display = 'none';
  onebaseRightModal.style.display = 'none';
  twobaseRightModal.style.display = 'none';
  threebaseRightModal.style.display = 'none';

  groundPitcherModal.style.display = 'none';
  flyPitcherModal.style.display = 'none';
  linerPitcherModal.style.display = 'none';
  groundCatcherModal.style.display = 'none';
  flyCatcherModal.style.display = 'none';
  linerCatcherModal.style.display = 'none';
  groundFirstModal.style.display = 'none';
  flyFirstModal.style.display = 'none';
  linerFirstModal.style.display = 'none';
}


// hit3("#onebase-pitcher","ピッチャーへの内野安打！")
// hit3("#twobase-pitcher","ピッチャーへの二塁打！")
// hit3("#threebase-pitcher","ピッチャーへの三塁打！")
// hit3("#homerun-pitcher","ピッチャーへのホームラン！")
// hit3("#onebase-catcher","キャッチャーへの内野安打！")
// hit3("#twobase-catcher","キャッチャーへの二塁打！")
// hit3("#threebase-catcher","キャッチャーへの三塁打！")
// hit3("#homerun-catcher","キャッチャーへのホームラン！")
// hit3("#onebase-first","ファーストへの内野安打！")
// hit3("#twobase-first","ファーストへの二塁打！")
// hit3("#threebase-first","ファーストへの三塁打！")
// hit3("#homerun-first","ファーストへのホームラン！")
// hit3("#onebase-second","セカンドへの内野安打！")
// hit3("#twobase-second","セカンドへの二塁打！")
// hit3("#threebase-second","セカンドへの三塁打！")
// hit3("#homerun-second","セカンドへのホームラン！")
// hit3("#onebase-third","サードへの内野安打！")
// hit3("#twobase-third","サードへの二塁打！")
// hit3("#threebase-third","サードへの三塁打！")
// hit3("#homerun-third","サードへのホームラン！")
// hit3("#onebase-short","ショートへの内野安打！")
// hit3("#twobase-short","ショートへの二塁打！")
// hit3("#threebase-short","ショートへの三塁打！")
// hit3("#homerun-short","ショートへのホームラン！")
// hit3("#onebase-left","レフト前ヒット！")
// hit3("#onebase-center","センター前ヒット！")
// hit3("#onebase-right","ライト前ヒット！")
// hit3("#twobase-left","レフトへのツーベース！")
// hit3("#twobase-center","センターへのツーベース！")
// hit3("#twobase-right","ライトへのツーベース！")
// hit3("#threebase-left","レフトへのスリーベース！")
// hit3("#threebase-center","センターへのスリーベース！")
// hit3("#threebase-right","ライトへのスリーベース！")
homerun("#homerun-left")
homerun("#homerun-center")
homerun("#homerun-right")


const out1Button = document.querySelector('#out1');

out1Button.addEventListener('click', () => {
	outModal.style.display = 'block';
});

const outModal = document.querySelector('#outModal');

const outPitcherButton = document.querySelector('#out-pitcher');
const outCatcherButton = document.querySelector('#out-catcher');
const outFirstButton = document.querySelector('#out-first');
const outSecondButton = document.querySelector('#out-second');
const outThirdButton = document.querySelector('#out-third');
const outShortButton = document.querySelector('#out-short');
const outLeftButton = document.querySelector('#out-left');
const outCenterButton = document.querySelector('#out-center');
const outRightButton = document.querySelector('#out-right');

outPitcherButton.addEventListener('click', () => {
	outPitcherModal.style.display = 'block';
});

outCatcherButton.addEventListener('click', () => {
	outCatcherModal.style.display = 'block';
});

outFirstButton.addEventListener('click', () => {
	outFirstModal.style.display = 'block';
});

// outSecondButton.addEventListener('click', () => {
// 	outSecondModal.style.display = 'block';
// });

// outThirdButton.addEventListener('click', () => {
// 	outThirdModal.style.display = 'block';
// });

// outShortButton.addEventListener('click', () => {
// 	outShortModal.style.display = 'block';
// });

// outLeftButton.addEventListener('click', () => {
// 	outLeftModal.style.display = 'block';
// });

// outCenterButton.addEventListener('click', () => {
// 	outCenterModal.style.display = 'block';
// });

// outRightButton.addEventListener('click', () => {
// 	outRightModal.style.display = 'block';
// });

const outPitcherModal = document.querySelector('#out-pitcher-Modal');
const outCatcherModal = document.querySelector('#out-catcher-Modal');
const outFirstModal = document.querySelector('#out-first-Modal');
// const outSecondModal = document.querySelector('#out-second-Modal');
// const outThirdModal = document.querySelector('#out-third-Modal');
// const outShortModal = document.querySelector('#out-short-Modal');
// const outLeftModal = document.querySelector('#out-left-Modal');
// const outCenterModal = document.querySelector('#out-center-Modal');
// const outRightModal = document.querySelector('#out-right-Modal');

// function out3(buttonId, position) {;
//   document.querySelector(buttonId).addEventListener("click", () => {
//     // allModalNone()
//     // countreset()
//     // outcount()
//   })
// }

// out3("#ground-pitcher","ピッチャーゴロ")
// out3("#ground-catcher","キャッチャーゴロ")
// out3("#ground-first","ファーストゴロ")
// out3("#ground-second","セカンドゴロ")
// out3("#ground-third","サードゴロ")
// out3("#ground-short","ショートゴロ")
// out3("#ground-left","レフトゴロ")
// out3("#ground-center","センターゴロ")
// out3("#ground-right","ライトゴロ")
// out3("#fly-pitcher","ピッチャーフライ")
// out3("#fly-catcher","キャッチャーフライ")
// out3("#fly-first","ファーストフライ")
// out3("#fly-second","セカンドフライ")
// out3("#fly-third","サードフライ")
// out3("#fly-short","ショートフライ")
// out3("#fly-left","レフトフライ")
// out3("#fly-center","センターフライ")
// out3("#fly-right","ライトフライ")
// out3("#liner-pitcher","ピッチャーライナー")
// out3("#liner-catcher","キャッチャーライナー")
// out3("#liner-first","ファーストライナー")
// out3("#liner-second","セカンドライナー")
// out3("#liner-third","サードライナー")
// out3("#liner-short","ショートライナー")
// out3("#liner-left","レフトライナー")
// out3("#liner-center","センターライナー")
// out3("#liner-right","ライトライナー")

window.addEventListener('click', (event) => {
  if (event.target == hitModal || event.target == hitPitcherModal || event.target == hitCatcherModal || event.target == hitFirstModal || event.target == hitSecondModal || event.target == hitThirdModal || event.target == hitShortModal || event.target == hitLeftModal || event.target == hitCenterModal || event.target == hitRightModal || event.target == outModal || event.target == outPitcherModal || event.target == outCatcherModal || event.target == outFirstModal/* || event.target == outSecondModal || event.target == outThirdModal || event.target == outShortModal || event.target == outLeftModal || event.target == outCenterModal || event.target == outRightModal*/ || event.target == onebaseLeftModal || event.target == twobaseLeftModal || event.target == threebaseLeftModal || event.target == onebaseCenterModal || event.target == twobaseCenterModal || event.target == threebaseCenterModal || event.target == onebaseRightModal || event.target == twobaseRightModal || event.target == threebaseRightModal || event.target == hitPitcherModal || event.target == hitCatcherModal || event.target == hitFirstModal || event.target == hitSecondModal || event.target == hitThirdModal || event.target == hitShortModal || event.target == groundPitcherModal || event.target == flyPitcherModal || event.target == linerPitcherModal || event.target == groundCatcherModal || event.target == flyCatcherModal || event.target == linerCatcherModal || event.target == groundFirstModal || event.target == flyFirstModal || event.target == linerFirstModal) {
    allModalNone()
  }
});

const cells = document.querySelectorAll('td');
cells.forEach(cell => {
  cell.addEventListener('input', function() {
    console.log('Input detected');
  });
});

function updateParagraph1(cell) {
  const text = cell.innerText;
  document.querySelector('#output1').textContent = text;
  document.querySelector('#output3').textContent = text;
}

function updateParagraph2(cell) {
  const text = cell.innerText;
  document.querySelector('#output2').textContent = text;
  document.querySelector('#output4').textContent = text;
}

function addToList() {
  var playerList1 = [];
  var playerList2 = [];
  var table1 = document.getElementById("player-table1");
  var table2 = document.getElementById("player-table2");
  var cells1 = table1.getElementsByTagName('td');
  var cells2 = table2.getElementsByTagName('td');
  
  for (var i = 0; i < cells1.length; i++) {
    var cellText1 = cells1[i].innerText.trim();
    var cellText2 = cells2[i].innerText.trim();
    if (cellText1 !== '') {
      playerList1.push(cellText1);
    }
    if (cellText2 !== '') {
      playerList2.push(cellText2);
    }
  }
  let playerPosition1 = [];
  let playerPosition2 = [];
  let playerName1 = [];
  let playerName2 = [];

for (let i = 1; i < playerList1.length; i += 3) {
  playerPosition1.push(playerList1[i]);
  playerPosition2.push(playerList2[i]);
}
console.log(playerPosition2)
for (let i = 2; i < playerList1.length; i += 3) {
  playerName1.push(playerList1[i]);
  playerName2.push(playerList2[i]);
}
console.log(playerName2)

  for (var i = 0; i < playerPosition2.length; i++) {
    if (playerPosition2[i] == '投' || playerPosition2[i] == "1") {
      playerShowing2.innerHTML = playerName2[i]; //打者を表示
    }
  }
  playerShowing1.innerHTML = playerName1[0]; //打者を表示
  console.log(playerList1)
  console.log(playerList2)
}

  // Get the modal
var onebasePitcherModal = document.getElementById("hit-pitcher-Modal");
var onebasePitcherButton = document.getElementById("hit-pitcher");
var onebasePitcherCloseButton = document.getElementById("onebase-pitcher-closeModal");
var onebasePitchered0 = document.getElementById("onebasePitcher0").value;
var onebasePitchered1 = document.getElementById("onebasePitcher1").value;
var onebasePitchered2 = document.getElementById("onebasePitcher2").value;
var onebasePitchered3 = document.getElementById("onebasePitcher3").value;
const onebasePitcher1 = document.getElementById("onebasePitcher1");
const onebasePitcher2 = document.getElementById("onebasePitcher2");
const onebasePitcher3 = document.getElementById("onebasePitcher3");
var onebaseCatcherModal = document.getElementById("hit-catcher-Modal");
var onebaseCatcherButton = document.getElementById("hit-catcher");
var onebaseCatcherCloseButton = document.getElementById("onebase-catcher-closeModal");
var onebaseCatchered0 = document.getElementById("onebaseCatcher0").value;
var onebaseCatchered1 = document.getElementById("onebaseCatcher1").value;
var onebaseCatchered2 = document.getElementById("onebaseCatcher2").value;
var onebaseCatchered3 = document.getElementById("onebaseCatcher3").value;
const onebaseCatcher1 = document.getElementById("onebaseCatcher1");
const onebaseCatcher2 = document.getElementById("onebaseCatcher2");
const onebaseCatcher3 = document.getElementById("onebaseCatcher3");
var onebaseFirstModal = document.getElementById("hit-first-Modal");
var onebaseFirstButton = document.getElementById("hit-first");
var onebaseFirstCloseButton = document.getElementById("onebase-first-closeModal");
var onebaseFirsted0 = document.getElementById("onebaseFirst0").value;
var onebaseFirsted1 = document.getElementById("onebaseFirst1").value;
var onebaseFirsted2 = document.getElementById("onebaseFirst2").value;
var onebaseFirsted3 = document.getElementById("onebaseFirst3").value;
const onebaseFirst1 = document.getElementById("onebaseFirst1");
const onebaseFirst2 = document.getElementById("onebaseFirst2");
const onebaseFirst3 = document.getElementById("onebaseFirst3");
var onebaseSecondModal = document.getElementById("hit-second-Modal");
var onebaseSecondButton = document.getElementById("hit-second");
var onebaseSecondCloseButton = document.getElementById("onebase-second-closeModal");
var onebaseSeconded0 = document.getElementById("onebaseSecond0").value;
var onebaseSeconded1 = document.getElementById("onebaseSecond1").value;
var onebaseSeconded2 = document.getElementById("onebaseSecond2").value;
var onebaseSeconded3 = document.getElementById("onebaseSecond3").value;
const onebaseSecond1 = document.getElementById("onebaseSecond1");
const onebaseSecond2 = document.getElementById("onebaseSecond2");
const onebaseSecond3 = document.getElementById("onebaseSecond3");
var onebaseThirdModal = document.getElementById("hit-third-Modal");
var onebaseThirdButton = document.getElementById("hit-third");
var onebaseThirdCloseButton = document.getElementById("onebase-third-closeModal");
var onebaseThirded0 = document.getElementById("onebaseThird0").value;
var onebaseThirded1 = document.getElementById("onebaseThird1").value;
var onebaseThirded2 = document.getElementById("onebaseThird2").value;
var onebaseThirded3 = document.getElementById("onebaseThird3").value;
const onebaseThird1 = document.getElementById("onebaseThird1");
const onebaseThird2 = document.getElementById("onebaseThird2");
const onebaseThird3 = document.getElementById("onebaseThird3");
var onebaseShortModal = document.getElementById("hit-short-Modal");
var onebaseShortButton = document.getElementById("hit-short");
var onebaseShortCloseButton = document.getElementById("onebase-short-closeModal");
var onebaseShorted0 = document.getElementById("onebaseShort0").value;
var onebaseShorted1 = document.getElementById("onebaseShort1").value;
var onebaseShorted2 = document.getElementById("onebaseShort2").value;
var onebaseShorted3 = document.getElementById("onebaseShort3").value;
const onebaseShort1 = document.getElementById("onebaseShort1");
const onebaseShort2 = document.getElementById("onebaseShort2");
const onebaseShort3 = document.getElementById("onebaseShort3");
var onebaseLeftModal = document.getElementById("onebase-left-modal");
var onebaseLeftButton = document.getElementById("onebase-left");
var onebaseLeftCloseButton = document.getElementById("onebase-left-closeModal");
var onebaseLefted0 = document.getElementById("onebaseLeft0").value;
var onebaseLefted1 = document.getElementById("onebaseLeft1").value;
var onebaseLefted2 = document.getElementById("onebaseLeft2").value;
var onebaseLefted3 = document.getElementById("onebaseLeft3").value;
const onebaseLeft1 = document.getElementById("onebaseLeft1");
const onebaseLeft2 = document.getElementById("onebaseLeft2");
const onebaseLeft3 = document.getElementById("onebaseLeft3");
var twobaseLeftModal = document.getElementById("twobase-left-modal");
var twobaseLeftButton = document.getElementById("twobase-left");
var twobaseLeftCloseButton = document.getElementById("twobase-left-closeModal");
var twobaseLefted0 = document.getElementById("twobaseLeft0").value;
var twobaseLefted1 = document.getElementById("twobaseLeft1").value;
var twobaseLefted2 = document.getElementById("twobaseLeft2").value;
var twobaseLefted3 = document.getElementById("twobaseLeft3").value;
const twobaseLeft1 = document.getElementById("twobaseLeft1");
const twobaseLeft2 = document.getElementById("twobaseLeft2");
const twobaseLeft3 = document.getElementById("twobaseLeft3");
var threebaseLeftModal = document.getElementById("threebase-left-modal");
var threebaseLeftButton = document.getElementById("threebase-left");
var threebaseLeftCloseButton = document.getElementById("threebase-left-closeModal");
var threebaseLefted0 = document.getElementById("threebaseLeft0").value;
var threebaseLefted1 = document.getElementById("threebaseLeft1").value;
var threebaseLefted2 = document.getElementById("threebaseLeft2").value;
var threebaseLefted3 = document.getElementById("threebaseLeft3").value;
const threebaseLeft1 = document.getElementById("threebaseLeft1");
const threebaseLeft2 = document.getElementById("threebaseLeft2");
const threebaseLeft3 = document.getElementById("threebaseLeft3");
var onebaseCenterModal = document.getElementById("onebase-center-modal");
var onebaseCenterButton = document.getElementById("onebase-center");
var onebaseCenterCloseButton = document.getElementById("onebase-center-closeModal");
var onebaseCentered0 = document.getElementById("onebaseCenter0").value;
var onebaseCentered1 = document.getElementById("onebaseCenter1").value;
var onebaseCentered2 = document.getElementById("onebaseCenter2").value;
var onebaseCentered3 = document.getElementById("onebaseCenter3").value;
const onebaseCenter1 = document.getElementById("onebaseCenter1");
const onebaseCenter2 = document.getElementById("onebaseCenter2");
const onebaseCenter3 = document.getElementById("onebaseCenter3");
var twobaseCenterModal = document.getElementById("twobase-center-modal");
var twobaseCenterButton = document.getElementById("twobase-center");
var twobaseCenterCloseButton = document.getElementById("twobase-center-closeModal");
var twobaseCentered0 = document.getElementById("twobaseCenter0").value;
var twobaseCentered1 = document.getElementById("twobaseCenter1").value;
var twobaseCentered2 = document.getElementById("twobaseCenter2").value;
var twobaseCentered3 = document.getElementById("twobaseCenter3").value;
const twobaseCenter1 = document.getElementById("twobaseCenter1");
const twobaseCenter2 = document.getElementById("twobaseCenter2");
const twobaseCenter3 = document.getElementById("twobaseCenter3");
var threebaseCenterModal = document.getElementById("threebase-center-modal");
var threebaseCenterButton = document.getElementById("threebase-center");
var threebaseCenterCloseButton = document.getElementById("threebase-center-closeModal");
var threebaseCentered0 = document.getElementById("threebaseCenter0").value;
var threebaseCentered1 = document.getElementById("threebaseCenter1").value;
var threebaseCentered2 = document.getElementById("threebaseCenter2").value;
var threebaseCentered3 = document.getElementById("threebaseCenter3").value;
const threebaseCenter1 = document.getElementById("threebaseCenter1");
const threebaseCenter2 = document.getElementById("threebaseCenter2");
const threebaseCenter3 = document.getElementById("threebaseCenter3");
var onebaseRightModal = document.getElementById("onebase-right-modal");
var onebaseRightButton = document.getElementById("onebase-right");
var onebaseRightCloseButton = document.getElementById("onebase-right-closeModal");
var onebaseRighted0 = document.getElementById("onebaseRight0").value;
var onebaseRighted1 = document.getElementById("onebaseRight1").value;
var onebaseRighted2 = document.getElementById("onebaseRight2").value;
var onebaseRighted3 = document.getElementById("onebaseRight3").value;
const onebaseRight1 = document.getElementById("onebaseRight1");
const onebaseRight2 = document.getElementById("onebaseRight2");
const onebaseRight3 = document.getElementById("onebaseRight3");
var twobaseRightModal = document.getElementById("twobase-right-modal");
var twobaseRightButton = document.getElementById("twobase-right");
var twobaseRightCloseButton = document.getElementById("twobase-right-closeModal");
var twobaseRighted0 = document.getElementById("twobaseRight0").value;
var twobaseRighted1 = document.getElementById("twobaseRight1").value;
var twobaseRighted2 = document.getElementById("twobaseRight2").value;
var twobaseRighted3 = document.getElementById("twobaseRight3").value;
const twobaseRight1 = document.getElementById("twobaseRight1");
const twobaseRight2 = document.getElementById("twobaseRight2");
const twobaseRight3 = document.getElementById("twobaseRight3");
var threebaseRightModal = document.getElementById("threebase-right-modal");
var threebaseRightButton = document.getElementById("threebase-right");
var threebaseRightCloseButton = document.getElementById("threebase-right-closeModal");
var threebaseRighted0 = document.getElementById("threebaseRight0").value;
var threebaseRighted1 = document.getElementById("threebaseRight1").value;
var threebaseRighted2 = document.getElementById("threebaseRight2").value;
var threebaseRighted3 = document.getElementById("threebaseRight3").value;
const threebaseRight1 = document.getElementById("threebaseRight1");
const threebaseRight2 = document.getElementById("threebaseRight2");
const threebaseRight3 = document.getElementById("threebaseRight3");

var groundPitcherModal = document.getElementById("ground-pitcher-modal");
var groundPitcherButton = document.getElementById("ground-pitcher");
var groundPitcherCloseButton = document.getElementById("ground-pitcher-closeModal");
var groundPitchered0 = document.getElementById("groundPitcher0").value;
var groundPitchered1 = document.getElementById("groundPitcher1").value;
var groundPitchered2 = document.getElementById("groundPitcher2").value;
var groundPitchered3 = document.getElementById("groundPitcher3").value;
const groundPitcher1 = document.getElementById("groundPitcher1");
const groundPitcher2 = document.getElementById("groundPitcher2");
const groundPitcher3 = document.getElementById("groundPitcher3");
var flyPitcherModal = document.getElementById("fly-pitcher-modal");
var flyPitcherButton = document.getElementById("fly-pitcher");
var flyPitcherCloseButton = document.getElementById("fly-pitcher-closeModal");
var flyPitchered0 = document.getElementById("flyPitcher0").value;
var flyPitchered1 = document.getElementById("flyPitcher1").value;
var flyPitchered2 = document.getElementById("flyPitcher2").value;
var flyPitchered3 = document.getElementById("flyPitcher3").value;
const flyPitcher1 = document.getElementById("flyPitcher1");
const flyPitcher2 = document.getElementById("flyPitcher2");
const flyPitcher3 = document.getElementById("flyPitcher3");
var linerPitcherModal = document.getElementById("liner-pitcher-modal");
var linerPitcherButton = document.getElementById("liner-pitcher");
var linerPitcherCloseButton = document.getElementById("liner-pitcher-closeModal");
var linerPitchered0 = document.getElementById("linerPitcher0").value;
var linerPitchered1 = document.getElementById("linerPitcher1").value;
var linerPitchered2 = document.getElementById("linerPitcher2").value;
var linerPitchered3 = document.getElementById("linerPitcher3").value;
const linerPitcher1 = document.getElementById("linerPitcher1");
const linerPitcher2 = document.getElementById("linerPitcher2");
const linerPitcher3 = document.getElementById("linerPitcher3");
var groundCatcherModal = document.getElementById("ground-catcher-modal");
var groundCatcherButton = document.getElementById("ground-catcher");
var groundCatcherCloseButton = document.getElementById("ground-catcher-closeModal");
var groundCatchered0 = document.getElementById("groundCatcher0").value;
var groundCatchered1 = document.getElementById("groundCatcher1").value;
var groundCatchered2 = document.getElementById("groundCatcher2").value;
var groundCatchered3 = document.getElementById("groundCatcher3").value;
const groundCatcher1 = document.getElementById("groundCatcher1");
const groundCatcher2 = document.getElementById("groundCatcher2");
const groundCatcher3 = document.getElementById("groundCatcher3");
var flyCatcherModal = document.getElementById("fly-catcher-modal");
var flyCatcherButton = document.getElementById("fly-catcher");
var flyCatcherCloseButton = document.getElementById("fly-catcher-closeModal");
var flyCatchered0 = document.getElementById("flyCatcher0").value;
var flyCatchered1 = document.getElementById("flyCatcher1").value;
var flyCatchered2 = document.getElementById("flyCatcher2").value;
var flyCatchered3 = document.getElementById("flyCatcher3").value;
const flyCatcher1 = document.getElementById("flyCatcher1");
const flyCatcher2 = document.getElementById("flyCatcher2");
const flyCatcher3 = document.getElementById("flyCatcher3");
var linerCatcherModal = document.getElementById("liner-catcher-modal");
var linerCatcherButton = document.getElementById("liner-catcher");
var linerCatcherCloseButton = document.getElementById("liner-catcher-closeModal");
var linerCatchered0 = document.getElementById("linerCatcher0").value;
var linerCatchered1 = document.getElementById("linerCatcher1").value;
var linerCatchered2 = document.getElementById("linerCatcher2").value;
var linerCatchered3 = document.getElementById("linerCatcher3").value;
const linerCatcher1 = document.getElementById("linerCatcher1");
const linerCatcher2 = document.getElementById("linerCatcher2");
const linerCatcher3 = document.getElementById("linerCatcher3");
var groundFirstModal = document.getElementById("ground-first-modal");
var groundFirstButton = document.getElementById("ground-first");
var groundFirstCloseButton = document.getElementById("ground-first-closeModal");
var groundFirsted0 = document.getElementById("groundFirst0").value;
var groundFirsted1 = document.getElementById("groundFirst1").value;
var groundFirsted2 = document.getElementById("groundFirst2").value;
var groundFirsted3 = document.getElementById("groundFirst3").value;
const groundFirst1 = document.getElementById("groundFirst1");
const groundFirst2 = document.getElementById("groundFirst2");
const groundFirst3 = document.getElementById("groundFirst3");
var flyFirstModal = document.getElementById("fly-first-modal");
var flyFirstButton = document.getElementById("fly-first");
var flyFirstCloseButton = document.getElementById("fly-first-closeModal");
var flyFirsted0 = document.getElementById("flyFirst0").value;
var flyFirsted1 = document.getElementById("flyFirst1").value;
var flyFirsted2 = document.getElementById("flyFirst2").value;
var flyFirsted3 = document.getElementById("flyFirst3").value;
const flyFirst1 = document.getElementById("flyFirst1");
const flyFirst2 = document.getElementById("flyFirst2");
const flyFirst3 = document.getElementById("flyFirst3");
var linerFirstModal = document.getElementById("liner-first-modal");
var linerFirstButton = document.getElementById("liner-first");
var linerFirstCloseButton = document.getElementById("liner-first-closeModal");
var linerFirsted0 = document.getElementById("linerFirst0").value;
var linerFirsted1 = document.getElementById("linerFirst1").value;
var linerFirsted2 = document.getElementById("linerFirst2").value;
var linerFirsted3 = document.getElementById("linerFirst3").value;
const linerFirst1 = document.getElementById("linerFirst1");
const linerFirst2 = document.getElementById("linerFirst2");
const linerFirst3 = document.getElementById("linerFirst3");

runnerCheck1(onebasePitcherButton,onebasePitcherModal,onebasePitcherCloseButton,onebasePitchered0,onebasePitchered1,onebasePitchered2,onebasePitchered3,"onebasePitcher0","onebasePitcher1","onebasePitcher2","onebasePitcher3")
runnerCheck1(onebaseCatcherButton,onebaseCatcherModal,onebaseCatcherCloseButton,onebaseCatchered0,onebaseCatchered1,onebaseCatchered2,onebaseCatchered3,"onebaseCatcher0","onebaseCatcher1","onebaseCatcher2","onebaseCatcher3")
runnerCheck1(onebaseFirstButton,onebaseFirstModal,onebaseFirstCloseButton,onebaseFirsted0,onebaseFirsted1,onebaseFirsted2,onebaseFirsted3,"onebaseFirst0","onebaseFirst1","onebaseFirst2","onebaseFirst3")
runnerCheck1(onebaseSecondButton,onebaseSecondModal,onebaseSecondCloseButton,onebaseSeconded0,onebaseSeconded1,onebaseSeconded2,onebaseSeconded3,"onebaseSecond0","onebaseSecond1","onebaseSecond2","onebaseSecond3")
runnerCheck1(onebaseThirdButton,onebaseThirdModal,onebaseThirdCloseButton,onebaseThirded0,onebaseThirded1,onebaseThirded2,onebaseThirded3,"onebaseThird0","onebaseThird1","onebaseThird2","onebaseThird3")
runnerCheck1(onebaseShortButton,onebaseShortModal,onebaseShortCloseButton,onebaseShorted0,onebaseShorted1,onebaseShorted2,onebaseShorted3,"onebaseShort0","onebaseShort1","onebaseShort2","onebaseShort3")
runnerCheck1(onebaseLeftButton,onebaseLeftModal,onebaseLeftCloseButton,onebaseLefted0,onebaseLefted1,onebaseLefted2,onebaseLefted3,"onebaseLeft0","onebaseLeft1","onebaseLeft2","onebaseLeft3")
runnerCheck1(twobaseLeftButton,twobaseLeftModal,twobaseLeftCloseButton,twobaseLefted0,twobaseLefted1,twobaseLefted2,twobaseLefted3,"twobaseLeft0","twobaseLeft1","twobaseLeft2","twobaseLeft3")
runnerCheck1(threebaseLeftButton,threebaseLeftModal,threebaseLeftCloseButton,threebaseLefted0,threebaseLefted1,threebaseLefted2,threebaseLefted3,"threebaseLeft0","threebaseLeft1","threebaseLeft2","threebaseLeft3")
runnerCheck1(onebaseCenterButton,onebaseCenterModal,onebaseCenterCloseButton,onebaseCentered0,onebaseCentered1,onebaseCentered2,onebaseCentered3,"onebaseCenter0","onebaseCenter1","onebaseCenter2","onebaseCenter3")
runnerCheck1(twobaseCenterButton,twobaseCenterModal,twobaseCenterCloseButton,twobaseCentered0,twobaseCentered1,twobaseCentered2,twobaseCentered3,"twobaseCenter0","twobaseCenter1","twobaseCenter2","twobaseCenter3")
runnerCheck1(threebaseCenterButton,threebaseCenterModal,threebaseCenterCloseButton,threebaseCentered0,threebaseCentered1,threebaseCentered2,threebaseCentered3,"threebaseCenter0","threebaseCenter1","threebaseCenter2","threebaseCenter3")
runnerCheck1(onebaseRightButton,onebaseRightModal,onebaseRightCloseButton,onebaseRighted0,onebaseRighted1,onebaseRighted2,onebaseRighted3,"onebaseRight0","onebaseRight1","onebaseRight2","onebaseRight3")
runnerCheck1(twobaseRightButton,twobaseRightModal,twobaseRightCloseButton,twobaseRighted0,twobaseRighted1,twobaseRighted2,twobaseRighted3,"twobaseRight0","twobaseRight1","twobaseRight2","twobaseRight3")
runnerCheck1(threebaseRightButton,threebaseRightModal,threebaseRightCloseButton,threebaseRighted0,threebaseRighted1,threebaseRighted2,threebaseRighted3,"threebaseRight0","threebaseRight1","threebaseRight2","threebaseRight3")

runnerCheck2(groundPitcherButton,groundPitcherModal,groundPitcherCloseButton,groundPitchered0,groundPitchered1,groundPitchered2,groundPitchered3,"groundPitcher0","groundPitcher1","groundPitcher2","groundPitcher3")
runnerCheck2(flyPitcherButton,flyPitcherModal,flyPitcherCloseButton,flyPitchered0,flyPitchered1,flyPitchered2,flyPitchered3,"flyPitcher0","flyPitcher1","flyPitcher2","flyPitcher3")
runnerCheck2(linerPitcherButton,linerPitcherModal,linerPitcherCloseButton,linerPitchered0,linerPitchered1,linerPitchered2,linerPitchered3,"linerPitcher0","linerPitcher1","linerPitcher2","linerPitcher3")
runnerCheck2(groundCatcherButton,groundCatcherModal,groundCatcherCloseButton,groundCatchered0,groundCatchered1,groundCatchered2,groundCatchered3,"groundCatcher0","groundCatcher1","groundCatcher2","groundCatcher3")
runnerCheck2(flyCatcherButton,flyCatcherModal,flyCatcherCloseButton,flyCatchered0,flyCatchered1,flyCatchered2,flyCatchered3,"flyCatcher0","flyCatcher1","flyCatcher2","flyCatcher3")
runnerCheck2(linerCatcherButton,linerCatcherModal,linerCatcherCloseButton,linerCatchered0,linerCatchered1,linerCatchered2,linerCatchered3,"linerCatcher0","linerCatcher1","linerCatcher2","linerCatcher3")
runnerCheck2(groundFirstButton,groundFirstModal,groundFirstCloseButton,groundFirsted0,groundFirsted1,groundFirsted2,groundFirsted3,"groundFirst0","groundFirst1","groundFirst2","groundFirst3")
runnerCheck2(flyFirstButton,flyFirstModal,flyFirstCloseButton,flyFirsted0,flyFirsted1,flyFirsted2,flyFirsted3,"flyFirst0","flyFirst1","flyFirst2","flyFirst3")
runnerCheck2(linerFirstButton,linerFirstModal,linerFirstCloseButton,linerFirsted0,linerFirsted1,linerFirsted2,linerFirsted3,"linerFirst0","linerFirst1","linerFirst2","linerFirst3")

function runnerCheck1(ButtonName,ModalName,CloseName,Named0,Named1,Named2,Named3,Letter0,Letter1,Letter2,Letter3){
// When the user clicks the button, open the modal 
ButtonName.onclick = function() {
  ModalName.style.display = "block";
}

// When the user clicks on OK, close the modal
CloseName.onclick = function() {
  allModalNone()
  countreset()
  var Named0 = document.getElementById(Letter0).value;
  var Named1 = document.getElementById(Letter1).value;
  var Named2 = document.getElementById(Letter2).value;
  var Named3 = document.getElementById(Letter3).value;;

  for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] === 3){
      playerRunner1[i] = parseInt(Named3)
    }
  }
  for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] === 2){
      playerRunner1[i] = parseInt(Named2)
    }
  }
  for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] === 1){
      playerRunner1[i] = parseInt(Named1)
    }
  }
  playerRunner1[battercurrentIndex1] = parseInt(Named0)
  
  for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] === 4){
      score1++
      console.log(score1)
      playerRunner1[i]=0
    }
  }

  for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] < 0){
      outcount()
      console.log(outcurrentIndex)
      playerRunner1[i]=0
      if (outcurrentIndex === 0){
        for (let i = 0; i < playerRunner1.length; i++) {
          playerRunner1[i]=0
        }
      }
    }
  }

  runnerLight()
  
  
  console.log(playerRunner1)
  allPullDownChange()
  
  battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
}
}

function runnerCheck2(ButtonName,ModalName,CloseName,Named0,Named1,Named2,Named3,Letter0,Letter1,Letter2,Letter3){
  // When the user clicks the button, open the modal 
  
    ButtonName.onclick = function() {
      if(playerRunner1.includes(1)||playerRunner1.includes(2)||playerRunner1.includes(3)){
        ModalName.style.display = "block";
      } else {
        outcount()
        allModalNone()
      }
  } 

  


  // When the user clicks on OK, close the modal
  CloseName.onclick = function() {
    allModalNone()
    countreset()
    var Named0 = document.getElementById(Letter0).value;
    var Named1 = document.getElementById(Letter1).value;
    var Named2 = document.getElementById(Letter2).value;
    var Named3 = document.getElementById(Letter3).value;;
  
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] === 3){
        playerRunner1[i] = parseInt(Named3)
      }
    }
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] === 2){
        playerRunner1[i] = parseInt(Named2)
      }
    }
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] === 1){
        playerRunner1[i] = parseInt(Named1)
      }
    }
    playerRunner1[battercurrentIndex1] = parseInt(Named0)
    
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] === 4){
        score1++
        console.log(score1)
        playerRunner1[i]=0
      }
    }
  
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] < 0){
        outcount()
        console.log(outcurrentIndex)
        playerRunner1[i]=0
        if (outcurrentIndex === 0){
          for (let i = 0; i < playerRunner1.length; i++) {
            playerRunner1[i]=0
          }
        }
      }
    }
  
    runnerLight()
    
    
    console.log(playerRunner1)
    allPullDownChange()
    
    battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
  }
  }


function allPullDownChange(){
  pullDownChange(onebasePitcher1,onebasePitcher2,onebasePitcher3,"onebasePitcher1","onebasePitcher2","onebasePitcher3")
  pullDownChange(onebaseCatcher1,onebaseCatcher2,onebaseCatcher3,"onebaseCatcher1","onebaseCatcher2","onebaseCatcher3")
  pullDownChange(onebaseFirst1,onebaseFirst2,onebaseFirst3,"onebaseFirst1","onebaseFirst2","onebaseFirst3")
  pullDownChange(onebaseSecond1,onebaseSecond2,onebaseSecond3,"onebaseSecond1","onebaseSecond2","onebaseSecond3")
  pullDownChange(onebaseThird1,onebaseThird2,onebaseThird3,"onebaseThird1","onebaseThird2","onebaseThird3")
  pullDownChange(onebaseShort1,onebaseShort2,onebaseShort3,"onebaseShort1","onebaseShort2","onebaseShort3")
  pullDownChange(onebaseLeft1,onebaseLeft2,onebaseLeft3,"onebaseLeft1","onebaseLeft2","onebaseLeft3")
  pullDownChange(twobaseLeft1,twobaseLeft2,twobaseLeft3,"twobaseLeft1","twobaseLeft2","twobaseLeft3")
  pullDownChange(threebaseLeft1,threebaseLeft2,threebaseLeft3,"threebaseLeft1","threebaseLeft2","threebaseLeft3")
  pullDownChange(onebaseCenter1,onebaseCenter2,onebaseCenter3,"onebaseCenter1","onebaseCenter2","onebaseCenter3")
  pullDownChange(twobaseCenter1,twobaseCenter2,twobaseCenter3,"twobaseCenter1","twobaseCenter2","twobaseCenter3")
  pullDownChange(threebaseCenter1,threebaseCenter2,threebaseCenter3,"threebaseCenter1","threebaseCenter2","threebaseCenter3")
  pullDownChange(onebaseRight1,onebaseRight2,onebaseRight3,"onebaseRight1","onebaseRight2","onebaseRight3")
  pullDownChange(twobaseRight1,twobaseRight2,twobaseRight3,"twobaseRight1","twobaseRight2","twobaseRight3")
  pullDownChange(threebaseRight1,threebaseRight2,threebaseRight3,"threebaseRight1","threebaseRight2","threebaseRight3")

  pullDownChange(groundPitcher1,groundPitcher2,groundPitcher3,"groundPitcher1","groundPitcher2","groundPitcher3")
  pullDownChange(flyPitcher1,flyPitcher2,flyPitcher3,"flyPitcher1","flyPitcher2","flyPitcher3")
  pullDownChange(linerPitcher1,linerPitcher2,linerPitcher3,"linerPitcher1","linerPitcher2","linerPitcher3")
  pullDownChange(groundCatcher1,groundCatcher2,groundCatcher3,"groundCatcher1","groundCatcher2","groundCatcher3")
  pullDownChange(flyCatcher1,flyCatcher2,flyCatcher3,"flyCatcher1","flyCatcher2","flyCatcher3")
  pullDownChange(linerCatcher1,linerCatcher2,linerCatcher3,"linerCatcher1","linerCatcher2","linerCatcher3")
  pullDownChange(groundFirst1,groundFirst2,groundFirst3,"groundFirst1","groundFirst2","groundFirst3")
  pullDownChange(flyFirst1,flyFirst2,flyFirst3,"flyFirst1","flyFirst2","flyFirst3")
  pullDownChange(linerFirst1,linerFirst2,linerFirst3,"linerFirst1","linerFirst2","linerFirst3")
}
// playerRunner1に1が含まれている場合は、プルダウンの内容を変更する
function pullDownChange(Name1,Name2,Name3,Letter1,Letter2,Letter3){

  if (playerRunner1.includes(1)) {
    Name1.innerHTML = `
    <option value=1>1塁</option>
    <option value=2>2塁</option>
    <option value=3>3塁</option>
    <option value=4>得点</option>
    <option value=-1>アウト</option>
    `;
  } else {
  Name1.innerHTML = `
  <option value=0>-</option>
  `;
}

if (playerRunner1.includes(2)) {
  Name2.innerHTML = `
  <option value=2>2塁</option>
  <option value=3>3塁</option>
  <option value=4>得点</option>
  <option value=-1>アウト</option>
  `;
} else {
  Name2.innerHTML = `
  <option value=0>-</option>
  `;
}

if (playerRunner1.includes(3)) {
  Name3.innerHTML = `
  <option value=3>3塁</option>
  <option value=4>得点</option>
  <option value=-1>アウト</option>
  `;
} else {
  Name3.innerHTML = `
  <option value=0>-</option>
  `;
}
}

function runnerLight(){

  if (playerRunner1.includes(1)) {
    if (squareLight) {
      const square1 = document.getElementById("square1");
      square1.classList.add("light");
    }
} else {
  if (squareLight) {
    const squares = squareLight.children;
    squares[0].classList.remove("light");
  }
}

if (playerRunner1.includes(2)) {
  if (squareLight) {
    const square2 = document.getElementById("square2");
    square2.classList.add("light");
  }
} else {
  if (squareLight) {
    const squares = squareLight.children;
    squares[1].classList.remove("light");
  }
}

if (playerRunner1.includes(3)) {
  if (squareLight) {
    const square3 = document.getElementById("square3");
    square3.classList.add("light");
  }
} else {
  if (squareLight) {
    const squares = squareLight.children;
    squares[2].classList.remove("light");
  }
}
}