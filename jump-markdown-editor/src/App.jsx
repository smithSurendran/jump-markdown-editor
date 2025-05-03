// import { useState } from 'react'
// import { marked } from 'marked'
// import html2pdf from 'html2pdf.js'

// function App() {
//   const [markdown, setMarkdown] = useState("## Welcome to Jump!\nType your *Markdown* here.")

//   const handleExport = () => {
//     const element = document.getElementById('preview')
  
//     // Clone the node and force a white background with black text
//     const clone = element.cloneNode(true)
//     clone.style.backgroundColor = "#ffffff"
//     clone.style.color = "#000000"
//     clone.style.padding = "20px"
//     clone.style.width = "100%"
  
//     const opt = {
//       margin:       0.5,
//       filename:     'markdown.pdf',
//       image:        { type: 'jpeg', quality: 0.98 },
//       html2canvas:  { scale: 2 },
//       jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     }
  
//     html2pdf().set(opt).from(clone).save()
//   }

//   const handleCopy = () => {
//     navigator.clipboard.writeText(markdown)
//   }

//   return (
//     <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
//       <textarea
//         style={{ flex: 1, padding: 20, fontSize: 16 }}
//         value={markdown}
//         onChange={(e) => setMarkdown(e.target.value)}
//       />
//       <div style={{ flex: 1, padding: 20, borderLeft: '1px solid #ccc', overflowY: 'auto' }}>
//         <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
//         <div style={{ marginTop: 20 }}>
//           <button onClick={handleExport}>Export to PDF</button>
//           <button onClick={handleCopy} style={{ marginLeft: 10 }}>Copy</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
import { useState } from 'react'
import { marked } from 'marked'
import html2pdf from 'html2pdf.js'

function App() {
  const [markdown, setMarkdown] = useState("## Welcome to Jump!\nType your *Markdown* here.")

  const handleExport = () => {
    const element = document.getElementById('preview')
    const clone = element.cloneNode(true)
    clone.style.backgroundColor = "#ffffff"
    clone.style.color = "#000000"
    clone.style.padding = "20px"
    clone.style.width = "100%"

    const opt = {
      margin: 0.5,
      filename: 'markdown.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    html2pdf().set(opt).from(clone).save()
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown)
  }

  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length

  return (
    <div style={{ height: '100vh', fontFamily: 'sans-serif', background: '#1e1e1e', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', padding: '10px', margin: 0, backgroundColor: '#222' }}>
        📝 Real-Time Markdown Editor
      </h1>

      <div style={{ display: 'flex', height: 'calc(100% - 60px)' }}>
        {/* Markdown input pane */}
        <div style={{ flex: 1, padding: 20 }}>
          <textarea
            style={{
              width: '100%',
              height: '100%',
              background: '#2c2c2c',
              color: 'white',
              border: 'none',
              fontSize: 16,
              resize: 'none',
              padding: '15px'
            }}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        </div>

        {/* Rendered preview pane */}
        <div style={{ flex: 1, padding: 20, borderLeft: '1px solid #444', overflowY: 'auto' }}>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />

          <div style={{ marginTop: 20, display: 'flex', gap: '10px' }}>
            <button
              onClick={handleExport}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                background: '#00b894',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={e => e.target.style.background = '#019875'}
              onMouseOut={e => e.target.style.background = '#00b894'}
            >
              Export to PDF
            </button>

            <button
              onClick={handleCopy}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                background: '#0984e3',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={e => e.target.style.background = '#0c6dd1'}
              onMouseOut={e => e.target.style.background = '#0984e3'}
            >
              Copy
            </button>
          </div>

          <p style={{ marginTop: 20, fontSize: '13px', color: '#aaa' }}>
            {wordCount} words | Supports GitHub-flavored Markdown like <code>**bold**</code>, <code>`code`</code>, and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
