name_of_guest_array=[];
function submit() {
    var display_guest_array=[];
        var name_of_guest=document.getElementById("name_of_the_guest").value;
        console.log(name_of_guest);
        name_of_guest_array.push(name_of_guest);
    console.log(name_of_guest_array);
    var length=name_of_guest_array.length;
    console.log(length);
    for (var k=0; k < length; k++) {
        display_guest_array.push("<h4>Name-" + name_of_guest_array[k] + "</h4>");
        console.log(display_guest_array);
    }
    console.log(display_guest_array);
    document.getElementById("display_name_with_commas").innerHTML=display_guest_array;
    var remove_comma=display_guest_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;

    document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    name_of_guest_array.sort();
    console.log(name_of_guest_array);

    var display_sorting=[];

    var length=name_of_guest_array.length;
    console.log(length);
    for (var k=0; k < length; k++) {
        display_sorting.push("<h4>Name-" + name_of_guest_array[k] + "</h4>");
        console.log(display_sorting);
    }

    var remove_comma=display_sorting.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}

function search() {
    var s=document.getElementById("search_name").value;
    var found=0;
    var j;
    for(j=0; j<name_of_guest_array.length; j++) {
        if(s==name_of_guest_array[j]) {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="name found " +found+ " time/s";
    console.log("found name " +found+ " time/s" );
}