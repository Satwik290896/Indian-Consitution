
function update_page(ID,total_ids){
    $(".name").html("")
    $(".list").html("")
    $(".name").append('<b><h3>Searching for</h3></b>')
    if(total_ids != 0){
        $.each(ID,function(i,id){
            $(".list").append('<li>'+rights[id]+'</li>')
        })
    }
}


$(document).ready(function(){
    $(".add").append('<button class="btn btn-outline-success my-2 my-sm-0" type="add">Add</button>')
    $(".edit").append('<button class="btn btn-outline-success my-2 my-sm-0" type="edit">Edit</button>')

    $(".name").append('<b><h4>'+data.title+'</h4></b>')
    $(".image").append('<img src='+data.image+' alt="Image for this Right" width="500" height="300" >')
    $(".year").append('<h5>Year Drafted: </h5>'+data.drafted+'</h3>')
    $(".article").append('<h5>Article: </h5>'+data.article)
    $(".summary").append('<h5>Summary: </h5>'+data.summary)
    $.each(data.Author,function(i,author){
        let a_url = "/s_query/"+author
        $(".author").append('<li>'+'<a href='+a_url+'>'+author+'</a>'+'</li>')
    })
    $(".sc_interpretation").append('<h5>Interpretation: </h5>'+data.sc_interpretation)
    $.each(data.Utility,function(i,util){
        let a_util = "/s_query/"+util
        $(".utility").append('<li>'+'<a href='+a_util+'>'+util+'</a></li>')
    })
    $.each(data.landmark_judgements,function(i,judge){
        $(".judgements").append('<li>'+judge+'</li>')
    })
    $.each(data.genres,function(i,genre){
        let a_genre = "/s_query/"+genre
        $(".genres").append('<li>'+'<a href='+a_genre+'>'+genre+'</a></li>')
    })

    $( "#to_focus" ).autocomplete({
        source: rights
      });

    $("#to_focus").focus()
    $( "#search_b" ).submit(function( event ) {
        let to_submit = $.trim($( "input" ).first().val())
        if(to_submit.length != 0){
            //server_query(to_submit) 
            window.location.href = "/s_query/"+to_submit
            
        }
        $("#to_focus").val("")
        console.log(to_submit)
        event.preventDefault()
        $("#to_focus").focus()

    });

    $( "#edit" ).submit(function( event ) {
        event.preventDefault()
        window.location.href = "/edit/"+ID
    });

    $( "#add" ).submit(function( event ) {
        event.preventDefault()
        window.location.href = "/add"
    });
})