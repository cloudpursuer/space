import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const ContactList = [
  {
    title: 'Twitter',
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: (
      <>
        https://twitter.com/Cloudpursuer
      </>
    ),
  },
  {
    title: 'Telegram',
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: (
      <>
        https://t.me/YukiStaff
      </>
    ),
  },
  {
    title: 'Steam',
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: (
      <>
        https://steamcommunity.com/profiles/76561198979608537/
      </>
    ),
  },
];

function Feature({title, link}) {  //{Svg, title, description}
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/*<Svg className={styles.featureSvg} role="img" />*/}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <Link
          className="button button--secondary button--lg" 
          to={`${link.props.children}`}>Contact Me
        </Link>
        <br/><br/>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ContactList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
