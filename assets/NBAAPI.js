//Date Calculator that may be needed for other APIs

// var todayFull = new Date();
// var day = todayFull.getDate();
//         if(month < 9){
//             month = '0' + month;}
// var month = todayFull.getMonth()+1;
//         if(month < 9){ 
//             month = '0' + month;}
// var year = todayFull.getFullYear();

// var todayShort = year + '-' + month + '-' + day;

// console.log(todayShort);


//scoresURL is for the last 15 games
var scoresURL = "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387"

$.ajax({
     url: scoresURL,
     method: "GET"
   }).then(function(response) {
    for (var i = 0; i < response.events.length; i++){
    //Pull Visiting Team Information
        var visTeam = response.events[i].strAwayTeam;
        var visScore = response.events[i].intAwayScore;
    //Pull Home Team Information
        var homeTeam = response.events[i].strHomeTeam;
        var homeScore = response.events[i].intHomeScore;
    //Status or quater of the game
    //    var status = response.data[i].status;

    //create card for the score
        var scoreCard = $('<div>');
        scoreCard.addClass('card');
        //visitor line
        var visitor = $('<div>')
        visitor.addClass('visitor');
        visitor.text(visTeam+ ' ' + visScore);
        //hometeam line
        var home = $('<div>')
        home.addClass('visitor');
        home.text(homeTeam+ ' ' + homeScore);

        $(scoreCard).append(visitor);
        $(scoreCard).append(home);

        $('#scores').append(scoreCard);   //Using Scores for the last 15 games
     }    

  });


  //Games is for the next 15 events
  var gamesURL = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387"
  
  $.ajax({
       url: gamesURL,
       method: "GET"
     }).then(function(response) {
      for (var i = 0; i < response.events.length; i++){
      //Pull Visiting Team Information
          var visTeam = response.events[i].strAwayTeam;
      //Pull Home Team Information
          var homeTeam = response.events[i].strHomeTeam;
      //Status or quater of the game
          var tipTime = response.events[i].strTime;
  
      //create card for the score
          var scoreCard = $('<div>');
          scoreCard.addClass('card');
          //visitor line
          var visitor = $('<div>')
          //visitor.addClass('visitor');
          visitor.text(visTeam);
          //hometeam line
          var home = $('<div>')
          //home.addClass('home');
          home.text(homeTeam+ '       ' + tipTime);
  
          $(scoreCard).append(visitor);
          $(scoreCard).append(home);
  
          $('#games').append(scoreCard);   //Using Scores for the last 15 games
       }    
  
    });


    //Getting the teams' links
     var gamesURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387"
  
        $.ajax({
            url: gamesURL,
            method: "GET"
            }).then(function(response) {

        for (var i = 0; i < response.teams.length; i++){
            var team = response.teams[i].strTeam;
            var teamLogo = response.teams[i].strTeamBadge;
            var teamIcon = $('<img>');
            var teamLink = response.teams[i].strWebsite;
            var teamLink = 'https://' + teamLink;
            var link = $('<a>');

            teamIcon.addClass('icon');
            teamIcon.attr('src', teamLogo);

            link.attr('href', teamLink);
            link.attr('target', '_blank');

            $(link).append(teamIcon);

            $('#teamLinks').append(link);            
        }
     })


    var standingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4387&s=2019-2020";
  
    $.ajax({
         url: standingsURL,
         method: "GET"
       }).then(function(response) {
  
          for (var i = 0; i < response.table.length; i++){
              var team = response.table[i].name;
              var wins = response.table[i].win;
              var loss = response.table[i].loss;

              var recordCard = $('<div>');
              recordCard.addClass('card');
              $(recordCard).append(team + ' ' + wins + ' ' + loss)
              $('#records').append(recordCard);


            }
        })