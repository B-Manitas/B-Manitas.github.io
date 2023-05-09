// Import React components
import React from "react";

// Import custom components
import Body from "components/sections/body";
import Footer from "components/sections/footer";
import Header from "components/sections/header";

/**
 * Main component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
