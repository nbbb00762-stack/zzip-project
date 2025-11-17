const products = [
  // phones
  { name: "Xiaomi 15 Pro", price: "₸599,990", category: "phones", img: "https://i02.appmifile.com/105_item_kz/03/09/2025/bda7e41b721d19ab31f3dc247b885938.png?thumb=1&f=webp&q=85" },
  { name: "Xiaomi 14 Pro", price: "₸499,990", category: "phones", img: "https://i02.appmifile.com/559_item_kz/17/01/2025/9089bfe9ec0115e2e1688f7d7f0e7ff4.png?thumb=1&f=webp&q=85" },
  { name: "Xiaomi 14 S", price: "₸799,990", category: "phones", img: "https://i02.appmifile.com/349_item_kz/18/03/2025/b39376c049c34158fa7bd9d2b305a722.png?thumb=1&f=webp&q=85" },
  { name: "Xiaomi 14 Ultra Ceramic", price: "₸899,990", category: "phones", img: "https://i02.appmifile.com/141_item_kz/17/01/2025/a6da35e86149d70ff63c9048cbfba0e1.png?thumb=1&f=webp&q=85" },
  { name: "MIX Fold 3", price: "₸1,199,990", category: "phones", img: "https://i02.appmifile.com/851_operatorx_operatorx_opx/05/03/2024/c12e2ad71964ca90b59af9112407b9d7.png?thumb=1&w=600&f=webp&q=85" },
  { name: "MIX Flip", price: "₸1,399,990", category: "phones", img: "https://i02.appmifile.com/562_operatorx_operatorx_opx/26/09/2024/dbd8ab2e47beb33c1e0b9aa96287b35c.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Redmi Note 13 Pro", price: "₸219,990", category: "phones", img: "https://i02.appmifile.com/308_operatorx_operatorx_opx/26/09/2023/4796e703846ff6b8afdca74fc2755a10.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Redmi Note 13 T", price: "₸189,990", category: "phones", img: "https://i02.appmifile.com/240_operatorx_operatorx_opx/26/09/2023/ee07297cdf24071db7f6846d9c4727bb.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Poco F7", price: "₸369,990", category: "phones", img: "https://i02.appmifile.com/699_item_kz/16/07/2025/799851bb9ab2e2d01688abaf1bde02cd.png?thumb=1&f=webp&q=85" },
  { name: "Poco F7 Pro", price: "₸399,990", category: "phones", img: "https://i02.appmifile.com/200_operatorx_operatorx_opx/27/03/2025/a5665340d53f25d8450a4356581d51cf.png?thumb=1&w=400&f=webp&q=85" },

  // tablets
  { name: "Xiaomi Pad Mini", price: "₸389,990", category: "tablets", img: "https://i02.appmifile.com/70_operatorx_operatorx_opx/25/09/2025/91d1516ce6c4fcc7aad7274d0fd1ca36.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Pad 2 Pro", price: "₸299,990", category: "tablets", img: "https://i02.appmifile.com/680_operatorx_operatorx_opx/28/10/2025/8594173bb45f56afe0870bb9691050e8.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Pad Pro", price: "₸239,990", category: "tablets", img: "https://i02.appmifile.com/73_operatorx_operatorx_opx/21/05/2024/9da572f0718c2baa9421143d9e848b48.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Redmi Pad Pro 5G", price: "₸179,990", category: "tablets", img: "https://i02.appmifile.com/601_operatorx_operatorx_opx/05/07/2024/e2e32734f8419c7a74d3fd813eb0d7a9.png?thumb=1&w=600&f=webp&q=85" },

  // watches
  { name: "Xiaomi Watch S3", price: "₸79,990", category: "watches", img: "https://i02.appmifile.com/563_operatorx_operatorx_opx/18/11/2024/f8bb3a1bb9990d8d5dde34cdbc9b9af7.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Watch 5", price: "₸109,990", category: "watches", img: "https://i02.appmifile.com/550_operatorx_operatorx_opx/10/01/2025/3e4be7077265268b396dbf717dbcedbf.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Watch 5 Lite", price: "₸149,990", category: "watches", img: "https://i02.appmifile.com/730_operatorx_operatorx_opx/30/09/2024/22c7c2b732b63c08bd1af342daa7de62.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Smart Kids Watch", price: "₸29,990", category: "watches", img: "https://i02.appmifile.com/245_operatorx_operatorx_opx/22/08/2023/2a99aa474f1feb60535c41ca474b824c.png?thumb=1&w=600&f=webp&q=85" },

  // buds
  { name: "Xiaomi OpenWear Stereo Pro", price: "₸54,990", category: "buds", img: "https://i02.appmifile.com/702_operatorx_operatorx_opx/08/07/2024/ca97ce9ed7d50ffceacc6b447ebe7297.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Buds 5 Pro", price: "₸39,990", category: "buds", img: "https://i02.appmifile.com/240_operatorx_operatorx_opx/02/03/2025/535cc294bdd08b430b3fe9f0c52d3875.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Redmi Buds 6 Active", price: "₸39,990", category: "buds", img: "https://i02.appmifile.com/42_operatorx_operatorx_opx/12/09/2024/7fe8ec3ca79020887596d5776b4efcc6.png?thumb=1&w=600&f=webp&q=85" },
  { name: "Xiaomi Buds 6 Pro", price: "₸44,990", category: "buds", img: "https://i02.appmifile.com/640_operatorx_operatorx_opx/02/09/2024/2e17e2f72632d75847bdb47d5cee20bc.png?thumb=1&w=600&f=webp&q=85" }
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
      <div class="thumb"><img src="${img}" alt="${p.name}"></div>
      <h3>${p.name}</h3>
      <div class="price-row">
        <div class="price">${p.price}</div>
        <button class="btn" onclick="alert('Добавлено: ${p.name}')">Қосу</button>
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