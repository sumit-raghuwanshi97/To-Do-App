# To-Do App

This repository contains a To-Do App with separate frontend and backend components.

## Clone

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/sumit-raghuwanshi97/To-Do-App.git


## Frontend

### Setup

1. Navigate to the frontend directory
   ```bash
   cd frontend
   
3. Install dependencies using Yarn
   ```bash
   yarn install

### Run

1. Start the frontend development server.
   ```bash
   yarn start

3. Open your browser and visit http://localhost:3000.

## Backend

### Prerequisites

1. Java 11 or higher
2. Maven
3. MongoDB or MongoDB Compass (running locally)

### Configuration

1. Open the backend/todoapp/src/main/resources/application.properties file.
2. Configure MongoDB connection properties
   ```bash
   spring.data.mongodb.uri=mongodb://localhost:27017/your-database-name

### Build and Run

1. Navigate to the backend/todoapp directory.
   ```bash
   cd backend/todoapp

2. Build the backend using Maven.
   ```bash
   mvn clean install

3. Run the backend Spring Boot application.
   ```bash
   mvn spring-boot:run

4. The backend will be available at http://localhost:8080.


