# Jannatul Tuna Trisha | Portfolio

A responsive personal portfolio showcasing my software projects, research interests, technical skills, and academic background. Built as part of the **CSE 471 Web and Internet Programming** coursework at Southeast University.

**Live site:** [portfolio-trisha-0ca7.vercel.app](https://portfolio-trisha-0ca7.vercel.app)

## Contents

- [Overview](#overview)
- [Features](#features)
- [Built With](#built-with)
- [Run Locally](#run-locally)
- [Project Structure](#project-structure)
- [Featured Work](#featured-work)
- [Portfolio Sections](#portfolio-sections)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Author](#author)
- [Coursework](#coursework)

## Overview

The site brings my work into one place, from web development and Java applications to machine learning and robotics. Visitors can browse projects and research topics, learn about my background, and get in touch.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Mobile navigation with active section highlighting
- Light and dark themes, with the selected theme saved in the browser
- Project cards linking to their GitHub repositories
- Dedicated research, skills, education, and contact sections
- Contact form with client-side validation that opens the visitor's email app
- Motion-aware reveal effects that respect reduced-motion preferences

## Built With

| Area | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3 |
| Interactions | Vanilla JavaScript |
| Hosting | Vercel |

This is a static site. It does not require a framework, package manager, database, or backend service.

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Trisha105/Portfolio.git
   cd Portfolio
   ```

2. Open `index.html` in a browser.

For local development with automatic refresh, you can use a static server such as VS Code Live Server. No build step is required.

## Project Structure

```text
Portfolio/
├── index.html                 # Page content and sections
├── css/
│   └── style.css             # Layout, themes, and responsive styles
├── js/
│   └── script.js             # Navigation, theme, form, and reveal behavior
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── profile.jpeg      # Photo displayed on the site
│       └── profile.webp
└── README.md
```

## Featured Work

- **MindMate:** Digital wellness application with journaling, mood tracking, and AI-powered chat.
- **Car Rental System:** Java console application for managing vehicles, customers, rentals, and returns.
- **Student Workshop Registration:** Responsive coursework website built with HTML, CSS, and JavaScript.
- **Competition Fast Line Follower Robot:** Ongoing sensor-based robotics and PID control project.

Visit the [Projects section](https://portfolio-trisha-0ca7.vercel.app/#projects) for descriptions and available repository links. The portfolio also includes research-oriented work on leukemia screening, obesity risk classification, life expectancy prediction, and cancer risk prediction.

## Portfolio Sections

| Section | What visitors can find |
| --- | --- |
| Home | Introduction and quick links to projects and contact |
| About & Skills | Background, interests, and technical skills |
| Projects | Software, web, and robotics work |
| Research | Current research-oriented topics |
| Education & Contact | Academic background and contact options |

## Contact Form

The form validates the fields in the browser and prepares a `mailto:` link. Submitting opens the visitor's configured email app with the message filled in; the website itself does not send or store messages.

## Deployment

The site is hosted on Vercel. As a static website, it can also be deployed to any host that serves HTML, CSS, JavaScript, and image files. Keep the repository structure intact so the relative asset paths continue to work. The live URL is linked above.

## Author

**Jannatul Tuna Trisha**  
B.Sc. in Computer Science and Engineering, Southeast University

- [GitHub](https://github.com/Trisha105)
- [Email](mailto:jannattrisha018@gmail.com)

## Coursework

Developed for the **CSE 471 Web and Internet Programming** assignment. The site and its documentation reflect the current repository implementation.
