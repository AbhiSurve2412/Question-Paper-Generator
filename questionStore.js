const fs = require('fs');

class QuestionStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.questions = this.loadQuestions();
  }

  loadQuestions() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error loading questions: ${error.message}`);
      return [];
    }
  }
}

module.exports = QuestionStore;
