let $ = document.querySelector.bind(document);
const questionsContainer = $(".faq");

const questions = [
   {
      question: "How many team members can I invite?",
      answer:
         "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
   },
   {
      question: "What is the maximum file upload size?",
      answer:
         "No more than 2GB. All files in your account must fit your allotted storage space.",
   },
   {
      question: "How do I reset my password?",
      answer:
         "“Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
   },
   {
      question: "Can I cancel my subscription?",
      answer:
         "Yes! Send us a message and we’ll process your request no questions asked.",
   },
   {
      question: "Do you provide additional support?",
      answer:
         "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
   },
];

const insertQuestionsOnFaq = () => {
   let listOfQuestions = questions
      .map((question, index) => {
         return `
        <div class="question question-${index}">
            <div class="title title-${index}" onclick="getClick(${index})">
                <p id="question">${question.question}</p>
                <div class="arrow arrow-${index}" >
                  <div class="arrow-down arrow-down-${index}"><img src="./images/icon-arrow-down.svg" alt="arrow-up"></div>
                </div>
            </div>
            <div class="answer answer-${index} hidden">
                <p>${question.answer}</p>
            </div>
        </div>
        `;
      })
      .join("");

   questionsContainer.innerHTML = `
    <h1>FAQ</h1>
    ${listOfQuestions}
    `;
};

window.onload = insertQuestionsOnFaq();

const allQuestionsClosed = () => {
   let numOfQuestions = questions.length;

   for (let i = 0; i < numOfQuestions; i++) {
      let arrowDown = $(`.arrow-down-${i}`);
      let answer = $(`.answer-${i}`);
      let title = $(`.title-${i}`);

      if (arrowDown.classList.contains("img-up")) arrowDown.classList.remove("img-up");
      if (!answer.classList.contains("hidden")) answer.classList.add("hidden");
      if (title.classList.contains("bold")) title.classList.remove("bold");
   }
};

const getClick = (index) => {

    let arrowDown = $(`.arrow-down-${index}`);
    let answer = $(`.answer-${index}`);
    let title = $(`.title-${index}`);
    let toggleQuestion = () => {
        arrowDown.classList.toggle("img-up");
        answer.classList.toggle("hidden");
        title.classList.toggle("bold");
    }

    if(arrowDown.classList.contains("img-up")) {
        toggleQuestion()
    } else {
        allQuestionsClosed()
        toggleQuestion()
    }
};
