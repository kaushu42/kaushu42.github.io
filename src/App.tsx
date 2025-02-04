import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VAE from "@/pages/vae";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/pages/home"; // Add your homepage if necessary
import HomePage from "./pages/HomePage";
import CVAE from "./pages/cvae";

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/vae" element={<VAE title="VAE Visualizer" />} />
            <Route path="/cvae" element={<CVAE title="CVAE Visualizer" />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
