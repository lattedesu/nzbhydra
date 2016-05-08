var nzbhydraapp = angular.module('nzbhydraApp', ['angular-loading-bar', 'cgBusy', 'ngAnimate', 'ui.bootstrap', 'ipCookie', 'angular-growl', 'angular.filter', 'filters', 'ui.router', 'blockUI', 'mgcrea.ngStrap', 'angularUtils.directives.dirPagination', 'nvd3', 'formly', 'formlyBootstrap', 'frapontillo.bootstrap-switch', 'ui.select', 'ngSanitize', 'checklist-model', 'ngAria', 'ngMessages', 'ui.router.title']);

angular.module('nzbhydraApp').config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "blockUIConfig", "$urlMatcherFactoryProvider", function ($stateProvider, $urlRouterProvider, $locationProvider, blockUIConfig, $urlMatcherFactoryProvider) {

    blockUIConfig.autoBlock = false;
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state("search.results", {
            templateUrl: "static/html/states/search-results.html",
            controller: "SearchResultsController",
            controllerAs: "srController",
            options: {
                inherit: false
            },
            params: {
                results: [],
                indexersearches: [],
                total: 0,
                resultsCount: 0,
                minsize: undefined,
                maxsize: undefined,
                minage: undefined,
                maxage: undefined
            }, resolve: {
                $title: function () {
                    return "Search results"
                }
            }
        })
        .state("config", {
            url: "/config",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function(){return "Config"}
            }
        })
        .state("config.auth", {
            url: "/auth",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Config (Auth)"
                }
            }
        })
        .state("config.searching", {
            url: "/searching",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Config (Searching)"
                }
            }
        })
        .state("config.downloader", {
            url: "/downloader",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Config (Downloader)"
                }
            }
        })
        .state("config.indexers", {
            url: "/indexers",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Config (Indexers)"
                }
            }
        })
        .state("config.system", {
            url: "/system",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System"
                }
            }
        })
        .state("config.log", {
            url: "/log",
            templateUrl: "static/html/states/config.html",
            controller: "ConfigController",
            resolve: {
                config: ['ConfigService', function (ConfigService) {
                    return ConfigService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System (Log)"
                }
            }
        })
        .state("stats", {
            url: "/stats",
            templateUrl: "static/html/states/stats.html",
            controller: "StatsController",
            resolve: {
                stats: ['StatsService', function (StatsService) {
                    return StatsService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Stats"
                }
            }
        })
        .state("stats.indexers", {
            url: "/indexers",
            templateUrl: "static/html/states/stats.html",
            controller: "StatsController",
            resolve: {
                stats: ['StatsService', function (StatsService) {
                    return StatsService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Stats (Indexers)"
                }
            }
        })
        .state("stats.searches", {
            url: "/searches",
            templateUrl: "static/html/states/stats.html",
            controller: "StatsController",
            resolve: {
                stats: ['StatsService', function (StatsService) {
                    return StatsService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Stats (Searches)"
                }
            }
        })
        .state("stats.downloads", {
            url: "/downloads",
            templateUrl: "static/html/states/stats.html",
            controller: "StatsController",
            resolve: {
                stats: ['StatsService', function (StatsService) {
                    return StatsService.get();
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Stats (Downloads)"
                }
            }
        })
        .state("system", {
            url: "/system",
            templateUrl: "static/html/states/system.html",
            controller: "SystemController",
            resolve: {
                foobar: ['$http', function ($http) {
                    return $http.get("internalapi/askforadmin")
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System"
                }
            }
        })
        .state("system.updates", {
            url: "/updates",
            templateUrl: "static/html/states/system.html",
            controller: "SystemController",
            resolve: {
                foobar: ['$http', function ($http) {
                    return $http.get("internalapi/askforadmin")
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System (Updates)"
                }
            }
        })
        .state("system.log", {
            url: "/log",
            templateUrl: "static/html/states/system.html",
            controller: "SystemController",
            resolve: {
                foobar: ['$http', function ($http) {
                    return $http.get("internalapi/askforadmin")
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System (Log)"
                }
            }
        })
        .state("system.backup", {
            url: "/backup",
            templateUrl: "static/html/states/system.html",
            controller: "SystemController",
            resolve: {
                foobar: ['$http', function ($http) {
                    return $http.get("internalapi/askforadmin")
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System (Backup)"
                }
            }
        })
        .state("system.about", {
            url: "/about",
            templateUrl: "static/html/states/system.html",
            controller: "SystemController",
            resolve: {
                foobar: ['$http', function ($http) {
                    return $http.get("internalapi/askforadmin")
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System (About)"
                }
            }
        })
        .state("system.bugreport", {
            url: "/bugreport",
            templateUrl: "static/html/states/system.html",
            controller: "SystemController",
            resolve: {
                foobar: ['$http', function ($http) {
                    return $http.get("internalapi/askforadmin")
                }],
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "System (Bug report)"
                }
            }
        })
        .state("search", {
            url: "/:search?category&query&imdbid&tvdbid&title&season&episode&minsize&maxsize&minage&maxage&offsets&rid&mode&tmdbid&indexers",
            templateUrl: "static/html/states/search.html",
            controller: "SearchController",
            resolve: {
                safeConfig: ['ConfigService', function (ConfigService) {
                    return ConfigService.getSafe();
                }],
                $title: function () {
                    return "Search"
                }
            }
        })
    ;

    $locationProvider.html5Mode(true);
}]);

nzbhydraapp.config(["paginationTemplateProvider", function (paginationTemplateProvider) {
    paginationTemplateProvider.setPath('static/html/dirPagination.tpl.html');
}]);

nzbhydraapp.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 100;
}]);

nzbhydraapp.config(['growlProvider', function (growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalPosition('bottom-right');
}]);

nzbhydraapp.directive('ngEnter', function () {
    return function (scope, element, attr) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$evalAsync(attr.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

nzbhydraapp.filter('nzblink', function () {
    return function (resultItem) {
        var uri = new URI("internalapi/getnzb");
        uri.addQuery("guid", resultItem.guid);
        uri.addQuery("title", resultItem.title);
        uri.addQuery("provider", resultItem.provider);

        return uri.toString();
    }
});

nzbhydraapp.factory('focus', ["$rootScope", "$timeout", function ($rootScope, $timeout) {
    return function (name) {
        $timeout(function () {
            $rootScope.$broadcast('focusOn', name);
        });
    }
}]);

nzbhydraapp.filter('unsafe', ["$sce", function ($sce) {
    return $sce.trustAsHtml;
}]);

nzbhydraapp.config(["$provide", function ($provide) {
    $provide.decorator("$exceptionHandler", ['$delegate', '$injector', function ($delegate, $injector) {
        return function (exception, cause) {
            $delegate(exception, cause);
            try {
                console.log(exception);
                var stack = exception.stack.split('\n').map(function (line) {
                    return line.trim();
                });
                stack = stack.join("\n");
                $injector.get("$http").put("internalapi/logerror", {error: stack, cause: angular.isDefined(cause) ? cause.toString() : "No known cause"});
                

            } catch (e) {
                console.error("Unable to log JS exception to server", e);
            }
        };
    }]);
}]);

_.mixin({
    isNullOrEmpty: function (string) {
        return (_.isUndefined(string) || _.isNull(string) || (_.isString(string) && string.length === 0))
    }
});

angular
    .module('nzbhydraApp')
    .directive('hydraupdates', hydraupdates);

function hydraupdates() {
    controller.$inject = ["$scope", "UpdateService", "$sce"];
    return {
        templateUrl: 'static/html/directives/updates.html',
        controller: controller
    };

    function controller($scope, UpdateService, $sce) {

        $scope.loadingPromise = UpdateService.getVersions().then(function (data) {
            $scope.currentVersion = data.data.currentVersion;
            $scope.repVersion = data.data.repVersion;
            $scope.updateAvailable = data.data.updateAvailable;
            if ($scope.repVersion > $scope.currentVersion) {
                UpdateService.getChangelog().then(function(data) {
                    $scope.changelog = data.data.changelog;
                })
            }
        });
        
        UpdateService.getVersionHistory().then(function(data) {
            $scope.versionHistory = $sce.trustAsHtml(data.data.versionHistory);
        });

        $scope.update = function () {
            UpdateService.update();
        };

        $scope.showChangelog = function () {
            UpdateService.showChanges($scope.changelog);
        };
        
        

    }
}


angular
    .module('nzbhydraApp')
    .directive('searchResult', searchResult);

function searchResult() {
    return {
        templateUrl: 'static/html/directives/search-result.html',
        require: '^titleGroup',
        scope: {
            titleGroup: "=",
            showDuplicates: "=",
            selected: "=",
            rowIndex: "="
        },
        controller: ['$scope', '$element', '$attrs', controller],
        multiElement: true
    };

    function controller($scope, $element, $attrs) {
        $scope.titleGroupExpanded = false;
        $scope.hashGroupExpanded = {};

        $scope.toggleTitleGroup = function () {
            $scope.titleGroupExpanded = !$scope.titleGroupExpanded;
            if (!$scope.titleGroupExpanded) {
                $scope.hashGroupExpanded[$scope.titleGroup[0][0].hash] = false; //Also collapse the first title's duplicates
            }
        };

        $scope.groupingRowDuplicatesToShow = groupingRowDuplicatesToShow;
        function groupingRowDuplicatesToShow() {
            if ($scope.showDuplicates &&  $scope.titleGroup[0].length > 1 && $scope.hashGroupExpanded[$scope.titleGroup[0][0].hash]) {
                return $scope.titleGroup[0].slice(1);
            } else {
                return [];
            }
        }

        //<div ng-repeat="hashGroup in titleGroup" ng-if="titleGroup.length > 0 && titleGroupExpanded"  class="search-results-row">
        $scope.otherTitleRowsToShow = otherTitleRowsToShow;
        function otherTitleRowsToShow() {
            if ($scope.titleGroup.length > 1 && $scope.titleGroupExpanded) {
                return $scope.titleGroup.slice(1);
            } else {
                return [];
            }
        }
        
        $scope.hashGroupDuplicatesToShow = hashGroupDuplicatesToShow;
        function hashGroupDuplicatesToShow(hashGroup) {
            if ($scope.showDuplicates && $scope.hashGroupExpanded[hashGroup[0].hash]) {
                return hashGroup.slice(1);
            } else {
                return [];
            }
        }
    }
}
angular
    .module('nzbhydraApp')
    .directive('otherColumns', otherColumns);

function otherColumns($http, $templateCache, $compile, $window) {
    controller.$inject = ["$scope", "$http", "$uibModal", "growl"];
    return {
        scope: {
            result: "="
        },
        multiElement: true,

        link: function (scope, element, attrs) {
            $http.get('static/html/directives/search-result-non-title-columns.html', {cache: $templateCache}).success(function (templateContent) {
                element.replaceWith($compile(templateContent)(scope));
            });

        },
        controller: controller
    };

    function controller($scope, $http, $uibModal, growl) {

        $scope.showNfo = showNfo;
        function showNfo(resultItem) {
            if (resultItem.has_nfo == 0) {
                return;
            }
            var uri = new URI("internalapi/getnfo");
            uri.addQuery("indexer", resultItem.indexer);
            uri.addQuery("guid", resultItem.indexerguid);
            return $http.get(uri.toString()).then(function (response) {
                if (response.data.has_nfo) {
                    $scope.openModal("lg", response.data.nfo)
                } else {
                    if (!angular.isUndefined(resultItem.message)) {
                        growl.error(resultItem.message);
                    } else {
                        growl.info("No NFO available");
                    }
                }
            });
        }

        $scope.openModal = openModal;

        function openModal(size, nfo) {
            var modalInstance = $uibModal.open({
                template: '<pre class="nfo"><span ng-bind-html="nfo"></span></pre>',
                controller: 'NfoModalInstanceCtrl',
                size: size,
                resolve: {
                    nfo: function () {
                        return nfo;
                    }
                }
            });

            modalInstance.result.then();
        }
        
        $scope.downloadNzb = downloadNzb;
        
        function downloadNzb(resultItem) {
            //href = "{{ result.link }}"
            $window.location.href = resultItem.link;
        }

    }
}
otherColumns.$inject = ["$http", "$templateCache", "$compile", "$window"];

angular
    .module('nzbhydraApp')
    .controller('NfoModalInstanceCtrl', NfoModalInstanceCtrl);

function NfoModalInstanceCtrl($scope, $modalInstance, nfo) {

    $scope.nfo = nfo;

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
}
NfoModalInstanceCtrl.$inject = ["$scope", "$modalInstance", "nfo"];
angular
    .module('nzbhydraApp')
    .directive('searchHistory', searchHistory);


function searchHistory() {
    return {
        templateUrl: 'static/html/directives/search-history.html',
        controller: ['$scope', '$http','$state', controller],
        scope: {}
    };
    
    function controller($scope, $http, $state) {
        $scope.type = "All";
        $scope.limit = 100;
        $scope.pagination = {
            current: 1
        };

        getSearchRequestsPage(1);

        $scope.pageChanged = function (newPage) {
            getSearchRequestsPage(newPage);
        };
        
        $scope.changeType = function(type) {
            $scope.type = type;
            getSearchRequestsPage($scope.pagination.current);
        };

        function getSearchRequestsPage(pageNumber) {
            $http.get("internalapi/getsearchrequests", {params: {page: pageNumber, limit: $scope.limit, type: $scope.type}}).success(function (response) {
                $scope.searchRequests = response.searchRequests;
                $scope.totalRequests = response.totalRequests;
            });
        }
        
        $scope.openSearch = function (request) {
            var stateParams = {};
            if (request.identifier_key == "imdbid") {
                stateParams.imdbid = request.identifier_value;
            } else if (request.identifier_key == "tvdbid" || request.identifier_key == "rid") {
                if (request.identifier_key == "rid" ) {
                    stateParams.rid = request.identifier_value;
                } else {
                    stateParams.tvdbid = request.identifier_value;
                } 
                
                if (request.season != "") {
                    stateParams.season = request.season;
                }
                if (request.episode != "") {
                    stateParams.episode = request.episode;
                }
            }
            if (request.query != "") {
                stateParams.query = request.query;
            }
            if (request.type == "tv") {
                stateParams.mode = "tvsearch"
            } else if (request.type == "tv") {
                stateParams.mode = "moviesearch"
            } else {
                stateParams.mode = "search"
            }
            
            if (request.category != "") {
                stateParams.category = request.category;
            }

            stateParams.category = request.category;
            
            $state.go("search", stateParams, {inherit: false});
        };
        
        $scope.formatQuery = function(request) {
            if (request.movietitle != null) {
                return request.movietitle; 
            }
            if (request.tvtitle != null) {
                return request.tvtitle;
            }
            return request.query;
        }


    }
}
//Can be used in an ng-repeat directive to call a function when the last element was rendered
//We use it to mark the end of sorting / filtering so we can stop blocking the UI

angular
    .module('nzbhydraApp')
    .directive('onFinishRender', onFinishRender);

function onFinishRender($timeout) {
    function linkFunction(scope, element, attr) {
        
        if (scope.$last === true) {
                $timeout(function () {
                    scope.$evalAsync(attr.onFinishRender);
                });
            }
    }

    return {
        link: linkFunction
    }
}
onFinishRender.$inject = ["$timeout"];
angular
    .module('nzbhydraApp')
    .directive('hydralog', hydralog);

function hydralog() {
    controller.$inject = ["$scope", "$http", "$sce"];
    return {
        template: '<div cg-busy="{promise:logPromise,message:\'Loading log file\'}"><pre ng-bind-html="log" style="text-align: left"></pre></div>',
        controller: controller
    };

    function controller($scope, $http, $sce) {
        $scope.logPromise = $http.get("internalapi/getlogs").success(function (data) {
            $scope.log = $sce.trustAsHtml(data.log);
        });

    }
}


angular
    .module('nzbhydraApp').directive("keepFocus", ['$timeout', function ($timeout) {
    /*
     Intended use:
     <input keep-focus ng-model='someModel.value'></input>
     */
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function ($scope, $element, attrs, ngModel) {

            ngModel.$parsers.unshift(function (value) {
                $timeout(function () {
                    $element[0].focus();
                });
                return value;
            });

        }
    };
}])
angular
    .module('nzbhydraApp')
    .directive('indexerStatuses', indexerStatuses);

function indexerStatuses() {
    return {
        templateUrl: 'static/html/directives/indexer-statuses.html',
        controller: ['$scope', '$http', controller]
    };

    function controller($scope, $http) {
        
        getIndexerStatuses();
        
        function getIndexerStatuses() {
            $http.get("internalapi/getindexerstatuses").success(function (response) {
                $scope.indexerStatuses = response.indexerStatuses;
            });
        }
        
        $scope.isInPast = function (timestamp) {
            return timestamp * 1000 < (new Date).getTime();
        };
        
        $scope.enable = function(indexerName) {
            $http.get("internalapi/enableindexer", {params: {name: indexerName}}).then(function(response){
                $scope.indexerStatuses = response.data.indexerStatuses;
            });
        }

    }
}

angular
    .module('nzbhydraApp')
    .filter('formatDate', formatDate);

function formatDate(dateFilter) {
    return function(timestamp, hidePast) {
        if (timestamp) {
            if (timestamp * 1000 < (new Date).getTime() && hidePast) {
                return ""; //
            }
            
            var t = timestamp * 1000;
            t = dateFilter(t, 'yyyy-MM-dd HH:mm:ss Z');
            return t;
        } else {
            return "";
        }
    }
}
formatDate.$inject = ["dateFilter"];
angular
    .module('nzbhydraApp')
    .directive('indexerInput', indexerInput);

function indexerInput() {
    controller.$inject = ["$scope"];
    return {
        templateUrl: 'static/html/directives/indexer-input.html',
        scope: {
            indexer: "=",
            onClick: "="
        },
        replace: true,
        controller: controller
    };

    function controller($scope) {
        $scope.isFocused = false;
        
        $scope.onFocus = function() {
            $scope.isFocused = true;
        };

        $scope.onBlur = function () {
            $scope.isFocused = false;    
        };
        
    }
}


angular
    .module('nzbhydraApp').directive('focusOn', focusOn);

function focusOn() {
    return directive;
    function directive(scope, elem, attr) {
        scope.$on('focusOn', function (e, name) {
            if (name === attr.focusOn) {
                elem[0].focus();
            }
        });
    }
}

angular
    .module('nzbhydraApp')
    .directive('downloadHistory', downloadHistory);

function downloadHistory() {
    return {
        templateUrl: 'static/html/directives/download-history.html',
        controller: ['$scope', '$http', controller],
        scope: {}
    };

    function controller($scope, $http) {
        $scope.type = "All";
        $scope.limit = 100;
        $scope.pagination = {
            current: 1
        };

        $scope.changeType = function (type) {
            $scope.type = type;
            getDownloadsPage($scope.pagination.current);
        };

        getDownloadsPage(1);

        $scope.pageChanged = function (newPage) {
            getDownloadsPage(newPage);
        };
        
        function getDownloadsPage(pageNumber) {
            $http.get("internalapi/getnzbdownloads", {params:{page: pageNumber, limit: $scope.limit, type: $scope.type}}).success(function (response) {
                $scope.nzbDownloads = response.nzbDownloads;
                $scope.totalDownloads = response.totalDownloads;
            });
        }


    }
}
angular
    .module('nzbhydraApp')
    .directive('connectionTest', connectionTest);

function connectionTest() {
    controller.$inject = ["$scope"];
    return {
        templateUrl: 'static/html/directives/connection-test.html',
        require: ['^type', '^data'],
        scope: {
            type: "=",
            id: "=",
            data: "=",
            downloader: "="
        },
        controller: controller
    };

    function controller($scope) {
        $scope.message = "";
        console.log($scope);

        var testButton = "#button-test-connection";
        var testMessage = "#message-test-connection";

        function showSuccess() {
            angular.element(testButton).removeClass("btn-default");
            angular.element(testButton).removeClass("btn-danger");
            angular.element(testButton).addClass("btn-success");
        }

        function showError() {
            angular.element(testButton).removeClass("btn-default");
            angular.element(testButton).removeClass("btn-success");
            angular.element(testButton).addClass("btn-danger");
        }

        $scope.testConnection = function () {
            angular.element(testButton).addClass("glyphicon-refresh-animate");
            var myInjector = angular.injector(["ng"]);
            var $http = myInjector.get("$http");
            var url;
            var params;
            if ($scope.type == "downloader") {
                url = "internalapi/test_downloader";
                params = {name: $scope.downloader, username: $scope.data.username, password: $scope.data.password};
                if ($scope.downloader == "sabnzbd") {
                    params.apikey = $scope.data.apikey;
                    params.url = $scope.data.url;
                } else {
                    params.host = $scope.data.host;
                    params.port = $scope.data.port;
                    params.ssl = $scope.data.ssl;
                }
            } else if ($scope.data.type == "newznab") {
                url = "internalapi/test_newznab";
                params = {host: $scope.data.host, apikey: $scope.data.apikey};
            } else if ($scope.data.type == "omgwtf") {
                url = "internalapi/test_omgwtf";
                params = {username: $scope.data.username, apikey: $scope.data.apikey};
            }
            $http.get(url, {params: params}).success(function (result) {
                //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
                if (result.result) {
                    angular.element(testMessage).text("");
                    showSuccess();
                } else {
                    angular.element(testMessage).text(result.message);
                    showError();
                }

            }).error(function () {
                angular.element(testMessage).text(result.message);
                showError();
            }).finally(function () {
                angular.element(testButton).removeClass("glyphicon-refresh-animate");
            })
        }

    }
}


angular
    .module('nzbhydraApp')
    .directive('cfgFormEntry', cfgFormEntry);

function cfgFormEntry() {
    return {
        templateUrl: 'static/html/directives/cfg-form-entry.html',
        require: ["^title", "^cfg"],
        scope: {
            title: "@",
            cfg: "=",
            help: "@",
            type: "@?",
            options: "=?"
        },
        controller: ["$scope", "$element", "$attrs", function ($scope, $element, $attrs) {
            $scope.type = angular.isDefined($scope.type) ? $scope.type : 'text';
            $scope.options = angular.isDefined($scope.type) ? $scope.$eval($attrs.options) : [];
        }]
    };
}
angular
    .module('nzbhydraApp')
    .directive('hydrabackup', hydrabackup);

function hydrabackup() {
    controller.$inject = ["$scope", "BackupService"];
    return {
        templateUrl: 'static/html/directives/backup.html',
        controller: controller
    };

    function controller($scope, BackupService) {
        BackupService.getBackupsList().then(function(backups) {
            $scope.backups = backups;
        });
        
    }
}


angular
    .module('nzbhydraApp')
    .directive('addableNzb', addableNzb);

function addableNzb() {
    controller.$inject = ["$scope", "ConfigService", "NzbDownloadService", "growl"];
    return {
        templateUrl: 'static/html/directives/addable-nzb.html',
        require: ['^indexerguid', '^title', '^indexer', '^dbsearchid'],
        scope: {
            indexerguid: "=",
            title: "=",
            indexer: "=",
            dbsearchid: "="
        },
        controller: controller
    };

    function controller($scope, ConfigService, NzbDownloadService, growl) {
        $scope.classname = "";
        var settings = ConfigService.getSafe();
        
        $scope.downloader = settings.downloader.downloader;
        if ($scope.downloader != "none") {
            $scope.enabled = true;
            $scope.classname = $scope.downloader == "sabnzbd" ? "sabnzbd" : "nzbget";
        } else {
            $scope.enabled = false;
        }


        $scope.add = function () {
            $scope.classname = "nzb-spinning";
            NzbDownloadService.download([{"indexerguid": $scope.indexerguid, "title": $scope.title, "indexer": $scope.indexer, "dbsearchid": $scope.dbsearchid}]).then(function (response) {
                if (response.data.success) {
                    $scope.classname = $scope.downloader == "sabnzbd" ? "sabnzbd-success" : "nzbget-success";
                } else {
                    $scope.classname = $scope.downloader == "sabnzbd" ? "sabnzbd-error" : "nzbget-error";
                    growl.error("Unable to add NZB. Make sure the downloader is running and properly configured.");
                }
            }, function () {
                $scope.classname = $scope.downloader == "sabnzbd" ? "sabnzbd-error" : "nzbget-error";
                growl.error("An unexpected error occurred while trying to contact NZB Hydra or add the NZB.");
            })
        };

    }
}


angular
    .module('nzbhydraApp')
    .factory('UpdateService', UpdateService);

function UpdateService($http, growl, blockUI, RestartService) {

    var currentVersion;
    var repVersion;
    var updateAvailable;
    var changelog;
    var versionHistory;
    
    return {
        update: update,
        showChanges: showChanges,
        getVersions: getVersions,
        getChangelog: getChangelog,
        getVersionHistory: getVersionHistory
    };
    
    
    
    function getVersions() {
        return $http.get("internalapi/get_versions").then(function (data) {
            currentVersion = data.data.currentVersion;
            repVersion = data.data.repVersion;
            updateAvailable = data.data.updateAvailable;
            return data;
        });
    }

    function getChangelog() {
        return $http.get("internalapi/get_changelog").then(function (data) {
            changelog = data.data.changelog;
            return data;
        });
    }
    
    function getVersionHistory() {
        return $http.get("internalapi/get_version_history").then(function (data) {
            versionHistory = data.data.versionHistory;
            return data;
        });
    }

    function showChanges() {

        var myInjector = angular.injector(["ng", "ui.bootstrap"]);
        var $uibModal = myInjector.get("$uibModal");
        var params = {
            size: "lg",
            templateUrl: "static/html/changelog.html",
            resolve: {
                changelog: function () {
                    return changelog;
                }
            },
            controller: function ($scope, $sce, $uibModalInstance, changelog) {
                //I fucking hate that untrusted HTML shit
                changelog = $sce.trustAsHtml(changelog);
                $scope.changelog = changelog;
                console.log(changelog);
                $scope.ok = function () {
                    $uibModalInstance.dismiss();
                };
            }
        };

        var modalInstance = $uibModal.open(params);

        modalInstance.result.then();
    }
    

    function update() {
        blockUI.start("Updating. Please stand by...");
        $http.get("internalapi/update").then(function (data) {
                if (data.data.success) {
                    RestartService.countdownAndReload("Update complete.");
                } else {
                    blockUI.reset();
                    growl.info("An error occurred while updating. Please check the logs.");
                }
            },
            function () {
                blockUI.reset();
                growl.info("An error occurred while updating. Please check the logs.");
            });
    }
}
UpdateService.$inject = ["$http", "growl", "blockUI", "RestartService"];


angular
    .module('nzbhydraApp')
    .controller('UpdateFooterController', UpdateFooterController);

function UpdateFooterController($scope, $http, UpdateService) {

    $scope.updateAvailable = false;
    
    $http.get("internalapi/mayseeadminarea").then(function(data) {
       if (data.data.maySeeAdminArea) {
           UpdateService.getVersions().then(function (data) {
               $scope.currentVersion = data.data.currentVersion;
               $scope.repVersion = data.data.repVersion;
               $scope.updateAvailable = data.data.updateAvailable;
               if ($scope.repVersion > $scope.currentVersion) {
                   UpdateService.getChangelog().then(function (data) {
                       $scope.changelog = data.data.changelog;
                   })
               }
           });
       } 
    });
    
    
    

    $scope.update = function () {
        UpdateService.update();
    };

    $scope.showChangelog = function () {
        UpdateService.showChanges($scope.changelog);
    }

}
UpdateFooterController.$inject = ["$scope", "$http", "UpdateService"];

angular
    .module('nzbhydraApp')
    .controller('SystemController', SystemController);

function SystemController($scope, $state, growl, RestartService, NzbHydraControlService) {


    $scope.shutdown = function () {
        NzbHydraControlService.shutdown().then(function () {
                growl.info("Shutdown initiated. Cya!");
            },
            function () {
                growl.info("Unable to send shutdown command.");
            })
    };

    $scope.restart = function () {
        RestartService.restart();
    };
    

    $scope.tabs = [
        {
            active: false,
            state: 'system'
        },
        {
            active: false,
            state: 'system.updates'
        },
        {
            active: false,
            state: 'system.log'
        },
        {
            active: false,
            state: 'system.backup'
        },
        {
            active: false,
            state: 'system.bugreport'
        },
        {
            active: false,
            state: 'system.about'
        }
    ];


    for (var i = 0; i < $scope.tabs.length; i++) {
        if ($state.is($scope.tabs[i].state)) {
            $scope.tabs[i].active = true;
        }
    }


    $scope.goToState = function (index) {
        $state.go($scope.tabs[index].state);
    }
    
    
}
SystemController.$inject = ["$scope", "$state", "growl", "RestartService", "NzbHydraControlService"];

angular
    .module('nzbhydraApp')
    .factory('StatsService', StatsService);

function StatsService($http) {
    
    return {
        get: getStats
    };

    function getStats() {
            return $http.get("internalapi/getstats").success(function (response) {
               return response.data;
            });

    }

}
StatsService.$inject = ["$http"];
angular
    .module('nzbhydraApp')
    .controller('StatsController', StatsController);

function StatsController($scope, stats, $state) {

    stats = stats.data;
    $scope.nzbDownloads = null;
    $scope.avgResponseTimes = stats.avgResponseTimes;
    $scope.avgIndexerSearchResultsShares = stats.avgIndexerSearchResultsShares;
    $scope.avgIndexerAccessSuccesses = stats.avgIndexerAccessSuccesses;
    $scope.indexerDownloadShares = stats.indexerDownloadShares;
    

    $scope.tabs = [
        {
            active: false,
            state: 'stats'
        },
        {
            active: false,
            state: 'stats.indexers'
        },
        {
            active: false,
            state: 'stats.searches'
        },
        {
            active: false,
            state: 'stats.downloads'
        }
    ];


    for (var i = 0; i < $scope.tabs.length; i++) {
        if ($state.is($scope.tabs[i].state)) {
            $scope.tabs[i].active = true;
        }
    }
    

    $scope.goToState = function (index) {
        $state.go($scope.tabs[index].state);
    }


}
StatsController.$inject = ["$scope", "stats", "$state"];

//
angular
    .module('nzbhydraApp')
    .factory('SearchService', SearchService);

function SearchService($http) {


    var lastExecutedQuery;

    var service = {search: search, loadMore: loadMore};
    return service;

    function search(category, query, tmdbid, title, tvdbid, season, episode, minsize, maxsize, minage, maxage, indexers) {
        console.log("Category: " + category);
        var uri;
        if (category.indexOf("Movies") > -1 || (category.indexOf("20") == 0)) {
            console.log("Search for movies");
            uri = new URI("internalapi/moviesearch");
            if (!_.isUndefined(tmdbid)) {
                console.log("moviesearch per tmdbid");
                uri.addQuery("tmdbid", tmdbid);
                uri.addQuery("title", title);
            } else {
                console.log("moviesearch per query");
                uri.addQuery("query", query);
            }

        } else if (category.indexOf("TV") > -1 || (category.indexOf("50") == 0)) {
            console.log("Search for shows");
            uri = new URI("internalapi/tvsearch");
            if (!_.isUndefined(tvdbid)) {
                uri.addQuery("tvdbid", tvdbid);
                uri.addQuery("title", title);
            } else {
                console.log("tvsearch per query");
                uri.addQuery("query", query);
            }

            if (!_.isUndefined(season)) {
                uri.addQuery("season", season);
            }
            if (!_.isUndefined(episode)) {
                uri.addQuery("episode", episode);
            }
        } else {
            console.log("Search for all");
            uri = new URI("internalapi/search");
            uri.addQuery("query", query);
        }

        if (_.isNumber(minsize)) {
            uri.addQuery("minsize", minsize);
        }
        if (_.isNumber(maxsize)) {
            uri.addQuery("maxsize", maxsize);
        }
        if (_.isNumber(minage)) {
            uri.addQuery("minage", minage);
        }
        if (_.isNumber(maxage)) {
            uri.addQuery("maxage", maxage);
        }
        if (!angular.isUndefined(indexers)) {
            uri.addQuery("indexers", decodeURIComponent(indexers));
        }
        

        uri.addQuery("category", category);
        console.log("Calling " + uri.toString());
        lastExecutedQuery = uri;
        return $http.get(uri.toString()).then(processData);

    }

    function loadMore(offset) {
        lastExecutedQuery.removeQuery("offset");
        lastExecutedQuery.addQuery("offset", offset);

        console.log("Calling " + lastExecutedQuery);
        return $http.get(lastExecutedQuery.toString()).then(processData);
    }

    function processData(response) {
        var results = response.data.results;
        var indexersearches = response.data.indexersearches;
        var total = response.data.total;
        var resultsCount = results.length;


        //Sum up response times of indexers from individual api accesses
        //TODO: Move this to search result controller because we need to update it every time we loaded more results
        _.each(indexersearches, function (ps) {
            if (ps.did_search) {
                ps.averageResponseTime = _.reduce(ps.api_accesses, function (memo, rp) {
                    return memo + rp.response_time;
                }, 0);
                ps.averageResponseTime = ps.averageResponseTime / ps.api_accesses.length;
            }
        });
        

        return {"results": results, "indexersearches": indexersearches, "total": total, "resultsCount": resultsCount}
    }
}
SearchService.$inject = ["$http"];
angular
    .module('nzbhydraApp')
    .controller('SearchResultsController', SearchResultsController);

//SearchResultsController.$inject = ['blockUi'];
function SearchResultsController($stateParams, $scope, $q, $timeout, blockUI, growl, NzbDownloadService, SearchService, ConfigService) {

    $scope.sortPredicate = "epoch";
    $scope.sortReversed = true;
    $scope.limitTo = 100;
    $scope.offset = 0;
    //Handle incoming data
    $scope.indexersearches = $stateParams.indexersearches;
    $scope.indexerDisplayState = []; //Stores if a indexer's results should be displayed or not
    $scope.indexerResultsInfo = {}; //Stores information about the indexer's results like how many we already retrieved
    $scope.groupExpanded = {};
    $scope.doShowDuplicates = ConfigService.getSafe().searching.alwaysShowDuplicates;
    console.log(ConfigService.getSafe().alwaysShowDuplicates);
    $scope.selected = [];
    $scope.indexerStatusesExpanded = false;
    
    $scope.countFilteredOut = 0;

    //Initially set visibility of all found indexers to true, they're needed for initial filtering / sorting
    _.forEach($scope.indexersearches, function (ps) {
        $scope.indexerDisplayState[ps.indexer.toLowerCase()] = true;
    });

    _.forEach($scope.indexersearches, function (ps) {
        $scope.indexerResultsInfo[ps.indexer.toLowerCase()] = {loadedResults: ps.loaded_results};
    });
    

    //Process results
    $scope.results = $stateParams.results;
    $scope.total = $stateParams.total;
    $scope.resultsCount = $stateParams.resultsCount;
    $scope.filteredResults = sortAndFilter($scope.results);
    stopBlocking();


    //Returns the content of the property (defined by the current sortPredicate) of the first group element 
    $scope.firstResultPredicate = firstResultPredicate;
    function firstResultPredicate(item) {
        return item[0][$scope.sortPredicate];
    }

    //Returns the unique group identifier which allows angular to keep track of the grouped search results even after filtering, making filtering by indexers a lot faster (albeit still somewhat slow...)  
    $scope.groupId = groupId;
    function groupId(item) {
        return item[0][0].guid;
    }

    //Block the UI and return after timeout. This way we make sure that the blocking is done before angular starts updating the model/view. There's probably a better way to achieve that?
    function startBlocking(message) {
        var deferred = $q.defer();
        blockUI.start(message);
        $timeout(function () {
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }

    //Set sorting according to the predicate. If it's the same as the old one, reverse, if not sort by the given default (so that age is descending, name ascending, etc.)
    //Sorting (and filtering) are really slow (about 2 seconds for 1000 results from 5 indexers) but I haven't found any way of making it faster, apart from the tracking 
    $scope.setSorting = setSorting;
    function setSorting(predicate, reversedDefault) {
        startBlocking("Sorting / filtering...").then(function () {

            if (predicate == $scope.sortPredicate) {
                $scope.sortReversed = !$scope.sortReversed;
            } else {
                $scope.sortReversed = reversedDefault;
            }
            $scope.sortPredicate = predicate;
            $scope.filteredResults = sortAndFilter($scope.results);
            blockUI.reset();
        });
    }


    
    function sortAndFilter(results) {
        $scope.countFilteredOut = 0;
        var safeConfig = ConfigService.getSafe();
        function filterByAgeAndSize(item) {
            var filterOut = !(_.isNumber($stateParams.minsize) && item.size / 1024 / 1024 < $stateParams.minsize)
                && !(_.isNumber($stateParams.maxsize) && item.size / 1024 / 1024 > $stateParams.maxsize)
                && !(_.isNumber($stateParams.minage) && item.age_days < $stateParams.minage)
                && !((_.isNumber($stateParams.maxage) && item.age_days > $stateParams.maxage)
                    || (_.isNumber(safeConfig.searching.maxAge) && item.age_days > safeConfig.searching.maxAge)
                        
                );
            if (!filterOut) {
                $scope.countFilteredOut++;
            }
            return filterOut;
        }
        
        
        function getItemIndexerDisplayState(item) {
            return $scope.indexerDisplayState[item.indexer.toLowerCase()];
        }

        function getCleanedTitle(element) {
            return element.title.toLowerCase().replace(/[\s\-\._]/ig, "");
        }

        function createSortedHashgroups(titleGroup) {

            function createHashGroup(hashGroup) {
                //Sorting hash group's contents should not matter for size and age and title but might for category (we might remove this, it's probably mostly unnecessary)
                var sortedHashGroup = _.sortBy(hashGroup, function (item) {
                    var sortPredicateValue = item[$scope.sortPredicate];
                    return $scope.sortReversed ? -sortPredicateValue : sortPredicateValue;
                });
                //Now sort the hash group by indexer score (inverted) so that the result with the highest indexer score is shown on top (or as the only one of a hash group if it's collapsed)
                sortedHashGroup = _.sortBy(sortedHashGroup, function (item) {
                    return item.indexerscore * -1;
                });
                return sortedHashGroup;
            }

            function getHashGroupFirstElementSortPredicate(hashGroup) {
                var sortPredicateValue = hashGroup[0][$scope.sortPredicate];
                return $scope.sortReversed ? -sortPredicateValue : sortPredicateValue;
            }

            return _.chain(titleGroup).groupBy("hash").map(createHashGroup).sortBy(getHashGroupFirstElementSortPredicate).value();
        }

        function getTitleGroupFirstElementsSortPredicate(titleGroup) {
            var sortPredicateValue = titleGroup[0][0][$scope.sortPredicate];
            return $scope.sortReversed ? -sortPredicateValue : sortPredicateValue;
        }

        var filtered = _.chain(results)
            //Remove elements of which the indexer is currently hidden    
            .filter(getItemIndexerDisplayState)
            //Make groups of results with the same title    
            .groupBy(getCleanedTitle)
            //For every title group make subgroups of duplicates and sort the group    
            .map(createSortedHashgroups)
            //And then sort the title group using its first hashgroup's first item (the group itself is already sorted and so are the hash groups)    
            .sortBy(getTitleGroupFirstElementsSortPredicate)
            .value();
        if ($scope.countFilteredOut > 0) {
            growl.info("Filtered " + $scope.countFilteredOut + " of the retrieved results");
        }
        return filtered;

    }

    $scope.toggleTitlegroupExpand = function toggleTitlegroupExpand(titleGroup) {
        $scope.groupExpanded[titleGroup[0][0].title] = !$scope.groupExpanded[titleGroup[0][0].title];
        $scope.groupExpanded[titleGroup[0][0].hash] = !$scope.groupExpanded[titleGroup[0][0].hash];
    };


//Clear the blocking
    $scope.stopBlocking = stopBlocking;
    function stopBlocking() {
        blockUI.reset();
    }

    $scope.loadMore = loadMore;
    function loadMore() {
        startBlocking("Loading more results...").then(function () {
            SearchService.loadMore($scope.resultsCount).then(function (data) {
                $scope.results = $scope.results.concat(data.results);
                $scope.filteredResults = sortAndFilter($scope.results);
                $scope.total = data.total;
                $scope.resultsCount += data.resultsCount;
                stopBlocking();
            });
        });
    }


//Filters the results according to new visibility settings.
    $scope.toggleIndexerDisplay = toggleIndexerDisplay;
    function toggleIndexerDisplay(indexer) {
        $scope.indexerDisplayState[indexer.toLowerCase()] = $scope.indexerDisplayState[indexer.toLowerCase()]; 
        startBlocking("Filtering. Sorry...").then(function () {
            $scope.filteredResults = sortAndFilter($scope.results);
        }).then(function () {
            stopBlocking();
        });
    }

    $scope.countResults = countResults;
    function countResults() {
        return $scope.results.length;
    }

    $scope.downloadSelected = downloadSelected;
    function downloadSelected() {

        if (angular.isUndefined($scope.selected) || $scope.selected.length == 0) {
            growl.info("You should select at least one result...");
        } else {

            var values = _.map($scope.selected, function (value) {
                return {"indexerguid": value.indexerguid, "title": value.title, "indexer": value.indexer, "dbsearchid": value.dbsearchid}
            });

            NzbDownloadService.download(values).then(function (response) {
                if (response.data.success) {
                    growl.info("Successfully added " + response.data.added + " of " + response.data.of + " NZBs");
                } else {
                    growl.error("Error while adding NZBs");
                }
            }, function () {
                growl.error("Error while adding NZBs");
            });
        }
    }
    
    $scope.invertSelection = function invertSelection() {
        $scope.selected = _.difference($scope.results, $scope.selected);
    }

}
SearchResultsController.$inject = ["$stateParams", "$scope", "$q", "$timeout", "blockUI", "growl", "NzbDownloadService", "SearchService", "ConfigService"];
angular
    .module('nzbhydraApp')
    .controller('SearchController', SearchController);

function SearchController($scope, $http, $stateParams, $state, SearchService, focus, ConfigService, blockUI) {
    
    function getNumberOrUndefined(number) {
        if (_.isUndefined(number) || _.isNaN(number) || number == "") {
            return undefined;
        }
        number = parseInt(number);
        if (_.isNumber(number)) {
            return number;
        } else {
            return undefined;
        }
    }

    //Fill the form with the search values we got from the state params (so that their values are the same as in the current url)
    $scope.mode = $stateParams.mode;
    
    $scope.category = (_.isUndefined($stateParams.category) || $stateParams.category == "") ? "All" : $stateParams.category;
    $scope.tmdbid = $stateParams.tmdbid;
    $scope.tvdbid = $stateParams.tvdbid;
    $scope.rid = $stateParams.rid;
    $scope.title = $stateParams.title;
    $scope.season = $stateParams.season;
    $scope.episode = $stateParams.episode;
    $scope.query = $stateParams.query;
    $scope.minsize = getNumberOrUndefined($stateParams.minsize);
    $scope.maxsize = getNumberOrUndefined($stateParams.maxsize);
    $scope.minage = getNumberOrUndefined($stateParams.minage);
    $scope.maxage = getNumberOrUndefined($stateParams.maxage);
    if (!_.isUndefined($scope.title) && _.isUndefined($scope.query)) {
        $scope.query = $scope.title;
    }
    if (!angular.isUndefined($stateParams.indexers)) {
        $scope.indexers = decodeURIComponent($stateParams.indexers).split("|");
    }

    $scope.showIndexers = {};

    var safeConfig = ConfigService.getSafe();


    $scope.typeAheadWait = 300;
    $scope.selectedItem = "";
    $scope.autocompleteLoading = false;
    $scope.isAskById = ($scope.category.indexOf("TV") > -1 || $scope.category.indexOf("Movies") > -1 ); //If true a check box will be shown asking the user if he wants to search by ID 
    $scope.isById = {value: true}; //If true the user wants to search by id so we enable autosearch. Was unable to achieve this using a simple boolean
    $scope.availableIndexers = [];
    $scope.autocompleteClass = "autocompletePosterMovies";

    $scope.toggle = function (searchCategory) {
        $scope.category = searchCategory;

        //Show checkbox to ask if the user wants to search by ID (using autocomplete)
        $scope.isAskById = ($scope.category.indexOf("TV") > -1 || $scope.category.indexOf("Movies") > -1 );

        focus('focus-query-box');
        $scope.query = "";

        if (safeConfig.searching.categorysizes.enable_category_sizes) {
            var min = safeConfig.searching.categorysizes[(searchCategory + " min").toLowerCase().replace(" ", "")];
            var max = safeConfig.searching.categorysizes[(searchCategory + " max").toLowerCase().replace(" ", "")];
            if (_.isNumber(min)) {
                $scope.minsize = min;
            } else {
                $scope.minsize = "";
            }
            if (_.isNumber(max)) {
                $scope.maxsize = max;
            } else {
                $scope.maxsize = "";
            }
        }
    };


    // Any function returning a promise object can be used to load values asynchronously
    $scope.getAutocomplete = function (val) {
        $scope.autocompleteLoading = true;
        //Expected model returned from API:
        //label: What to show in the results
        //title: Will be used for file search
        //value: Will be used as extraInfo (ttid oder tvdb id)
        //poster: url of poster to show

        //Don't use autocomplete if checkbox is disabled
        if (!$scope.isById.value) {
            return {};
        }

        if ($scope.category.indexOf("Movies") > -1) {
            return $http.get('internalapi/autocomplete?type=movie', {
                params: {
                    input: val
                }
            }).then(function (response) {
                $scope.autocompleteLoading = false;
                return response.data.results;
            });
        } else if ($scope.category.indexOf("TV") > -1) {

            return $http.get('internalapi/autocomplete?type=tv', {
                params: {
                    input: val
                }
            }).then(function (response) {
                $scope.autocompleteLoading = false;
                return response.data.results;
            });
        } else {
            return {};
        }
    };
    

    $scope.startSearch = function () {
        blockUI.start("Searching...");
        var indexers = angular.isUndefined($scope.indexers) ? undefined : $scope.indexers.join("|");
        SearchService.search($scope.category, $scope.query, $stateParams.tmdbid, $scope.title, $scope.tvdbid, $scope.season, $scope.episode, $scope.minsize, $scope.maxsize, $scope.minage, $scope.maxage, indexers).then(function (searchResult) {
            $state.go("search.results", {
                results: searchResult.results,
                indexersearches: searchResult.indexersearches,
                total: searchResult.total,
                resultsCount: searchResult.resultsCount,
                minsize: $scope.minsize,
                maxsize: $scope.maxsize,
                minage: $scope.minage,
                maxage: $scope.maxage
            }, {
                inherit: true
            });
            $scope.tmdbid = undefined;
            $scope.tvdbid = undefined;
        });
    };
    
    function getSelectedIndexers() {
        var activatedIndexers = _.filter($scope.availableIndexers).filter(function (indexer) {
            return indexer.activated ;
        });
            return _.pluck(activatedIndexers, "name").join("|");
    }


    $scope.goToSearchUrl = function () {
        var stateParams = {};
        if ($scope.category.indexOf("Movies") > -1) {
            stateParams.mode = "moviesearch";
            stateParams.title = $scope.title;
            stateParams.mode = "moviesearch";
        } else if ($scope.category.indexOf("TV") > -1) {
            stateParams.mode = "tvsearch";
            stateParams.title = $scope.title;
        } else if ($scope.category == "Ebook") {
            stateParams.mode = "ebook";
        } else {
            stateParams.mode = "search";
        }
        
        stateParams.tmdbid = $scope.tmdbid;
        stateParams.tvdbid = $scope.tvdbid;
        stateParams.title = $scope.title;
        stateParams.season = $scope.season;
        stateParams.episode = $scope.episode;
        stateParams.query = $scope.query;
        stateParams.minsize = $scope.minsize;
        stateParams.maxsize = $scope.maxsize;
        stateParams.minage = $scope.minage;
        stateParams.maxage = $scope.maxage;
        stateParams.category = $scope.category;
        stateParams.indexers = encodeURIComponent(getSelectedIndexers());
        
        $state.go("search", stateParams, {inherit: false, notify: true, reload: true});
    };


    $scope.selectAutocompleteItem = function ($item) {
        $scope.selectedItem = $item;
        $scope.title = $item.title;
        if ($scope.category.indexOf("Movies") > -1) {
            $scope.tmdbid = $item.value;
        } else if ($scope.category.indexOf("TV") > -1) {
            $scope.tvdbid = $item.value;
        }
        $scope.query = "";
        $scope.goToSearchUrl();
    };
    
    $scope.startQuerySearch = function() {
        //Reset values because they might've been set from the last search
        $scope.title = undefined;
        $scope.tmdbid = undefined;
        $scope.tvdbid = undefined;
        $scope.goToSearchUrl();
    };


    $scope.autocompleteActive = function () {
        return ($scope.category.indexOf("TV") > -1) || ($scope.category.indexOf("Movies") > -1)
    };

    $scope.seriesSelected = function () {
        return ($scope.category.indexOf("TV") > -1);
    };
    
    $scope.toggleIndexer = function(indexer) {
        $scope.indexers[indexer] = !$scope.indexers[indexer]
    };
    

    function isIndexerPreselected(indexer) {
        if (angular.isUndefined($scope.indexers)) {
            return indexer.preselect;
        } else {
            return _.contains($scope.indexers, indexer.name);
        }
        
    }

    
    $scope.availableIndexers = _.chain(safeConfig.indexers).filter(function (indexer) {
        return indexer.enabled && indexer.showOnSearch;
    }).sortBy("name")
        .map(function (indexer) {
        return {name: indexer.name, activated: isIndexerPreselected(indexer)};
    }).value();
        
    

    if ($scope.mode) {
        console.log("Starting search in newly loaded search controller");
        $scope.startSearch();
    }
    
}
SearchController.$inject = ["$scope", "$http", "$stateParams", "$state", "SearchService", "focus", "ConfigService", "blockUI"];

angular
    .module('nzbhydraApp')
    .factory('RestartService', RestartService);

function RestartService(blockUI, $timeout, $window, NzbHydraControlService) {

    return {
        restart: restart,
        countdownAndReload: countdownAndReload
    };

    function countdownAndReload(message) {
        message = angular.isUndefined ? "" : " ";

        blockUI.start(message + "Restarting. Will reload page in 5 seconds...");
        $timeout(function () {
            blockUI.start(message + "Restarting. Will reload page in 4 seconds...");
            $timeout(function () {
                blockUI.start(message + "Restarting. Will reload page in 3 seconds...");
                $timeout(function () {
                    blockUI.start(message + "Restarting. Will reload page in 2 seconds...");
                    $timeout(function () {
                        blockUI.start(message + "Restarting. Will reload page in 1 second...");
                        $timeout(function () {
                            blockUI.start("Reloading page...");
                            $window.location.reload();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    function restart(message) {
        NzbHydraControlService.restart().then(countdownAndReload(message),
            function () {
                growl.info("Unable to send restart command.");
            }
        )
    }
}
RestartService.$inject = ["blockUI", "$timeout", "$window", "NzbHydraControlService"];

angular
    .module('nzbhydraApp')
    .factory('NzbHydraControlService', NzbHydraControlService);

function NzbHydraControlService($http) {

    return {
        restart: restart,
        shutdown: shutdown
    };

    function restart() {
        return $http.get("internalapi/restart");
    }

    function shutdown() {
        return $http.get("internalapi/shutdown");
    }
}
NzbHydraControlService.$inject = ["$http"];

angular
    .module('nzbhydraApp')
    .factory('NzbDownloadService', NzbDownloadService);

function NzbDownloadService($http, ConfigService, CategoriesService) {

    var service = {
        download: download
    };

    return service;


    function sendNzbAddCommand(items, category) {
        console.log("Now add nzb with category " + category);
        return $http.put("internalapi/addnzbs", {items: angular.toJson(items), category: category});
    }

    function download(items) {
        var settings = ConfigService.getSafe();

        var category;
        if (settings.downloader.downloader == "nzbget") {
            category = settings.downloader.nzbget.defaultCategory
        } else {
            category = settings.downloader.sabnzbd.defaultCategory
        }

        if (_.isUndefined(category) || category == "" || category == null) {
            return CategoriesService.openCategorySelection().then(function (category) {
                return sendNzbAddCommand(items, category)
            }, function (error) {
                throw error;
            });
        } else {
            return sendNzbAddCommand(items, category)
        }
    }
}
NzbDownloadService.$inject = ["$http", "ConfigService", "CategoriesService"];


angular
    .module('nzbhydraApp')
    .factory('ModalService', ModalService);

function ModalService($uibModal) {
    
    return {
        open: openModal
    };
    
    function openModal(headline, message, ok, cancel) {
        var modalInstance = $uibModal.open({
            templateUrl: 'static/html/modal.html',
            controller: 'ModalInstanceCtrl',
            size: 'md',
            resolve: {
                headline: function () {
                    return headline
                },
                message: function(){ return message},
                ok: function() {
                    return ok;
                },
                cancel: function() {
                    return cancel;
                },
                showCancel: function() {
                    return angular.isDefined(cancel);
                }
            }
        });

        modalInstance.result.then(function() {
            
        }, function() {
            if (angular.isDefined(cancel))
            cancel();
        });
    }
    
}
ModalService.$inject = ["$uibModal"];

angular
    .module('nzbhydraApp')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

function ModalInstanceCtrl($scope, $uibModalInstance, headline, message, ok, cancel, showCancel) {

    $scope.message = message;
    $scope.headline = headline;
    $scope.showCancel = showCancel;

    $scope.ok = function () {
        $uibModalInstance.close();
        if(!angular.isUndefined(ok)) {
            ok();
        }
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
        if (!angular.isUndefined(cancel)) {
            cancel();
        }
    };
}
ModalInstanceCtrl.$inject = ["$scope", "$uibModalInstance", "headline", "message", "ok", "cancel", "showCancel"];

angular
    .module('nzbhydraApp')
    .service('GeneralModalService', GeneralModalService);

function GeneralModalService() {
    
    
    this.open = function (msg, template, templateUrl, size, data) {
        
        //Prevent circular dependency
        var myInjector = angular.injector(["ng", "ui.bootstrap"]);
        var $uibModal = myInjector.get("$uibModal");
        var params = {};
        
        if(angular.isUndefined(size)) {
            params["size"] = size;
        }
        if (angular.isUndefined(template)) {
            if (angular.isUndefined(templateUrl)) {
                params["template"] = '<pre>' + msg + '</pre>';
            } else {
                params["templateUrl"] = templateUrl;
            }
        } else {
            params["template"] = template;
        }
        params["resolve"] = 
        {
            data: function () {
                return data;
            }
        };
        
        var modalInstance = $uibModal.open(params);

        modalInstance.result.then();

    };
    
   
}
var HEADER_NAME = 'MyApp-Handle-Errors-Generically';
var specificallyHandleInProgress = false;

nzbhydraapp.factory('RequestsErrorHandler',  ["$q", "growl", "blockUI", "GeneralModalService", function ($q, growl, blockUI, GeneralModalService) {
    return {
        // --- The user's API for claiming responsiblity for requests ---
        specificallyHandled: function (specificallyHandledBlock) {
            specificallyHandleInProgress = true;
            try {
                return specificallyHandledBlock();
            } finally {
                specificallyHandleInProgress = false;
            }
        },

        // --- Response interceptor for handling errors generically ---
        responseError: function (rejection) {
            blockUI.reset();
            var shouldHandle = (rejection && rejection.config && rejection.config.headers && rejection.config.headers[HEADER_NAME] && !rejection.config.url.contains("logerror"));
            if (shouldHandle) {
                var message = "An error occured :<br>" + rejection.status + ": " + rejection.statusText;

                if (rejection.data) {
                    message += "<br><br>" + rejection.data;
                }
                GeneralModalService.open(message);

            } else if (rejection && rejection.config && rejection.config.headers && rejection.config.headers[HEADER_NAME] && rejection.config.url.contains("logerror")) {
                console.log("Not handling connection error while sending exception to server");
            }

            return $q.reject(rejection);
        }
    };
}]);


nzbhydraapp.config(['$provide', '$httpProvider', function ($provide, $httpProvider) {
    $httpProvider.interceptors.push('RequestsErrorHandler');

    // --- Decorate $http to add a special header by default ---

    function addHeaderToConfig(config) {
        config = config || {};
        config.headers = config.headers || {};

        // Add the header unless user asked to handle errors himself
        if (!specificallyHandleInProgress) {
            config.headers[HEADER_NAME] = true;
        }

        return config;
    }

    // The rest here is mostly boilerplate needed to decorate $http safely
    $provide.decorator('$http', ['$delegate', function ($delegate) {
        function decorateRegularCall(method) {
            return function (url, config) {
                return $delegate[method](url, addHeaderToConfig(config));
            };
        }

        function decorateDataCall(method) {
            return function (url, data, config) {
                return $delegate[method](url, data, addHeaderToConfig(config));
            };
        }

        function copyNotOverriddenAttributes(newHttp) {
            for (var attr in $delegate) {
                if (!newHttp.hasOwnProperty(attr)) {
                    if (typeof($delegate[attr]) === 'function') {
                        newHttp[attr] = function () {
                            return $delegate.apply($delegate, arguments);
                        };
                    } else {
                        newHttp[attr] = $delegate[attr];
                    }
                }
            }
        }

        var newHttp = function (config) {
            return $delegate(addHeaderToConfig(config));
        };

        newHttp.get = decorateRegularCall('get');
        newHttp.delete = decorateRegularCall('delete');
        newHttp.head = decorateRegularCall('head');
        newHttp.jsonp = decorateRegularCall('jsonp');
        newHttp.post = decorateDataCall('post');
        newHttp.put = decorateDataCall('put');

        copyNotOverriddenAttributes(newHttp);

        return newHttp;
    }]);
}]);
hashCode = function (s) {
    return s.split("").reduce(function (a, b) {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a
    }, 0);
};

angular
    .module('nzbhydraApp')
    .config(["formlyConfigProvider", function config(formlyConfigProvider) {
        formlyConfigProvider.extras.removeChromeAutoComplete = true;
        formlyConfigProvider.extras.explicitAsync = true;
        formlyConfigProvider.disableWarnings = window.onProd;


        formlyConfigProvider.setWrapper({
            name: 'settingWrapper',
            templateUrl: 'setting-wrapper.html'
        });


        formlyConfigProvider.setWrapper({
            name: 'fieldset',
            template: [
                '<fieldset>',
                '<legend>{{options.templateOptions.label}}</legend>',
                '<formly-transclude></formly-transclude>',
                '</fieldset>'
            ].join(' ')
        });

        formlyConfigProvider.setType({
            name: 'help',
            template: [
                '<div class="panel panel-default">',
                '<div class="panel-body">',
                '<div ng-repeat="line in options.templateOptions.lines">{{ line }}</div>',
                '</div>',
                '</div>'
            ].join(' ')
        });


        formlyConfigProvider.setWrapper({
            name: 'logicalGroup',
            template: [
                '<formly-transclude></formly-transclude>'
            ].join(' ')
        });

        formlyConfigProvider.setType({
            name: 'horizontalInput',
            extends: 'input',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'timeOfDay',
            extends: 'horizontalInput',
            controller: ['$scope', function ($scope) {
                var date = new Date($scope.model[$scope.options.key]);
                $scope.model[$scope.options.key] = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
            }]
        });

        formlyConfigProvider.setType({
            name: 'percentInput',
            template: [
                '<input type="number" class="form-control" placeholder="Percent" ng-model="model[options.key]" ng-pattern="/^[0-9]+(\.[0-9]{1,2})?$/" step="0.01" required />'
            ].join(' ')
        });

        formlyConfigProvider.setType({
            name: 'apiKeyInput',
            template: [
                '<div class="input-group">',
                '<input type="text" class="form-control" ng-model="model[options.key]"/>',
                '<span class="input-group-btn input-group-btn2">',
                '<button class="btn btn-default" type="button" ng-click="generate()"><span class="glyphicon glyphicon-refresh"></span></button>',
                '</div>'
            ].join(' '),
            controller: function ($scope) {
                $scope.generate = function () {
                    $scope.model[$scope.options.key] = (Math.random() * 1e32).toString(36);
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'testConnection',
            templateUrl: 'button-test-connection.html'
        });

        formlyConfigProvider.setType({
            name: 'checkCaps',
            templateUrl: 'button-check-caps.html',
            controller: function ($scope) {
                $scope.message = "";
                $scope.uniqueId = hashCode($scope.model.name) + hashCode($scope.model.host);

                var testButton = "#button-check-caps-" + $scope.uniqueId;
                var testMessage = "#message-check-caps-" + $scope.uniqueId;

                function showSuccess() {
                    angular.element(testButton).removeClass("btn-default");
                    angular.element(testButton).removeClass("btn-danger");
                    angular.element(testButton).addClass("btn-success");
                }

                function showError() {
                    angular.element(testButton).removeClass("btn-default");
                    angular.element(testButton).removeClass("btn-success");
                    angular.element(testButton).addClass("btn-danger");
                }

                $scope.checkCaps = function () {
                    angular.element(testButton).addClass("glyphicon-refresh-animate");
                    var myInjector = angular.injector(["ng"]);
                    var $http = myInjector.get("$http");
                    var url;
                    var params;

                    url = "internalapi/test_caps";
                    params = {indexer: $scope.model.name, apikey: $scope.model.apikey, host: $scope.model.host};
                    $http.get(url, {params: params}).success(function (result) {
                        //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
                        if (result.success) {
                            angular.element(testMessage).text("Supports: " + result.ids + "," + result.types);
                            $scope.$apply(function () {
                                $scope.model.search_ids = result.ids;
                                $scope.model.searchTypes = result.types;
                            });
                            showSuccess();
                        } else {
                            angular.element(testMessage).text(result.message);
                            showError();
                        }

                    }).error(function () {
                        angular.element(testMessage).text(result.message);
                        showError();
                    }).finally(function () {
                        angular.element(testButton).removeClass("glyphicon-refresh-animate");
                    })
                }
            }
        });


        formlyConfigProvider.setType({
            name: 'horizontalTestConnection',
            extends: 'testConnection',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'horizontalCheckCaps',
            extends: 'checkCaps',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'horizontalApiKeyInput',
            extends: 'apiKeyInput',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'horizontalPercentInput',
            extends: 'percentInput',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'switch',
            template: [
                '<div style="text-align:left"><input bs-switch type="checkbox" ng-model="model[options.key]"/></div>'
            ].join(' ')

        });


        formlyConfigProvider.setType({
            name: 'duoSetting',
            extends: 'input',
            defaultOptions: {
                className: 'col-md-9',
                templateOptions: {
                    type: 'number',
                    noRow: true,
                    label: ''
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'horizontalSwitch',
            extends: 'switch',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });

        formlyConfigProvider.setType({
            name: 'horizontalSelect',
            extends: 'select',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'horizontalMultiselect',
            defaultOptions: {
                templateOptions: {
                    optionsAttr: 'bs-options',
                    ngOptions: 'option[to.valueProp] as option in to.options | filter: $select.search',
                    valueProp: 'id',
                    labelProp: 'label'
                }
            },
            templateUrl: 'ui-select-multiple.html',
            wrapper: ['settingWrapper', 'bootstrapHasError']
        });


        formlyConfigProvider.setType({
            name: 'label',
            template: '<label class="control-label">{{to.label}}</label>'
        });

        formlyConfigProvider.setType({
            name: 'duolabel',
            extends: 'label',
            defaultOptions: {
                className: 'col-md-2',
                templateOptions: {
                    label: '-'
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'repeatSection',
            templateUrl: 'repeatSection.html',
            controller: function ($scope) {
                $scope.formOptions = {formState: $scope.formState};
                $scope.addNew = addNew;
                $scope.remove = remove;
                $scope.copyFields = copyFields;

                function copyFields(fields) {
                    fields = angular.copy(fields);
                    $scope.repeatfields = fields;
                    return fields;
                }

                $scope.clear = function (field) {
                    return _.mapObject(field, function (key, val) {
                        if (typeof val === 'object') {
                            return $scope.clear(val);
                        }
                        return undefined;

                    });
                };


                function addNew() {
                    $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                    var repeatsection = $scope.model[$scope.options.key];
                    var newsection = angular.copy($scope.options.templateOptions.defaultModel);
                    repeatsection.push(newsection);
                }

                function remove($index) {
                    $scope.model[$scope.options.key].splice($index, 1);
                }
            }
        });

        formlyConfigProvider.setType({
            name: 'indexers',
            templateUrl: 'indexers.html',
            controller: function ($scope, $uibModal) {
                $scope.formOptions = {formState: $scope.formState};
                $scope._showIndexerBox = _showIndexerBox;
                $scope.showIndexerBox = showIndexerBox;
                $scope.orderIndexer = orderIndexer;
                $scope.isInitial = false;

                $scope.presets = [
                    {
                        name: "6box",
                        host: "https://6box.me",
                        searchIds: ["imdbid"]
                    },
                    {
                        name: "6box nzedb",
                        host: "https://nzedb.6box.me",
                        searchIds: ["rid", "imdbid"]
                    },
                    {
                        name: "6box nntmux",
                        host: "https://nn-tmux.6box.me",
                        searchIds: ["tvdbid", "rid", "imdbid"]
                    },
                    {
                        name: "DogNZB",
                        host: "https://api.dognzb.cr",
                        searchIds: ["tvdbid", "rid", "imdbid"]
                    },
                    {
                        name: "Drunken Slug",
                        host: "https://drunkenslug.com",
                        searchIds: ["tvdbid", "imdbid", "tvmazeid", "traktid", "tmdbid"]
                    },
                    {
                        name: "NZB Finder",
                        host: "https://nzbfinder.ws",
                        searchIds: ["tvdbid", "rid", "imdbid", "tvmazeid", "traktid", "tmdbid"]
                    },
                    {
                        name: "NZBs.org",
                        host: "https://nzbs.org",
                        searchIds: ["tvdbid", "rid", "imdbid", "tvmazeid"]
                    },
                    {
                        name: "nzb.su",
                        host: "https://api.nzb.su",
                        searchIds: ["rid", "imdbid"]
                    },
                    {
                        name: "NZBGeek",
                        host: "https://api.nzbgeek.info",
                        searchIds: ["tvdbid", "rid", "imdbid"]
                    }
                ];

                function _showIndexerBox(model, parentModel, isInitial, callback) {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'indexerModal.html',
                        controller: 'IndexerModalInstanceController',
                        size: 'lg',
                        resolve: {
                            model: function () {
                                return model;
                            },
                            fields: function () {
                                var fieldset = [];


                                fieldset.push({
                                    key: 'enabled',
                                    type: 'horizontalSwitch',
                                    templateOptions: {
                                        type: 'switch',
                                        label: 'Enabled'
                                    }
                                });

                                if (model.type == 'newznab') {
                                    fieldset.push(
                                        {
                                            key: 'name',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'text',
                                                label: 'Name',
                                                required: true,
                                                help: 'Used for identification. Changing the name will lose all history and stats!'
                                            }
                                        })
                                }
                                if (model.type == 'newznab') {
                                    fieldset.push(
                                        {
                                            key: 'host',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'text',
                                                label: 'Host',
                                                required: true,
                                                placeholder: 'http://www.someindexer.com'
                                            },
                                            watcher: {
                                                listener: function (field, newValue, oldValue, scope) {
                                                    if (newValue != oldValue) {
                                                        scope.$parent.needsConnectionTest = true;
                                                    }
                                                }
                                            }
                                        }
                                    )
                                }

                                if (model.type == 'newznab' || model.type == 'omgwtf') {
                                    fieldset.push(
                                        {
                                            key: 'apikey',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'text',
                                                required: true,
                                                label: 'API Key'
                                            },
                                            watcher: {
                                                listener: function (field, newValue, oldValue, scope) {
                                                    if (newValue != oldValue) {
                                                        scope.$parent.needsConnectionTest = true;
                                                    }
                                                }
                                            }
                                        }
                                    )
                                }

                                if (model.type == 'omgwtf') {
                                    fieldset.push(
                                        {
                                            key: 'username',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'text',
                                                required: true,
                                                label: 'Username'
                                            },
                                            watcher: {
                                                listener: function (field, newValue, oldValue, scope) {
                                                    if (newValue != oldValue) {
                                                        scope.$parent.needsConnectionTest = true;
                                                    }
                                                }
                                            }
                                        }
                                    )
                                }

                                fieldset.push(
                                    {
                                        key: 'score',
                                        type: 'horizontalInput',
                                        hideExpression: '!model.enabled',
                                        templateOptions: {
                                            type: 'number',
                                            label: 'Priority',
                                            required: true,
                                            help: 'When duplicate search results are found the result from the indexer with the highest number will be selected'
                                        }
                                    });

                                fieldset.push(
                                    {
                                        key: 'timeout',
                                        type: 'horizontalInput',
                                        hideExpression: '!model.enabled',
                                        templateOptions: {
                                            type: 'number',
                                            label: 'Timeout',
                                            help: 'Supercedes the general timeout in "Searching"'
                                        }
                                    });

                                if (model.type == "newznab") {
                                    fieldset.push(
                                        {
                                            key: 'hitLimit',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'number',
                                                label: 'API hit limit',
                                                help: 'Maximum number of API hits since "API hit reset time"'
                                            }
                                        }
                                    );
                                    fieldset.push(
                                        {
                                            key: 'hitLimitResetTime',
                                            type: 'timeOfDay',
                                            hideExpression: '!model.enabled || !model.hitLimit',
                                            templateOptions: {
                                                type: 'time',
                                                label: 'API hit reset time',
                                                help: 'UTC time at which the API hit counter is reset'
                                            }
                                        });
                                    fieldset.push(
                                        {
                                            key: 'username',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'text',
                                                required: false,
                                                label: 'Username',
                                                help: 'Only needed if indexer requires HTTP auth for API access (rare)'
                                            },
                                            watcher: {
                                                listener: function (field, newValue, oldValue, scope) {
                                                    if (newValue != oldValue) {
                                                        scope.$parent.needsConnectionTest = true;
                                                    }
                                                }
                                            }
                                        }
                                    );
                                    fieldset.push(
                                        {
                                            key: 'password',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled || !model.username',
                                            templateOptions: {
                                                type: 'text',
                                                required: false,
                                                label: 'Password',
                                                help: 'Only needed if indexer requires HTTP auth for API access (rare)'
                                            }
                                        }
                                    )

                                }


                                if (model.type != "womble") {
                                    fieldset.push(
                                        {
                                            key: 'preselect',
                                            type: 'horizontalSwitch',
                                            hideExpression: '!model.enabled || model.accessType == "external"',
                                            templateOptions: {
                                                type: 'switch',
                                                label: 'Preselect',
                                                help: 'Preselect this indexer on the search page'
                                            }
                                        }
                                    );
                                    fieldset.push(
                                        {
                                            key: 'accessType',
                                            type: 'horizontalSelect',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                label: 'Enable for...',
                                                options: [
                                                    {name: 'Internal searches only', value: 'internal'},
                                                    {name: 'API searches only', value: 'external'},
                                                    {name: 'Internal and API searches', value: 'both'}
                                                ]
                                            }
                                        }
                                    )
                                }

                                if (model.type == 'newznab') {
                                    fieldset.push(
                                        {
                                            key: 'search_ids',
                                            type: 'horizontalMultiselect',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                label: 'Search IDs',
                                                options: [
                                                    {label: 'TVDB', id: 'tvdbid'},
                                                    {label: 'TVRage', id: 'rid'},
                                                    {label: 'IMDB', id: 'imdbid'},
                                                    {label: 'Trakt', id: 'traktid'},
                                                    {label: 'TVMaze', id: 'tvmazeid'},
                                                    {label: 'TMDB', id: 'tmdbid'}
                                                ]
                                            }
                                        }
                                    );
                                    fieldset.push(
                                        {
                                            key: 'searchTypes',
                                            type: 'horizontalMultiselect',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                label: 'Search types',
                                                options: [
                                                    {label: 'Movies', id: 'movie'},
                                                    {label: 'TV', id: 'tvsearch'},
                                                    {label: 'Ebooks', id: 'book'},
                                                    {label: 'Audio', id: 'audio'}
                                                ]
                                            }
                                        }
                                    )
                                }

                                if (model.type == 'newznab') {
                                    fieldset.push(
                                        {
                                            type: 'horizontalCheckCaps',
                                            hideExpression: '!model.enabled || !model.host || !model.apikey || !model.name || angular.isUndefined(model.searchTypes)',
                                            templateOptions: {
                                                label: 'Check search types',
                                                help: 'Find out what search types the indexer supports. Done automatically for new indexers.'
                                            }
                                        }
                                    )
                                }

                                if (model.type == 'nzbindex') {
                                    fieldset.push(
                                        {
                                            key: 'generalMinSize',
                                            type: 'horizontalInput',
                                            hideExpression: '!model.enabled',
                                            templateOptions: {
                                                type: 'number',
                                                label: 'Min size',
                                                help: 'NZBIndex returns a lot of crap with small file sizes. Set this value and all smaller results will be filtered out no matter the category'
                                            }
                                        }
                                    );
                                }

                                return fieldset;
                            },
                            isInitial: function () {
                                return isInitial
                            },
                            parentModel: function () {
                                return parentModel;
                            }
                        }
                    });

                    modalInstance.result.then(function () {
                        $scope.form.$setDirty(true);
                        if (angular.isDefined(callback)) {
                            callback(true);
                        }
                    }, function () {
                        console.log("Indexer cancelled");
                        if (angular.isDefined(callback)) {
                            callback(false);
                        }
                    });
                }

                function showIndexerBox(model, parentModel) {
                    $scope._showIndexerBox(model, parentModel, false)
                }
                
                function orderIndexer(a, b) {
                    console.log(a);
                    console.log(b);
                    // if (a.score = b.score) {
                    //     return a.name < b.name;
                    // } else {
                    //     return a.score < b.score;
                    // }
                    return 0;
                }

                $scope.addIndexer = function (indexers, preset) {
                    var model = {
                        enabled: true,
                        host: null,
                        apikey: null,
                        hitLimit: null,
                        hitLimitResetTime: new Date(0),
                        timeout: null,
                        name: null,
                        showOnSearch: true,
                        score: 0,
                        username: null,
                        password: null,
                        preselect: true,
                        type: 'newznab',
                        accessType: "both",
                        search_ids: undefined, //["imdbid", "rid", "tvdbid"],
                        searchTypes: undefined, //["tvsearch", "movie"]
                    };
                    if (angular.isDefined(preset)) {
                        model.name = preset.name;
                        model.host = preset.host;
                        model.search_ids = preset.searchIds;
                    }

                    $scope.isInitial = true;

                    $scope._showIndexerBox(model, indexers, true, function (isSubmitted) {
                        if (isSubmitted) {
                            console.log("Pusing to model");
                            indexers.push(model);
                        }
                    });
                };

            }

        });

    }]);

angular
    .module('nzbhydraApp').run(["formlyConfig", "formlyValidationMessages", function (formlyConfig, formlyValidationMessages) {

    formlyValidationMessages.addStringMessage('required', 'This field is required');

    formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';

}]);


angular.module('nzbhydraApp').controller('IndexerModalInstanceController', ["$scope", "$uibModalInstance", "$http", "model", "fields", "isInitial", "parentModel", "growl", "ModalService", "blockUI", function ($scope, $uibModalInstance, $http, model, fields, isInitial, parentModel, growl, ModalService, blockUI) {

    $scope.model = model;
    $scope.fields = fields;
    $scope.isInitial = isInitial;
    $scope.spinnerActive = false;
    $scope.needsConnectionTest = false;

    console.log($uibModalInstance);


    function checkConnection(onSuccess, onUnsuccessful, onError) {
        console.log("Connection test needed");
        $scope.spinnerActive = true;
        var url;
        var params;
        if (model.type == "newznab") {
            url = "internalapi/test_newznab";
            params = {host: model.host, apikey: model.apikey};
        } else if (model.type == "omgwtf") {
            url = "internalapi/test_omgwtf";
            params = {username: model.username, apikey: model.apikey};
        }

        $http.get(url, {params: params}).success(function (result) {
            //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
            if (result.result) {
                if (angular.isDefined(onSuccess)) {
                    onSuccess();
                }
            } else {
                if (angular.isDefined(onUnsuccessful)) {
                    onUnsuccessful(result.message);
                }
            }

        }).error(function (result) {
            if (angular.isDefined(onError)) {
                onError(result.message);
            }
        }).finally(function () {
            $scope.spinnerActive = false;
        });
    }

    function checkCaps(onSuccess, onError) {
        $scope.spinnerActive = true;
        var url;
        var params;

        url = "internalapi/test_caps";
        params = {indexer: model.name, apikey: model.apikey, host: model.host};
        $http.get(url, {params: params}).success(function (result) {
            //Using ng-class and a scope variable doesn't work for some reason, is only updated at second click 
            if (result.success) {
                if (angular.isDefined(onSuccess)) {
                    onSuccess(result.ids, result.types);
                }
            } else {
                if (angular.isDefined(onError)) {
                    onError();
                }
            }

        }).error(function () {
            if (angular.isDefined(onError)) {
                onError(result.message);
            }
        }).finally(function () {
            $scope.spinnerActive = false;
        })
    }

    function checkCapsOrSubmit() {
        if (angular.isUndefined(model.search_ids) || angular.isUndefined(model.searchTypes)) {
            console.log("We need to check the caps first");
            blockUI.start("New indexer found. Testing its capabilities. This may take a bit...");
            checkCaps(
                function (ids, types) {
                    blockUI.reset();
                    growl.info("Successfully tested capabilites of indexer. Supports: " + ids + "," + types);
                    model.search_ids = ids;
                    model.searchTypes = types;
                    $uibModalInstance.close($scope);
                },
                function () {
                    blockUI.reset();
                    ModalService.open("Error testing capabilities", "The capabilities of the indexer could not be checked. The indexer won't be used for ID based searches (IMDB, TVDB, etc.). You may repeat the check manually at any time.", function () {
                        $uibModalInstance.close($scope);
                    });
                    model.search_ids = [];
                    model.searchTypes = [];
                })
        } else {
            $uibModalInstance.close($scope);
        }
    }

    $scope.obSubmit = function () {
        if ($scope.form.$valid) {
            if ($scope.needsConnectionTest) {
                checkConnection(
                    function () {
                        console.log("Form is valid and connection was tested successfully");
                        checkCapsOrSubmit();
                    },
                    function (message) {
                        console.log("Form is valid but connection was not tested successfully");
                        growl.error("The connection to the indexer failed: " + message);
                    },
                    function () {
                        console.log("Form is valid but connection was not tested successfully");
                        growl.error("The connection to the indexer could not be tested, sorry");
                    });
            } else {
                console.log("No connection test needed");
                checkCapsOrSubmit();
            }
        } else {
            growl.error("Config invalid. Please check your settings.");
            console.log($scope);
            angular.forEach($scope.form.$error.required, function (field) {
                field.$setTouched();
            });
        }
    };

    $scope.reset = function () {
        console.log("Cancelling");
        $scope.reset();
    };

    $scope.deleteIndexer = function () {
        parentModel.splice(parentModel.indexOf(model), 1);
        $uibModalInstance.close($scope);
    };

    $scope.reset = function () {
        console.log("Resetting to original model");
        for (var i = 0; i < $scope.fields.length; i++) {
            if (angular.isDefined($scope.fields[i].resetModel)) {
                $scope.fields[i].resetModel();
            }
        }

    };

    $scope.$on("modal.closing", function (targetScope, reason, c) {
        console.log("Closing");

        if (reason == "backdrop click") {
            $scope.reset();
        }
    });
}]);
var filters = angular.module('filters', []);

filters.filter('bytes', function() {
	return function(bytes, precision) {
		if (isNaN(parseFloat(bytes)) || !isFinite(bytes) || bytes == 0) return '-';
		if (typeof precision === 'undefined') precision = 1;
		
		var units = ['b', 'kB', 'MB', 'GB', 'TB', 'PB'],
			number = Math.floor(Math.log(bytes) / Math.log(1024));
		return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +   units[number];
	}
});

filters.filter('unsafe', 
	["$sce", function ($sce) {
		return function (value, type) {
			return $sce.trustAs(type || 'html', text);
		};
	}]
);
angular
    .module('nzbhydraApp')
    .factory('ConfigService', ConfigService);

function ConfigService($http, $q, $cacheFactory) {

    var cache = $cacheFactory("nzbhydra");

    return {
        set: set,
        get: get,
        getSafe: getSafe,
        invalidateSafe: invalidateSafe,
        maySeeAdminArea: maySeeAdminArea
    };


    function set(newConfig) {
        $http.put('internalapi/setsettings', newConfig)
            .then(function (successresponse) {
                console.log("Settings saved. Updating cache");
                cache.put("config", newConfig);
            }, function (errorresponse) {
                console.log("Error saving settings: " + errorresponse);
            });
    }

    function get() {
        var config = cache.get("config");
        if (angular.isUndefined(config)) {
            config = $http.get('internalapi/getconfig').then(function (data) {
                return data.data;
            });
            cache.put("config", config);
        }

        return config;
    }

    function getSafe() {
        var safeconfig = cache.get("safeconfig");
        if (angular.isDefined(safeconfig)) {
            return safeconfig;
        }
        
        return $http.get('internalapi/getsafeconfig').then(function (data) {
            cache.put("safeconfig", data.data);
            return data.data;
        });


    }

    function invalidateSafe() {
        cache.remove("safeconfig");
    }

    function maySeeAdminArea() {
        function loadAll() {
            var maySeeAdminArea = cache.get("maySeeAdminArea");
            if (!angular.isUndefined(maySeeAdminArea)) {
                var deferred = $q.defer();
                deferred.resolve(maySeeAdminArea);
                return deferred.promise;
            }

            return $http.get('internalapi/mayseeadminarea')
                .then(function (configResponse) {
                    var config = configResponse.data;
                    cache.put("maySeeAdminArea", config);
                    return configResponse.data;
                });
        }

        return loadAll().then(function (maySeeAdminArea) {
            return maySeeAdminArea;
        });
    }
}
ConfigService.$inject = ["$http", "$q", "$cacheFactory"];
angular
    .module('nzbhydraApp')
    .factory('ConfigFields', ConfigFields);

function ConfigFields() {

    var restartWatcher;

    return {
        getFields: getFields,
        setRestartWatcher: setRestartWatcher
    };

    function setRestartWatcher(restartWatcherFunction) {
        restartWatcher = restartWatcherFunction;
    }


    function restartListener(field, newValue, oldValue) {
        if (newValue != oldValue) {
            restartWatcher();
        }
    }

    

    function ipValidator() {
        return {
            expression: function ($viewValue, $modelValue) {
                var value = $modelValue || $viewValue;
                if (value) {
                    return /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(value)
                        || /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value);
                }
                return true;
            },
            message: '$viewValue + " is not a valid IP Address"'
        };
    }

    function authValidatorDontLockYourselfOut(rootModel) {
        return {
            expression: function ($viewValue, $modelValue, scope) {
                var value = $viewValue || $modelValue;
                if (value) {
                    return true;
                }
                if (rootModel.auth.users.length > 0) {
                    return _.any(rootModel.auth.users, function (user) {
                        return scope.model.username != user.username && user.maySeeAdmin;
                    })
                }
                return true;
            },
            message: '"If you have users at least one should have admin rights or you lock yourself out"'
        };
    }

    function regexValidator(regex, message, prefixViewValue) {
        return {
            expression: function ($viewValue, $modelValue) {
                var value = $modelValue || $viewValue;
                if (value) {
                    return regex.test(value);
                }
                return true;
            },

            message: (prefixViewValue ? '$viewValue + " ' : '" ') + message + '"'
        };
    }

    function getFields(rootModel) {
        return {
            main: [
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Hosting'},
                    fieldGroup: [
                        {
                            key: 'host',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Host',
                                required: true,
                                placeholder: 'IPv4 address to bind to',
                                help: 'I strongly recommend using a reverse proxy instead of exposing this directly. Requires restart.'
                            },
                            validators: {
                                ipAddress: ipValidator()
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'port',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Port',
                                required: true,
                                placeholder: '5050',
                                help: 'Requires restart'
                            },
                            validators: {
                                port: regexValidator(/^\d{1,5}$/, "is no valid port", true)
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'urlBase',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'URL base',
                                placeholder: '/nzbhydra',
                                help: 'Set when using an external proxy. Call using a trailing slash, e.g. http://www.domain.com/nzbhydra/'
                            },
                            validators: {
                                urlBase: regexValidator(/^\/[\w\/]*$/, "Base URL needs to start with a slash and must not end with one")
                            }
                        },
                        {
                            key: 'externalUrl',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'External URL',
                                placeholder: 'https://www.somedomain.com/nzbhydra/',
                                help: 'Set to the full external URL so machines outside can use the generated NZB links.'
                            }
                        },
                        {
                            key: 'useLocalUrlForApiAccess',
                            type: 'horizontalSwitch',
                            hideExpression: '!model.externalUrl',
                            templateOptions: {
                                type: 'switch',
                                label: 'Use local address in API results',
                                help: 'Disable to make API results use the external URL in NZB links.'
                            }
                        },
                        {
                            key: 'ssl',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Use SSL',
                                help: 'I recommend using a reverse proxy instead of this. Requires restart.'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'sslcert',
                            hideExpression: '!model.ssl',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'SSL certificate file',
                                required: true,
                                help: 'Requires restart.'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'sslkey',
                            hideExpression: '!model.ssl',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'SSL key file',
                                required: true,
                                help: 'Requires restart.'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        }

                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'UI'},
                    fieldGroup: [

                        {
                            key: 'theme',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'Theme',
                                help: 'Reload page after saving',
                                options: [
                                    {name: 'Default', value: 'default'},
                                    {name: 'Dark', value: 'dark'}
                                ]
                            }
                        }
                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Security'},
                    fieldGroup: [

                        {
                            key: 'apikey',
                            type: 'horizontalApiKeyInput',
                            templateOptions: {
                                label: 'API key',
                                help: 'Remove to disable. Alphanumeric only'
                            },
                            validators: {
                                apikey: regexValidator(/^[a-zA-Z0-9]*$/, "API key must only contain numbers and digits", false)
                            }
                        }
                    ]
                },

                {
                    wrapper: 'fieldset',
                    key: 'logging',
                    templateOptions: {label: 'Logging'},
                    fieldGroup: [
                        {
                            key: 'logfilelevel',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'Logfile level',
                                options: [
                                    {name: 'Critical', value: 'CRITICAL'},
                                    {name: 'Error', value: 'ERROR'},
                                    {name: 'Warning', value: 'WARNING'},
                                    {name: 'Info', value: 'INFO'},
                                    {name: 'Debug', value: 'DEBUG'}
                                ]
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'logfilename',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Log file',
                                required: true
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'consolelevel',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'Console log level',
                                options: [
                                    {name: 'Critical', value: 'CRITICAL'},
                                    {name: 'Error', value: 'ERROR'},
                                    {name: 'Warning', value: 'WARNING'},
                                    {name: 'Info', value: 'INFO'},
                                    {name: 'Debug', value: 'DEBUG'}
                                ]
                            },
                            watcher: {
                                listener: restartListener
                            }
                        }


                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Updating'},
                    fieldGroup: [

                        {
                            key: 'gitPath',
                            type: 'horizontalInput',
                            templateOptions: {
                                label: 'Git executable',
                                help: 'Set if git is not in your path'
                            }
                        },
                        {
                            key: 'branch',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Repository branch',
                                required: true,
                                help: 'Stay on master. Seriously...'
                            }
                        }
                    ]
                },

                {
                    wrapper: 'fieldset',
                    templateOptions: {label: 'Other'},
                    fieldGroup: [
                        {
                            key: 'debug',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Enable debugging',
                                help: "Only do this if you know what and why you're doing it"
                            }
                        },
                        {
                            key: 'runThreaded',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Run threaded server',
                                help: 'Requires restart'
                            },
                            watcher: {
                                listener: restartListener
                            }
                        },
                        {
                            key: 'startupBrowser',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Open browser on startup'
                            }
                        }
                    ]
                }
            ],

            searching: [
                {
                    wrapper: 'fieldset',
                    templateOptions: {
                        label: 'Indexer access'
                    },
                    fieldGroup: [
                        {
                            key: 'timeout',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Timeout when accessing indexers',
                                addonRight: {
                                    text: 'seconds'
                                }
                            }
                        },
                        {
                            key: 'ignoreTemporarilyDisabled',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Ignore temporarily disabled',
                                help: "If enabled access to indexers will never be paused after an error occurred"
                            }
                        },
                        {
                            key: 'ignorePassworded',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Ignore passworded releases',
                                help: "Not all indexers provide this information"
                            }
                        },
                        {
                            key: 'ignoreWords',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Ignore results with ...',
                                placeholder: 'separate, with, commas, like, this',
                                help: "Results with any of these words in the title will be ignored"
                            }
                        },
                        {
                            key: 'requireWords',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Only accept results with ...',
                                placeholder: 'separate, with, commas, like, this',
                                help: "Only results with at least of these words in the title will be displayed"
                            }
                        },
                        {
                            key: 'maxAge',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Maximum results age',
                                help: 'Results older than this are ignored. Can be overwritten per search.',
                                addonRight: {
                                    text: 'days'
                                }
                            }
                        },
                        {
                            key: 'generate_queries',
                            type: 'horizontalMultiselect',
                            templateOptions: {
                                label: 'Generate queries',
                                options: [
                                    {label: 'Internal searches', id: 'internal'},
                                    {label: 'API searches', id: 'external'}
                                ],
                                help: "Generate queries for indexers which do not support ID based searches"
                            }
                        },
                        {
                            key: 'userAgent',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'User agent',
                                required: true
                            }
                        }

                    ]
                },
                {
                    wrapper: 'fieldset',
                    templateOptions: {
                        label: 'Result processing'
                    },
                    fieldGroup: [
                        {
                            key: 'htmlParser',
                            type: 'horizontalSelect',
                            templateOptions: {
                                type: 'select',
                                label: 'HTML parser',
                                options: [
                                    {name: 'Default BS (slow)', value: 'html.parser'},
                                    {name: 'LXML (faster, needs to be installed separately)', value: 'lxml'}
                                ]
                            }
                        },
                        {
                            key: 'duplicateSizeThresholdInPercent',
                            type: 'horizontalPercentInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Duplicate size threshold',
                                required: true,
                                addonRight: {
                                    text: '%'
                                }

                            }
                        },
                        {
                            key: 'duplicateAgeThreshold',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Duplicate age threshold',
                                required: true,
                                addonRight: {
                                    text: 'seconds'
                                }
                            }
                        },
                        {
                            key: 'removeDuplicatesExternal',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Remove API duplicates',
                                help: 'Remove duplicates when searching via API'
                            }
                        },
                        {
                            key: 'alwaysShowDuplicates',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Always show duplicates',
                                help: 'Activate to show duplicates in search results by default'
                            }
                        }
                    ]
                },

                {
                    wrapper: 'fieldset',
                    key: 'categorysizes',
                    templateOptions: {label: 'Category sizes'},
                    fieldGroup: [

                        {
                            key: 'enable_category_sizes',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Category sizes',
                                help: "Preset min and max sizes depending on the selected category"
                            }
                        },
                        {
                            wrapper: 'logicalGroup',
                            hideExpression: '!model.enable_category_sizes',
                            fieldGroup: [
                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Movies'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'moviesmin',
                                            type: 'duoSetting',
                                            templateOptions: {
                                                addonRight: {
                                                    text: 'MB'
                                                }
                                            }
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'moviesmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },
                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Movies HD'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'movieshdmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'movieshdmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },
                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Movies SD'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'moviessdmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'movieshdmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'TV'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'tvmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'tvmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'TV HD'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'tvhdmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'tvhdmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'TV SD'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'tvsdmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'tvsdmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Audio'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'audiomin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'audiomax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Audio FLAC'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'flacmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'flacmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Audio MP3'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'mp3min',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'mp3max',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Audiobook'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'audiobookmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'audiobookmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Console'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'consolemin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'consolemax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'PC'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'pcmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'pcmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'XXX'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'xxxmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'xxxmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                },

                                {
                                    wrapper: 'settingWrapper',
                                    templateOptions: {
                                        label: 'Ebook'
                                    },
                                    fieldGroup: [
                                        {
                                            key: 'ebookmin',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        },
                                        {
                                            type: 'duolabel'
                                        },
                                        {
                                            key: 'ebookmax',
                                            type: 'duoSetting', templateOptions: {addonRight: {text: 'MB'}}
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                }

            ],

            downloader: [
                {
                    key: 'downloader',
                    type: 'horizontalSelect',
                    templateOptions: {
                        type: 'select',
                        label: 'Downloader',
                        options: [
                            {name: 'None', value: 'none'},
                            {name: 'NZBGet', value: 'nzbget'},
                            {name: 'SABnzbd', value: 'sabnzbd'}
                        ]
                    }
                },
                {
                    key: 'nzbaccesstype',
                    type: 'horizontalSelect',
                    templateOptions: {
                        type: 'select',
                        label: 'NZB access type',
                        options: [
                            {name: 'Proxy NZBs from indexer', value: 'serve'},
                            {name: 'Redirect to the indexer', value: 'redirect'}
                        ],
                        help: "How external access to NZBs is provided. Redirecting is recommended."
                    }
                },
                {
                    key: 'nzbAddingType',
                    type: 'horizontalSelect',
                    templateOptions: {
                        type: 'select',
                        label: 'NZB adding type',
                        options: [
                            {name: 'Send link', value: 'link'},
                            {name: 'Upload NZB', value: 'nzb'}
                        ],
                        help: "How NZBs are added to the downloader, either by sending a link to the NZB or by uploading the NZB data"
                    }
                },
                {
                    wrapper: 'fieldset',
                    key: 'nzbget',
                    hideExpression: 'model.downloader!="nzbget"',
                    templateOptions: {label: 'NZBGet'},
                    fieldGroup: [
                        {
                            key: 'host',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Host',
                                required: true
                            }
                        },
                        {
                            key: 'port',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'number',
                                label: 'Port',
                                placeholder: '5050',
                                required: true
                            }
                        },
                        {
                            key: 'ssl',
                            type: 'horizontalSwitch',
                            templateOptions: {
                                type: 'switch',
                                label: 'Use SSL'
                            }
                        },
                        {
                            key: 'username',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Username'
                            }
                        },
                        {
                            key: 'password',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'password',
                                label: 'Password'
                            }
                        },
                        {
                            key: 'defaultCategory',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Default category',
                                help: 'When adding NZBs this category will be used instead of asking for the category'
                            }
                        },
                        {
                            type: 'horizontalTestConnection',
                            templateOptions: {
                                label: 'Test connection',
                                testType: 'downloader',
                                downloader: 'nzbget'
                            }
                        }


                    ]
                },
                {
                    wrapper: 'fieldset',
                    key: 'sabnzbd',
                    hideExpression: 'model.downloader!="sabnzbd"',
                    templateOptions: {label: 'SABnzbd'},
                    fieldGroup: [
                        {
                            key: 'url',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'URL',
                                required: true
                            }
                        },
                        {
                            key: 'username',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Username',
                                help: 'Usually not needed when an API key is used'
                            }
                        },
                        {
                            key: 'password',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'password',
                                label: 'Password',
                                help: 'Usually not needed when an API key is used'
                            }
                        },
                        {
                            key: 'apikey',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'API Key'
                            }
                        },
                        {
                            key: 'defaultCategory',
                            type: 'horizontalInput',
                            templateOptions: {
                                type: 'text',
                                label: 'Default category',
                                help: 'When adding NZBs this category will be used instead of asking for the category'
                            }
                        },
                        {
                            type: 'horizontalTestConnection',
                            templateOptions: {
                                label: 'Test connection',
                                testType: 'downloader',
                                downloader: 'sabnzbd'
                            }
                        }


                    ]
                }
            ],

        
            
            indexers: [
                {
                    type: "indexers"
                }
            ],

            auth: [
                {
                    type: 'help',
                    templateOptions: {
                        lines: [
                            'To require login only for admin access create a user with empty username and password and add a user with username and password and admin rights.',
                            'To have a simple and an admin user remove the authless user and create two users, one without and one with admin rights.',
                            'Leave empty to disable authorization.'
                        ]
                    }
                },
                {
                    type: 'repeatSection',
                    key: 'users',
                    model: rootModel.auth,
                    templateOptions: {
                        btnText: 'Add new user',
                        altLegendText: 'Authless',
                        fields: [
                            {
                                key: 'username',
                                type: 'horizontalInput',
                                templateOptions: {
                                    type: 'text',
                                    label: 'Username'
                                }
                            },
                            {
                                key: 'password',
                                type: 'horizontalInput',
                                templateOptions: {
                                    type: 'password',
                                    label: 'Password'
                                }
                            },
                            {
                                key: 'maySeeStats',
                                type: 'horizontalSwitch',
                                templateOptions: {
                                    type: 'switch',
                                    label: 'May see stats'
                                }
                            },
                            {
                                key: 'maySeeAdmin',
                                type: 'horizontalSwitch',
                                templateOptions: {
                                    type: 'switch',
                                    label: 'May see admin area'
                                },
                                validators: {
                                    dontLockYourselfOut: authValidatorDontLockYourselfOut(rootModel)
                                },
                                data: {
                                    rootModel: rootModel
                                }
                            }

                        ],
                        defaultModel: {
                            username: null,
                            password: null,
                            maySeeStats: true,
                            maySeeAdmin: true
                        }
                    }
                }
            ]
        };
    }
}
angular
    .module('nzbhydraApp')
    .factory('ConfigModel', function () {
        return {};
    });

