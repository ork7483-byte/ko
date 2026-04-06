// 메인 gsap pin효과
// $(document).ready(function() {
//     gsap.registerPlugin(ScrollTrigger);
//     const ani5 = gsap.timeline();

//     ani5
//     .to(".full_wrap #section1", { autoAlpha: 0, 'z-index': 1 })
//     .to(".full_wrap #section2", { autoAlpha: 1, 'z-index': 9 })
//     .to(".full_wrap #section2 .main_title h2", { autoAlpha: 1, x: 0, duration: 0.2 })
//     .to(".full_wrap #section2", { autoAlpha: 0, 'z-index': 1 })
//     .to(".full_wrap #section3", { autoAlpha: 1, 'z-index': 9 })
//     .to(".full_wrap #section3 .main_title h2", { autoAlpha: 1, x: 0, duration: 0.2 }) 
//     .to(".full_wrap #section3", { autoAlpha: 0, 'z-index': 1 })
//     .to(".full_wrap #section4", { autoAlpha: 1, 'z-index': 9 })
//     .to(".full_wrap #section4 .main_title h3", { autoAlpha: 1, x: 0, duration: 0.2 }) 
//     .to(".full_wrap #section4", { autoAlpha: 0, 'z-index': 1 })
//     .to(".full_wrap #section5", { autoAlpha: 1, 'z-index': 9 })
//     .to(".full_wrap #section5", { autoAlpha: 0, 'z-index': 1 })
//     .to(".full_wrap #section6", { autoAlpha: 1, 'z-index': 9 });

//     ScrollTrigger.matchMedia({
//         "(min-width: 1024px)": function() {
//             ScrollTrigger.create({
//                 animation: ani5,
//                 trigger: ".full_wrap",
//                 start: "top top",
//                 end: "+=5500",  // Larger screen end value
//                 scrub: true,
//                 pin: true,
//                 anticipatePin: 1,
//                 // markers: true
//             });
//         },
//         "(max-width: 1023px)": function() {
//             ScrollTrigger.create({
//                 animation: ani5,
//                 trigger: ".full_wrap",
//                 start: "top top",
//                 end: "+=4000",  // Smaller screen end value
//                 scrub: true,
//                 pin: true,
//                 anticipatePin: 1,
//                 // markers: true
//             });
//         }
//     });
// });











// 메인 풀페이지 코드 -1
// document.addEventListener('DOMContentLoaded', function () {
//     new fullpage('#fullpage', {
//         autoScrolling: true,
//         scrollOverflow: true,  // scrollOverflow 활성화
//         fitToSection: false,   // 섹션 크기에 맞추지 않음
//         scrollingSpeed: 800,   // 스크롤 속도 (밀리초 단위)
        
//     });


// });





// 메인 풀페이지 코드 -2
    
        document.addEventListener('DOMContentLoaded', function () {
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollOverflow: true,  // scrollOverflow 활성화
            fitToSection: false,   // 섹션 크기에 맞추지 않음
            scrollingSpeed: 800,   // 스크롤 속도 (밀리초 단위)
            onLeave: function(origin, destination, direction) {
                $('.section [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                });
                if (origin.index == 6) {
                    $('#mouse-scroll').show();
                }
            },
            onSlideLeave: function(){
                $('.slide [data-aos]').each(function(){
                    $(this).removeClass("aos-animate")
                });
            },
            afterSlideLoad: function(){
                $('.slide.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                });
            },
            afterLoad: function(origin, destination, direction) {
                
                $('.section.active [data-aos]').each(function(){
                    $(this).addClass("aos-animate")
                });
                
                if (destination.index  == 6) {
                    $('#mouse-scroll').hide(100);
                }
            }
        });

    });


