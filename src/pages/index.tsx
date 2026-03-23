import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary')} style={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}>
      <div className="container" style={{textAlign: 'center'}}>
        <div style={{marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
          <img src="/img/stroomlijnen-logo.png" alt="Stroomlijnen" style={{height: '52px', width: 'auto'}} />
          <span style={{fontSize: '2rem', fontWeight: 300, color: 'rgba(255,255,255,0.4)'}}>|</span>
          <span style={{fontSize: '2rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em'}}>docs</span>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{color: '#84BD00', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem'}}>
          "The Show Must Go On" — Theater-grade reliability for EV charging
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started/intro">
            📖 Get Started
          </Link>
          <Link className="button button--outline button--lg" style={{color: '#fff', borderColor: '#00B0E4'}} to="/docs/plug-and-charge/what-is-pnc">
            🔌 Plug & Charge
          </Link>
          <Link className="button button--outline button--lg" style={{color: '#fff', borderColor: '#84BD00'}} to="/blog">
            📝 Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col col--4" style={{textAlign: 'center', padding: '1.5rem'}}>
            <h3>🔌 Plug & Charge</h3>
            <p>No cards, no apps. Just plug in and go. ISO 15118 Plug & Charge for electric trucks — automatic authentication and billing.</p>
            <Link to="/docs/plug-and-charge/what-is-pnc">Learn more →</Link>
          </div>
          <div className="col col--4" style={{textAlign: 'center', padding: '1.5rem'}}>
            <h3>🎭 Theater-Grade Reliability</h3>
            <p>Our charging infrastructure runs at theaters and logistics hubs across the Netherlands. The show must go on — and so must your fleet.</p>
            <Link to="/docs/locations/site-guide">Our locations →</Link>
          </div>
          <div className="col col--4" style={{textAlign: 'center', padding: '1.5rem'}}>
            <h3>📊 Fleet Management</h3>
            <p>Full visibility into your charging sessions, costs, and energy usage. Export data, manage drivers, and optimize your fleet's charging.</p>
            <Link to="/docs/fleet-management/overview">Fleet portal →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Electric Fleet Charging Knowledge Base"
      description="Everything you need to know about electric truck charging, Plug & Charge, and fleet management. By Stroomlijnen B.V., a Dutch CPO specializing in theater and logistics charging.">
      <HomepageHeader />
      <main>
        <FeatureSection />
      </main>
    </Layout>
  );
}
