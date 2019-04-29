var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    bonus: { type: Number, required: true },
    income: { type: Number, required: true },
    status: { type: Number, required: true },
    nChildB2561: { type: Number, required: true },
    nChildA2561: { type: Number, required: true },
    nProtege: { type: Number, required: true },
    nDisabled: { type: Number, required: true },
    mSocial: { type: Number, required: true },
    mGPF: { type: Number, required: true },
    mHomeloan: { type: Number, required: true },
    mRMF: { type: Number, required: true },
    mLTF: { type: Number, required: true },
    mLife: { type: Number, required: true },
    mPension: { type: Number, required: true },
    mDstudy: { type: Number, required: true },
    mDonate: { type: Number, required: true }
}, { collection: 'users' }
);
module.exports = mongoose.model('User', UserSchema);