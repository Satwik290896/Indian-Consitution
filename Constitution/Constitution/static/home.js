
function update_page(ID,total_ids){
    $(".name").html("")
    $(".list").html("")
    $(".name").append('<b><h3>Searching for</h3></b>')
    if(total_ids != 0){
        $.each(ID,function(i,id){
            switch(id){
                case 0:
                    $(".list").append('<li><a href="/view/1">'+rights[id]+'</a></li>')
                    break
                case 1:
                    $(".list").append('<li><a href="/view/2">'+rights[id]+'</a></li>')
                    break
                case 2:
                    $(".list").append('<li><a href="/view/3">'+rights[id]+'</a></li>')
                    break
                case 3:
                    $(".list").append('<li><a href="/view/4">'+rights[id]+'</a></li>')
                    break
                case 4:
                    $(".list").append('<li><a href="/view/5">'+rights[id]+'</a></li>')
                    break
                case 5:
                    $(".list").append('<li><a href="/view/6">'+rights[id]+'</a></li>')
                    break
                case 6:
                    $(".list").append('<li><a href="/view/7">'+rights[id]+'</a></li>')
                    break
                case 7:
                    $(".list").append('<li><a href="/view/8">'+rights[id]+'</a></li>')
                    break
                case 8:
                    $(".list").append('<li><a href="/view/9">'+rights[id]+'</a></li>')
                    break
                case 9:
                    $(".list").append('<li><a href="/view/10">'+rights[id]+'</a></li>')
                    break
            }
            
        })
    }
}


$(document).ready(function(){
    $(".add").append('<button class="btn btn-outline-success my-2 my-sm-0" type="add">Add</button>')
    $(".name").append('<b><h5><u>Most Viewed/Important Rights</u></h5></b>')
    $.each(ID,function(i,id){
        let string = "/view/"+(id+1)
        if(i==0){
            $(".list1").append('<u><a href='+string+'>'+rights[id]+'</a></u>')
            $(".list1").append('<a href='+string+'>'+'<img src='+data[id+1].image+' alt="Home Page Image-1" width="350" height="200" ></a>')
            $(".list1").append('<a href='+string+'>'+'Latest News on A.N Bhaskar vs Kerala Government</a>')
        }
        if(i==1){
            $(".list2").append('<u><a href='+string+'>'+rights[id]+'</a></u>')  
            $(".list2").append('<a href='+string+'>'+'<img src='+data[id+1].image+' alt="Home Page Image-2" width="350" height="200" ></a>')   
            $(".list2").append('<a href='+string+'>'+'Latest News on Bhattachari vs Sabarimala Incident</a>')
        }
        if(i==2){
            $(".list3").append('<u><a href='+string+'>'+rights[id]+'</a></u>')    
            $(".list3").append('<a href='+string+'>'+'<img src='+data[id+1].image+' alt="Home Page Image-3" width="350" height="200" ></a>')   
            $(".list3").append('<a href='+string+'>'+'Latest News on Sarayu vs CM Maharaj (A terror Incident)</a>')
        }
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

    $( "#add" ).submit(function( event ) {
        event.preventDefault()
        window.location.href = "/add"
    });
})