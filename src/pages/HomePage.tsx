import { Link } from 'react-router-dom'
import { siteData } from '../data/siteData'
import ProjectCard from '../components/ProjectCard'

export default function HomePage() {
  const featuredProjects = siteData.projects.filter((project) => project.featured)

  return (
    <div className="page-stack">
      <section className="hero">
        <p className="eyebrow">Hey there, I’m {siteData.name} 👋</p>
        <h1>{siteData.headline}</h1>
        <p className="hero-text">{siteData.intro}</p>

        <div className="hero-actions">
          <Link to="/projects" className="button primary">
            View Projects
          </Link>
          <Link to="/blog" className="button secondary">
            Read Blog
          </Link>
        </div>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div className="grid two">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}