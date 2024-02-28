import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useId } from "./IdContext";

function Invoice() {
  const { setId } = useId();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    // Decode the id parameter
    const decodedId = atob(id);
    setId(decodedId);
    navigate("/invoices");
  }, [id, setId, navigate]);

  return null;
}

export default Invoice;
