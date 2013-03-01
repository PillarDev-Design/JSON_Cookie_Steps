/******************************************************************************\
 * JSON_Cookie_Steps_custom.js                                                *
 * -------------------------------------------------------------------------- *
 * This file contains the custom code for the JSON_Cookie_Steps project       *
\******************************************************************************/

/***********************************************\
 * Save_Cookie                                 *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * stepNumber (current step number on save)    *
 * completedSteps (array of completed step #'s *
\***********************************************/
function Save_Cookie(cookieData, stepNumber, completedSteps){
    var name = $('#cookie_name').val(),
        cookieArray = {
            stepOneQuestionOne: null,
            stepOneQuestionTwo: null,
            stepOneQuestionThree: null,
            stepTwoScientificName: null,
            stepTwoCommonName: null,
            stepTwoScale: null,
            stepTwoWeedManagementArea: null,
            stepTwoConservationTargetImpacted: null,
            stepTwoProjectAreaNameAndSize: null,
            stepTwoPropertyOwner: null,
            stepTwoIPMDATDateAssessed: null,
            stepTwoAssessors: null,
            stepTwoReviewers: null
        };
    
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            cookieArray.stepOneQuestionOne = cookieData.stepOneQuestionOne;
            cookieArray.stepOneQuestionTwo = cookieData.stepOneQuestionTwo;
            cookieArray.stepOneQuestionThree = cookieData.stepOneQuestionThree;
        } else if(completedSteps[i] === "2"){
            cookieArray.stepTwoScientificName =  cookieData.stepTwoScientificName;
            cookieArray.stepTwoCommonName = cookieData.stepTwoCommonName;
            cookieArray.stepTwoScale = cookieData.stepTwoScale;
            cookieArray.stepTwoWeedManagementArea = cookieData.stepTwoWeedManagementArea;
            cookieArray.stepTwoConservationTargetImpacted = cookieData.stepTwoConservationTargetImpacted;
            cookieArray.stepTwoProjectAreaNameAndSize = cookieData.stepTwoProjectAreaNameAndSize;
            cookieArray.stepTwoPropertyOwner = cookieData.stepTwoPropertyOwner;
            cookieArray.stepTwoIPMDATDateAssessed = cookieData.stepTwoIPMDATDateAssessed;
            cookieArray.stepTwoAssessors = cookieData.stepTwoAssessors;
            cookieArray.stepTwoReviewers = cookieData.stepTwoReviewers;
        } else if(completedSteps[i] === "3"){

        } else if(completedSteps[i] === "4"){

        } else if(completedSteps[i] === "5"){

        }
    }

    $.JSONCookie(name, cookieArray, {path: '/'});
};

/***********************************************\
 * Check_Available_Steps                       *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function Check_Available_Steps(cookieData, completedSteps, currentStep){
    if(completedSteps.length === 0){
        // No Steps Completed, Fresh Page
        JSON_Cookie_Step_One_Fresh(cookieData, completedSteps, currentStep);
    } else {
        // Steps Have Been Completed
        // Loop Through And Populate
        if(currentStep === "1"){
            //JSON_Cookie_Step_One_Load(cookieData, completedSteps, currentStep);
        } else if(currentStep === "2"){
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "2"){
                    //JSON_Cookie_Step_Two_Fresh(cookieData, completedSteps, currentStep);
                } else {
                    //JSON_Cookie_Step_Two_Load(cookieData, completedSteps, currentStep);
                }
            }
        } else if(currentStep === "3"){

        } else if(currentStep === "4"){

        } else if(currentStep === "5"){

        }
    }
};

/***********************************************\
 * JSON_Cookie_Steps_Init                      *
 * ------------------------------------------- *
 * Initial function being fired on page        *
\***********************************************/
function JSON_Cookie_Steps_Init(){
    // Create Empty JSON to Pass between Functions
    var cookieData = {
        stepOneQuestionOne: null,
        stepOneQuestionTwo: null,
        stepOneQuestionThree: null,
        stepTwoScientificName: null,
        stepTwoCommonName: null,
        stepTwoScale: null,
        stepTwoWeedManagementArea: null,
        stepTwoConservationTargetImpacted: null,
        stepTwoProjectAreaNameAndSize: null,
        stepTwoPropertyOwner: null,
        stepTwoIPMDATDateAssessed: null,
        stepTwoAssessors: null,
        stepTwoReviewers: null
    },
        completedSteps = [],
        currentStep = "1",
        name = $('#cookie_name').val();

    // Assign Functionality to console.log
    $('#console_log').click(function(){
        var object = $.JSONCookie(name);
        console.log(object);
    });
    
    // Assign Functionality to clear cookie
    $('#clear_cookie').click(function(){
        $.JSONCookie(name, cookieData, {path: '/'});
    });

    // Check For Previous Data
    var savedData = $.JSONCookie(name);
    if(savedData.stepOneQuestionOne !== null){
        completedSteps.push("1");
    }
    if(savedData.stepTwoScientificName !== null){
        completedSteps.push("2");
    }

    // Fire off the initial Step (1)
    Check_Available_Steps(cookieData, completedSteps, currentStep);
};

