import React from "react"
import { createRoot } from 'react-dom/client';

const NestedParent=React.createElement('div',{id:"parent"},[React.createElement('div',{id:"child 1"},[React.createElement("h1",{id:"heading"},"I am an H1 tag..."),React.createElement("h2",{id:"heading"},"I am an H2 tag...")]),React.createElement("div",{id:"child 2"},[React.createElement("h1",{id:"heading"},"I am an H1 tag..."),React.createElement("h2",{id:"heading"},"I am an heading 2")])]);

const root=createRoot(document.getElementById("root"));
root.render(NestedParent)


