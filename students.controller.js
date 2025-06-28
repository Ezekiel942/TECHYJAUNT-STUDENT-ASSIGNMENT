const Student = require('./students.schema');

exports.createStudent = async (req, res) => {
  const { firstName, lastName, email, age } = req.body;
  if (!firstName || !lastName || !email || age == null) {
    return res.status(400).json({ message: 'All fields are required'});
  } 
  try { 
    const existing = await Student.findOne({ email });
    if (existing) return res.status(409).json({ message: 'email already exists'});

    const newStudent = await Student.create({ firstName, lastName, email, age });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
} 
};


exports.getAllStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, lastName } = req.query;
    const query = lastName ? { lastName } : {};
    const students = await Student.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'student not found' });
    }
    res.json(updatedStudent);
 } catch (err) {
res.status(500).json({ error: err.message});
 }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'student not found' });
    }
    res.json({ message: 'student deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.countStudents = async (req, res) => {
  try {
    const count = await Student.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentByEmail = async (req, res) => {
  try {
    const student = await Student.findOne({ email: req.params.email });
    if (!student) {
      return res.status(404).json({ message: 'student not found' });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentByName = async (req, res) => {
  try {
    const name = req.params.name;
    const students = await Student.find({
      $or: [
        { firstName: { $regex: name, $options: 'i' } },
        { lastName: { $regex: name, $options: 'i' } }
      ]
    });
    if (!students.length) {
      return res.status(404).json({ message: 'student not found' });
    }
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};