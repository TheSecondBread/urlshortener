import { createContext, useState } from "react";

export const LinkContext = createContext({
  Sendlink: () => {},
});

function ContextProvider({ children }) {
  const [currUrl, SetUrl] = useState("<=url will generate here=>");
  const Sendlink = (link) => {
    // console.log(link.current.value);
    // link.current.value = "";

    const data = {
      link: link.current.value,
    };

    // Convert the data to JSON format
    const jsonData = JSON.stringify(data);

    // Set up the Fetch request
    fetch("http://localhost:8080/api/link", {
      method: "POST", // or 'PUT', 'GET', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: jsonData, // Include the JSON data in the body
    })
      .then((response) => {
        // Handle the response
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        // Do something with the JSON data returned by the server
        SetUrl("http://localhost:8080/"+data.url);
        // console.log(url);
        console.log(currUrl);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch
        console.error("Fetch error:", error);
      });
  };
  return (
    <LinkContext.Provider value={{ Sendlink,currUrl }}>{children}</LinkContext.Provider>
  );
}
export default ContextProvider;
