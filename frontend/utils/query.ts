import QueryString from "qs";

const pageQuery = (slug: string = "home-page") => QueryString.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        desktop_image_video: {
                            fields: ["url", "alternativeText"]
                        },
                        cta: {
                            fields: ["text", "href", "open_in_new_tab"]
                        }
                    }
                },
                "blocks.simple-hero-section": {
                    populate: {
                        desktop_image_video: {
                            fields: ["url", "alternativeText"]
                        },
                        cta: {
                            fields: ["text", "href", "open_in_new_tab"]
                        }
                    }
                },
                "blocks.info": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"]
                        }
                    }
                }
            }
        }
    }
});

export default pageQuery;