let labels1=['Yes' , 'Yes But in Green'];
let data1 = [69 , 31];
let colors1 = ['#49A9EA' , '#36CAAB']


let myChart1 = document.getElementById("Doughnut-Chart").getContext('2d');

let chart1 = new Chart(myChart1 , {

type:'doughnut' ,

data: {

    labels: labels1,
    datasets: [{

        data:data1,
        backgroundColor: colors1 ,
    }]
} ,
options:{
    title:{
        text:"Do You Like Ice-Cream",
        display: true
    }
}


});


// BAR CHART //

let labels2=['China' , 'India' , 'America' , 'Indonasia' , 'Pakistan' , 'Brazil' ,'Russia' , 'Japan'];
let data2 = [1433783686 , 1366417754 ,329064917,270625568 , 216565318 , 211049527 ,145872256 , 126860301];
let colors2 = ['#49A9EA' , '#36CAAB' ,'#34495E' , '#B370CF' , '#e4bc55','#9455e4', '#ebdd3d' , '#be54b2']


let myChart2 = document.getElementById("Bar-Chart").getContext('2d');

let chart2 = new Chart(myChart2 , {

type:'line' ,

data: {

    labels: labels2,
    datasets: [{

        data:data2,
        backgroundColor: colors2 ,
    }]
} ,
options:{
    title:{
        text:"Highest Populated country",
        display: true
    }
}


});


// Pie Chart //
let labels3=['Germany' , 'France' ,'UK' ,'Italy' ,'Spain' ,'Others(23)'];
let data3 = [83 , 67 , 66 ,61,47,187];
let colors3 = ['#49A9EA' , '#36CAAB' ,'#9455e4', '#ebdd3d' , '#be54b2' ,'#34495E']


let myChart3 = document.getElementById("Pie-Chart").getContext('2d');

let chart3 = new Chart(myChart3 , {

type:'pie' ,

data: {

    labels: labels3,
    datasets: [{

        data:data3,
        backgroundColor: colors3 ,
    }]
} ,
options:{
    title:{
        text:"Population of Europe Union (in millions)",
        display: true
    }
}


});