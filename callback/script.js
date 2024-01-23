function one(call_two) {
  call_two();
  console.log("Step 1 complete. Please call step");
}

function two() {
  console.log("Step 2");
}

one(two);
