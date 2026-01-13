export const footerData6 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "HACCP", image: "/certificates/cert12.png" }
        ]
      }
    },
    {
      id: 2,
      title: "Shipping",
      type: 'stat' as const,
      data: {
        suffix: "Focused on",
        label: "Frozen & Reefer Logistics"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        primaryText: "Shipment-Based",
      }
    }
  ],
  backgroundGradient: "from-blue-950 via-blue-900 to-blue-950"  
};

