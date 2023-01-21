import React from "react";

function HomePage() {
  return (
    <>
      <div
        className="rounded"
        style={{
          marginLeft: "25%",
          marginTop: "4%",
          width: "50%",
          height: "10%",
          padding: "10px",
          textAlign: "center",
          boxShadow: "3px 2px 10px",
        }}
      >
        <i>
          <p style={{ fontSize: "30px" }}>
            Little Lemon is a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <p style={{ fontSize: "30px" }}>
            The restaurant has a rustic and relaxed atmosphere with moderate
            prices, making it a popular place for a meal any time of the day.
          </p>
        </i>
      </div>
    </>
  );
}

export default HomePage;
