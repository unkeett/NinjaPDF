import { useEffect, useMemo, useState } from 'react'
import './App.css'

const TOOLS = [
  {
    slug: 'merge-pdf',
    name: 'Merge PDF',
    title: 'Merge PDF',
    description: 'This is the merge tool. Combine multiple PDFs into one file locally.',
    accent: 'coral',
  },
  {
    slug: 'split-pdf',
    name: 'Split PDF',
    title: 'Split PDF',
    description: 'This is the split tool. Separate one PDF into pages or ranges.',
    accent: 'orange',
  },
  {
    slug: 'compress-pdf',
    name: 'Compress PDF',
    title: 'Compress PDF',
    description: 'This is the compress tool. Reduce file size without uploading anything.',
    accent: 'lime',
  },
  {
    slug: 'convert-pdf',
    name: 'Convert PDF',
    title: 'Convert PDF',
    description: 'This is the convert tool. Transform PDFs locally where supported.',
    accent: 'blue',
  },
  {
    slug: 'edit-pdf',
    name: 'Edit PDF',
    title: 'Edit PDF',
    description: 'This is the edit tool. Add text, shapes, or annotations in the browser.',
    accent: 'violet',
  },
  {
    slug: 'rotate-pdf',
    name: 'Rotate PDF',
    title: 'Rotate PDF',
    description: 'This is the rotate tool. Fix page orientation before export.',
    accent: 'peach',
  },
  {
    slug: 'protect-pdf',
    name: 'Protect PDF',
    title: 'Protect PDF',
    description: 'This is the protect tool. Add a password to secure a file locally.',
    accent: 'green',
  },
  {
    slug: 'reorder-pages',
    name: 'Reorder Pages',
    title: 'Reorder Pages',
    description: 'This is the reorder tool. Move pages into the order you want.',
    accent: 'indigo',
  },
  {
    slug: 'delete-pages',
    name: 'Delete Pages',
    title: 'Delete Pages',
    description: 'This is the delete tool. Remove pages you do not need.',
    accent: 'rose',
  },
  {
    slug: 'extract-pages',
    name: 'Extract Pages',
    title: 'Extract Pages',
    description: 'This is the extract tool. Pull selected pages into a new PDF.',
    accent: 'teal',
  },
  {
    slug: 'unlock-pdf',
    name: 'Unlock PDF',
    title: 'Unlock PDF',
    description: 'This is the unlock tool. Remove protection where allowed by the file.',
    accent: 'slate',
  },
  {
    slug: 'preview-pdf',
    name: 'Preview PDF',
    title: 'Preview PDF',
    description: 'This is the preview tool. Check your document before downloading it.',
    accent: 'amber',
  },
]

const toolBySlug = new Map(TOOLS.map((tool) => [tool.slug, tool]))

function getToolFromHash() {
  const hash = window.location.hash.replace(/^#/, '')
  return toolBySlug.get(hash) ?? null
}

function App() {
  const [activeTool, setActiveTool] = useState(() => getToolFromHash())

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTool(getToolFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const featuredTools = useMemo(() => TOOLS.slice(0, 6), [])

  const openTool = (slug) => {
    window.location.hash = slug
  }

  const showDashboard = !activeTool

  return (
    <div className="app-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#"
          onClick={(event) => {
            event.preventDefault()
            window.location.hash = ''
          }}
        >
          <span className="brand-mark">N</span>
          <span>
            <strong>NinjaPDF</strong>
            <small>Private PDF tools</small>
          </span>
        </a>

        <div className="topbar-copy">
          <span>Client-side only</span>
          <span>Offline ready</span>
          <span>No uploads</span>
        </div>
      </header>

      {showDashboard ? (
        <main className="dashboard">
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">100% browser-based PDF workflow</p>
              <h1>Private PDF tools that feel fast, polished, and local.</h1>
              <p>
                Merge, split, compress, convert, and edit PDFs without sending your documents to
                a server. Everything happens in the browser.
              </p>

              <div className="hero-actions">
                <button className="primary-btn" onClick={() => openTool('merge-pdf')}>
                  Start with Merge
                </button>
                <a className="secondary-btn" href="#privacy">
                  Why this is different
                </a>
              </div>

              <div className="stats-row">
                <article>
                  <strong>12 tools</strong>
                  <span>Built for everyday PDF tasks</span>
                </article>
                <article>
                  <strong>0 uploads</strong>
                  <span>Files stay on your device</span>
                </article>
                <article>
                  <strong>Offline ready</strong>
                  <span>Works after the initial load</span>
                </article>
              </div>
            </div>

            <div className="hero-panel" aria-hidden="true">
              <div className="panel-card">
                <div className="panel-topline" />
                <h2>Workspace preview</h2>
                <p>Pick a tool card to open a focused tool page.</p>
                <div className="panel-grid">
                  {featuredTools.map((tool) => (
                    <span key={tool.slug}>{tool.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="tool-section" aria-labelledby="tools-heading">
            <div className="section-head">
              <div>
                <p className="eyebrow">Tools</p>
                <h2 id="tools-heading">Choose a PDF tool</h2>
              </div>
              <p className="section-note">
                Simple cards, no clutter, and a click takes you straight to the tool page.
              </p>
            </div>

            <div className="tool-grid">
              {TOOLS.map((tool) => (
                <button
                  key={tool.slug}
                  type="button"
                  className={`tool-card accent-${tool.accent}`}
                  onClick={() => openTool(tool.slug)}
                >
                  <span className="tool-card-name">{tool.name}</span>
                  <span className="tool-card-arrow">Open</span>
                </button>
              ))}
            </div>
          </section>

          <section className="privacy-band" id="privacy">
            <div>
              <p className="eyebrow">Privacy</p>
              <h2>Files stay in the browser. No server uploads. No hidden retention.</h2>
            </div>
            <p>
              NinjaPDF is designed for users who need private PDF processing without handing
              sensitive files to a cloud service.
            </p>
          </section>
        </main>
      ) : (
        <main className="tool-page">
          <button
            type="button"
            className="back-link"
            onClick={() => {
              window.location.hash = ''
            }}
          >
            ← Back to dashboard
          </button>

          <section className={`tool-hero accent-${activeTool.accent}`}>
            <p className="eyebrow">Tool page</p>
            <h1>{activeTool.title}</h1>
            <p>{activeTool.description}</p>
          </section>

          <section className="tool-workspace">
            <div className="workspace-card">
              <h2>This is the {activeTool.name.toLowerCase()} tool.</h2>
              <p>
                Add the real PDF workflow here later. For now this page gives each tool its own
                landing view so the dashboard feels like a real app.
              </p>
            </div>

            <div className="workspace-card ghost">
              <h3>What this page can become</h3>
              <ul>
                <li>File picker and drag-drop upload area</li>
                <li>Live PDF preview and page controls</li>
                <li>Action settings specific to the tool</li>
                <li>Download button for the processed file</li>
              </ul>
            </div>
          </section>
        </main>
      )}
    </div>
  )
}

export default App