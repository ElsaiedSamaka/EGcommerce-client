const express = require("express");
const router = express.Router();
const csrf = require("csurf");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const Order = require("../models/Order.model");
const Cart = require("../models/Cart.model");
const middleware = require("../middleware");
const {
  userSignUpValidationRules,
  userSignInValidationRules,
  validateSignup,
  validateSignin,
} = require("../config/validator");
const csrfProtection = csrf();
router.use(csrfProtection);

// GET: display the signup form with csrf token
// TODO: setup <input type="hidden" name="csurf" value={{csrfToken}} />
const getSignUpForm = async (req, res) => {
  await res.json({
    csrfToken: req.csrfToken(),
    pageName: "Sign Up",
  });
};

// POST: handle the signup logic
const signUp = async (req, res) => {
  try {
    //if there is cart session, save it to the user's cart in db
    if (req.session.cart) {
      const cart = await new Cart(req.session.cart);
      cart.user = req.user._id;
      await cart.save();
    }
    // redirect to the previous URL
    if (req.session.oldUrl) {
      var oldUrl = req.session.oldUrl;
      req.session.oldUrl = null;
      // res.redirect(oldUrl);
      res.send(oldUrl);
    } else {
      // res.send( "/user/profile" );
      res.redirect("/user/profile");
    }
  } catch (err) {
    console.log(err);
    return res.send("/");
  }
};

// GET: display the signin form with csrf token
const getSignInForm = async (req, res) => {
  await res.json({
    csrfToken: req.csrfToken(),
    pageName: "Sign In",
  });
};

// POST: handle the signin logic
const signIn = async (req, res) => {
  try {
    // cart logic when the user logs in
    let cart = await Cart.findOne({ user: req.user._id });
    // if there is a cart session and user has no cart, save it to the user's cart in db
    if (req.session.cart && !cart) {
      const cart = await new Cart(req.session.cart);
      cart.user = req.user._id;
      await cart.save();
    }
    // if user has a cart in db, load it to session
    if (cart) {
      req.session.cart = cart;
    }
    // redirect to old URL before signing in
    if (req.session.oldUrl) {
      var oldUrl = req.session.oldUrl;
      req.session.oldUrl = null;
      res.redirect(oldUrl);
    } else {
      res.redirect("/user/profile");
    }
  } catch (err) {
    console.log(err);
    return res.redirect("/");
  }
};

// GET: logout
const logOut = async (req, res) => {
  await req.logout();
  req.session.cart = null;
  await res.redirect("/");
};
module.exports = {
  getSignUpForm,
  signUp,
  getSignInForm,
  signIn,
  logOut,
};
