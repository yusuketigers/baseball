strikecurrentIndex=0
ballcurrentIndex=0
outcurrentIndex=0
battercurrentIndex1=0
battercurrentIndex2=0
playerRunner1=[0,0,0,0,0,0,0,0,0]
playerRunner2=[0,0,0,0,0,0,0,0,0]
playerResult1=["","","","","","","","",""]
playerResult2=["","","","","","","","",""]
var playerList1 = [];
var playerList2 = [];
var table1 = document.getElementById("player-table1");
var table2 = document.getElementById("player-table2");
var cells1 = table1.getElementsByTagName('td');
var cells2 = table2.getElementsByTagName('td');
let playerPosition1 = [];
let playerPosition2 = [];
let playerName1 = [];
let playerName2 = [];
playerShowing1 = document.getElementById("player-showing1")
playerShowing2 = document.getElementById("player-showing2")
playerResultShowing1 = document.getElementById("player-result-showing1")
playerResultShowing2 = document.getElementById("player-result-showing2")
resultShowing = document.getElementById("result-showing")
score=0
nowScore=0
inningcurrentIndex=0
outNumber=0
hit1=0
hit2=0
nextOut=0
var tableCells = document.getElementsByTagName("td");
const squareLight = document.getElementById("square-light");
const hit1Button = document.querySelector('#hit1');
const hitPitcherButton = document.querySelector('#hit-pitcher');
const hitCatcherButton = document.querySelector('#hit-catcher');
const hitFirstButton = document.querySelector('#hit-first');
const hitSecondButton = document.querySelector('#hit-second');
const hitThirdButton = document.querySelector('#hit-third');
const hitShortButton = document.querySelector('#hit-short');
const hitLeftButton = document.querySelector('#hit-left');
const hitCenterButton = document.querySelector('#hit-center');
const hitRightButton = document.querySelector('#hit-right');
const hitModal = document.querySelector('#hitModal');
const hitPitcherModal = document.querySelector('#hit-pitcher-Modal');
const hitCatcherModal = document.querySelector('#hit-catcher-Modal');
const hitFirstModal = document.querySelector('#hit-first-Modal');
const hitSecondModal = document.querySelector('#hit-second-Modal');
const hitThirdModal = document.querySelector('#hit-third-Modal');
const hitShortModal = document.querySelector('#hit-short-Modal');
const hitLeftModal = document.querySelector('#hit-left-Modal');
const hitCenterModal = document.querySelector('#hit-center-Modal');
const hitRightModal = document.querySelector('#hit-right-Modal');
const out1Button = document.querySelector('#out1');
const outPitcherButton = document.querySelector('#out-pitcher');
const outCatcherButton = document.querySelector('#out-catcher');
const outFirstButton = document.querySelector('#out-first');
const outSecondButton = document.querySelector('#out-second');
const outThirdButton = document.querySelector('#out-third');
const outShortButton = document.querySelector('#out-short');
const outLeftButton = document.querySelector('#out-left');
const outCenterButton = document.querySelector('#out-center');
const outRightButton = document.querySelector('#out-right');
const outModal = document.querySelector('#outModal');
const outPitcherModal = document.querySelector('#out-pitcher-Modal');
const outCatcherModal = document.querySelector('#out-catcher-Modal');
const outFirstModal = document.querySelector('#out-first-Modal');
const outSecondModal = document.querySelector('#out-second-Modal');
const outThirdModal = document.querySelector('#out-third-Modal');
const outShortModal = document.querySelector('#out-short-Modal');
const outLeftModal = document.querySelector('#out-left-Modal');
const outCenterModal = document.querySelector('#out-center-Modal');
const outRightModal = document.querySelector('#out-right-Modal');
const nextButton = document.querySelector('#next');
const runnerModal = document.querySelector('#runnerModal');
const errorButton = document.querySelector('#error');
const stealButton = document.querySelector('#steal');
const wildPitchButton = document.querySelector('#wild-pitch');
const passBallButton = document.querySelector('#pass-ball');
const restraintButton = document.querySelector('#restraint');
const errorModal = document.querySelector('#error-Modal');
const stealModal = document.querySelector('#steal-Modal');
const wildPitchModal = document.querySelector('#wild-pitch-Modal');
const passBallModal = document.querySelector('#pass-ball-Modal');
const restraintModal = document.querySelector('#restraint-Modal');
const cells = document.querySelectorAll('td');
let outLight = document.getElementById("out-light")
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
var groundSecondModal = document.getElementById("ground-second-modal");
var groundSecondButton = document.getElementById("ground-second");
var groundSecondCloseButton = document.getElementById("ground-second-closeModal");
var groundSeconded0 = document.getElementById("groundSecond0").value;
var groundSeconded1 = document.getElementById("groundSecond1").value;
var groundSeconded2 = document.getElementById("groundSecond2").value;
var groundSeconded3 = document.getElementById("groundSecond3").value;
const groundSecond1 = document.getElementById("groundSecond1");
const groundSecond2 = document.getElementById("groundSecond2");
const groundSecond3 = document.getElementById("groundSecond3");
var flySecondModal = document.getElementById("fly-second-modal");
var flySecondButton = document.getElementById("fly-second");
var flySecondCloseButton = document.getElementById("fly-second-closeModal");
var flySeconded0 = document.getElementById("flySecond0").value;
var flySeconded1 = document.getElementById("flySecond1").value;
var flySeconded2 = document.getElementById("flySecond2").value;
var flySeconded3 = document.getElementById("flySecond3").value;
const flySecond1 = document.getElementById("flySecond1");
const flySecond2 = document.getElementById("flySecond2");
const flySecond3 = document.getElementById("flySecond3");
var linerSecondModal = document.getElementById("liner-second-modal");
var linerSecondButton = document.getElementById("liner-second");
var linerSecondCloseButton = document.getElementById("liner-second-closeModal");
var linerSeconded0 = document.getElementById("linerSecond0").value;
var linerSeconded1 = document.getElementById("linerSecond1").value;
var linerSeconded2 = document.getElementById("linerSecond2").value;
var linerSeconded3 = document.getElementById("linerSecond3").value;
const linerSecond1 = document.getElementById("linerSecond1");
const linerSecond2 = document.getElementById("linerSecond2");
const linerSecond3 = document.getElementById("linerSecond3");
var groundThirdModal = document.getElementById("ground-third-modal");
var groundThirdButton = document.getElementById("ground-third");
var groundThirdCloseButton = document.getElementById("ground-third-closeModal");
var groundThirded0 = document.getElementById("groundThird0").value;
var groundThirded1 = document.getElementById("groundThird1").value;
var groundThirded2 = document.getElementById("groundThird2").value;
var groundThirded3 = document.getElementById("groundThird3").value;
const groundThird1 = document.getElementById("groundThird1");
const groundThird2 = document.getElementById("groundThird2");
const groundThird3 = document.getElementById("groundThird3");
var flyThirdModal = document.getElementById("fly-third-modal");
var flyThirdButton = document.getElementById("fly-third");
var flyThirdCloseButton = document.getElementById("fly-third-closeModal");
var flyThirded0 = document.getElementById("flyThird0").value;
var flyThirded1 = document.getElementById("flyThird1").value;
var flyThirded2 = document.getElementById("flyThird2").value;
var flyThirded3 = document.getElementById("flyThird3").value;
const flyThird1 = document.getElementById("flyThird1");
const flyThird2 = document.getElementById("flyThird2");
const flyThird3 = document.getElementById("flyThird3");
var linerThirdModal = document.getElementById("liner-third-modal");
var linerThirdButton = document.getElementById("liner-third");
var linerThirdCloseButton = document.getElementById("liner-third-closeModal");
var linerThirded0 = document.getElementById("linerThird0").value;
var linerThirded1 = document.getElementById("linerThird1").value;
var linerThirded2 = document.getElementById("linerThird2").value;
var linerThirded3 = document.getElementById("linerThird3").value;
const linerThird1 = document.getElementById("linerThird1");
const linerThird2 = document.getElementById("linerThird2");
const linerThird3 = document.getElementById("linerThird3");
var groundShortModal = document.getElementById("ground-short-modal");
var groundShortButton = document.getElementById("ground-short");
var groundShortCloseButton = document.getElementById("ground-short-closeModal");
var groundShorted0 = document.getElementById("groundShort0").value;
var groundShorted1 = document.getElementById("groundShort1").value;
var groundShorted2 = document.getElementById("groundShort2").value;
var groundShorted3 = document.getElementById("groundShort3").value;
const groundShort1 = document.getElementById("groundShort1");
const groundShort2 = document.getElementById("groundShort2");
const groundShort3 = document.getElementById("groundShort3");
var flyShortModal = document.getElementById("fly-short-modal");
var flyShortButton = document.getElementById("fly-short");
var flyShortCloseButton = document.getElementById("fly-short-closeModal");
var flyShorted0 = document.getElementById("flyShort0").value;
var flyShorted1 = document.getElementById("flyShort1").value;
var flyShorted2 = document.getElementById("flyShort2").value;
var flyShorted3 = document.getElementById("flyShort3").value;
const flyShort1 = document.getElementById("flyShort1");
const flyShort2 = document.getElementById("flyShort2");
const flyShort3 = document.getElementById("flyShort3");
var linerShortModal = document.getElementById("liner-short-modal");
var linerShortButton = document.getElementById("liner-short");
var linerShortCloseButton = document.getElementById("liner-short-closeModal");
var linerShorted0 = document.getElementById("linerShort0").value;
var linerShorted1 = document.getElementById("linerShort1").value;
var linerShorted2 = document.getElementById("linerShort2").value;
var linerShorted3 = document.getElementById("linerShort3").value;
const linerShort1 = document.getElementById("linerShort1");
const linerShort2 = document.getElementById("linerShort2");
const linerShort3 = document.getElementById("linerShort3");
var groundLeftModal = document.getElementById("ground-left-modal");
var groundLeftButton = document.getElementById("ground-left");
var groundLeftCloseButton = document.getElementById("ground-left-closeModal");
var groundLefted0 = document.getElementById("groundLeft0").value;
var groundLefted1 = document.getElementById("groundLeft1").value;
var groundLefted2 = document.getElementById("groundLeft2").value;
var groundLefted3 = document.getElementById("groundLeft3").value;
const groundLeft1 = document.getElementById("groundLeft1");
const groundLeft2 = document.getElementById("groundLeft2");
const groundLeft3 = document.getElementById("groundLeft3");
var flyLeftModal = document.getElementById("fly-left-modal");
var flyLeftButton = document.getElementById("fly-left");
var flyLeftCloseButton = document.getElementById("fly-left-closeModal");
var flyLefted0 = document.getElementById("flyLeft0").value;
var flyLefted1 = document.getElementById("flyLeft1").value;
var flyLefted2 = document.getElementById("flyLeft2").value;
var flyLefted3 = document.getElementById("flyLeft3").value;
const flyLeft1 = document.getElementById("flyLeft1");
const flyLeft2 = document.getElementById("flyLeft2");
const flyLeft3 = document.getElementById("flyLeft3");
var linerLeftModal = document.getElementById("liner-left-modal");
var linerLeftButton = document.getElementById("liner-left");
var linerLeftCloseButton = document.getElementById("liner-left-closeModal");
var linerLefted0 = document.getElementById("linerLeft0").value;
var linerLefted1 = document.getElementById("linerLeft1").value;
var linerLefted2 = document.getElementById("linerLeft2").value;
var linerLefted3 = document.getElementById("linerLeft3").value;
const linerLeft1 = document.getElementById("linerLeft1");
const linerLeft2 = document.getElementById("linerLeft2");
const linerLeft3 = document.getElementById("linerLeft3");
var groundCenterModal = document.getElementById("ground-center-modal");
var groundCenterButton = document.getElementById("ground-center");
var groundCenterCloseButton = document.getElementById("ground-center-closeModal");
var groundCentered0 = document.getElementById("groundCenter0").value;
var groundCentered1 = document.getElementById("groundCenter1").value;
var groundCentered2 = document.getElementById("groundCenter2").value;
var groundCentered3 = document.getElementById("groundCenter3").value;
const groundCenter1 = document.getElementById("groundCenter1");
const groundCenter2 = document.getElementById("groundCenter2");
const groundCenter3 = document.getElementById("groundCenter3");
var flyCenterModal = document.getElementById("fly-center-modal");
var flyCenterButton = document.getElementById("fly-center");
var flyCenterCloseButton = document.getElementById("fly-center-closeModal");
var flyCentered0 = document.getElementById("flyCenter0").value;
var flyCentered1 = document.getElementById("flyCenter1").value;
var flyCentered2 = document.getElementById("flyCenter2").value;
var flyCentered3 = document.getElementById("flyCenter3").value;
const flyCenter1 = document.getElementById("flyCenter1");
const flyCenter2 = document.getElementById("flyCenter2");
const flyCenter3 = document.getElementById("flyCenter3");
var linerCenterModal = document.getElementById("liner-center-modal");
var linerCenterButton = document.getElementById("liner-center");
var linerCenterCloseButton = document.getElementById("liner-center-closeModal");
var linerCentered0 = document.getElementById("linerCenter0").value;
var linerCentered1 = document.getElementById("linerCenter1").value;
var linerCentered2 = document.getElementById("linerCenter2").value;
var linerCentered3 = document.getElementById("linerCenter3").value;
const linerCenter1 = document.getElementById("linerCenter1");
const linerCenter2 = document.getElementById("linerCenter2");
const linerCenter3 = document.getElementById("linerCenter3");
var groundRightModal = document.getElementById("ground-right-modal");
var groundRightButton = document.getElementById("ground-right");
var groundRightCloseButton = document.getElementById("ground-right-closeModal");
var groundRighted0 = document.getElementById("groundRight0").value;
var groundRighted1 = document.getElementById("groundRight1").value;
var groundRighted2 = document.getElementById("groundRight2").value;
var groundRighted3 = document.getElementById("groundRight3").value;
const groundRight1 = document.getElementById("groundRight1");
const groundRight2 = document.getElementById("groundRight2");
const groundRight3 = document.getElementById("groundRight3");
var flyRightModal = document.getElementById("fly-right-modal");
var flyRightButton = document.getElementById("fly-right");
var flyRightCloseButton = document.getElementById("fly-right-closeModal");
var flyRighted0 = document.getElementById("flyRight0").value;
var flyRighted1 = document.getElementById("flyRight1").value;
var flyRighted2 = document.getElementById("flyRight2").value;
var flyRighted3 = document.getElementById("flyRight3").value;
const flyRight1 = document.getElementById("flyRight1");
const flyRight2 = document.getElementById("flyRight2");
const flyRight3 = document.getElementById("flyRight3");
var linerRightModal = document.getElementById("liner-right-modal");
var linerRightButton = document.getElementById("liner-right");
var linerRightCloseButton = document.getElementById("liner-right-closeModal");
var linerRighted0 = document.getElementById("linerRight0").value;
var linerRighted1 = document.getElementById("linerRight1").value;
var linerRighted2 = document.getElementById("linerRight2").value;
var linerRighted3 = document.getElementById("linerRight3").value;
const linerRight1 = document.getElementById("linerRight1");
const linerRight2 = document.getElementById("linerRight2");
const linerRight3 = document.getElementById("linerRight3");
var errorCloseButton = document.getElementById("error-closeModal");
// var errored1 = document.getElementById("error1").value;
// var errored2 = document.getElementById("error2").value;
// var errored3 = document.getElementById("error3").value;
// const error1 = document.getElementById("error1");
// const error2 = document.getElementById("error2");
// const error3 = document.getElementById("error3");
var stealCloseButton = document.getElementById("steal-closeModal");
var stealed1 = document.getElementById("steal1").value;
var stealed2 = document.getElementById("steal2").value;
var stealed3 = document.getElementById("steal3").value;
const steal1 = document.getElementById("steal1");
const steal2 = document.getElementById("steal2");
const steal3 = document.getElementById("steal3");
var wildPitchCloseButton = document.getElementById("wild-pitch-closeModal");
var wildPitched1 = document.getElementById("wildPitch1").value;
var wildPitched2 = document.getElementById("wildPitch2").value;
var wildPitched3 = document.getElementById("wildPitch3").value;
const wildPitch1 = document.getElementById("wildPitch1");
const wildPitch2 = document.getElementById("wildPitch2");
const wildPitch3 = document.getElementById("wildPitch3");
var passBallCloseButton = document.getElementById("pass-ball-closeModal");
var passBalled1 = document.getElementById("passBall1").value;
var passBalled2 = document.getElementById("passBall2").value;
var passBalled3 = document.getElementById("passBall3").value;
const passBall1 = document.getElementById("passBall1");
const passBall2 = document.getElementById("passBall2");
const passBall3 = document.getElementById("passBall3");
var restraintCloseButton = document.getElementById("restraint-closeModal");
var restrainted1 = document.getElementById("restraint1").value;
var restrainted2 = document.getElementById("restraint2").value;
var restrainted3 = document.getElementById("restraint3").value;
const restraint1 = document.getElementById("restraint1");
const restraint2 = document.getElementById("restraint2");
const restraint3 = document.getElementById("restraint3");
//宣言


