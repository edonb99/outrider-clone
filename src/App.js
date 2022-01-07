import "./App.css";
import React from "react";
import "./index.css";
import {
  Footer,
  Footer2,
  Header,
  Navbar,
  PhotoSection,
  Section,
  TextSection,
} from "./components";
import bodyData from "./data/bodyData";
import photoArticleData from "./data/photoArticleData";
import costsData from "./data/costsData";
import historyData from "./data/historyData";
import galleryData from "./data/galleryData";
import { data } from "autoprefixer";

const mapping = {
  photoSection: PhotoSection,
  textSection: TextSection,
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div className="flex flex-col gap-6 px-20 my-20 md:grid md:grid-cols-3 ">
        <TextSection
          title={bodyData[0].title}
          body={bodyData[0].body}
          logo={data.logo}
          textType={data.textType}
          className="col-span-3"
        />

        <PhotoSection
          title={bodyData[1].title}
          textType={bodyData[3].textType}
          logo={bodyData[1].logo}
          className="col-span-3"
        />
        <TextSection
          title={bodyData[2].title}
          body={bodyData[2].body}
          logo={data.logo}
          textType={data.textType}
          className="col-span-1"
        />
        <PhotoSection
          title={bodyData[3].title}
          textType={bodyData[3].textType}
          logo={bodyData[3].logo}
          className="col-span-2"
        />
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

      <div className="flex flex-col gap-6 px-20 my-20 md:grid md:grid-cols-3 ">
        <TextSection
          title={costsData[0].title}
          body={costsData[0].body}
          logo={data.logo}
          textType={data.textType}
          className="col-span-3"
        />

        <PhotoSection
          title={costsData[1].title}
          textType={costsData[1].textType}
          logo={costsData[1].logo}
          className="col-span-2"
        />
        <PhotoSection
          title={costsData[2].title}
          textType={costsData[2].textType}
          logo={costsData[2].logo}
          className="col-span-1"
        />
        <PhotoSection
          title={costsData[3].title}
          textType={costsData[3].textType}
          logo={costsData[3].logo}
          className="col-span-1"
        />
        <PhotoSection
          title={costsData[4].title}
          textType={costsData[4].textType}
          logo={costsData[4].logo}
          className="col-span-1"
        />
        <PhotoSection
          title={costsData[5].title}
          textType={costsData[5].textType}
          logo={costsData[5].logo}
          className="col-span-1"
        />
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
