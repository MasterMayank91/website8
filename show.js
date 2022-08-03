
try
{
    document.write("<fieldset name='math'><legend> MATHAMETIC </legend>");
				
    for(var i = 0; i<math.length; i++)
    {
        for(var j = 0; j<3; j++)
        {
            document.write("<div>"+math[i][j]+"</div>");
        }
    }
    document.write("</fieldset>");

    document.write("<fieldset name='realtion'><legend> REALTION </legend>");

        for(var i = 0; i<realtion.length; i++)
        {
            for(var j = 0; j<3; j++)
            {
                document.write("<div>"+realtion[i][j]+"</div>");
            }
        }
    document.write("</fieldset>");

    document.write("<fieldset name='money'><legend> MONEY </legend>");
        
        for(var i = 0; i<money.length; i++)
        {
            for(var j = 0; j<3; j++)
            {
                document.write("<div>"+money[i][j]+"</div>");
            }
        }
    document.write("</fieldset>");

    document.write("<fieldset name='game'><legend> GAME </legend>");
        
        for(var i = 0; i<game.length; i++)
        {
            for(var j = 0; j<3; j++)
            {
                document.write("<div>"+game[i][j]+"</div>");
            }
        }
    document.write("</fieldset>");

    document.write("<fieldset name='work'><legend> WORK </legend>");

        work.forEach(i=>
        {
            document.writeln("<div id='id"+i+"' >&#"+i+";</div>");

            document.getElementById("id"+i+"").onclick = function()
            {
                alert("&#"+i+";");
            }
        });

    document.write("</fieldset>");

    document.write("<fieldset name='graphic'><legend> GRAPHIC </legend>");

        graphic.forEach(i=>
        {
            document.writeln("<div id='id"+i+"' >&#"+i+";</div>");

            document.getElementById("id"+i+"").onclick = function()
            {
                alert("&#"+i+";");
            }
        });

    document.write("</fieldset>");


    document.write("<fieldset name='hindi'><legend> HINDI </legend>");

        for(var i=2308; i<2418; i++)
        {
            if(i!=2362 && i!=2363 && i!=2382 && i!=2383 && i!=2389 && i!=2390 && i!=2391 && i!=2384)
            {
                document.writeln("<div id='id"+i+"' >&#"+i+";</div>");

                document.getElementById("id"+i+"").onclick = function()
                {
                    alert("&#"+i+";");
                }
            }			
        }

    document.write("</fieldset>");
}
catch(error)
{
    alert("ERROR : Please Check Script");
}