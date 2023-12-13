const showStocks = async () => 
{
    const stocksJSON = await getJSON();
    if(stocksJSON == " ") {
        return;
    }
  
    
    console.log("praying this works");
    let stockDiv = document.getElementById("stock-list");

    stocksJSON.forEach((stocks) => {
        let section = document.createElement("section");
        stockDiv.append(section);
        let title = stocks.name;

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = stocks.name;
        
        let img = document.createElement("img");
        section.append(img);
        img.src="https://assignment13-5i2l.onrender.com/" +stocks.img;

        let p = document.createElement("p");
        section.append(p);
        p.innerHTML = stocks.price;
        let p1 = document.createElement("p");
        section.append(p1);
        p1.innerHTML = stocks.fiftytwoweekhigh;
        let p2 = document.createElement("p");
        section.append(p2);
        p2.innerHTML = stocks.fiftytwoweeklow;
        //let li = document.createElement("li");
       // section.append(li);
        //li.innerHTML = stocks.marketcap;
        const ul = document.createElement("ul");
        bookDetails.append(ul);
        console.log(stocks.marketcap);
        stocks.marketcap.forEach((marketcap) => {
          const li = document.createElement("li");
          ul.append(li);
          li.innerHTML = marketcap;
        });
    });


};

const getJSON = async () => {
    try
    {
        let response = await fetch("https://assignment13-5i2l.onrender.com/api/stocks");
        return await response.json();
    }catch(error){
        console.log("error retrieving json");
        return " ";
    }
}
window.onload = ()  => {
    showStocks();
}