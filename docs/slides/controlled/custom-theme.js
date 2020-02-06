import { nightOwl, vsDark } from "@code-surfer/themes";

export const theme1 = {
  ...vsDark,
  styles: {
    ...vsDark.styles,
    CodeSurfer: {
      ...vsDark.styles.CodeSurfer,
      subtitle: vsDark.styles.CodeSurfer.title,
      title: {
        ...vsDark.styles.CodeSurfer.subtitle,
        background:
          "linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.9) 75%, rgba(10,10,10,0) 100%)",
      }
    }
  }
};

export const theme2 = {
  ...nightOwl,
  styles: {
    ...nightOwl.styles,
    CodeSurfer: {
      ...nightOwl.styles.CodeSurfer,
      subtitle: nightOwl.styles.CodeSurfer.title,
      title: {
        ...nightOwl.styles.CodeSurfer.subtitle,
        background:
          "linear-gradient(180deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.9) 75%, rgba(10,10,10,0) 100%)",
      }
    }
  }
};
