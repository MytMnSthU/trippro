// Motion Animation Variants
export const imgVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

export const txtVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.5,
        },
    },
};

// Images for carousel slide
export const images = {
    desktop: [
        "/assets/trippro.com.hk_cn_-1@2x.png",
        "/assets/trippro.com.hk_cn_-2@2x.png",
    ],
    mobile: [
        "/assets/trippro.com.hk_(iPhone X)-3@2x.png",
        "/assets/trippro.com.hk_(iPhone X)-4@2x.png",
        "/assets/trippro.com.hk_(iPhone X)-5@2x.png",
        "/assets/trippro.com.hk_(iPhone X)-6@2x.png",
    ],
};
