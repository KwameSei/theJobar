import User from '../models/User.js';

// Get a user
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get all connections of a user
export const getUserConnections = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // Get all connections
    const connections = await Promise.all(
      user.connections.map((id) => User.findById(id))  // Loop through all connections
    );

    const formattedConnections = connections.map(
      ({ _id, firstName, lastName, otherNames, email, phone, profession, region, district, city, address, picturePath, role, status, viewedProfile, lastSeen, impressions, isVerified, isSubscribed, isBlocked, isDeleted, isSuspended, isApproved, isPending, isPremium }) => {
        return {
          _id,
          firstName,
          lastName,
          otherNames,
          email,
          phone,
          profession,
          region,
          district,
          city,
          address,
          picturePath,
          role,
          status,
          viewedProfile,
          lastSeen,
          impressions,
          isVerified,
          isSubscribed,
          isBlocked,
          isDeleted,
          isSuspended,
          isApproved,
          isPending,
          isPremium
        };
      }
    );
    res.status(200).json(formattedConnections);
} catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add or remove connections
export const addRemoveConnections = async (req, res) => {
  try {
    const { id, connectionId } = req.params;
    const user = await User.findById(id);
    const connection = User.findById(connectionId);

    // Check if user is already connected
    if (user.connections.includes(connectionId)) {
      // Remove connection
      user.connections = user.connections.filter((id) => id !== connectionId);  // Remove connection from user's connections
      connection.connections = connection.connections.filter((id) => id !== userId);  // Remove user from connection's connections
    } else {
      // Add connection
      user.connections.push(connectionId);  // Add connection to user's connections
      connection.connections.push(id);  // Add user to connection's connections
    }
    await user.save();
    await connection.save();

    const formattedConnections = connections.map(
      ({ _id, firstName, lastName, otherNames, email, phone, profession, region, district, city, address, picturePath, role, status, viewedProfile, lastSeen, impressions, isVerified, isSubscribed, isBlocked, isDeleted, isSuspended, isApproved, isPending, isPremium }) => {
        return {
          _id,
          firstName,
          lastName,
          otherNames,
          email,
          phone,
          profession,
          region,
          district,
          city,
          address,
          picturePath,
          role,
          status,
          viewedProfile,
          lastSeen,
          impressions,
          isVerified,
          isSubscribed,
          isBlocked,
          isDeleted,
          isSuspended,
          isApproved,
          isPending,
          isPremium
        };
      }
    );

    res.status(200).json({ message: 'Connection updated successfully', formattedConnections });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, otherNames, email, phone, profession, region, district, city, address, picturePath, role, status, viewedProfile, lastSeen, impressions, isVerified, isSubscribed, isBlocked, isDeleted, isSuspended, isApproved, isPending, isPremium } = req.body;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).send(`No user with id: ${id}`);
    }

    const updatedUser = { firstName, lastName, otherNames, email, phone, profession, region, district, city, address, picturePath, role, status, viewedProfile, lastSeen, impressions, isVerified, isSubscribed, isBlocked, isDeleted, isSuspended, isApproved, isPending, isPremium };

    const updated = await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).send(`No user with id: ${id}`);
    }

    await User.findByIdAndDelete(id);

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete all users
export const deleteUsers = async (req, res) => {
  try {
    await User.deleteMany();

    res.json({ message: 'All users deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