let foulButton = document.getElementById("foul-button");//ファールボタン
foulButton.addEventListener("click", () => {
    if (strikecurrentIndex === 2) {
    } else {
      strikePlus()
    }
    resultShowing.innerHTML = "ファール " + ballcurrentIndex + "-" + strikecurrentIndex
});

function count(buttonId,position) {;//見逃し・空振りボタン
  document.getElementById(buttonId).addEventListener("click", () => {
  if (strikecurrentIndex === 2) {
      countreset()
      if (inningcurrentIndex < 13){
        playerResult1[battercurrentIndex1] = playerResult1[battercurrentIndex1] + position + "三振" + "<br>"
        battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
        nextOut=outcurrentIndex+1
        resultShowing.innerHTML = position + "三振！ " + nextOut + "アウト"
        if (outcurrentIndex === 2){
          for (var i = 0; i < playerPosition1.length; i++) {
            if (playerPosition1[i] == '投' || playerPosition1[i] == "1") {
                playerShowing1.innerHTML = playerName1[i];
            }
          } 
          playerShowing2.innerHTML = playerName2[battercurrentIndex2]
          resultShowing.innerHTML = position + "三振！ " + "3アウトチェンジ"
          playerResultShowing1.innerHTML = ""
          playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
        } else {
          playerShowing1.innerHTML = playerName1[battercurrentIndex1]
          playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
        }
      } else {
        playerResult2[battercurrentIndex2] = playerResult2[battercurrentIndex2] + position + "三振" + "<br>"
        battercurrentIndex2 = (battercurrentIndex2 + 1) % playerRunner2.length
        resultShowing.innerHTML = position + "三振！ " + nextOut + "アウト"
        if (outcurrentIndex === 2){
          for (var i = 0; i < playerPosition2.length; i++) {
            if (playerPosition2[i] == '投' || playerPosition2[i] == "1") {
                playerShowing2.innerHTML = playerName2[i];
            }
          } 
          playerShowing1.innerHTML = playerName1[battercurrentIndex1]
          resultShowing.innerHTML = position + "三振！ " + "3アウトチェンジ"
          playerResultShowing2.innerHTML = ""
          playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
        } else {
          playerShowing2.innerHTML = playerName2[battercurrentIndex2]
          playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
        }
      }
      outcount()
  } else {
    strikePlus()
    resultShowing.innerHTML = position + " " + ballcurrentIndex + "-" + strikecurrentIndex
  }
})
}

