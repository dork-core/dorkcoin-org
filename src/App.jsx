function IconBadge({ children }) {
  return <div className="icon-badge" aria-hidden="true">{children}</div>;
}

function App() {
  return (
    <>
      <header className="navbar">
        <div className="wrap">
          <div className="brand">
            <img src="/assets/dorkcoin-logo.webp" alt="" />
            <span className="brand-name"><span className="l1">DORKCOIN</span></span>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-copy">
              <h1>BUILT FOR<br /><span id="frens">REAL DORKS</span>.</h1>
              <div className="eyebrow-divider" />
              <p>Dorkcoin is the community's own Proof-of-Stake blockchain. A little weird, fully decentralized, and built for people who do things their own way.</p>
              <div className="hero-btns">
                <a href="https://dorkcore.org" target="_blank" rel="noreferrer" className="btn btn-solid">Download Dork Core</a>
                <a href="https://coinpaprika.com/coin/dork-dorkcoin/" className="btn btn-outline" target="_blank" rel="noreferrer">Buy $DORK</a>
              </div>
            </div>
            <div className="coin-stage" aria-label="Dorkcoin">
              <svg className="pedestal" viewBox="0 0 300 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs><radialGradient id="pedGrad" cx="50%" cy="0%" r="80%"><stop offset="0%" stopColor="#2a2a2a" /><stop offset="100%" stopColor="#070707" /></radialGradient></defs>
                <polygon points="20,30 70,8 150,2 230,10 280,32 250,58 60,58" fill="url(#pedGrad)" />
                <polygon points="60,58 250,58 235,46 75,46" fill="#020202" opacity="0.7" />
              </svg>
              <div className="coin-wrap"><div className="ring-inner"><img src="/assets/dorkcoin-logo.webp" alt="" /></div></div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap"><div className="cta-card">
            <div className="cta-watermark" aria-hidden="true">D</div>
            <div className="cta-text"><h2>MEET REAL DORKS.</h2><p>Play, stake, build, or just be a little dorky. The Dorkcoin community is waiting for you.</p></div>
            <a href="https://discord.com/invite/yZf2zq8z9B" target="_blank" rel="noreferrer" className="btn btn-accent" id="community-btn">JOIN THE COMMUNITY</a>
          </div></div>
        </section>

        <section id="about" className="about">
          <div className="wrap"><div className="about-card">
            <div className="about-emblem"><img src="/assets/dorkcoin-logo.webp" alt="Dorkcoin logo" /></div>
            <div className="about-heading"><h2>WHAT IS DORKCOIN?</h2><div className="eyebrow-divider" /><p>A community-first cryptocurrency for internet misfits. Dorkcoin runs on its own Proof-of-Stake blockchain, where people secure the network and earn rewards by staking.</p></div>
            <div className="checklist">
              {["Community powered", "Proof-of-Stake network", "Open-source Dork Core", "Stake to support the chain"].map((item) => <div className="check-item" key={item}><div className="check-circle"><svg viewBox="0 0 24 24"><polyline points="4 12.5 9.5 18 20 6" /></svg></div><span>{item}</span></div>)}
            </div>
          </div></div>
        </section>

        <section className="stats" aria-label="Dorkcoin network facts">
          <div className="wrap"><div className="stats-card">
            <div className="stat-item"><IconBadge><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6" /><path d="M12 3.4c2.6 2.4 2.6 14.8 0 17.2M12 3.4c-2.6-2.4-2.6-14.8 0-17.2M3.6 12h16.8" /></svg></IconBadge><div className="stat-text"><div className="num">PROOF OF STAKE</div><div className="label">Consensus</div></div></div>
            <div className="stat-item"><IconBadge><svg viewBox="0 0 24 24"><path d="M7.5 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.5 0 2.5-1 4.5-4.5s3-4.5 4.5-4.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-1.5 0-2.5-1-4.5-4.5s-3-4.5-4.5-4.5Z" /></svg></IconBadge><div className="stat-text"><div className="num">UNLIMITED</div><div className="label">Max supply</div></div></div>
            <div className="stat-item"><IconBadge><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6" /><path d="M12 7v5l3.5 2" /></svg></IconBadge><div className="stat-text"><div className="num">1 MINUTE</div><div className="label">Block time</div></div></div>
            <div className="stat-item"><IconBadge><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.6" /><path d="M14.7 9.4c-.6-.7-1.5-1.1-2.7-1.1-1.6 0-2.7.8-2.7 2s1.1 1.7 2.7 2 2.7.8 2.7 2-1.1 2-2.7 2c-1.2 0-2.1-.4-2.7-1.1M12 6.5v11" /></svg></IconBadge><div className="stat-text"><div className="num">100 DORK</div><div className="label">Block reward</div></div></div>
          </div></div>
        </section>

        <section className="initiatives">
          <div className="wrap">
            <div className="init-heading"><span className="line" /><h2>THE DORK ECOSYSTEM</h2><span className="line" /></div>
            <p>Independent tools and a network built around its community.</p>
            <div className="init-grid">
              <article className="init-card"><IconBadge><svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="7" ry="2.5" /><path d="M5 5v3.5C5 9.9 8.1 11 12 11s7-1.1 7-2.5V5M5 8.5V12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V8.5M5 12v3.5C5 16.9 8.1 18 12 18s7-1.1 7-2.5V12" /></svg></IconBadge><h3>STAKE</h3><div className="init-underline" /><p>Help secure the network and earn rewards by keeping your wallet online.</p></article>
              <article className="init-card"><IconBadge><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><circle cx="17" cy="9" r="2.6" /></svg></IconBadge><h3>COMMUNITY</h3><div className="init-underline" /><p>Made for the Real Dorks who bring their own ideas, humor, and energy.</p></article>
              <article className="init-card"><IconBadge><span className="code-mark">&lt;/&gt;</span></IconBadge><h3>OPEN SOURCE</h3><div className="init-underline" /><p>Review the code, inspect releases, and help build the tools we all use.</p></article>
              <article className="init-card"><IconBadge><svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="5" height="5" rx="1" /><rect x="16.5" y="2.5" width="5" height="5" rx="1" /><rect x="2.5" y="16.5" width="5" height="5" rx="1" /><rect x="16.5" y="16.5" width="5" height="5" rx="1" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="m9.5 10-2-2m7 2 2-2m-7 6-2 2m7-2 2 2" /></svg></IconBadge><h3>ON-CHAIN</h3><div className="init-underline" /><p>A dedicated blockchain for DORK, with transparent participation and rewards.</p></article>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <svg className="footer-rocks" viewBox="0 0 1200 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="120,90 180,40 230,55 280,30 330,90" fill="#0c0c0c" /><polygon points="700,90 760,50 820,62 880,38 930,90" fill="#0a0a0a" /><polygon points="950,90 1010,55 1070,68 1120,90" fill="#0c0c0c" /></svg>
        <div className="wrap"><div className="footer-meta"><p>© {new Date().getFullYear()} Dorkcoin.</p><p>Built for Real Dorks.</p></div></div>
      </footer>
    </>
  );
}

export default App;
