 let darevalue  
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
    darevalue= selectedQuestion
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
async function SendDare (){
    
    try {
        // Send email
        const response = await fetch('https://formsubmit.co/ajax/othiraja64@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: darevalue }),
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
document.querySelector('.button-1').addEventListener('click', async () => {
    // Call the function to display a random question when the page loads
    getRandomTruthQuestion();


});