let ballButton = document.getElementById("ball-button");//ボールボタン
ballButton.addEventListener("click", () => {
  if (ballcurrentIndex === 3) {
      countreset()
      oneMove()
      if (inningcurrentIndex < 13){
        playerResult1[battercurrentIndex1] = playerResult1[battercurrentIndex1] + "四球" + "<br>"
        battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
        playerShowing1.innerHTML = playerName1[battercurrentIndex1]
        playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
      } else {
        playerResult2[battercurrentIndex2] = playerResult2[battercurrentIndex2] + "四球" + "<br>"
        battercurrentIndex2 = (battercurrentIndex2 + 1) % playerRunner2.length
        playerShowing2.innerHTML = playerName2[battercurrentIndex2]
        playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
      }
      if (nowScore > 0){
        resultShowing.innerHTML = "フォアボール " + nowScore + "点！"
      } else {
        resultShowing.innerHTML = "フォアボール"
      }
      nowScore=0
  } else {
    ballPlus()
  }
})

function walk(buttonId,position) {;//死球・申告敬遠
  document.getElementById(buttonId).addEventListener("click", () => {
      countreset()
      oneMove()
      if (inningcurrentIndex < 13){
        playerResult1[battercurrentIndex1] = playerResult1[battercurrentIndex1] + position + "<br>"
        battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
        playerShowing1.innerHTML = playerName1[battercurrentIndex1]
        playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
      } else {
        playerResult2[battercurrentIndex2] = playerResult2[battercurrentIndex2] + position + "<br>"
        battercurrentIndex2 = (battercurrentIndex2 + 1) % playerRunner2.length
        playerShowing2.innerHTML = playerName2[battercurrentIndex2]
        playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
      }
      if (nowScore > 0){
        resultShowing.innerHTML = position + " " + nowScore + "点！"
      } else {
        resultShowing.innerHTML = position
      }
      nowScore=0
});
}

function outcount(){
  if (outcurrentIndex === 2) {//アウトランプ消し、ランナー帰す、点数入力、次の回ハイライト、合計点入力、次に備えてscore=0、塁灯火、プルダウン変更
    outcurrentIndex=0
    var rows = document.getElementsByTagName('tr');
    for (let e of outLight.children) {
        e.classList.remove("red")
    }
    tableCells[inningcurrentIndex].style.backgroundColor = "white";
   if (inningcurrentIndex < 13){
    for (let i = 0; i < playerRunner1.length; i++) {
      playerRunner1[i]=0
    }
      rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
      inningcurrentIndex = inningcurrentIndex + 13
      tableCells[inningcurrentIndex].style.backgroundColor = "pink";
      scoresum1()
      score=0
      var rows = document.getElementsByTagName('tr');
      rows[1].getElementsByTagName('td')[11].innerText = hit1;
      var rows = document.getElementsByTagName('tr');
      rows[2].getElementsByTagName('td')[12].innerText = error2;
   } else {
    for (let i = 0; i < playerRunner2.length; i++) {
      playerRunner2[i]=0
    }
      rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
      inningcurrentIndex = inningcurrentIndex - 12
      tableCells[inningcurrentIndex].style.backgroundColor = "pink";
      scoresum2()
      score=0
      var rows = document.getElementsByTagName('tr');
      rows[2].getElementsByTagName('td')[11].innerText = hit2;
      var rows = document.getElementsByTagName('tr');
      rows[1].getElementsByTagName('td')[12].innerText = error1;
   }
  } else {
      outPlus()
  }
  runnerLight()
  allPullDownChange()
}

