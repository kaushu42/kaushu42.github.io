import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "@/components/projects";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/pages/home"; // Add your homepage if necessary

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<div>Welcome to my blog</div>} />
            <Route path="/vae" element={<Project title="VAE Visualizer" />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
