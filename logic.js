let touch = true;

function show(element) {
  if (touch) {
    let a = document.getElementById("input");
    let data = a.value;
    a.value = data + element;
  }
}

function solve() {
  try {
    let a = document.getElementById("input");
    if (a.value != "") {
      a.value = eval(a.value);
    }
  } catch (e) {
    document.getElementById("input").value = "Error!";
    touch = false;
  }
}
function clearInput() {
  document.getElementById("input").value = "";
  touch = true;
}