function homerun(buttonId,position) {;//ホームランボタン
  document.querySelector(buttonId).addEventListener("click", () => {
    nowScore++
    score++
    if (inningcurrentIndex < 13){
      for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] > 0){
          nowScore++
          score++
          playerRunner1[i]=0
        }
      }
      var rows = document.getElementsByTagName('tr');
      rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
      hit1++
      rows[1].getElementsByTagName('td')[11].innerText = hit1;
      scoresum1()
      playerResult1[battercurrentIndex1] = playerResult1[battercurrentIndex1] + position + "<br>"
      battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
      playerShowing1.innerHTML = playerName1[battercurrentIndex1]
      playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
    } else {
      for (let i = 0; i < playerRunner2.length; i++) {
        if (playerRunner2[i] > 0){
          nowScore++
          score++
          playerRunner2[i]=0
        }
      }
      var rows = document.getElementsByTagName('tr');
      rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
      hit2++
      rows[2].getElementsByTagName('td')[11].innerText = hit2;
      scoresum2()
      playerResult2[battercurrentIndex2] = playerResult2[battercurrentIndex2] + position + "<br>"
      battercurrentIndex2 = (battercurrentIndex2 + 1) % playerRunner2.length
      playerShowing2.innerHTML = playerName2[battercurrentIndex2]
      playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
    }
    countreset()
    runnerLight()
    allModalNone()
    allPullDownChange()
    if (nowScore > 0){
      resultShowing.innerHTML = position + " " + nowScore + "点！"
    } else {
      resultShowing.innerHTML = position
    }
    nowScore=0
  })
}

window.addEventListener('click', (event) => {//modal外を触ったら消える
  if (event.target == hitModal || event.target == hitPitcherModal || event.target == hitCatcherModal || event.target == hitFirstModal || event.target == hitSecondModal || event.target == hitThirdModal || event.target == hitShortModal || event.target == hitLeftModal || event.target == hitCenterModal || event.target == hitRightModal || event.target == outModal || event.target == outPitcherModal || event.target == outCatcherModal || event.target == outFirstModal || event.target == outSecondModal || event.target == outThirdModal || event.target == outShortModal || event.target == outLeftModal || event.target == outCenterModal || event.target == outRightModal || event.target == onebaseLeftModal || event.target == twobaseLeftModal || event.target == threebaseLeftModal || event.target == onebaseCenterModal || event.target == twobaseCenterModal || event.target == threebaseCenterModal || event.target == onebaseRightModal || event.target == twobaseRightModal || event.target == threebaseRightModal || event.target == hitPitcherModal || event.target == hitCatcherModal || event.target == hitFirstModal || event.target == hitSecondModal || event.target == hitThirdModal || event.target == hitShortModal || event.target == groundPitcherModal || event.target == flyPitcherModal || event.target == linerPitcherModal || event.target == groundCatcherModal || event.target == flyCatcherModal || event.target == linerCatcherModal || event.target == groundFirstModal || event.target == flyFirstModal || event.target == linerFirstModal || event.target == groundSecondModal || event.target == flySecondModal || event.target == linerSecondModal || event.target == groundThirdModal || event.target == flyThirdModal || event.target == linerThirdModal || event.target == groundShortModal || event.target == flyShortModal || event.target == linerShortModal || event.target == groundLeftModal || event.target == flyLeftModal || event.target == linerLeftModal || event.target == groundCenterModal || event.target == flyCenterModal || event.target == linerCenterModal || event.target == groundRightModal || event.target == flyRightModal || event.target == linerRightModal || event.target == runnerModal || event.target == stealModal || event.target == wildPitchModal || event.target == passBallModal || event.target == restraintModal || event.target == errorModal) {
    allModalNone()
  }
});

function addToList() {//試合開始ボタン
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

for (let i = 1; i < playerList1.length; i += 3) {
  playerPosition1.push(playerList1[i]);
  playerPosition2.push(playerList2[i]);
}

for (let i = 2; i < playerList1.length; i += 3) {
  playerName1.push(playerList1[i]);
  playerName2.push(playerList2[i]);
}
 
for (var i = 0; i < playerPosition2.length; i++) {
  if (playerPosition2[i] == '投' || playerPosition2[i] == "1") {
      playerShowing2.innerHTML = playerName2[i];
  }
}
  playerShowing1.innerHTML = playerName1[0];
  resultShowing.innerHTML = "試合開始"
}
inningcurrentIndex=1
tableCells[inningcurrentIndex].style.backgroundColor = "pink";


function runnerCheck1(ButtonName,ModalName,CloseName,Named0,Named1,Named2,Named3,Letter0,Letter1,Letter2,Letter3,position){//ランナーを確認するモーダルが出現
ButtonName.onclick = function() {
  ModalName.style.display = "block";
}

CloseName.onclick = function() {
  allModalNone()
  countreset()
  var Named0 = document.getElementById(Letter0).value;
  var Named1 = document.getElementById(Letter1).value;
  var Named2 = document.getElementById(Letter2).value;
  var Named3 = document.getElementById(Letter3).value;;

  if (inningcurrentIndex < 13){
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
      nowScore++
      score++
      var rows = document.getElementsByTagName('tr');
      rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
      scoresum1()
      playerRunner1[i]=0
    }
  }
  playerResult1[battercurrentIndex1] = playerResult1[battercurrentIndex1] + position + "<br>"
  battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
  for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] < 0){
      outNumber++
    }
      if (outcurrentIndex + outNumber > 2){
        for (var j = 0; j < playerPosition1.length; j++) {
          if (playerPosition1[j] == '投' || playerPosition1[j] == "1") {
              playerShowing1.innerHTML = playerName1[j];
          }
        }
        playerShowing2.innerHTML = playerName2[battercurrentIndex2]
        playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
        playerResultShowing1.innerHTML = ""
      } else{
        playerShowing1.innerHTML = playerName1[battercurrentIndex1]
        playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
      }
    }
    outNumber=0
    for (let i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] < 0){
      outcount()
      playerRunner1[i]=0
    }
  }
  hit1++
  var rows = document.getElementsByTagName('tr');
  rows[1].getElementsByTagName('td')[11].innerText = hit1;
} else {
  for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] === 3){
    playerRunner2[i] = parseInt(Named3)
  }
}
for (let i = 0; i < playerRunner2.length; i++) {
  if (playerRunner2[i] === 2){
    playerRunner2[i] = parseInt(Named2)
  }
}
for (let i = 0; i < playerRunner2.length; i++) {
  if (playerRunner2[i] === 1){
    playerRunner2[i] = parseInt(Named1)
  }
}
playerRunner2[battercurrentIndex2] = parseInt(Named0)

for (let i = 0; i < playerRunner2.length; i++) {
  if (playerRunner2[i] === 4){
    nowScore++
    score++
    var rows = document.getElementsByTagName('tr');
    rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
    scoresum2()
    playerRunner2[i]=0
  }
}
playerResult2[battercurrentIndex2] = playerResult2[battercurrentIndex2] + position + "<br>"
battercurrentIndex2 = (battercurrentIndex2 + 1) % playerRunner2.length
for (let i = 0; i < playerRunner2.length; i++) {
  if (playerRunner2[i] < 0){
    outNumber++
  }
    if (outcurrentIndex + outNumber > 2){
      for (var j = 0; j < playerPosition2.length; j++) {
        if (playerPosition2[j] == '投' || playerPosition2[j] == "1") {
            playerShowing2.innerHTML = playerName2[j];
        }
      }
      playerShowing1.innerHTML = playerName1[battercurrentIndex1]
      playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
      playerResultShowing2.innerHTML = ""
    } else{
      playerShowing2.innerHTML = playerName2[battercurrentIndex2]
      playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
    }
  }
  outNumber=0
  for (let i = 0; i < playerRunner2.length; i++) {
  if (playerRunner2[i] < 0){
    outcount()
    playerRunner2[i]=0
  }
}
hit2++
var rows = document.getElementsByTagName('tr');
rows[2].getElementsByTagName('td')[11].innerText = hit2;
}
  runnerLight()
  allPullDownChange()
  if (nowScore > 0){
    resultShowing.innerHTML = position + " " + nowScore + "点！"
  } else {
    resultShowing.innerHTML = position
  }
  nowScore=0
}
}

