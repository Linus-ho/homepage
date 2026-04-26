import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About Us"
      description="Zilan Hongda Technology - Professional Trading and Supply Chain Services">
      <main className={styles.aboutPage}>
        <div className={styles.heroSection}>
          <div className="container">
            <Heading as="h1" className={styles.heroTitle}>
              About Us
            </Heading>
            <p className={styles.heroSubtitle}>
              Professional Trading · Supply Chain Services · Intelligent Solutions
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.contentWrapper}>
            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Company Overview</Heading>
              <div className={styles.sectionContent}>
                <p>
                  Zilan Hongda Technology Co., Ltd., based in Zhuhai, is a professional trading enterprise with trade as its core and supply chain services as its foundation. Since its establishment, the company has consistently adhered to the core philosophy of "Integrity for Long-term Success, Resource Aggregation, and Win-Win Service." We specialize in procurement agency and supply chain management, providing intelligent and integrated supply chain solutions to domestic and international clients through professional supply chain resource integration capabilities and a comprehensive service system. We help clients effectively control procurement costs, improve supply chain operational efficiency, and enhance competitiveness in the global trade market.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Core Business</Heading>
              <div className={styles.sectionContent}>
                <p>
                  The company's core business focuses on procurement agency and intelligent supply chain management, professionally providing comprehensive procurement services to domestic and international clients. Our business scope covers customized drones, drone components, daily necessities, and other industries, precisely meeting diverse and personalized procurement needs. Relying on years of industry operation experience, we have built a core business model of "Procurement Agency + Supply Chain Integration + Intelligent Management," deeply laying out key supply chain links, integrating high-quality upstream and downstream resources, breaking various barriers in the procurement process, and achieving standardized and intelligent procurement management. While ensuring procurement efficiency, we effectively control procurement costs and help clients achieve supply chain optimization and upgrading.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Supply Chain Advantages</Heading>
              <div className={styles.sectionContent}>
                <p>
                  In terms of supply chain resource integration, the company has integrated high-quality domestic and international supplier resources through deep industry accumulation and extensive resource channels, establishing a rigorous and complete supplier screening, evaluation, and control system to ensure product quality and delivery timeliness from the source. We always focus on customer needs, precisely connecting supply and demand, optimizing the entire procurement process, and providing clients with full-chain closed-loop services from demand docking, product selection, procurement execution, to logistics distribution and after-sales follow-up. At the same time, relying on intelligent management methods, we achieve visualization and controllability of all supply chain links, providing clients with efficient, reliable, and worry-free procurement solutions.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Service Philosophy</Heading>
              <div className={styles.sectionContent}>
                <p>
                  At the service and operation level, the company adheres to the service philosophy of "Customer First, Excellence in Service." We have assembled a core team with high professional competence and strong service capabilities, built a comprehensive and standardized service system, and focused on the precise docking of domestic and international customer procurement needs and full-process supply chain management services. Whether it's customized procurement needs, bulk procurement execution, or supply chain process optimization and logistics solution customization, we approach with a rigorous, pragmatic, and efficient work attitude, precisely matching customer needs, tracking service progress throughout the process, and effectively solving various problems in the customer procurement process, earning wide recognition and trust from domestic and international markets and customers.
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>Development Vision</Heading>
              <div className={styles.sectionContent}>
                <p>
                  As a professional trading enterprise based in Zhuhai, radiating across the country, and facing the world, the company always adheres to the operating principles of compliance management and integrity-based business. We strictly comply with industry norms and international trade-related standards, actively fulfill corporate social responsibilities, and while achieving our own steady development, help customers enhance core competitiveness and expand market territories. In the future, Zilan Hongda Technology Co., Ltd. will continue to focus on supply chain resource integration, deeply cultivate the procurement agency field, continuously expand resource channels, optimize service processes, and improve service quality, committed to becoming an intelligent supply chain service partner trusted by domestic and international customers, and achieving mutual benefit and common development with customers and partners.
                </p>
              </div>
            </section>

            <section className={styles.valuesSection}>
              <Heading as="h2" className={styles.sectionTitle}>Core Values</Heading>
              <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🤝</div>
                  <Heading as="h3">Integrity First</Heading>
                  <p>Upholding integrity principles to build long-term trust relationships</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🔗</div>
                  <Heading as="h3">Resource Integration</Heading>
                  <p>Integrating quality supplier resources to build a comprehensive supply chain system</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🎯</div>
                  <Heading as="h3">Win-Win Service</Heading>
                  <p>Guided by customer success to achieve mutual benefit and development</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
