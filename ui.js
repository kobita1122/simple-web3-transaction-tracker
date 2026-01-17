async function updateInfo() {
  const address = await getWalletAddress();
  const network = await getNetworkName();

  document.getElementById("address").innerText = address;
  document.getElementById("network").innerText = network;
}

async function loadTransactions() {
  const address = await getWalletAddress();
  const list = document.getElementById("txList");
  list.innerHTML = "";

  const txs = await fetchTransactions(address);

  txs.slice(0, 5).forEach(tx => {
    const item = document.createElement("li");
    item.innerText = "TX Hash: " + tx.hash;
    list.appendChild(item);
  });
}
