import MonacoEditor from "@monaco-editor/react";

export default function EditorView({ file, value, language, onChange }) {
  return (
    <div className="vsc-editor">
      <div className="vsc-editor-header">{file}</div>
      <MonacoEditor
        height="calc(100vh - 32px)"
        theme="vs-dark"
        language={language}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
