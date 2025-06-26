
'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { CheckCircle2 } from "lucide-react";

const fartCoins = [
  {
    name: "$FARTINU",
    description: "A fart-powered meme coin that exploded onto the scene.",
    image: "/fartinu.png",
    liquidity: 3000,
  },
  {
    name: "$GASFLOWS",
    description: "Backed by beans and blockchain.",
    image: "/gasflows.png",
    liquidity: 4700,
  },
  {
    name: "$BOOTYBLAST",
    description: "The loudest token on-chain.",
    image: "/bootyblast.png",
    liquidity: 5900,
  },
];

export default function OnlyFarts() {
  const [search, setSearch] = useState("");
  const [donating, setDonating] = useState(false);

  const filtered = fartCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDonate = (coin) => {
    setDonating(true);
    setTimeout(() => {
      alert(`Liquidity donation to ${coin.name} sent!`);
      setDonating(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-center px-4 py-10">
      <h1 className="text-4xl font-bold text-fuchsia-800 mb-6">OnlyFarts</h1>
      <p className="text-lg text-gray-700 mb-8">
        Subscribe and support your favorite fart-themed crypto tokens.
      </p>
      <Input
        placeholder="Search fart tokens..."
        className="w-full max-w-md mx-auto mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((coin) => (
          <Card key={coin.name} className="bg-white rounded-2xl shadow-md">
            <CardContent className="p-4">
              <Avatar className="mx-auto mb-4">
                <img src={coin.image} alt={coin.name} />
              </Avatar>
              <h2 className="text-xl font-semibold text-fuchsia-900">
                {coin.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{coin.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Current Liquidity: ${coin.liquidity.toLocaleString()}
              </p>
              <Button
                disabled={donating}
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                onClick={() => handleDonate(coin)}
              >
                {donating ? "Sending Farts..." : "Donate Liquidity"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <footer className="mt-12 text-sm text-gray-500">
        Powered by $ONLYFARTS on Solana Blockchain 💨
      </footer>
    </div>
  );
}
