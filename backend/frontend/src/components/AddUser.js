import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [tipe, settipe] = useState("Pribadi"); //
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        text,
        tipe,
      });
      navigate("/userlist"); // arahkan ke userlist setelah tambah user
    } catch (error) {
      console.log(error);
    }
  };

  const addUserContainerStyle = {
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

  const saveButtonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const saveButtonHoverStyle = {
    backgroundColor: "#45a049",
  };

  return (
    <div style={addUserContainerStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#ddd" }}>Add New Note</h2>
        <form onSubmit={saveUser}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Name</label>
            <div style={{ control: "" }}>
              <input
                type="text"
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Note Title"
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
                placeholder="Write your note here"
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
                <option value="Pribadi">Pribadi</option>
                <option value="Kerja">Kerja</option>
                <option value="Lainnya">Lain-Lain</option>
              </select>
              <div style={selectArrowStyle}>&#9660;</div>
            </div>
          </div>
          <div style={fieldStyle}>
            <button
              type="submit"
              style={saveButtonStyle}
              onMouseOver={(e) => Object.assign(e.target.style, saveButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, saveButtonStyle)}
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;