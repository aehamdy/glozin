const saleBanners = [
    {
        label: "holiday",
        discount: "30",
        title: `Sale ${this.discount}% Off`,
        desc: `${this.discount}% off during the holiday season.`,
        code: `holiday${this.discount}all`,
    },
    {
        label: "bundle",
        discount: "50",
        title: `Sale ${this.discount}% Off`,
        desc: `Discount when buying combo.`,
        code: `bundledeal${this.discount}`,
    },
    {
        label: "flashsale",
        discount: "75",
        title: `Sale ${this.discount}% Off`,
        desc: `Big discounts for Flas Sale hours.`,
        code: `flashsale${this.discount}`,
    },
    {
        label: "whitefriday",
        discount: "50",
        title: `Best Of Sale`,
        desc: `Extra ${this.discount} off for VIP customers.`,
        code: `vipsale${this.discount}all`,
    },
]