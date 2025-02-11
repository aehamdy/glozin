const discountCodes = [
    {
        label: "holiday",
        discountAmount: 30,
        title: `Sale 30% Off`,
        desc: `30% off during the holiday season.`,
        code: `holiday30all`,
        active: true,
        viewOnApp() {
            return this.active;
        },
    },
    {
        label: "bundle",
        discountAmount: 50,
        title: `Sale 50% Off`,
        desc: `Discount when buying combo.`,
        code: `bundledeal50`,
        active: true,
        viewOnApp() {
            return this.active;
        },
    },
    {
        label: "flashsale",
        discountAmount: 75,
        title: `Sale 75% Off`,
        desc: `Big discounts for Flash Sale hours.`,
        code: `flashsale75`,
        active: true,
        viewOnApp() {
            return this.active;
        },
    },
    {
        label: "white friday",
        discountAmount: 50,
        title: `Best Of Sale`,
        desc: `Extra 50% off for VIP customers.`,
        code: `vipsale50all`,
        active: true,
        viewOnApp() {
            return this.active;
        },
    },
    {
        label: "free shipping",
        discountAmount: 0,
        title: `Free Shipping`,
        desc: `Enjoy free shipping for your orders`,
        code: `freship`,
        active: true,
        viewOnApp() {
            return this.active;
        },
    },
];

export default discountCodes;
