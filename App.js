const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
