const punnettInput1 = document.getElementById('punnett-input-1');
const punnettInput2 = document.getElementById('punnett-input-2');
const calculatePunnett = document.getElementById('punnett-calculate');
const sequenceText = document.getElementById('sequence-text');

calculatePunnett.addEventListener('click', function () {
  let allelePair = punnettInput1.value + punnettInput2.value;

  if (allelePair.length > 4) {
    alert('How many alleles!?');
  } else if (
    isNaN(punnettInput1.value) == false ||
    isNaN(punnettInput1.value) == false
  ) {
    alert('Please input a valid allele pair!');
  } else {
    let firstPair = allelePair.charAt(0) + allelePair.charAt(2);
    let secondPair = allelePair.charAt(0) + allelePair.charAt(3);
    let thirdPair = allelePair.charAt(1) + allelePair.charAt(2);
    let fourthPair = allelePair.charAt(1) + allelePair.charAt(3);

    document.getElementById('firstPair').innerText = orderString(firstPair);
    document.getElementById('secondPair').innerText = orderString(secondPair);
    document.getElementById('thirdPair').innerText = orderString(thirdPair);
    document.getElementById('fourthPair').innerText = orderString(fourthPair);
  }
});

function orderString(s) {
  let charCodeArr = [];

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    charCodeArr.push(code);
  }

  charCodeArr.sort(function (a, b) {
    return a - b;
  });

  s = String.fromCharCode.apply(String, charCodeArr);

  return s;
}
