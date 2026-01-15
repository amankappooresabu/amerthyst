export const footerData3 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "APEDA", image: "/certificates/cert2.webp" },
         
        ]
      }
    },
    {
      id: 2,
      title: "Shipping",
      type: 'stat' as const,
      data: {
        label: "Bulk & Container Loads"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        primaryText: "Container Basis",
      }
    }
  ],
  backgroundGradient: "from-yellow-900 via-yellow-800 to-yellow-900"  
};

