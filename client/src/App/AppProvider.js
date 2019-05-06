import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import API from "../utils/API";
// import { set } from 'mongoose';

const cc = require('cryptocompare');
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

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
      selectedForCompare:['LTC'],
      timeInterval: 'months',
      ...this.savedSettings(),
      setPage: this.setPage,
      pageTheme:'dark',
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
      sellButton: this.sellButton
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
    this.fetchUser(); 

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
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ['USD'],
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      )
    }
    return Promise.all(promises);
  }

  addCoin = key => {
    let favorites = [...this.state.favorites];
    console.log(key, "favorites addcoin key");
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
    console.log(key, "key from addSelectedCoin")
    let selected = [...this.state.selectedForCompare];
    console.log(selected,"selected array")
    selected.push(key);
    this.setState({ selectedForCompare : selected });
    
  }

  removeSelectedCoin = key => {
    let selected = [...this.state.selectedForCompare];
    // pull returns a new array with that value removed
    this.setState({ selectedForCompare: _.pull(selected, key) })
  }

  isInFavorites = key => _.includes(this.state.favorites, key)

  isInCompareList = key => {
    console.log(key, "from isInCompareLst")
    _.includes(this.state.selectedForCompare, key)}

  isInStore = key => _.includes(this.state.store, key)

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
    console.log("buy button hit");
    this.state.prices.forEach(async price => {
      if (price[this.state.currentFavorite]) {
        const sym = price[this.state.currentFavorite].USD.FROMSYMBOL;
        const own = this.state.user.owned;

        if (price[this.state.currentFavorite].USD.PRICE < this.state.user.balance) {
          console.log(" cash bro")

          for (let i = 0; i < own.length; i++) {
            if (own[i].CoinName === sym) {
              own[i].amount++;
            }
          }
          console.log(own, "own");
          const response = await API.buyButton({
            price: price[this.state.currentFavorite].USD.PRICE,
            balance: this.state.user.balance,
            googleId: this.state.user.googleId,
            owned: own,
          });
          console.log(response.data.balance, "response")
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
    console.log("sell button hit");
    this.state.prices.forEach(async price => {
      if (price[this.state.currentFavorite]) {
        const sym = price[this.state.currentFavorite].USD.FROMSYMBOL;
        const own = this.state.user.owned;
        for (let i = 0; i < own.length; i++) {
          if (own[i].CoinName === sym && own[i].amount > 0) {
            own[i].amount--;
            console.log(own, "own");
            const response = await API.sellButton({
              price: price[this.state.currentFavorite].USD.PRICE,
              balance: this.state.user.balance,
              googleId: this.state.user.googleId,
              owned: own,
            });

            console.log(response.data, "response")
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
