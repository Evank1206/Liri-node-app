// jQuery starts here
$(document).ready(function () {
    // function onclick
    $("#btn").on("click", (e) => {
        e.preventDefault();
        const inputValue = $("#inputOne").val().trim();

        // today date 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var formated = day + "/"+ month + "/" + year;
       

        // if using react so react has owen port already setted for client side so this case direclty hit the server route BUT THIS CASE 
        // HAVE TO BRING PORT HERE // also axios -g front-end heregleh 2 arga baidag buguud uund: npm install hiih esvel CDN : ene application deer CDN link -g herglesen,
        axios.get(`http://localhost:5000/api/${inputValue}`).then(function (response) {
            console.log(response.data);
            console.log(response.data[0].datetime);


            var image = $("<img height='200px' width='200px'/>");
            image.addClass("ui imz")
            image.attr("src", response.data[0].artist.thumb_url);
            $(".imageDiv").append(image);
            $(".imz").append(response.data[0].artist.thumb_url);

            var bandName = $("<span class='ui bandName'/>");
            bandName.text("Band Name:  ");
            $(".band").append(bandName);
            $(".bandName").append("<b><a href='#'>" + response.data[0].lineup + "</a></b>");

            var concertDate = $("<span class='ui ShowDate'/>");
            concertDate.text("Show Date: ");
            $(".ShowTime").append(concertDate);
            $(".ShowDate").append("<b><a href='#'>" + response.data[0].datetime + "</a></b>");

            var palaza = $("<p class='plaza'/>");
            palaza.text("Palace:  ");
            $(".palace").append(palaza);
            $(".plaza").append("<b><a href='#'>" + response.data[0].venue.name + "</a></b>");

            var city = $("<p class='ShowCity'/>");
            city.text("City:  ");
            $(".city").append(city);
            $(".ShowCity").append("<b><a href='#'>" + response.data[0].venue.city + "</a></b>");

            var country = $("<p class='ShowCountry'/>");
            country.text("Country:  ");
            $(".country").append(country);
            $(".ShowCountry").append("<b><a href='#'>" + response.data[0].venue.country + "</a></b>");

            var buttonOne = $("<button class='ui btn1'/>");
            buttonOne.text("save");
            $(".button").append(buttonOne);
            // $("btn").append(action will be here)

            var buttonTwo = $("<button class='ui btn2'/>");
            buttonTwo.text("delete");
            $(".button").append(buttonTwo);
            // $("btn").append(action will be here)

            var todayDate = $("<span class='ui todayDate'/>");
            todayDate.text("Today : ");
            $(".today").append(todayDate);
            $(".todayDate").append("<b>" + formated + "</b>");




            //     for (let i = 0; i < response.data.length; i++) {

            //         $(".img").append(response.data[i].artist.thumb_url);
            //         $(".display").append(response.data[i].artist.name);
            //         $(".display").append(response.data[i].lineup);
            //         $(".display").append(response.data[i].datetime);
            //         $(".display").append(response.data[i].venue.name);
            //         $(".display").append(response.data[i].venue.city);
            //         $(".display").append(response.data[i].venue.country);


            //         // console.log(response.data[i].artist.name);
            //         // console.log("Artist Name: " + response.data[i].lineup);
            //         // console.log("Date&Time: " + response.data[i].datetime);
            //         // console.log("Staduim: " + response.data[i].venue.name);
            //         // console.log("city: " + response.data[i].venue.city);
            //         // console.log("country: " + response.data[i].venue.country);

            //     }
            // }).catch(err => console.log(err));
        });
    });
})