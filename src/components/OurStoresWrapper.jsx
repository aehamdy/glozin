import storeImage1 from "../assets/ours-stores-1.webp";
import storeImage2 from "../assets/ours-stores-2.webp";
import storeImage3 from "../assets/ours-stores-3.webp";
import storeImage4 from "../assets/ours-stores-4.webp";
import storeImage5 from "../assets/ours-stores-5.webp";
import storeImage6 from "../assets/ours-stores-6.webp";
import StoreCard from "./StoreCard";

const stores = [
  {
    image: storeImage1,
    heading: "South Fulton",
    address: "100 Street, Chicago, State, Zip Code: 10005, United Stated.",
    phone: "+1 (973) 435-3638",
    email: "info@fashionwomen.com",
    times: {
      first: "Mon - Firday: 8:00am - 5:00pm",
      second: "Saturday - Sunday: 10:00am - 5:00pm",
    },
  },
  {
    image: storeImage2,
    heading: "Place Ste-Foy",
    address: "100 Street, Chicago, State, Zip Code: 10005, United Stated.",
    phone: "+1 (973) 435-3638",
    email: "info@fashionwomen.com",
    times: {
      first: "Mon - Firday: 8:00am - 5:00pm",
      second: "Saturday - Sunday: 10:00am - 5:00pm",
    },
  },
  {
    image: storeImage3,
    heading: "Santiago Store",
    address: "100 Street, Chicago, State, Zip Code: 10005, United Stated.",
    phone: "+1 (973) 435-3638",
    email: "info@fashionwomen.com",
    times: {
      first: "Mon - Firday: 8:00am - 5:00pm",
      second: "Saturday - Sunday: 10:00am - 5:00pm",
    },
  },
  {
    image: storeImage4,
    heading: "Sydney Store",
    address: "100 Street, Chicago, State, Zip Code: 10005, United Stated.",
    phone: "+1 (973) 435-3638",
    email: "info@fashionwomen.com",
    times: {
      first: "Mon - Firday: 8:00am - 5:00pm",
      second: "Saturday - Sunday: 10:00am - 5:00pm",
    },
  },
  {
    image: storeImage5,
    heading: "Southland Park",
    address: "100 Street, Chicago, State, Zip Code: 10005, United Stated.",
    phone: "+1 (973) 435-3638",
    email: "info@fashionwomen.com",
    times: {
      first: "Mon - Firday: 8:00am - 5:00pm",
      second: "Saturday - Sunday: 10:00am - 5:00pm",
    },
  },
  {
    image: storeImage6,
    heading: "Stockholm Town",
    address: "100 Street, Chicago, State, Zip Code: 10005, United Stated.",
    phone: "+1 (973) 435-3638",
    email: "info@fashionwomen.com",
    times: {
      first: "Mon - Firday: 8:00am - 5:00pm",
      second: "Saturday - Sunday: 10:00am - 5:00pm",
    },
  },
];

function OurStoresWrapper() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10">
      {stores.map((store, index) => (
        <StoreCard key={index} store={store} />
      ))}
    </div>
  );
}
export default OurStoresWrapper;
