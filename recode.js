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


function out(buttonId) {;
  document.getElementById(buttonId).addEventListener("click", () => {
  countreset()
  outcount()
});
}

// out("ground")
// out("fly")
// out("foulfly")

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



let errorButton = document.getElementById("error");
errorButton.addEventListener("click", () => { //ファール押したら

  let squareLight = document.getElementById("square-light")
    squareLight.children[0].classList.add("light")
})


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

function allMldalNone(){
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
  outSecondModal.style.display = 'none';
  outThirdModal.style.display = 'none';
  outShortModal.style.display = 'none';
  outLeftModal.style.display = 'none';
  outCenterModal.style.display = 'none';
  outRightModal.style.display = 'none';

  onebaseLeftModal.style.display = 'none';
  twobaseLeftModal.style.display = 'none';
}

hit3("#onebase-pitcher","ピッチャーへの内野安打！")
hit3("#twobase-pitcher","ピッチャーへの二塁打！")
hit3("#threebase-pitcher","ピッチャーへの三塁打！")
hit3("#homerun-pitcher","ピッチャーへのホームラン！")
hit3("#onebase-catcher","キャッチャーへの内野安打！")
hit3("#twobase-catcher","キャッチャーへの二塁打！")
hit3("#threebase-catcher","キャッチャーへの三塁打！")
hit3("#homerun-catcher","キャッチャーへのホームラン！")
hit3("#onebase-first","ファーストへの内野安打！")
hit3("#twobase-first","ファーストへの二塁打！")
hit3("#threebase-first","ファーストへの三塁打！")
hit3("#homerun-first","ファーストへのホームラン！")
hit3("#onebase-second","セカンドへの内野安打！")
hit3("#twobase-second","セカンドへの二塁打！")
hit3("#threebase-second","セカンドへの三塁打！")
hit3("#homerun-second","セカンドへのホームラン！")
hit3("#onebase-third","サードへの内野安打！")
hit3("#twobase-third","サードへの二塁打！")
hit3("#threebase-third","サードへの三塁打！")
hit3("#homerun-third","サードへのホームラン！")
hit3("#onebase-short","ショートへの内野安打！")
hit3("#twobase-short","ショートへの二塁打！")
hit3("#threebase-short","ショートへの三塁打！")
hit3("#homerun-short","ショートへのホームラン！")
hit3("#onebase-left","レフト前ヒット！")
hit3("#onebase-center","センター前ヒット！")
hit3("#onebase-right","ライト前ヒット！")
hit3("#twobase-left","レフトへのツーベース！")
hit3("#twobase-center","センターへのツーベース！")
hit3("#twobase-right","ライトへのツーベース！")
hit3("#threebase-left","レフトへのスリーベース！")
hit3("#threebase-center","センターへのスリーベース！")
hit3("#threebase-right","ライトへのスリーベース！")
hit3("#homerun-left","レフトへのホームラン！")
hit3("#homerun-center","センターへのホームラン！")
hit3("#homerun-right","ライトへのホームラン！")


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

outSecondButton.addEventListener('click', () => {
	outSecondModal.style.display = 'block';
});

outThirdButton.addEventListener('click', () => {
	outThirdModal.style.display = 'block';
});

outShortButton.addEventListener('click', () => {
	outShortModal.style.display = 'block';
});

outLeftButton.addEventListener('click', () => {
	outLeftModal.style.display = 'block';
});

outCenterButton.addEventListener('click', () => {
	outCenterModal.style.display = 'block';
});

outRightButton.addEventListener('click', () => {
	outRightModal.style.display = 'block';
});

const outPitcherModal = document.querySelector('#out-pitcher-Modal');
const outCatcherModal = document.querySelector('#out-catcher-Modal');
const outFirstModal = document.querySelector('#out-first-Modal');
const outSecondModal = document.querySelector('#out-second-Modal');
const outThirdModal = document.querySelector('#out-third-Modal');
const outShortModal = document.querySelector('#out-short-Modal');
const outLeftModal = document.querySelector('#out-left-Modal');
const outCenterModal = document.querySelector('#out-center-Modal');
const outRightModal = document.querySelector('#out-right-Modal');

