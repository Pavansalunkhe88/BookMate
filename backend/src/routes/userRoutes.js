import {Router} from "express";

const router = Router();

router.route("/home").get((req, res)=>{
    console.log("On home page");
    res.send("On home page");
});
router.route("/login").get((req, res)=>{
    console.log("On login Page");
    res.send("On LogIn Page.");
});
router.route("/login").post((req, res)=>{
    let btn = document.querySelector(".submit");
    btn.addEventListener('click', ()=>{
        res.render("/home");
    });
});
router.route("/signup").get((req, res)=>{
    console.log("On SignUp Page.");
    res.send("On SignUp Page");
});
router.route("/about").get((req, res)=>{
    res.send("On About Page");
});
router.route("/user/:id").get((req, res)=>{
    res.send("Users Detail.");
});
router.route("/user/book/:id").get((req, res)=>{
    res.send("Books Detail.");
});
router.route("/user/:id/chat");
router.route("/support").get((req, res)=>{
    res.send("Support Team.");
});
router.route("/book/:id/payment").get((req, res)=>{
    res.send("Payment Gate Page.");
});

export default router;