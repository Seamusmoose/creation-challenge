import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />
      {children}
    </div>
  );
}
