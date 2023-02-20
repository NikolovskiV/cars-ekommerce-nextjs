import React from 'react';
import Link from 'next/link';
// import { urlFor } from '@/lib/client';
import Image from 'next/image';
import FooterLogo from '../Images/FerarriLogo.png';

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>1 Jun - 31 Avg</p>
        </div>
        <div className="right">
          <p>Best Cars Ever</p>
          <h3>{midText}</h3>
          <p>Best Cars on the Market</p>
          <Link href={`/product/${product}`}>
            <button type="button" className="footer__button">
              {buttonText}
            </button>
          </Link>
        </div>
        {/* <img src={urlFor(image)} className="footer-banner-image" /> */}
        <Image
          src={FooterLogo}
          alt="Footer Logo"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
