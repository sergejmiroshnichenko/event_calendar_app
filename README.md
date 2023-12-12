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

Event Calendar app consists of two parts for easy event management and navigation:

- **1. CalendarNavigation:** - easy event management and filtering provides the ability to perform actions such as:
   - Event creation: The user can easily create a new event by specifying a title, description, date and time of creation.
   - Filtering events: Navigation elements such as the back and forward buttons allow the user to cycle through the month, making it easy to search for events. A calendar is also provided, revealing a date picker to select a specific year and month.

- **2. Calendar** - represents the calendar grid of the month selected in the filter:
    Consists of days (cells).
    A cell includes:
    - The day number of the month 
    - List of events of this day.
By clicking on an event it is possible to edit or delete it.

When an event is added or deleted, the user is instantly informed of the changes at the top of the screen.

## Libraries and tools

The project uses the following main libraries and tools:

- **react** (ver. 18.2.0) и **react-dom** (ver. 18.2.0): Basic libraries for creating UI.
- **typescript** (ver. 5.0.2"): Provides static typing for JavaScript. It is used to increase the reliability of development and the ability to detect run-time errors.
- **@reduxjs/toolkit** (ver. 1.9.7): Used to manage the global state of the application.
- **styled-components** (ver. 6.1.1): A library for creating styles using components.
- **dayjs** (ver. 1.11.10): A library for work with dates and times, providing convenient methods for processing them.
