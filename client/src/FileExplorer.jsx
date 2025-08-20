import React from "react";

export default function FileExplorer({ files, activeFile, setActiveFile, addFile }) {
  return (
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
  );
}
