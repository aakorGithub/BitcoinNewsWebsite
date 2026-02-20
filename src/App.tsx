// App.tsx - Main application component that renders Header and DesktopNav.

import React from "react";
import Header, { DesktopNav } from "./Header";
import Footer from "./Footer";
import WebsiteLogo from "./WebsiteLogo";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <DesktopNav />

      <main className="content">
        <WebsiteLogo />
      </main>

      <Footer />
    </div>
  );
};

export default App;


