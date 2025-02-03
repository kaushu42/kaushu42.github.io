import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="ml-4 pl-4">{children}</main>
    </div>
  );
}
