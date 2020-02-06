import { nightOwl, vsDark } from "@code-surfer/themes";

export const theme1 = {
    ...vsDark,
    styles: {
        ...vsDark.styles,
        CodeSurfer: {
            ...vsDark.styles.CodeSurfer,
            title: vsDark.styles.CodeSurfer.subtitle,
            subtitle: vsDark.styles.CodeSurfer.title,
        }
    }
};

export const theme2 = {
    ...nightOwl,
    styles: {
        ...nightOwl.styles,
        CodeSurfer: {
            ...nightOwl.styles.CodeSurfer,
            title: nightOwl.styles.CodeSurfer.subtitle,
            subtitle: nightOwl.styles.CodeSurfer.title,
        }
    }
};
