# Calculator API

A simple calculator API built with Nest.js that evaluates mathematical expressions. The API supports basic arithmetic operations including addition, subtraction, multiplication, division, and parentheses.

## Features

- Evaluate mathematical expressions via HTTP POST requests.
- Handles errors gracefully with meaningful messages.
- Built using TypeScript and the Nest.js framework.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Running Tests](#running-tests)
- [License](#license)

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd calculator-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the application**:
   ```bash
   npm run start
   ```

## Usage

To evaluate a mathematical expression, send a POST request to the /evaluate endpoint with a JSON body containing the expression.

**Example Request**

```bash
curl -H "Content-Type: application/json" \
-X POST \
-d '{"expression":"(1-1)*2+3*(1-3+4)+10/2"}' \
http://localhost:3000/evaluate
```

**Example Response**

A successful response will return a JSON object with the evaluated result:

```json
{
  "result": 11
}
```

## API Endpoints

`POST /evaluate`

- **Request Body**:

  - `expression`: A string repesenting the mathematical expression to evaluate.

- **Response**:

  - On success: Returns an object with the evaluated result.
  - On error: Returns an object with an error message.

## Error Handling

The API handles various error scenarios, including:

- Invalid mathematical syntax
- Type erros in expressions.
- Empty or non-string expressions.

**Example Error Response**

If an invalid expression is provided, you may receive a response like this:

```json
"error":"Invalid expression"
```

## Running Tests

To run the unit tests for the application, use the following command:

```bash
 npm run test
```

This will execute all tests.

## License

This project is licensed under the MIT License.
