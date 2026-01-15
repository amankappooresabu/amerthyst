export const footerData1 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "FSSAI", image: "/certificates/cert14.webp" },
          { id: 2, name: "APEDA", image: "/certificates/cert2.webp" },
          { id: 3, name: "ISO", image: "/certificates/cert8.webp" },
          { id: 4, name: "HACCP", image: "/certificates/cert12.webp" }
        ]
      }
    },
    {
      id: 2,
      title: "Shipping",
      type: 'stat' as const,
      data: {
        value: 45,
        suffix: "+",
        label: "Countries Worldwide"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        primaryText: "100 kg",
        secondaryText: "Minimum Order",
        additionalText: "Full Container Loads Available"
      }
    }
  ],
  backgroundGradient: "from-[#B8860B] via-[#DAA520] to-[#B8860B]"  
};

