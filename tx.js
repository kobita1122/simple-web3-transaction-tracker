async function fetchTransactions(address) {
  const url =
    TX_API +
    "?module=account&action=txlist&address=" +
    address +
    "&sort=desc&apikey=" +
    API_KEY;

  const response = await fetch(url);
  const data = await response.json();
  return data.result || [];
}
