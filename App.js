 
 const parent = React.createElement("div",{id: "parent"},
 [
    React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"I,m H1 Tag"),
    React.createElement("h2",{},"I,m H2 Tag"),
    ]),
    React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"I,m H1 Tag"),
    React.createElement("h2",{},"I,m H2 Tag"),
 ])
 ]);
 
 
 /* const heading = React.createElement("h1", {id: "header"}, "Welcome To React world");
 
 <script>

   const heading = document.createElement("h1");
   heading.innerHTML=("Hello World Welcome Javascript");

   const root = document.getElementById("root");
   root.appendChild(heading);

</script>


 */

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);
