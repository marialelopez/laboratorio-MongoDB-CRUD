const connectDB = require("./src/db");

const createUser = async (user) => {
    const db = await connectDB();
    const collection = db.collection("users");
    return await collection.insertOne(user);
  }

const findUsers = async (user) => {
    const db = await connectDB();
    const collection = db.collection("users");
    return await collection.findOne({ user });
    
  }

const findUserById = async (user) => {
  const db = await connectDB();
  const collection = db.collection("users");
    return await collection.find(user);
    
  }

const deleteUserById = async (user) => {
  const db = await connectDB();
  const collection = db.collection("users");
    return await collection.deleteOne({user});
  }

const updateUser = async (data) => {
 await connectDB();
  const updateData = { $set: { ...data } };
   return updateData;
  }

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;

// const createUser = async (user) => {
//   try{
//     const db = await connectDB();
//     const collectionUsers = db.collection("users");
//     const createResult = await collectionUsers.insertOne(user);
//     return createResult;
//     }catch (error){
//       return error;
//     }
// };

// // const findUsers = async () => {
// //   try{
// //     const db = await connectDB();
// //     const collectionUsers = db.collection("users");
// //     const findResult = await collectionUsers.find({}).toArray();
// //     return findResult;
// //   }catch (error){
// //   return error;
// //   }
// // };

// // const findUserById = async () => {
// //   try{
// //     const db = await connectDB();
// //     const collectionUsers = db.collection("users");
// //     const findResult = await collectionUsers.findOne({_id: id});
// //     return findResult;
// //   }catch (error){
// //     return error;
// //   }
// // };

// // const deleteUserById = async () => {
// //     try{
// //       const db = await connectDB();
// //       const collectionUsers = db.collection("users");
// //       const deleteResult = await collectionUsers.deleteOne([]);
// //       return deleteResult;
// //     }catch (error){
// //       return error;
// //     }
// //   };

// // // const updateUser = async () => {
// //   try{
// //     const updateData = {$set:{ ...data}};
// //     const db = await connectDB();
// //     const collectionUsers = db.collection("users");
// //     const updateResult = await collectionUsers.updateOne(
// //       {_id: id},
// //       updateData
// //     );
// //     return updateResult;
// //   }catch (error){
// //     return error;
// //   }
// // };

// const CRUD = {
//   createUser,
//   findUsers,
//   findUserById,
//   // deleteUserById,
//   // updateUser,
// };

// module.exports = CRUD;
