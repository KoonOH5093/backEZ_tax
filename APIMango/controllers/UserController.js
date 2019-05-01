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
        edituser.email = req.body.email;
        edituser.password = req.body.password;
        edituser.name = req.body.name;
        edituser.salary = req.body.salary;
        edituser.bonus = req.body.bonus;
        edituser.income = req.body.income;
        edituser.status = req.body.status;
        edituser.nChildB2561 = req.body.nChildB2561;
        edituser.nChildA2561 = req.body.nChildA2561;
        edituser.nProtege = req.body.nProtege;
        edituser.nParent = req.body.nParent;
        edituser.nParentS = req.body.nParentS;
        edituser.nDisabled = req.body.nDisabled;
        edituser.mSocial = req.body.mSocial;
        edituser.mGPF = req.body.mGPF;
        edituser.mHomeloan = req.body.mHomeloan;
        edituser.mRMF = req.body.mRMF;
        edituser.mLTF = req.body.mLTF;
        edituser.mLife = req.body.mLife;
        edituser.mPension = req.body.mPension;
        edituser.mDstudy = req.body.mDstudy;
        edituser.mDonate = req.body.mDonate;
        edituser.mYear = req.body.mYear;
        edituser.mNetB = req.body.mNetB;
        edituser.taxB = req.body.taxB;
        edituser.mSpouse = req.body.mSpouse;
        edituser.mChild = req.body.mChild;
        edituser.mParent = req.body.mParent;
        edituser.mDisabled = req.body.mDisabled;
        edituser.mNetA = req.body.mNetA;
        edituser.mNetAD = req.body.mNetAD;
     
        const query = { email: req.body.email };
        console.log(edituser,query);
        User.update(query, edituser, function (err) {
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