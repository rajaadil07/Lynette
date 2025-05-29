'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './CustomerLogos.module.css';

const CustomerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        // If we've scrolled past the middle set, reset to the start of the middle set
        if (
          scrollRef.current.scrollLeft >=
          (scrollRef.current.scrollWidth * 2) / 3
        ) {
          scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
        } else {
          scrollRef.current.scrollLeft += 1.5;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  const logos = [
    { name: 'Capital One', src: '/logos/capitalone.jpg', width: 150, height: 50 },
    { name: 'Nvidia', src: '/logos/nvidia.jpg', width: 150, height: 50 },
    { name: 'Uber', src: '/logos/uber.jpg', width: 150, height: 50 },
    { name: 'Amazon', src: '/logos/amazon.jpg', width: 150, height: 50 },
    { name: 'Google', src: '/logos/google.jpg', width: 150, height: 50 },
    { name: 'Citadel', src: '/logos/citadel.jpg', width: 150, height: 50 },
    { name: 'Meta', src: '/logos/meta.jpg', width: 150, height: 50 },
    { name: 'Intel', src: '/logos/intel.jpg', width: 150, height: 50 },
    { name: 'Latham Watkins', src: '/logos/latham.jpg', width: 150, height: 50 },
    { name: 'Palantir', src: '/logos/palantir.jpg', width: 150, height: 50 },
    { name: 'Shopify', src: '/logos/shopify.jpg', width: 150, height: 50 },
    { name: 'Oracle', src: '/logos/oracle.jpg', width: 150, height: 50 }
  ];

  return (
    <section className={styles.customerLogos}>
      <div className={styles.container}>
        <div className={styles.logoWrapper} ref={scrollRef}>
          <div className={styles.logoTrack}>
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`${logo.name}-1-${index}`} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className={styles.logo}
                  width={logo.width}
                  height={logo.height}
                  priority={index < 4}
                />
              </div>
            ))}
            {/* Second set of logos (middle) */}
            {logos.map((logo, index) => (
              <div key={`${logo.name}-2-${index}`} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className={styles.logo}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
            {/* Third set of logos */}
            {logos.map((logo, index) => (
              <div key={`${logo.name}-3-${index}`} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className={styles.logo}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