angular
    .module('nzbhydraApp')
    .factory('ConfigWatcher', function () {
        var $scope;

        return {
            watch: watch
        };

        function watch(scope) {
            $scope = scope;
            $scope.$watchGroup(["config.main.host"], function () {
                console.log("Restart needed");
            }, true);
        }
    });


angular
    .module('nzbhydraApp')
    .controller('ConfigController', ConfigController);

function ConfigController($scope, ConfigService, config, CategoriesService, ConfigFields, ConfigModel, ModalService, RestartService, $state, growl) {
    $scope.config = config;
    $scope.submit = submit;

    $scope.restartRequired = false;

    ConfigFields.setRestartWatcher(function () {
        $scope.restartRequired = true;
    });

    $scope.newfields = [];

    function submit(form) {
        console.log("Submitting");
        if (form.$valid) {
            
            ConfigService.set($scope.config);
            ConfigService.invalidateSafe();
            form.$setPristine();
            CategoriesService.invalidate();
            if ($scope.restartRequired) {
                ModalService.open("Restart required", "The changes you have made may require a restart to be effective.<br>Do you want to restart now?", function () {
                    RestartService.restart();
                }, function () {
                    $scope.restartRequired = false;
                });
            }
        } else {
            growl.error("Config invalid. Please check your settings.");
            
            //Ridiculously hacky way to make the error messages appear
            try {
                if (angular.isDefined(form.$error.required)) {
                    _.each(form.$error.required, function (item) {
                        if (angular.isDefined(item.$error.required)) {
                            _.each(item.$error.required, function (item2) {
                                item2.$setTouched();
                            });
                        } 
                    });
                }
                angular.forEach($scope.form.$error.required, function (field) {
                    field.$setTouched();
                });
            } catch(err) {
                //
            }
            
        }
    }

    ConfigModel = config;

    $scope.fields = ConfigFields.getFields($scope.config);

    $scope.formTabs = [
        {
            name: 'Main',
            model: ConfigModel.main,
            fields: $scope.fields.main
        },
        {
            name: 'Authorization',
            model: ConfigModel.auth,
            fields: $scope.fields.auth
        },
        {
            name: 'Searching',
            model: ConfigModel.searching,
            fields: $scope.fields.searching
        },
        {
            name: 'Downloader',
            model: ConfigModel.downloader,
            fields: $scope.fields.downloader
        },
        {
            name: 'Indexers',
            model: ConfigModel.indexers,
            fields: $scope.fields.indexers
        }
    ];

    $scope.allTabs = [
        {
            active: false,
            state: 'config'
        },
        {
            active: false,
            state: 'config.auth'
        },
        {
            active: false,
            state: 'config.searching'
        },
        {
            active: false,
            state: 'config.downloader'
        },
        {
            active: false,
            state: 'config.indexers'
        }
    ];

    for (var i = 0; i < $scope.allTabs.length; i++) {
        if ($state.is($scope.allTabs[i].state)) {
            $scope.allTabs[i].active = true;
        }
    }

    $scope.isSavingNeeded = function (form) {
        return form.$dirty && form.$valid;
    };

    $scope.goToConfigState = function (index) {
        $state.go($scope.allTabs[index].state);
        if (index == 5) {
            $scope.downloadLog();
        }
    };
    


}
ConfigController.$inject = ["$scope", "ConfigService", "config", "CategoriesService", "ConfigFields", "ConfigModel", "ModalService", "RestartService", "$state", "growl"];



