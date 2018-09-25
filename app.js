var age = prompt("enter your age");

a = parseInt(age);

if (a < 16) {
  console.log("you can't drive");
} else if (a == 16) {
  console.log("you finally can drive");
} else {
  console.log("you probably been driving already");
}
