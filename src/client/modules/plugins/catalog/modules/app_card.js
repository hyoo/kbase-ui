define([
    'bluebird',
    'jquery',
    'kb/common/dom',
    'kb/common/html',
    'kb/widget/widgetSet'
], function (Promise, $, DOM, html, WidgetSet) {
    'use strict';

    // favorites callback should accept:
    //  
    //  favoritesCallback(this.info)
    //    info = 
    //      id:
    //      module_name:
    //      ...
    //     
    function AppCard(type, info, tag, nms_base_url, favoritesCallback, favoritesCallbackParams, isLoggedIn) {

        this.$divs = [];
        this.info = info;
        this.type = type;
        this.tag = tag;
        this.nms_base_url = nms_base_url;
        this.cardsAdded = 0;

        this.isLoggedIn = isLoggedIn;

        this.favoritesCallback = favoritesCallback;
        this.favoritesCallbackParams = favoritesCallbackParams;

        // only an SDK module if it has a module name
        this.isSdk = false;
        if(this.info.module_name) {
            this.isSdk = true;
        }



        this.show = function() {
            for(var k=0; k<this.$divs.length; k++) {
                this.$divs[k].show();
            }
        };

        this.hide = function() {
            for(var k=0; k<this.$divs.length; k++) {
                this.$divs[k].hide();
            }
        };

        /* get a new card that can be added to a DOM element */
        this.getNewCardDiv = function() {
            this.cardsAdded += 1;
            if(this.$divs.length<this.cardsAdded) {
                var $newCard = this._renderAppCard();
                this.$divs.push($newCard);
                return $newCard;
            } else {
                return this.$divs[this.cardsAdded-1];
            }

        };

        /* assumes the cards have been detached from DOM*/
        this.clearCardsAddedCount = function() {
            this.cardsAdded = 0;
        };

        this.clearCardsFromMemory = function() {
            this.cardsAdded = 0;
            this.$divs=0;
        };


        this.starCount = null;
        this.onStar = false;
        this.deactivatedStar = false;

        this.turnOnStar = function() {
            this.onStar = true;
            for(var k=0; k<this.$divs.length; k++) {
                this.$divs[k].find('.kbcb-star')
                    .removeClass('kbcb-star-nonfavorite').addClass('kbcb-star-favorite');
            }
        };
        this.turnOffStar = function() {
            this.onStar = false;
            for(var k=0; k<this.$divs.length; k++) {
                this.$divs[k].find('.kbcb-star')
                    .removeClass('kbcb-star-favorite').addClass('kbcb-star-nonfavorite');
            }
        };

        this.isStarOn = function() {
            return this.onStar;
        }

        this.deactivateStar = function() {
            this.deactivatedStar = true;
            for(var k=0; k<this.$divs.length; k++) {
                this.$divs[k].find('.kbcb-star')
                    .removeClass('kbcb-star-favorite').removeClass('kbcb-star-nonfavorite');
            }
        };

        this.getStarCount = function(count) {
            if(this.starCount) return this.starCount;
            return 0;
        };

        this.setStarCount = function(count) {
            this.starCount = count;
            if(this.starCount<=0) { this.starCount = null; }
            if(this.starCount) {
                for(var k=0; k<this.$divs.length; k++) {
                    this.$divs[k].find('.kbcb-star-count').html(count);
                }
            } else {
                for(var k=0; k<this.$divs.length; k++) {
                    this.$divs[k].find('.kbcb-star-count').empty();
                }
            }
        };

        this.setRunCount = function() {

        };


        /* rendering methods that are shared in multiple places */
        this._renderAppCard = function() {

            var info = this.info;
            var type = this.type;
            var tag = this.tag;
            var nms_base_url = this.nms_base_url;

            // Main Container
            var $appDiv = $('<div>').addClass('kbcb-app-card kbcb-hover container');

            // HEADER - contains logo, title, module link, authors
            var $topDiv = $('<div>').addClass('row kbcb-app-card-header');
            var $logoSpan = $('<div>').addClass('col-xs-3 kbcb-app-card-logo');

            if(type === 'method') {
                $logoSpan.append('<div class="fa-stack fa-3x"><i class="fa fa-square fa-stack-2x method-icon"></i><i class="fa fa-inverse fa-stack-1x fa-cube"></i></div>')
            } else if (type === 'app') {
                $logoSpan.append('<span class="fa-stack fa-3x"><span class="fa fa-square fa-stack-2x app-icon"></span><span class="fa fa-inverse fa-stack-1x fa-cubes" style=""></span></span>');
            }

            // add actual logos here
            if(info.icon && nms_base_url) {
                if(info.icon.url) {
                    $logoSpan.html($('<img src="'+nms_base_url + info.icon.url+'">')
                                        .css({'max-width':'85%', 'padding':'6px 3px 3px 8px',
                                              'max-height': '85%'}));
                }
            }

            var $titleSpan = $('<div>').addClass('col-xs-9 kbcb-app-card-title-panel');
                
            $titleSpan.append($('<div>').addClass('kbcb-app-card-title').append(info.name));
            if(info['module_name']) {
                $titleSpan.append($('<div>').addClass('kbcb-app-card-module').append(
                                        $('<a href="#appcatalog/module/'+info.module_name+'">')
                                            .append(info.module_name)
                                            .on('click',function() {
                                                // have to stop propagation so we don't go to the app page first
                                                event.stopPropagation();
                                            })));
            }

            if(type==='method') {
                if(info.authors.length>0) {
                    var $authorDiv = $('<div>').addClass('kbcb-app-card-authors').append('by ');
                    for(var k=0; k<info.authors.length; k++) {
                        if(k>=1) {
                            $authorDiv.append(', ');
                        }
                        if(k>=2) {
                            $authorDiv.append(' +'+(info.authors.length-2)+' more');
                            break;
                        }
                        $authorDiv.append($('<a href="#people/'+info.authors[k]+'">')
                                            .append(info.authors[k])
                                            .on('click',function() {
                                                // have to stop propagation so we don't go to the app page first
                                                event.stopPropagation();
                                            }));
                    }
                    $titleSpan.append($authorDiv);
                }
            }


            $appDiv.append(
                $topDiv
                    .append($logoSpan)
                    .append($titleSpan));


            // SUBTITLE - on mouseover of info, show subtitle information
            var $subtitle = $('<div>').addClass('kbcb-app-card-subtitle').append(info.subtitle).hide()
            $appDiv.append($subtitle);

            // FOOTER - stars, number of runs, and info mouseover area
            var $footer = $('<div>').addClass('clearfix kbcb-app-card-footer');

            if(type==='method') {
                var $starDiv = $('<div>').addClass('col-xs-3').css('text-align','left');
                var $star = $('<span>').addClass('kbcb-star').append('<i class="fa fa-star"></i>');
                var self = this;
                if(self.isLoggedIn) {
                    $star.addClass('kbcb-star-nonfavorite');
                    $star.on('click', function() {
                        event.stopPropagation();
                        if(!self.deactivatedStar && self.favoritesCallback) {
                            self.favoritesCallback(self.info, self.favoritesCallbackParams)
                        }
                    });
                    $starDiv.tooltip({title:'Click on the star to add/remove from your favorites', placement:'right',
                                        delay:{show: 400, hide: 40}});
                }
                var $starCount = $('<span>').addClass('kbcb-star-count');
                if(this.starCount) { $starCount.html('&nbsp;' + this.starCount); }
                $footer.append($starDiv.append($star).append($starCount));
                
            } else {
                $footer.append($('<div>').addClass('col-xs-3'))
            }

            if(this.isSdk) {
                var nRuns = Math.floor(Math.random()*10000);
                var $nRuns = $('<div>').addClass('col-xs-3').css('text-align','left');
                $nRuns.append($('<span>').append('<i class="fa fa-share"></i>'));
                $nRuns.append('&nbsp;'+nRuns);
                $nRuns.tooltip({title:'Run in a narrative '+nRuns+' times.', placement:'bottom',
                                        delay:{show: 400, hide: 40}});

                $footer.append($nRuns);
            } else {
                $footer.append($('<div>').addClass('col-xs-3'))
            }

            // buffer
            $footer.append($('<div>').addClass('col-xs-4').css('text-align','left'));

            var $moreInfoDiv = $('<div>').addClass('col-xs-1').addClass('kbcb-info').css('text-align','right');
            $moreInfoDiv
                .on('mouseenter', function() {
                    $topDiv.hide();
                    $subtitle.fadeIn('fast');
                })
                .on('mouseleave', function() {
                    $subtitle.hide();
                    $topDiv.fadeIn('fast');
                });
            $moreInfoDiv.append($('<span>').append('<i class="fa fa-info"></i>'));
            $footer.append($moreInfoDiv);
            $appDiv.append($footer);


            $appDiv.on('click', function() {
                if(type === 'method') {
                    if(info.module_name) {
                        // module name right now is encoded in the ID
                        //window.location.href = '#appcatalog/app/'.info.module_name+'/'+app.info.id;
                        if(tag) {
                            window.location.href = '#appcatalog/app/'+info.id + '/'+tag;
                        } else {
                            window.location.href = '#appcatalog/app/'+info.id;
                        }
                    } else {
                        // legacy method, encoded as l.m
                        window.location.href = '#appcatalog/app/l.m/'+info.id;
                    }
                } else {
                    // apps still go to old style page
                    window.location.href = '#narrativestore/app/'+info.id;
                }
            });

            // put it all in a container so we can control margins
            var $appCardContainer = $('<div>').addClass('kbcb-app-card-container');
            return $appCardContainer.append($appDiv);
        };



    }

    return AppCard;
});