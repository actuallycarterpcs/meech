const titleText = "moonzy"; 
let index = 0;
let isTyping = true;

function typeTitle() {
    if (isTyping) {
        if (index < titleText.length) {
            document.title += titleText.charAt(index);
            index++;
            setTimeout(typeTitle, 300); 
        } else {
            isTyping = false;
            setTimeout(typeTitle, 1000);
        }
    } else {
        if (index > 0) {
            document.title = titleText.substring(0, index - 1);
            index--;
            setTimeout(typeTitle, 300); 
        } else {
            isTyping = true;
            index = 0; 
            setTimeout(typeTitle, 500); 
        }
    }
}
typeTitle();