function runnerCheck2(ButtonName,ModalName,CloseName,Named0,Named1,Named2,Named3,Letter0,Letter1,Letter2,Letter3,position){//ランナーを確認するモーダルが出現
  ButtonName.onclick = function() {
    ModalName.style.display = "block";
  }
  
  CloseName.onclick = function() {
    allModalNone()
    countreset()
    var Named0 = document.getElementById(Letter0).value;
    var Named1 = document.getElementById(Letter1).value;
    var Named2 = document.getElementById(Letter2).value;
    var Named3 = document.getElementById(Letter3).value;;
  
    if (inningcurrentIndex < 13){
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
        nowScore++
        score++
        var rows = document.getElementsByTagName('tr');
        rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
        scoresum1()
        playerRunner1[i]=0
      }
    }
    playerResult1[battercurrentIndex1] = playerResult1[battercurrentIndex1] + position + "<br>"
    battercurrentIndex1 = (battercurrentIndex1 + 1) % playerRunner1.length
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] < 0){
        outNumber++
      }
        if (outcurrentIndex + outNumber > 2){
          for (var j = 0; j < playerPosition1.length; j++) {
            if (playerPosition1[j] == '投' || playerPosition1[j] == "1") {
                playerShowing1.innerHTML = playerName1[j];
            }
          }
          playerShowing2.innerHTML = playerName2[battercurrentIndex2]
          playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
          playerResultShowing1.innerHTML = ""
        } else{
          playerShowing1.innerHTML = playerName1[battercurrentIndex1]
          playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
        }
      }
      outNumber=0
      for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] < 0){
        outcount()
        playerRunner1[i]=0
      }
    }
  } else {
    for (let i = 0; i < playerRunner2.length; i++) {
      if (playerRunner2[i] === 3){
      playerRunner2[i] = parseInt(Named3)
    }
  }
  for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] === 2){
      playerRunner2[i] = parseInt(Named2)
    }
  }
  for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] === 1){
      playerRunner2[i] = parseInt(Named1)
    }
  }
  playerRunner2[battercurrentIndex2] = parseInt(Named0)
  
  for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] === 4){
      nowScore++
      score++
      var rows = document.getElementsByTagName('tr');
      rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
      scoresum2()
      playerRunner2[i]=0
    }
  }
  playerResult2[battercurrentIndex2] = playerResult2[battercurrentIndex2] + position + "<br>"
  battercurrentIndex2 = (battercurrentIndex2 + 1) % playerRunner2.length
  for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] < 0){
      outNumber++
    }
      if (outcurrentIndex + outNumber > 2){
        for (var j = 0; j < playerPosition2.length; j++) {
          if (playerPosition2[j] == '投' || playerPosition2[j] == "1") {
              playerShowing2.innerHTML = playerName2[j];
          }
        }
        playerShowing1.innerHTML = playerName1[battercurrentIndex1]
        playerResultShowing1.innerHTML = playerResult1[battercurrentIndex1]
        playerResultShowing2.innerHTML = ""
      } else{
        playerShowing2.innerHTML = playerName2[battercurrentIndex2]
        playerResultShowing2.innerHTML = playerResult2[battercurrentIndex2]
      }
    }
    outNumber=0
    for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] < 0){
      outcount()
      playerRunner2[i]=0
    }
  }
  }
    runnerLight()
    allPullDownChange()
    if (nowScore > 0){
      resultShowing.innerHTML = position + " " + nowScore + "点！"
    } else {
      resultShowing.innerHTML = position
    }
    nowScore=0
  }
  }

  function runnerCheck3(ButtonName,ModalName,CloseName,Named1,Named2,Named3,Letter1,Letter2,Letter3,position){
    ButtonName.onclick = function() {
      ModalName.style.display = "block";
    }
    
    CloseName.onclick = function() {
      allModalNone()
      var Named1 = document.getElementById(Letter1).value;
      var Named2 = document.getElementById(Letter2).value;
      var Named3 = document.getElementById(Letter3).value;;
    
      if (inningcurrentIndex < 13){
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
      
      for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] === 4){
          nowScore++
          score++
          var rows = document.getElementsByTagName('tr');
          rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
          scoresum1()
          playerRunner1[i]=0
        }
      }
    
      for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] < 0){
          outNumber++
        }
          if (outcurrentIndex + outNumber > 2){
            for (var j = 0; j < playerPosition1.length; j++) {
              if (playerPosition1[j] == '投' || playerPosition1[j] == "1") {
                  playerShowing1.innerHTML = playerName1[j];
              }
            }
            playerResultShowing1.innerHTML = ""
            playerShowing2.innerHTML = playerName2[battercurrentIndex2]
          }
        }
        outNumber=0
        for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] < 0){
          outcount()
          playerRunner1[i]=0
        }
      }
    } else {
      for (let i = 0; i < playerRunner2.length; i++) {
        if (playerRunner2[i] === 3){
          playerRunner2[i] = parseInt(Named3)
        }
    }
    for (let i = 0; i < playerRunner2.length; i++) {
      if (playerRunner2[i] === 2){
        playerRunner2[i] = parseInt(Named2)
      }
    }
    for (let i = 0; i < playerRunner2.length; i++) {
      if (playerRunner2[i] === 1){
        playerRunner2[i] = parseInt(Named1)
      }
    }
    
    for (let i = 0; i < playerRunner2.length; i++) {
      if (playerRunner2[i] === 4){
        nowScore++
        score++
        var rows = document.getElementsByTagName('tr');
        rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
        scoresum2()
        playerRunner2[i]=0
      }
    }
  
    for (let i = 0; i < playerRunner2.length; i++) {
      if (playerRunner2[i] < 0){
        outNumber++
      }
        if (outcurrentIndex + outNumber > 2){
          for (var j = 0; j < playerPosition2.length; j++) {
            if (playerPosition2[j] == '投' || playerPosition2[j] == "1") {
                playerShowing2.innerHTML = playerName2[j];
            }
          }
          playerResultShowing2.innerHTML = ""
          playerShowing1.innerHTML = playerName1[battercurrentIndex1]
        }
      }
      outNumber=0
      for (let i = 0; i < playerRunner2.length; i++) {
      if (playerRunner2[i] < 0){
        outcount()
        playerRunner2[i]=0
      }
    }
    }
      runnerLight()
      allPullDownChange()
      if (nowScore > 0){
        resultShowing.innerHTML = position + " " + nowScore + "点！"
      } else {
        resultShowing.innerHTML = position
      }
      nowScore=0
    }
    }

let borkButton = document.getElementById("bork");//ボークボタン
borkButton.addEventListener("click", () => {
  allModalNone()
    
  if (inningcurrentIndex < 13){
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] === 3){
          playerRunner1[i]++
        }
      }
      for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] === 2){
          playerRunner1[i]++
        }
      }
      for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] === 1){
          playerRunner1[i]++
        }
      }
      
      for (let i = 0; i < playerRunner1.length; i++) {
        if (playerRunner1[i] === 4){
          nowScore++
          score++
          var rows = document.getElementsByTagName('tr');
          rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
          scoresum1()
          playerRunner1[i]=0
        }
      }
    } else {
      for (let i = 0; i < playerRunner2.length; i++) {
        if (playerRunner2[i] === 3){
            playerRunner2[i]++
          }
        }
        for (let i = 0; i < playerRunner2.length; i++) {
          if (playerRunner2[i] === 2){
            playerRunner2[i]++
          }
        }
        for (let i = 0; i < playerRunner2.length; i++) {
          if (playerRunner2[i] === 1){
            playerRunner2[i]++
          }
        }
        
        for (let i = 0; i < playerRunner2.length; i++) {
          if (playerRunner2[i] === 4){
            nowScore++
            score++
            var rows = document.getElementsByTagName('tr');
            rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
            scoresum2()
            playerRunner2[i]=0
          }
        }
    }
      runnerLight()
      allPullDownChange()
      if (nowScore > 0){
        resultShowing.innerHTML = position + " " + nowScore + "点！"
      } else {
        resultShowing.innerHTML = position
      }
      nowScore=0
})

//関数等
function strikePlus(){//ストライク+1
  strikecurrentIndex++;
  strikeLight = document.getElementById("strike-light")
  strikeLight.children[strikecurrentIndex-1].classList.add("yellow")
}

function ballPlus(){//ボール+1
  ballcurrentIndex++;
  let ballLight = document.getElementById("ball-light")
  ballLight.children[ballcurrentIndex-1].classList.add("green")
  resultShowing.innerHTML = "ボール " + ballcurrentIndex + "-" + strikecurrentIndex
}

