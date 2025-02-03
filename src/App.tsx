import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "@/components/projects";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/pages/home"; // Add your homepage if necessary
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/vae" element={<Project title="VAE Visualizer" />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
