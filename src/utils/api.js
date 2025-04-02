import axios from "axios";

const API_BASE_URL = "https://your-backend-api.com";

export const sendOtp = async (phoneNumber) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/send-otp`, { phone: phoneNumber });
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
  }
};

export const verifyOtp = async (phoneNumber, otp) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verify-otp`, { phone: phoneNumber, otp });
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
  }
};

export const uploadVideo = async (videoUri) => {
  try {
    const formData = new FormData();
    formData.append("video", { uri: videoUri, type: "video/mp4", name: "verification.mp4" });

    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error("Error uploading video:", error);
  }
};
