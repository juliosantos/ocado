document.getElementById("fill-cart").onclick = () => (
  chrome.tabs.executeScript(
    {code: `
      csrf = document.querySelector("meta[name=_csrf]").content;
      sku = "25166011";
      quantity = 1;
      fetch("https://www.ocado.com/webshop/addToBasket.do", {
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
        },
        "body": "_csrf=" + csrf + "&sku=" + sku + "&quantity=" + quantity + "&ajax=true",
        "method": "POST",
        "credentials": "include"
      });
    `},
  )
);
