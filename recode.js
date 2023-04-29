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
      if (outcurrentIndex === 2){
        outcurrentIndex = 0
        let outLight = document.getElementById("out-light")
        for (let e of outLight.children) {
            e.classList.remove("red")
        }
      } else {
        outcurrentIndex++
        let outLight = document.getElementById("out-light")
        outLight.children[outcurrentIndex-1].classList.add("red")
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

groundButton.addEventListener('click', () => {
  alert('ゴロ');
  outModal.style.display = 'none';
});

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
