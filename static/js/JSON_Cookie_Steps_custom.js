/******************************************************************************\
 * JSON_Cookie_Steps_custom.js                                                *
 * -------------------------------------------------------------------------- *
 * This file contains the custom code for the JSON_Cookie_Steps project       *
\******************************************************************************/

function JSON_Cookie_Steps_Init(){
    // Assign Functionality to console.log
    $('#console_log').click(function(){
        var name = $('#cookie_name').val();
        var object = $.JSONCookie(name);
        console.log(object);
    });

    // Create Empty JSON to Pass between Functions
    var cookieData = {
        stepOneQuestionOne: "",
        stepOneQuestionTwo: "",
        stepOneQuestionThree: ""
    };

    /***********************************************\
     * Step 1                                      *
    \***********************************************/
    JSON_Cookie_Step_One(cookieData);
};

function Save_Cookie(cookieData, stepNumber){
    var name = $('#cookie_name').val(),
        cookieArray = {
            stepOneQuestionOne: cookieData.stepOneQuestionOne,
            stepOneQuestionTwo: cookieData.stepOneQuestionTwo,
            stepOneQuestionThree: cookieData.stepOneQuestionThree
        };

    $.JSONCookie(name, cookieArray, {path: '/'});
}

/***********************************************\
 * Step 1                                      *
\***********************************************/
function JSON_Cookie_Step_One(cookieData){
    // Declare Variables
    var obj,
        name,
        val,
        new_val,
        stepOneQuestionOneAnswer = null,
        stepOneQuestionTwoAnswer = null,
        stepOneQuestionThreeAnswer = null,
        saveArray = {};

    // Subcategory Values
    var categoryOneSubcategories = "<option value='catOneSubOne'>Category One - Subcategory One</option><option value='catOneSubTwo'>Category One - Subcategory Two</option>",
        categoryTwoSubcategories = "<option value='catTwoSubOne'>Category Two - Subcategory One</option><option value='catTwoSubTwo'>Category Two - Subcategory Two</option><option value='catTwoSubThree'>Category Two - Subcategory Three</option>",
        categoryThreeSubcategories = "<option value='catThreeSubOne'>Category Three - Subcategory One</option>";
    
    // Make the Select Lists Blank
    $('#content_step_one_question_one').prop('selectedIndex', -1);

    // Function to check if form is complete
    function Step_One_Form_Check(q1, q2, q3){
        if((q1 !== null) && (q2 !== null) && (q3 !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive');
                $('#content_nav_forward').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_two').removeClass('progress_bar_inactive');
                $('#content_progress_bar_two').addClass('progress_bar_available');
            }
        } else if((q1 === null) || (q2 === null) || (q3 === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active');
                $('#content_nav_forward').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_progress_bar_two').removeClass('progress_bar_available');
                $('#content_progress_bar_two').addClass('progress_bar_inactive');
            } 
        }
    };

    // Assign Events to Content Fields
    $('#content_step_one_question_one').change(function(){
        // Assign Variable
        stepOneQuestionOneAnswer = $('#content_step_one_question_one').val();
        stepOneQuestionTwoAnswer = null;
        // Populate Second Select List
        if(stepOneQuestionOneAnswer === 'mainCategoryOne'){
            $('#content_step_one_question_two').empty().append(categoryOneSubcategories);
        } else if(stepOneQuestionOneAnswer === 'mainCategoryTwo'){
            $('#content_step_one_question_two').empty().append(categoryTwoSubcategories);
        } else if(stepOneQuestionOneAnswer === 'mainCategoryThree'){
            $('#content_step_one_question_two').empty().append(categoryThreeSubcategories);
        }
        $('#content_step_one_question_two').prop('selectedIndex', -1);

        $('#content_step_one_question_two').change(function(){
            // Assign Variable
            stepOneQuestionTwoAnswer = $('#content_step_one_question_two').val();

            // Execute Step_One_Form_Check
            Step_One_Form_Check(stepOneQuestionOneAnswer, stepOneQuestionTwoAnswer, stepOneQuestionThreeAnswer);
        });

        // Execute Step_One_Form_Check
        Step_One_Form_Check(stepOneQuestionOneAnswer, stepOneQuestionTwoAnswer, stepOneQuestionThreeAnswer);
    });
    
    
    function Check_Boxes(){
        // Check if All Boxes are unchecked
        /*
        if(($('#content_step_one_question_three_box_one').not(':checked')) && ($('#content_step_one_question_three_box_two').not(':checked')) && ($('#content_step_one_question_three_box_three').not(':checked'))){
            stepOneQuestionThreeAnswer = null; 
            console.log('NOT CHECKED');
        }
        */

        if($('#content_step_one_question_three_box_one').is(':checked')){
            stepOneQuestionThreeAnswer = ['none'];
        } else if(($('#content_step_one_question_three_box_two').is(':checked')) && ($('#content_step_one_question_three_box_three').is(':checked'))){
            stepOneQuestionThreeAnswer = ['two', 'three'];
        } else if($('#content_step_one_question_three_box_two').is(':checked')){
            stepOneQuestionThreeAnswer = ['two'];
        } else if($('#content_step_one_question_three_box_three').is(':checked')){
            stepOneQuestionThreeAnswer = ['three'];
        } else {
            stepOneQuestionThreeAnswer = null;
        }

        // Execute Step_One_Form_Check
        Step_One_Form_Check(stepOneQuestionOneAnswer, stepOneQuestionTwoAnswer, stepOneQuestionThreeAnswer);
    };

    // *** Question Three Section ***
    $('#content_step_one_question_three_box_one').change(function(){
        if($('#content_step_one_question_three_box_one').is(':checked')){
            // Uncheck the Other Boxes
            if($('#content_step_one_question_three_box_two').is(':checked')){
                $('#content_step_one_question_three_box_two').prop('checked', false);
            }
            if($('#content_step_one_question_three_box_three').is(':checked')){
                $('#content_step_one_question_three_box_three').prop('checked', false);
            }
        }
        Check_Boxes();
    });
    $('#content_step_one_question_three_box_two').change(function(){
        if(($('#content_step_one_question_three_box_two').is(':checked')) || ($('#content_step_one_question_three_box_three').is(':checked'))){
            if($('#content_step_one_question_three_box_one').is(':checked')){
                $('#content_step_one_question_three_box_one').prop('checked', false);
            }
        }
        Check_Boxes();
    });
    $('#content_step_one_question_three_box_three').change(function(){
        if(($('#content_step_one_question_three_box_two').is(':checked')) || ($('#content_step_one_question_three_box_three').is(':checked'))){
            if($('#content_step_one_question_three_box_one').is(':checked')){
                $('#content_step_one_question_three_box_one').prop('checked', false);
            }
        }
        Check_Boxes();
    });

    // Assign Events to Next Button
    $('#content_nav_forward').click(function(){
        if($('#content_nav_forward').hasClass('content_nav_base_active')){
            // Fire off Save
            saveArray = {
                stepOneQuestionOne: stepOneQuestionOneAnswer,
                stepOneQuestionTwo: stepOneQuestionTwoAnswer,
                stepOneQuestionThree: stepOneQuestionThreeAnswer
            };
            Save_Cookie(saveArray, "stepOne");
        } else {
            // Failure
        }
    });
};
