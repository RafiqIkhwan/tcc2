import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate

const UserList = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate(); // Inisialisasi navigate

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const userListContainerStyle = {
    backgroundColor: "#1e1e1e",
    color: "#f0f0f0",
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const userListWrapperStyle = {
    width: "80%",
    maxWidth: "1200px",
  };

  const addButtonLinkStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    borderRadius: "4px",
    textDecoration: "none",
    marginBottom: "20px",
    display: "inline-block",
    transition: "background-color 0.3s ease",
  };

  const addButtonLinkHoverStyle = {
    backgroundColor: "#45a049",
  };

  const cardStyle = {
    backgroundColor: "#333",
    color: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    marginBottom: "20px",
    width: "300px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
  };

  const cardContentStyle = {
    padding: "15px",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
  };

  const cardTitleStyle = {
    color: "#ddd",
    marginBottom: "10px",
    fontSize: "1.2em",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const cardSubtitleContainerStyle = {
    overflow: "auto",
    maxHeight: "120px", // Sesuaikan tinggi maksimal sesuai kebutuhan
    padding: "10px",
    marginBottom: "10px",
    flexGrow: "1", // Biarkan subtitle container tumbuh
  };

  const cardSubtitleStyle = {
    color: "#bbb",
    whiteSpace: "pre-line",
    fontSize: "0.9em",
  };

  const cardtipeStyle = {
    color: "#ccc",
    marginTop: "auto", // Posisikan tipe di bagian bawah card content
    fontSize: "0.8em",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const cardFooterStyle = {
    backgroundColor: "#444",
    borderTop: "1px solid #555",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const cardFooterItemLinkStyle = {
    color: "#a7f3d0",
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontSize: "0.9em",
  };

  const cardFooterItemLinkHoverStyle = {
    color: "#86efac",
  };

  const deleteButtonStyle = {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.8em",
    transition: "background-color 0.3s ease",
  };

  const deleteButtonHoverStyle = {
    backgroundColor: "#d32f2f",
  };

  return (
    <div style={userListContainerStyle}>
      <div style={userListWrapperStyle}>
        {/* Tambahkan header di sini */}
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "25px", letterSpacing: "2px" }}>
          MY NOTES
        </h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <Link
            to={`add`}
            style={addButtonLinkStyle}
            onMouseOver={(e) =>
              Object.assign(e.target.style, addButtonLinkHoverStyle)
            }
            onMouseOut={(e) => Object.assign(e.target.style, addButtonLinkStyle)}
          >
            Add New
          </Link>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#f44336",
              color: "white",
              padding: "10px 15px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              marginLeft: "10px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={e => e.target.style.backgroundColor = "#d32f2f"}
            onMouseOut={e => e.target.style.backgroundColor = "#f44336"}
          >
            Logout
          </button>
        </div>
        <div className="columns is-multiline">
          {users.map((user, index) => (
            <div key={user.id} className="column is-one-third">
              <div style={cardStyle} className="card">
                <div style={cardContentStyle} className="card-content">
                  <p style={cardTitleStyle} className="title is-5">
                    {user.name}
                  </p>
                  <div style={cardSubtitleContainerStyle}>
                    <p style={cardSubtitleStyle} className="subtitle is-6">
                      {user.text}
                    </p>
                  </div>
                  <p style={cardtipeStyle}>{user.tipe}</p>
                </div>
                <footer style={cardFooterStyle} className="card-footer">
                  <Link
                    to={`edit/${user.id}`}
                    style={cardFooterItemLinkStyle}
                    onMouseOver={(e) =>
                      Object.assign(
                        e.target.style,
                        cardFooterItemLinkHoverStyle
                      )
                    }
                    onMouseOut={(e) =>
                      Object.assign(e.target.style, cardFooterItemLinkStyle)
                    }
                    className="card-footer-item"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    style={deleteButtonStyle}
                    onMouseOver={(e) =>
                      Object.assign(e.target.style, deleteButtonHoverStyle)
                    }
                    onMouseOut={(e) =>
                      Object.assign(e.target.style, deleteButtonStyle)
                    }
                    className="card-footer-item"
                  >
                    Delete
                  </button>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
