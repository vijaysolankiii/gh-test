import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utilities/config";


import { StaticImage } from "gatsby-plugin-image";
import "../../../assets/style.css";
import Icons from "../cards-components/Icons";
import CardHeadingInfo from "../cards-components/cardHeadingInfo";
import AboutSection from "../cards-components/aboutSection";
import CardGallery from "../cards-components/cardGallery";
import UserBannerSection from "../cards-components/userBannerSection";
import CardButton from "../cards-components/cardButton";
import { Link } from "@reach/router";

import { Helmet } from 'react-helmet';

const CardInfo = ({ slug }) => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // Target And Set Values of HTML Elements
  const setDataURL = () => {
    // SendingSMS
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // IOS Safari Code
    let callMeBtn = document.getElementsByClassName("call-me-btn")[0];
    var tooltip = document.getElementsByClassName("tooltiptext")[0];
    // var vcardGeneratorUrl = window.location.href + "api/vcardgenerate";
    if (callMeBtn) {
      // Testing Code For Development
      // var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      // if(isChrome){
      //     callMeBtn.classList.add('iosChrome');
      //     tooltip.classList.add('iosChrome');
      //     callMeBtn.href = "/#";
      // } else {
      //   callMeBtn.classList.remove('iosChrome');
      //     tooltip.classList.remove('iosChrome');
      // }
      if (userAgent.includes("iPhone")) {
        if (
          /CriOS/i.test(navigator.userAgent) &&
          /iphone|ipod|ipad/i.test(navigator.userAgent)
        ) {
          callMeBtn.classList.add("iosChrome");
          callMeBtn.href = "/#";
          tooltip.classList.add("iosChrome");
        } else {
          callMeBtn.classList.remove("iosChrome");
          tooltip.classList.remove("iosChrome");
        }
      }
    }

    // GooglePay
    var upiurl =
      "gpay://upi/pay?pa=vijusolankivs7@oksbi&pn=CodeAndCore&tn=TestingGpay&am=10&cu=INR";
    let gpay = document.getElementsByClassName("behance-icon")[0];
    if (gpay) {
      gpay.href = upiurl;
    }
  };

  // Show Copied Text
  const toastTip = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  // getUserDetails API of User Slug
  const getUserDetail = async () => {
    var config = {
      method: "GET",
      url: `${API_URL}/user/${slug}`,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 461|2mB9JT8rwylvThImfCAeV66fIJQ2NOCtluYsQQiL",
      },
    };
    await axios(config)
      .then((response) => {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  console.log(slug);
 

  useEffect(() => {
    setDataURL();
    getUserDetail();
   
    setTimeout(() => {setLoading(false)},1000)

    

  }, []);
  
  var pageString = `${users.first_name} ${users.last_name}`;
  var pageTitle = `${pageString.toUpperCase()} - Indian Digi Card`;

  console.log(`${users.profile_bg_image}`)
  
  
  const content = loading ? (
    <div className="w-100 item-center" id="loader"></div>
  ) : (
    <div id="profile" className="profile w-100 item-center">
      
      <Helmet
        defaultTitle="Default title"
        title={pageTitle}
      />
      
     {/* Top Banner Section */}

    

      <UserBannerSection
        heroBg={users.profile_bg_image}
        profileLogo={users.profile_image}
        firstName={users.first_name}
        lastName={users.last_name}
        organization={users.organization}
        designation={users.designation}
      />

      {/* Profile Contact Section */}
      <ul className="profile_contact row item-center">
        <li className="d-flex w-100">
          <CardButton
            buttonLink={`tel:${users.phone}`}
            buttonImg="mobile.png"
            buttonText="call me"
            buttonParentClass="profile_contact--call"
            buttonClass="mobile_icon"
            buttonAltText="mobile"
          />
          <CardButton
            buttonLink={`sms:${users.phone}`}
            buttonImg="message.png"
            buttonText="text me"
            buttonParentClass="profile_contact--text"
            buttonClass="message_icon"
            buttonAltText="message"
          />
        </li>
        <li className="w-100 no-style">
          <div className="tooltiptext">
            <StaticImage
              src="../../../images/safari.png"
              className="safari"
              alt="safari"
            />
            <em>Please use safari browser to access this</em>
            {/* <Clipboard
              component="span"
              className="copy-tooltipX transition"
              data-clipboard-text={window.location.href}
            >
              <span aria-hidden id="myTooltip" onClick={toastTip}>
                {" "}
                copy page link{" "}
              </span>
              <div id="snackbar">page link copied..</div>
            </Clipboard> */}
          </div>

          <Link
            to={`${API_URL}/vCard/${slug}`}
            className="neumorphism-effect__btn call-me-btn item-center"
            rel="noopener noreferrer"
          >
            <span className="mobile">
              <StaticImage
                src="../../../images/save_mobile.svg"
                className="message_icon"
                alt="save_mobile"
              />
            </span>
            <span className="arrow">
              <StaticImage
                src="../../../images/save_arrow.svg"
                className="message_icon"
                alt="save_mobile"
              />
            </span>
            <div className="link-text">
              save {users.first_name}'s contact
            </div>
          </Link>
        </li>
      </ul>

      {/* Profile SocialMedia | UserInfo | Payment Accounts Section */}
      <div className="profile_socialMedia--accounts  ">
        <CardHeadingInfo image="link-icon.png" text="Social Media" />
        <ul className="no-style w-100 row item-center">
          <Icons
            iconName={`whatspp`}
            imageIcon="whatspp-icon.png"
            link={`https://wa.me/${users.whatsapp}?text`}
          />
          <Icons
            iconName={`facebook`}
            imageIcon="fb-icon.png"
            link={users.facebook}
          />
          <Icons
            iconName={`linkedin`}
            imageIcon="linkedin-icon.png"
            link={users.linkedIn}
          />
          <Icons
            iconName={`email`}
            imageIcon="email-icon.png"
            link={`mailto:${users.email}`}
          />
          <Icons
            iconName={`instagram`}
            imageIcon="instagram-icon.png"
            link={users.instagram}
          />
          <Icons
            iconName={`skype`}
            imageIcon="skype-icon.png"
            link={users.skype}
          />
          <Icons
            iconName={`twitter`}
            imageIcon="twitter-icon.png"
            link={users.twitter}
          />
          <Icons
            iconName={`youtube`}
            imageIcon="youtube-icon.png"
            link={users.youtube}
          />
        </ul>

        <CardHeadingInfo image="payment-icon.png" text="Payment Methods" />
        <ul className="no-style w-100 row item-center">
          <Icons
            link={users.google_pay_link}
            imageIcon="google-pay-icon.png"
            iconName={`g-pay`}
          />
          <Icons
            link={users.paytm_link}
            imageIcon="paytm-icon.png"
            iconName={`paytm`}
          />
        </ul>

        <CardHeadingInfo image="info-icon.png" text="User Info" />
        <ul className="no-style w-100 row item-center">
          <Icons
            link={users.website}
            imageIcon="website-icon.png"
            iconName={`website`}
          />
          <Icons
            link={users.google_review_link}
            imageIcon="g-review-icon.png"
            iconName={`g-review`}
          />
          <Icons
            link={users.google_map_link}
            imageIcon="g-map-icon.png"
            iconName={`g-map`}
          />
        </ul>
      </div>

      {/* About Section */}
      <AboutSection aboutUser={users.about_me} />

      {/* ImageShow Case Section */}
      <div className="img-showcase about-me w-100">
        <CardHeadingInfo image="showcase-icon.png" text="images showcase" />
        <CardGallery galleryImages={users.gallery} />
      </div>
      <CardButton
        
        buttonLink={`/#`}
        buttonImg="bottom-button-logo.png"
        buttonText="Get your own"
        buttonParentClass="profile_share"
      />
    </div>
  );

  return (
    <>
      <section id="w-d-p">{content}</section>
    </>
  );
};
export default CardInfo;
