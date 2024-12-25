import storeData from "../data/storeData";

function CustomerSupport() {
  return (
    <div>
      <div>
        <h3>Support Customer</h3>
        <p>
          Have a question? Please contact us using the customer support channels
          below.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <p>
            <strong>Customer Care:</strong>
          </p>
          <p>Phone: {storeData.phone}</p>
          <p>Email: {storeData.customerCareEmail}</p>
          <p>Opening hours: {storeData.openingHours}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <strong>Wholedale:</strong>
          </p>
          <p>Email: {storeData.saleEmail}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            <strong>Press Enquiries:</strong>
          </p>
          <p>Email: {storeData.pressEmail}</p>
        </div>
      </div>
    </div>
  );
}
export default CustomerSupport;
