var express = require('express');
var config = require('../config/db');
var mongoose = require('mongoose');
var User = require('../models/UserModel');
mongoose.connect(config.db, { useMongoClient: true });
var dbc = mongoose.connection;
mongoose.Promise = global.Promise;
dbc.on('open', function () {
    console.log('connection to mongodb');
});
dbc.on('error', function (err) {
    console.log(err);
});
const getUserPage = (req, res) => {
    res.send('Hello Expressjs router and get controller');
};



module.exports = {
    getUserPage: getUserPage,
    //บันทึก
    createUser: function (req, res, next) {
        console.log(req);
        const adduser = new User({
            email : req.body.email,
            password: req.body.password,
            name: req.body.name,
            salary: req.body.salary,
            bonus: req.body.bonus,
            income: req.body.income,
            status: req.body.status,
            nChildB2561: req.body.nChildB2561,
            nChildA2561: req.body.nChildA2561,
            nProtege: req.body.nProtege,
            nParent: req.body.nParent,
            nParentS: req.body.nParentS,
            nDisabled: req.body.nDisabled,
            mSocial: req.body.mSocial,
            mGPF: req.body.mGPF,
            mHomeloan: req.body.mHomeloan,
            mRMF: req.body.mRMF,
            mLTF: req.body.mLTF,
            mLife: req.body.mLife,
            mPension: req.body.mPension,
            mDstudy: req.body.mDstudy,
            mDonate: req.body.mDonate,
            mYear: req.body.mYear,
            mNetB: req.body.mNetB,
            taxB: req.body.taxB,
            mSpouse: req.body.mSpouse,
            mChild: req.body.mChild,
            mParent: req.body.mParent,
            mDisabled: req.body.mDisabled,
            mNetA: req.body.mNetA,
            mNetAD: req.body.mNetAD
        });
        adduser.save(function (err){
            if (err) {
                res.send(err);
                return;
            }
            else {
                res.json({ message: 'Create User Success' });
            }
        });
    },
    //ดึงรานการทั้งหมด
    getUser: function (req, res, next) {
        User.find({}, function (err, user) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(user);
            }
        });
    },
    //ดึงโดยใช้id
    getUserByEmailandPass: function (req, res, next) {
        const queryuserE = { email: req.body.email, password: req.body.password};
        console.log(queryuserE);
        User.find(queryuserE, function (err, user) {
            if (err) {
                console.log(err);
            } else {
                res.json(user);
            }
        });
    },
    //แก้ไขรายการ
    editUser: function (req, res, next) {
        var edituser = {};
<<<<<<< HEAD
        if (req.body.email != null) edituser.email = req.body.email;
        if (req.body.salary != null) edituser.salary = req.body.salary;
        if (req.body.bonus != null) edituser.bonus = req.body.bonus;
        if (req.body.income != null) edituser.income = req.body.income;
        if (req.body.status != null) edituser.status = req.body.status;
        if (req.body.nChildB2561 != null) edituser.nChildB2561 = req.body.nChildB2561;
        if (req.body.nChildA2561 != null) edituser.nChildA2561 = req.body.nChildA2561;
        if (req.body.nProtege != null) edituser.nProtege = req.body.nProtege;
        if (req.body.nParent != null) edituser.nParent = req.body.nParent;
        if (req.body.nParentS != null) edituser.nParentS = req.body.nParentS;
        if (req.body.nDisabled != null) edituser.nDisabled = req.body.nDisabled;
        if (req.body.mSocial != null) edituser.mSocial = req.body.mSocial;
        if (req.body.mGPF != null) edituser.mGPF = req.body.mGPF;
        if (req.body.mHomeloan != null) edituser.mHomeloan = req.body.mHomeloan;
        if (req.body.mRMF != null) edituser.mRMF = req.body.mRMF;
        if (req.body.mLTF != null) edituser.mLTF = req.body.mLTF;
        if (req.body.mLife != null) edituser.mLife = req.body.mLife;
        if (req.body.mPension != null) edituser.mPension = req.body.mPension;
        if (req.body.mDstudy != null) edituser.mDstudy = req.body.mDstudy;
        if (req.body.mDonate != null) edituser.mDonate = req.body.mDonate;
        if (req.body.mYear != null) edituser.mYear = req.body.mYear;
        if (req.body.mNetB != null) edituser.mNetB = req.body.mNetB;
        if (req.body.taxB != null) edituser.taxB = req.body.taxB;
        if (req.body.mSpouse != null) edituser.mSpouse = req.body.mSpouse;
        if (req.body.mChild != null) edituser.mChild = req.body.mChild;
        if (req.body.mParent != null) edituser.mParent = req.body.mParent;
        if (req.body.mDisabled != null) edituser.mDisabled = req.body.mDisabled;
        if (req.body.mNetA != null) edituser.mNetA = req.body.mNetA;
        if (req.body.mNetAD != null) edituser.mNetAD = req.body.mNetAD;

        const query = { email: req.body.email };
        console.log(edituser, query, req.body.mNetA);
=======
        if(req.body.email != null)edituser.email = req.body.email;
        if(req.body.salary != null)edituser.salary = req.body.salary;
        if(req.body.bonus != null)edituser.bonus = req.body.bonus;
        if(req.body.income != null)edituser.income = req.body.income;
        if(req.body.status!= null)edituser.status = req.body.status;
        if(req.body.nChildB2561 != null)edituser.nChildB2561 = req.body.nChildB2561;
        if(req.body.nChildA2561 != null)edituser.nChildA2561 = req.body.nChildA2561;
        if(req.body.nProtege != null)edituser.nProtege = req.body.nProtege;
        if(req.body.nParent != null) edituser.nParent = req.body.nParent;
        if(req.body.nParentS != null) edituser.nParentS = req.body.nParentS;
        if(req.body.nDisabled != null)edituser.nDisabled = req.body.nDisabled;
        if(req.body.mSocial != null)edituser.mSocial = req.body.mSocial;
        if(req.body.mGPF != null)edituser.mGPF = req.body.mGPF;
        if(req.body.mHomeloan != null)edituser.mHomeloan = req.body.mHomeloan;
        if(req.body.mRMF != null)edituser.mRMF = req.body.mRMF;
        if(req.body.mLTF != null)edituser.mLTF = req.body.mLTF;
        if(req.body.mLife != null)edituser.mLife = req.body.mLife;
        if(req.body.mPension != null)edituser.mPension = req.body.mPension;
        if(req.body.mDstudy != null)edituser.mDstudy = req.body.mDstudy;
        if(req.body.mDonate != null)edituser.mDonate = req.body.mDonate;
        if(req.body.mYear != null)edituser.mYear = req.body.mYear;
        if(req.body.mNetB != null)edituser.mNetB = req.body.mNetB;
        if(req.body.taxB != null)edituser.taxB = req.body.taxB;
        if(req.body.mSpouse != null)edituser.mSpouse = req.body.mSpouse;
        if(req.body.mChild != null)edituser.mChild = req.body.mChild;
        if(req.body.mParent != null)edituser.mParent = req.body.mParent;
        if(req.body.mDisabled != null)edituser.mDisabled = req.body.mDisabled;
        if(req.body.mNetA != null)edituser.mNetA = req.body.mNetA;
        if(req.body.mNetAD != null)edituser.mNetAD = req.body.mNetAD;
     
        const query = { email: req.body.email };
        console.log(edituser,query);
>>>>>>> 19f6f89dbacf088756d0487f59f5db7790167f04
        User.updateMany(query, edituser, function (err) {
            if (err) {
                res.send(err);
                return;
            }
            else {
                res.json({ message: 'Update User Succ' });
            }
        });
    },
    //ลบรายการ
    deleteUserByEmail: function (req, res, next) {
        const query_user = { email: req.params.email };
        User.remove(query_user, function (err, user) {
            if (err) {
                console.log(err);
            }
            else {
                res.json({ message: 'Delete User Succ' });
            }
        });
    },
}