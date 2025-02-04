import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Folder } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VAE from "@/pages/vae"; // Placeholder component for individual projects

const projects = [
  {
    title: "VAE Visualizer MNIST",
    url: "/project1",
  },
];

export function AppSidebar() {
  return (
    <Router>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>VAEs</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.title}>
                    <SidebarMenuButton asChild>
                      <Link to={project.url}>
                        <Folder />
                        <span>{project.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Define routes for project pages */}
      <div className="ml-60 p-4">
        {" "}
        {/* Sidebar space adjustment */}
        <Routes>
          {projects.map((project) => (
            <Route
              key={project.title}
              path={project.url}
              element={<VAE title={project.title} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}
