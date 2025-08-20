import { useState } from "react";
import FileExplorer from "./FileExplorer";
import EditorView from "./EditorView";

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
      <FileExplorer
        files={files}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        addFile={addFile}
      />
      <EditorView
        file={activeFile}
        value={files[activeFile].value}
        language={files[activeFile].language}
        onChange={onChange}
      />
    </div>
  );
}
