const answerElement = document.getElementById("prompt-answer");


// const applyFormatting = (text) => {
//     let formattedText = text.replace(/\*{2}(.*?)\*{2}/g, '<strong>$1</strong>')
//         .replace(/\*(.*?)\*/g, '<em>$1</em>');
//     return formattedText;
// }

function removeFormatting(text) {
    return text
        .replace(/\*{2}(.*?)\*{2}/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '$1')
}

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

function typeWriterEffect(text, elementId, speed) {
    let i = 0;
    const words = text.split(' ');
    answerElement.innerHTML = "";

    const typeInterval = setInterval(() => {
        answerElement.innerHTML += words[i] + " ";
        i++;
        if (answerElement.offsetHeight > (window.innerHeight - 100)) {
            scrollToBottom();
        }
        if (i >= words.length) {
            clearInterval(typeInterval);
        }
    }, speed);
}


if (answerElement) {
    const formattedText = removeFormatting(answerElement.innerText);
    typeWriterEffect(formattedText, 'outputArea', 50);
}

