import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    githubId: {
        type: String,
        unique: true,
        sparse: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: function() { return !this.githubId; }, // Email requerido solo si no es un usuario de GitHub
        unique: true
    },
    password: {
        type: String,
        required: function() { return !this.githubId; } // Password requerido solo si no es un usuario de GitHub
    },
    rol: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

const User = mongoose.model('User', userSchema);

export default User;





















