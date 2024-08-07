# Workshop Management System

## Table of Contents
- [Introduction](#introduction)
- [Repositories](#repositories)
  - [Final App](#final-app)
  - [UI](#ui)
  - [Working Backend and Frontend](#working-backend-and-frontend)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Workshop Management System is designed for the Municipal Corporation to streamline workshop operations. The system includes features such as scheduling and planning, roster management, work order management, employee management, fuel consumption monitoring, expense tracking, and reporting and analytics. This application ensures a user-friendly interface and secure login functionality.

## Repositories
Due to team member conflicts, we have divided our project into three separate repositories:

### Final App
This repository contains the final version of the app with all integrated features.
- **Repository URL**: [https://github.com/Karannnnn614/Final-App.git](https://github.com/Karannnnn614/Final-App.git)

### UI
This repository contains the user interface components of the project, developed using Next.js.
- **Repository URL**: [https://github.com/Karannnnn614/hackndor-ui.git](https://github.com/Karannnnn614/hackndor-ui.git)

### Working Backend and Frontend
This repository contains the backend and frontend code that was worked on separately due to team conflicts. The backend is built with Express.js and the frontend with React.
- **Repository URL**: [git@github.com:Karannnnn614/HACKNDOR.git](git@github.com:Karannnnn614/HACKNDOR.git)

## Installation and Setup
Follow these steps to set up the project locally:

1. Clone the repositories:
    ```bash
    git clone https://github.com/Karannnnn614/Final-App.git
    git clone https://github.com/Karannnnn614/hackndor-ui.git
    git clone git@github.com:Karannnnn614/HACKNDOR.git
    ```

2. Install dependencies for each repository:
    ```bash
    cd [repository-folder]
    npm install
    ```

3. Set up environment variables (if any):
    - Create a `.env` file in the root directory of each repository and add the necessary environment variables.

4. Run the development server for each repository:
    ```bash
    npm start
    ```

## Usage
1. Start the backend server from the Working Backend and Frontend repository:
    ```bash
    cd git@github.com:Karannnnn614/HACKNDOR.git
    npm start
    ```

2. Start the frontend server:
    ```bash
    cd [Final App or UI repository]
    npm start
    ```

3. Open your browser and navigate to `http://localhost:[port]` to view the app.

## Features
- **Scheduling and Planning**: Create, update, and view workshop schedules.
- **Roster Management**: Assign employees to shifts, update rosters, and view rosters.
- **Work Order Management**: Create, update, and track work orders.
- **Employee Management**: Add, update, and view employee details.
- **Fuel Consumption Monitoring**: Log, update, and view fuel consumption reports.
- **Expense Tracking**: Log, update, and view expense records.
- **Reporting and Analytics**: Generate and view various reports and analytics.

## Technologies Used
- **MERN Stack**:
  - **MongoDB**: For the database.
  - **Express.js**: For the backend server.
  - **React.js**: For the frontend development.
  - **Node.js**: For server-side JavaScript runtime.
- **Next.js**: For the user interf
