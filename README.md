# Question Paper Generator

This is a simple Question Paper Generator application built in Node.js. The application stores a collection of questions in a JSON file and generates question papers based on specified criteria.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Sending Requests with Hoppscotch](#sending-requests-with-hoppscotch)
- [File Structure](#file-structure)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/question-paper-generator.git
   cd question-paper-generator
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Run the application:**

   ```bash
   node app.js
   ```

   The server will start at http://localhost:3000.

2. **Generate a Question Paper:**

   Send a POST request to `http://localhost:3000/generate-paper` with the following JSON body:

   ```json
   {
     "totalMarks": 100,
     "difficultyDistribution": [
       {"difficulty": "Easy", "percentage": 20},
       {"difficulty": "Medium", "percentage": 50},
       {"difficulty": "Hard", "percentage": 30}
     ]
   }
   ```

   Adjust the `totalMarks` and `difficultyDistribution` as needed.

## Sending Requests with Hoppscotch

[Hoppscotch](https://hoppscotch.io/) is a free and open-source API development tool. You can use it to send requests to your Question Paper Generator API.

1. **Install Hoppscotch:**

   Download and install Hoppscotch from [hoppscotch.io](https://hoppscotch.io/).

2. **Open Hoppscotch:**

   Open Hoppscotch and create a new request.

3. **Configure Request:**

   - Method: POST
   - URL: `http://localhost:3000/generate-paper`
   - Headers: Content-Type: application/json
   - Body: Add your JSON request body.

4. **Send Request:**

   Click the "Send" button to send the request. View the response to see the generated question paper.

## File Structure

- **`app.js`**: Main application file.
- **`questionStore.js`**: Class for handling question data.
- **`questionGenerator.js`**: Class for generating question papers.
- **`questions.json`**: JSON file containing the question data.
- **`package.json`**: Node.js package configuration.
