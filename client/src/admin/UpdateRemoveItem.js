import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

export const EditItem = () => {
  const history = useHistory();
  const [item, setItem] = useState();
  const [formData, setFormData] = useState();
  const params = useParams();
  const itemId = params.itemid;

  console.log(formData);

  //get item data

  useEffect(() => {
    fetch(`/posts/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.item);
      });
  }, []);

  // update form on input

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  //delete item from database

  const handleDelete = () => {
    fetch(`/delete/${itemId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.alert(`item ${itemId} has been deleted`);
      })
      .then(history.push(`/admin/home`));
  };

  // update item in database

  const handleUpdate = () => {
    fetch(`update/${itemId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .then(history.push(`/admin/home`));
  };

  return (
    <Wrapper>
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
        {/* <Label>Image 1:</Label>
        <ImgDiv>
          <input type="file" onChange={handleImgChange} />
          {image1url && <Img src={image1url} />}
          <progress value={progress} max="100" />
          <Upload onClick={handleImgUpload1}>Upload Chosen Image</Upload>
        </ImgDiv>
        <Label>Image 2:</Label>
        <ImgDiv>
          <input type="file" onChange={handleImgChange} />
          {image2url && <Img src={image2url} />}
          <progress value={progress} max="100" />
          <Upload onClick={handleImgUpload2}>Upload Chosen Image</Upload>
        </ImgDiv>
        <Label>Image 3:</Label>
        <ImgDiv>
          <input type="file" onChange={handleImgChange} />
          {image3url && <Img src={image3url} />}
          <progress value={progress} max="100" />
          <Upload onClick={handleImgUpload3}>Upload Chosen Image</Upload>
        </ImgDiv> */}
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
        <UpdateButton
          onClick={() => {
            handleUpdate();
          }}
        >
          Update
        </UpdateButton>
        <DeleteButton
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </DeleteButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px 10vw;
`;

const Title = styled.div``;

const Form = styled.div``;

const ContentBox = styled.textarea``;

const Label = styled.label``;

const Input = styled.input``;

const UpdateButton = styled.button``;

const DeleteButton = styled.button``;

const Img = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  object-fit: cover;
  margin: 20px auto;
`;

export default EditItem;
