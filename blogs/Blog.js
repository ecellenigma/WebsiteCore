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
par[1] = `INTRODUCTION<br></br>
Before going into technical terms I want to start with an example, Razor pay a fintech startup started in a small room in Jaipur by Harshil and Shashank in 2014.
They got admission to Y combinator, one of the most famous accelerators from silicon valley. They have funded them with $1.2 lakh, which made their star sings and as a result of that, they got funding from many investors. Now they have their head office in Bangalore with thousands of customers and doing wonders in fintech.
Another example is Oyo rooms founded by Ritesh Agarwal in 2012 with a lot of troubles, fortunately, he got admission to the Thiel fellowship of Peter Thien who was one of the key early investors in Facebook. He told Ritesh that he will give him $100 k funding and also introduce him to many of his official networks so that he can grow his business. Ritesh accepted his proposal. Rest is history.
<br>
<br>
KEY POINTS ABOUT ACCELERATOR & INCUBATOR<br></br>
Accelerator :<br></br>
1. Time bounded – their purpose is to grow the startup in a short period like in 4-12 weeks<br>
2. Clear outcome – they work with a plan and make efforts to help the founder to upgrade his startup<br> 
3. Minority stake – they usually take a stake in startups so that it would motivate them also to help the founder<br>
<br>
Incubator :<br></br>
1. Long-time – they admit startups for a longer time usually more than a year<br> 
2. No clear outcome – they usually fund the startup and introduce the founder to his networks to upgrade his startup<br>
3. No minority stake – they usually don't take a stake in a startup<br>
<br>
<br>
WHO IS BETTER FOR YOU, AN ACCELERATOR OR AN INCUBATOR?<br></br>
Accelerators usually don't take Napkin stage ideas. They fund you only when if you have already launched your product/service and you have a minimum viable product in the market with a small customer engagement whereas an incubator can invest in you if you have your idea in the paper stage also, but you have to prove yourself and your idea such that you can solve a real-world problem with ample profit to boost the valuation of business with a specific future goal<br>
You can click on the following link to know about top accelerators and incubators in India:<br>
<a href="https://devx.work/blog/top-startup-accelerators-and-incubators-in-india/">Top 10 Startup Accelerators and Incubators in India - DevX</a>

<br>
<br>
ADVANTAGES OF ACTUATOR AND INCUBATOR<br></br>
1. Increase in valuation<br>
2. Increase in press coverage<br>
3. Change in perception<br>
4. Strengthening of network<br>
5. Saving of time<br>
6. funding<br>
<br>
<br>
<b> MOST IMPORTANT PART OF THE INCUBATION & ACCELERATION PROGRAM </b><br></br>
I know, You think that funding is the most important part of the incubation & acceleration program. Trust me it is not, the most important part is Demo day
This day comes after graduation from the program, You are called onto the stage in Infront of many investors, potential customers, and people who can work with you If you impress them. You need to give a 5-10 min speech about your product/service, what kind of real-life problem it is solving, what's your plans, etc. and if everything will go well, personalities  Infront of you may approach you and invest in your business.<br>
`
at[1] = "-Shanthanu"






for(i =1;i<5;i++)
{
    heading[i].innerHTML = head[i]
    para[i].innerHTML = par[i]
    auto[i].innerHTML = at[i]
}


console.log(total)