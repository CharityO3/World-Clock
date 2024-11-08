# World Clock

The **World Clock** project is an interactive web application that allows users to view the current time for selected cities worldwide. The application uses **Moment.js** and **Moment Timezone** to fetch and display the accurate local time based on user-selected cities, including the option to view your current location's time.

## Features

- View the current time in various cities worldwide.
- Select a city from a dropdown menu, including cities like **Los Angeles**, **Poznań**, **London**, **Paris**, **New York**, **Tokyo**, and **Sydney**.
- Displays the current **date** and **time** in a user-friendly format.
- Automatically updates the time every second to reflect the current time in the selected city.
- Displays the current date in the selected city's timezone.

## Technologies Used

- **HTML5**: Structure of the webpage.
- **CSS3**: Styling of the page and layout.
- **JavaScript**: To handle dynamic updates and interactions.
  - **Moment.js**: To format and display dates and times.
  - **Moment Timezone**: To convert times to the correct timezones for different cities.
  
## How It Works

1. **City Selection**: Users can choose a city from a dropdown menu, or opt for "My current Location" to get the time of their local timezone.
2. **Dynamic Time Display**: Once a city is selected, the current date and time in that city are displayed. The application fetches the current date and time every second for real-time updates.
3. **Time Zones**: The time for each city is calculated using Moment.js's timezone functionality, ensuring the displayed time is accurate according to each city's respective timezone.
4. **Styling**: The design is minimalistic and modern, with clear sections for displaying the city name, date, and time.


## Project Structure

The project has the following structure:
```
/World-Clock
│
├── index.html      # Main HTML file containing structure and content
├── CSS/            # Folder containing the styles
│   └── style.css   # CSS file with styles
└── JavaScript/     # Folder containing the JS files
    └── index.js    # JS file containing logic for updating time and handling user inputs
```

## Hosting
View hosted App on Netlify: https://world-watch.netlify.app/

## Author
Coded by [Charity Orhoridiohwo](https://www.linkedin.com/in/charity-orhoridiohwo-548873150/). Open-sourced on [GitHub](https://github.com/CharityO3/World-Clock) and hosted on [Netlify](https://world-watch.netlify.app/). Contributions are welcome!
