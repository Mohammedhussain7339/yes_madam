import React, { useState, useEffect } from "react";
import axios from "axios";

function Add_facility() {
  const [s_facility_Name, setName] = useState("");
  const [s_facility_Image, setImage] = useState(null);
  const [facilities, setFacilities] = useState([]); // Add this line
  const [loading, setLoading] = useState(true); // New loading state

  const onChangeName = (e) => setName(e.target.value);
  const onChangeImage = (e) => setImage(e.target.files[0]);

  useEffect(() => {
    fetchFacilities();
  }, [loading]);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/s_facilities"
      );
      setFacilities(response.data);
      setLoading(false); // Update loading state when data is fetched
      console.log(facilities);
    } catch (error) {
      console.error("Error fetching facilities:", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Facility Name:", s_facility_Name);

    const formData = new FormData();
    formData.append("s_facility_name", s_facility_Name);
    formData.append("s_facility_image", s_facility_Image);
    console.log(s_facility_Name, s_facility_Image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/s_facility",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);
      setName("");
      setImage(null);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <>
      <div>
        <h2>Add New Product</h2>
        <div>
          <label>Name: </label>
          <input type="text" value={s_facility_Name} onChange={onChangeName} />
        </div>
        <div>
          <label>Image: </label>
          <input type="file" onChange={onChangeImage} />
        </div>
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
      <div>
        <h2>Facility List</h2>
        {facilities.map((facility) => (
          <li key={facility._id}>
            <tr>
              <td>{facility.s_facility_Name}</td>
            </tr>
          </li>
        ))}
      </div>
    </>
  );
}

export default Add_facility;
