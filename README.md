# React + Tailwind + Web Components

Component library that compiles React Components to custom HTML elements.

## Build + Integrate React Component Library
1. `yarn && yarn build`
2. Will generate assets in `build` folder
3. `yarn link`
4. In consumer React App run `yarn link "react-tw-webc"`
5. Import CSS file at root of react app usually `main.tsx` with `import react-tw-webc/build/style.css`
6. Import components where needed! `import {GDSButton} from 'react-tw-webc'`


## Build + Integrate  Web Components / Custom HTML Elements
1. `yarn build:wc`
2. Will generate assets in `build-wc` folder
3. Add the following inside `<head>`
```
<script type="module" src="path/to/build-wc/index.js"></script>
<link rel="stylesheet" href="path/to/build-wc/style.css">
<style>
      @font-face {
        font-family: 'Quicksand';
        src: url('path/to/build-wc/Quicksand.ttf') format('truetype');
      }

      @font-face {
        font-family: 'Libre Franklin';
        src: url('path/to/build-wc/LibreFranklin.ttf') format('truetype');
      }
</style>

```
5. Use components! 
```
<gds-button size="lg">
  Click Here
</gds-button>
```