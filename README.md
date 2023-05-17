# Create API Template CLI

## Description

The `create-api-template` command is a boilerplate command for quickly setting up a basic API structure for Fastify and Express. It helps you kickstart your API development by generating a well-organized project structure with essential files and folders.

## Installation

To use the `create-api-template` command, you need to have Node.js installed on your system. Once you have Node.js installed, you can install the command globally using npm (Node Package Manager). Open your terminal and run the following command:

```bash
npm install -g create-api-template
```

Alternatively, you can run the command without installing it globally using `npx`:

```bash
npx create-api-template
```

## Usage

After installing the command, you can run it by typing `create-api-template` followed by the desired project name and options. Here's the basic usage:

```bash
create-api-template [project-name] [project-type]
```

**Project Type**

- `--express`: Express Api
- `--fastify`: Fastify

**Example**

To create a new API project named `server`, navigate to the directory where you want to create the project and run the following command:

```bash
create-api-template server --express
```

This will generate the necessary files and folders for your API project inside a folder named `server`. You can then navigate into the project directory and start building your API.

## Project Structure

The `create-api-template` command generates the following project structure:

```
server/
    |- src/
    |    |- controllers/
    |    |- middleware/
    |    |- models/
    |    |- routes/
    |    |- app.js
    |- .gitignore
    |- package-lock.json
    |- package.json
    |- README.md
```

The src directory contains the main source code files for your API. Here's a brief explanation of each directory:

- `controllers`: This directory contains the API controllers responsible for handling incoming requests and generating responses.

- `routes`: The API routes are defined in this directory. You can create separate route files for different endpoints or group them based on functionality.

- `models`: The data models or database schemas for your API are stored in this directory.

- `middleware`: Any middleware functions that need to be applied to specific routes can be placed in this directory.

- `app.js`: The entry point file for your API. It sets up the server and connects the routes and controllers.

The `.gitignore` file specifies the files and folders that should be ignored by version control systems like Git.

The `package.json` file contains the metadata and dependencies for your API project.

Upon successful installation, a preconfigured API endpoint will be available at http://localhost:8080/api/users. This endpoint is readily accessible and enables you to retrieve users' data in JSON format.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue.
