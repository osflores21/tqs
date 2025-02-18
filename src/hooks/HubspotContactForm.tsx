import React, { useEffect } from "react";
import { Paper } from "@mantine/core";

interface HubspotContactFormProps {
  region: string;
  portalId: string;
  formId: string;
  targetId: string; // ID único para cada formulario
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

const HubspotContactForm: React.FC<HubspotContactFormProps> = ({ region, portalId, formId, targetId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${targetId}`, // Usar un ID único para cada formulario
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, [region, portalId, formId, targetId]);

  return (
    <Paper radius="xl" withBorder p="lg" style={{ borderColor: "#E61D55", borderWidth: 1 }} id={targetId}></Paper>
  );
};

export default HubspotContactForm;
