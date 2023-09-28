# namaste-react

_Best practice:_
Keep each component in separate files
Keep everything in src file
Any file should not be more than 100 lines

_Exports:_
Default: export default Component | import Component from "path"
Named Export: export const Component | import {Component} from "path"

// multiple exports: Named export

_React Hooks_
(Normal utility JS, functions written inside react script by Facebook Developer)

- useState(): Super powerful react variables
- useEffect()

---

# Optimizing the app

1. Break components in smallers components
2. Single file for all the components is not suitables
3. Make smallers bundels of files: Chunking/ Code splitting/ Dynamic Bundling/ Lazy loading/ On Demand loading/ Dynamic importing
   App is bloating / bundle is more => CHunking /code splitting

How to make and when to make smaller bundles:

- A bundle should have enough code for a feature
  . Flight
  . HomeStay
  . Package
  . Trains

So that the js file for a single bundle is not so large that it takes a long time to load into the browser

Lets say we have another business of grocerry along with the food delivery service

then: Grocery component has a lot of child components
header has Grocery button -> link to /grocery route-> /grocery route load grocery component

now we don't import grocery from the grocery component but from the lazy loading
-> when app homepage is loaded grocery code is not loaded
-> when we go to /grocery then only grocery code will come

Syntax:
const Grocerry = lazy(()=>{
import('../Grocery')
})

grocerry code was not there so throws error (when fetching error), react is very fast
To handle this state between we use suspence: component given to us by react we wrap the grocerry component while using we wrap grocerry component in suspence component with a fallback given fallback={another loading component}

---

# Episode 10: Jo dikhta hai wo bikta hai

a. sass : not used
b. scss: not used

c. Styled components: used

d. Frameworks:(css libraries and framework)

1. Material UI- React componet library [Very much used]
   They export components which are already beautiful
   Instead of using our own button we use their button

2. BottStrap library
3. Chakra UI
4. Ant design : World second most popular library

Tailwind CSS: [Trending Today]

- postcss: tool for transforming css to javascript(used behind the scenes by the postcss library)
- npx tailwind css init
- because we are using parcel, it uses postcssrc to understand what is written in tailwind so we specify it in .postcssrc file

- That's all we need for postcss

Tailwind.config.js(modification)
- content array takes the path of all the files where html can be used ex: "./src/**/*.{html,js,ts,jsx,tsx}",
in html, js, ts, jsx and tsx files tailwind can be used.

import css from tailwind css in css file:
@tailwind base;
@tailwind components;
@tailwind utilities;


Using tailwind
- Tailwind css gives you classname for every css that u want to write
  ex: background: red Directly use:
  width increase: use classname directly
  1. flex: keep item side by side
  2. w-8: specify width
  3. flex- horizontallly bring all items + items: center bring them vertically at the center 

  An element will take width of the parent if not wrapped in a div

  rounded-lg: Round corner buttons
  w-[400px]: Dynamic classes, If certain size not present
  

  flex + justify-center: Align items in ceter
  rounded -lg : make image corener rounded


  control+spacebar: starts giving suggestions

  small size tailwind: light weight + use only classes that are used, m-4 used 10 times will only import once 
  