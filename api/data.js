

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
    img:"https://s3-alpha-sig.figma.com/img/07bf/51f1/b5a8fae78806f33528ad5c6769b2d71c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJ42FPzg3~7uhT1rMzPw0~tUyaJmb87NoXn~V0wiIFi3UqW0ikyMylXOt1I7L25~DT5CdRQZQ7ZJx3vF8Dt2TjBQxzq9Wb67bN8FHUvKbs1MEIr1t4kwevdo7ibn-R-ITHHrql0cHeQemceBnrjMBsIIEDhEr5NRXwS-fAWxx3tq4cf~L8cxfdr0hP9NqlrOTWrhGhyp43SIBWmq-LWpnTXMzyzwFK0pxBn9lv6a5TdiiZYN-5AbX9lw3qTImFHGFtM4Fxt37o7NepIhPquPvNdKEI2W05n6w4hjY6NBAK~X0G8LPU34EpMS~2bDQiZymdCK3jSJY9YnRY5ysTBQSw__",
    title:"Пользователи жалуются на новую проблему iPhone 13, связанную с камерой",
    description:"Пользователи смартфона Apple iPhone 13 продолжают сообщать о новых проблемах, с которыми они сталкиваются при использовании флагмана, поступившего в продажу только позавчера...",
    info:"Пепелац Ньюс 07:35"
   },
   {
    img:"https://s3-alpha-sig.figma.com/img/7f9d/f40a/e0619a17eb887a795cc88f8bb04729eb?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0dK1QJ2YBhS3gxVec-hlqmQSsfu0JsezdUTZxMKQ8X09UQcFz80VjbW5a31EbrTrAg2~3-XSA8b7rD7bSh~snwCFaYpS9NermhgU2rkhMIGhnXC2Wts10d0kmHvwqrBHsLTTBqiECsc9g50tiPlxo7Q5dxXaWrva5jXq4ZwdgayUUV9YLqrMjGggzg58nndZonkujzYUD~6BxkRhlL~vLxWTzbm6OFv64hzJrPahDzMWDbHdHoQNpQqlfqkZJP6kcDwIrWT5vRnC9dQLfJh1BZ0NH-rB5ntBRZtKxuEKdb1d4Lsi6FOR-KcYbhTjQefzYtLsERpMa1-momivPIJ6A__",
    title:"Halo Infinite сравнили на Xbox One, Xbox One X, Xbox Series S и Xbox Series X",
    description:"Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series X. Графика впечатляет на всех платформах. Также отмечается...",
    info:"Клуб DNS 15:33"
   },{
    img:"https://s3-alpha-sig.figma.com/img/714c/e323/cedf7e40a8b691577de75276ace4020b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf4PZeyMlXJPlxP-SxvHrEuCwBVGkFlBVlimZL57uB-VU3UJvPvoXCzVQKVnrea6NgyQAz1Tn~k1EyvYVwxV2aJAbDtzXmZ4NUdM8giWVeAfiG4iRylXAF31I-22wHGIxHf8DBjToFy2RSELCHsooxVRlv2pBfcPAn5DGtkke~Wx1LFHYtDh-t6PwJCSDg5ChDNhyHUTTorzvdSkgjiVuVdrHT9jyMtC~DnJWh3y9lFlZCsY5mo2PJk-NQStlzbC9fH~hRoeEc2t-ItSfOsEMbIoysaICA3s4bJVskVT28wXicX-VcSY21KlL9B~fSvm6Vvtj8lUwBDx6yYn6eDAgA__",
    title:"В Узбекистане показали тюнинговые варианты моделей Lacetti, Cobalt, Nexia и Spark",
    description:"«В сети наши потребители обсуждали тему сильного преобладания белого цвета в модельном ряду UzAuto Motors. Почему вы не делаете двухцветные автомобили? Этот вопрос был...",
    info:"Sputnik Узбекистан 18:43"
   },{
    img:"https://s3-alpha-sig.figma.com/img/241f/8834/b125b670a12763abcef345715d27f6c8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHQ6uQWd9~GDp7v0Xb9bX7b6QndJoenfE395~6LKyU6I4lKlYu3BJ0LozDh2ZBs7ll~-fDq~rNmj0qcR8yEfrECjMjOBSTdrxpkwBqs80fJ8KklMNeirlaCv2IbertIPfVlJzWI-dti3C2Z7WvYdxNHtwld8WE7UrVwQxgSCARRbblNO7W1-kgv5uQW-~6ueiDpSU17Ha0JHJqY405Jy57mm1uyLrcdECyOc7cq3nR5t5H69HWt75KmbRbMFGf9~Bk2wGX0tyodWfAhC0pk9PJhTJ49yodK14oedpTDCeIQ2qWdymOgGFDNvXIsRunp0uizKDL2DNMteGr9vTmwYLw__",
    title:"Время автономной работы iPhone 13 Pro Max стало рекордным для смартфонов Apple",
    description:"Линейка смартфонов iPhone 13 от Apple была презентована на прошлой неделе. Прием предзаказов на устройство стартовал 22 сентября, а 24 сентября новинка появилась в магазинах.",
    info:"iReactor 12:25"
   },{
    img:"https://s3-alpha-sig.figma.com/img/d175/f2c9/19e8902f74ef08a2f234bfa91e82963c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWgXqAdz1nGTv3hCMoR5OceIJdyeAwtQWdWghsl2vNNR~F0rgNOVkxmPazghruYRRddd6dBzgt6WdUFBtGcQ2Z4lHG1JfMhCGWqtD4lKR29Gq74UyFI63a5B28AxBMTAk6Kl3vXtDRQIYBMjZA57GN1F6oyzKhfKQsJJxnreR-vEJxqJO6ztecgjGpIeey2eWE-riJKX8lXkEXo5zkOc081C13kcvaQb6AufM2eXsNR-ggWNRj0uw8Kn~Fm9uw-1oDSBFmGDd3ChdfVFwA~b9YLE217zGFb07rG4~NcgxNV6k6JSAFxnK3~IwO~f-03I2JNk-sv4QPZbJp4fkByLwQ__",
    title:"Криптобиржа Huobi закрыла регистрацию пользователей из Китая",
    description:"Крупнейшая в Китае биржа для торговли биткоинами Huobi приостановила регистрацию пользователей из КНР. Ранее местный Центробанк назвал нелегальными все транзакции...",
    info:"Компания 11:35"
   },
   {
    img:"https://s3-alpha-sig.figma.com/img/7414/e4a4/e315a3c7d854089abb370c765e558e99?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kw9OVduAkYT0QsJUh87I9RgYXTXdjhJMnJb8OjHflPBT9eOGOcVpH-2xRdMAGkJKhX233oxa40~ej9xVT~nc-heK3AfRxA2g9~tOX0XQTm~Q3DJQpPvMTD5D-NCZGc01V-tA1MKPrVq5G9G-BtQPb5S4OERqoN5h0Ilzaq0YP5qm2WhgE7BE0T9zs6uK2MBoa4YFLSNjm7qKhIuvV~793JKLidAhkeeabUx-WKpewL5EFhvLVVOcsU5gXz~hasyNIvKlUYX3jouyzxmA27nVdIUTLogVmJRSFPzPDKFNWcd0zbcnXF7WTJmHPUp8fIqCLGYTYuEGmf32uVq00HL7Lw__",
    title:"В Узбекистане пройдет международный конкурс молодых кинематографистов «Кино за 5 дней»",
    description:"В Узбекистане 22 сентября стартовал конкурс молодых кинематографистов «Кино за пять дней». Мероприятие проходит в рамках Ташкентского Международного...",
    info:"Фергана 15:44"
   },{
    img:"https://s3-alpha-sig.figma.com/img/e0cf/4f8b/7efc7446a788446e59b25d5210a26e90?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5JQKDvtzYwYEUVoip8b88iBy7JZbfbxP9kr1jdIpbiAGhhEfCBpQdCMq8jBoEjrYWs3g9b8sg7r5O-ZPTsyJfsZDJl4wFP0es4D8z2RvYvPrnRQsudNIA6g0TYuvY0mIHktBUR7F6-lqnRNQWLQKwjx5YDrzzf7A8BIg3S2nvw0q4JUDpHtC48-FVZS4mUCozslLBJTccfUoOk2j7mToab2Dv2g1Hz8lqSJPn6Cxz8e7t6u9QykNPR4eIkhsU0JLKNeIi3szPJzv3RNfgaFUXe9dQbh0hSOAQQd1ZIQMT2v-Lrri6w-OUZ9ThYLpJBTHY3orwueqsRTli4Uu3eFCg__",
    title:"Илон Маск принял участие во Всемирной сетевой конференции в Китае",
    description:"Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов) уже второй раз за полторы недели обратился к китайским правящим кругам и гражданам.",
    info:"FBM.ru 22:23"
   },
];


app.get('/api/data', (req, res) => {
    res.json(data);
});

app.post('/api/data', (req, res) => {
    const user = req.body;
    data.push(user);
    res.status(201).json(user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
