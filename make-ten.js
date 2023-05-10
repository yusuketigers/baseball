function calculate() {
    // 入力された数字を取得
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const number3 = parseInt(document.getElementById('number3').value);
    const number4 = parseInt(document.getElementById('number4').value);
  
    // 数字が入力されていない場合の処理
    if (!number1 || !number2 || !number3 || !number4) {
      document.getElementById('result').innerHTML = '4つの数字を入力してください';
      return;
    }
  
    // 計算式のパターンを格納する配列
    const expressions = [];
  
    // 全パターンの四則演算を計算し、10になる計算式を探す
    calculateExpressions(number1, number2, number3, number4, expressions);
  
    // 結果を表示
    if (expressions.length > 0) {
      document.getElementById('result').innerHTML = expressions.join('<br>');
    } else {
      document.getElementById('result').innerHTML = '10になる計算式がありません。';
    }
  }
  
  function calculateExpressions(n1, n2, n3, n4, expressions) {
    const numbers = [n1, n2, n3, n4];
  
    // 四則演算の組み合わせを生成
    const operators = ['+', '-', '*', '/'];
  
    for (let i = 0; i < operators.length; i++) {
      for (let j = 0; j < operators.length; j++) {
        for (let k = 0; k < operators.length; k++) {
          // 計算式を生成して評価
          const expression = `${numbers[0]}${operators[i]}${numbers[1]}${operators[j]}${numbers[2]}${operators[k]}${numbers[3]}`;
          const result = eval(expression);
  
          // 10になる計算式を配列に追加
          if (result === 10) {
            expressions.push(expression);
          }
        }
      }
    }
  }
  