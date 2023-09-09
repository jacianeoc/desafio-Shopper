import FileUploadButton from "./components/FileUpload";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Navbar />
      <main>
        <section>
          <h2>Seção Administrativa</h2>
          <p>Alteração de valores de estoque</p>
          <FileUploadButton />
        </section>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