function outPlus(){//アウト+1
  outcurrentIndex++
  let outLight = document.getElementById("out-light")
  outLight.children[outcurrentIndex-1].classList.add("red")
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

function allModalNone(){//すべてのモーダルを閉じる
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
  groundSecondModal.style.display = 'none';
  flySecondModal.style.display = 'none';
  linerSecondModal.style.display = 'none';
  groundThirdModal.style.display = 'none';
  flyThirdModal.style.display = 'none';
  linerThirdModal.style.display = 'none';
  groundShortModal.style.display = 'none';
  flyShortModal.style.display = 'none';
  linerShortModal.style.display = 'none';
  groundLeftModal.style.display = 'none';
  flyLeftModal.style.display = 'none';
  linerLeftModal.style.display = 'none';
  groundCenterModal.style.display = 'none';
  flyCenterModal.style.display = 'none';
  linerCenterModal.style.display = 'none';
  groundRightModal.style.display = 'none';
  flyRightModal.style.display = 'none';
  linerRightModal.style.display = 'none';

  errorModal.style.display = 'none';
  for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].checked = false; // トグルボタンをオフにする
  }

  runnerModal.style.display = 'none';
  stealModal.style.display = 'none';
  wildPitchModal.style.display = 'none';
  passBallModal.style.display = 'none';
  restraintModal.style.display = 'none';
}

