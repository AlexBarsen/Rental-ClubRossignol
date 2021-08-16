import RestaurantIcon from "../../assets/svg/feature-icons/dish.svg";
import PizzaIcon from "../../assets/svg/feature-icons/pizza.svg";
import TerraceIcon from "../../assets/svg/feature-icons/cocktail.svg";
import ApresSkiIcon from "../../assets/svg/feature-icons/confetti.svg";
import RentIcon from "../../assets/svg/feature-icons/skiing.svg";
import HotelIcon from "../../assets/svg/feature-icons/bed.svg";

import RestaurantImage from "../../assets/Food.jpg";
import PizzaImage from "../../assets/Pizza_Peel_in_brick_oven_1200.jpeg";
import TerraceImage from "../../assets/IMG_3232.jpg"
import ShopImage from "../../assets/shop.jpg"
import RentImage from "../../assets/IMG_4424.JPG";
import HotelImage from  "../../assets/cazare.jpg";

const FEATURES_DATA = [
  {
    id: 1,
    icon: RestaurantIcon,
    image: RestaurantImage,
    name: "Restaurant",
    description:
      "Te asteptam la noi in Restaurant pentru a servi o masa copioasa dupa ski.",
  },
  {
    id: 2,
    icon: PizzaIcon,
    image: PizzaImage,
    name: "Pizza pe cuptor cu lemne",
    description:
      "La Club Rossignol facem pizza pe cuptor cu lemne pentru ati servi o adevarata bunatate atunci cand te intorci obosit de pe partie.",
  },
  {
    id: 3,
    icon: TerraceIcon,
    image: TerraceImage,
    name: "Terasa si Apres Ski",
    description:
      "Te asteptam pe terasa noastra in aer liber sau acoperita, und in weekend se tine petreceri de tip Apres Ski",
  },
  {
    id: 4,
    icon: ApresSkiIcon,
    image: ShopImage,
    name: "Magazin",
    description:
      "Sub restaurant se afla si un magazin cu articole sportive speicifice iernii",
  },
  {
    id: 5,
    icon: RentIcon,
    image: RentImage,
    name: "Centru de Inchireri",
    description:
      "De la noi poti inchiria echipamente de Ski cat si de Snowboard.",
  },
  {
    id: 6,
    icon: HotelIcon,
    image: HotelImage,
    name: "Cazare",
    description:
      "Dispunem de 6 camere, fiecare cu constand din 2 paturi duble pentru ati oferi ocazie de a fi primul pe partie.",
  },
];

export default FEATURES_DATA;
