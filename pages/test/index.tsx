import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [image, setImage] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random", {
        method: "GET",
      });
      const data = await res.json();
      setImage(data.message);
    };
    fetchData();
  }, []);
  console.log(image);
  return <div>index</div>;
};

export default TestPage;
