import "./App.css";
import React from "react";
import "./index.css";
import {
  Footer,
  Footer2,
  Header,
  PhotoSection,
  Section,
  TextSection,
} from "./components";
import bodyData from "./data/bodyData";
import photoArticleData from "./data/photoArticleData";
import costsData from "./data/costsData";
import historyData from "./data/historyData";
import galleryData from "./data/galleryData";

const mapping = {
  photoSection: PhotoSection,
  textSection: TextSection,
};

function App() {
  return (
    <div className="App">
      <Header />

      <div className="flex flex-col gap-6 px-20 my-20 md:grid md:grid-cols-3 ">
        {bodyData.map((data, index) => {
          const ComponentType = mapping[data.component];
          return (
            <ComponentType
              title={data.title}
              body={data.body}
              textType={data.textType}
              logo={data.logo}
              className={`
                ${[0, 1].includes(index) && "col-span-3"}
                ${index === 3 && "col-span-2"} 
            `}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-6 px-20 my-20 md:flex-row">
        {photoArticleData.map((data) => {
          const ComponentType = mapping[data.component];
          return (
            <ComponentType
              title={data.title}
              body={data.body}
              textType={data.textType}
              logo={data.logo}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-6 px-20 my-20 md:grid md:grid-cols-3">
        {costsData.map((data, index) => {
          const ComponentType = mapping[data.component];
          return (
            <ComponentType
              title={data.title}
              body={data.body}
              textType={data.textType}
              logo={data.logo}
              className={`
                ${index === 1 && "col-span-2"}
                ${index === 0 && "col-span-3"} 
              `}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-6 px-20 my-20 md:flex-col">
        {historyData.map((data, index) => {
          const ComponentType = mapping[data.component];

          return (
            <ComponentType
              title={data.title}
              body={data.body}
              textType={data.textType}
              logo={data.logo}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-6 px-20 my-20 md:grid md:grid-cols-3">
        {galleryData.map((data, index) => {
          const ComponentType = mapping[data.component];
          return (
            <ComponentType
              title={data.title}
              body={data.body}
              textType={data.textType}
              logo={data.logo}
              className={`
                ${index === 0 && "col-span-1"}
                ${index === 3 && "col-span-1"} 
              `}
            />
          );
        })}
      </div>

      <Footer />
      <Section />
      <Footer2 />
    </div>
  );
}

export default App;
