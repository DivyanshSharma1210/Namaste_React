let heading=React.createElement("h1",{id:"Heading"},"Hello World Using React");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
// ReactElement(object)=> HTML(Browser Understands)
    console.log(heading); // Object

// Here it is the job of render  function is to take this heading object convert it into the H1 tag that the Browser understands and then put that inside the root.
   
// Suppose if you have to create a nested structure like this :

/*

<div id="parent">
<div id="child">
    <h1 id="heading">I am an H1 tag...</h1>
</div>
</div>
*/

// ReactElement(object)=> HTML(Browser Understands)
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"I am an H1 Tag")));

root.render(parent);

// Now suppose you have to create Siblings inside a Nested Structure so, how you gonna create Siblings in React:

/*

<div id="parent">
<div id="child">
    <h1 id="heading">I am an H1 tag...</h1>
    <h2 id="heading">I am an H2 tag...</h2>
</div>
</div>
*/

const Siblings=React.createElement("div",{id:'parent'},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},"I am an H1 tag..."),React.createElement("h2",{id:"heading"},"I am an H2 tag...")]));

root.render(Siblings)

// You can either pass one Children to it or if you want to pass more than one children or we can say that if you want to pass Siblings than you have to pass them inside array of different Childrens...

// Let's Create a more nested Structure:

/*

<div id="parent">
<div id="child 1">
    <h1 id="heading">I am an H1 tag...</h1>
    <h2 id="heading">I am an H2 tag...</h2>
</div>
<div id="child 2">
    <h1 id="heading">I am an H1 tag...</h1>
    <h2 id="heading">I am an H2 tag...</h2>
</div>
</div>
*/

const NestedParent=React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child 1"},[React.createElement("h1",{id:"heading"},"I am an H1 tag..."),React.createElement("h2",{id:"heading"},"I am an H2 tag...")]),React.createElement("div",{id:"child 2"},[React.createElement("h1",{id:"heading"},"I am an H1 tag..."),React.createElement("h2",{id:"heading"},"I am an heading 2")])]);

root.render(NestedParent)

// Now in order to create nested Structure like this usinh PURE React here, we are loosing Code Readability as well as its so difficult to debug if we have more complex Structure.

// This is Why there is something known as JSX that exists.

// JSX stands for JavaSript like XML...
