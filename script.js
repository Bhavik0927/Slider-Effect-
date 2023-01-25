const centerdiv = document.getElementById("centrediv");


//For getting an limit data So write after api link"?_limit=23 0r 30";
fetch("https://jsonplaceholder.typicode.com/photos?_limit=30")
.then((apidata) => {
    //if we  console apidata..then we got readableStream 
    // so then we convert that readableStream into json formet
    return apidata.json();
})
// So we got the json data ...let show them
.then((jsondata) =>{
    console.log(jsondata[0].url);

    jsondata.map((val) =>{
        key = val.id;
        let img = document.createElement("img");
        //if we create img then in that image there an src tag;
        //so we put value of url in that src...
        img.src = `https://picsum.photos/200/300?random=${val.id}`
        centerdiv.appendChild(img);

        console.log(val);
    })
})