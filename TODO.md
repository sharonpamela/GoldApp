- 
- TODO:
- render condition buy/sell buttons for 5 coins
- logic for balance and inventory
-  make landing page
-  return "error not found" if user is NOT logged (don't display dasboard or the settings pages if user is NOT logged in)
- add theme AND (toggle button to settings page)
- have away for user to know which ones they own (disabled tile and put in favorites if they own them)
- show the amount of coins owned (show below buy/sell if they own the coin then show how many they currently have, if they don't own, don't render the sell button)
- Landing page: login button and a show clean tiles
- if the user doesn't want to log in then just show the pages with no buy/sell and no balance, and no owned coins


DONZO:
- fix proxy
- implement balance button, show balance in dashboard
- verified: -  db.users.findOneAndUpdate({ _id:'5ccbdf517c5d7e3893dcd753'}, {$set: {balance:200}})


color toggle: -> 
App/app.css
shared/styles.js
dashboard/HighchartsTheme.js