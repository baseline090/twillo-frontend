const chatMessages = {
    "Tina Doe": [
      { text: "Hey, I need the documents.", type: "received" },
      { text: "Sure, let me check.", type: "sent" },
      { text: "Okay, thank you!", type: "received" },
      { text: "Have you sent the report?", type: "received" },
      { text: "I will send it shortly.", type: "sent" },
      { text: "Great! Appreciate it.", type: "received" },
    ],
    "John Ray": [
      { text: "Did you receive my email?", type: "received" },
      { text: "Yes, I got it. Thanks!", type: "sent" },
      { text: "Let me know if you need anything else.", type: "received" },
      { text: "Can you send me the attachment again?", type: "received" },
      { text: "Sure, I’ll resend it now.", type: "sent" },
      { text: "Thanks for your quick response!", type: "received" },
    ],
    "Timothy L.": [
      { text: "When is the meeting scheduled?", type: "received" },
      { text: "It's on Monday at 10 AM.", type: "sent" },
      { text: "Thanks for the update!", type: "received" },
      { text: "Can we change the time to 11 AM?", type: "received" },
      { text: "Let me check if that's possible.", type: "sent" },
      { text: "I appreciate your flexibility!", type: "received" },
    ],
  };



  const messageList = [
    { name: "Tina Doe", preview: "Hey, any updates?" , time: "2:00PM"},
    { name: "John Ray", preview: "Sent the document..." , time: "10:00AM"},
    { name: "Timothy L.", preview: "We should meet.", time: "Yesterday" },
    { name: "John Ray", preview: "Sent the document..." , time: "3 oct 2024"},
    { name: "Timothy L.", preview: "We should meet." , time: "30 sep 2024"},
    { name: "Timothy L.", preview: "We should meet." , time: "28 sep 2024"},
    { name: "John Ray", preview: "Sent the document..." , time: "17 sep 2024"},
  ];
  export { chatMessages, messageList };
  