export default function handler(req, res) {
    const text = req.query.text || '';
    const encoded = encodeURIComponent(text);
    res.status(200).json({ encoded });
  }
  