const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if( process.env.NODE_ENV === "production" ){
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Connected on port : ${PORT}`);
});