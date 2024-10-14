import React, { useState } from "react";
import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import { FaPhoneAlt, FaAddressBook, FaRegFileCode } from "react-icons/fa";
import MessageNav from "../MessageNav";
import { MdEmail, MdDateRange } from "react-icons/md";
import { chatMessages, messageList } from "./data";

const Navbar = () => {
  const [selectedChat, setSelectedChat] = useState({
    name: "Tina Doe",
    position: "HHA/PCA",
    assignedHours: "15 hours/week",
    summary: [
      "Patient Care",
      "Medication Admin",
      "Daily Assistance",
      "First Aid Certified",
      "Good Communicator",
    ],
  });

  const [messages, setMessages] = useState(chatMessages["Tina Doe"]);
  const [newMessage, setNewMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSend = () => {
    if (newMessage) {
      setMessages([...messages, { text: newMessage, type: "sent" }]);
      setNewMessage("");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter messages based on search query
  const filteredMessages = messageList.filter((msg) =>
    msg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="main-container">
        {/* ------- Navbar  ----- */}
        <div className="nav">
          <div className="heading-container">
            <h2>Caregiver</h2>
            <h2>Companies</h2>
            <h2>Task</h2>
            <h2>Message</h2>
          </div>
          <div className="button-container">
            <button className="nav-button">+ New Caregivers</button>
            <button className="nav-button">+ New Companies</button>
          </div>
        </div>

        {/* -------- message navbar ------- */}
        <MessageNav />

        <div className="container">
          {/* Sidebar */}
          {/* <div className="sidebar">
        <h1>Carelink AI</h1>
        <nav>
          <ul>
            <li>Caregivers</li>
            <li>Campaigns</li>
            <li>Tasks</li>
            <li>Messages</li>
          </ul>
        </nav>
      </div> */}
          <div className="message-list">
            <div className="header">
              <input
                type="text"
                placeholder="Search Messages"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="filter-btn">Filter</button>
            </div>
            <ul className="messages">
              {filteredMessages.map((msg, index) => (
                <li
                  key={index}
                  className={`message-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedChat({
                      name: msg.name,
                      position: "HHA/PCA",
                      assignedHours: "15 hours/week",
                      summary: [
                        "2 missed days",
                        "Completed training",
                        "Certified HHA",
                      ],
                    });
                    setMessages(chatMessages[msg.name]);
                    setActiveIndex(index);
                  }}
                >
                  <img src={avatar} alt="Avatar" className="avatar" />
                  <div className="msg-section">
                    <span className="name">{msg.name}</span>
                    <span className="preview">{msg.preview}</span>
                  </div>
                  <div className="time-wrapper">
                    <span className="time">{msg.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Area */}
          <div className="chat-area">
            <div className="chat-header">
              <h2>
                Chat with{" "}
                <span style={{ fontWeight: 700, fontSize: "24px" }}>
                  {selectedChat.name}
                </span>
              </h2>
            </div>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div className={`message ${msg.type}`} key={index}>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <textarea
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>
              <button onClick={handleSend}>Send</button>
            </div>
          </div>

          {/* Caregiver Info  -------*/}
          {/* ------- Caregiver Info  --------- */}
          <div className="caregiver-info">
            <div className="profile-section">
              <img src={avatar} alt="Avatar" className="avatar" />
              <div className="msg-section">
                <span className="profile-name">{selectedChat.name}</span>
                <p>Position: {selectedChat.position}</p>
              </div>
            </div>

            <p>Assigned HR: {selectedChat.assignedHours}</p>
            <p className="primary-language">
              Primary Language:{" "}
              <select className="dropdown-lang">
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option1">English</option>
                <option value="option2">Hindi</option>
              </select>
            </p>
            <p className="employment-status">
              Employment Status:{" "}
              <select className="dropdown-lang">
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
                <option value="self-employed">Self-Employed</option>
              </select>
            </p>

            <div className="summary">
              <h4>Caregiver Summary</h4>
              <ul>
                {selectedChat.summary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Alternate Activities Section */}
            <div className="alternate-activities">
              <h4>Alternate Activities</h4>
              <ul>
                <li>
                  <FaPhoneAlt /> Phone #
                  <input type="tel" placeholder="Enter phone number" />
                </li>
                <li>
                  <MdEmail /> Email
                  <input type="email" placeholder="Enter email address" />
                </li>
                <li>
                  <FaAddressBook /> Address
                  <input type="text" placeholder="Enter address" />
                </li>
                <li>
                  <FaRegFileCode /> Caregiver code
                  <input type="text" placeholder="Enter caregiver code" />
                </li>
                <li>
                  <MdDateRange /> Hire Date
                  <input type="date" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
