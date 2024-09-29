# Champions Choice - Sports Betting App for FIFA World Cup 2026


**Champions Choice** is a sports betting application built for the FIFA World Cup 2026. This app allows users to place bets on their favorite teams, analyze match outcomes using historical data, and place live bets during games for higher risk and reward.

## Features

- **Home Page**: Displays countries, probabilities, and betting prices.
- **Algorithm-Driven Predictions**: Uses historical FIFA World Cup data and analysis of teams' past performance, including home and away factors, to predict the winner of matches.
- **Brackets Page**: Compares teams based on probability and match outcomes according to the algorithm.
- **Live Betting**: Allows users to place live bets during ongoing games for dynamic risk and reward.
- **Join & Login**: User authentication for new users to sign up and existing users to log in.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the server.
- **EJS**: Templating engine for rendering dynamic HTML.
- **Body-parser**: Middleware for parsing request bodies.
- **Bcrypt**: For hashing sensitive data such as passwords.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **MongoDB**: NoSQL database to store user and match data.
- **HTML/CSS/JavaScript**: Frontend technologies used to render the web pages.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v12 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud setup)

### Steps to Run Locally

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/champions-choice.git
   ```
3.	Navigate into the project directory:
   ```
cd champions-choice
```
5.	Install the dependencies:
```
npm install
```
7.	Set up environment variables by creating a .env file and adding the following:
   ```
PORT=3000
MONGODB_URI=your_mongodb_uri
```
9.	Ensure MongoDB is running locally or use a cloud-based MongoDB URI in the .env file.
10.	Start the server:
```
npm start
```
12.	Open your browser and navigate to http://localhost:3000 to access the app.

## Available Routes

•	/ - Renders the landing page (index.ejs).
•	/home - Renders the homepage showing betting options (home.ejs).

## Features Description
```

•	Homepage: The homepage lists the participating countries in the FIFA World Cup 2026, showing the probabilities of each country winning a match along with the betting prices.
•	Algorithm: Champions Choice utilizes a custom algorithm that analyzes historical World Cup data to predict match outcomes. The algorithm considers past results of participating countries and factors such as whether a team is playing as the home or away team.
•	Live Betting: Users can bet live during the game for higher risk and potentially greater rewards. This feature provides dynamic betting options as matches unfold.
•	Brackets Page: Visualizes the matchups and outcomes of games based on the algorithm's predictions.
•	User Authentication: Users can sign up, log in, and join the betting platform securely. Passwords are hashed using bcrypt for security.
```
## Future Improvements
```
•	Integration of real-time match statistics.
•	Implementation of more complex algorithms using machine learning.
•	Adding features like detailed team analytics and user dashboards.
•	Payment integration for real money betting (if legal in the applicable jurisdiction).
```
License
This project is licensed under the MIT License.
 
Note: This is a demo app, and the betting functionality is for educational purposes only.
### Explanation:

- **Features**: Summarizes the major functionalities (home page, predictions, live betting, etc.).
- **Technologies Used**: Lists the main technologies in the stack.
- **Installation**: Provides step-by-step instructions to get the app running locally.
- **File Structure**: Lays out the key files and directories in the project.
- **Routes**: Lists the available routes for the web application.
- **License**: Indicates the project is under the MIT License, allowing open-source usage.
