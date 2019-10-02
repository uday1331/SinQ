window.onload = function() {
  try {
    const quiz = document.getElementsByClassName("activity quiz modtype_quiz");
    if (quiz.length != 0) {
      chrome.runtime.sendMessage({
        Quiz: "True"
      });
    } else {
      chrome.runtime.sendMessage({
        Quiz: "False"
      });
    }
  } catch (error) {
    console.error("ERROR: couldn't find quiz");
  }
};
