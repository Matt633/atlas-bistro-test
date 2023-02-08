import React from 'react';
import className from 'classnames/bind';
import { Heading, Button } from '../../components';
import styles from './Hero.module.scss';
import Image from 'next/image'

let cx = className.bind(styles);

export default function Hero({ heroProps, children, className }) {
  return (
    <section className={cx(['component', className])} style={{backgroundColor: heroProps.bgColor}}>
      {heroProps.image && 
        <div className="bg-wrapper" style={{ opacity: heroProps.bgOpacity }}>
          <Image src={heroProps.image.sourceUrl} alt={heroProps.image.altText} layout="fill" />
        </div> 
      }
      <Heading level="h1" >
        <span className={cx('title')} style={{...heroProps.whiteText ? {color: "white"}  : ''}}>{heroProps.text}</span> 
      </Heading>

      {heroProps.buttons && 
        <div className='button-container'>
          {heroProps.buttons.map((button) => (
            <Button href={button.link.url} styleType="primary" key={button.link.title}>
              {button.link.title}
            </Button>
          ))}
        </div>
      }
      {children}
    </section>
  );
}
