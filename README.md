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

- content array takes the path of all the files where html can be used ex: "./src/\*_/_.{html,js,ts,jsx,tsx}",
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

Accordian: Collapse and show
Title is a span: ?

margin-auto: if parent has text center than this element will come in center
width: 6/12 only half of the total width will be assigned to the element
items sticking together so: mx-auton and my-4 upeer and bottom will be asigned
flex + justify-between: keep one item left another in rightmost and one in center

If alignment of two items of div is problematic (images are not of uniform size), give
width to each (content and image ex: 9/12 and 3/12) this will fix the issue

label: absolute will overlap on the image

Controlled Component and Uncontrolled Component: Controlled from the parent, when children does not have it's own state but state is passed from the parent: This is also called Lifting the state up

_Creating Context(global data)_: Advisable when multiple components are using same data and prop drilling is occuring:
const UserContext = CreateContext({loggedInUser: 'Default user'});
export default UserContext;

_Using context:_

- Functional Components: const {loggedInUser} = useContext(UserContext)
- classBased Components(No hooks): <UserContext.Consumer> {(data)=>{console.log(data)}}</UserContext.Consumer>

_Changing the value of a context from a place_
Basically from app level lets say you have to use a value of logged in user i.e for all the inside components when you ask for data from usercontext you want to give the loggedInUser not the default one.

For this:
At app level-

1. import UserContext
2. Make a state variable of the data you want to update in context
3. useEffect -> Api call for getting auth data, setUserName got from the username
4. Wrap whole App(div) inside <UserContext.Provider value={{loggedInUser: username}}> <div>App here</div></UserContext.Provider>

Note: Whatever you wrap in <UserContext.Provider> will get the updated data rest will get the old value
Done :)

Global space, different for diffrent parts, can create multiple contexts.
Generally when we have to access something in whole app we wrap whole app inside UserContext.Provider

Nested Provider ?
Yes closed value of context set to the component will be provided for the component
Dont provide => default value

Episode 12- Let's build our store

# Redux-Toolkit: 
- Use to manage state
- Redux is not mandatory
- Use Redux wisely and when it is required
- React and Redux are different
- To use redux the application doesn't need to be react application
- Two libraries offered: React-Redux and Redux Toolkit(newer way of writing redux)
- Another option is zustand for state management

why use ?
- when building large scare application, redux offers many functionality which eases the process of state management
- Application become easier to debug

# Steps:
- Install @reduxjs/toolkit react-redux
- Build our store
- Connect our store to the app
- Create a cart slice to add items to the cart
- Dispatch Action
- Read the selector

# Note (very important): 
1.  When using useSelector and subscribing to the store, you need to subscribe to the exact portion of the store
const store = useSelector((store)=> store) // subscrbing to whole store
const items = store.cart.items
// Anything changes in store store changes, we are not concerned about that, so subscribe only to the portion of the store that is important to our component

// This cause a lot of performance issues 

You should use: 
Very Efficient- 
const items = useSelector((store)=> store.cart.items) // subscrbing to whole store

2. AppStore has 'reducer' and slice has 'reducers'

- a reducer is a combination of small reducers
A app store is combination of cartReducer, 
A cart reducer is a combination of small reducers in cart ex: add to cart, clear cart etc

Immer is used by redux behind the scenes

3. 
