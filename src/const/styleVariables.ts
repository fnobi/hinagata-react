const BREAK_POINT = 800;

export const MEDIA = {
    PC: `@media (min-width: ${BREAK_POINT + 1}px)`,
    SP: `@media (max-width: ${BREAK_POINT}px)`,
};

export const styleAsset = (filePath: string): string => {
    const url = require(`~/assets/${filePath}`);
    return `url(${url})`;
};