/***********************************************\
 * Step 1                                      *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_One_Fresh(cookieData, completedSteps, currentStep){
    // Declare Variables
    var stepOneQuestionOneAnswer = null,
        stepOneQuestionTwoAnswer = null,
        stepOneQuestionThreeAnswer = null,
        saveArray = {};

    // Subcategory Values
    var categoryOneSubcategories = "<option value='catOneSubOne'>Category One - Subcategory One</option><option value='catOneSubTwo'>Category One - Subcategory Two</option>",
        categoryTwoSubcategories = "<option value='catTwoSubOne'>Category Two - Subcategory One</option><option value='catTwoSubTwo'>Category Two - Subcategory Two</option><option value='catTwoSubThree'>Category Two - Subcategory Three</option>",
        categoryThreeSubcategories = "<option value='catThreeSubOne'>Category Three - Subcategory One</option>";
    
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

    // Make the Select Lists Blank
    $('#content_step_one_question_one').prop('selectedIndex', -1);

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
            completedSteps.push("1");
            Save_Cookie(saveArray, "stepOne", completedSteps);
            //JSON_Cookie_Step_Two(cookieData, completedSteps);
        } else {
            // Failure
        }
    });
    
    // Assign Events to Step Buttons
    $('#content_progress_bar_one').click(function(){
        // Clear Event
    });
    $('#content_progress_bar_two').click(function(){
        // Continue to Step Two if Step 1 is completed.
        if($('#content_nav_forward').hasClass('content_nav_base_active')){
            // Fire off Save
            saveArray = {
                stepOneQuestionOne: stepOneQuestionOneAnswer,
                stepOneQuestionTwo: stepOneQuestionTwoAnswer,
                stepOneQuestionThree: stepOneQuestionThreeAnswer
            };
            completedSteps.push("1");
            Save_Cookie(saveArray, "stepOne", completedSteps);
            //JSON_Cookie_Step_Two(cookieData, completedSteps);
        } else {
            // Failure
        }
    });
    $('#content_progress_bar_three').click(function(){

    });
    $('#content_progress_bar_four').click(function(){

    });
    $('#content_progress_bar_five').click(function(){

    });
};

function JSON_Cookie_Step_One_Load(cookieData, completedSteps, currentStep){

};

function JSON_Cookie_Step_One_Loadout(){

};

/***********************************************\
 * Step 2                                      *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Two(cookieData, completedSteps){
    // Declare Variables
    var stepTwoScientificName = null,
        stepTwoCommonName = null,
        stepTwoScale = null,
        stepTwoWeedManagementArea = null,
        stepTwoConservationTargetImpacted = null,
        stepTwoProjectAreaNameAndSize = null,
        stepTwoPropertyOwner = null,
        stepTwoIPMDATDateAssessed = null,
        stepTwoAssessors = null,
        stepTwoReviewers = null,
        saveArray = {};
    
    // Switch steps
    for(var i=0; i<completedSteps.length; i++){
        
    }

    // Subcategory Values
    
    // Make the Select Lists Blank

    // Function to check if form is complete
    function Step_One_Form_Check(q1, q2, q3){
        if((q1 !== null) && (q2 !== null) && (q3 !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                // Forward/Back Buttons
                $('#content_nav_forward').removeClass('content_nav_base_inactive');
                $('#content_nav_forward').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_two').removeClass('progress_bar_inactive');
                $('#content_progress_bar_two').addClass('progress_bar_available');
            }
        } else if((q1 === null) || (q2 === null) || (q3 === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                // Forward/Back Buttons
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

        // Execute Step_One_Form_Check
        Step_One_Form_Check(stepOneQuestionOneAnswer, stepOneQuestionTwoAnswer, stepOneQuestionThreeAnswer);
    });

    // *** Question Three Section ***
    $('#content_step_one_question_three_box_one').change(function(){
    });
    $('#content_step_one_question_three_box_two').change(function(){
    });
    $('#content_step_one_question_three_box_three').change(function(){
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
    // Assign Events to Back Button

};
