import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <main className="bg-[#0E0E0E] min-h-screen max-w-screen overflow-hidden">
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
