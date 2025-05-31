import User from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ msg: "User not found" });
        }
        // Ganti dengan hash password di production!
        if (user.password !== password) {
            return res.status(401).json({ msg: "Invalid password" });
        }
        // Simpel: return user info (tanpa token)
        res.status(200).json({ msg: "Login successful", user });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};

export const registerHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Cek email sudah terdaftar
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already registered" });
        }
        // Ganti dengan hash password di production!
        await User.create({ email, password });
        res.status(201).json({ msg: "Registration successful" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};