var chocolate = Number(
  prompt("how many pieces of choclate would youd like? 1-10Total")
);

var leftoverChocolate = 10 - chocolate;
if (leftoverChocolate === 10) {
  alert(" You don't want no chocolate?");
} else if (leftoverChocolate >= 6) {
  alert(`There is ${leftoverCholcate} pieces`);
} else if (leftoverChocolate >= 1) {
  alert(
    `There is ${leftoverChocolate} pieces of chocolate left. Time to re-up!`
  );
} else {
  alert("You ate all the chocolate. Dang!");
}
