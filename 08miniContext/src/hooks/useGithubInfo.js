import React from "react";
import { useState, useEffect } from "react";

function useGithubInfo(username) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [username]);
  console.log(data);
  return data;
}

export default useGithubInfo;
