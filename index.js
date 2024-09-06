let darevalue
let truthvalue
let accept_truth_bth = document.querySelector('.accept-truth')
let reject_truth_bth = document.querySelector('.reject-truth')
let accept_dare_bth = document.querySelector('.accept-dare')
let reject_dare_bth = document.querySelector('.reject-dare')
let hide_Truth_dare = document.querySelector('.hide-Truth-dare')
let message_recieved_noti = document.querySelector('.message_recieved_noti')
let hideT_accept_reject_btn = document.querySelector('#hideT_accept_reject_btn')
let hideD_accept_reject_btn = document.querySelector('#hideD_accept_reject_btn')
let answer_input = document.querySelector('.answer-input')
let submitAnstruth = document.querySelector('#submitAnstruth')
let submitAnsdare = document.querySelector('#submitAnsdare')
//
let AnswerInputValue = document.querySelector('#AnswerInputValue')
answer_input.style.display = 'none'
message_recieved_noti.style.display = 'none'
accept_truth_bth.style.display = 'none'
reject_truth_bth.style.display = 'none'
accept_dare_bth.style.display = 'none'
reject_dare_bth.style.display = 'none'
function toggleLottie() {
    const player = document.getElementById('myLottiePlayer');
    if (player.isPlaying) {
        player.pause();
    } else {
        player.play();
    }
}
function getRandomTruthQuestion() {
    const questions = [
        "What's the sweetest thing someone has ever done for you?",
        "If you could describe your perfect day, what would it be like?",
        "What is one thing that always makes you smile, no matter what?",
        "Who was your first crush and how did it make you feel?",
        "If you could relive one special moment in your life, which one would it be?",
        "What's the most romantic thing you have ever experienced?",
        "What’s a secret dream or goal you haven’t shared with anyone?"
    ];
    // Select a random question
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    truthvalue = selectedQuestion
    // Create a list item element
    const li = document.createElement('li');
    li.textContent = selectedQuestion;
    // Get the list and append the new list item
    const list = document.getElementById('truthQuestionsList');
    list.innerHTML = ''; // Clear any previous questions
    list.appendChild(li);
}
document.querySelector('.button-0').addEventListener('click', () => {
    // Call the function to display a random question when the page loads
    getRandomTruthQuestion();
    document.getElementById('DareQuestionsList').style.display = 'none'
    document.getElementById('truthQuestionsList').style.display = 'block'
    accept_truth_bth.style.display = 'block'
    reject_truth_bth.style.display = 'block'
    accept_dare_bth.style.display = 'none'
    reject_dare_bth.style.display = 'none'
})
function getRandomDareQuestion() {
    const questions = [
        "Write a love note and leave it somewhere for me to find.",
        "Serenade me with our favorite song.",
        "Give me a 1-minute foot massage.",
        "Cook a special meal for me.",
        "Share a secret or special memory that we haven’t talked about before."
    ];
    // Select a random question
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    darevalue = selectedQuestion
    // Create a list item element
    const li = document.createElement('li');
    li.textContent = selectedQuestion;
    li.classList.add('Dare')
    // Get the list and append the new list item
    const list = document.getElementById('DareQuestionsList');
    list.innerHTML = ''; // Clear any previous questions
    list.appendChild(li);
    // Send email with the dare question
}
document.querySelector('.reject-dare').addEventListener('click', () => {
    window.location.reload()
})
document.querySelector('.btn-close').addEventListener('click', () => {
    window.location.reload()
})
document.querySelector('.reject-truth').addEventListener('click', () => {
    window.location.reload()
})
async function SendDataEmail(answer, type) {
    setTimeout(() => {
        toggleLottie();
    }, 1000);
    try {
        // Send email
        const response = await fetch('https://formsubmit.co/ajax/othiraja64@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: type, name: truthvalue, Answer: answer }),
        });
        // Handle the response
        if (response.ok) {
            const responseBody = await response.text();
            console.log('Email sent successfully:', responseBody);
        } else {
            const errorResponseBody = await response.text();
            console.error('Failed to send email. Response Body:', errorResponseBody);
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
}
document.querySelector('.accept-truth').addEventListener('click', () => {
    hide_Truth_dare.style.display = 'none'
    // message_recieved_noti.style.display = 'block'
    document.querySelector('.reject-truth').style.display = 'none'
    document.querySelector('.accept-truth').style.display = 'none'
    document.querySelector('.submitAnsdare').style.display = 'none'
    answer_input.style.display = 'block'
})
const sendTruthdata = () => {
    if (AnswerInputValue.value.length == 0) {
        alert('Hey Chellam 😘 ,Please enter your answer')
    }
    else {
        SendDataEmail(AnswerInputValue.value, 'Truth')
    }
}
// async function SendDare(answer) {
//     setTimeout(() => {
//         toggleLottie();
//     }, 1000);
//     try {
//         // Send email
//         const response = await fetch('https://formsubmit.co/ajax/d4d0caaa62aa99b907b8ad4743be8b48', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title: 'dare', name: darevalue,Answer:answer }),
//         });
//         // Handle the response
//         if (response.ok) {
//             const responseBody = await response.text();
//             console.log('Email sent successfully:', responseBody);
//         } else {
//             const errorResponseBody = await response.text();
//             console.error('Failed to send email. Response Body:', errorResponseBody);
//         }
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }
// }
document.querySelector('.accept-dare').addEventListener('click', () => {
    hide_Truth_dare.style.display = 'none'
    // message_recieved_noti.style.display = 'block'
    document.querySelector('.accept-dare').style.display = 'none'
    document.querySelector('.reject-dare').style.display = 'none'
    document.querySelector('.submitAnstruth').style.display = 'none'
    answer_input.style.display = 'block'
})
const sendDarehdata = () => {
    if (AnswerInputValue.value.length == 0) {
        alert('Hey Chellam 😘 ,Please enter your answer')
    }
    else {
        SendDataEmail(AnswerInputValue.value, 'Dare')
    }
}
document.querySelector('.button-1').addEventListener('click', async () => {
    // Call the function to display a random question when the page loads
    getRandomDareQuestion();
    document.getElementById('truthQuestionsList').style.display = 'none'
    document.getElementById('DareQuestionsList').style.display = 'block'
    accept_truth_bth.style.display = 'none'
    reject_truth_bth.style.display = 'none'
    accept_dare_bth.style.display = 'block'
    reject_dare_bth.style.display = 'block'
});
