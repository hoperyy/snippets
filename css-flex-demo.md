```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>flex</title>
    <style>
    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background: black;
    }

    .box {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background: white;
        border: 2px solid orange;
        padding: 20px;
        display: flex;
        flex-flow: wrap;
    }

    span {
        width: 50px;
        height: 50px;
        background: black;
        border-radius: 50%;
    }
    </style>
</head>
<body>
    <div class="box">
        <span></span>
    </div>
</body>
</html>
```