cells.forEach(cell => {
  cell.addEventListener('input', function() {
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

function pullDownChange(Name1,Name2,Name3,Letter1,Letter2,Letter3){//ランナーの状況に応じてプルダウンの内容を変更する
  if (inningcurrentIndex < 13){
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
} else {
  if (playerRunner2.includes(1)) {
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

if (playerRunner2.includes(2)) {
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

if (playerRunner2.includes(3)) {
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
}

function runnerLight(){//ランナーがいる塁を光らせる
  if (inningcurrentIndex < 13){
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
} else {
  if (playerRunner2.includes(1)) {
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

if (playerRunner2.includes(2)) {
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

if (playerRunner2.includes(3)) {
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
}

function oneMove(){//詰まっているときのランナー
  if (inningcurrentIndex < 13){
    let runnerbaseSum = 0;
    for (let i = 0; i < playerRunner1.length; i++) {
      runnerbaseSum += playerRunner1[i];
  }
  
  let runnerbaseNonZero = 0;
  for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] !== 0) {
        runnerbaseNonZero++;
      }
  }
  runnerbaseSNZ = runnerbaseSum + runnerbaseNonZero

  if (runnerbaseSNZ === 2 || runnerbaseSNZ === 5 || runnerbaseSNZ === 9) {//1塁、1,2塁、満塁のとき
    for (let i = 0; i < playerRunner1.length; i++) {
      if (playerRunner1[i] !== 0) {
        playerRunner1[i]++;
      }
    }
  } else if (runnerbaseSNZ === 6 ) {//1,3塁のとき
    for (let i = 0; i < playerRunner1.length; i++) {
          if (playerRunner1[i] == 1) {
              playerRunner1[i]++;
          }
      }
  }
  
  playerRunner1[battercurrentIndex1]++
  
  for (i = 0; i < playerRunner1.length; i++) {
    if (playerRunner1[i] >= 4) {
      nowScore++
      score++;
      var rows = document.getElementsByTagName('tr');
      rows[1].getElementsByTagName('td')[inningcurrentIndex].innerText = score;
      scoresum1()
      playerRunner1[i] = 0
    }
  }
} else {
  let runnerbaseSum = 0;
  for (let i = 0; i < playerRunner2.length; i++) {
    runnerbaseSum += playerRunner2[i];
}

let runnerbaseNonZero = 0;
for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] !== 0) {
      runnerbaseNonZero++;
    }
}
runnerbaseSNZ = runnerbaseSum + runnerbaseNonZero

if (runnerbaseSNZ === 2 || runnerbaseSNZ === 5 || runnerbaseSNZ === 9) {//1塁、1,2塁、満塁のとき
  for (let i = 0; i < playerRunner2.length; i++) {
    if (playerRunner2[i] !== 0) {
      playerRunner2[i]++;
    }
  }
} else if (runnerbaseSNZ === 6 ) {//1,3塁のとき
  for (let i = 0; i < playerRunner2.length; i++) {
        if (playerRunner2[i] == 1) {
            playerRunner2[i]++;
        }
    }
}

playerRunner2[battercurrentIndex2]++

for (i = 0; i < playerRunner2.length; i++) {
  if (playerRunner2[i] >= 4) {
    nowScore++
    score++;
    var rows = document.getElementsByTagName('tr');
    rows[2].getElementsByTagName('td')[inningcurrentIndex-13].innerText = score;
    scoresum2()
    playerRunner2[i] = 0
  }
}
}
runnerbaseSNZ=0
runnerbaseSum=0
runnerbaseNonZero=0
  runnerLight()
  allPullDownChange()
}

function scoresum1(){//合計点を計算する
  const row1Cells = document.getElementsByTagName("tr")[1].getElementsByTagName("td");
  let sum1 = 0;
  for (let i = 1; i <= 9; i++) {
    sum1 += parseInt(row1Cells[i].textContent) || 0;
  }
    document.getElementById("sum1").textContent = sum1;
  }
  
  function scoresum2(){
  const row2Cells = document.getElementsByTagName("tr")[2].getElementsByTagName("td");
  let sum2 = 0;
  for (let i = 1; i <= 9; i++) {
    sum2 += parseInt(row2Cells[i].textContent) || 0;
  }
  document.getElementById("sum2").textContent = sum2;
  }

hit1Button.addEventListener('click', () => {hitModal.style.display = 'block';});
hitPitcherButton.addEventListener('click', () => {hitPitcherModal.style.display = 'block';});
hitCatcherButton.addEventListener('click', () => {hitCatcherModal.style.display = 'block';});
hitFirstButton.addEventListener('click', () => {hitFirstModal.style.display = 'block';});
hitSecondButton.addEventListener('click', () => {hitSecondModal.style.display = 'block';});
hitThirdButton.addEventListener('click', () => {hitThirdModal.style.display = 'block';});
hitShortButton.addEventListener('click', () => {hitShortModal.style.display = 'block';});
hitLeftButton.addEventListener('click', () => {hitLeftModal.style.display = 'block';});
hitCenterButton.addEventListener('click', () => {hitCenterModal.style.display = 'block';});
hitRightButton.addEventListener('click', () => {hitRightModal.style.display = 'block';});
out1Button.addEventListener('click', () => {outModal.style.display = 'block';});
outPitcherButton.addEventListener('click', () => {outPitcherModal.style.display = 'block';});
outCatcherButton.addEventListener('click', () => {outCatcherModal.style.display = 'block';});
outFirstButton.addEventListener('click', () => {outFirstModal.style.display = 'block';});
outSecondButton.addEventListener('click', () => {outSecondModal.style.display = 'block';});
outThirdButton.addEventListener('click', () => {outThirdModal.style.display = 'block';});
outShortButton.addEventListener('click', () => {outShortModal.style.display = 'block';});
outLeftButton.addEventListener('click', () => {outLeftModal.style.display = 'block';});
outCenterButton.addEventListener('click', () => {outCenterModal.style.display = 'block';});
outRightButton.addEventListener('click', () => {outRightModal.style.display = 'block';});
nextButton.addEventListener('click', () => {runnerModal.style.display = 'block';});
errorButton.addEventListener('click', () => {errorModal.style.display = 'block';});
stealButton.addEventListener('click', () => {stealModal.style.display = 'block';});
wildPitchButton.addEventListener('click', () => {wildPitchModal.style.display = 'block';});
passBallButton.addEventListener('click', () => {passBallModal.style.display = 'block';});
restraintButton.addEventListener('click', () => {restraintModal.style.display = 'block';});

count("looking-strike-button","見逃し")
count("swing-strike-button","空振り")
count("swing-bunt-strike-button","バント空振り ")
count("foul-bunt-button","バントファール ")
walk("deadball","デッドボール")
walk("fourball","申告敬遠")
homerun("#homerun-left","レフトへのホームラン")
homerun("#homerun-center","センターへのホームラン")
homerun("#homerun-right","ライトへのホームラン")
runnerCheck1(onebasePitcherButton,onebasePitcherModal,onebasePitcherCloseButton,onebasePitchered0,onebasePitchered1,onebasePitchered2,onebasePitchered3,"onebasePitcher0","onebasePitcher1","onebasePitcher2","onebasePitcher3","ピッチャーへの内野安打")
runnerCheck1(onebaseCatcherButton,onebaseCatcherModal,onebaseCatcherCloseButton,onebaseCatchered0,onebaseCatchered1,onebaseCatchered2,onebaseCatchered3,"onebaseCatcher0","onebaseCatcher1","onebaseCatcher2","onebaseCatcher3","キャッチャーへの内野安打")
runnerCheck1(onebaseFirstButton,onebaseFirstModal,onebaseFirstCloseButton,onebaseFirsted0,onebaseFirsted1,onebaseFirsted2,onebaseFirsted3,"onebaseFirst0","onebaseFirst1","onebaseFirst2","onebaseFirst3","ファーストへの内野安打")
runnerCheck1(onebaseSecondButton,onebaseSecondModal,onebaseSecondCloseButton,onebaseSeconded0,onebaseSeconded1,onebaseSeconded2,onebaseSeconded3,"onebaseSecond0","onebaseSecond1","onebaseSecond2","onebaseSecond3","セカンドへの内野安打")
runnerCheck1(onebaseThirdButton,onebaseThirdModal,onebaseThirdCloseButton,onebaseThirded0,onebaseThirded1,onebaseThirded2,onebaseThirded3,"onebaseThird0","onebaseThird1","onebaseThird2","onebaseThird3","サードへの内野安打")
runnerCheck1(onebaseShortButton,onebaseShortModal,onebaseShortCloseButton,onebaseShorted0,onebaseShorted1,onebaseShorted2,onebaseShorted3,"onebaseShort0","onebaseShort1","onebaseShort2","onebaseShort3","ショートへの内野安打")
runnerCheck1(onebaseLeftButton,onebaseLeftModal,onebaseLeftCloseButton,onebaseLefted0,onebaseLefted1,onebaseLefted2,onebaseLefted3,"onebaseLeft0","onebaseLeft1","onebaseLeft2","onebaseLeft3","レフト前ヒット")
runnerCheck1(twobaseLeftButton,twobaseLeftModal,twobaseLeftCloseButton,twobaseLefted0,twobaseLefted1,twobaseLefted2,twobaseLefted3,"twobaseLeft0","twobaseLeft1","twobaseLeft2","twobaseLeft3","レフトへのツーベース")
runnerCheck1(threebaseLeftButton,threebaseLeftModal,threebaseLeftCloseButton,threebaseLefted0,threebaseLefted1,threebaseLefted2,threebaseLefted3,"threebaseLeft0","threebaseLeft1","threebaseLeft2","threebaseLeft3","レフトへのスリーべース")
runnerCheck1(onebaseCenterButton,onebaseCenterModal,onebaseCenterCloseButton,onebaseCentered0,onebaseCentered1,onebaseCentered2,onebaseCentered3,"onebaseCenter0","onebaseCenter1","onebaseCenter2","onebaseCenter3","センター前ヒット")
runnerCheck1(twobaseCenterButton,twobaseCenterModal,twobaseCenterCloseButton,twobaseCentered0,twobaseCentered1,twobaseCentered2,twobaseCentered3,"twobaseCenter0","twobaseCenter1","twobaseCenter2","twobaseCenter3","センターへのツーベース")
runnerCheck1(threebaseCenterButton,threebaseCenterModal,threebaseCenterCloseButton,threebaseCentered0,threebaseCentered1,threebaseCentered2,threebaseCentered3,"threebaseCenter0","threebaseCenter1","threebaseCenter2","threebaseCenter3","センターへのスリーベース")
runnerCheck1(onebaseRightButton,onebaseRightModal,onebaseRightCloseButton,onebaseRighted0,onebaseRighted1,onebaseRighted2,onebaseRighted3,"onebaseRight0","onebaseRight1","onebaseRight2","onebaseRight3","ライト前ヒット")
runnerCheck1(twobaseRightButton,twobaseRightModal,twobaseRightCloseButton,twobaseRighted0,twobaseRighted1,twobaseRighted2,twobaseRighted3,"twobaseRight0","twobaseRight1","twobaseRight2","twobaseRight3","ライトへのツーベース")
runnerCheck1(threebaseRightButton,threebaseRightModal,threebaseRightCloseButton,threebaseRighted0,threebaseRighted1,threebaseRighted2,threebaseRighted3,"threebaseRight0","threebaseRight1","threebaseRight2","threebaseRight3","ライトへのスリーベース")
runnerCheck2(groundPitcherButton,groundPitcherModal,groundPitcherCloseButton,groundPitchered0,groundPitchered1,groundPitchered2,groundPitchered3,"groundPitcher0","groundPitcher1","groundPitcher2","groundPitcher3","ピッチャーゴロ")
runnerCheck2(flyPitcherButton,flyPitcherModal,flyPitcherCloseButton,flyPitchered0,flyPitchered1,flyPitchered2,flyPitchered3,"flyPitcher0","flyPitcher1","flyPitcher2","flyPitcher3","ピッチャーフライ")
runnerCheck2(linerPitcherButton,linerPitcherModal,linerPitcherCloseButton,linerPitchered0,linerPitchered1,linerPitchered2,linerPitchered3,"linerPitcher0","linerPitcher1","linerPitcher2","linerPitcher3","ピッチャーライナー")
runnerCheck2(groundCatcherButton,groundCatcherModal,groundCatcherCloseButton,groundCatchered0,groundCatchered1,groundCatchered2,groundCatchered3,"groundCatcher0","groundCatcher1","groundCatcher2","groundCatcher3","キャッチャーゴロ")
runnerCheck2(flyCatcherButton,flyCatcherModal,flyCatcherCloseButton,flyCatchered0,flyCatchered1,flyCatchered2,flyCatchered3,"flyCatcher0","flyCatcher1","flyCatcher2","flyCatcher3","キャッチャーフライ")
runnerCheck2(linerCatcherButton,linerCatcherModal,linerCatcherCloseButton,linerCatchered0,linerCatchered1,linerCatchered2,linerCatchered3,"linerCatcher0","linerCatcher1","linerCatcher2","linerCatcher3","キャッチャーライナー")
runnerCheck2(groundFirstButton,groundFirstModal,groundFirstCloseButton,groundFirsted0,groundFirsted1,groundFirsted2,groundFirsted3,"groundFirst0","groundFirst1","groundFirst2","groundFirst3","ファーストゴロ")
runnerCheck2(flyFirstButton,flyFirstModal,flyFirstCloseButton,flyFirsted0,flyFirsted1,flyFirsted2,flyFirsted3,"flyFirst0","flyFirst1","flyFirst2","flyFirst3","ファーストフライ")
runnerCheck2(linerFirstButton,linerFirstModal,linerFirstCloseButton,linerFirsted0,linerFirsted1,linerFirsted2,linerFirsted3,"linerFirst0","linerFirst1","linerFirst2","linerFirst3","ファーストライナー")
runnerCheck2(groundSecondButton,groundSecondModal,groundSecondCloseButton,groundSeconded0,groundSeconded1,groundSeconded2,groundSeconded3,"groundSecond0","groundSecond1","groundSecond2","groundSecond3","セカンドゴロ")
runnerCheck2(flySecondButton,flySecondModal,flySecondCloseButton,flySeconded0,flySeconded1,flySeconded2,flySeconded3,"flySecond0","flySecond1","flySecond2","flySecond3","セカンドフライ")
runnerCheck2(linerSecondButton,linerSecondModal,linerSecondCloseButton,linerSeconded0,linerSeconded1,linerSeconded2,linerSeconded3,"linerSecond0","linerSecond1","linerSecond2","linerSecond3","セカンドライナー")
runnerCheck2(groundThirdButton,groundThirdModal,groundThirdCloseButton,groundThirded0,groundThirded1,groundThirded2,groundThirded3,"groundThird0","groundThird1","groundThird2","groundThird3","サードゴロ")
runnerCheck2(flyThirdButton,flyThirdModal,flyThirdCloseButton,flyThirded0,flyThirded1,flyThirded2,flyThirded3,"flyThird0","flyThird1","flyThird2","flyThird3","サードフライ")
runnerCheck2(linerThirdButton,linerThirdModal,linerThirdCloseButton,linerThirded0,linerThirded1,linerThirded2,linerThirded3,"linerThird0","linerThird1","linerThird2","linerThird3","サードライナー")
runnerCheck2(groundShortButton,groundShortModal,groundShortCloseButton,groundShorted0,groundShorted1,groundShorted2,groundShorted3,"groundShort0","groundShort1","groundShort2","groundShort3","ショートゴロ")
runnerCheck2(flyShortButton,flyShortModal,flyShortCloseButton,flyShorted0,flyShorted1,flyShorted2,flyShorted3,"flyShort0","flyShort1","flyShort2","flyShort3","ショートフライ")
runnerCheck2(linerShortButton,linerShortModal,linerShortCloseButton,linerShorted0,linerShorted1,linerShorted2,linerShorted3,"linerShort0","linerShort1","linerShort2","linerShort3","ショートライナー")
runnerCheck2(groundLeftButton,groundLeftModal,groundLeftCloseButton,groundLefted0,groundLefted1,groundLefted2,groundLefted3,"groundLeft0","groundLeft1","groundLeft2","groundLeft3","レフトゴロ")
runnerCheck2(flyLeftButton,flyLeftModal,flyLeftCloseButton,flyLefted0,flyLefted1,flyLefted2,flyLefted3,"flyLeft0","flyLeft1","flyLeft2","flyLeft3","レフトフライ")
runnerCheck2(linerLeftButton,linerLeftModal,linerLeftCloseButton,linerLefted0,linerLefted1,linerLefted2,linerLefted3,"linerLeft0","linerLeft1","linerLeft2","linerLeft3","レフトライナー")
runnerCheck2(groundCenterButton,groundCenterModal,groundCenterCloseButton,groundCentered0,groundCentered1,groundCentered2,groundCentered3,"groundCenter0","groundCenter1","groundCenter2","groundCenter3","センターゴロ")
runnerCheck2(flyCenterButton,flyCenterModal,flyCenterCloseButton,flyCentered0,flyCentered1,flyCentered2,flyCentered3,"flyCenter0","flyCenter1","flyCenter2","flyCenter3","センターフライ")
runnerCheck2(linerCenterButton,linerCenterModal,linerCenterCloseButton,linerCentered0,linerCentered1,linerCentered2,linerCentered3,"linerCenter0","linerCenter1","linerCenter2","linerCenter3","センターライナー")
runnerCheck2(groundRightButton,groundRightModal,groundRightCloseButton,groundRighted0,groundRighted1,groundRighted2,groundRighted3,"groundRight0","groundRight1","groundRight2","groundRight3","ライトゴロ")
runnerCheck2(flyRightButton,flyRightModal,flyRightCloseButton,flyRighted0,flyRighted1,flyRighted2,flyRighted3,"flyRight0","flyRight1","flyRight2","flyRight3","ライトフライ")
runnerCheck2(linerRightButton,linerRightModal,linerRightCloseButton,linerRighted0,linerRighted1,linerRighted2,linerRighted3,"linerRight0","linerRight1","linerRight2","linerRight3","ライトライナー")
runnerCheck3(stealButton,stealModal,stealCloseButton,stealed1,stealed2,stealed3,"steal1","steal2","steal3","盗塁")
runnerCheck3(wildPitchButton,wildPitchModal,wildPitchCloseButton,wildPitched1,wildPitched2,wildPitched3,"wildPitch1","wildPitch2","wildPitch3","ワイルドピッチ")
runnerCheck3(passBallButton,passBallModal,passBallCloseButton,passBalled1,passBalled2,passBalled3,"passBall1","passBall2","passBall3","パスボール")
runnerCheck3(restraintButton,restraintModal,restraintCloseButton,restrainted1,restrainted2,restrainted3,"restraint1","restraint2","restraint3","牽制")

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
  pullDownChange(groundSecond1,groundSecond2,groundSecond3,"groundSecond1","groundSecond2","groundSecond3")
  pullDownChange(flySecond1,flySecond2,flySecond3,"flySecond1","flySecond2","flySecond3")
  pullDownChange(linerSecond1,linerSecond2,linerSecond3,"linerSecond1","linerSecond2","linerSecond3")
  pullDownChange(groundThird1,groundThird2,groundThird3,"groundThird1","groundThird2","groundThird3")
  pullDownChange(flyThird1,flyThird2,flyThird3,"flyThird1","flyThird2","flyThird3")
  pullDownChange(linerThird1,linerThird2,linerThird3,"linerThird1","linerThird2","linerThird3")
  pullDownChange(groundShort1,groundShort2,groundShort3,"groundShort1","groundShort2","groundShort3")
  pullDownChange(flyShort1,flyShort2,flyShort3,"flyShort1","flyShort2","flyShort3")
  pullDownChange(linerShort1,linerShort2,linerShort3,"linerShort1","linerShort2","linerShort3")
  pullDownChange(groundLeft1,groundLeft2,groundLeft3,"groundLeft1","groundLeft2","groundLeft3")
  pullDownChange(flyLeft1,flyLeft2,flyLeft3,"flyLeft1","flyLeft2","flyLeft3")
  pullDownChange(linerLeft1,linerLeft2,linerLeft3,"linerLeft1","linerLeft2","linerLeft3")
  pullDownChange(groundCenter1,groundCenter2,groundCenter3,"groundCenter1","groundCenter2","groundCenter3")
  pullDownChange(flyCenter1,flyCenter2,flyCenter3,"flyCenter1","flyCenter2","flyCenter3")
  pullDownChange(linerCenter1,linerCenter2,linerCenter3,"linerCenter1","linerCenter2","linerCenter3")
  pullDownChange(groundRight1,groundRight2,groundRight3,"groundRight1","groundRight2","groundRight3")
  pullDownChange(flyRight1,flyRight2,flyRight3,"flyRight1","flyRight2","flyRight3")
  pullDownChange(linerRight1,linerRight2,linerRight3,"linerRight1","linerRight2","linerRight3")
  pullDownChange(steal1,steal2,steal3,"steal1","steal2","steal3")
  pullDownChange(wildPitch1,wildPitch2,wildPitch3,"wildPitch1","wildPitch2","wildPitch3")
  pullDownChange(passBall1,passBall2,passBall3,"passBall1","passBall2","passBall3")
  pullDownChange(restraint1,restraint2,restraint3,"restraint1","restraint2","restraint3")
}

const toggleButtons = document.querySelectorAll('.toggle-button-checkbox');
let error1 = 0;
let error2 = 0;

errorCloseButton.onclick = function() {//エラーの記録
  if (inningcurrentIndex < 13){
    let errorcount2 = 0;
    for (let i = 0; i < toggleButtons.length; i++) {
      if (toggleButtons[i].checked) {
        errorcount2++;
      }
    }
    error2 += errorcount2;
    var rows = document.getElementsByTagName('tr');
    rows[2].getElementsByTagName('td')[12].innerText = error2;
  } else {
    let errorcount1 = 0;
    for (let i = 0; i < toggleButtons.length; i++) {
      if (toggleButtons[i].checked) {
        errorcount1++;
      }
    }
    error1 += errorcount1;
    var rows = document.getElementsByTagName('tr');
    rows[1].getElementsByTagName('td')[12].innerText = error1;
  }
  allModalNone()
}
