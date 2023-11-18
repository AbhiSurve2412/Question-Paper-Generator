const express = require('express');
const { json } = require('body-parser');
const QuestionStore = require('./questionStore');
const QuestionGenerator = require('./questionGenerator');

const app = express();
const PORT = 3000;

app.use(json());

const questionStore = new QuestionStore('./questions.json');
const questionGenerator = new QuestionGenerator(questionStore);

app.post('/generate-paper', async (req, res) => {
  const { totalMarks, difficultyDistribution } = req.body;

  if (!totalMarks || !difficultyDistribution) {
    return res.status(400).json({ error: 'Bad Request. Ensure totalMarks and difficultyDistribution are provided.' });
  }

  const questionPaper = questionGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
  res.json({ questionPaper });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
