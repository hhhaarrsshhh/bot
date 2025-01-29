# Chatbot Setup Workflow

This project provides a UI/UX setup workflow for registering a user, setting up their organization, training a chatbot, and integrating it into a website. It's built with React and Tailwind CSS, and it simulates the entire flow for a user setting up a chatbot.

## Features

- **User Registration:**
  - User can register with a name, email, and password.
  - Email verification code is required.
  - Option to continue with Google for easy login.

- **Organization Setup:**
  - User can input company name, company website URL, and description.
  - Displays the list of webpages detected and their scraping status (Scraped/Pending).
  - Allows users to click and view the data chunks scraped from the webpages.

- **Chatbot Integration & Testing:**
  - Allows users to test the chatbot and integrate it on their website.
  - Provides easy-to-follow integration instructions or the option to mail them to the client’s developer.
  - Includes a success UI with confetti once the chatbot is successfully integrated.

## Tech Stack

- **Frontend:** ReactJS, Tailwind CSS
- **Routing:** React Router for navigation between pages
- **State Management:** React `useState` and `useNavigate` for page navigation
- **UI Library:** Tailwind CSS for responsive and modern design
- **Other Libraries:** react-confetti (for the success confetti UI)

## Setup

To get started with this project locally, follow these steps:

### Prerequisites
- Make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Steps to Run Locally:

repo link- 