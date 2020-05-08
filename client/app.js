// jQuery starts here
$(document).ready(function () {
// function onclick
    $("#btn").on("click", (e)=> {
        e.preventDefault();
        const inputValue = $("#inputOne").val().trim();

        // if using react so react has owen port already setted for client side so this case direclty hit the server route BUT THIS CASE 
        // HAVE TO BRING PORT HERE // also axios -g front-end heregleh 2 arga baidag buguud uund: npm install hiih esvel CDN : ene application deer CDN link -g herglesen,
        axios.get(`http://localhost:5000/api/${inputValue}`).then(function(response){
                console.log(response.data);

            }).catch(err => console.log(err))           
    });
})