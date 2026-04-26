import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '代理采购服务',
    icon: '🛒',
    description: (
      <>
        专业为国内外客户提供全方位采购服务，业务范围涵盖定制化无人机、无人机零部件、日用品等多个行业领域，精准满足客户多样化、个性化的采购需求。
      </>
    ),
  },
  {
    title: '供应链整合',
    icon: '🔗',
    description: (
      <>
        构建了"采购代理+供应链整合+智能管控"的核心业务模式，深度布局供应链各关键环节，整合上下游优质资源，打破采购环节中的各类壁垒。
      </>
    ),
  },
  {
    title: '智能管控体系',
    icon: '📊',
    description: (
      <>
        依托智能化管理手段，实现供应链各环节的可视化、可控化，为客户提供高效、可靠、省心的采购解决方案，有效控制采购成本。
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
          <Heading as="h2" className={styles.sectionTitle}>我们的服务</Heading>
          <p className={styles.sectionSubtitle}>专业贸易 · 供应链服务 · 智能化解决方案</p>
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
