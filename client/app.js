// jQuery starts here
$(document).ready(function () {
    // function onclick
    $("#btn").on("click", (e) => {
        e.preventDefault();
        const inputValue = $("#inputOne").val().trim();

        // if using react so react has owen port already setted for client side so this case direclty hit the server route BUT THIS CASE 
        // HAVE TO BRING PORT HERE // also axios -g front-end heregleh 2 arga baidag buguud uund: npm install hiih esvel CDN : ene application deer CDN link -g herglesen,
        axios.get(`http://localhost:5000/api/${inputValue}`).then(function (response) {
            console.log(response.data);
            // console.log("artist: " + response.data[0].artist.name);
            // console.log("artist: " + response.data[0].artist.thumb_url);
            // console.log("artist: " + response.data[0].artist.url);
            for (let i = 0; i < response.data.length; i++) {

                $(".img").append(response.data[i].artist.thumb_url);
                $(".display").append(response.data[i].artist.name);
                $(".display").append(response.data[i].lineup);
                $(".display").append(response.data[i].datetime);
                $(".display").append(response.data[i].venue.name);
                $(".display").append(response.data[i].venue.city);
                $(".display").append(response.data[i].venue.country);

                
                // console.log(response.data[i].artist.name);
                // console.log("Artist Name: " + response.data[i].lineup);
                // console.log("Date&Time: " + response.data[i].datetime);
                // console.log("Staduim: " + response.data[i].venue.name);
                // console.log("city: " + response.data[i].venue.city);
                // console.log("country: " + response.data[i].venue.country);

            }


        }).catch(err => console.log(err))
    });
})