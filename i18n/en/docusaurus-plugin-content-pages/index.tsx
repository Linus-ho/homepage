import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from './HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Zilan Hongda Technology Co., Ltd.
        </Heading>
        <p className="hero__subtitle">Professional Trading · Supply Chain Services · Intelligent Solutions</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/about">
            About Us
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/intro">
            Research Reports
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Professional trading and supply chain services">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