angular
    .module('nzbhydraApp')
    .factory('CategoriesService', CategoriesService);

function CategoriesService($http, $q, $uibModal) {

    var categories;
    var selectedCategory;
    
    var service = {
        get: getCategories,
        invalidate: invalidate,
        select : select,
        openCategorySelection: openCategorySelection 
    };
    
    return service;
    

    function getCategories() {

        function loadAll() {
            if (!angular.isUndefined(categories)) {
                var deferred = $q.defer();
                deferred.resolve(categories);
                return deferred.promise;
            }

            return $http.get('internalapi/getcategories')
                .then(function (categoriesResponse) {
                    
                        console.log("Updating downloader categories cache");
                        categories = categoriesResponse.data;
                        return categoriesResponse.data;
                    
                }, function(error) {
                    throw error;
                });
        }

        return loadAll().then(function (categories) {
            return categories.categories;
        }, function (error) {
            throw error;
        });
    }

    
    var deferred;
    
    function openCategorySelection() {
        $uibModal.open({
            templateUrl: 'static/html/directives/addable-nzb-modal.html',
            controller: 'CategorySelectionController',
            size: "sm",
            resolve: {
                categories: getCategories
            }
        });
        deferred = $q.defer();
        return deferred.promise;
    }
    
    function select(category) {
        selectedCategory = category;
        console.log("Selected category " + category);
        deferred.resolve(category);
    }
    
    function invalidate() {
        console.log("Invalidating categories");
        categories = undefined;
    }
}
CategoriesService.$inject = ["$http", "$q", "$uibModal"];

angular
    .module('nzbhydraApp').controller('CategorySelectionController', ["$scope", "$uibModalInstance", "CategoriesService", "categories", function ($scope, $uibModalInstance, CategoriesService, categories) {
    console.log(categories);
    $scope.categories = categories;
    $scope.select = function (category) {
        CategoriesService.select(category);
        $uibModalInstance.close($scope);
    }
}]);
angular
    .module('nzbhydraApp')
    .factory('BackupService', BackupService);

function BackupService($http) {

    return {
        getBackupsList: getBackupsList
    };
    

    function getBackupsList() {
        return $http.get('internalapi/getbackups').then(function (data) {
            return data.data.backups;
        });
    }

}
BackupService.$inject = ["$http"];
//# sourceMappingURL=nzbhydra.js.map
