import morflax from "../assets/morflax-studio.png";
import phone from "../assets/phone.svg";
import device from "../assets/device.png";

import svgImage from "../assets/contract-group-hero.svg";
import svgImage2 from "../assets/contract-group-hero2.svg";
import globe from "../assets/globe.svg";

//Services Offered
export const services = [
  {
    svgImage: svgImage,
    bgImage: morflax,
    title: "Lorem Ipsum",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  },
  {
    svgImage: svgImage2,
    bgImage: phone,
    title: "Lorem Ipsum",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  },
  {
    svgImage: svgImage,
    bgImage: device,
    title: "Lorem Ipsum",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  }
];

// Our Solution Section
export const solutions = [
  {
    svgImage: globe,
    title: "Global Asset Tracking",
    description:
      "Our hardware allows you to view your assets in real time using our admin web portal."
  },
  {
    svgImage: globe,
    title: "Smart Scheduling",
    description:
      "Book appointments, manage contract start and end dates and quickly pull information directly from your customer data base."
  },
  {
    svgImage: globe,
    title: "Fleet Management",
    description:
      "Easily add, remove and update vehicles in your fleet using our admin portal. Set up a new vehicle in seconds."
  },
  {
    svgImage: globe,
    title: "Analytics & Reports",
    description:
      "Track vehicle data points such as gas, mileage, battery levels, 407 ETR transactions, distance travelled etc."
  },
  {
    svgImage: globe,
    title: "Track Toll Expenses",
    description:
      "Our hardware devices work with the OnPath geofencing software to track 407 ETR transactions and more."
  },
  {
    svgImage: globe,
    title: "Reservations",
    description:
      "See a full schedule of vehicle availability , and reserve vehicles in your fleet based off of wear and tear and other data points."
  }
];
