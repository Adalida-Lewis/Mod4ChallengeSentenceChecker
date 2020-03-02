
$(document).ready(function(){
    
    function checker(sentence){
        let wordsleft = 0;
        let maxLength = 250 - 50;
        wordsleft = maxLength - sentence.length;
        return 250 - sentence.length;
    }
    
document.getElementById("enteredSentence").addEventListener("click", function(){
    let enteredSentences = document.getElementById("sentence").value;
    
    let count = 0;
    for (i = 0; i < enteredSentences.length; i++) {
  console.count();
}

    $("#wordsLeft").html(checker(enteredSentences));
})
    
    })