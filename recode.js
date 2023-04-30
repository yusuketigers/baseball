strikecurrentIndex=0
ballcurrentIndex=0
outcurrentIndex=0

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

out("ground")
out("fly")
out("foulfly")

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


const hitButton = document.querySelector('.hit');
const hitModal = document.querySelector('#hitModal');
const onceButton = document.querySelector('#once');
const doubleButton = document.querySelector('#double');
const tripleButton = document.querySelector('#triple');
const fourthButton = document.querySelector('#fourth');

hitButton.addEventListener('click', () => {
	hitModal.style.display = 'block';
});

onceButton.addEventListener('click', () => {
  alert('単打！');
  hitModal.style.display = 'none';
});

doubleButton.addEventListener('click', () => {
	alert('二塁打！');
	hitModal.style.display = 'none';
});

tripleButton.addEventListener('click', () => {
	alert('三塁打！');
	hitModal.style.display = 'none';
});

fourthButton.addEventListener('click', () => {
	alert('本塁打！');
	hitModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	if (event.target == hitModal) {
		hitModal.style.display = 'none';
	}
});

const outButton = document.querySelector('.out');
const outModal = document.querySelector('#outModal');
const groundButton = document.querySelector('#ground');
const flyButton = document.querySelector('#fly');
const foulflyButton = document.querySelector('#foulfly');

outButton.addEventListener('click', () => {
	outModal.style.display = 'block';
});

// groundButton.addEventListener('click', () => {
//   alert('ゴロ');
//   outModal.style.display = 'none';
// });

flyButton.addEventListener('click', () => {
	alert('フライ');
	outModal.style.display = 'none';
});

foulflyButton.addEventListener('click', () => {
	alert('ファールフライ');
	outModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	if (event.target == outModal) {
		outModal.style.display = 'none';
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
}

function updateParagraph2(cell) {
  const text = cell.innerText;
  document.querySelector('#output2').textContent = text;
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
  console.log(playerList1); // リストをコンソールに表示
  console.log(playerList2); // リストをコンソールに表示
}
