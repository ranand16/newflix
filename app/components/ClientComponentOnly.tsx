"use client";

import React, { useState, useEffect } from "react";

interface ClientComponentOnlyProps {
  children: React.ReactNode;
}

const ClientComponentOnly: React.FC<ClientComponentOnlyProps> = ({
  children,
}) => {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!hasLoaded) return null;

  return <>{children}</>;
};

export default ClientComponentOnly;
