const latitudeRed = -6.214322680594008;
const longitudeRed = 106.8345630535894;
const pinHome = "icons/map-pin-1.svg";
const pinPlace = "icons/map-pin-2.svg";

const pushpins = [
  // --------------- mall
  {
    location: [latitudeRed, longitudeRed],
    option: {
      title: "Verde Two",
      icon: pinHome,
      category: "Mall",
    },
  },

  {
    location: [-6.192560567056379, 106.82164178008995],
    option: {
      title: "Plaza Indonesia",
      icon: pinPlace,
      category: "Mall",
    },
  },
  {
    location: [-6.194925964137779, 106.82097614366133],
    option: {
      title: "Grand Indonesia",
      icon: pinPlace,
      category: "Mall",
    },
  },
  {
    location: [-6.2236083004876095, 106.8419490364899],
    option: {
      title: "Kota Kasablanka",
      category: "Mall",
      icon: pinPlace,
    },
  },
  {
    location: [-6.224232319621458, 106.81027289591722],
    option: {
      title: "Pacific Place",
      category: "Mall",
      icon: pinPlace,
    },
  },
  {
    location: [-6.220939140218245, 106.8324325535894],
    option: {
      title: "Plaza Festival Mall",
      category: "Mall",
      icon: pinPlace,
    },
  },

  // --------------- restaurant
  {
    location: [latitudeRed, longitudeRed],
    option: {
      title: "Verde Two",
      icon: pinHome,
      category: "Restaurant",
    },
  },
  {
    location: [-6.219095979888776, 106.83436890940871],
    option: {
      title: "Bluegrass Bar & Grill",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  {
    location: [-6.223511788069643, 106.83355359591715],
    option: {
      title: "Henshin Restaurant",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  {
    location: [-6.207776002022635, 106.82849647776067],
    option: {
      title: "Akira Back Jakarta",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  {
    location: [-6.219410951273349, 106.83341003283594],
    option: {
      title: "Saigon Cafe",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  {
    location: [-6.197014344163161, 106.82375207021548],
    option: {
      title: "GIOI Menteng",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  {
    location: [-6.194923153781483, 106.82484451572978],
    option: {
      title: "Seribu Rasa Menteng",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  {
    location: [-6.191117915857563, 106.82845012158353],
    option: {
      title: "Plataran Menteng",
      icon: pinPlace,
      category: "Restaurant",
    },
  },
  // --------------- hospital
  {
    location: [latitudeRed, longitudeRed],
    option: {
      title: "Verde Two",
      icon: pinHome,
      category: "Hospital",
    },
  },
  {
    location: [-6.2196503801131255, 106.83245234009786],
    option: {
      title: "MMC Hospital",
      icon: pinPlace,
      category: "Hospital",
    },
  },
  {
    location: [-6.218409125713575, 106.83140670452057],
    option: {
      title: "Mayapada Hospital",
      icon: pinPlace,
      category: "Hospital",
    },
  },
  {
    location: [-6.218891545501716, 106.8172400535895],
    option: {
      title: "Siloam Hospitals",
      icon: pinPlace,
      category: "Hospital",
    },
  },
  {
    location: [-6.2394870414603885, 106.83388431629537],
    option: {
      title: "Medistra Hospital",
      icon: pinPlace,
      category: "Hospital",
    },
  },
  // --------------- school
  {
    location: [latitudeRed, longitudeRed],
    option: {
      title: "Verde Two",
      icon: pinHome,
      category: "School",
    },
  },
  {
    location: [-6.289866611307706, 106.80434121468052],
    option: {
      title: "High Scope Indonesia",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.212706027052165, 106.83535271444049],
    option: {
      title: "Regality Academy",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.189551067977196, 106.82865104532218],
    option: {
      title: "Mighty Minds Menteng",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.188661149437262, 106.82916017211139],
    option: {
      title: "iSmile Menteng",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.196890672495428, 106.8247518959168],
    option: {
      title: "Monash College Menteng",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.219088797087754, 106.83703905414386],
    option: {
      title: "High Scope Kuningan",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.226823109900151, 106.8243574583209],
    option: {
      title: "Finland Intercultural School",
      icon: pinPlace,
      category: "School",
    },
  },
  {
    location: [-6.2315159260350015, 106.82730050676241],
    option: {
      title: "Kinderland Pre-school",
      icon: pinPlace,
      category: "School",
    },
  },
  // --------------- transit
  {
    location: [latitudeRed, longitudeRed],
    option: {
      title: "Verde Two",
      icon: pinHome,
      category: "Transit",
    },
  },
  {
    location: [-6.204448222866278, 106.82555677665182],
    option: {
      title: "Stasiun LRT Dukuh Atas",
      icon: pinPlace,
      category: "Transit",
    },
  },
  {
    location: [-6.215753769235032, 106.83058261552652],
    option: {
      title: "Halte Bus Karet Kuningan 2",
      icon: pinPlace,
      category: "Transit",
    },
  },
  {
    location: [-6.2078822159072775, 106.82140898591233],
    option: {
      title: "Stasiun MRT Setiabudi Astra",
      icon: pinPlace,
      category: "Transit",
    },
  },
];

export default pushpins;
