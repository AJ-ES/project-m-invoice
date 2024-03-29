// Importing React for component creation
import React from "react";

// Importing necessary hooks from react-router-dom for navigation and accessing route parameters
import { useNavigate, useParams } from "react-router-dom";

// Importing the custom hook useId from the IdContext file
import { useId } from "./IdContext";

// Functional component for handling invoice-related logic
function Invoice() {
 // Destructuring setId from the useId hook to update the ID context
 const { setId } = useId();

 // Using useParams to access the ID parameter from the URL
 const { id } = useParams();

 // Using useNavigate to programmatically navigate to different routes
 const navigate = useNavigate();

 // useEffect hook to perform side effects, such as decoding the ID and navigating
 React.useEffect(() => {
    // Decoding the ID parameter from the URL
    const decodedId = atob(id);
    // Updating the ID context with the decoded ID
    setId(decodedId);
    // Navigating to the "/invoices" route after decoding and setting the ID
    navigate("/invoices");
 }, [id, setId, navigate]); // Dependencies array to ensure the effect runs when any of these values change

 // Returning null since this component does not render any JSX
 return null;
}

// Exporting the Invoice component as the default export
export default Invoice;
