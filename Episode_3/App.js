import React from "react"
import { createRoot } from 'react-dom/client';


// React.createElement => ReactElement => JS Object => render => HTML Element 

const heading=React.createElement(
    "h1",
    {id:"Heading"},
    "Hello World"
);

console.log(heading)
const root=createRoot(document.getElementById("root"));
root.render(heading);  // Here whatever existing content resides inside root will be replaced by heading.

//JSX => It is not HTML inside JS. It is a HTML or XML like Syntax.

// Nows lets create a H1 tag using JSX:

// JSX => Babel transpiles it to => React.createElement => ReactElement => JS Object => render => HTML Element 
const jsxHeading=<h1 id="heading" className="Main-Heading">Namaste React Using JSX...</h1> 


console.log(jsxHeading);
root.render(jsxHeading);

// Another Way of writing JSX :

const JSX_Heading1=(

    <h1 className="">
        Namaste React Using JSX...
    </h1>
)

// Another Way of Writing JSX:

const JSX_Heading2=(<h1 className="Heading"> Namaste React Using JSX...</h1>) 

// React Functional Component

const HeadingComponent=()=>{

    return(
        <div id="section">
             <h1 className="Heading">I am a Functional Component</h1>
        </div>
       
    )
}

const HeadingComponent2=()=>{
    return <h2>Hyy I am Dibyansh Sharma and I am a Full Stack Developer</h2>
}

// If you have only one line in your component than you don't even need to write return or put curly braces you can do it like this :

const HeadingComponent3=()=><h2>Hyy I am Dibyansh Sharma and I am a Full Stack Developer</h2>

const HeadingComponent4=()=>{<h2>Hyy I am Dibyansh Sharma and I am a Full Stack Developer</h2>}

// Component Composition

const Title=()=>{
    return(
        <div>
                   <HeadingComponent/>
                   {HeadingComponent()}
                  { /* Putting React Element inside React Component */}
                  {heading}
                   <h1>I am Dibyansh Sharma and I am a Full Stack Developer...</h1>
        </div>
        
    )
}
root.render(<Title></Title>)
