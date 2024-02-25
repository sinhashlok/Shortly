import FooterList from "./FooterList";

import LOGO from "../assets/images/logo-white.svg";
import FB from "../assets/images/icon-facebook.svg";
import TW from "../assets/images/icon-twitter.svg";
import PI from "../assets/images/icon-pinterest.svg";
import IG from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row justify-between p-8 md:p-8 md:px-12 lg:p-12 lg:px-[12%] bg-[#232127]">
      <h1>
        <img src={LOGO} alt="logo" className="w-[100px] md:w-[120px]" />
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 md:mt-0">
        <FooterList
          title={"Features"}
          list={[
            { id: 1, item: "Link Shortening" },
            { id: 2, item: "Branded Links" },
            { id: 3, item: "Analytics" },
          ]}
        />
        <FooterList
          title={"Resources"}
          list={[
            { id: 1, item: "Blog" },
            { id: 2, item: "Developers" },
            { id: 3, item: "Support" },
          ]}
        />
        <FooterList
          title={"Company"}
          list={[
            { id: 1, item: "About" },
            { id: 2, item: "Our Team" },
            { id: 3, item: "Careers" },
            { id: 4, item: "Contact" },
          ]}
        />
        <div className="flex flex-row mt-10 md:mt-0">
          <img
            src={FB}
            alt="logo"
            className="h-6 w-6 mr-6 cursor-pointer hover:fill-[#2acfcf]"
          />
          <img
            src={TW}
            alt="logo"
            className="h-6 w-6 mr-6 cursor-pointer hover:text-[#2acfcf]"
          />
          <img
            src={PI}
            alt="logo"
            className="h-6 w-6 mr-6 cursor-pointer hover:text-[#2acfcf]"
          />
          <img
            src={IG}
            alt="logo"
            className="h-6 w-6 curor-pointer hover:text-[#2acfcf]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
