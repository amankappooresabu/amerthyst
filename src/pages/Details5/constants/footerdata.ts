export const footerData5 = {
  sections: [
    {
      id: 1,
      title: "Certifications",
      type: 'certifications' as const,
      data: {
        items: [
          { id: 1, name: "FSSAI", image: "/certificates/cert14.png" },
        ]
      }
    },
   {
      id: 2,
      title: "Industries",
      type: 'stat' as const,
      data: {
        suffix: "Focused on",
        label: "Wellness & Personal Care"
      }
    },
    {
      id: 3,
      title: "MOQ",
      type: 'info' as const,
      data: {
        secondaryText: "Flexible",
        additionalText: "Retail & Bulk Orders"
      }
    }
  ],
  backgroundGradient: "from-[#C19A6B] via-[#D2B48C] to-[#C19A6B]"  
};

