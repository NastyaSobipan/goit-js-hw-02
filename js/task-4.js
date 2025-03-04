function getShippingCost(country) {
  switch (country) {
    case "China":
      return 100;
    case "Chile":
      return 250;
    case "Australia":
      return 170;
    case "Jamaica":
      return 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
