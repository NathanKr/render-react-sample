import axios from "axios";
import { useState } from "react";

function getServerUrl() {
  if (process.env.NODE_ENV == "production") {
    return "https://render-express-sample.onrender.com";
  }

  return "http://localhost:5000";
}

function App() {
  const [data, setData] = useState();

  async function getDataGromServer() {
    const url = `${getServerUrl()}/api/time`;
    try {
      const res = await axios.get(url);
      setData(await res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={getDataGromServer}>Get time from server</button>
      <p>time from server : {data}</p>
    </div>
  );
}

export default App;
