-  What is `NPM`? 

# NPM is everything but not a `Node Package Manager`.
# NPM do manages packages but It doesn't stand for  `Node Package Manager`.

- What is `npm init` and does it do?
- What is `package.json`?
- What are `Dependencies`?
- What are `Transitive Dependencies`?
- What is `Semantic Versioning`?
- What is a `Bundler`?
- Why we use `Bundlers` ?
- What are `Webpacks`?
- `npm i -D parcel` => What is this `-D`?
- Difference between `Dev Dependencies and Normal Dependencies`?
- What is `package-lock.json`?
- Difference between `^` and  `~` in Versioning?
- What are `node_modules` and what it contains or What is inside `node_modules`?
- Should we push our `node_modules` folder to `git` or not?
- Should we push our `package.json` or `package-lock.json` to `git` if Yes then Why?
- What is `npx` and what's the use case of `npx`?
- Difference between `npm` and `npx`?
- Why we prefer using `react as a Dependency` rather than `CDNs`?


# CDN links are not the best way or we can say that it's not the comes under Best practices to involve `React` in our Project using `CDN links`...

=> There are Two types of Dependencies that an APP can have :
 
- `Dev Dependencies` =>These dependencies are generally required in a Development phase.
- `Normal Dependencies` => These are used in Production also.

# What `Parcel` does behind the scenes:

- Dev Build
- Local Server
- HMR (`Hot Module Replacement`)
- It uses a `File Watching Algorithm` => which is written in C++.
- It gives us Faster Development by using `Caching`.
- As we know that the most costly operation in webpage is loading Images. And guess what `Parcel` do Image Optimization for us if we have images in our Webpage.
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support Older Browsers.
- Diagnostics
- Better Error Handling
- It also gives us the way to `host` our App on `HTTPS`.
- Reliable Caching
- Tree Shaking => It will remove unused code for us.
- Transpilation
- Different `dev` and `prod` builds?

# To Create a prod build use this command:

   `npx parcel build index.html`

# It will put all the `prod and dev` build files inside `dist` folder.

# Any code that you can automaticaly generated you don't need to push that code to `Github`.

# What is the use case of `browserlist`?


##########################################################################################

# Parcel Documentation link: `https://parceljs.org/`
# To Configure browserslist use this website: `https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z`
