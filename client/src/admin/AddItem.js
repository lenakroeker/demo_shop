import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { storage } from "../firebase";

const initialState = {
  name: "",
  description: "",
  image1URL: "",
  image2URL: "",
  image3URL: "",
  brand: "",
  sizeOS: 0,
  sizeXS: 0,
  sizeS: 0,
  sizeM: 0,
  sizeL: 0,
  sizeXL: 0,
  category: "",
  isUploading: false,
  progress: 0,
};

export const AddItem = () => {
  const history = useHistory();

  const [formData, setFormData] = useState(initialState);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);

  const [progress, setProgress] = useState(0);
  const [image1url, setImage1url] = useState(null);
  const [image2url, setImage2url] = useState(null);
  const [image3url, setImage3url] = useState(null);

  console.log(formData);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const postAd = () => {
    const basicData = {
      ...formData,
      image1URL: image1url,
      image2URL: image2url,
      image3URL: image3url,
      postId: uuidv4(),
    };
    console.log(basicData);
    fetch(`/posted`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(basicData),
    }).then(history.push(`/admin/home`));
  };

  const handleImg1Change = (e) => {
    if (e.target.files[0]) {
      setImage1(e.target.files[0]);
    }
  };
  const handleImg2Change = (e) => {
    if (e.target.files[0]) {
      setImage2(e.target.files[0]);
    }
  };
  const handleImg3Change = (e) => {
    if (e.target.files[0]) {
      setImage3(e.target.files[0]);
    }
  };

  // image uploads. couldn't figure out how conserve code on these, so 3 seperate upload functions. Revisit later

  const handleImgUpload1 = (event) => {
    event.preventDefault();
    const uploadTask = storage.ref(`images/${image1.name}`).put(image1);
    console.log(1);
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
          .ref("images")
          .child(image1.name)
          .getDownloadURL()
          .then((url) => {
            setImage1url(url);
          });
      }
    );
  };

  const handleImgUpload2 = (event) => {
    event.preventDefault();
    const uploadTask = storage.ref(`images/${image2.name}`).put(image2);
    console.log(1);
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
          .ref("images")
          .child(image2.name)
          .getDownloadURL()
          .then((url) => {
            setImage2url(url);
          });
      }
    );
  };

  const handleImgUpload3 = (event) => {
    event.preventDefault();
    const uploadTask = storage.ref(`images/${image3.name}`).put(image3);
    console.log(1);
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
          .ref("images")
          .child(image3.name)
          .getDownloadURL()
          .then((url) => {
            setImage3url(url);
          });
      }
    );
  };

  console.log(image1url);

  return (
    <Form>
      <Title>Create Post</Title>

      <Label htmlFor="Name">Name</Label>
      <Input
        type="text"
        name="Name"
        onChange={(ev) => handleChange(ev.target.value, "name")}
      />
      <Label htmlFor="description">Description</Label>
      <ContentBox
        type="text"
        name="description"
        rows="5"
        onChange={(ev) => handleChange(ev.target.value, "description")}
      />
      <Label htmlFor="brand">Brand</Label>
      <Input
        type="text"
        name="brand"
        onChange={(ev) => handleChange(ev.target.value, "brand")}
      />

      <Label>Image 1:</Label>
      <ImgDiv>
        <input type="file" onChange={handleImg1Change} />
        {image1url && <Img src={image1url} />}
        <progress value={progress} max="100" />
        <Upload onClick={handleImgUpload1}>Upload Chosen Image</Upload>
      </ImgDiv>
      <Label>Image 2:</Label>
      <ImgDiv>
        <input type="file" onChange={handleImg2Change} />
        {image2url && <Img src={image2url} />}
        <progress value={progress} max="100" />
        <Upload onClick={handleImgUpload2}>Upload Chosen Image</Upload>
      </ImgDiv>
      <Label>Image 3:</Label>
      <ImgDiv>
        <input type="file" onChange={handleImg3Change} />
        {image3url && <Img src={image3url} />}
        <progress value={progress} max="100" />
        <Upload onClick={handleImgUpload3}>Upload Chosen Image</Upload>
      </ImgDiv>

      <Label htmlFor="category">Category</Label>
      <Input
        type="text"
        name="category"
        onChange={(ev) => handleChange(ev.target.value, "category")}
      />

      <Label for="quantityos">One-Size:</Label>
      <Input
        onChange={(ev) => handleChange(ev.target.value, "sizeOS")}
        type="number"
        id="quantityos"
      />
      <Label for="quantityXs">X-Small:</Label>
      <Input
        onChange={(ev) => handleChange(ev.target.value, "sizeXS")}
        type="number"
        id="quantityXs"
      />
      <Label for="quantitySm">Small:</Label>
      <Input
        onChange={(ev) => handleChange(ev.target.value, "sizeS")}
        type="number"
        id="quantitySm"
      />
      <Label for="quantityMed">Medium:</Label>
      <Input
        onChange={(ev) => handleChange(ev.target.value, "sizeM")}
        type="number"
        id="quantityMed"
      />
      <Label for="quantityLg">Large:</Label>
      <Input
        onChange={(ev) => handleChange(ev.target.value, "sizeL")}
        type="number"
        id="quantityLg"
      />
      <Label for="quantityXl">X-Large:</Label>
      <Input
        onChange={(ev) => handleChange(ev.target.value, "sizeXL")}
        type="number"
        id="quantityXl"
      />

      <PostBtn onClick={postAd}>Create</PostBtn>
    </Form>
  );
};

const Form = styled.form`
  margin: 30px 10vw;
`;

const Title = styled.div`
  text-align: center;
  margin: 20px;
  font-size: 18px;
`;

const Label = styled.label`
  display: block;
  margin: 20px 10px 10px 10px;
`;

const Input = styled.input`
  display: block;
  margin: 10px 5px;
  height: 30px;
  padding: 8px;
  font-family: sans-serif;
  width: 95%;
  border: 1px solid black;
  &:focus,
  &:active {
    background-color: white;
  }
`;

const ContentBox = styled.textarea`
  display: block;
  border: 1px solid black;
  padding: 8px;
  font-family: sans-serif;
  margin: 10px 5px;
  width: 95%;
  &:focus {
    background-color: white;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  object-fit: cover;
  margin: 10px;
`;

const ImgDiv = styled.div`
  margin: 20px 10px 20px 10px;
`;

const Upload = styled.button`
  width: 75vw;
  margin: 10px auto 0px auto;
  background: blue;
  color: white;
`;

const PostBtn = styled.button`
  float: right;
  margin-bottom: 40px;
`;

export default AddItem;
