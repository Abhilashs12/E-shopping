import Address from "../models/Address.js";

const createAddress = async (req, res) => {
  try {
    const {
      user,
      fullName,
      mobile,
      addressLine,
      city,
      state,
      country,
      pincode,
    } = req.body;

    const address = await Address.create({
      user,
      fullName,
      mobile,
      addressLine,
      city,
      state,
      country,
      pincode,
    });

    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find().populate("user", "name email");

    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getSingleAddress = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id).populate(
      "user",
      "name email",
    );
    if (!address) {
      return res.status(404).json({
        message: "Address Not Found",
      });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!address) {
      return res.status(404).json({
        message: "Address not found",
      });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(200).json({
      message: error.message,
    });
  }
};
export { createAddress, getAllAddresses, getSingleAddress, updateAddress };
