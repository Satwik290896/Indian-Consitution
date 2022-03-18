

$(document).ready(function(){
    $(".add").append('<button class="btn btn-outline-success my-2 my-sm-0" type="add">Add</button>')
    if(Rights_ID.length!=0){
        $(".name1").append('<b><h5>Below are Search Results for "'+submitted+'" Among "Titles"</h5></b>')
    }
    
    if(Genres_ID.length!=0){
        $(".name2").append('<b><h5>Below are Search Results for "'+submitted+'" Among "Genres"</h5></b>')
    }
    
    if(Utilities_ID.length!=0){
        $(".name3").append('<b><h5>Below are Search Results for "'+submitted+'"  Among "Beneficiaries/Utilizers"</h5></b>')
    }

    if(Authors_ID.length!=0){
        $(".name4").append('<b><h5>Below are Search Results for "'+submitted+'"  Among "Authors"</h5></b>')
    }
    
    if( (Rights_ID.length == 0) && (Genres_ID.length == 0) && 
        (Utilities_ID.length == 0) && (Authors_ID.length == 0) )
    {
        $(".name1").append('<b><h5>Below are Search Results for "'+submitted+'"</h5></b>')
        $(".NOR").append('No Results')
        $(".NOR").css("color","red")
    }
    else
    {
    $.each(Rights_ID,function(i,id){
        let i_p = id+1
        let url = "/view/"+i_p
        $(".list1").append('<li><a href='+url+'>'+rights[id]+'</a></li>')
    })

    let string_2_1 = ''
    for(i=0;i<Genres_ID.length;i++){
        string_2_1 = string_2_1 + Genres[Genres_ID[i]]
        if(Genres_ID.length-1 != i){
            string_2_1 = string_2_1 + '; '
        }
    }
    console.log(string_2_1)
    $(".list2").append('<li>'+string_2_1)

    let string_2 = '<ul style="list-style-type:circle;">'

    for(i=0;i<genres_data_ID.length;i++){
            let i_p = genres_data_ID[i]+1
            let id = i_p-1
            let url = "/view/"+i_p
            string_2 = string_2 + '<li><a href='+url+'>'+rights[id]+'</a></li>'
    }
    string_2 = string_2 + '</ul>'

    if(genres_data_ID.length!=0){
        $(".list2").append(string_2+'</li>')
    }
    
    let string_3_1 = ''
    for(i=0;i<Utilities_ID.length;i++){
        string_3_1 = string_3_1 + Utilities[Utilities_ID[i]]
        if(Utilities_ID.length-1 != i){
            string_3_1 = string_3_1 + '; '
        }
    }
    console.log(string_3_1)
    $(".list3").append('<li>'+string_3_1)
    let string_3 = '<ul style="list-style-type:circle;">'

    for(i=0;i<utilities_data_ID.length;i++){
            let i_p = utilities_data_ID[i]+1
            let id = i_p-1
            let url = "/view/"+i_p
            string_3 = string_3 + '<li><a href='+url+'>'+rights[id]+'</a></li>'
    }
    string_3 = string_3 + '</ul>'

    if(utilities_data_ID.length!=0){
        $(".list3").append(string_3+'</li>')
    }



    let string_4_1 = ''
    for(i=0;i<Authors_ID.length;i++){
        string_4_1 = string_4_1 + Authors[Authors_ID[i]]
        if(Genres_ID.length-1 != i){
            string_4_1 = string_4_1 + '; '
        }
    }
    console.log(string_4_1)
    $(".list4").append('<li>'+string_4_1)

    let string_4 = '<ul style="list-style-type:circle;">'

    for(i=0;i<authors_data_ID.length;i++){
            let i_p = authors_data_ID[i]+1
            let id = i_p-1
            let url = "/view/"+i_p
            string_4 = string_4 + '<li><a href='+url+'>'+rights[id]+'</a></li>'
    }
    string_4 = string_4 + '</ul>'

    if(authors_data_ID.length!=0){
    $(".list4").append(string_4+'</li>')
    }

   }

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

    $( "#add" ).submit(function( event ) {
        event.preventDefault()
        window.location.href = "/add"
    });
})