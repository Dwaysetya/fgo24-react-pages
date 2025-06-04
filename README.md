## Create React-Pages

This repository contains a project on how to create a basic react using tailwind-css as its styling and react router-DOM to move pages. This project is for learning how react-router-DOM works in the react js library.
## Preview

## Result

![Result](./src/assets/Screenshot%202025-05-15%20at%2023.29.31.png)

## How to Run this project

1. Clone this project

```
git clone    https://github.com/Dwaysetya/fgo24-react-pages.git
```

2. Enter the project firectory

```
cd fgo24-react-pages
```

3. Install the Depedencies

```
npm install
```

4. run the project

```
npm run dev
```

5. Project will running on (http://localhost:8091/)

## With Docker

1. Clone this project

```
git clone   https://github.com/Dwaysetya/fgo24-react-pages.git
```

2. Get into the path

```
cd fgo24-react-pages
```

3. Build image

```
docker build . -t pages:latest
```

4. Run image with docker
```
docker run -p 8091:80 -d pages:latest
```

## Depedencies

This project requires Node.js to run, so make sure Node.js is installed on your device.

- vite: used to document an HTTP server locally, easing the development and testing process.

## Basic Information

This project was developed as part of the learning program at Kodacademy Bootcamp Batch 24, which was carried out by Dwi Setyabudi in order to deepen the understanding and technical skills acquired during the training.
