import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; 2023 Hackathon Sponsorship. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
