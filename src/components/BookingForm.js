import axios from "axios";
import React, { useState } from "react";

function BookingForm() {
  const [details, setDetails] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [mandatory, setMandatory] = useState(false);

  const [valid, setValid] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    let { name, value } = event.target;
    setDetails({ ...details, [name]: value });

    let val = event.target.value;

    let formdate = new Date(val);

    let todayDate = new Date();

    switch (event.target.name) {
      case "date":
        if (todayDate > formdate) {
          setErrors({
            ...errors,
            date: "Date should be greater than today",
          });
          setValid(false);
        } else {
          setErrors({ ...errors, date: "" });
        }
        break;

      case "time":
        if (val === "") {
          setErrors({
            ...errors,
            time: "Please select a Time",
          });
          setValid(false);
        } else {
          setErrors({ ...errors, time: "" });
        }
        break;

      case "guests":
        if (!(val !== "" && val > 0)) {
          setErrors({
            ...errors,
            guests: "Guests count(s) should be 1 or more",
          });
          setValid(false);
        } else {
          setErrors({ ...errors, guests: "" });
        }
        break;

      case "occasion":
        if (val === "") {
          setErrors({
            ...errors,
            occasion: "Please select a Occasion",
          });
          setValid(false);
        } else {
          setErrors({ ...errors, occasion: "" });
        }
        break;

      default:
        return null;
    }

    if (
      errors.date === "" &&
      errors.time === "" &&
      errors.guests === "" &&
      errors.occasion === ""
    ) {
      setValid(true);
    }
  };

  function handleSubmit(event) {
    //console.log(bookDetails);
    event.preventDefault();

    if (
      details.date === "" ||
      details.time === "" ||
      details.guests === "" ||
      details.occasion === ""
    ) {
      setMandatory(true);
    } else {
      console.log(details);
      axios
        .post("http://localhost:8080/table", details)
        .then((response) => {
          setSuccessMessage(
            `Your Table has been Booked Successfully with the ID : ${response.data.id}`
          );
        })
        .catch((error) => {
          setErrorMessage("Something went wrong");
        });
    }
  }

  return (
    <>
      <div className="container bg-light col-md-4">
        <form
          style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          onSubmit={handleSubmit}
        >
          <label>Choose date</label>
          <input
            type="date"
            name="date"
            value={details.date}
            onChange={handleChange}
          />
          <span className="text-danger">{errors.date}</span>

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            name="time"
            value={details.time}
            onChange={handleChange}
          >
            <option value="">--select--</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <span className="text-danger">{errors.time}</span>

          <label>Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            name="guests"
            value={details.guests}
            onChange={handleChange}
          />
          <span className="text-danger">{errors.guests}</span>

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={details.occasion}
            onChange={handleChange}
          >
            <option value="">--select--</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
          <span className="text-danger">{errors.occasion}</span>

          <input
            type="submit"
            value="Make Your reservation"
            disabled={!valid}
          />

          {mandatory ? (
            <div className="text-danger">
              Please enter the data in all fields
            </div>
          ) : null}
          {successMessage ? (
            <div className="text-success"> {successMessage} </div>
          ) : null}
          {errorMessage ? (
            <div className="text-danger">{errorMessage}</div>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default BookingForm;
