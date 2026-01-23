export const footerData2 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "FSSAI", image: "/certificates/cert14.webp" },
          { id: 2, name: "GMP", image: "/certificates/cert13.webp" },
          { id: 3, name: "ISO", image: "/certificates/cert8.webp" },
        ]
      }
    },
    {
      id: 2,
      title: "Markets",
      type: 'stat' as const,
      data: {
        suffix: "Focused :",
        label: "Nutraceutical & Wellness Industries"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        primaryText: "25kg",
        secondaryText: "Minimum Order",
        additionalText: "Bulk Orders Available"
      }
    }
  ],
  backgroundGradient: "from-black via-gray-900 to-gray-800"  
};

