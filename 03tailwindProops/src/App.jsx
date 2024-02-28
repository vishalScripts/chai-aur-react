import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const product = [
    {
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
      name: "Mackbook",
    },
    {
      image:
        "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "HP",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dell",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Asus",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lenovo",
    },
    {
      image:
        "https://images.unsplash.com/photo-1693206578601-21cdc341d2c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNlciUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Acer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202222206-b75023c48f4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Samsung",
    },
  ];

  return (
    <>
      <h1 className="bg-orange-500 text-8xl text-white mb-6 rounded-lg">
        Laptops
      </h1>
      <div className="container flex gap-1 gap-y-5 flex-wrap">
        {/* <Card name={product[0].name} image={product[0].image} />
        <Card name={product[1].name} image={product[1].image} /> */}
        {product.map((p) => {
          return <Card name={p.name} image={p.image} />;
        })}
      </div>
    </>
  );
}

export default App;
