# Gold

### Summary:
Gold is a Node.JS react application that fascilitate a dashboard for viewing and comparing crytocurrency prices and other stats. 

### Access:
This app is currently hosted at: https://powerful-woodland-79930.herokuapp.com/ 

### Current features:
- Login: Ability to log in using Google's Auth20 
- Settings: add or remove coins to favorite's list
- Dashboard: view historical price charts for individually selected coins from the fav's list. Also buy and sell qualified coins.
- Compare: view historical pricechart for all coins in the fav's list simultaneously
- Theme: change the theme of the page

### Highlighted Technologies used:

#### Front end
- React Context: allows sharing values between components without having to explicitly pass props
- cryptocompare: API for real time crypcurrency information
- CSS Grid
- fuzzy: for searching within the app
- http-proxy-middleware: proxy for multiple different routes
- lodash: for performance
- moment: time library
- react: create the basic initial boilerplate of the app
- react-highcharts: graph data from the API
- styled-components: keep all CSS within the component it belongs to

#### Back end
- axios: generate REST calls
- cookie-session: store user's information
- express
- mongojs: database
- mongoose: database
- MongoDB Atlas: hosted Mongo DB
- passport and passport-google-oauth20: login capabilities