// 메인 풀페이지 코드 -3
    // document.addEventListener('DOMContentLoaded', function () {
    //     // AOS 초기화
    //     AOS.init({
    //         duration: 800, // 애니메이션 지속 시간
    //         easing: 'ease-in-out', // 애니메이션 이징
    //         once: true, // 애니메이션을 한 번만 실행할지 여부
    //     });
    
    //     // FullPage.js 초기화
    //     new fullpage('#fullpage', {
    //         autoScrolling: true,
    //         scrollOverflow: true,  // scrollOverflow 활성화
    //         fitToSection: false,   // 섹션 크기에 맞추지 않음
    //         scrollingSpeed: 800,   // 스크롤 속도 (밀리초 단위)
    //         onLeave: function(){
    //             $('.section [data-aos]').each(function(){
    //                 $(this).removeClass("aos-animate");
    //             });
    //         },
    //         onSlideLeave: function(){
    //             $('.slide [data-aos]').each(function(){
    //                 $(this).removeClass("aos-animate");
    //             });
    //         },
    //         afterSlideLoad: function(){
    //             AOS.refresh();
    //             $('.slide.active [data-aos]').each(function(){
    //                 $(this).addClass("aos-animate");
    //             });
    //         },
    //         afterLoad: function(anchorLink, index){
    //             // 특정 인덱스일 때만 이벤트 추가
    //             if (index === 1) { // 1은 예시 인덱스입니다. 필요에 맞게 수정하세요.
    //                 const scrollElement = document.querySelector('.iScrollIndicator'); // 커스텀 스크롤 요소
    
    //                 if (scrollElement) {
    //                     // 이벤트 핸들러가 여러 번 추가되지 않도록 기존 이벤트 핸들러 제거
    //                     scrollElement.removeEventListener('scroll', handleScroll);
    //                     scrollElement.addEventListener('scroll', handleScroll);
    //                 }
    //             } else {
    //                 // 다른 인덱스일 때는 스크롤 이벤트를 제거할 수도 있습니다.
    //                 const scrollElement = document.querySelector('.iScrollIndicator');
    //                 if (scrollElement) {
    //                     scrollElement.removeEventListener('scroll', handleScroll);
    //                 }
    //             }
                
    //             // AOS 애니메이션 업데이트
    //             AOS.refresh();
    //             $('.section.active [data-aos]').each(function(){
    //                 $(this).addClass("aos-animate");
    //             });
    //         }
    //     });
    
    //     // 스크롤 이벤트 핸들러
    //     function handleScroll() {
    //         AOS.refresh(); // 스크롤 시 AOS 애니메이션 업데이트
    //     }
    // });
    






    





$("document").ready(function() {
    // pc 메뉴 해당 사이트 액티브 적용
    var currentUrl = window.location.href;

    $('#header .head_menu .main_menu .dept1 a').each(function() {
        // Compare the href of each link with the current URL
        if (currentUrl.indexOf($(this).attr('href')) !== -1) {
            $(this).addClass('on');
        }
    });

    // 모바일 메뉴 해당 사이트 액티브 적용
    $('#mobile_menu .dept1 a').each(function() {
        // Compare the href of each link with the current URL
        if (currentUrl.indexOf($(this).attr('href')) !== -1) {
            $(this).addClass('on');
        }
    });
    
    // 진단하기 페이지 증상 체크리스트 부분
    $('#test3 .box button').on('click', function() {
        $(this).toggleClass('on');
    });
});



