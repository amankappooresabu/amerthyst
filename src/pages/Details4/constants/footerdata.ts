export const footerData4 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "GMP", image: "/certificates/cert13.webp" },
          { id: 2, name: "ISO", image: "/certificates/cert8.webp" },
          { id: 3, name: "HACCP", image: "/certificates/cert12.webp" }
        ]
      }
    },
    {
      id: 2,
      title: "Industries",
      type: 'stat' as const,
      data: {
        suffix: "Focused on",
        label: "Nutraceutical & Functional Foods"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        primaryText: "10 kg",
        secondaryText: "Minimum Order",
        additionalText: "Industrial Scale"
      }
    }
  ],
  backgroundGradient: "from-blue-900 via-blue-800 to-blue-900"  
};

