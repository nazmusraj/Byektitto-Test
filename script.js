// --- Data and Configuration ---

// Array of all 20 questions for the test.
// 'scoring' determines if a high score means more extroverted ('forward') or more introverted ('reverse').
const questions = [
    { text: "1. I feel energized after spending time with a large group of people.", scoring: "forward" },
    { text: "2. I am often quiet and reserved in social settings.", scoring: "reverse" },
    { text: "3. I am comfortable taking charge and acting as a leader in a group.", scoring: "forward" },
    { text: "4. I prefer a quiet evening at home over a large, noisy social event.", scoring: "reverse" },
    { text: "5. I seek out new and exciting experiences whenever I can.", scoring: "forward" },
    { text: "6. I usually think things through carefully before I speak or act.", scoring: "reverse" },
    { text: "7. I am often described as talkative and outgoing.", scoring: "forward" },
    { text: "8. I find it difficult to start conversations with strangers.", scoring: "reverse" },
    { text: "9. I am generally full of energy and enthusiasm.", scoring: "forward" },
    { text: "10. In group discussions, I prefer to listen more than I speak.", scoring: "reverse" },
    { text: "11. I would describe myself as a risk-taker.", scoring: "forward" },
    { text: "12. I find that being the center of attention is uncomfortable for me.", scoring: "reverse" },
    { text: "13. I am quick to introduce myself to new people at a party or event.", scoring: "forward" },
    { text: "14. I need a lot of time alone to recharge my batteries.", scoring: "reverse" },
    { text: "15. I often act on the spur of the moment.", scoring: "forward" },
    { text: "16. I have a wide circle of friends and acquaintances.", scoring: "forward" },
    { text: "17. I prefer tasks that allow for deep, solitary concentration.", scoring: "reverse" },
    { text: "18. I am good at getting a dull party started.", scoring: "forward" },
    { text: "19. I am a private person and don't share my feelings easily.", scoring: "reverse" },
    { text: "20. My mood is generally positive and cheerful.", scoring: "forward" }
];

