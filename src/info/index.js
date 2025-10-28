const caseName = "樂居昀集"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "基地位置",//按鈕區的--- 如空白會只呈現地址
    address2: "基地位置",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市新莊區五工二路86巷36號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.0103607505612!2d121.46058470000001!3d25.0672868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90a5030c2b9%3A0xb2e8ecf320dff875!2z5piA6ZuG5a-M5pix!5e0!3m2!1szh-TW!2stw!4v1761561015547!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/aLwtpRaXXXfGHYBR7",
    phone: "02-2914-5888",
    fbLink: "https://www.facebook.com/61573126301169/",
    fbMessage: "https://m.me/61573126301169/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "佳鋐建設股份有限公司"],
        ["營造公司", "協侑營造有限公司"],
        ["產品規劃", "地上 15層，地下2層，245戶"],
        ["景觀設計", "邑埕景觀設計"],
        ["建築外觀", "曾聰憲建築師事務所"],
    ],
    gtmCode: ["GTM-W4SNV34K"], // 可放置多個
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "",
        subTitle: "",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["早上","下午","晚上"],
    budget: [],
    navList: [
        {
            name: "大城之境",
            target: ".s3",
            offset: "",
        },
        {
            name: "大境美宅",
            target: ".s5",
            offset: "",
        },
        {
            name: "工藝嚴選",
            target: ".s7",
            offset: "",
        },
        {
            name: "空間展演",
            target: ".s8",
            offset: "",
        },
        {
            name: "預約賞屋",
            target: ".order",
            offset: "",
        },
    ],
}