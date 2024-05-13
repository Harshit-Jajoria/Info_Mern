import userModel from '../models/user.js';

class userController {
  static getAllUsers = async (req, res) => {
    try {
      const allUsers = await userModel.find({});
      if (allUsers) {
        console.log('Get Request -- All Users');
        return res.status(200).json(allUser);
      }
    } catch (error) {
      return res.status(200).json(error);
    }
  };

  static createUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
      if (name && email && age) {
        const newUser = userModel({
          name,
          email,
          age,
        });

        const saved_user = await newUser.save();
        if (saved_user) {
          console.log('Post Request -New user is created ');
          //console.log(saved_user);

          return res.status(201).json(saved_user);
        } else {
          return res.status(400).json({ message: 'something went wrong' });
        }
      } else {
        return res.status(400).json({ message: 'all fields required' });
      }
    } catch (error) {
      return res.status(200).json(error);
    }
  };

  static getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getSingleData = await userModel.findById(id);
        console.log('Get Request -- Single User');
        return res.status(200).json(getSingleData);
      } else {
        return res.status(400).json({ message: ' id not found' });
      }
    } catch (error) {
      return res.status(200).json(error);
    }
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
        console.log('Put Request -- Updated User');
        return res.status(200).json(getUpdatedData);
      } else {
        return res.status(400).json({ message: ' id not found' });
      }
    } catch (error) {
      return res.status(200).json(error);
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const getDeleteddData = await userModel.findByIdAndDelete(id);
        console.log('Delete Request --  Deleted User');
        return res.status(200).json(getDeleteddData);
      } else {
        return res.status(400).json({ message: ' id not found' });
      }
    } catch (error) {
      return res.status(200).json(error);
    }
  };
}
export default userController;
