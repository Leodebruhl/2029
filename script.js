console.clear();
console.log("hello world");

$("input").change(onChange);
function onChange(evt) {
  let correct = $(this).data("correct");
  let answer = $(this).val();
  console.log(correct, answer);
  if (correct == answer) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
  } else{
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}