import { shopConfig } from "../config/shopConfig";
import Accordion from "./Accordion";

function ProductPolicies() {
  return (
    <div className="my-10 px-3 text-start bg-gray-50 rounded-tiny">
      <Accordion
        question={shopConfig.shippingDetails.title}
        answer={shopConfig.shippingDetails.content}
      />
      <Accordion
        question={shopConfig.returnPolicies.title}
        answer={shopConfig.returnPolicies.content}
      />
    </div>
  );
}
export default ProductPolicies;