function out3(buttonId, position) {;
  document.querySelector(buttonId).addEventListener("click", () => {
    alert(position);
    allMldalNone()
  })
}

out3("#ground-pitcher","ピッチャーゴロ")
out3("#ground-catcher","キャッチャーゴロ")
out3("#ground-first","ファーストゴロ")
out3("#ground-second","セカンドゴロ")
out3("#ground-third","サードゴロ")
out3("#ground-short","ショートゴロ")
out3("#ground-left","レフトゴロ")
out3("#ground-center","センターゴロ")
out3("#ground-right","ライトゴロ")
out3("#fly-pitcher","ピッチャーフライ")
out3("#fly-catcher","キャッチャーフライ")
out3("#fly-first","ファーストフライ")
out3("#fly-second","セカンドフライ")
out3("#fly-third","サードフライ")
out3("#fly-short","ショートフライ")
out3("#fly-left","レフトフライ")
out3("#fly-center","センターフライ")
out3("#fly-right","ライトフライ")
out3("#liner-pitcher","ピッチャーライナー")
out3("#liner-catcher","キャッチャーライナー")
out3("#liner-first","ファーストライナー")
out3("#liner-second","セカンドライナー")
out3("#liner-third","サードライナー")
out3("#liner-short","ショートライナー")
out3("#liner-left","レフトライナー")
out3("#liner-center","センターライナー")
out3("#liner-right","ライトライナー")

window.addEventListener('click', (event) => {
  if (event.target == hitModal || event.target == hitPitcherModal || event.target == hitCatcherModal || event.target == hitFirstModal || event.target == hitSecondModal || event.target == hitThirdModal || event.target == hitShortModal || event.target == hitLeftModal || event.target == hitCenterModal || event.target == hitRightModal || event.target == outModal || event.target == outPitcherModal || event.target == outCatcherModal || event.target == outFirstModal || event.target == outSecondModal || event.target == outThirdModal || event.target == outShortModal || event.target == outLeftModal || event.target == outCenterModal || event.target == outRightModal || event.target == onebaseLeftModal || event.target == twobaseLeftModal) {
    allMldalNone()
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

runnerCheck(onebaseLeftButton,onebaseLeftModal,onebaseLeftCloseButton,onebaseLefted0,onebaseLefted1,onebaseLefted2,onebaseLefted3,"onebaseLeft0","onebaseLeft1","onebaseLeft2","onebaseLeft3")
runnerCheck(twobaseLeftButton,twobaseLeftModal,twobaseLeftCloseButton,twobaseLefted0,twobaseLefted1,twobaseLefted2,twobaseLefted3,"twobaseLeft0","twobaseLeft1","twobaseLeft2","twobaseLeft3")
function runnerCheck(ButtonName,ModalName,CloseName,Named0,Named1,Named2,Named3,Letter0,Letter1,Letter2,Letter3){
// When the user clicks the button, open the modal 
ButtonName.onclick = function() {
  ModalName.style.display = "block";
}

// When the user clicks on OK, close the modal
CloseName.onclick = function() {
  allMldalNone()
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
  console.log(playerRunner1)
  allPullDownChange()
  
  battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
}
}


function allPullDownChange(){
  pullDownChange(onebaseLeft1,onebaseLeft2,onebaseLeft3,"onebaseLeft1","onebaseLef2","onebaseLeft3")
  pullDownChange(twobaseLeft1,twobaseLeft2,twobaseLeft3,"twobaseLeft1","twobaseLef2","twobaseLeft3")
}
// playerRunner1に1が含まれている場合は、プルダウンの内容を変更する
function pullDownChange(Name1,Name2,Name3,Letter1,Letter2,Letter3){

  if (playerRunner1.includes(1)) {
    Name1.innerHTML = `
    <option value=1>1塁</option>
    <option value=2>2塁</option>
    <option value=3>3塁</option>
    <option value=4>得点</option>
    <option value=0>アウト</option>
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
  <option value=0>アウト</option>
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
  <option value=0>アウト</option>
  `;
} else {
  Name3.innerHTML = `
  <option value=0>-</option>
  `;
}
}