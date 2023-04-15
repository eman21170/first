import express from "express";
const app=express();
const students=[
    {
        name:"eman",
    },{
    
    name:"mohammed",
    }
    ,{ 
        name:"meligy",
    },
    { 
        name:"emam", 
    },
];
const studentsfun=(req,res)=>{
let ouput='<ul>';
for(let i=0;i<students.length;i++){
const student=students[i]
ouput+='<li>'+student.name+'</li>'
}
ouput+='</ul'
res.send(ouput);
        };
app.use('/students',studentsfun);
app.listen(3000);