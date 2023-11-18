class QuestionGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
      difficultyDistribution.forEach(({ difficulty, percentage }) => {
        const filteredQuestions = this.filterQuestionsByDifficulty(difficulty);
        const count = Math.floor((percentage / 100) * totalMarks);
        questionPaper.push(...this.getRandomQuestions(filteredQuestions, count));
      });
  
      return questionPaper;
    }
  
    filterQuestionsByDifficulty(difficulty) {
      return this.questionStore.questions.filter((question) => question.difficulty === difficulty);
    }
  
    getRandomQuestions(questions, count) {
      const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
      return shuffledQuestions.slice(0, count);
    }
  }
  
  module.exports = QuestionGenerator;
  