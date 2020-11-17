import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import Form from "../components/Form";
import Table from "../components/Table";
import "../styles/MainPage.css";

function MainPage() {
  const APIUrl = "http://localhost:8080/https://impraise-shorty.herokuapp.com";

  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);

  const getUrlInput = (urlInput) => {
    setUrl(urlInput);
  };

  const handleClearHistory = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setUrls([]);
        Swal.fire(
          'Deleted!',
          'Your history has been deleted.',
          'success'
        )
      }
    })
  }

  useEffect(() => {
    if (url.length) {
      axios({
        method: "POST",
        url: `${APIUrl}/shorten`,
        data: {
          url,
        },
      })
        .then((response) => {
          setUrls((prevUrls) => prevUrls.concat(response.data.shortcode));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  return (
    <div className="container">
      <div className="mt-3 d-flex flex-row justify-content-between align-items-end">
        <h2 className="text-danger">
          <u>Shortify</u>
        </h2>
        <p className="text-muted">
          The link shortener with a long name
        </p>
      </div>
      <Form getUrlInput={getUrlInput} />
      <div className="mt-5 d-flex flex-row justify-content-between align-items-end">
        <h4 className="text-muted">Previously shortened by you</h4>
        <p className="text-danger" id="clear-history" onClick={handleClearHistory}>clear history</p>
      </div>
      <Table urls={urls} APIUrl={APIUrl} url={url} />
    </div>
  );
}

export default MainPage;
