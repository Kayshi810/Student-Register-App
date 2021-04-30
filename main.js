Name_of_the_students_array = [];
function submit()
{
var display_student_array = [];
for(var k=1; k<=4; k++)
{
    var name_of_the_student = document.getElementById ("name_of_the_student_"+k).value;
    console.log (name_of_the_student);
    Name_of_the_students_array.push(name_of_the_student);
}
console.log (Name_of_the_students_array);
var length_of_the_array = Name_of_the_students_array.length;
console.log (length_of_the_array);
for(var h=0; h<length_of_the_array; h++)
{
    display_student_array.push("<h4> Name- "+Name_of_the_students_array[h]+ "</h4>");
    console.log (display_student_array);
}
document.getElementById ("display_name_with_commas").innerHTML = display_student_array;
var remove_commas = display_student_array.join(" ");
console.log (remove_commas);
document.getElementById ("display_name_without_commas").innerHTML = remove_commas;
document.getElementById ("submit_button").style.display = "none";
document.getElementById ("sort_button").style.display = "inline-block";
}

function sorting()
{
    Name_of_the_students_array.sort();
    console.log (Name_of_the_students_array);
    var display_student_array_sort = [];
    var length_of_the_array = Name_of_the_students_array.length;
    console.log (length_of_the_array);
    for(var h=0; h<length_of_the_array; h++)
{
    display_student_array_sort.push("<h4> Name- "+Name_of_the_students_array[h]+ "</h4>");
    console.log (display_student_array_sort);
    var remove_commas = display_student_array_sort.join(" ");
    console.log (remove_commas);
    document.getElementById ("display_name_without_commas").innerHTML = remove_commas;
}
}