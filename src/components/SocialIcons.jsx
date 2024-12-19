import Icon from "./Icon";

const socials = [
  {
    platform: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    platform: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    platform: "tiktok",
    link: "https://www.tiktok.com/",
  },
  {
    platform: "youtube",
    link: "#https://www.youtube.com/",
  },
  {
    platform: "pinterest",
    link: "https://www.pinterest.com/",
  },
];

function SocialIcons() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-6 md:gap-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          className="group relative w-fit h-fit p-1 md:p-2 hover:text-primary-light md:border hover:border-primary-light rounded-full duration-short"
        >
          <span className="hidden md:block absolute -top-3 start-1/2 -translate-x-1/2 text-primary-light opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 duration-short">
            {social.platform.charAt(0).toUpperCase() +
              social.platform.slice(1).toLowerCase()}
          </span>
          <Icon name={social.platform} />
        </a>
      ))}
    </div>
  );
}
export default SocialIcons;
