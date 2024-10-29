const purgeCSSOptions = {
    css: ["./_site/assets/styles/*.css"],
    content: [
        "./_site/**/*.{html,js,svg}",
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
        standard: [
            /abbr/,
            "kbd",
            "samp",
            "sub",
            "optgroup",
            "fieldset",
            "summary",
            "cite",
            "dfn",
            "pre",
        ],
        deep: [
            /usa-in-page.+/
        ]
    },
    dynamicAttributes: [
        'contentEditable',
        'title',
        'type'
    ]
};
module.exports = purgeCSSOptions;
