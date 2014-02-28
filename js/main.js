
$( document ).ready(function() {

    var delay=1000//1 seconds
    setTimeout(function(){

var seriously = new Seriously(),
    video = seriously.source('#myvideo'), // get video element by CSS selector
    target = seriously.target('#canvas'), // output canvas
    effects = {
    vignette: seriously.effect('vignette'),
    blur: seriously.effect('blur'),
    filmgrain: seriously.effect('filmgrain')
    };  
effects.vignette.source = video;
effects.vignette.amount = 0;
effects.blur.source = effects.vignette;
effects.blur.amount = '#blur_amount';
effects.filmgrain.source = effects.blur;
effects.filmgrain.amount = '#grain_amount';
target.source = effects.filmgrain;

seriously.go();

    // Using CodeMirror

            var glossary = {
                'function': 
'In vidcode, a function is a block of code which executes a certain behavior.\
 * You can \"call\" on a function to complete its behavior in other parts of your code (and as many times as you want).\
 * Our vidcode has 3 functions: pixelate(), blackandWhiteProcessing(), and scrubProcessing().',
                'play' :
' * \"Play\" is a function which can be applied to an object.  In our code the object is \"movie\".\
 * To apply a function to an object you place it directly after the object with a period in between.',
                'foreach' :
' * foreach allows you to cycle through all the pixels in your video.  The computer reads each of your pixels in list form (a really loooong list), then paints them on the screen.  This is the secret to video processing!'
            };

            var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('codemirror'),  {
                  value: "function myScript(){return 100;}\n",
                  mode:  "javascript",
                  lineWrapping: true,
                  lineNumbers: true
                });

            $(".cm-keyword:contains('function')")
                .addClass('vc-glossary')
                .attr('title', glossary.function)
                .data('toggle', 'tooltip')
                .data('placement', 'bottom')
                .tooltip();

            $(".cm-variable:contains('foreach')")
                .addClass('vc-glossary')
                .attr('title', glossary.foreach)
                .data('toggle', 'tooltip')
                .data('placement', 'bottom')
                .tooltip();

            $(".cm-variable:contains('pixelate()')")
                .addClass('vc-glossary')
                .attr('title', 'This is a method or function, same thing.')
                .data('toggle', 'tooltip')
                .data('placement', 'right')
                .tooltip();

            
        
                var matches = document.querySelectorAll(".cm-number");

                for (var i = 0; i < matches.length; i++)
                    {
                        var match = matches[i];

new Scrubbing (
match
              , { driver : [ Scrubbing.driver.Mouse,
                             Scrubbing.driver.MouseWheel,
                             Scrubbing.driver.Touch
                           ]});

                    }


                    //Using ACE Editor

//         editor.setValue(editor_text + '\n\    effects.filmgrain.amount = ' + effects.filmgrain.amount + ';\n\    effects.blur.amount = ' + effects.blur.amount + ';');
    
//     $("#grain_amount").change(function(){
//         editor.gotoLine(9);
//         editor.setValue(editor_text + '\n\    effects.filmgrain.amount = ' + effects.filmgrain.amount + ';\n\    effects.blur.amount = ' + effects.blur.amount + ';');
//     });

//     $("#blur_amount").change(function(){
//         editor.gotoLine(10); 
//         editor.setValue(editor_text + '\n\    effects.filmgrain.amount = ' + effects.filmgrain.amount + ';\n\    effects.blur.amount = ' + effects.blur.amount + ';');  
//     });

    $(".tab2").click(function(){
        $(".tabs-2").removeClass("hidden");
        $(".tabs-1").addClass("hidden");
    });

    $(".tab1").click(function(){
        $(".tabs-1").removeClass("hidden");
        $(".tabs-2").addClass("hidden");
    });

    $(".layer1").click(function(){
        $(".displaysecond").animate({
            "margin-left": 0}, "ease", function(){
                $(".displayfirst").addClass("hidden2"); 
            });
        $(".tabs-2").removeClass("hidden");
    });

    $(".layer2").click(function(){
        $(".displayfirst").animate({
            "margin-left": -15}, "ease", function(){
                $(".getting-started").addClass("hidden2");
            });
    });

    $(".uploadfirst").click(function(){
        $(".popup").removeClass("hidden");
    });

    $(".uploadbtn").click(function(){
        $(".popup").addClass("hidden");
        $(".video2").removeClass("hidden");
        $(".uploadfirst").addClass("hidden");
        $(".clearHover").addClass("hidden");
        $(".overlay").addClass("blackbg");
    });

    $(".runbtn").click(function(){
        $(".video2").removeClass("hidden");
        $('.buttons').hide();
    });

    $( "#sortable" ).sortable({
        revert: true
    });
    $( "#draggable" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });

    $( "#draggable2" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid",
      stop: function( event, ui ) {               
        editor.setValue(editor_text);  
      }

    });

    $( "#draggable3" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });

    $( "#draggable4" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid",
      stop: function( event, ui ) {
        editor.setValue(editor_text);
      }
    });
    $( "ul, li" ).disableSelection();

       },delay)
});
