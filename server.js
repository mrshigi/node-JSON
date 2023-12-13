const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/stocks", (req, res) => {
  const stocks = [];
  stocks[0] = {
    name: "AMD",
    price: "Price: 129",
    fiftytwoweekhigh: "52-Week High: 135",
    fiftytwoweeklow: "52-Week Low: 82",
    marketcap: [
        "Details",
        "Market Cap: 600B",
        "Employee Count: 2346", 
        "Price to Earnings Ratio: 88",
    ],
    img: "images/AMD.png",
  };
  stocks[1] = {
    name: "NVDA",
    price: "Price: 475",
    fiftytwoweekhigh: "52-Week High: 540",
    fiftytwoweeklow: "52-Week Low: 420",
    marketcap: [
        "Details",
        "Market Cap: 600B",
        "Employee Count: 2346", 
        "Price to Earnings Ratio: 88",
    ],
    img: "images/NVDA.png",
  };
  stocks[2] = {
    name: "BAC",
    price: "Price: 31",
    fiftytwoweekhigh: "52-Week High: 34",
    fiftytwoweeklow: "52-Week Low: 25",
    marketcap: [
        "Details",
        "Market Cap: 600B",
        "Employee Count: 2346", 
        "Price to Earnings Ratio: 88",
    ],
    img: "images/BAC.png",
  };
  stocks[3] = {
    name: "XOM",
    price: "Price: 79",
    fiftytwoweekhigh: "52-Week High: 135",
    fiftytwoweeklow: "52-Week Low: 82",
    marketcap: [
        "Details",
        "Market Cap: 600B",
        "Employee Count: 2346", 
        "Price to Earnings Ratio: 88",
    ],
    img: "images/XOM.png",
  };
  stocks[4] = {
    name: "SPY",
    price: "Price: 425",
    fiftytwoweekhigh: "52-Week High: 460",
    fiftytwoweeklow: "52-Week Low: 410",
    marketcap: [
        "Details",
        "Market Cap: 600B",
        "Employee Count: 2346", 
        "Price to Earnings Ratio: 88",
    ],
    img: "images/SPY.png",
  };
  res.json(stocks);
});

app.listen(3000, () => {
  console.log("I listen");
});
