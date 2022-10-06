import morflax from "../assets/morflax.png";
import phone from "../assets/phone.svg";
import device from "../assets/device.png";

import svgImage from "../assets/contract-group-hero.svg";
import svgImage2 from "../assets/contract-group-hero2.svg";
import globe from "../assets/globe.svg";
import book from "../assets/book.svg";
import people from "../assets/users.svg";
import analytics from "../assets/analytics.svg";
import money from "../assets/dollar.svg";
import briefCase from "../assets/breifcase.svg";
import checkCircle from "../assets/check-circle.svg";
import edit from "../assets/edit.svg";

//Services Offered
export const services = [
  {
    svgImage: svgImage,
    bgImage: morflax,
    title: "Contract Creation",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  },
  {
    svgImage: svgImage2,
    bgImage: phone,
    title: "Customer Support",
    description:
      "Our dedicated support team is available 24/7 to guide you through the OnPath process and incase any bugs or issues arise."
  },
  {
    svgImage: svgImage,
    bgImage: device,
    title: "Device Installation",
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
    svgImage: book,
    title: "Smart Scheduling",
    description:
      "Book appointments, manage contract start and end dates and quickly pull information directly from your customer data base."
  },
  {
    svgImage: people,
    title: "Fleet Management",
    description:
      "Easily add, remove and update vehicles in your fleet using our admin portal. Set up a new vehicle in seconds."
  },
  {
    svgImage: analytics,
    title: "Analytics & Reports",
    description:
      "Track vehicle data points such as gas, mileage, battery levels, 407 ETR transactions, distance travelled etc."
  },
  {
    svgImage: money,
    title: "Track Toll Expenses",
    description:
      "Our hardware devices work with the OnPath geofencing software to track 407 ETR transactions and more."
  },
  {
    svgImage: briefCase,
    title: "Reservations",
    description:
      "See a full schedule of vehicle availability , and reserve vehicles in your fleet based off of wear and tear and other data points."
  },
  {
    svgImage: checkCircle,
    title: "Instant ID Verification ",
    description:
      "Third party integrations allow for instant ID verification when setting up a customer profile or creating a contract."
  },
  {
    svgImage: edit,
    title: "60s Contract  Creation",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet."
  }
];
