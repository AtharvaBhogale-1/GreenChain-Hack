import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import React from 'react'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Workflow() {
  const { name, id } = useParams();
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const fetchImages = async () => {
        const storageRef = ref(storage, `gs://jui-jagtap.appspot.com/${id}`);
        const imageList = await listAll(storageRef);

        const urls = await Promise.all(imageList.items.map(async (item) => {
          return getDownloadURL(item);
        }));

        setImages(urls);
        imageRefs.current = Array(urls.length).fill(null).map(() => React.createRef());
    };

    fetchImages();
  }, [id, storage]);

  return (
    <div className="text-center justify-center mt-[100px] md:mt-[160px] mx-auto max-w-[85%]">
      <h1 className='text-[30px] md:text-[75px] mb-20 font-fam-bold text-[#373737]'>{name}</h1>
      {images.map((image, index) => (
        <div key={index} ref={imageRefs.current[index]}>
          <img
            src={image}
            alt={`image-${index + 1}`}
            className={`image-section fade-in-img-y`}
          />
        </div>
      ))}
      {id === "2" ? (
        <div className='m-10 mb-20 text-center font-fam-bold text-[#173127] text-[30px] md:text-[60px]'>
          Stay Tuned!
        </div>
      ) : null}
    </div>
  );
}

export default Workflow;