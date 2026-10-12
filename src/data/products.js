```javascript
import birlaCement from "../assets/products/birla-cem.jpeg";
import kamdhenuSteel from "../assets/kamdhenu-tmt-bar.jpg";

import nerolacPaint from "../assets/products/nerolac.jpeg";
import asianPaints from "../assets/products/paints.jpeg";
import birlaOpusPaint from "../assets/products/birla-opus.jpeg";

import pipes from "../assets/products/pipes.jpeg";
import pipes2 from "../assets/products/pipes2.jpeg";
import waterTank from "../assets/products/wtr-tank.jpeg";

import sanitary from "../assets/products/sanitary.jpeg";
import sanitary2 from "../assets/products/sanitary2.jpeg";
import sanitary3 from "../assets/products/sanitary3.jpeg";

import conchem from "../assets/products/conchem-chem.jpeg";
import chemical from "../assets/products/chemical.jpeg";
import hardwareTools from "../assets/products/hrd-tools.jpeg";

const products = [
  // ================= CEMENT =================
  {
    id: "cement-acc",
    name: "ACC Cement",
    category: "Cement",
    brand: "ACC",
    price: 400,
    unit: "Bag",
    image: birlaCement,
  },
  {
    id: "cement-ambuja",
    name: "Ambuja Cement",
    category: "Cement",
    brand: "Ambuja",
    price: 400,
    unit: "Bag",
    image: birlaCement,
  },
  {
    id: "cement-birla",
    name: "Birla Cement",
    category: "Cement",
    brand: "Birla",
    price: 400,
    unit: "Bag",
    image: birlaCement,
  },
  {
    id: "cement-jsw",
    name: "JSW Cement",
    category: "Cement",
    brand: "JSW",
    price: 400,
    unit: "Bag",
    image: birlaCement,
  },
  {
    id: "cement-nuvoco",
    name: "Nuvoco Cement",
    category: "Cement",
    brand: "Nuvoco",
    price: 400,
    unit: "Bag",
    image: birlaCement,
  },

  // ================= STEEL =================
  {
    id: "steel-mahavir",
    name: "Mahavir TMT",
    category: "Steel",
    brand: "Mahavir",
    price: 65,
    unit: "Kg",
    image: kamdhenuSteel,
  },
  {
    id: "steel-vijay",
    name: "Vijay TMT",
    category: "Steel",
    brand: "Vijay",
    price: 65,
    unit: "Kg",
    image: kamdhenuSteel,
  },
  {
    id: "steel-kamdhenu",
    name: "Kamdhenu TMT",
    category: "Steel",
    brand: "Kamdhenu",
    price: 65,
    unit: "Kg",
    image: kamdhenuSteel,
  },

  // ================= PAINTS =================
  {
    id: "paint-nerolac",
    name: "Nerolac Paint",
    category: "Paints",
    brand: "Nerolac",
    price: 850,
    unit: "Pack",
    image: nerolacPaint,
  },
  {
    id: "paint-asian",
    name: "Asian Paints",
    category: "Paints",
    brand: "Asian Paints",
    price: 850,
    unit: "Pack",
    image: asianPaints,
  },
  {
    id: "paint-birla-opus",
    name: "Birla Opus Paint",
    category: "Paints",
    brand: "Birla Opus",
    price: 850,
    unit: "Pack",
    image: birlaOpusPaint,
  },

  // ================= PIPES =================
  {
    id: "pipe-astral",
    name: "Astral Pipes",
    category: "Pipes & Fittings",
    brand: "Astral",
    price: 500,
    unit: "Piece",
    image: pipes,
  },
  {
    id: "pipe-filomax",
    name: "Filomax Pipes",
    category: "Pipes & Fittings",
    brand: "Filomax",
    price: 450,
    unit: "Piece",
    image: pipes2,
  },
  {
    id: "pipe-idol",
    name: "Idol Pipes",
    category: "Pipes & Fittings",
    brand: "Idol",
    price: 450,
    unit: "Piece",
    image: pipes,
  },
  {
    id: "pipe-prince",
    name: "Prince Pipes",
    category: "Pipes & Fittings",
    brand: "Prince",
    price: 500,
    unit: "Piece",
    image: pipes2,
  },

  // ================= WATER TANKS =================
  {
    id: "tank-balaji",
    name: "Balaji Water Tank",
    category: "Water Tanks",
    brand: "Balaji",
    price: 5500,
    unit: "Piece",
    image: waterTank,
  },
  {
    id: "tank-prince",
    name: "Prince Water Tank",
    category: "Water Tanks",
    brand: "Prince",
    price: 6000,
    unit: "Piece",
    image: waterTank,
  },
  {
    id: "tank-astral",
    name: "Astral Water Tank",
    category: "Water Tanks",
    brand: "Astral",
    price: 6000,
    unit: "Piece",
    image: waterTank,
  },

  // ================= SANITARY =================
  {
    id: "sanitary-glocera",
    name: "Glocera Sanitary",
    category: "Sanitary",
    brand: "Glocera",
    price: 2500,
    unit: "Piece",
    image: sanitary,
  },
  {
    id: "sanitary-parryware",
    name: "Parryware Sanitary",
    category: "Sanitary",
    brand: "Parryware",
    price: 3000,
    unit: "Piece",
    image: sanitary2,
  },
  {
    id: "sanitary-hindware",
    name: "Hindware Sanitary",
    category: "Sanitary",
    brand: "Hindware",
    price: 3000,
    unit: "Piece",
    image: sanitary3,
  },
  {
    id: "sanitary-cera",
    name: "Cera Sanitary",
    category: "Sanitary",
    brand: "Cera",
    price: 3000,
    unit: "Piece",
    image: sanitary2,
  },

  // ================= CHEMICALS =================
  {
    id: "chemical-conchem",
    name: "Conchem",
    category: "Chemicals",
    brand: "Conchem",
    price: 500,
    unit: "Pack",
    image: conchem,
  },
  {
    id: "chemical-dr-fixit",
    name: "DR Fixit",
    category: "Chemicals",
    brand: "DR Fixit",
    price: 500,
    unit: "Pack",
    image: chemical,
  },

  // ================= HARDWARE =================
  {
    id: "hardware-tools",
    name: "Hardware Tools",
    category: "Hardware",
    brand: "Mushad",
    price: 300,
    unit: "Set",
    image: hardwareTools,
  },
];

export default products;
```