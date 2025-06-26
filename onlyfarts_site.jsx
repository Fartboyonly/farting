<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OnlyFarts</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-yellow-50 text-center px-4 py-10">
    <h1 class="text-4xl font-bold text-fuchsia-800 mb-6">OnlyFarts</h1>
    <p class="text-lg text-gray-700 mb-8">
      Subscribe and support your favorite fart-themed crypto tokens.
    </p>
    <input
      type="text"
      id="search"
      placeholder="Search fart tokens..."
      class="w-full max-w-md mx-auto mb-6 p-2 border border-gray-300 rounded"
    />
    <div id="coin-container" class="grid md:grid-cols-3 gap-6"></div>
    <footer class="mt-12 text-sm text-gray-500">
      Powered by $ONLYFARTS on Solana Blockchain 💨
    </footer>

    <script>
      const coins = [
        {
          name: "$FARTINU",
          description: "A fart-powered meme coin that exploded onto the scene.",
          image: "fartinu.png",
          liquidity: 3000,
        },
        {
          name: "$GASFLOWS",
          description: "Backed by beans and blockchain.",
          image: "gasflows.png",
          liquidity: 4700,
        },
        {
          name: "$BOOTYBLAST",
          description: "The loudest token on-chain.",
          image: "bootyblast.png",
          liquidity: 5900,
        },
      ];

      let donating = false;

      const container = document.getElementById("coin-container");
      const searchInput = document.getElementById("search");

      const renderCoins = (filteredCoins) => {
        container.innerHTML = "";
        filteredCoins.forEach((coin) => {
          const card = document.createElement("div");
          card.className = "bg-white rounded-2xl shadow-md p-4";

          card.innerHTML = `
            <div class="mx-auto mb-4">
              <img src="${coin.image}" alt="${coin.name}" class="w-16 h-16 mx-auto rounded-full" />
            </div>
            <h2 class="text-xl font-semibold text-fuchsia-900">${coin.name}</h2>
            <p class="text-sm text-gray-600 mb-2">${coin.description}</p>
            <p class="text-sm text-gray-500 mb-4">Current Liquidity: $${coin.liquidity.toLocaleString()}</p>
            <button class="donate-btn bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded" data-name="${coin.name}">
              Donate Liquidity
            </button>
          `;

          container.appendChild(card);
        });
      };

      searchInput.addEventListener("input", () => {
        const filtered = coins.filter((coin) =>
          coin.name.toLowerCase().includes(searchInput.value.toLowerCase())
        );
        renderCoins(filtered);
      });

      container.addEventListener("click", (e) => {
        if (e.target.classList.contains("donate-btn") && !donating) {
          donating = true;
          const btn = e.target;
          const name = btn.dataset.name;
          btn.textContent = "Sending Farts...";
          setTimeout(() => {
            alert(`Liquidity donation to ${name} sent!`);
            btn.textContent = "Donate Liquidity";
            donating = false;
          }, 1200);
        }
      });

      renderCoins(coins);
    </script>
  </body>
</html>
