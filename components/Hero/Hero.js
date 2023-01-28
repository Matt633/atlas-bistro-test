import React from 'react';
import className from 'classnames/bind';
import { Heading } from '../../components';
import styles from './Hero.module.scss';
import Image from 'next/image'
import Link from 'next/link';

let cx = className.bind(styles);

export default function Hero({ heroProps, children, className }) {
console.log(heroProps.buttons);
  return (
    <section className={cx(['component', className])} style={{ backgroundColor: heroProps.bgColor }}>
      {heroProps.image && 
      <div className="bg-wrapper" style={{ opacity: heroProps.bgOpacity }}>
        <Image src={heroProps.image.sourceUrl} alt={heroProps.image.altText} layout="fill" />
      </div> }
      <Heading level="h1" >
        <span className={cx('title')} style={{...heroProps.whiteText ? {color: "white"}  : ''}}>{heroProps.text}</span> 
      </Heading>
      {/* <Link href={heroProps.buttons.link.url}></Link> */}

      {/* const renderButtons = {heroProps.buttons}.map(button => (
        <Link href={button.link.url}>{button.link.title}</Link>
      ));

      return <div>{renderButtons}</div>; */}

      {children}
    </section>
  );
}
