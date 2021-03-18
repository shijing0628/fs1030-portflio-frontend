import React, { useEffect, useState } from "react";
import "./GalleryImages.css";
import { Container } from "@material-ui/core";
import axios from "axios";
import InputSearch from "../InputSearch/InputSearch";
import ImageList from "../ImageList/ImageList";
import { CircularProgress } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core/styles";

const MyPagination = withStyles({
  root: {
    "& .MuiPaginationItem-root": {
      color: "grey",
    },
    "& .MuiInput-root": {
      color: "grey",
    },
  },
})(Pagination);

//https://unsplash.com/documentation#search-photos

function GalleryImages() {
  const [photos, setPhotos] = useState();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState("");
  const [page, setPage] = useState(1);
  const api = process.env.REACT_APP_API_KEY;

  const fetchData = async (input, page) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${
        !input ? "painting" : input
      }&client_id=${api}&per_page=20`
    );

    const data = await res.data;
    setPhotos(data);
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(formData);
  };

  const pageChange = (e, value) => {
    setPage(value);
    fetchData(formData, value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <div className="loading">
        <h1>
          <CircularProgress size={60} color="primary" />
        </h1>
      </div>
    );

  return (
    <Container>
      <h1 className="gallery-image-title">Find Your Favorite Paintings</h1>
      <InputSearch change={handleChange} submit={handleSubmit} />
      <br></br>
      <ImageList photos={photos.results} />
      <br></br>
      <div className="pagination-images">
        <MyPagination
          count={10}
          variant="outlined"
          shape="rounded"
          color="secondary"
          onChange={pageChange}
          page={page}
        />
      </div>
    </Container>
  );
}

export default GalleryImages;
