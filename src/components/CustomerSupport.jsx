import storeData from "../data/storeData";

function CustomerSupport() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col items-start">
        <h3 className="font-semibold text-lg text-secondary-dark">
          Support Customer
        </h3>
        <p className="w-fit">
          Have a question? Please contact us using the customer support channels
          below.
        </p>
      </div>

      <div className="flex flex-col items-start gap-1">
        <p className="text-secondary-dark">
          <strong>Customer Care:</strong>
        </p>
        <p>Phone: {storeData.phone}</p>
        <p>Email: {storeData.customerCareEmail}</p>
        <p>Opening hours: {storeData.openingHours}</p>
      </div>

      <div className="flex flex-col items-start gap-1">
        <p className="text-secondary-dark">
          <strong>Wholedale:</strong>
        </p>
        <p>Email: {storeData.saleEmail}</p>
      </div>

      <div className="flex flex-col items-start gap-1">
        <p className="text-secondary-dark">
          <strong>Press Enquiries:</strong>
        </p>
        <p>Email: {storeData.pressEmail}</p>
      </div>
    </div>
  );
}
export default CustomerSupport;
