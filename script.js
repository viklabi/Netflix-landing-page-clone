const questions = document.querySelectorAll(".question-field");
const answers = document.querySelectorAll(".answer");
const answer_toggles = document.querySelectorAll(".answer-toggle");

questions.forEach((question, i) => {
	question.addEventListener("click", () => {
		answer_toggles[i].classList.toggle("answer-toggled");
		answers[i].classList.toggle("answer--shown");
		for (let a = 0; a <= answers.length; a++) {
			if (a !== i) {
				answers[a].classList.remove("answer--shown");
				answer_toggles[a].classList.remove("answer-toggled");
			}
		}
	});
});