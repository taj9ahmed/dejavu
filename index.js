function dejavu()
{
    var input = document.getElementById("input").value;
    var temp = input.split("");
    var ch="",tmp="",result="";

    result = "Unique Values";
    for(let i = 0; i < input.length; i++)
    {
        ch="";
        for(let j = (i+1); j< input.length; j++)
        {
            if(input[i] == input[j])
            {
                console.log(input[j] + " " + temp[i]);
                result = "Deja Vu";          
            }
            
        }
    }
    
    document.getElementById("output").innerHTML = result;

}