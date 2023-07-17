import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../features/apiCall";
import {
  getAllPhoto,
  getPhotoError,
  getPhotoStatus,
} from "../features/SearchSlice";

export const HomePage = (props) => {
  const dispatch = useDispatch();
  let photoData = useSelector(getAllPhoto);
  const photoStatus = useSelector(getPhotoStatus);
  const photoError = useSelector(getPhotoError);

  useEffect(() => {
    if (photoStatus === "idle") {
      dispatch(getPhoto());
    }
  }, [photoStatus, dispatch, photoData]);

  let content = [];
  if (photoStatus === "loading") {
    content = "Loading";
  } else if (photoStatus === "fulfilled") {
    if (photoData) {
      if (!Array.isArray(photoData)) {
        photoData = photoData.results;
      }

      photoData.forEach((photo) => {
        const savedPhoto = {
          id: photo.id,
          description: photo.description,
          width: photo.width,
          height: photo.height,
          likes: photo.likes,
          urlsFull: photo.urls.full,
          urlsThumb: photo.urls.thumb,
          tags: photo.tags,
        };
        content.push(
          <>
            <Card photo={savedPhoto} />
          </>
        );
      });
    }
  } else {
    console.log(photoError);
  }

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section className="cardsContainer">{content}</section>

      <footer>{<Bottom />}</footer>
    </>
  );
};

export default HomePage;
