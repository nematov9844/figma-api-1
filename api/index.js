

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 

app.use(express.json());

let data = [
   {
    img:"https://s3-alpha-sig.figma.com/img/2ef8/ae97/3fa4b7f660ee46f476295bd9a7d9db0b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DSALJnKuwYEUSmILN9lk5VJoql2xEVynsABUsLHKOgMz-6ZNh6l1xJ4B6CzI4wMUo0J3PWb0sDP3DGabxtxFhbw915iWxX6Xajx2BgB~MKSrw~G~7zIgAuhlON2yZxNOF9Gkt78nox9mbeXBE30p0Lenj8Xet7YOTu5HzqcgJqrxEe2YXzX~5NSnfvMdyflutDseb377aPqPtkWRwWtEW7ukocpazGbHIr2gbXRJAa4uupxJRUE7zUuG3eygbt~GhdhilzFCIVIGeTzk3FjqdIQ9jw-y4jFRQchrwEzBvpEaKNKXyZvwzrwfSuk01fE9zsd7IJyT8qfFqBEN9OodAA__",
    title:"Отопление Ташкента на 30 лет переходит в управление французской Veolia",
    description:"Система теплоснабжения Ташкента на 30 лет будет передана в управление французской компании Veolia для модернизации и реконструкции, сообщает 22 сентября пресс-служба...",
    info:"ИА Красная Весна 15:26"
   },
   {
    img:"",
    title:"",
    description:"",
    info:""
   },
   {
    img:"",
    title:"",
    description:"",
    info:""
   },{
    img:"",
    title:"",
    description:"",
    info:""
   },{
    img:"",
    title:"",
    description:"",
    info:""
   },{
    img:"",
    title:"",
    description:"",
    info:""
   },
   {
    img:"",
    title:"",
    description:"",
    info:""
   },{
    img:"",
    title:"",
    description:"",
    info:""
   },
];


app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
