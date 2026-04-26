import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout
      title="公司简介"
      description="珠海紫岚宏达科技有限公司 - 专业贸易与供应链服务">
      <main className={styles.aboutPage}>
        <div className={styles.heroSection}>
          <div className="container">
            <Heading as="h1" className={styles.heroTitle}>
              公司简介
            </Heading>
            <p className={styles.heroSubtitle}>
              专业贸易 · 供应链服务 · 智能化解决方案
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.contentWrapper}>
            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>企业概况</Heading>
              <div className={styles.sectionContent}>
                <p>
                  珠海紫岚宏达科技有限公司坐落于珠海，是一家以贸易为核心、供应链服务为支撑的专业贸易企业。自成立以来，公司始终秉持"诚信致远、资源聚合、服务共赢"的核心理念，专注于代理采购与供应链管理业务，凭借专业的供应链资源整合能力及完善的服务体系，为国内外客户提供智能化、一体化的供应链解决方案，帮助客户有效控制采购成本、提升供应链运营效率，助力客户在全球贸易市场中提升竞争力。
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>核心业务</Heading>
              <div className={styles.sectionContent}>
                <p>
                  公司核心业务聚焦于代理采购与智能化供应链管理，专业为国内外客户提供全方位采购服务，业务范围涵盖定制化无人机、无人机零部件、日用品等多个行业领域，可精准满足客户多样化、个性化的采购需求。依托多年行业运营经验，公司构建了"采购代理+供应链整合+智能管控"的核心业务模式，深度布局供应链各关键环节，整合上下游优质资源，打破采购环节中的各类壁垒，实现采购流程的标准化、智能化管理，在保障采购效率的同时，有效控制采购成本，助力客户实现供应链的优化升级。
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>供应链优势</Heading>
              <div className={styles.sectionContent}>
                <p>
                  在供应链资源整合方面，公司凭借深厚的行业积累及广泛的资源渠道，整合了国内外优质供应商资源，建立了一套严谨、完善的供应商筛选、评估及管控体系，从源头保障采购产品的品质与交付时效。公司始终以客户需求为导向，精准对接供需双方，优化采购全流程，为客户提供从需求对接、产品选型、采购执行，到物流配送、售后跟进的全链条闭环服务。同时，依托智能化管理手段，实现供应链各环节的可视化、可控化，为客户提供高效、可靠、省心的采购解决方案。
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>服务理念</Heading>
              <div className={styles.sectionContent}>
                <p>
                  在服务与运营层面，公司秉持"客户至上、精益求精"的服务理念，组建了一支专业素养高、服务能力强的核心团队，搭建了全方位、标准化的服务体系，专注于国内外客户采购需求的精准对接及供应链管理的全程服务。无论是定制化采购需求、批量采购执行，还是供应链流程优化、物流方案定制，公司均以严谨、务实、高效的工作态度，精准匹配客户需求，全程跟踪服务进度，切实解决客户采购过程中的各类问题，获得了国内外市场及客户的广泛认可与信赖。
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <Heading as="h2" className={styles.sectionTitle}>发展愿景</Heading>
              <div className={styles.sectionContent}>
                <p>
                  作为一家立足珠海、辐射全国、面向全球的专业贸易企业，公司始终坚守合规经营、诚信立业的经营原则，严格遵守行业规范及国际贸易相关准则，积极履行企业社会责任，在实现自身稳健发展的同时，助力客户提升核心竞争力、拓展市场版图。未来，珠海紫岚宏达科技有限公司将持续以供应链资源整合为核心，深耕代理采购领域，不断拓宽资源渠道、优化服务流程、提升服务品质，致力于成为国内外客户信赖的智能化供应链服务合作伙伴，与客户、合作伙伴携手实现互利共赢、共同发展。
                </p>
              </div>
            </section>

            <section className={styles.valuesSection}>
              <Heading as="h2" className={styles.sectionTitle}>核心价值</Heading>
              <div className={styles.valuesGrid}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🤝</div>
                  <Heading as="h3">诚信致远</Heading>
                  <p>坚守诚信经营原则，建立长期信任关系</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🔗</div>
                  <Heading as="h3">资源聚合</Heading>
                  <p>整合优质供应商资源，构建完善供应链体系</p>
                </div>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>🎯</div>
                  <Heading as="h3">服务共赢</Heading>
                  <p>以客户成功为导向，实现互利共赢发展</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
