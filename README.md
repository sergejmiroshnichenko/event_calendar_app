# Event calendar app

## Requirements
- Node.js (recommended ver: 16.16.0)

To run the application locally, clone the repository, install the dependencies, and run the application.

Run the following commands:
1. git clone [https://github.com/sergejmiroshnichenko/news_app_bintime.git](https://github.com/sergejmiroshnichenko/event_calendar_app)
2. npm install
3. npm run dev

##   Project Description:

The project is a event calendar application.

The application consists of two main pages:

- **Article list page:**
        Contains a table with columns to display image, title, author, publication date and news source link.
        Also provides a field to search for articles by key headline and the ability to select filters by country and news category.
- **Article preview page:**
    Provides details about the selected article.

Functionality includes the ability to search for articles by keyword, filter news articles by country and category, and provide detailed information about a particular article when browsing.

## Libraries and tools

The project uses the following main libraries and tools:

- **react** (ver. 18.2.0) и **react-dom** (ver. 18.2.0): Basic libraries for creating UI.
- **typescript** (ver. ^5.0.2"): Provides static typing for JavaScript. It is used to increase the reliability of development and the ability to detect run-time errors.
- **@reduxjs/toolkit** (ver. 1.9.7): Used to manage the global state of the application.
- **styled-components** (ver. 6.1.1): A library for creating styles using components.
- **dayjs** (ver. 1.11.10): A library for work with dates and times, providing convenient methods for processing them.
