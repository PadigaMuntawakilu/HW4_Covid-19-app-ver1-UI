// $(document).ready(function(){

//     var $reports = $('#reports'); 

//     $.ajax({
//         type:'GET',
//         url:'https://covid-api.com/api/reports?region_name=US',
//         success: function(reports){
         
//           $.each(reports.data, function(i, report){
//             console.log(report.confirmed);
//             // $reports.append('<tr><td>' + report.recovered + '</td><td>' + report.confirmed + '</td><td>' + report.active + '</td><td> ' + report.recovered + '</td><td>' + report.deaths + '</td></tr>');     
//           });
//         }
//     });
// })

var $reports = $('#reports'); 

async function fetchdata(){
     response = await fetch('https://covid-api.com/api/reports');
     let reports = await response.json();
               $.each(reports.data, function(i, report){
            console.log(report.confirmed);
            $reports.append('<tr><td>' + report.region.name + '</td><td>' + report.confirmed + '</td><td>' + report.active + '</td><td> ' + report.recovered + '</td><td>' + report.deaths + '</td></tr>');     
          });
}

fetchdata();
