import mongoose from "mongoose";

const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-zA-Z]{2,20}(?:\.[a-zA-Z]{2})?)$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your first name"],
      trim: true,
      min: [2, "First name cannot be less than 2 characters"],
      maxlength: [20, "First name cannot be more than 20 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide your first name"],
      trim: true,
      min: [2, "First name cannot be less than 2 characters"],
      maxlength: [20, "First name cannot be more than 20 characters"],
    },
    otherNames: {
      type: String,
      trim: true,
      min: [2, "Other names cannot be less than 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email address"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [ emailRegex, "Please provide a valid email address" ],
      minlength: [5, "Email address cannot be less than 5 characters"],
      maxlength: [50, "Email address cannot be more than 50 characters"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      trim: true,
      minlength: [8, "Password cannot be less than 8 characters"],
      maxlength: [100, "Password cannot be more than 50 characters"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
      unique: true,
      trim: true,
      match: [ phoneRegex, "Please provide a valid phone number" ],
      min: [10, "Phone number cannot be less than 10 characters"],
      maxlength: [15, "Phone number cannot be more than 15 characters"],
    },
    profession: {
      type: String,
      trim: true,
      enum: ["Carpenter", "Electrician", "Mason", "Steel Bender", "Other"],
    },
    connections: {
      type: Array,
      default: [],
    },
    region: {
      type: String,
      trim: true,
      enum: ["Greater Accra", "Ashante", "Eastern", "Northern", "Central", "Western", "Volta", "Upper East", "Upper West", "Bono", "Bono East", "Ahafo", "Savannah", "North East", "Oti", "Western North"],
    },
    district: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    picturePath: {
      type: String,
      trim: true,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin", "author", "editor", "contributor", "subscriber", "guest", "banned", "suspended", "inactive", "deleted"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended", "banned", "deleted"],
      default: "active",
    },
    viewedProfiles: {
      type: Number
    },
    lastSeen: {
      type: Date
    },
    impressions: {
      type: Number
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isSubscribed: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isSuspended: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;