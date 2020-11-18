# Human Rights First FE E

## Description 👇
> **Disclaimer:** This application is currently in Alpha (as of Nov 18, 2020) and is not ready for production. The deployed site does not render the graph, however the local development server does display everything the frontend team has worked on.

- Our team is developing an interactive map that identifies potential instances of police use of force across the United States of America for [Human Rights First](https://www.humanrightsfirst.org/), an independent advocacy and action organization. We developed a graph to track and display the types of police use of force.
- An application that takes information from data provided by the data science team collecting relevant incidents and data from Twitter, Reddit, and police agencies to display it on the map.
- This app displays a graph with instances of police force displayed per month. The legend on the graph allows the user to toggle the type of police use of force used that month. When a user clicks on a node on the graph, each instance is displayed a newspaper style display on the bottom of the page with a date, the title of the source, the description and the sources of the report.
- Unfortunately, the frontend team was not able to display the graph on the deployed site. The local server does work. DS was not able to get more than about 5 months of data so the next team should make sure multiple years can be displayed. The library used to create the graph is Victory, here's a link to their documentation https://formidable.com/open-source/victory/docs

## Deployed App
- https://efe.humanrightsfirst.dev/
<img src='./src/assets/hrf.jpg'>

## Contributors

| [Sean Antosiak](https://github.com/SeanAntosiak) | [Galo Sandoval](https://github.com/galosandoval) | [Ryan Lee](https://github.com/SassyFatCat) | [Sean Backstrom](https://github.com/SeanBackstrom) |
| :---: | :---: | :---: | :---: | 
| [<img src="https://avatars2.githubusercontent.com/u/52640577?s=400&u=a85b46b25a86915755464b080b093d6ab2032321&v=4" width = "200" />](https://github.com/SeanAntosiak) | [<img src="https://avatars0.githubusercontent.com/u/65971577?s=400&u=fce469591a7f246b34c21a01e9737a1d695d5bfd&v=4" width = "200" />](https://github.com/galosandoval) | [<img src="https://avatars3.githubusercontent.com/u/65985646?s=400&u=15286a88fc948f51c4db1d79db3c469b81266fb2&v=4" width = "200" />](https://github.com/SassyFatCat) | [<img src="https://avatars1.githubusercontent.com/u/29393311?s=400&u=77b09f7f4b3ee830bb863c22bbeacc5f4d744a23&v=4" width = "200" />](https://github.com/SeanBackstrom) |
| Team Project Lead | Frontend Developer | Frontend Developer | Data Scientist |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/SeanAntosiak) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/galosandoval) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/SassyFatCat) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/SeanBackstrom) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/seanantosiak) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/galo-sandoval) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sassyfatcat) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sean-backstrom) |   

<br>

| [Brad Brauser](https://github.com/bbrauser) | [Liam Hogan](https://github.com/syrrostrattus) |
| :---: | :---: | 
| [<img src="https://avatars1.githubusercontent.com/u/65994299?s=400&u=9ec17b5b6f94292e5815306c639ecf4aabd96d56&v=4" width = "200" />](https://github.com/bbrauser) | [<img src="https://media-exp1.licdn.com/dms/image/C4E03AQETFRqOcAmMxA/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=XCVP4o16NDNS5hxorGg4vzEArScH0-C4zvsVRhXVQyQ" width = "200" />](https://github.com/syrrostrattus) |
| Data Scientist | Data Scientist |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bbrauser) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/syrrostrattus) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/bbrauserds) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/liamcloudhogan) |  

## Features

- a dynamic navigation bar with tabs displaying either the Map, the Graph, or the About page as well as a popup with the Filter form
- Sign in/Sign out options `(not functional)`
- Graph: 
    - timelime view of number of incidents over the course of a year (data dates range) 
    - ability to filter out data by type of brutality used
- Filter `(currently applying just for the map)`: 
    - date range implemented `(not functional)`
    - reset filters `(not functional)`
    - select state dropdown or search state by typing(selected state can be removed with one click on the x  button on the right afterwards): zooms onto the selected state
    - search by zip-code (looked up zipcode can be removed with the x  button on the right of it afterwards): zooms onto a zipcode location
    - filter incidents by type of brutality
    - filter incidents by type of source like Twitter, Reddit, etc `(not functional)`
- Map:
    - graphic content warning screen 
    - Control panel:
        - ability to navigate and zoom on to user's location
        - zoom in/out the map 
        - reset bearing to north
    - dynamic Hide/Show Map Options menu:
        - enable/disable zooming on the map with mouse scroll wheel 
        - enable/disable fast travel states: turns on a hover option for each screen and zooms onto the highlighted state when clicked 
        - reset map view to the original view



## Requirements

- [Labs Engineering Standard requirements found here](https://www.notion.so/Human-Rights-First-Roadmap-Team-Kevin-c53ed8e80b0e4584aba47abee5753591)

### Environment variable

- `REACT_APP_MAPBOX_TOKEN` Mapbox access tokens (check `https://docs.mapbox.com/help/how-mapbox-works/access-tokens/`)
> the token can be found on the previous team's deployment info page or recreated on mapbox studio

## Components

- Loading Page
- NavBar
- Filter Form
- Map
- Graph
- About



## Styling Our App
- `CSS`
- `AntD`

## Data Visualization 
`MapBox` - https://docs.mapbox.com :
- using mapboxgl approach

 
## ⚠ Contributing - future features needed/desired for this project:

> Please refer to the highlited parentheses statements throughout this ReadMe for better understanding

- successful connection between Back End and Data Science teams
- successful connection between Back End and Front End teams
- Register/Login functionality added (currenly not functional)
- ability to reset filters
- ability to apply and filter by date range
- ability to filter by source type
- prevent map refresh/reload when filtering data by incident type:
    - instead of state or global variables for the filter function, more research can be done on filtering layers inside of map.addLayer() functions using filter functions mapbox has
    - setting filters is also an options:  https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setfilter
- make filter for functional with the Graph
    - add more options to the Graph like filtering by state or zipcode or displaying data based off of date range
