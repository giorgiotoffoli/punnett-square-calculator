const punettInput = document.getElementById('punett-input');
const calculatePunett = document.getElementById('punett-calculate');

calculatePunett.addEventListener('click', function calculatePunettSequence() {
  // Gets the input string
  let allelesPair = punettInput.value;

  // Calculates Allele Pair Sequence
  let allaeleSequence =
    allelesPair.charAt(0) +
    allelesPair.charAt(2) +
    ' ' +
    allelesPair.charAt(0) +
    allelesPair.charAt(3) +
    ' ' +
    allelesPair.charAt(1) +
    allelesPair.charAt(2) +
    ' ' +
    allelesPair.charAt(1) +
    allelesPair.charAt(3);
  console.log(allaeleSequence);
});
