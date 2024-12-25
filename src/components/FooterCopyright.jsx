import storeData from "../data/storeData";

function FooterCopyright() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <p>
      &copy; {year}{" "}
      {storeData.name.charAt(0).toUpperCase() +
        storeData.name.slice(1).toLowerCase()}{" "}
      store. All rights reserved.
    </p>
  );
}
export default FooterCopyright;
