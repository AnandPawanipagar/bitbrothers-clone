export default function homeHandler(req, res) {
  return res.status(200).json({ success: true, message: "API is working!" });
}
