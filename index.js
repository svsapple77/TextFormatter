document.getElementById("input").value = "Enter text";
document.getElementById("input").addEventListener("click",function()
{
    document.getElementById("input").value = "";
});
document.getElementById("submit").addEventListener("click",function()
{
    var s = document.getElementById("input").value;
    var cnt = 0;
    var res = "";
    for(let i of s)
    {
        if(i===" ")
        {
            cnt += 1;
        }
        if(cnt === 3)
        {
            cnt = 0;
            res += "\n";
        }
        else{
            res += i;
        }
    }
    document.getElementById("output").value = "";
    document.getElementById("output").value = res;
});
document.getElementById("output").value = "Output area";
document.getElementById("copy").addEventListener("click",function()
{
    var copytxt = document.getElementById("input");
    copytxt.select();
    copytxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytxt.value);
    console.log(copytxt.value);
});