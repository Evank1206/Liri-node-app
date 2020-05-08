
$(document).ready(function(){
   
    $("#btn").on("click", function(e){
        e.preventDefault();
        console.log('click')
       const inputValue = $("#inputOne").val();
       
       $.ajax({
           type: "GET"
       }).then(`http://127.0.0.1:5000/api/${inputValue}`, function(res){
           console.log(res);
           
       })
    // axios.get(`http://localhost:5000/api/${inputValue}`).then(function(res){
    //         console.log(res.data);
        
    //     })
    //     .catch(err => console.log(err))           
    // });
})