function start_clock ()
{
    let date = new Date ();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    if(hrs <10 ) hrs = '0'+hrs ;
    if(mins <10 ) mins = '0'+mins ;
    if(secs <10 ) secs = '0'+secs ;

    state_12 = document.getElementById('option-1').checked;

    if (!state_12)
    {
        var time = `${hrs}:${mins}:${secs}`;
        document.getElementById("clock").innerHTML = time;
    }
    else 
    {
        state = 'am';

        if(hrs === '00')
        {
            hrs = 12;
        }

        else if (hrs>=12)
        {
            state = 'pm';
            hrs = hrs> 12 ? hrs-12 : hrs;
        }
        var time = `${hrs}:${mins}:${secs}:${state}`;
        document.getElementById("clock").innerHTML = time;
    }


    setTimeout(start_clock, 1000);
    
}

start_clock();