const punnettInput1 = document.getElementById('punnett-input-1');
const punnettInput2 = document.getElementById('punnett-input-2');
const calculatePunnett = document.getElementById('punnett-calculate');
const sequenceText = document.getElementById('sequence-text');

calculatePunnett.addEventListener('click', function () {
  let allelePair = punnettInput1.value + punnettInput2.value;

  if (allelePair.length > 4) {
    alert('Too many alleles!');
  } else if (allelePair.length < 4) {
    alert('Allele pairs incomplete!');
  } else if (
    /\d/.test(allelePair) ||
    allelePair.match(/[|\\/~^:,;?!&%$@*+]/) ||
    /\p{Emoji}/u.test(allelePair)
  ) {
    alert('Please insert valid allele pairs!');
  } else {
    let parent1 = orderString(punnettInput1.value);
    let parent2 = orderString(punnettInput2.value);

    let parent1First = parent1.charAt(0);
    let parent1Second = parent1.charAt(1);
    let parent2First = parent2.charAt(0);
    let parent2Second = parent2.charAt(1);

    document.getElementById('parent1First').innerText = parent1First;
    document.getElementById('parent1Second').innerText = parent1Second;
    document.getElementById('parent2First').innerText = parent2First;
    document.getElementById('parent2Second').innerText = parent2Second;

    let firstPair = allelePair.charAt(0) + allelePair.charAt(2);
    let secondPair = allelePair.charAt(0) + allelePair.charAt(3);
    let thirdPair = allelePair.charAt(1) + allelePair.charAt(2);
    let fourthPair = allelePair.charAt(1) + allelePair.charAt(3);

    document.getElementById('firstPair').innerText = orderString(firstPair);
    document.getElementById('secondPair').innerText = orderString(secondPair);
    document.getElementById('thirdPair').innerText = orderString(thirdPair);
    document.getElementById('fourthPair').innerText = orderString(fourthPair);

    document.getElementById('phenotype-title').innerText = 'Genotype Ratio:';

    const allResults = [
      orderString(firstPair),
      orderString(secondPair),
      orderString(thirdPair),
      orderString(fourthPair),
    ];

    var obj = {};
    allResults.forEach(function (item) {
      if (typeof obj[item] == 'number') {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });

    document.getElementById('phenotype-1').innerHTML = Object.keys(obj)
      .map(function (item) {
        return (
          item +
          ' ' +
          (obj[item] == 0 ? '' : ' ' + obj[item] / 4) * 100 +
          '%' +
          '<br>'
        );
      })
      .join('\n');
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
