const tracks=[
["HTML","Build the web from the ground up.","Beginner"],
["CSS","Layouts, responsive design and visual systems.","Beginner"],
["JavaScript","Programming fundamentals and browser logic.","Beginner"],
["Python","From syntax to practical automation.","Beginner"],
["TypeScript","Safer, scalable JavaScript.","Intermediate"],
["SQL","Query and model real data.","Intermediate"],
];

export default function Home(){
 return <main className="shell">
  <nav className="nav"><div className="brand">co<span>ders</span></div><div className="navlinks"><a href="#tracks">Tracks</a><a href="#how">How it works</a><a href="https://github.com/agastyatomar/coders">GitHub</a></div></nav>
  <section className="hero">
   <div className="eyebrow">Student coding academy</div>
   <h1>Learn code.<br/><span style={{color:"#a78bfa"}}>Build your future.</span></h1>
   <p>Learn programming from zero to advanced through structured tracks, projects, challenges, XP and real progress — with GitHub as your only account.</p>
   <div className="actions"><a className="btn primary" href="#tracks">Start learning →</a><a className="btn" href="https://github.com/agastyatomar/coders">View on GitHub</a></div>
  </section>
  <section id="tracks" className="section"><div className="eyebrow">Learning tracks</div><div className="grid">{tracks.map(([name,desc,level])=><article className="card" key={name}><span className="pill">{level}</span><h3>{name}</h3><p className="muted">{desc}</p><a href="#" style={{fontWeight:800}}>Explore track →</a></article>)}</div></section>
  <section id="how" className="section"><div className="eyebrow">Built for progress</div><div className="grid"><article className="card"><div>🎯</div><h3>Roadmaps</h3><p className="muted">Move from fundamentals to projects and advanced skills without guessing what to learn next.</p></article><article className="card"><div>⚡</div><h3>XP & achievements</h3><p className="muted">Turn completed lessons and projects into visible progress, levels and milestones.</p></article><article className="card"><div>◉</div><h3>GitHub identity</h3><p className="muted">One GitHub account. No separate password system. Your learning profile follows your developer identity.</p></article></div></section>
  <footer className="footer">Coders · Learn. Build. Level Up. · Built by Agastya Tomar</footer>
 </main>
}