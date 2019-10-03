const themeRed =
{
  area:  { fill: "#c43a31" },
   stack:        { colorScale:"red"} 

  
}
const themeBlue =
{
  area:  { fill: "#e4aab1" },
     stack:        { colorScale:"blue"} 

  
}
const themeGreen =
{
  area:  { fill: "#c44ab1" },
     stack:        { colorScale:"green"} ,
     scatter: {data: {fill: "#c44ab1"}}

  
}


const themes = { 'themeRed': themeRed,

'themeGreen': themeGreen, 
'themeBlue':
themeBlue
}


export {themes}