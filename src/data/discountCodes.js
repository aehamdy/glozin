const discountCodes = [
    {
        label: "holiday",
        discount: "30",
        title: `Sale 30% Off`,
        desc: `30% off during the holiday season.`,
        code: `holiday30all`,
        viewOnApp: true,
        active: true,
    },
    {
        label: "bundle",
        discount: "50",
        title: `Sale 50% Off`,
        desc: `Discount when buying combo.`,
        code: `bundledeal50`,
        viewOnApp: true,
        active: true,
    },
    {
        label: "flashsale",
        discount: "75",
        title: `Sale 75% Off`,
        desc: `Big discounts for Flash Sale hours.`,
        code: `flashsale75`,
        viewOnApp: true,
        active: true,
    },
    {
        label: "white friday",
        discount: "50",
        title: `Best Of Sale`,
        desc: `Extra 50% off for VIP customers.`,
        code: `vipsale50all`,
        viewOnApp: true,
        active: true,
    },
    {
        label: "free shipping",
        discount: "free-shipping",
        title: `Free Shipping`,
        desc: `Free shipping for orders above $500`,
        code: `freship`,
        viewOnApp: false,
        active: true,
    },
];

export default discountCodes;
