import Icon from "../components/Icon";

function VissionMessage() {
  return (
    <div className="py-[4.5rem] md:py-vertical-spacing text-[#F3FC81] bg-[#253230]">
      <div className="mx-auto flex flex-col items-center gap-5 w-4/5 md:w-1/2">
        <div className="flex">
          {Array(5)
            .fill()
            .map((_, index) => (
              <Icon key={index} name="filledStar" className="cursor-auto" />
            ))}
        </div>
        <p className="text-sm md:text-lg">
          <em className="">
            Glozin will become an example of the responsible business model by
            doing business with kindness, profit and bringing practical and
            long—term values to customers, employees, partners, the community
            for the environment and for shareholders.
          </em>
        </p>
        <div className="space-y-1">
          <div className="font-semibold">Carie—Gosée Hera</div>
          <p className="text-sm">CEO and Founder Glozin Store</p>
        </div>
      </div>
    </div>
  );
}
export default VissionMessage;
