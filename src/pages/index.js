import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import localFont from "next/font/local";

const creationFont = localFont({
  src: "./Eina03-Regular.084ad9bd755c32a2.ttf",
});

const originalImages = [
  { id: 0, img: "/i1.png" },
  { id: 1, img: "/i2.png" },
  { id: 2, img: "/other1.png" },
  { id: 3, img: "/other2.png" },
  { id: 4, img: "/other3.png" },
];

const renderedAiImages = [
  { id: 5, img: "/o1.png" },
  { id: 6, img: "/o2.png" },
  { id: 7, img: "/o3.png" },
];

export default function Home() {
  const [renderedImages, setrenderedImages] = useState(originalImages);
  const [selectedImages, setselectedImages] = useState([]);
  const [toggleAiRendered, settoggleAiRendered] = useState(false);

  const findAndAddElementRendered = (selected_id) => {
    const findSelectedElement = renderedImages.find((image) => {
      return selected_id === image.id;
    });

    const addSelectedElement = renderedImages.filter((image) => {
      return selected_id !== image.id;
    });

    setselectedImages([...selectedImages, findSelectedElement]);
    setrenderedImages(addSelectedElement);
  };

  const findAndAddElementSelected = (selected_id) => {
    const findSelectedElement = selectedImages.find((image) => {
      return selected_id === image.id;
    });

    const addSelectedElement = selectedImages.filter((image) => {
      return selected_id !== image.id;
    });

    setrenderedImages([...renderedImages, findSelectedElement]);
    setselectedImages(addSelectedElement);
  };

  useEffect(() => {}, [selectedImages, renderedImages]);

  return (
    <div className={creationFont.className}>
      <Head>
        <title>Cre[ai]tion</title>
        <meta name="description" content="Cre[ai]tion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <>
          {/* <div className="block">
            {selectedImages.length !== 2 && (
              <div>
                <h1 className="button">Please select 2 images</h1>
              </div>
            )}
          </div> */}
          {!toggleAiRendered && (
            <>
              <div className="block">
                {selectedImages.length === 2 && (
                  <div className="grid">
                    <button
                      className="button"
                      onClick={() => {
                        settoggleAiRendered(!toggleAiRendered);
                      }}
                    >
                      Morph
                    </button>
                  </div>
                )}
                {selectedImages.length !== 2 && (
                  <div className="grid">
                    <button className="button">Please select 2 images</button>
                  </div>
                )}
              </div>
              <div className="grid-group">
                <div className="container">
                  <div className="rendered-images">
                    <div className="even-columns">
                      {renderedImages.map((image) => {
                        return (
                          <div
                            className="image-container"
                            key={image.id}
                            onClick={() => findAndAddElementRendered(image.id)}
                          >
                            <Image
                              className="grid-item"
                              src={image.img}
                              height={200}
                              width={200}
                              alt="image"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* {selectedImages.length === 0 ? (
                  <div className="grid none">
                    <div className="gallery">
                      <h1>Gallery</h1>
                      <p>Please select 2 images</p>
                    </div>
                  </div>
                ) : null} */}
                <div className="container">
                  <div className="even-columns">
                    {selectedImages.map((image) => {
                      return (
                        <div
                          className="grid-item-selected-container"
                          key={image.id}
                          onClick={() => findAndAddElementSelected(image.id)}
                        >
                          <Image
                            className="grid-item-selected"
                            src={image.img}
                            height={200}
                            width={200}
                            alt="image"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
          {toggleAiRendered && (
            <>
              <div className="block">
                {selectedImages.length === 2 && (
                  <div className="grid">
                    <button
                      className="button"
                      onClick={() => {
                        settoggleAiRendered(!toggleAiRendered);
                        setrenderedImages(originalImages);
                        setselectedImages([]);
                      }}
                    >
                      Re-Start
                    </button>
                  </div>
                )}
              </div>
              <div className="container">
                <div className="three-columns">
                  {renderedAiImages.map((image) => {
                    return (
                      <div key={image.id}>
                        <Image
                          className="grid-item"
                          src={image.img}
                          height={200}
                          width={200}
                          alt="image"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
