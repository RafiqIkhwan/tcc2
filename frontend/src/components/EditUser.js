import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [tipe, settipe] = useState("Personal");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Cek login di awal render
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    } else {
      getUserById();
    }
    // eslint-disable-next-line
  }, [navigate, id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        text,
        tipe,
      });
      navigate("/userlist");
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setName(response.data.name);
      setText(response.data.text);
      settipe(response.data.tipe);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const editUserContainerStyle = {
    backgroundColor: "#1e1e1e",
    color: "#f0f0f0",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const formContainerStyle = {
    backgroundColor: "#333",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    width: "80%",
    maxWidth: "600px",
  };

  const formTitleStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#ddd",
  };

  const fieldStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#bbb",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #555",
    borderRadius: "4px",
    backgroundColor: "#444",
    color: "#f0f0f0",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #555",
    borderRadius: "4px",
    backgroundColor: "#444",
    color: "#f0f0f0",
    boxSizing: "border-box",
    minHeight: "150px",
  };

  const selectContainerStyle = {
    position: "relative",
    display: "flex",
    width: "100%",
    borderRadius: "4px",
    backgroundColor: "#444",
    border: "1px solid #555",
    color: "#f0f0f0",
  };

  const selectStyle = {
    appearance: "none",
    flexGrow: 1,
    padding: "10px",
    border: "none",
    backgroundColor: "transparent",
    color: "#f0f0f0",
    cursor: "pointer",
  };

  const selectArrowStyle = {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#bbb",
  };

  const updateButtonStyle = {
    backgroundColor: "#007bff", // Warna biru yang umum untuk tombol update
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const updateButtonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={editUserContainerStyle}>
      <div style={formContainerStyle}>
        <h2 style={formTitleStyle}>Edit Note</h2>
        <form onSubmit={updateUser}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Title</label>
            <div style={{ control: "" }}>
              <input
                type="text"
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Note Title"
                required
              />
            </div>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Content</label>
            <div style={{ control: "" }}>
              <textarea
                style={textareaStyle}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Edit your note here"
              ></textarea>
            </div>
          </div>
          <div style={fieldStyle}>
            <label style={labelStyle}>Category</label>
            <div style={selectContainerStyle}>
              <select
                style={selectStyle}
                value={tipe}
                onChange={(e) => settipe(e.target.value)}
              >
                <option value="Personal">Pribadi</option>
                <option value="Work">Kerja</option>
                <option value="Other">Lain-Lain</option>
              </select>
              <div style={selectArrowStyle}>&#9660;</div>
            </div>
          </div>
          <div style={fieldStyle}>
            <button
              type="submit"
              style={updateButtonStyle}
              onMouseOver={(e) => Object.assign(e.target.style, updateButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, updateButtonStyle)}
            >
              Update Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;