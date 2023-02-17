import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Best Cars on the Market</p>
        <br />
        <h3>Best Sommer Offert</h3>
        <br />
        <h1>Ferrari 458</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Best Cars on the market</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
