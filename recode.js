strikecurrentIndex=0
ballcurrentIndex=0
outcurrentIndex=0
battercurrentIndex1=0
battercurrentIndex2=0
playerRunner1=[0,0,0,0,0,0,0,0,0]
playerRunner2=[0,0,0,0,0,0,0,0,0]
playerShowing1 = document.getElementById("player-showing1")
playerShowing2 = document.getElementById("player-showing2")

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

const onebaseButton = document.querySelector('#onebase');
const twobaseButton = document.querySelector('#twobase');
const threebaseButton = document.querySelector('#threebase');
const homerunButton = document.querySelector('#homerun');

onebaseButton.addEventListener('click', () => {
	onebaseModal.style.display = 'block';
});

twobaseButton.addEventListener('click', () => {
	twobaseModal.style.display = 'block';
});

threebaseButton.addEventListener('click', () => {
	threebaseModal.style.display = 'block';
});

homerunButton.addEventListener('click', () => {
	homerunModal.style.display = 'block';
});

const onebaseModal = document.querySelector('#onebase-Modal');
const twobaseModal = document.querySelector('#twobase-Modal');
const threebaseModal = document.querySelector('#threebase-Modal');
const homerunModal = document.querySelector('#homerun-Modal');


function hit3(buttonId, position) {;
  document.querySelector(buttonId).addEventListener("click", () => {
    alert(position);
    allMldalNone()
  })
}

function allMldalNone(){
  hitModal.style.display = 'none';
  onebaseModal.style.display = 'none';
  twobaseModal.style.display = 'none';
  threebaseModal.style.display = 'none';
  homerunModal.style.display = 'none';
  outModal.style.display = 'none';
  groundModal.style.display = 'none';
  flyModal.style.display = 'none';
  linerModal.style.display = 'none';
}

hit3("#onebase-pitcher","ピッチャーへの内野安打！")
hit3("#onebase-catcher","キャッチャーへの内野安打！")
hit3("#onebase-first","ファーストへの内野安打！")
hit3("#onebase-second","セカンドへの内野安打！")
hit3("#onebase-third","サードへの内野安打！")
hit3("#onebase-short","ショートへの内野安打！")
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

const groundButton = document.querySelector('#ground');
const flyButton = document.querySelector('#fly');
const linerButton = document.querySelector('#liner');

groundButton.addEventListener('click', () => {
	groundModal.style.display = 'block';
});

flyButton.addEventListener('click', () => {
	flyModal.style.display = 'block';
});

linerButton.addEventListener('click', () => {
	linerModal.style.display = 'block';
});

const groundModal = document.querySelector('#ground-Modal');
const flyModal = document.querySelector('#fly-Modal');
const linerModal = document.querySelector('#liner-Modal');

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
  if (event.target == hitModal || event.target == onebaseModal || event.target == twobaseModal || event.target == threebaseModal || event.target == homerunModal || event.target == outModal || event.target == groundModal || event.target == flyModal || event.target == linerModal) {
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