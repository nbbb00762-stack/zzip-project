const products = [
  // phones
  { name: "OPPO Find X8 Pro", price: "₸649,990", category: "phones", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-find-n5-en/listpage/427-600-white.png" },
  { name: "OPPO Reno 13F", price: "₸549,990", category: "phones", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-f-4g/purple-v1.png" },
  { name: "OPPO Reno13 Pro", price: "₸429,990", category: "phones", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-5g/blue.png" },
  { name: "OPPO Reno12", price: "₸379,990", category: "phones", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno-12-pro-en/listpage/427-600-gold.png" },
  { name: "OPPO Reno11 5G", price: "₸249,990", category: "phones", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-5g-en/listpage/reno11-427-600-green.png" },
  { name: "OPPO A5i", price: "₸199,990", category: "phones", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-a5i-en/listpage/448-600-red.png" },

  // foldables
  { name: "OPPO Find N3 Flip", price: "₸1,399,990", category: "foldables", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-n3-flip-en/listpage/find-n3-flip-427_600-gold.png" },
  { name: "OPPO Find N3", price: "₸1,199,990", category: "foldables", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/find-n3-en/listpage/find-n3-427_600-gold.png" },

  // tablets
  { name: "OPPO Pad 3 Pro", price: "₸459,990", category: "tablets", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-pad3-pro/list-page/580_600-blue_v2.png?" },
  { name: "OPPO Pad 2", price: "₸389,990", category: "tablets", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/pad-2-en/listpage/oppo-pad-2-600_600.png" },
  { name: "OPPO Pad Air", price: "₸329,990", category: "tablets", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-pad-air-purple-en/listpage/oppo-pad-air-600_600.png" },

  // watches
  { name: "OPPO Watch X2", price: "₸189,990", category: "watches", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-watch-x2/list-page/black-427-600.png" },
  { name: "OPPO Watch 2 Mini", price: "₸149,990", category: "watches", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-watch-x2-mini-en/listpage/445-600-gold.png" },
  { name: "OPPO Watch Free", price: "₸129,990", category: "watches", img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/watch-free/navigation/Watch-free-navigation-vanilla.png" },

  // buds
  { name: "OPPO Enco X3s", price: "₸64,990", category: "buds", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-x3s/list-page/600-600-white.png" },
  { name: "OPPO Enco ", price: "₸49,990", category: "buds", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-buds3-pro/list-page/purple-600-600.png" },
  { name: "OPPO Enco X3i", price: "₸34,990", category: "buds", img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-enco-x3i-en/navigation/440_440-Blue.png" },
  { name: "OPPO Enco Air4", price: "₸29,990", category: "buds", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-enco-air4/list-page/green_1.png" },
];

const grid = document.getElementById("grid");

function renderProducts(list) {
  if (!grid) return;
  grid.innerHTML = "";
  if (!list || list.length === 0) {
    grid.innerHTML = `<div class="note" style="padding:40px;text-align:center;color:#b8c7dd">Товаров нет.</div>`;
    return;
  }
  list.forEach(p => {
    const img = p.img || 'https://via.placeholder.com/320x320?text=No+image';
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb">
        <img src="${img}" alt="${p.name}">
      </div>
      <h3>${p.name}</h3>
      <div class="price-row">
        <div class="price">${p.price}</div>
        <button class="btn">Қосу</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterBy(category, element) {
  document.querySelectorAll(".filters .chip").forEach(c => c.classList.remove("active"));
  if (element) element.classList.add("active");
  if (category === "all") return renderProducts(products);
  renderProducts(products.filter(p => p.category === category));
}

(function init(){ renderProducts(products); })();