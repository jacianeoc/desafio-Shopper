import { useState, useRef, ChangeEvent } from "react";

import { Container } from "./styles";

function FileUploadButton() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  console.log(">>>>", selectedFile);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".csv")) {
      setSelectedFile(file);
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button onClick={openFileDialog}>
        {selectedFile ? "Carregar outro arquivo" : "Selecionar Arquivo CSV"}
      </button>
      {selectedFile && (
        <p>
          Arquivo Selecionado: <span>{selectedFile.name}</span>
        </p>
      )}
    </Container>
  );
}

export default FileUploadButton;