// Detailed descriptions for each personality profile based on the final score.
const profileDescriptions = {
    "Strong Extrovert": `
        <h4 class="text-xl font-bold text-gray-800 mb-2">The Extrovert Profile (Scores 85-100)</h4>
        <p>Individuals scoring in the upper range of the spectrum direct their energy outward, seeking stimulation, engagement, and gratification from the external world. They are fueled by interaction and activity, thriving in environments that are rich with social and sensory input.</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Energy Source:</strong> Your batteries are charged by external stimulation, especially social interaction. Being around other people makes you feel energized, excited, and alive. You can feel bored or restless when you spend too much time alone.</li>
            <li><strong>Social Style:</strong> You are likely sociable, outgoing, talkative, and gregarious. You enjoy being the center of attention, thrive in large gatherings, and often have a wide social circle.</li>
            <li><strong>Cognitive Style:</strong> You tend to process information externally, often thinking by talking. This can make you appear quick-witted and decisive. You are generally action-oriented.</li>
            <li><strong>Behavioral Traits:</strong> You are often assertive, energetic, and more inclined to take risks. Your strengths lie in your ability to network, motivate others, and take initiative.</li>
        </ul>`,
    "Moderate Extrovert": `
        <h4 class="text-xl font-bold text-gray-800 mb-2">The Extrovert Profile (Scores 70-84)</h4>
        <p>You direct your energy outward, seeking stimulation and engagement from the external world. You are fueled by interaction and activity, thriving in environments that are rich with social and sensory input.</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Energy Source:</strong> Your batteries are charged by external stimulation, especially social interaction. Being around other people makes you feel energized and excited. You can feel bored when you spend too much time alone.</li>
            <li><strong>Social Style:</strong> You are typically outgoing, talkative, and gregarious. You enjoy large gatherings and often have a wide social circle. You find it relatively easy to start conversations and make new friends.</li>
            <li><strong>Cognitive Style:</strong> You tend to process information externally, often thinking by talking. You are generally action-oriented and may sometimes speak or act before thinking things through completely.</li>
            <li><strong>Behavioral Traits:</strong> You are often assertive, energetic, and enjoy novelty. Your strengths lie in your ability to network, motivate others, and take initiative.</li>
        </ul>`,
    "Ambivert with Extroverted Leanings": `
        <h4 class="text-xl font-bold text-gray-800 mb-2">The Ambivert Profile (Scores 56-69)</h4>
        <p>Scoring in the middle range of the spectrum identifies you as an ambivert, a personality profile characterized by remarkable flexibility and balance. You lean towards extroversion but are highly adaptable.</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Energy Source:</strong> Your energy management is fluid. You can be energized by social situations, but this energy has a limit. Unlike a strong extrovert, you will eventually feel the need to withdraw and recharge. You enjoy solitude but also seek social connection.</li>
            <li><strong>Social Style:</strong> You are a social chameleon. You can be outgoing and talkative when the situation calls for it, but are equally comfortable taking on a quieter, more observant role.</li>
            <li><strong>Cognitive Style:</strong> You possess a flexible cognitive style, capable of both deep internal reflection and processing thoughts externally through discussion.</li>
            <li><strong>Behavioral Traits:</strong> Your greatest strength is your ability to provide balance. In a group, you can bridge the gap between introverts and extroverts. Your adaptability is your defining advantage.</li>
        </ul>`,
    "True Ambivert": `
        <h4 class="text-xl font-bold text-gray-800 mb-2">The Ambivert Profile (Scores 45-55)</h4>
        <p>Scoring in the middle of the spectrum identifies you as an ambivert, a personality profile characterized by remarkable flexibility and balance. You are situationally adaptable, able to draw upon both introverted and extroverted tendencies as needed.</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Energy Source:</strong> Your energy management is fluid. You can be energized by social situations, but this energy has a limit. You will eventually feel the need to withdraw and recharge. Similarly, you enjoy solitude but will eventually seek social connection.</li>
            <li><strong>Social Style:</strong> You are a social chameleon. You can be outgoing and talkative when needed, but are equally comfortable being quiet and observant. This makes you a skilled conversationalist who knows when to speak and when to listen.</li>
            <li><strong>Cognitive Style:</strong> You possess a flexible cognitive style, capable of both deep internal reflection and processing thoughts externally through discussion. This makes you effective in roles that require both independent work and teamwork.</li>
            <li><strong>Behavioral Traits:</strong> Your greatest strength is your ability to provide balance. You can bridge the gap between introverts and extroverts. Your adaptability is your defining advantage.</li>
        </ul>`,
    "Ambivert with Introverted Leanings": `
        <h4 class="text-xl font-bold text-gray-800 mb-2">The Ambivert Profile (Scores 31-44)</h4>
        <p>Scoring in the middle range of the spectrum identifies you as an ambivert, a personality profile characterized by remarkable flexibility and balance. You lean towards introversion but are highly adaptable.</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Energy Source:</strong> Your energy management is fluid, but you have a preference for calmer settings. You can be energized by social situations for a time, but you feel the need to withdraw and recharge more quickly than an extrovert. You value your alone time.</li>
            <li><strong>Social Style:</strong> You are a social chameleon. While you can be outgoing when necessary, you are more naturally comfortable in a quieter, more observant role. You are a skilled and empathetic listener.</li>
            <li><strong>Cognitive Style:</strong> You possess a flexible cognitive style but likely prefer to think things through internally before speaking.</li>
            <li><strong>Behavioral Traits:</strong> Your greatest strength is your ability to provide balance. In a group, you can connect with both introverts and extroverts. Your adaptability is your defining advantage.</li>
        </ul>`,
    "Strong or Moderate Introvert": `
        <h4 class="text-xl font-bold text-gray-800 mb-2">The Introvert Profile (Scores 20-30)</h4>
        <p>Individuals scoring in this range orient their energy primarily inward, finding gratification and renewal in their own mental landscape. This is not shyness, but a preference for lower-stimulus environments.</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Energy Source:</strong> The defining characteristic of the introvert is energy dynamics. You gain energy from solitude and find sustained social interaction to be draining. After social events, you require quiet time alone to "recharge your batteries."</li>
            <li><strong>Social Style:</strong> You are not anti-social; you are selectively social. You typically prefer smaller, more intimate gatherings with close friends or meaningful one-on-one conversations over large parties.</li>
            <li><strong>Cognitive Style:</strong> Your focus is internal. You process information deeply and reflectively, often thinking things through carefully before speaking. You likely enjoy solitary activities that engage your mind.</li>
            <li><strong>Behavioral Traits:</strong> You tend to be more cautious and less inclined toward high-risk behaviors. Your strengths lie in your capacity for deep focus, careful planning, and thoughtful analysis.</li>
        </ul>`
};

