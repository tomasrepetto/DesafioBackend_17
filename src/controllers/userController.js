const User = require('../models/usersModel/js');

exports.changeUserRole = async (req, res) => {
    const { uid } = req.params;
    const user = await User.findById(uid);
    if (!user) return res.status(404).send('User not found');

    user.role = user.role === 'user' ? 'premium' : 'user';
    await user.save();
    res.status(200).send('User role updated successfully');
};