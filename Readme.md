# Episode 3

- What is `JSX`?

=> `JSX` is a convention where we tries to merge `HTML` and `JavaScript` together. It is not HTML. It is basically a HTML like Syntax.

=> `JSX` is not HTML inside JavaScript. They both are different.

=> Writing code using `Pure React` is not developer friendly. That's why facebook developers created JSX which is Developer friendly. 


// Nows lets create a H1 tag using JSX:

const jsxHeading=<h1 id="heading">Namaste React Using JSX...</h1> 

 # Here jsxHeading is not a valid JavaScript because our JS Engine does not understand JSX or HTML. 

 # Here, JSX gets transpiled before it reaches to the JS Engine.

#  JSX  => Gets Transpiled by `Babel` to  => React.createElement =>ReactElement => JS Object => Render => HtmlElement

# As we know that if you want to give class  to any HTMl element in HTML we do something like this:

   `<h1 class='heading'>Hello World</h1>` => but this doesn't works on `JSX`.

# In `JSX` we give class like this :

 `const jsxHeading=<h1 id="heading" className="Top-Heading">Namaste React Using JSX...</h1> `


# Notes:

 `const jsxHeading=<h1 id="heading" className="Top-Heading">Namaste React Using JSX...</h1> `

 - If your `JSX` is in Single line than this is the perfect valid index.

 - BUt in case you want to write your `JSX` into multiple lines than in that case you have to write like this :

 `const JSX_Heading=(

    <h1 className="">
        Namaste React Using JSX...
    </h1>
)` 

                                                OR

const JSX_Heading=(<h1 className="Heading"> Namaste React Using JSX...</h1>)

# Here the question is  why we need to put it inside () parenthesis the answer is very simple beacuse `Babel` gets to know from where it needs to start Transpiling and to where the code needs transpilation.

-------------------------------------------------------------------------------------------------------------------

# React Components:

- In React we have two types of `Components` :

1. Functional Components => New way of writing Components.
2. Class Based Components => Old way of wrting Components.

# Functional Component is just a simple JavaScript function which returns some piece of `JSX`.

- Name of any Functional Component must start with Capital letters.

# We can render in different forms :

1. <Component/>
2. <Component></Component>

# Component Composition => It is simply rendering a `Component` inside another `Component` is known as `Component Composition`.

- Example :

// Component Composition

const Title=()=>{
    return(
        <div>
                   <HeadingComponent/> // Rendering `HeadingComponent` inside `Title`.
                   <h1>I am Dibyansh Sharma and I am a Full Stack Developer...</h1>
        </div>
        
    )
}

###################################################################################################################

# If you put `{}` curly braces inside `JSX` then you can put any valid `JavaScript Expression inside it`.

Exmaple:

# const Title=()=>{
    return(
        <div>
                   <HeadingComponent/>
                   {20*5}                 // `JSX Curlies`
                   <h1>I am Dibyansh Sharma and I am a Full Stack Developer...</h1>
        </div>
        
    )
}


-------------------------------------------------------------------------------------------------------------------

# How `JSX` prevents `Cross-Site Scripting`

Alright, let's dive into it —  
JSX (JavaScript XML) **helps prevent Cross-Site Scripting (XSS) attacks** mainly through **automatic escaping** of values.

Here's how it works:

- When you embed variables inside JSX like `{userInput}`, **React automatically escapes** any potentially dangerous characters (`<`, `>`, `"`, `'`, etc.).
- Instead of inserting raw HTML that could include malicious scripts, React converts those characters into their **safe equivalents** (for example, `<` becomes `&lt;`, `>` becomes `&gt;`, etc.).
- As a result, user input is treated as **plain text**, **not executable code**.

---
For example:  
```jsx
const userInput = "<script>alert('Hacked!')</script>";

function App() {
  return <div>{userInput}</div>;
}
```
👉 What appears on the web page is literally:
```html
<div>&lt;script&gt;alert('Hacked!')&lt;/script&gt;</div>
```
NOT an actual running script.  
**Thus, JSX prevents XSS attacks automatically!** ✅

---
⚡ Important Note:  
If you manually use `dangerouslySetInnerHTML` in React, then **you** are responsible for making sure the HTML is safe, because React will not escape it.

```jsx
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```
Here, if `userInput` is not sanitized, **XSS is possible**.

---

