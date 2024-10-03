const express= require("express");
const app =express();

app.get("/",(req, res)=>{
res.json([
    {
        id:1,
        name:"shivam shinde",
        age:24
    },
    {
        id:2,
        name:"sid more",
        age:25
    },
    {
        id:3,
        name:"sourabh surya",
        age:26
    },
    {
        id:4,
        name:"ajay chavan",
        age:28
    },
])    
});
app.listen(5000,()=>{
    console.log("app is running on 5000 port")
})
