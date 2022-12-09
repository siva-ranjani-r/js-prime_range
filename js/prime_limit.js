var flex=document.createElement("div");
flex.style.display="flex";
flex.style.flexDirection="column";
flex.style.justifyContent="center";
flex.style.alignItems="center";
flex.style.backgroundColor="teal";
document.body.appendChild(flex);


var h1=document.createElement("h1");
h1.style.color="khaki";
h1.innerText="Check wheather the number is prime or not";
flex.appendChild(h1);


var input=document.createElement("input");
input.setAttribute("id","input");
input.placeholder="enter range";
input.style.margin="10px";
input.style.backgroundColor="lightgreen";
input.style.border="2px solid lightgreen";
flex.appendChild(input);

var f=document.createElement("div");
f.style.display="flex";
f.style.flexDirection="row";
f.style.justifyContent="center";
f.style.alignItems="center";
f.style.backgroundColor="teal";
flex.appendChild(f);


var but=document.createElement("button");
but.setAttribute("id","but");
but.innerHTML="check";
but.style.margin="10px";
but.style.border="2px solid lime";
but.style.borderRadius="40%";
but.style.backgroundColor="lime";
f.appendChild(but);
but.onclick=function()
{
	var cflex=document.createElement("div");
	cflex.setAttribute("id","cflex");
	cflex.style.display="flex";
	cflex.style.flexDirection="column";
	cflex.style.justifyContent="center";
	cflex.style.alignItems="center";
	cflex.style.backgroundColor="white";
	cflex.style.margin="10px";
	flex.appendChild(cflex);
	var range=parseInt(document.getElementById("input").value);
	var bool=true;
	for(number=1;number<=range;number++)
	{
		var output=document.createElement("p");
		output.setAttribute("id","output");
		output.style.display="flex";
		output.style.flexDirection="column";
		output.style.justifyContent="center";
		output.style.alignItems="center";
		output.style.color="teal";
		output.style.margin="10px";
		cflex.appendChild(output);
		if(number>2)
		{
			for(i=2;i<number;i++)
			{
				if(number%i==0)
				{
					bool=false;
				}
			}
		}
		if(bool)
		{
			output.innerHTML=number+" is a prime number";
		}
		else
		{
			output.innerHTML=number+" is not a prime number";
		}
		bool=true;
	}
}
var clear=document.createElement("button");
f.appendChild(clear);
clear.innerHTML="clear";
clear.style.margin="10px";
clear.style.border="2px solid aqua";
clear.style.borderRadius="40%";
clear.style.backgroundColor="aqua";
clear.onclick=function()
{
	document.getElementById('input').value = ' ';
	document.getElementById('cflex').innerHTML = ' ';
}

