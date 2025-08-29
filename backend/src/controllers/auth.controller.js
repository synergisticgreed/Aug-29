export const home=(req,res)=>{
    res.send("home route is working")
}
export const login=(req,res)=>{
    console.log("📩 Data received from frontend:", req.body);
  const {  email, password } = req.body;

  // For demo: just return success without DB
  res.json({
    success: true,
    message: `User login up successfully!`,
    data: {  email }
  });
}
// controllers/auth.controller.js
export const signup = (req, res) => {
    console.log("📩 Data received from frontend:", req.body);
  const { name, email, password } = req.body;

  // For demo: just return success without DB
  res.json({
    success: true,
    message: `User ${name} signed up successfully!`,
    data: { name, email }
  });
};
