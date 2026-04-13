# NinjaPDF

> **Private PDF processing that stays on your device.** Fast, browser-based tools for merging, splitting, compressing, converting, and editing PDFs without server uploads.

| Privacy-first | Client-side only | Offline ready |
| --- | --- | --- |
| Your files never leave the browser. | Built with JavaScript, WebAssembly, pdf.js, and pdf-lib. | Works after the initial load, even offline. |

## The Short Version

NinjaPDF is a modern PDF toolkit for people who do not want to upload sensitive files to a third-party server.

- No uploads.
- No tracking.
- No data collection.
- No waiting on a remote backend.

It is designed for students, professionals, freelancers, lawyers, accountants, and anyone who regularly handles important PDFs.

## Why NinjaPDF

Most online PDF tools trade convenience for privacy. Uploading contracts, tax forms, medical records, or client documents to a server is a risk many teams should not have to accept.

NinjaPDF removes that tradeoff:

- Processing happens locally in your browser.
- Files remain on your device.
- There is no hidden server-side document storage.
- The app can be used as a fast local workflow after load.

> This is the simplest privacy model possible for a PDF web app: keep the work on the device, keep the documents private.

## Features

| Capability | What it means |
| --- | --- |
| Merge PDFs | Combine multiple files into one clean output. |
| Split PDFs | Extract page ranges or separate documents. |
| Compress PDFs | Reduce file size without sending the file anywhere. |
| Convert PDFs | Transform documents locally where supported. |
| Edit PDFs | Update or adjust pages in the browser. |
| Rotate pages | Fix orientation before exporting. |
| Protect PDFs | Add password protection for sensitive files. |
| Offline usage | Keep working after the app is loaded. |

## Visual Layout

When you add actual app screenshots, this README will look strongest with a simple stack like this:

1. A wide hero image of the landing page.
2. One workflow GIF showing drag-and-drop file handling.
3. One before/after result image for compression or merge output.
4. One mobile screenshot to prove responsiveness.

## Live Demo

Live demo: coming soon.

## Tech Stack

| Layer | Tools |
| --- | --- |
| UI | HTML, CSS, JavaScript / TypeScript |
| PDF Rendering | pdf.js |
| PDF Editing | pdf-lib |
| Heavy Processing | WebAssembly |
| Runtime Model | 100% client-side |
| Deployment | Static web app |

## Quick Start

### Run locally

```bash
git clone https://github.com/your-username/NinjaPDF.git
cd NinjaPDF
npm install
npm run dev
```

Open the local URL shown in the terminal.

### Build for production

```bash
npm run build
npm run preview
```

### Use the app

1. Open NinjaPDF in your browser.
2. Drop one or more PDF files into the workspace.
3. Pick the operation you want to perform.
4. Adjust options if the feature provides them.
5. Download the processed PDF directly to your device.

## How to Use

### Merge PDFs

Select multiple files, arrange them in the desired order, and choose **Merge** to generate a single combined document.

### Split PDFs

Upload one PDF, choose the page ranges or split mode, then export separate files.

### Compress PDFs

Upload a large PDF, choose a quality setting, and export a smaller file that stays local throughout the process.

### Rotate and Protect

Use the page tools to fix orientation, then add password protection when you need an extra layer of privacy.

## Supported Operations

- Merge PDFs
- Split PDFs
- Compress PDFs
- Convert PDFs
- Edit PDFs
- Rotate pages
- Reorder pages
- Delete pages
- Extract pages
- Add password protection
- Remove protection where allowed
- Preview documents before export

## Privacy & Security

This project is built around a simple rule: if the file is private, the processing should stay private too.

- Documents are processed locally in the browser.
- There is no required upload to a remote server.
- There is no document retention on backend systems.
- There is no built-in need for tracking or analytics.
- The app can continue working after the initial load without network access.

> Client-side processing reduces exposure, but it does not replace normal device and browser hygiene. Keep your system updated and your source files secured.

## Roadmap

- Add more advanced page management tools.
- Improve compression presets and previews.
- Expand batch workflows for multiple files.
- Add stronger keyboard and accessibility support.
- Polish the mobile experience.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test locally.
5. Open a pull request with a clear summary of the behavior change.

For larger changes, open an issue first so the direction can be discussed before implementation.

## License

This project is licensed under the MIT License.

## Acknowledgments

Built for people who want fast PDF tools without giving up privacy.

Special thanks to the open-source projects that make client-side PDF processing possible, especially [pdf.js](https://github.com/mozilla/pdf.js) and [pdf-lib](https://github.com/Hopding/pdf-lib).