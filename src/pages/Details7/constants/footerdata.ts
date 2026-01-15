export const footerData7 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "ISO", image: "/certificates/cert8.webp" },
          { id: 2, name: "GMP", image: "/certificates/cert13.webp" }
        ]
      }
    },
    {
      id: 2,
      title: "Markets",
      type: 'stat' as const,
      data: {
        suffix: "Focused on",
        label: "Cosmetics & Personal Care"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        primaryText: "Low",
        additionalText: "Low → Industrial Volumes"
      }
    }
  ],
  backgroundGradient: "from-[#E85D8A] via-[#F482A8] to-[#E85D8A]"
};

