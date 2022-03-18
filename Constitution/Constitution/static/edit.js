function edit_query(submitted){
    $.ajax({
        type: "POST",
        url: "/edit_submit",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(submitted),
        success: function(result){
            console.log("success")
            let d = result["data"]
            let id = d["ID"]
            window.location.href = "/view/"+id
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


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
    
    $(".submit").append('<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>')
    $(".discard").append('<button class="btn btn-outline-success my-2 my-sm-0" type="discard">Discard Changes</button>')
    console.log(data)

    $(".name").val(data.title)
    $(".image").append('<img src='+data.image+' width="500" height="300" >')
    $(".image_url").val(data.image)
    $(".year").val(data.drafted)
    $(".article").val(data.article)
    $(".summary").val(data.summary)
    $.each(data.Author,function(i,author){
        let i_p = i+1
        $(".author"+i_p).val(author)
    })
    $(".sc_interpretation").val(data.sc_interpretation)
    $.each(data.Utility,function(i,util){
        let i_p = i+1
        $(".utility"+i_p).val(util)
    })
    $.each(data.landmark_judgements,function(i,judge){
        let i_p = i+1
        $(".judgements"+i_p).val(judge)
    })
    $.each(data.genres,function(i,genre){
        let i_p = i+1
        $(".genres"+i_p).val(genre)
    })

    $( "#to_focus" ).autocomplete({
        source: rights
      });

    $(".name").focus()
    $( "#search_b" ).submit(function( event ) {
        let to_submit = $.trim($( "input" ).first().val())
        event.preventDefault()
        if(to_submit.length != 0){
            //server_query(to_submit) 
            window.location.href = "/s_query/"+to_submit
            
        }
        $("#to_focus").val("")
        console.log(to_submit)
        
        $("#to_focus").focus()

    });

    $( "#submit" ).submit(function( event ) {
        event.preventDefault()
        let Submitted_title = $.trim($(".name").val())
        let Submitted_image_url = $.trim($(".image_url").val())
        let Submitted_year = $.trim($(".year").val())
        let Submitted_article = $.trim($(".article").val())
        let Submitted_summary = $.trim($(".summary").val())
        let Submitted_sc_interpretation = $.trim($(".sc_interpretation").val())
        Submitted_Author = []
        Submitted_Utility = []
        Submitted_Judgements = []
        Submitted_Genres = []

        for(let i=1; i<=3; i++){
            if(($.trim($(".author"+i).val())).length != 0){
                Submitted_Author.push($.trim($(".author"+i).val()))
            }
            if(($.trim($(".utility"+i).val())).length != 0){
                Submitted_Utility.push($.trim($(".utility"+i).val()))
            }     
            if(($.trim($(".judgements"+i).val())).length != 0){
                Submitted_Judgements.push($.trim($(".judgements"+i).val()))
            }        
        }

        for(let i=1; i<=9; i++){
            if(($.trim($(".genres"+i).val())).length != 0){
                Submitted_Genres.push($.trim($(".genres"+i).val()))
            }     
        }

        if( (Submitted_title.length==0) || (Submitted_image_url.length==0) || (Submitted_year.length==0) ||
            (Submitted_article.length==0) || (Submitted_summary.length==0) || (Submitted_sc_interpretation.length==0) ||
            (Submitted_Author.length==0) || (Submitted_Utility.length==0) || (Submitted_Judgements.length==0) ||
            (Submitted_Genres.length==0) )
        {
            if(Submitted_title.length==0){
                $(".Warning_name").css("color","red")
                $(".Warning_name").html("Fill the Constitutional Right/Title")
                $(".name").focus()
            }

            if(Submitted_image_url.length==0){
                $(".Warning_image").css("color","red")
                $(".Warning_image").html("Fill the Relevant image URL")
                $(".image_url").focus()
            }

            if(Submitted_year.length==0){
                $(".Warning_year").css("color","red")
                $(".Warning_year").html("Fill the Drafted Year")
                $(".year").focus()
            }

            if(Submitted_summary.length==0){
                $(".Warning_summary").css("color","red")
                $(".Warning_summary").html("Fill the Summary of the Right")
                $(".summary").focus()
            }

            if(Submitted_sc_interpretation.length==0){
                $(".Warning_interpretation").css("color","red")
                $(".Warning_interpretation").html("Fill the Interpretation of the Right")
                $(".sc_interpretation").focus()
            }

            if(Submitted_Author.length==0){
                $(".Warning_authors").css("color","red")
                $(".Warning_authors").html("Mention at-least one author")
                $(".author1").focus()
            }

            if(Submitted_Utility.length==0){
                $(".Warning_utility").css("color","red")
                $(".Warning_utility").html("Mention at-least one group who can utilize the Right")
                $(".utility1").focus()
            }

            if(Submitted_Judgements.length==0){
                $(".Warning_judgements").css("color","red")
                $(".Warning_judgements").html("Mention at-least one important judgement")
                $(".judgements1").focus()
            }

            if(Submitted_Genres.length==0){
                $(".Warning_genres").css("color","red")
                $(".Warning_genres").html("Mention at-least one Genre which it belongs to")
                $(".genres1").focus()
            }

            if(Submitted_article.length==0){
                $(".Warning_article").css("color","red")
                $(".Warning_article").html("Fill the articles which the right belongs to")
                $(".article").focus()
            }
        }
        else if(isNaN(Submitted_year) == true){
            $(".Warning_year").css("color","red")
            $(".Warning_year").html("Require a Numerical Value")
            $(".year").val(data.drafted)
            $(".year").focus()
        }
        else{
            let submitted =  {
                "id": ID,
                "title": $.trim($(".name").val()),
                "image": $.trim($(".image_url").val()),
                "drafted": $.trim($(".year").val()),
                "article": $.trim($(".article").val()),
                "summary": $.trim($(".summary").val()),
                "Author": Submitted_Author,
                "sc_interpretation": $.trim($(".sc_interpretation").val()),
                "Utility": Submitted_Utility,
                "landmark_judgements": Submitted_Judgements,
                "genres": Submitted_Genres
            }
            
            edit_query(submitted)
        }
        

    });

    $( "#discard" ).submit(function( event ) {
        event.preventDefault()
        let confirmAction = confirm("Are you sure to discard the changes? Click Cancel to Not Discard")

        if(confirmAction){
            window.location.href = "/view/"+ID
        }
        
    });

    
})