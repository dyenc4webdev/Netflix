import React from "react";
import {
  BottomFooter,
  CenterFooter,
  FooterContain,
  FooterSection,
  TopFooter,
} from "./footer";
import { Text } from "../../atoms";
import { FaFacebook, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const external_link = [
    {
      title: "Audio Description",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Investor Relations",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Legal Notices",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Help Center",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Jobs",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Cookies Preferences",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Gift Cards",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Terms of Use",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Corporate Information",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Media Center",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Privacy",
      link: "https://help.netflix.com/en/node/412",
    },
    {
      title: "Contact Us",
      link: "https://help.netflix.com/en/node/412",
    },
  ];
  return (
    <>
      <FooterContain>
        <div className="footer-hold">
          <FooterSection style={{color: "white",}}>
            <FaFacebookF style={{fontSize: "1.5rem", marginLeft: "8px"}}>
              <a href="https://web.facebook.com/netflixnaija/?brand_redir=475822799216240">
              </a>
            </FaFacebookF>
            <FaInstagram style={{fontSize: "1.5rem", marginLeft: "16px"}}>
              <a href="https://www.instagram.com/Netflix/">
              </a>
            </FaInstagram>
            <FaYoutube style={{fontSize: "1.5rem", marginLeft: "24px"}}>
              <a href="https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw">
              </a>
            </FaYoutube>
            <CenterFooter>
              {external_link.map((elem) => {
                return (
                  <>
                    <div className="ext">
                      <ul className="ext-ul">
                        <li>
                          <a href={elem.link}>{elem.title}</a>
                        </li>
                      </ul>
                    </div>
                  </>
                );
              })}
            </CenterFooter>
            <BottomFooter>
              <button style={{border: "1px solid grey", backgroundColor: "transparent", color: "grey", padding: "5px", marginTop: "16px",}}>
                Service Code
              </button>
              <Text type="p" className="ft-p">
              © 1997-2022 Netflix, Inc.
              </Text>
            </BottomFooter>
          </FooterSection>
        </div>
      </FooterContain>
    </>
  );
};
