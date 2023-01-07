# Market Checker

Easy to use site to check current price, market cap, volume cryptocurrency of your choice.

## How does it work?

This site uses CoinGeko API to get information of searched cryptocurrency.

What information?
* List of all listed cryptocurrency on coingeko site,
* Details of chosen coin, like:
    * logo,
    * current price,
    * market cap,
    * volume,
    * historical data of price, for chart drawing,
    * description.
   
## How to search?

Besides the possibility of searching you can also choose coin from the list. List contains every available coin given by the API. Some of those coins may not contain necessary information to draw chart or display basic information like current price or market cap. If so, there will be displayed appropriate error message. 

## Errors

The error message will also appear when searched phrase will be incorrect (misspelled etc.) or when API will not respond (this may occure when too many queries is send in short time frame or API is offline).

### More

I tried to code this site using the MVC architecture. 
Languages used:
   * JavaScript,
   * HTML,
   * SASS.


