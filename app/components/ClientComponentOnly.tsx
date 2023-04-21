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

  return <div className="pb-20">{children}</div>;
};

export default ClientComponentOnly;
