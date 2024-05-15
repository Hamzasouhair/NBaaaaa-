// Button click listener
document.getElementById("btn1").addEventListener("click", finalGrade);

function finalGrade() {
  //Input
  let one = Math.round(+document.getElementById("Who do people consider the goat").value);
  let two = Math.round(+document.getElementById("Who is the ceo of the NBA").value);
  let three = Math.round(+document.getElementById("Which player won the 2000 Slam Dunk Contest?").value);

  //Proccess
  let avg = Math.round(( Who do people consider the goat + Who is the ceo of the NBA + Which player won the 2000 Slam Dunk Contest?) / 3);
  let msg = `Grade = ${avg}`;

  // Output
  Math.round((document.getElementById("out").innerHTML = avg));
  console.log(Math.round(avg));

  if (avg >= 90) {
    alert("your average is really good");
  } else if (avg >= 80) {
    alert("your average is good");
  } else if (avg >= 70) {
    alert("Better luck next time");
  } else if (avg >= 60) {
    alert("Study better ");
  } else if (avg >= 50) {
    alert("gotta do your work");
  }
}
