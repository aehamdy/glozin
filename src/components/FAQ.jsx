import storeData from "../data/storeData";
import FAQGroup from "./FAQGroup";

const groups = [
  {
    heading: "Shopping Information",
    faqs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        isOpen: false,
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
    ],
  },
  {
    heading: "Payment Information",
    faqs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
    ],
  },
  {
    heading: "Order & Returns",
    faqs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
    ],
  },
  {
    heading:
      "Ordering from " +
      storeData.name.charAt(0).toUpperCase +
      storeData.name.slice(1),
    faqs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        isOpen: false,
      },
    ],
  },
];

function FAQ() {
  return (
    <div>
      {groups.map((group, index) => (
        <FAQGroup key={index} group={group} />
      ))}
    </div>
  );
}
export default FAQ;
