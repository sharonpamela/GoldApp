// https://www.tradingview.com/widget/market-overview/
// import React from 'react';
// import styled from 'styled-components';
// import { AppContext } from "../App/AppProvider";
// import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

// const CompareButtonStyled = styled.div`
//   margin: 20px;
//   color: ${color3}
//   ${fontSize1} 
//   padding: 5px;
//   cursor: pointer; 
//   &:hover {
//     ${greenBoxShadow} 
//   }
// `

// export const CenterDiv = styled.div`
//   display: grid;
//   justify-content: center;
// `;

// export default function () {
//     return (
//         <div class="tradingview-widget-container">
//             <div class="tradingview-widget-container__widget"></div>
//             <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">Market Data</span></a> by TradingView</div>
//             <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
//                 {"showChart": true,
//                 "locale": "en",
//                 "largeChartUrl": "",
//                 "width": "400",
//                 "height": "660",
//                 "plotLineColorGrowing": "rgba(230, 145, 56, 1)",
//                 "plotLineColorFalling": "rgba(191, 144, 0, 1)",
//                 "gridLineColor": "rgba(0, 0, 0, 1)",
//                 "scaleFontColor": "rgba(0, 0, 0, 1)",
//                 "belowLineFillColorGrowing": "rgba(180, 95, 6, 0.12)",
//                 "belowLineFillColorFalling": "rgba(241, 194, 50, 0.12)",
//                 "symbolActiveColor": "rgba(225, 239, 249, 1)",
//                 "tabs": [
//     {
//                     "title": "Indices",
//             "symbols": [
//         {
//                     "s": "OANDA:SPX500USD",
//             "d": "S&P 500"
//           },
//         {
//                     "s": "INDEX:XLY0",
//             "d": "Shanghai Composite"
//           },
//         {
//                     "s": "FOREXCOM:DJI",
//             "d": "Dow 30"
//           },
//         {
//                     "s": "INDEX:NKY",
//             "d": "Nikkei 225"
//           },
//         {
//                     "s": "INDEX:DAX",
//             "d": "DAX Index"
//           },
//         {
//                     "s": "OANDA:UK100GBP",
//             "d": "FTSE 100"
//           }
//         ],
//         "originalTitle": "Indices"
//       },
//     {
//                     "title": "Commodities",
//             "symbols": [
//         {
//                     "s": "CME_MINI:ES1!",
//             "d": "E-Mini S&P"
//           },
//         {
//                     "s": "CME:E61!",
//             "d": "Euro"
//           },
//         {
//                     "s": "COMEX:GC1!",
//             "d": "Gold"
//           },
//         {
//                     "s": "NYMEX:CL1!",
//             "d": "Crude Oil"
//           },
//         {
//                     "s": "NYMEX:NG1!",
//             "d": "Natural Gas"
//           },
//         {
//                     "s": "CBOT:ZC1!",
//             "d": "Corn"
//           }
//         ],
//         "originalTitle": "Commodities"
//       },
//     {
//                     "title": "Bonds",
//             "symbols": [
//         {
//                     "s": "CME:GE1!",
//             "d": "Eurodollar"
//           },
//         {
//                     "s": "CBOT:ZB1!",
//             "d": "T-Bond"
//           },
//         {
//                     "s": "CBOT:UD1!",
//             "d": "Ultra T-Bond"
//           },
//         {
//                     "s": "EUREX:GG1!",
//             "d": "Euro Bund"
//           },
//         {
//                     "s": "EUREX:II1!",
//             "d": "Euro BTP"
//           },
//         {
//                     "s": "EUREX:HR1!",
//             "d": "Euro BOBL"
//           }
//         ],
//         "originalTitle": "Bonds"
//       },
//     {
//                     "title": "Forex",
//             "symbols": [
//         {
//                     "s": "FX:EURUSD"
//           },
//         {
//                     "s": "FX:GBPUSD"
//           },
//         {
//                     "s": "FX:USDJPY"
//           },
//         {
//                     "s": "FX:USDCHF"
//           },
//         {
//                     "s": "FX:AUDUSD"
//           },
//         {
//                     "s": "FX:USDCAD"
//           }
//         ],
//         "originalTitle": "Forex"
//       }
//     ]
//   }
//   </script>
//         </div>
//     );
// }