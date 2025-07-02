const GetDog = () => {
    return(
        $.getJSON("https://dog.ceo/api/breeds/image/random", function( data ) {
                $(".breeds-image-random pre").html(JSON.stringify(data, null, 4));
                $(".image-content").html("<img src='" + data.message + "'>");
            }));
    ;
}