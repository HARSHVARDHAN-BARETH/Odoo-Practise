import usermodel from '../models/user.model.js';



export const registerUser = async (userData) => {
  const { name, email, password, mobile, age, type } = userData;
  if (!name || !email || !password || !mobile || !age || !type) {
    throw new Error('All fields are required');
  }

  const user = await usermodel.create({ name, email, password, mobile, age, type });
  return user;
};

export const findUserByEmail = async (email) => {
  if (!email) {
    throw new Error('Email is required');
  }
  const user = await usermodel.findOne({ email }).select('+password');
  return user;
};
