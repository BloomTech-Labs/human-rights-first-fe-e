# Human Rights First FE E

## Description 👇
> **Disclaimer:** This application is currently in Alpha (as of Nov 18, 2020) and is not ready for production. The deployed site does not render the graph, however the local development server does display everything the frontend team has worked on.

- Our team is developing an interactive map that identifies potential instances of police use of force across the United States of America for [Human Rights First](https://www.humanrightsfirst.org/), an independent advocacy and action organization. We developed a graph to track and display the types of police use of force.
- An application that takes information from data provided by the data science team collecting relevant incidents and data from Twitter, Reddit, and police agencies to display it on the map.
- This app displays a graph with instances of police force displayed per month. The legend on the graph allows the user to toggle the type of police use of force used that month. When a user clicks on a node on the graph, each instance is displayed a newspaper style display on the bottom of the page with a date, the title of the source, the description and the sources of the report.
- Unfortunately, the frontend team was not able to display the graph on the deployed site. The local server does work. DS was not able to get more than about 5 months of data so the next team should make sure multiple years can be displayed. The library used to create the graph is Victory, here's a link to their documentation https://formidable.com/open-source/victory/docs

## Deployed App
- https://efe.humanrightsfirst.dev/
<img src='src/assets/Screen Shot 2020-11-17 at 12.20.37 PM.png'>
<img src='src/assets/Screen Shot 2020-11-17 at 12.21.04 PM.png'>

## Linked Repo
- https://github.com/Lambda-School-Labs/human-rights-first-fe-e

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

## Getting Started
- The frontend team inheritted an app that was broken locally. The map in the "Loading" component located in src/common/Loading was not rendering locally, but was rendering on the deployed link. Since it would not work locally, we commented out the map. We also inheritted a "Graph" component that was unfinished which is why our graph is named "GraphNew". The graph we inheritted did not have any real data, it was all hard coded. 
- The only component we made significant changes to is the "Loading" component. The files we added are "Checkboxes.jsx", "GraphNew.jsx", and "ScrollWindow.js".
- Start by using 'npm install' then 'npm start' to boot up the development server.
- Notice, we did not have a backend end developer. The only endpoint we used is in "Loading" and it contains all the data that the data scientists found.
- Heres the link to the Labs 28 Structure. Our mvp was "How often are cretain types of police use of force being used over time?" https://docs.google.com/document/d/19uURSWEuG-5MbmXjRXZVA5DIortFbpStvb_UzNSLrrE/edit

## Tech Stack
- The frontend team used React.js, one instance of react-router in the 'ScrollWinder' component, and the charting library Victory. The previous team used some redux. 

## User Flow
- The user is able to interact with the graph to display different types of force used by police officers
- The user is able to display all instances of a particular month

## Wireframes
<img src="src/assets/Screen Shot 2020-11-18 at 12.15.51 PM.png">

## Architecture
- Note, this was made when we had a backend. There is only one endpoint with contains all the data in an array of JSON objects.
- We were not able to connect the login components we made because we did not have a back end to send a JWT to. We have deleted the login components since we did not use them. 
<img src="src/assets/Screen Shot 2020-11-18 at 12.16.56 PM.png">

## Endpoints
- We used one endpoint, located in src/components/common/loading

## Issues
- The map we inheritted does not work locally
- Our graph component does not render on the deployed site
- We only have one endpoint, so the data of over 1000 data points renders every time state changes
- The graph only shows 5 months worth of data because DS supplied 5 months of data

## Future Features
- More data
- More endpoints
- More responsive
- Tranisition effects for the graph and the displayed data

## Support
- Reach out to me Galo Sandoval or either of the data scientists Sean Backstrom or Brad Brauser
- Following this project, Sean B and Brad are working on a side project to implement machine learning to brush through police use of force in real time