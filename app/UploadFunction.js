import React from "react";
import { storage } from "@app/firebase";

export default async function uploadFunction({
  image,
  setProgress,
  setImgUrl,
}) {
  const uploadTask = storage.ref(`images/uploads/${image?.name}`).put(image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      storage
        .ref("images/uploads")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          setImgUrl(url);
        });
    }
  );
}
