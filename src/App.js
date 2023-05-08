import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "dkfjaslf",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "fafdas",
      label: "Can I use Javascript on a project?",
      content:
        "You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.",
    },
    {
      id: "fdsafas",
      label: "Can I use Python on a project?",
      content:
        "You can use Python on any project you want. You can use Python on any project you want. You can use Python on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
