import axios from "axios";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  async function getData() {
    const response = await axios("http://localhost:3001/getMessage");
    setMessage(response.data.message);
    console.log(response.data.message);
  }
  getData();

  return <div>{message}</div>;
}
