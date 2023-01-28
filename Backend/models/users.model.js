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
      DoctorId: String,
    },
  ],
  Doctor_Type: String,
  Experience: Number,
  Charges: Number,
  review: [
    {
      rating: Number,
      Comment: String,
    },
  ],
  Appointment_DateTime: [
    {
      Appointment_Time: String,
      Appointment_Date: String,
    },
  ],
  Appointment: [
    {
      PatientName: String,
      Age: String,
      Phone: Number,
      illness: String,
      Appointment_Time:String,
      Appointment_Date:String,
      Approve: Boolean,
    },
  ],
  Applications: [
    {
      Doctor_Name: String,
      Doctor_Type: String,
      Doctor_Phone: Number,
      Experience: Number,
      Charges: Number,
    },
  ],
});

const RegisterationModel = mongoose.model("user", UsersRegisterationSchema);

module.exports = RegisterationModel;
