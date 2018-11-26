export const config = {
    apis: {
        base_url: "http://localhost:3000",
        mocogateway_base_url: "",
    },
    meta: {
        name: "FPTU Confession App",
        short_name: "cf.fptu.tech",
        fb_tagname: "cfapp",
    },
    assets: {
        server_url: "",
        public_folder: process.env.PUBLIC_URL,
    },
    social: {
        facebook: {
            page: "https://www.facebook.com/gosu.team",
        },
        instagram: {
            page: "https://www.instagram.com/gosu.team",
        },
    },
    facebook_app: {
        enabled: false,
        app_id: "1524500647849245",
    },
};