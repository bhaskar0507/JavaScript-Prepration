var ans = [];
function sebSequence(process, unprocess) {
  if (unprocess.length == 0) {
    if (process.length !== 0) {
      ans.push(process);
    }

    return ans;
  } else {
    //Taking a first character of the string
    var char = unprocess.charAt(0);

    //Recursive function call for including that char.so got added in process
    var left = sebSequence(process + char, unprocess.substring(1));
    var right = sebSequence(process, unprocess.substring(1));

    var left = [...right, left];
    return left;
  }
}

sebSequence("", "abcd");
console.log(ans.sort().join(" "));
