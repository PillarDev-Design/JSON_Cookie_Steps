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
    // Control Step Progress
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            if($('#content_progress_bar_one').hasClass('progress_bar_active')){
                $('#content_progress_bar_one').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_one').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_one').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_one').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_one').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "2"){
            if($('#content_progress_bar_two').hasClass('progress_bar_active')){
                $('#content_progress_bar_two').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_two').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_two').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_two').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_two').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "3"){
        }
        if(completedSteps[i] === "2"){
        }
        if(completedSteps[i] === "2"){
        }
    }

    // Fire Correct Step
    if(currentStep === "1"){
        if($('#content_progress_bar_one').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_one').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_one').hasClass('progress_bar_available')){
            $('#content_progress_bar_one').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_one').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_one').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_One(cookieData, completedSteps, currentStep);
    } else if(currentStep === "2"){
        if($('#content_progress_bar_two').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_two').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_two').hasClass('progress_bar_available')){
            $('#content_progress_bar_two').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_two').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_two').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Two(cookieData, completedSteps, currentStep);
    } else if(currentStep === "3"){

    } else if(currentStep === "4"){

    } else if(currentStep === "5"){

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
        cookieData = {
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
        $.JSONCookie(name, cookieData, {path: '/'});
    });

    // Check For Previous Data
    var savedData = $.JSONCookie(name);
    if(savedData.stepOneQuestionOne !== null){
        completedSteps.push("1");
        cookieData.stepOneQuestionOne = savedData.stepOneQuestionOne;
        cookieData.stepOneQuestionTwo = savedData.stepOneQuestionTwo;
        cookieData.stepOneQuestionThree = savedData.stepOneQuestionThree;
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
function JSON_Cookie_Step_One(cookieData, completedSteps, currentStep){
    // Ensure Step One is visible and all others are display:none;
    if($('#content_step_one_container').hasClass('content_step_inactive')){
        $('#content_step_one_container').removeClass('content_step_inactive').addClass('content_step_active');
    }
    if($('#content_step_two_container').hasClass('content_step_active')){
        $('#content_step_two_cotnainer').removeClass('content_step_active').addClass('content_step_inactive');
    }

    // Declare Variables
    var stepOneQuestionOneAnswer = null,
        stepOneQuestionTwoAnswer = null,
        stepOneQuestionThreeAnswer = null,
        saveArray = {};

    // Subcategory Values
    var categoryOneSubcategories = "<option value='catOneSubOne'>Category One - Subcategory One</option><option value='catOneSubTwo'>Category One - Subcategory Two</option>",
        categoryTwoSubcategories = "<option value='catTwoSubOne'>Category Two - Subcategory One</option><option value='catTwoSubTwo'>Category Two - Subcategory Two</option><option value='catTwoSubThree'>Category Two - Subcategory Three</option>",
        categoryThreeSubcategories = "<option value='catThreeSubOne'>Category Three - Subcategory One</option>";

    // Make the Select Lists Blank
    $('#content_step_one_question_one').prop('selectedIndex', -1);
    
    // Check If Loading Data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "1"){
            // Load Question Answers
            stepOneQuestionOneAnswer = cookieData.stepOneQuestionOne;
            stepOneQuestionTwoAnswer = cookieData.stepOneQuestionTwo;
            stepOneQuestionThreeAnswer = cookieData.stepOneQuestionThree;

            // Load Data
            // Step One
            var tempLength = $('#content_step_one_question_one').prop('length'),
                tempSelect = document.getElementById('content_step_one_question_one');

            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepOneQuestionOneAnswer){
                    tempSelect.selectedIndex = i;
                }
            }
            // Load Step Two Options
            if(stepOneQuestionOneAnswer === 'mainCategoryOne'){
                $('#content_step_one_question_two').empty().append(categoryOneSubcategories);
            } else if(stepOneQuestionOneAnswer === 'mainCategoryTwo'){
                $('#content_step_one_question_two').empty().append(categoryTwoSubcategories);
            } else if(stepOneQuestionOneAnswer === 'mainCategoryThree'){
                $('#content_step_one_question_two').empty().append(categoryThreeSubcategories);
            }
            // Step Two
            tempLength = $('#content_step_one_question_two').prop('length');
            tempSelect = document.getElementById('content_step_one_question_two');

            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepOneQuestionTwoAnswer){
                    tempSelect.selectedIndex = i;
                }
            }
            // Step Three
            tempLength = stepOneQuestionThreeAnswer.length;
            for(var i=0; i<tempLength; i++){
                if(stepOneQuestionThreeAnswer[i] === "none"){
                    $('#content_step_one_question_three_box_one').prop('checked', true);
                }else if(stepOneQuestionThreeAnswer[i] === "two"){
                    $('#content_step_one_question_three_box_two').prop('checked', true);
                }else if(stepOneQuestionThreeAnswer[i] === "three"){
                    $('#content_step_one_question_three_box_three').prop('checked', true);
                }
            }
        }
    }

    
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
    Step_One_Form_Check(stepOneQuestionOneAnswer, stepOneQuestionTwoAnswer, stepOneQuestionThreeAnswer);

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

            var addStepOne = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1"){
                    addStepOne = false;
                }
            }
            if(addStepOne === true){
                completedSteps.push("1");
            }
            Save_Cookie(saveArray, "stepOne", completedSteps);
            Check_Available_Steps(saveArray, completedSteps, "2");
        } else {
            // Failure
        }
    });
    
    // Assign Events to Step Buttons
    $('#content_progress_bar_one').click(function(){
    });
    $('#content_progress_bar_two').click(function(){
    });
    $('#content_progress_bar_three').click(function(){
    });
    $('#content_progress_bar_four').click(function(){
    });
    $('#content_progress_bar_five').click(function(){
    });
};

