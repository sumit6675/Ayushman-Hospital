const mongoose = require("mongoose");
const UsersRegisterationSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  Password: { type: String, required: true },
  Type: String,
  Notifications: [
    {
      Notification: String,
      view: Boolean,
    },
  ],
  History: [
    {
      Doctor_Name: String,
      Doctor_Type: String,
      illness: String,
      Fee: Number,
      Date: String,
      Time: String,
    },
  ],
  Doctor_Type: String,
  Experience: Number,
  review: [
    {
      rating: Number,
      Comment: String,
    },
  ],
  Appointment_DateTime: [
    {
      Appointment_Time: {
        "10:00-11:00": Boolean,
        "11:00-12:00": Boolean,
        "12:00-13:00": Boolean,
        "13:00-14:00": Boolean,
        "14:00-15:00": Boolean,
        "15:00-16:00": Boolean,
        "16:00-17:00": Boolean,
        "17:00-18:00": Boolean,
      },
      Appointment_Date: String,
    },
  ],
  Appointment: [
    {
      PatientName: String,
      Age: String,
      Phone: Number,
      illness: String,
      Booking_DateTime: String,
      Approve: Boolean,
    },
  ],
  Charges: Number,
  Applications: [
    {
      Doctor_Name: String,
      Doctor_Type: String,
      Doctor_Phone: Number,
    },
  ],
});

const RegisterationModel = mongoose.model("user", UsersRegisterationSchema);

module.exports = RegisterationModel;
