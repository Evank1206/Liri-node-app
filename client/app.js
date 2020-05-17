// jQuery starts here
$(document).ready(function () {

    $("#btn").on("click", (e) => {
        e.preventDefault();
        const inputValue = $("#inputOne").val().trim();

        // if using react so react has owen port already setted for client side so this case direclty hit the server route BUT THIS CASE 
        // HAVE TO BRING PORT HERE // also axios -g front-end heregleh 2 arga baidag buguud uund: npm install hiih esvel CDN : ene application deer CDN link -g herglesen,
        axios.get(`http://localhost:5000/api/${inputValue}`).then(function (response) {
            console.log(response.data);
            // console.log(response.data[0].lineup[0]);

            // console.log(response.data[0].datetime);
            // console.log(response.data[0].venue.country);
            for (let i = 0; i < response.data.length; i++) {

                const item = $("<div class='ui card' id='item'/>");
                $("#items").append(item);

                const imageDiv = $("<div id='imageDiv'/>");
                $("#item").append(imageDiv);

                const image = $("<img height='200' width='200'/>");
                image.attr("src", response.data[0].artist.image_url)
                $("#imageDiv").append(image);

                const content = $("<div class='content' id='content'/>");
                $("#item").append(content);

                const band = $("<div id='band'/></br>");
                $("#content").append(band);

                const ShowTime = $("<div id='ShowTime'/></br>");
                $("#content").append(ShowTime);

                const palace = $("<div id='palace'/></br>");
                $("#content").append(palace);

                const city = $("<div id='city'/></br>");
                $("#content").append(city);

                const country = $("<div id='country'/></br>");
                $("#content").append(country);

                const buttons = $("<div id='buttons'/></br>");
                $("#content").append(buttons);

                // const bandName = $("<h3 id='bandName'/>");
                // bandName.text(response.data.lineup);
                // $("#bandName").append(response.data[i].lineup);

                $("#band").append(`<span> Band Name: <b>${response.data[i].lineup}</b></span>`);
                $("#ShowTime").append(`<span> Show Time: <b>${response.data[i].datetime}</b></span>`);
                $("#palace").append(`<span> Palaza: <b>${response.data[i].venue.name}</b></span>`);
                $("#city").append(`<span> City Name: <b>${response.data[i].venue.city}</b></span>`);
                $("#country").append(`<span> Country Name: <b>${response.data[i].venue.country}</b></span>`);

                const button1 = $("<button id='button1'/>");
                button1.text("delete");
                $("#buttons").append(button1);

                const button2 = $("<button id='button2'/>");
                button2.text("keep in list");
                $("#buttons").append(button2);

            }















        });
    });
});

