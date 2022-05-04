import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledAppComponent = styled.div`
  color: black;
  display: flex;
  .App {
    margin: auto;
  }
  h4,
  p {
    font-size: 22px;
    color: white;
  }
`;

let index = 0;
const getKey = (name) => {
  let key = name + ++index;
  return key;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get("https://api.tvmaze.com/shows");
      setPosts(response.data);
      setLoading(false);
    };
    loadPost();
  }, []);

  return (
    <StyledAppComponent key={getKey("style")}>
      <div className="App">
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          posts.map((item) => <h4 key={getKey("h4")}>{item.name}</h4>)
        )}
      </div>
    </StyledAppComponent>
  );
}

export default App;
