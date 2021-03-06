function scrollMagicBuild() {
    var scrollController = new ScrollMagic.Controller({
        refreshInterval: 200
    });
    TweenMax.to("#main", 0.1, {
        backgroundColor: "#fff"
    });
    var introTween = new TimelineMax().add([
        TweenMax.fromTo("#main", 1, {
            backgroundColor: "#fff"
        }, {
            backgroundColor: "#f08e8e"
        }),
        TweenMax.fromTo(".webframe", 1, {
            borderColor: "#67d4ef"
        }, {
            borderColor: "#ffb5b5",
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".main-header", 3, {
            css: {
                y: 0,
                opacity: 1
            }
        }, {
            css: {
                y: -100,
                opacity: 0
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".welcome", 3, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -300
            }
        }),
        TweenMax.fromTo(".scrollBas", 3, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -500
            }
        }),
    ])
    var introScene = new ScrollMagic.Scene({
        duration: 1200
    }).setTween(introTween).addTo(scrollController);

    var midTween = new TimelineMax().add([
        TweenMax.fromTo(".mid .slower", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -50
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .slow", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -100
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .normal", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -300
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .normal2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -400
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .normal3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -500
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .fast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -600
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .faster", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -900
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .soFast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1540
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .soFast2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1800
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .soFast3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2000
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .soFast4", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2300
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .spe", 3, {
            css: {
                y: 0,
                opacity: 0.8
            }
        }, {
            css: {
                y: -100,
                opacity: 0.4
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid .spe1", 3, {
            css: {
                opacity: 1
            }
        }, {
            css: {
                opacity: 0.9
            },
            ease: Power1.easeout
        })
    ]);
    var midScene = new ScrollMagic.Scene({
        triggerElement: "#core",
        duration: $(".mid").height()
    }).setTween(midTween).addTo(scrollController);

    var greyTo = new TimelineMax().add([
        TweenMax.fromTo("#main", 1, {
            backgroundColor: "#f08e8e"
        }, {
            backgroundColor: "#f0e08e",
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".webframe", 1, {
            borderColor: "#ffb5b5"
        }, {
            borderColor: "#f5ebb5",
            ease: Power1.easeout
        })
    ]);
    var greyToScene = new ScrollMagic.Scene({
        triggerElement: ".mid2",
        duration: 600
    }).setTween(greyTo).addTo(scrollController);

    var mid2Tween = new TimelineMax().add([
        TweenMax.fromTo(".mid2 .slower", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -50
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .slow", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -100
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .normal", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -300
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .normal2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -400
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .normal3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -500
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .fast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -600
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .faster", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -900
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .soFast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1540
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .soFast2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1800
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .soFast3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2000
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .soFast4", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2300
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid2 .spe2", 3, {
            css: {
                opacity: 0.8
            }
        }, {
            css: {
                opacity: 0.4
            },
            ease: Power1.easeout
        })
    ]);
    var mid2Scene = new ScrollMagic.Scene({
        triggerElement: ".mid2",
        duration: $(".mid2").height()
    }).setTween(mid2Tween).addTo(scrollController);

    var yellowToBlue = new TimelineMax().add([
        TweenMax.fromTo("#main", 1, {
            backgroundColor: "#f0e08e"
        }, {
            backgroundColor: "#67d4ef",
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".webframe", 1, {
            borderColor: "#f5ebb5"
        }, {
            borderColor: "#a1dceb",
            ease: Power1.easeout
        })
    ]);
    var yellowToBlueScene = new ScrollMagic.Scene({
        triggerElement: ".mid3",
        duration: 600
    }).setTween(yellowToBlue).addTo(scrollController);

    var mid3Tween = new TimelineMax().add([
        TweenMax.fromTo(".mid3 .slower", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -50
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .slow", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -100
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .normal", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -300
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .normal2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -400
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .normal3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -500
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .fast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -600
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .faster", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -900
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .soFast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1540
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .soFast2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1800
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .soFast3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2000
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid3 .soFast4", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2300
            },
            ease: Power1.easeout
        })
    ]);
    var mid3Scene = new ScrollMagic.Scene({
        triggerElement: ".mid3",
        duration: $(".mid3").height()
    }).setTween(mid3Tween).addTo(scrollController);

    var blueToGreen = new TimelineMax().add([
        TweenMax.fromTo("#main", 1, {
            backgroundColor: "#67d4ef"
        }, {
            backgroundColor: "#8ef08e",
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".webframe", 1, {
            borderColor: "#a1dceb"
        }, {
            borderColor: "#b5f5b5",
            ease: Power1.easeout
        })
    ]);
    var blueToGreenScene = new ScrollMagic.Scene({
        triggerElement: ".mid4",
        duration: 600
    }).setTween(blueToGreen).addTo(scrollController);
    var mid4Tween = new TimelineMax().add([
        TweenMax.fromTo(".mid4 .slower", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -50
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .slow", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -100
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .normal", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -300
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .normal2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -400
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .normal3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -500
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .fast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -600
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .faster", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -900
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .soFast", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1540
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .soFast2", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -1800
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .soFast3", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2000
            },
            ease: Power1.easeout
        }),
        TweenMax.fromTo(".mid4 .soFast4", 2, {
            css: {
                y: 0
            }
        }, {
            css: {
                y: -2300
            },
            ease: Power1.easeout
        })
    ]);
    var mid4Scene = new ScrollMagic.Scene({
        triggerElement: ".mid4",
        duration: $(".mid4").height()
    }).setTween(mid4Tween).addTo(scrollController);
}

jQuery(document).ready(function(e) {

	scrollMagicBuild();
    $('.main-content-img').viewportChecker({
        classToAdd: 'visible',
        offset: 0,
        repeat: true,
        invertBottomOffset: false,
    });
	$('.box-text').viewportChecker({
        classToAdd: 'visible',
        offset: 100,
        repeat: true,
        invertBottomOffset: false,
    });
});