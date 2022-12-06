let heading = {}
let para = {}
let auto ={}


let text1 = ".blog-heading-"
let text2 = ".blog-para-"
let text3 = ".author-"
for(i =1;i<5;i++)
{
    heading[i] = document.querySelector(text1.concat(i))
    para[i] = document.querySelector(text2.concat(i))
    auto[i] = document.querySelector(text3.concat(i))
}

let head = {}
let par = {}
let at = {}
head[1] = "Two most important actors of Entrepreneurial Ecosystem: Accelerator & Incubator"
par[1] = 
`Before going in technical terms I want to start with an Example, Razor pay a fintech startup started in a small room in Jaipur by Harshil and Shashank in 2014
They got admission in Y combinator, one of the most famous accelerator from silicon valley. They have funded them with $1.2 lakh, which made their star sings and as result of that they got funding from many investors. Now they have their head office in Bangalore with thousand’s of customers and doing wonders in fintech
Another example is of Oyo rooms founded by Ritesh Agarwal in 2012 with lot of troubles, fortunately he got admission in Thiel fellowship of Peter Thien who was one of the key early investor in Facebook. He told Ritesh that he will give him $100 k funding and also introduce him with many of his official network so that he can grow his business. Ritesh accepted his proposal. Rest is history
Key points about Accelerator & Incubator Accelator<br> 
Time bounded – their purpose is to grow the startup in short span of time like in 4-12 weeks<br> 
Clear outcome – they work with a plan and make efforts to help the founder to upgrade his startup<br> 
Minority stake – they usually take stake in startup so that it would motivate them also to help the founder
Incubator<br> 
Long-time – they admit a startup for a longer time span usually more than a year <br> 
No clear outcome – they usually fund the startup and introduce the founder with his network to upgrade his startup<br> 
No minority stake – they usually don’t take stake in startup<br> 
Who is better for you, accelerator or incubator ?<br> 
<br> 
Accelerator usually don’t take Napkin stage ideas. They fund you only when if you have already launched your product/service and you have a minimum viable product in market with a small customer engagement whereas incubator can invest in you if you have your idea in paper stage also, but you have to prove yourself and your idea such that you can solve a real world problem with ample profit to boost the valuation of business with a specific future goal<br> 
Advantage of actuator and incubator<br> 
Increase in valuation<br> 
Increase in press coverage<br> 
Change in perception<br> 
Strengthening of network<br> 
Saving of time <br> 
funding<br> 

Most important part of incubation & acceleration program<br> 
<br> 
I know, You are thing that funding is the most important part of incubation & acceleration program. Trust me it is not, the most important part is Demo day<br> 
This day comes after the graduation for the program, You are called on the stage Infront of many investors, potential customers, and people who can work with you If you impress them. You need to give a 5-10 min speech about your product/service , what kind of real life problem it is solving , what’s your future plans ,etc. and if everything will go good , personalities  Infront of you may approach you and invest in your business.`
at[1] = "-Shanthanu"






for(i =1;i<5;i++)
{
    heading[i].innerHTML = head[i]
    para[i].innerHTML = par[i]
    auto[i].innerHTML = at[i]
}


console.log(total)