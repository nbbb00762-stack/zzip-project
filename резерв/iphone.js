const products = [
  // watches (Apple Watch)
  { name: "Apple Watch Ultra 2", price: "₸549,990", priceValue: 549990, category: "watches", img: "./фото эпл/waatch.png" },
  { name: "Apple Watch Series 9", price: "₸339,990", priceValue: 339990, category: "watches", img: "./фото эпл/image__cupwgpm8si2q_large_2x-removebg-preview.png" },
  { name: "Apple Watch SE (2nd gen)", price: "₸179,990", priceValue: 179990, category: "watches", img: "./фото эпл/watchh.png" },
  { name: "Apple Watch Band — Sport", price: "₸25,990", priceValue: 25990, category: "accessories", img: "./фото эпл/image__cupwgpm8si2q_large_2x-removebg-preview.png" },

  // phones
  { name: "iPhone 17 Pro Max", price: "₸699,990", priceValue: 699990, category: "phones", img: "./фото эпл/17.png" },
  { name: "iPhone 16 Pro", price: "₸639,990", priceValue: 639990, category: "phones", img: "./фото эпл/16pro.png" },
  { name: "iPhone 16", price: "₸559,990", priceValue: 559990, category: "phones", img: "./фото эпл/16.png" },
  { name: "iPhone 15 Pro Max", price: "₸599,990", priceValue: 599990, category: "phones", img: "./фото эпл/15.png" },
 
  { name: "iPhone 14", price: "₸429,990", priceValue: 429990, category: "phones", img: "./фото эпл/14.png" },

  // headphones
  { name: "AirPods Pro (2nd gen)", price: "₸89,990", priceValue: 89990, category: "headphones", img: "./фото эпл/2nd.png" },
  { name: "AirPods (3rd gen)", price: "₸44,990", priceValue: 44990, category: "headphones", img: "./фото эпл/3rd.png" },
  { name: "Beats Studio3", price: "₸39,990", priceValue: 39990, category: "headphones", img: "./фото эпл/beats.png" },
  { name: "Beats Solo Pro", price: "₸34,990", priceValue: 34990, category: "headphones", img: "./фото эпл/solo.png" },
  { name: "AirPods Max", price: "₸119,990", priceValue: 119990, category: "headphones", img: "./фото эпл/max.png" },

  // laptops
  { name: "MacBook Pro 16\"", price: "₸449,990", priceValue: 449990, category: "laptops", img: "./фото эпл/16air.png" },
  { name: "MacBook Pro 14\"", price: "₸399,990", priceValue: 399990, category: "laptops", img: "./фото эпл/14air.png" },
  { name: "MacBook Air 13\"", price: "₸299,990", priceValue: 299990, category: "laptops", img: "./фото эпл/13air.png" },
  { name: "MacBook Air 15\"", price: "₸329,990", priceValue: 329990, category: "laptops", img: "./фото эпл/15air.png" },

  // computers
  { name: "iMac 24\"", price: "₸349,990", priceValue: 349990, category: "computers", img: "./фото эпл/24.png" },
  { name: "Mac mini (M2)", price: "₸159,990", priceValue: 159990, category: "computers", img: "./фото эпл/mini.png" },
  { name: "Mac Studio", price: "₸679,990", priceValue: 679990, category: "computers", img: "./фото эпл/stud.png" },
  { name: "Mac Pro", price: "₸1,299,990", priceValue: 1299990, category: "computers", img: "./фото эпл/pro.png" },

  // more mixed items
  { name: "iPhone 12 Mini", price: "₸259,990", priceValue: 259990, category: "phones", img: "./фото эпл/mini.png" },
 
  
];

// keep original order for "default" sort restore
const originalProducts = products.slice();

let currentFilter = "all";
let sortOrder = "default";

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderProducts() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = "";

  let list;
  if (currentFilter === "all") {
    // show mixed (shuffled) full list
    list = shuffleArray(products.slice());
  } else {
    list = products.filter(p => p.category === currentFilter);
  }

  if (list.length === 0) {
    grid.innerHTML = `<div class="note" style="padding:40px;text-align:center;color:var(--muted)">Товаров нет в этой категории.</div>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Crect fill=%23333 width=%22160%22 height=%22160%22/%3E%3C/text%3E%3C/svg%3E'">
      </div>
      <h3>${p.name}</h3>
      <div class="price-row">
        <span class="price">${p.price}</span>
      </div>
      <button class="btn">Қосу</button>
    `;
    grid.appendChild(card);
  });
}

function filterBy(category, element) {
  currentFilter = category;
  document.querySelectorAll(".filters .chip").forEach(c => c.classList.remove("active"));
  if (element) element.classList.add("active");
  renderProducts();
}

function toggleSort() {
  sortOrder = sortOrder === "default" ? "price-asc" : "default";
  const btn = document.querySelector('header .meta .chip');
  if (btn) btn.textContent = sortOrder === "default" ? "Әдепкі сұрыптау" : "Баға бойынша сұрыптау";

  if (sortOrder === "price-asc") {
    products.sort((a, b) => (a.priceValue || 0) - (b.priceValue || 0));
  } else {
    // restore original order
    products.length = 0;
    originalProducts.forEach(p => products.push(p));
  }
  renderProducts();
}

const iphoneImagePath = './фото эпл/image__bfgcn0q1a142_large_2x-removebg-preview.png';

function displayIphoneImage() {
    const iphoneImageElement = document.getElementById('iphone-image');
    if (iphoneImageElement) {
        iphoneImageElement.src = iphoneImagePath;
        iphoneImageElement.alt = 'iPhone Image';
    } else {
        console.error('Element with id "iphone-image" not found');
    }
}

document.addEventListener('DOMContentLoaded', displayIphoneImage);

const appleWatchImagePath = './фото эпл/image__cupwgpm8si2q_large_2x-removebg-preview.png';

function displayAppleWatchImage() {
    const appleWatchImageElement = document.getElementById('apple-watch-image');
    if (appleWatchImageElement) {
        appleWatchImageElement.src = appleWatchImagePath;
        appleWatchImageElement.alt = 'Apple Watch Image';
    } else {
        console.error('Element with id "apple-watch-image" not found');
    }
}

document.addEventListener('DOMContentLoaded', displayAppleWatchImage);

renderProducts();
