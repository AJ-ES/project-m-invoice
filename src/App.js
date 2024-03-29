import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoice from "./Invoice";
import Invoiceview from "./Invoiceview";
import { IdProvider } from "./IdContext";

// Main App component that sets up routing and context
function App() {
 return (
    <Router>
      {/* Provides context for ID management across components */}
      <IdProvider>
        <div className="App">
          {/* Defines the routes for the application */}
          <Routes>
            {/* Route for individual invoice view */}
            <Route path="/:id" element={<Invoice />} />
            {/* Route for the invoice list view */}
            <Route path="/invoices" element={<Invoiceview />} />
          </Routes>
        </div>
      </IdProvider>
    </Router>
 );
}

export default App;
