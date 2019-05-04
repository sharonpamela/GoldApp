- 
- TODO sharon:
- Landing page: login button and a show clean tiles
- Add Continue as guess button in login page
- Silver theme
- Amount of coins owned: force into favorites with disabled tile
- show the amount of that particular coin owned in coinspolight
- change the selected tile's shadow in top selection to more visible color
- DONT render buy sell butons if not logged in
- Disable buy buton if you don't own the coin  
- change cryptodash references to Gold
- add bitcoin news scraper?

- TODO Amy
- logic for balance and inventory
- logic for render condition buy/sell buttons:
  - Buy: balance > 0 && coin is in fav 5
  - Sell: if amount owned by user > 0 (update balance with profit)


DONZO:
- fix proxy
- implement balance button, show balance in dashboard
- verified: -  db.users.findOneAndUpdate({ _id:'5ccbdf517c5d7e3893dcd753'}, {$set: {balance:200}})
- add theme AND (toggle button to settings page)

color toggle: -> 
App/app.css
shared/styles.js
dashboard/HighchartsTheme.js
App/AppBar.js:
        const Bar = styled.div`
        display: grid; 
        margin-bottom: 40px; 
        grid-template-columns: 180px auto 100px 100px; 
        background-color:black; <------------- changed this too
        `
