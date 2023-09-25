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



----------------------------------------------------------------
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

--------------------------------------------------------------------

# Episode 10: Jo dikhta hai wo bikta hai 
a.  sass : not used
b.  scss: not used


c. Styled components: used 

d. Frameworks:(css libraries and framework)
1. Material UI- React componet library [Very much used]
They export components which are already beautiful
Instead of using our own button we use their button 

2. BottStrap library
3. Chakra UI
4. Ant design : World second most popular library

Tailwind CSS: [Trending Today]
- 



