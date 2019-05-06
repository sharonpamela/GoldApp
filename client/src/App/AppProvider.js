import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import API from "../utils/API";
// import debounce from "debounce-promise"; //used to slow down the API calls
const cc = require('cryptocompare');
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;
const COMPARE_TIME_UNITS = 5;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      user: false,
      balance: 0,
      owned: [],
      favorites: ['ZEC', 'ETH', 'ETC', '300', 'LTC'],
      store: ['LTC', '300', 'ETH', 'ETC', 'ZEC'],
      selectedForCompare: ['LTC'],
      timeInterval: 'months',
      ...this.savedSettings(),
      setPage: this.setPage,
      pageTheme: 'dark',
      setTheme: this.setTheme,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      isInCompareList: this.isInCompareList,
      isInStore: this.isInStore,
      confirmFavorites: this.confirmFavorites,
      removeSelectedCoin: this.removeSelectedCoin,
      addSelectedCoin: this.addSelectedCoin,
      setCurrentFavorite: this.setCurrentFavorite,
      setFilteredCoins: this.setFilteredCoins,
      changeChartSelect: this.changeChartSelect,
      buyButton: this.buyButton,
      sellButton: this.sellButton,
      changeTheme: this.changeTheme
    }
  }
  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
    this.fetchUser();
    this.fetchCompareHistorical();
  }
  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  }
  fetchUser = async () => {
    let user = await axios.get('/api/current_user')
    this.setState({ user: user.data });
  }
  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    this.setState({ prices });
  }
  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
        returnData.push(priceData);
      } catch (e) {
        console.warn('Fetch price error: ', e);
      }
    }
    return returnData;
  }
  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment().subtract({ [this.state.timeInterval]: TIME_UNITS - index }).valueOf(),
          ticker.USD
        ])
      }
    ]
    this.setState({ historical });
  }
  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(cc.priceHistorical(this.state.currentFavorite,['USD'],
          moment().subtract({ [this.state.timeInterval]: units }).toDate()
        )
      )
    }
    return Promise.all(promises);
  }

  fetchCompareHistorical = async () => {
    if (this.state.firstVisit) return;
    // if (this.state.page != "compare") return;
    let favs = this.state.favorites;
    let arrayOfResultObjs =[]
    // call historical for each object in the favs array store the data as an object in the arrayOfResults
    for (let i=0 ; i< favs.length ; i++){
      let results = await this.compareHistorical(favs[i]);
      let historical =
        {
          name: favs[i],
          data: results.map((ticker, index) => [
            moment().subtract({ [this.state.timeInterval]: COMPARE_TIME_UNITS - index }).valueOf(),
            ticker.USD
          ])
        }
      arrayOfResultObjs.push(historical)
    }
    console.log("arrayOfResultObjs", arrayOfResultObjs)
    this.setState({ arrayOfSeriesDataSets:arrayOfResultObjs });
  }

  compareHistorical = (coin) => {
    let promises = [];
    for (let units = COMPARE_TIME_UNITS; units > 0; units--) {
      // let debounced = debounce(cc.priceHistorical(coin,['USD'],
      // moment().subtract({ [this.state.timeInterval]: units }).toDate()), 3000);
      // promises.push(debounced);
      promises.push(cc.priceHistorical(coin,['USD'],
      moment().subtract({ [this.state.timeInterval]: units }).toDate()));
    }
    return Promise.all(promises);
  }

  fetchCompareHistorical2 = async () => {
    if (this.state.firstVisit) return;
    let arrayOfSeriesDataSets = await this.compareHistorical();
    this.setState({ arrayOfSeriesDataSets });
  }
  compareHistorical2 = () => {
    let promises = [];
    let favs = this.state.favorites;
    let arrayOfSeries = [];
    let tempArr =[];
    let name;
    let data;
    for (let i = 0; i < favs.length; i++) {
      for (let units = COMPARE_TIME_UNITS; units > 0; units--) {
        promises.push(cc.priceHistorical(
          favs[i],['USD'],moment().subtract({ [this.state.timeInterval]: units }).toDate())
        )
        tempArr.push(Promise.all(promises)) // stores 5 calls in array
        // let valArr = tempArr.map((promise,index) => promise.resolved)
      }
      name = favs[i]
      data = tempArr.map((ticker, index) => [moment()
        .subtract({ [this.state.timeInterval]: COMPARE_TIME_UNITS - index })
        .valueOf(),
        ticker.USD])
  
      arrayOfSeries.push({name:name, data:data}) // pushes the array of 5 calls into array of series
      promises =[];
      tempArr=[];
    }
    return arrayOfSeries;
  }
  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  }
  removeCoin = key => {
    let favorites = [...this.state.favorites];
    // pull returns a new array with that value removed
    this.setState({ favorites: _.pull(favorites, key) })
  }
  addSelectedCoin = key => {
    let selected = [...this.state.selectedForCompare];
    selected.push(key);
    this.setState({ selectedForCompare: selected });
  }
  removeSelectedCoin = key => {
    let selected = [...this.state.selectedForCompare];
    // pull returns a new array with that value removed
    this.setState({ selectedForCompare: _.pull(selected, key) })
  }
  isInFavorites = key => _.includes(this.state.favorites, key)
  isInCompareList = key => {
    _.includes(this.state.selectedForCompare, key)
  }
  isInStore = key => _.includes(this.state.store, key)
  changeTheme = () => {
    console.log("change theme fired")
    console.log(this.state.pageTheme, "page theme state")
     if (this.state.pageTheme === 'dark') {
       this.setState({
         pageTheme: 'light'
       })
     }
    else {
       this.setState({
         pageTheme: 'dark'
       })
     }
  }
  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState({
      firstVisit: false,
      page: 'dashboard',
      currentFavorite,
      prices: null,
      historical: null
    }, () => {
      this.fetchPrices();
      this.fetchHistorical();
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites,
      currentFavorite
    }));
  }
  compareSelected = () => {
    this.setState(() => {
      this.fetchPrices();
      this.fetchCompareHistorical();
    });
  }
  setCurrentFavorite = (sym) => {
    this.setState({
      currentFavorite: sym,
      historical: null
    }, this.fetchHistorical);
    localStorage.setItem('cryptoDash', JSON.stringify({
      ...JSON.parse(localStorage.getItem('cryptoDash')),
      currentFavorite: sym
    }))
  }
  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true }
    }
    let { favorites, currentFavorite } = cryptoDashData;
    return { favorites, currentFavorite };
  }
  buyButton = async (currentFavorite) => {
    this.state.prices.forEach(async price => {
      if (price[this.state.currentFavorite]) {
        const sym = price[this.state.currentFavorite].USD.FROMSYMBOL;
        const own = this.state.user.owned;
        if (price[this.state.currentFavorite].USD.PRICE < this.state.user.balance) {
          for (let i = 0; i < own.length; i++) {
            if (own[i].CoinName === sym) {
              own[i].amount++;
            }
          }
          const response = await API.buyButton({
            price: price[this.state.currentFavorite].USD.PRICE,
            balance: this.state.user.balance,
            googleId: this.state.user.googleId,
            owned: own,
          });
          this.fetchUser();
          const numberFormat = number => {
            return +(number + '').slice(0, 7);
          }
          this.setState({ balance: numberFormat(response.data.balance) })
        }
      }
    })
  };
  sellButton = async (currentFavorite) => {
    this.state.prices.forEach(async price => {
      if (price[this.state.currentFavorite]) {
        const sym = price[this.state.currentFavorite].USD.FROMSYMBOL;
        const own = this.state.user.owned;
        for (let i = 0; i < own.length; i++) {
          if (own[i].CoinName === sym && own[i].amount > 0) {
            own[i].amount--;
            const response = await API.sellButton({
              price: price[this.state.currentFavorite].USD.PRICE,
              balance: this.state.user.balance,
              googleId: this.state.user.googleId,
              owned: own,
            });
            this.fetchUser();
            const numberFormat = number => {
              return +(number + '').slice(0, 7);
            }
            this.setState({ balance: numberFormat(response.data.balance) })
            // this.setState({owned: response.data.owned})
          }
        }
      }
    })
  };
  setPage = page => this.setState({ page })
  setTheme = theme => this.setState({ theme })
  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins })
  changeChartSelect = (value) => {
    this.setState({ timeInterval: value, historical: null }, this.fetchHistorical);
  }
  render() {
    // console.log(this.state.user);
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}