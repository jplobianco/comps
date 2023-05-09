import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "abc",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "def",
      label: "Can I use Javascript on a project?",
      content:
        "You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.",
    },
    {
      id: "ghi",
      label: "Can I use Python on a project?",
      content:
        "You can use Python on any project you want. You can use Python on any project you want. You can use Python on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
