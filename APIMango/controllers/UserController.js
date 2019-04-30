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
            nDisabled: req.body.nDisabled,
            mSocial: req.body.mSocial,
            mGPF: req.body.mGPF,
            mHomeloan: req.body.mHomeloan,
            mRMF: req.body.mRMF,
            mLTF: req.body.mLTF,
            mLife: req.body.mLife,
            mPension: req.body.mPension,
            mDstudy: req.body.mDstudy,
            mDonate: req.body.mDonate
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
        const edituser = {};
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
        const query = { email: req.params.email }
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