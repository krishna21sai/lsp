import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

export default function App() {
  const [files, setFiles] = useState({
    "App.js": {
      name: "App.js",
      language: "javascript",
      value: "console.log('Hello World');",
    },
  });
  const [activeFile, setActiveFile] = useState("App.js");

  const addFile = () => {
    const fileName = prompt("Enter file name (e.g. index.html):");
    if (fileName && !files[fileName]) {
      let lang = "plaintext";
      if (fileName.endsWith(".js")) lang = "javascript";
      else if (fileName.endsWith(".html")) lang = "html";
      else if (fileName.endsWith(".css")) lang = "css";

      setFiles({
        ...files,
        [fileName]: { name: fileName, language: lang, value: "" },
      });
      setActiveFile(fileName);
    }
  };

  const onChange = (value) => {
    setFiles({
      ...files,
      [activeFile]: { ...files[activeFile], value },
    });
  };

  return (
    <div className="vsc-root">
      {/* Sidebar File Explorer */}
      <div className="vsc-sidebar">
        <div className="vsc-sidebar-header">EXPLORER</div>
        <button className="vsc-add-file" onClick={addFile}>+ Add File</button>
        <ul className="vsc-file-list">
          {Object.keys(files).map((file) => (
            <li
              key={file}
              className={`vsc-file-item${activeFile === file ? " vsc-file-active" : ""}`}
              onClick={() => setActiveFile(file)}
            >
              <span className="vsc-file-icon">📄</span> {file}
            </li>
          ))}
        </ul>
      </div>
      {/* Code Editor */}
      <div className="vsc-editor">
        <div className="vsc-editor-header">{activeFile}</div>
        <MonacoEditor
          height="calc(100vh - 32px)"
          theme="vs-dark"
          language={files[activeFile].language}
          value={files[activeFile].value}
          onChange={(value) => onChange(value)}
        />
      </div>
    </div>
  );
}