// --- DOM Element References ---
const quizForm = document.getElementById('quiz-form');
const quizContainer = document.getElementById('quiz-container');
const errorMessage = document.getElementById('error-message');

// --- Core Functions ---

/**
 * Renders all questions and their options to the DOM.
 */
function renderQuestions() {
    let quizHTML = '';
    // Defines the 5-point Likert scale options for each question.
    const options = [
        { label: "Strongly Disagree", value: 1 },
        { label: "Disagree", value: 2 },
        { label: "Neutral", value: 3 },
        { label: "Agree", value: 4 },
        { label: "Strongly Agree", value: 5 }
    ];

    questions.forEach((q, index) => {
        quizHTML += `
            <div class="question-block bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <p class="question-text font-semibold text-gray-800 mb-4 text-lg">${q.text}</p>
                <div class="options-container flex flex-col sm:flex-row flex-wrap justify-between sm:space-x-4 space-y-3 sm:space-y-0">
        `;
        options.forEach(opt => {
            quizHTML += `
                <label class="option-label inline-flex items-center cursor-pointer text-gray-700 hover:text-emerald-600 transition-colors duration-200 whitespace-nowrap">
                    <input type="radio" name="q${index}" value="${opt.value}" class="form-radio h-5 w-5 text-emerald-600 border-gray-300 focus:ring-emerald-500">
                    <span class="ml-3">${opt.label}</span>
                </label>
            `;
        });
        quizHTML += `</div></div>`;
    });
    quizContainer.innerHTML = quizHTML;
}

/**
 * Determines the personality profile based on the final score.
 * @param {number} score - The total calculated score.
 * @returns {string} The name of the personality profile.
 */
function getProfile(score) {
    if (score >= 85) {
        return "Strong Extrovert";
    } else if (score >= 70) {
        return "Moderate Extrovert";
    } else if (score >= 56) {
        return "Ambivert with Extroverted Leanings";
    } else if (score >= 45) {
        return "True Ambivert";
    } else if (score >= 31) {
        return "Ambivert with Introverted Leanings";
    } else {
        return "Strong or Moderate Introvert";
    }
}

/**
 * Calculates the total score, determines the profile, and displays the results.
 */
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    let totalScore = 0;
    const totalQuestions = questions.length;
    const formData = new FormData(quizForm);

    // Check if all questions have been answered
    if (Array.from(formData.keys()).length < totalQuestions) {
        errorMessage.style.display = 'block';
        return;
    }
    
    errorMessage.style.display = 'none';

    // Calculate the score
    for (let i = 0; i < totalQuestions; i++) {
        const value = formData.get(`q${i}`);
        let score = parseInt(value, 10);
        
        // Reverse the score for introverted-phrased questions
        if (questions[i].scoring === 'reverse') {
            score = 6 - score;
        }
        totalScore += score;
    }

    // Get the profile and display results
    const profile = getProfile(totalScore);
    
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    document.getElementById('result-profile').innerText = profile;
    document.getElementById('result-score').innerText = totalScore;
    document.getElementById('result-description').innerHTML = profileDescriptions[profile];

    // Scroll to the top of the page to show the result
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Event Listeners ---
quizForm.addEventListener('submit', handleSubmit);

// --- Initial Application Setup ---
// Render the questions when the script loads.
renderQuestions(); 