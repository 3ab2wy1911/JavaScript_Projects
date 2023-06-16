function write_num(num)
{
    out = document.getElementById("output");
    temp = out.value;
    if(temp == 0 || temp =="Invalid syntax" )
    {
        out.value = num;
    }
    else out.value += num;

}

function write_operator(operator)
{
    out = document.getElementById("output");
    temp = out.value;
    if (out.value == 0)
    {
        if (operator == '-')
        {
            out.value = '-';
        }
        else if (operator == "(")
        out.value = '(';
    }
    else {
        out.value += operator;
    }
}

function delete_last()
{
    let temp = document.getElementById("output").value;
    temp = temp.slice(0, -1);
    if (temp == '')
    {
        document.getElementById("output").value = 0;
    }
    else
    {

        document.getElementById("output").value = temp;
    }
}

function evaluate_expression()
{
    try {
    operation = document.getElementById("output").value;
    document.getElementById("output").value = eval (operation);
    }
    
    catch (error) {
    document.getElementById("output").value = "Invalid syntax";
}
}

function clear_screen()
{
    document.getElementById("output").value = '0';
}
