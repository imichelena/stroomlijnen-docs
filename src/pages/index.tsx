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
        <p className="hero__subtitle">Alles over elektrisch laden voor vloten en locaties</p>
        <p style={{color: '#84BD00', fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '2rem'}}>
          "The Show Must Go On" — Theaterbetrouwbaarheid voor EV-laden
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started/intro">
            📖 Aan de slag
          </Link>
          <Link className="button button--outline button--lg" style={{color: '#fff', borderColor: '#00B0E4'}} to="/docs/pandeneigenaren/overzicht">
            🏛️ Pandeneigenaren
          </Link>
          <Link className="button button--outline button--lg" style={{color: '#fff', borderColor: '#84BD00'}} to="/docs/chauffeurs/elektrisch-touren">
            🚛 Chauffeurs
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
            <h3>🏛️ Pandeneigenaren</h3>
            <p>Uw locatie heeft stroomcapaciteit die overdag onbenut is. Ontdek hoe u laadpunten plaatst, wat u verdient, welke subsidies er zijn en hoe u gemeente en verzekeraar overtuigt.</p>
            <Link to="/docs/pandeneigenaren/overzicht">Meer voor eigenaren →</Link>
          </div>
          <div className="col col--4" style={{textAlign: 'center', padding: '1.5rem'}}>
            <h3>🚛 Chauffeurs</h3>
            <p>Alles wat u moet weten over laden op locatie: connectoren, laadsessies starten, tarieven, laadtijden en wat u doet als het niet werkt.</p>
            <Link to="/docs/getting-started/first-session">Eerste laadsessie →</Link>
          </div>
          <div className="col col--4" style={{textAlign: 'center', padding: '1.5rem'}}>
            <h3>🔌 Plug & Charge</h3>
            <p>Geen pasje, geen app. Gewoon insteken en laden. ISO 15118 Plug & Charge voor elektrische trucks — automatische authenticatie en facturering.</p>
            <Link to="/docs/plug-and-charge/what-is-pnc">Meer over Plug & Charge →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Kennisbank Elektrisch Laden"
      description="Alles over elektrisch laden voor vloten en locaties. Door Stroomlijnen B.V., Nederlandse CPO gespecialiseerd in laden bij theaters en logistieke locaties.">
      <HomepageHeader />
      <main>
        <FeatureSection />
      </main>
    </Layout>
  );
}
