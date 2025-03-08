const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    userName: { type: String, required: true },  // ❌ MISSING
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    courseName: { type: String, required: true },  // ❌ MISSING
    price: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
    status: { type: String, default: "completed" }
});


// ✅ Ensure virtuals are included in JSON response
purchaseSchema.set('toObject', { virtuals: true });
purchaseSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Purchase', purchaseSchema);
