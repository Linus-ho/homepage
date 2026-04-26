import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Procurement Services',
    icon: '🛒',
    description: (
      <>
        We provide comprehensive procurement services for domestic and international clients, covering customized drones, drone components, daily necessities, and other industries to precisely meet diverse and personalized procurement needs.
      </>
    ),
  },
  {
    title: 'Supply Chain Integration',
    icon: '🔗',
    description: (
      <>
        We have built a core business model of "Procurement Agency + Supply Chain Integration + Intelligent Management," deeply laying out key supply chain links, integrating high-quality upstream and downstream resources, and breaking various barriers in the procurement process.
      </>
    ),
  },
  {
    title: 'Intelligent Management',
    icon: '📊',
    description: (
      <>
        Relying on intelligent management methods, we achieve visualization and controllability of all supply chain links, providing clients with efficient, reliable, and worry-free procurement solutions while effectively controlling procurement costs.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>Our Services</Heading>
          <p className={styles.sectionSubtitle}>Professional Trading · Supply Chain Services · Intelligent Solutions</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