// 비염 페이지 gsap 시작
document.addEventListener("DOMContentLoaded", function() {
    // GSAP의 ScrollTrigger 플러그인을 등록합니다.
    gsap.registerPlugin(ScrollTrigger);

    // .center_line span 요소의 높이를 스크롤에 따라 애니메이션합니다.
    gsap.to(".center_line span", {
        height: "100%", // 높이를 100%로 변경
        ease: "none", // 이징 없이 부드럽게 애니메이션
        scrollTrigger: {
            trigger: ".line_scroll1", // 스크롤 트리거 요소
            start: "-20% top", // 애니메이션 시작 위치
            end: "90% top", // 애니메이션 끝 위치
            scrub: true, // 스크롤에 따라 애니메이션 동기화
            once: true, // 애니메이션이 한 번만 발생하도록 설정
            markers: false // 디버깅을 위한 마커 비활성화
        }
    });

    // 특정 요소가 화면에 등장할 때 'show' 클래스를 추가하는 함수
    const addShowClassOnIntersection = (selector, start) => {
        document.querySelectorAll(selector).forEach((element) => {
            ScrollTrigger.create({
                trigger: element, // 트리거할 요소
                start: start || "center center", // 애니메이션 시작 위치 (기본값: "center center")
                onEnter: () => element.classList.add('show'), // 요소가 화면에 들어올 때 'show' 클래스 추가
                once: true, // 애니메이션이 한 번만 발생하도록 설정
                markers: false // 디버깅을 위한 마커 비활성화
            });
        });
    };

 // 미디어 쿼리를 사용하여 반응형 설정을 적용합니다.
 ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
        // .cir_box1, .cir_box3, .cir_box4 요소에 'show' 클래스를 추가하도록 설정 (기본값: "center center")
        addShowClassOnIntersection('.cir_box1', "center center");
        addShowClassOnIntersection('.cir_box3', "center center");
        addShowClassOnIntersection('.cir_box4', "center center");
        // .cir_box2 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "20% center")
        addShowClassOnIntersection('.cir_box2', "20% center");
    },
    "(max-width: 1024px) and (min-width: 769px)": function() {
        // .cir_box1 요소에 'show' 클래스를 추가하도록 설정 (기본값: "100% center")
        addShowClassOnIntersection('.cir_box1', "-60px 45%");
        // .cir_box2 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "75% center")
        addShowClassOnIntersection('.cir_box2', "-10% 160px");
        // .cir_box3 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "100% center")
        addShowClassOnIntersection('.cir_box3', "-60px 250px");
        // .cir_box4 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "67% center")
        addShowClassOnIntersection('.cir_box4', "-60px 200px");
    },
    "(max-width: 768px) and (min-width: 651px)": function() {
        // .cir_box1 요소에 'show' 클래스를 추가하도록 설정 (기본값: "100% center")
        addShowClassOnIntersection('.cir_box1', "-40px 250px");
        // .cir_box2 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "75% center")
        addShowClassOnIntersection('.cir_box2', "10% 160px");
        // .cir_box3 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "100% center")
        addShowClassOnIntersection('.cir_box3', "-40px 210px");
        // .cir_box4 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "67% center")
        addShowClassOnIntersection('.cir_box4', "-40px 200px");
    },
    "(max-width: 650px)": function() {
        // .cir_box1 요소에 'show' 클래스를 추가하도록 설정 (기본값: "100% center")
        addShowClassOnIntersection('.cir_box1', "-40px 250px");
        // .cir_box2 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "75% center")
        addShowClassOnIntersection('.cir_box2', "10% 160px");
        // .cir_box3 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "100% center")
        addShowClassOnIntersection('.cir_box3', "-40px 200px");
        // .cir_box4 요소에 'show' 클래스를 추가하도록 설정 (시작 위치: "67% center")
        addShowClassOnIntersection('.cir_box4', "-40px 170px");
    }
});

});


        // 감기 페이지 열체질 대한 애니메이션 설정
$(document).ready(function() {
    
    let contPin = gsap.utils.toArray("#cough3"); // #cough3 elements array

    gsap.matchMedia().add("(min-width: 1401px)", function() {
        contPin.forEach(function(section) {
            let target = section.querySelector("#cough3 .txt_box"); // trigger element in each section
    
            if (target) {
                // gsap.to animation settings
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: target, // element to trigger
                        start: 'top 50%',
                        end: '79% 50%',
                        pin: true, // pin element during scroll
                        pinSpacing: false, // no spacing for pinned element
                        scrub: true, // sync animation with scroll
                        markers: false, // enable markers for debugging
                    }
                });
            }
        });
    });
    
        
    // 중앙 상자를 강조하는 함수
    function highlightCenterBox() {
        var $boxList = $('#cough3 .box_wrap .scroll_box1 .box');
        var windowOffset = $(window).scrollTop() + ($(window).height() / 2);
    
        var closestBox = null;
        var minDistance = Number.POSITIVE_INFINITY;
    
        $boxList.each(function() {
            var boxOffset = $(this).offset().top;
            var distance = Math.abs(windowOffset - boxOffset);
    
            if (distance < minDistance) {
                closestBox = $(this);
                minDistance = distance;
            }
        });
    
        $boxList.removeClass('highlight');
        if (closestBox) {
            closestBox.addClass('highlight');
        }
    }
    
    $(window).on('scroll', function() {
        highlightCenterBox();
    });

    // ScrollTrigger를 사용하여 box 요소에 대한 추가적인 애니메이션 효과 등록
    function registerScrollTriggersForBoxes() {
        $('#cough3 .box_wrap .scroll_box1 .box').each(function(index) {
            gsap.fromTo(this, 
                { opacity: 0 },
                { opacity: 1, duration: 1, scrollTrigger: {
                    trigger: this,
                    start: 'top 75%',
                    end: 'bottom 25%',
                    toggleActions: 'play none none reverse'
                }}
            );
        });
    }

    registerScrollTriggersForBoxes();
});



    // 퀵 탑버튼 클릭시 상단 이동

$("document").ready(function() {
    $(".top").click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
})