const products = [
  // phones
  { name: "Galaxy Z Fold7", price: "₸1,199,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/f2507/gallery/kz-ru-galaxy-z-fold7-f966-555336-sm-f966bzknskz-thumb-547633624?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Z Flip5", price: "₸949,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/f2507/gallery/kz-ru-galaxy-zflip7-f766-sm-f766bdbhskz-thumb-547629785?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Z Flip7 E", price: "₸1,549,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/f2507/gallery/kz-ru-galaxy-z-flip7-fe-f761-sm-f761bzwhskz-thumb-547628596?$Q90_495_330_F_PNG$"},
  { name: "Samsung Galaxy S25 Ultra", price: "₸949,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2501/gallery/kz-ru-galaxy-s25-s938-534727-sm-s938bzgcskz-thumb-544760715?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy S25", price: "₸529,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2501/gallery/kz-ru-galaxy-s25-s931-534719-sm-s931bzdbskz-thumb-544759878?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy S23", price: "₸499,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2401/gallery/kz-ru-galaxy-s24-sm-s921bzygskz-thumb-539366723?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy S24 Ultra", price: "₸599,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2401/gallery/kz-ru-galaxy-s24-s928-490285-sm-s928blgpskz-thumb-539392292?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A07", price: "₸499,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a075flvhskz/gallery/kz-ru-galaxy-a07-sm-a075-sm-a075flvhskz-thumb-548527783?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A06", price: "₸459,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a065flbhskz/gallery/kz-ru-galaxy-a06-sm-a065-sm-a065flbhskz-thumb-543298026?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Z fold6", price: "₸279,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-f956blicskz/gallery/kz-ru-galaxy-z-fold6-f956-sm-f956blicskz-thumb-542903076?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A53 5G", price: "₸219,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a566ezgcskz/gallery/kz-ru-galaxy-a56-5g-sm-a566-sm-a566ezgcskz-thumb-545303112?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A35", price: "₸179,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a356elvgskz/gallery/kz-ru-galaxy-a35-5g-sm-a356-sm-a356elvgskz-thumb-540127640?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A36", price: "₸149,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a366ezagskz/gallery/kz-ru-galaxy-a36-5g-sm-a366-sm-a366ezagskz-thumb-545302137?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A55", price: "₸99,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a556elvcskz/gallery/kz-ru-galaxy-a55-5g-sm-a556-sm-a556elvcskz-thumb-540125701?$Q90_495_330_F_PNG$" },
  { name: "Samsung Galaxy A05s", price: "₸469,990", category: "phones", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-a057fzkvskz/gallery/kz-ru-galaxy-a05s-sm-a057-sm-a057fzkvskz-thumb-538919415?$Q90_495_330_F_PNG$" },
 

  // tablets (Galaxy Tab)
  { name: "Galaxy Tab S11 Ultra 5G", price: "₸429,990", category: "tablets", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-x936bzaaskz/gallery/kz-ru-galaxy-tab-s11-ultra-sm-x930-sm-x936bzaaskz-thumb-549487530?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Tab S9", price: "₸369,990", category: "tablets", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-x816bzeaskz/gallery/kz-ru-galaxy-tab-s9-plus-5g-x816-sm-x816bzeaskz-thumb-537918016?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Tab A9+ 5G", price: "₸389,990", category: "tablets", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-x216bzseskz/gallery/kz-ru-galaxy-tab-a9-plus-sm-x216-sm-x216bzseskz-thumb-539782178?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Tab  S10 Lite 5G Online exclusive", price: "₸329,990", category: "tablets", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-x406bzsaskz/gallery/kz-ru-galaxy-tab-s10-lite-sm-x406-sm-x406bzsaskz-thumb-549027822?$Q90_495_330_F_PNG$" },

  // Galaxy Buds — теперь в своей категории 'buds'
  { name: "Galaxy Buds3 Pro", price: "₸64,990", category: "buds", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2407/gallery/kz-ru-galaxy-buds3-pro-r630-sm-r630nzwacis-thumb-542422934?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Buds3", price: "₸44,990", category: "buds", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2407/gallery/kz-ru-galaxy-buds3-r530-sm-r530nzaacis-thumb-542423302?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Buds Core", price: "₸34,990", category: "buds", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-r410nzwacis/gallery/kz-ru-galaxy-buds-core-r410-sm-r410nzwacis-thumb-547708819?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Buds3 FE", price: "₸24,990", category: "buds", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-r420nzaacis/gallery/kz-ru-galaxy-buds3-fe-sm-r420nzaacis-thumb-548910307?$Q90_495_330_F_PNG$" },

  // watches (Galaxy Watch)
  { name: "Galaxy Watch8 Classic 46mm", price: "₸299,990", category: "watches", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/f2507/gallery/kz-ru-galaxy-watch8-l320-sm-l320ndaacis-thumb-547718573?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Watch7 42mm", price: "₸259,990", category: "watches", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2407/gallery/kz-ru-galaxy-watch7-l310-sm-l310nzsacis-thumb-542421388?$Q90_495_330_F_PNG$" },
  { name: "Galaxy WatchFE", price: "₸189,990", category: "watches", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-r861nzsacis/gallery/kz-ru-galaxy-watch-fe-r861-sm-r861nzsacis-thumb-542853049?$Q90_495_330_F_PNG$" },
  { name: "Galaxy Watch Ultra", price: "₸169,990", category: "watches", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/2407/gallery/kz-ru-galaxy-watch-ultra-l705-sm-l705fztaskz-thumb-542422666?$Q90_495_330_F_PNG$" },
  { name: "Фитнес-часы Galaxy Fit3", price: "₸49,990", category: "watches", img: "https://images.samsung.com/is/image/samsung/p6pim/kz_ru/sm-r390nidacis/gallery/kz-ru-galaxy-fit3-r390-sm-r390nidacis-thumb-540283952?$Q90_495_330_F_PNG$" },

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
    const images = (p.images && p.images.length) ? p.images : (p.img ? [p.img] : []);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb">
        <img src="${images[0] || 'https://via.placeholder.com/320x320?text=No+image'}" alt="${p.name}">
      </div>
      <h3>${p.name}</h3>
      <div class="price-row">
        <div class="price">${p.price}</div>
        <button class="btn">Қосу</button>
      </div>
    `;
    // attach images array to img element and add hover handlers (if any)
    const imgEl = card.querySelector("img");
    imgEl._images = images;
    imgEl._currentIndex = 0;

    function startPreview() {
      if (!imgEl._images || imgEl._images.length <= 1) return;
      if (imgEl._interval) return;
      imgEl._interval = setInterval(() => {
        imgEl._currentIndex = (imgEl._currentIndex + 1) % imgEl._images.length;
        imgEl.src = imgEl._images[imgEl._currentIndex];
      }, 600);
    }
    function stopPreview() {
      if (imgEl._interval) {
        clearInterval(imgEl._interval);
        imgEl._interval = null;
      }
      imgEl._currentIndex = 0;
      if (imgEl._images && imgEl._images.length) imgEl.src = imgEl._images[0];
    }

    card.addEventListener("mouseenter", startPreview);
    card.addEventListener("mouseleave", stopPreview);

    let tapped = false;
    card.addEventListener("touchstart", (e) => {
      if (!tapped) {
        e.preventDefault();
        startPreview();
        tapped = true;
        setTimeout(() => { stopPreview(); tapped = false; }, 3000);
      }
    }, {passive:false});

    grid.appendChild(card);
  });
}

function filterBy(category, element) {
  document.querySelectorAll(".filters .chip").forEach(c => c.classList.remove("active"));
  if (element) element.classList.add("active");

  if (category === "all") {
    renderProducts(products);
    return;
  }
  const list = products.filter(p => p.category === category);
  renderProducts(list);
}

(function init() {
  const phoneChip = document.querySelector('.filters .chip[data-filter="phones"]');
  if (phoneChip) {
    document.querySelectorAll(".filters .chip").forEach(c => c.classList.remove("active"));
    phoneChip.classList.add("active");
  }
  filterBy("phones", phoneChip);
})();

// ensure Galaxy Tab items keep 'tablets', Galaxy Buds -> 'buds'
products.forEach(p => {
  if (/^Galaxy Tab/i.test(p.name)) p.category = "tablets";
  if (/Buds/i.test(p.name)) p.category = "buds";
});
