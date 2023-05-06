angular.module("imdbUygulamasi", []).controller("kontrol", function($scope, $http) {

    if ($scope.arananFilm == undefined) {

        $scope.arananFilm = "";
        veriGetir();
    }

    $scope.guncelle = function() {

        var aramaIslemi = setTimeout(veriGetir, 100);
    }

    function veriGetir() {

        $http.get("http://www.omdbapi.com/?apikey=5f18c59c&t=" + $scope.arananFilm + "&tomatoes=true&plot=full")
            .success(function(response) {

                $scope.sonuc = response;
            });

        $http.get("http://www.omdbapi.com/?apikey=5f18c59c&s=" + $scope.arananFilm)
            .success(function(response) {

                $scope.ilgiliSonuclar = response;
            });
    }

    $scope.yenile = function(film) {

        $scope.arananFilm = film.Title;
        $scope.guncelle();
    }
});