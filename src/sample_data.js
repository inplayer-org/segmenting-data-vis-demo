
const sampleData =	{
  'monetary': [
{ y: 23354,  x:0.0 }, 
{ y: 0,  x:0.76569678405 }, 
{ y: 0,  x:1.5313935681 }, 
{ y: 8,  x:2.2970903521499997 }, 
{ y: 4,  x:3.0627871362 }, 
{ y: 12,  x:3.82848392025 }, 
{ y: 13,  x:4.594180704299999 }, 
{ y: 21,  x:5.3598774883499996 }, 
{ y: 7,  x:6.1255742724 }, 
{ y: 8,  x:6.89127105645 }, 
{ y: 1,  x:7.6569678405 }, 
{ y: 9,  x:8.42266462455 }, 
{ y: 0,  x:9.188361408599999 }, 
{ y: 0,  x:9.954058192649999 }, 
{ y: 22,  x:10.719754976699999 }, 
{ y: 287,  x:11.48545176075 }, 
{ y: 653,  x:12.2511485448 }, 
{ y: 519,  x:13.01684532885 }, 
{ y: 445,  x:13.7825421129 }, 
{ y: 249,  x:14.54823889695 }, 


      ],
'count': [

{ y: 17725,  x:0.0 }, 
{ y: 0,  x:0.1 }, 
{ y: 0,  x:0.2 }, 
{ y: 0,  x:0.30000000000000004 }, 
{ y: 0,  x:0.4 }, 
{ y: 0,  x:0.5 }, 
{ y: 0,  x:0.6000000000000001 }, 
{ y: 0,  x:0.7000000000000001 }, 
{ y: 0,  x:0.8 }, 
{ y: 0,  x:0.9 }, 
{ y: 5486,  x:1.0 }, 
{ y: 0,  x:1.1 }, 
{ y: 0,  x:1.2000000000000002 }, 
{ y: 0,  x:1.3 }, 
{ y: 0,  x:1.4000000000000001 }, 
{ y: 0,  x:1.5 }, 
{ y: 0,  x:1.6 }, 
{ y: 0,  x:1.7000000000000002 }, 
{ y: 0,  x:1.8 }, 
{ y: 1721,  x:1.9000000000000001 }, 

],
'recency':[
{ y: 23159,  x:0.0 }, 
{ y: 0,  x:0.1 }, 
{ y: 0,  x:0.2 }, 
{ y: 0,  x:0.30000000000000004 }, 
{ y: 0,  x:0.4 }, 
{ y: 0,  x:0.5 }, 
{ y: 0,  x:0.6000000000000001 }, 
{ y: 0,  x:0.7000000000000001 }, 
{ y: 0,  x:0.8 }, 
{ y: 0,  x:0.9 }, 
{ y: 1616,  x:1.0 }, 
{ y: 0,  x:1.1 }, 
{ y: 0,  x:1.2000000000000002 }, 
{ y: 0,  x:1.3 }, 
{ y: 0,  x:1.4000000000000001 }, 
{ y: 0,  x:1.5 }, 
{ y: 0,  x:1.6 }, 
{ y: 0,  x:1.7000000000000002 }, 
{ y: 0,  x:1.8 }, 
{ y: 921,  x:1.9000000000000001 }, 
],

'first_trans':
[
{ y: 23159,  x:0.0 }, 
{ y: 1616,  x:1.0 }, 
{ y: 921,  x:2.0 }, 
{ y: 562,  x:3.0 }, 
{ y: 588,  x:4.0 }, 
{ y: 134,  x:5.0 }, 
{ y: 62,  x:6.0 }, 
{ y: 75,  x:7.0 }, 
{ y: 33,  x:8.0 }, 
{ y: 9,  x:9.0 }, 
{ y: 19,  x:10.0 }, 
{ y: 27,  x:11.0 }, 
{ y: 12,  x:12.0 }, 
{ y: 37,  x:13.0 }, 
{ y: 79,  x:14.0 }, 
{ y: 61,  x:15.0 }, 
{ y: 30,  x:16.0 }, 
{ y: 31,  x:17.0 }, 
{ y: 29,  x:18.0 }, 
{ y: 64,  x:19.0 },
]


}

const getData = function(classN,data=sampleData) {


    return  data[classN]
      };


export  {
 sampleData,
getData 
}





