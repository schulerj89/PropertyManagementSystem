# Property Management System

A comprehensive Property Management System built with a modern tech stack: React, Material-UI, Remix, and Laravel.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a Property Management System designed to streamline and simplify property management tasks. It leverages the power of React and Material-UI for the frontend, Remix for server-side rendering and routing, and Laravel for the backend API.

## Features

- **Modern UI**: Built with Material-UI for a responsive and aesthetic user interface.
- **Server-Side Rendering**: Powered by Remix to ensure fast load times and SEO optimization.
- **Backend Integration**: Laravel serves as the backend, providing robust and secure APIs.
- **Dockerized Setup**: Easily deployable using Docker, with MySQL and Redis for database and caching respectively.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.0.0)
- Docker
- Composer

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/property-management-system.git
    cd property-management-system/ui
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Set up Docker:
    ```bash
    docker-compose up -d
    ```

3. Install PHP dependencies:
    ```bash
    docker-compose exec app composer install
    ```

4. Run migrations:
    ```bash
    docker-compose exec app php artisan migrate
    ```

## Usage

### Development

- Start the frontend development server:
    ```bash
    cd ui
    npm run dev
    ```

- Start the backend server:
    ```bash
    cd ../backend
    docker-compose up -d
    ```

### Production

1. Build the frontend:
    ```bash
    npm run build
    ```

2. Start the production server:
    ```bash
    npm start
    ```