/***********************************************\
 * Step 2                                      *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Two(cookieData, completedSteps, currentStep){
    // Ensure Step One is visible and all others are display:none;
    if($('#content_step_two_container').hasClass('content_step_inactive')){
        $('#content_step_two_container').removeClass('content_step_inactive').addClass('content_step_active');
    }
    if($('#content_step_one_container').hasClass('content_step_active')){
        $('#content_step_one_cotnainer').removeClass('content_step_active').addClass('content_step_inactive');
    }

    // Enable Back Button
    if($('#content_nav_back').hasClass('content_nav_base_inactive')){
        // Forward
        $('#content_nav_back').removeClass('content_nav_base_inactive');
        $('#content_nav_back').addClass('content_nav_base_active');
    }


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


    // Make the Select Lists Blank
    $('#content_step_two_scientific_name').prop('selectedIndex', -1);
    $('#content_step_two_common_name').prop('selectedIndex', -1);

    // Enable the date picker
    new JsDatePick({
        useMode: 2,
        target: 'content_step_two_ipmdate_date_assessed',
        cellColorScheme: "../static/css/img/ocean_blue",
        limitToToday: true
    });

    
    // Check If Loading Data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "2"){
            // Load Question Answers
            stepTwoScientificName = cookieData.stepTwoScientificName;
            stepTwoCommonName = cookieData.stepTwoCommonName;
            stepTwoScale = cookieData.stepTwoScale;
            stepTwoWeedManagementArea = cookieData.stepTwoWeedManagementArea;
            stepTwoConservationTargetImpacted = cookieData.stepTwoConservationTargetImpacted;
            stepTwoProjectAreaNameAndSize = cookieData.stepTwoProjectAreaNameAndSize;
            stepTwoPropertyOwner = cookieData.stepTwoPropertyOwner;
            stepTwoIPMDATDateAssessed = cookieData.stepTwoIPMDATDateAssessed;
            stepTwoAssessors = cookieData.stepTwoAssessors;
            stepTwoReviewers = cookieData.stepTwoReviewers;

            // Load Data
            // Scientific Name
            var tempLength = $('#content_step_two_scientific_name').prop('length'),
                tempSelect = document.getElementById('content_step_two_scientific_name');
            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepTwoScientificName){
                    tempSelect.selectedIndex = i;
                }
            }

            // Common Name
            tempLength = $('#content_step_two_common_name').prop('length');
            tempSelect = document.getElementById('content_step_two_common_name');
            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepTwoCommonName){
                    tempSelect.selectedIndex = i;
                }
            }

            // Scale
            $('#content_step_two_scale').val = stepTwoScale;

            // Weed Management Area
            $('#content_step_two_weed_management_area').val = stepTwoWeedManagementArea;

            // Conservation Target Impacted
            $('#content_step_two_conservation_target_impacted').val = stepTwoConservationTargetImpacted;

            // Project Area Name And Size
            $('#content_step_two_project_area_name_and_size').val = stepTwoProjectAreaNameAndSize;

            // Property Owner
            $('#content_step_two_property_owner').val = stepTwoPropertyOwner;
            
            // IPMDAT Date Assessed
            $('#content_step_two_ipmdat_date_assessed').val = stepTwoIPMDATDateAssessed;
            
            // Assessors
            $('#content_step_two_assessors').val = stepTwoAssessors;
            
            // Reviewers
            $('#content_step_two_reviewers').val = stepTwoReviewers;
        }
    }

    
    // Function to check if form is complete
    function Step_Two_Form_Check(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10){
        console.log("q1: " + q1);
        console.log("q2: " + q2);
        console.log("q3: " + q3);
        console.log("q4: " + q4);
        console.log("q5: " + q5);
        console.log("q6: " + q6);
        console.log("q7: " + q7);
        console.log("q8: " + q8);
        console.log("q9: " + q9);
        console.log("q10: " + q10);
        if((q1 !== null) && (q2 !== null) && (q3 !== null) && (q4 !== null) && (q5 !== null) && (q6 !== null) && (q7 !== null) && (q8 !== null) && (q9 !== null) && (q10 !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                // Forward
                $('#content_nav_forward').removeClass('content_nav_base_inactive');
                $('#content_nav_forward').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_three').removeClass('progress_bar_inactive');
                $('#content_progress_bar_three').addClass('progress_bar_available');
            }
        } else if((q1 === null) || (q2 === null) || (q3 === null) || (q4 === null) || (q5 === null) || (q6 === null) || (q7 === null) || (q8 === null) || (q9 === null) || (q10 === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active');
                $('#content_nav_forward').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_progress_bar_three').removeClass('progress_bar_available');
                $('#content_progress_bar_three').addClass('progress_bar_inactive');
            } 
        }
    };
    Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)

    // Assign Events to Content Fields
    $('#content_step_two_scientific_name').change(function(){
        // Assign Variable
        stepTwoScientificName = $('#content_step_two_scientific_name').val();
        
        var tempLength = $('#content_step_two_scientific_name').prop('length'),
            tempSelect = document.getElementById('content_step_two_scientific_name'),
            tempSelectCommon = document.getElementById('content_step_two_common_name');
        for(var i=0; i<tempLength; i++){
            if(tempSelect.options[i].value === stepTwoScientificName){
                tempSelectCommon.selectedIndex = i;
            }
        }
        stepTwoCommonName = $('#content_step_two_common_name').val();

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_common_name').change(function(){
        // Assign Variable
        stepTwoCommonName = $('#content_step_two_common_name').val();
        
        var tempLength = $('#content_step_two_common_name').prop('length'),
            tempSelect = document.getElementById('content_step_two_common_name'),
            tempSelectScientific = document.getElementById('content_step_two_scientific_name');
        for(var i=0; i<tempLength; i++){
            if(tempSelect.options[i].value === stepTwoCommonName){
                tempSelectScientific.selectedIndex = i;
            }
        }
        stepTwoScientificName = $('#content_step_two_scientific_name').val();
        
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_scale').change(function(){
        if($('#content_two_scale').val() === ""){
            stepTwoScale = null;
        }else{
            stepTwoScale = $('#content_step_two_scale').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_weed_management_area').change(function(){
        if($('#content_two_weed_management_area').val() === ""){
            stepTwoWeedManagementArea = null;
        }else{
            stepTwoWeedManagementArea = $('#content_step_two_weed_management_area').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_conservation_target_impacted').change(function(){
        if($('#content_two_conservation_target_impacted').val() === ""){
            stepTwoConservationTargetImpacted = null;
        }else{
            stepTwoConservationTargetImpacted = $('#content_step_two_conservation_target_impacted').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_project_area_name_and_size').change(function(){
        if($('#content_two_project_area_name_and_size').val() === ""){
            stepTwoProjectAreaNameAndSize = null;
        }else{
            stepTwoProjectAreaNameAndSize = $('#content_step_two_project_area_name_and_size').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_property_owner').change(function(){
        if($('#content_two_property_owner').val() === ""){
            stepTwoPropertyOwner = null;
        }else{
            stepTwoPropertyOwner = $('#content_step_two_property_owner').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_ipmdat_date_assessed').change(function(){
        if($('#content_step_two_ipmdat_date_assessed').val === ""){
            stepTwoIPMDATDateAssessed = null;
        }else{
            stepTwoIPMDATDateAssessed = $('#content_step_two_ipmdat_date_assessed').val();
        }
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_assessors').change(function(){
        if($('#content_step_two_assessors').val === ""){
            stepTwoAssessors = null;
        }else{
            stepTwoAssessors = $('#content_step_two_assessors').val();
        }
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
    });

    $('#content_step_two_reviewers').change(function(){
        if($('#content_step_two_reviewers').val === ""){
            stepTwoReviewers = null;
        }else{
            stepTwoReviewers = $('#content_step_two_reviewers').val();
        }
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoScientificName, stepTwoCommonName, stepTwoScale, stepTwoWeedManagementArea, stepTwoConservationTargetImpacted, stepTwoProjectAreaNameAndSize, stepTwoPropertyOwner, stepTwoIPMDATDateAssessed, stepTwoAssessors, stepTwoReviewers)
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

    // Assign Events to Back Button
    
    // Assign Events to Step Buttons
    $('#content_progress_bar_one').click(function(){
    });
    $('#content_progress_bar_two').click(function(){
    });
    $('#content_progress_bar_three').click(function(){
    });
    $('#content_progress_bar_four').click(function(){
    });
    $('#content_progress_bar_five').click(function(){
    });
};
