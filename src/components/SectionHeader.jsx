/* eslint-disable react/prop-types */
import SectionDescription from "./SectionDescription";
import SectionHeading from "./SectionHeading";

function SectionHeader({ heading, desc }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        desc && "mb-8"
      } mx-horizontal-spacing`}
    >
      <SectionHeading heading={heading} />
      {desc && <SectionDescription desc={desc} />}
    </div>
  );
}
export default SectionHeader;
