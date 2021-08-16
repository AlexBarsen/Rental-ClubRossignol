import SkiIcon from "../../assets/svg/shop-icons/ski.svg";
import SkiBootsIcon from "../../assets/svg/shop-icons/ski-boots.svg";
import SkierIcon from "../../assets/svg/shop-icons/skier.svg";
import SnowboardIcon from "../../assets/svg/shop-icons/snowboard.svg";
import SnowboardBootsIcon from "../../assets/svg/shop-icons/snowboard-boot.svg";
import SnowboarderIcon from "../../assets/svg/shop-icons/snowboarder-kid.svg";
// import HelmetIcon from "../../assets/svg/shop-icons/helemet.svg";

const RENTAL_DATA = [
  {
    categoryID: 1,
    categoryName: "Ski",
    products: [
      {
        productID: 1,
        name: "Skiuri Adulti",
        price: "40",
        icon: SkiIcon,
        productType: "skiSnow",
      },
      {
        productID: 2,
        name: "Bocanci Adulti",
        price: "20",
        icon: SkiBootsIcon,
        productType: "boots",
      },
      {
        productID: 3,
        name: "Echipament Complet Ski Adulti",
        price: "50",
        icon: SkierIcon,
        productType: "equipment",
      },
      {
        productID: 4,
        name: "Skiuri Copii",
        price: "35",
        icon: SkiIcon,
        productType: "skiSnow",
      },
      {
        productID: 5,
        name: "Bocanci Copil",
        price: "15",
        icon: SkiBootsIcon,
        productType: "boots",
      },
      {
        productID: 6,
        name: "Echipament Complet Copil",
        price: "40",
        icon: SkierIcon,
        productType: "equipment",
      },
    ],
  },
  {
    categoryID: 2,
    categoryName: "Snowboard",
    products: [
      {
        productID: 1,
        name: "Snowboard Adulti",
        price: "40",
        icon: SnowboardIcon,
        productType: "skiSnow",
      },
      {
        productID: 2,
        name: "Boots Adulti",
        price: "20",
        icon: SnowboardBootsIcon,
        productType: "boots",
      },
      {
        productID: 3,
        name: "Echipament Complet Snowboard Adulti",
        price: "50",
        icon: SnowboarderIcon,
        productType: "equipment",
      },
      {
        productID: 4,
        name: "Snowboard Copil",
        price: "35",
        icon: SnowboardIcon,
        productType: "skiSnow",
      },
      {
        productID: 5,
        name: "Boots Snowboard Copil",
        price: "15",
        icon: SnowboardBootsIcon,
        productType: "boots",
      },
      {
        productID: 6,
        name: "Echipament Complet Snowboard Copil",
        price: "40",
        icon: SnowboarderIcon,
        productType: "equipment",
      },
    ],
  },
  {
    categoryID: 3,
    categoryName: "Bike",
    products: [],
  },
];

export default RENTAL_DATA;
