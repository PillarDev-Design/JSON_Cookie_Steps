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
        savedData = $.JSONCookie(name),
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
            stepTwoReviewers: null,
            stepThreeMainCategory: null
        };

    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            if(stepNumber === "stepOne"){
                // Entering NEW data from cookieData
                cookieArray.stepOneQuestionOne = cookieData.stepOneQuestionOne;
                cookieArray.stepOneQuestionTwo = cookieData.stepOneQuestionTwo;
                cookieArray.stepOneQuestionThree = cookieData.stepOneQuestionThree;
            }else{
                // Recall OLD data from savedData
                cookieArray.stepOneQuestionOne = savedData.stepOneQuestionOne;
                cookieArray.stepOneQuestionTwo = savedData.stepOneQuestionTwo;
                cookieArray.stepOneQuestionThree = savedData.stepOneQuestionThree;
            }
        }else if(completedSteps[i] === "2"){
            if(stepNumber === "stepTwo"){
                // Entering NEW data from cookieData
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
            }else{
                // Recall OLD data from savedData
                cookieArray.stepTwoScientificName = savedData.stepTwoScientificName;
                cookieArray.stepTwoCommonName = savedData.stepTwoCommonName;
                cookieArray.stepTwoScale = savedData.stepTwoScale;
                cookieArray.stepTwoWeedManagementArea = savedData.stepTwoWeedManagementArea;
                cookieArray.stepTwoConservationTargetImpacted = savedData.stepTwoConservationTargetImpacted;
                cookieArray.stepTwoProjectAreaNameAndSize = savedData.stepTwoProjectAreaNameAndSize;
                cookieArray.stepTwoPropertyOwner = savedData.stepTwoPropertyOwner;
                cookieArray.stepTwoIPMDATDateAssessed = savedData.stepTwoIPMDATDateAssessed;
                cookieArray.stepTwoAssessors = savedData.stepTwoAssessors;
                cookieArray.stepTwoReviewers = savedData.stepTwoReviewers;
            }
        }else if(completedSteps[i] === "3"){
            if(stepNumber === "stepThree"){
                // Entering New data from cookieData
                cookieArray.stepThreeMainCategory = cookieData.stepThreeMainCategory;
            }else{
                // Recall OLD data from savedData
                cookieArray.stepThreeMainCategory = savedData.stepThreeMainCategory;
            }
        }
    }
    
    console.log(cookieArray);

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
    // Clear Forward/Back Nav Bars
    if($('#content_nav_forward').hasClass('content_nav_base_active')){
        $('#content_nav_forward').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
    }
    if($('#content_nav_back').hasClass('content_nav_base_active')){
        $('#content_nav_back').removeClass('content_nav_base_active').addClass('content_nav_base_inactive');
    }

    // Unbind Recurring Buttons
    $('#content_nav_forward').unbind('click');
    $('#content_nav_back').unbind('click');
    $('#content_progress_bar_one').unbind('click');
    $('#content_progress_bar_two').unbind('click');
    $('#content_progress_bar_three').unbind('click');
    $('#content_progress_bar_four').unbind('click');
    $('#content_progress_bar_five').unbind('click');

    // Control Step Progress
    for(var i=0; i<completedSteps.length; i++){
        if(completedSteps[i] === "1"){
            // One
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

            // Two
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
        if(completedSteps[i] === "2"){
            // Three
            if($('#content_progress_bar_three').hasClass('progress_bar_active')){
                $('#content_progress_bar_three').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_three').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_three').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_three').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_three').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "3"){
            // Four
            if($('#content_progress_bar_four').hasClass('progress_bar_active')){
                $('#content_progress_bar_four').removeClass('progress_bar_active');
            }
            if($('#content_progress_bar_four').hasClass('progress_bar_inactive')){
                $('#content_progress_bar_four').removeClass('progress_bar_inactive');
            }
            if($('#content_progress_bar_four').hasClass('progress_bar_available')){
            }else{
                $('#content_progress_bar_four').addClass('progress_bar_available');
            }
        }
        if(completedSteps[i] === "4"){
        }
        if(completedSteps[i] === "5"){
        }
    }

    // Fire Correct Step
    // Also - we need to clear the fields in preparation for input of fields.
    // This needs to be done even if the step is completed. The user could have
    //      backed a step (only partially completed). The fields that are
    //      completed will be automatically filled on step function fired.
    if(currentStep === "1"){
        // Clear Questions
        $('#content_step_one_question_one').prop('selectedIndex', -1);
        $('#content_step_one_question_two').empty();
        if($('#content_step_one_question_three_box_one').is(':checked')){
            $('#content_step_one_question_three_box_one').prop('checked', false);
        }
        if($('#content_step_one_question_three_box_two').is(':checked')){
            $('#content_step_one_question_three_box_two').prop('checked', false);
        }
        if($('#content_step_one_question_three_box_three').is(':checked')){
            $('#content_step_one_question_three_box_three').prop('checked', false);
        }

        // Progress Bars
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
        // Clear Questions
        $('#content_step_two_scientific_name').prop('selectedIndex', -1);
        $('#content_step_two_common_name').prop('selectedIndex', -1);
        $('#content_step_two_scale').prop('value', "");
        $('#content_step_two_weed_management_area').prop('value', "");
        $('#content_step_two_conservation_target_impacted').prop('value', "");
        $('#content_step_two_project_area_name_and_size').prop('value', "");
        $('#content_step_two_property_owner').prop('value', "");
        $('#content_step_two_ipmdat_date_assessed').prop('value', "");
        $('#content_step_two_assessors').prop('value', "");
        $('#content_step_two_reviewers').prop('value', "");

        // Progress Bars
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
        // Clear Questions
        $('#content_step_three_main_category').prop('selectedIndex', -1);

        // Progress Bars
        if($('#content_progress_bar_three').hasClass('progress_bar_inactive')){
            $('#content_progress_bar_three').removeClass('progress_bar_inactive');
        }
        if($('#content_progress_bar_three').hasClass('progress_bar_available')){
            $('#content_progress_bar_three').removeClass('progress_bar_available');
        }
        if($('#content_progress_bar_three').hasClass('progress_bar_active')){
        }else{
            $('#content_progress_bar_three').addClass('progress_bar_active');
        }
        JSON_Cookie_Step_Three(cookieData, completedSteps, currentStep);
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
        stepTwoReviewers: null,
        stepThreeMainCategory: null
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
            stepTwoReviewers: null,
            stepThreeMainCategory: null
        };
        $.JSONCookie(name, cookieData, {path: '/'});
    });

    // Check For Previous Data
    var savedData = $.JSONCookie(name);
    if((savedData.stepOneQuestionOne !== null)&&(savedData.stepOneQuestionTwo !== null)&&(savedData.stepOneQuestionThree !== null)){
        completedSteps.push("1");
        cookieData.stepOneQuestionOne = savedData.stepOneQuestionOne;
        cookieData.stepOneQuestionTwo = savedData.stepOneQuestionTwo;
        cookieData.stepOneQuestionThree = savedData.stepOneQuestionThree;
    }
    if((savedData.stepTwoScientificName !== null)&&(savedData.stepTwoCommonName !== null)&&(savedData.stepTwoScale !== null)&&(savedData.stepTwoWeedManagementArea !== null)&&(savedData.stepTwoConservationTargetImpacted !== null)&&(savedData.stepTwoProjectAreaNameAndSize !== null)&&(savedData.stepTwoPropertyOwner !== null)&&(savedData.stepTwoIPMDATDateAssessed !== null)&&(savedData.stepTwoAssessors !== null)&&(savedData.stepTwoReviewers !== null)){
        completedSteps.push("2");
        cookieData.stepTwoScientificName = savedData.stepTwoScientificName;
        cookieData.stepTwoCommonName = savedData.stepTwoCommonName;
        cookieData.stepTwoScale = savedData.stepTwoScale;
        cookieData.stepTwoWeedManagementArea = savedData.stepTwoWeedManagementArea;
        cookieData.stepTwoConservationTargetImpacted = savedData.stepTwoConservationTargetImpacted;
        cookieData.stepTwoProjectAreaNameAndSize = savedData.stepTwoProjectAreaNameAndSize;
        cookieData.stepTwoPropertyOwner = savedData.stepTwoPropertyOwner;
        cookieData.stepTwoIPMDATDateAssessed = savedData.stepTwoIPMDATDateAssessed;
        cookieData.stepTwoAssessors = savedData.stepTwoAssessors;
        cookieData.stepTwoReviewers = savedData.stepTwoReviewers;
    }
    if(savedData.stepThreeMainCategory !== null){
        completedSteps.push("3");
        cookieData.stepThreeMainCategory = savedData.stepThreeMainCategory;
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
        $('#content_step_two_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_three_container').hasClass('content_step_active')){
        $('#content_step_three_container').removeClass('content_step_active').addClass('content_step_inactive');
    }

    // Declare Variables
    var stepOneArray = {
            questionOneAnswer: null,
            questionTwoAnswer: null,
            questionThreeAnswer: null
        },
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
            stepOneArray.questionOneAnswer = cookieData.stepOneQuestionOne;
            stepOneArray.questionTwoAnswer = cookieData.stepOneQuestionTwo;
            stepOneArray.questionThreeAnswer = cookieData.stepOneQuestionThree;

            // Load Data
            // Step One
            var tempLength = $('#content_step_one_question_one').prop('length'),
                tempSelect = document.getElementById('content_step_one_question_one');
            
            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepOneArray.questionOneAnswer){
                    tempSelect.selectedIndex = i;
                }
            }

            // Load Step Two Options
            if(stepOneArray.questionOneAnswer === 'mainCategoryOne'){
                $('#content_step_one_question_two').empty().append(categoryOneSubcategories);
            }else if(stepOneArray.questionOneAnswer === 'mainCategoryTwo'){
                $('#content_step_one_question_two').empty().append(categoryTwoSubcategories);
            }else if(stepOneArray.questionOneAnswer === 'mainCategoryThree'){
                $('#content_step_one_question_two').empty().append(categoryThreeSubcategories);
            }

            // Step Two
            tempLength = $('#content_step_one_question_two').prop('length');
            tempSelect = document.getElementById('content_step_one_question_two');

            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepOneArray.questionTwoAnswer){
                    tempSelect.selectedIndex = i;
                }
            }

            // Step Three
            tempLength = stepOneArray.questionThreeAnswer.length;
            for(var i=0; i<tempLength; i++){
                if(stepOneArray.questionThreeAnswer[i] === "none"){
                    $('#content_step_one_question_three_box_one').prop('checked', true);
                }else if(stepOneArray.questionThreeAnswer[i] === "two"){
                    $('#content_step_one_question_three_box_two').prop('checked', true);
                }else if(stepOneArray.questionThreeAnswer[i] === "three"){
                    $('#content_step_one_question_three_box_three').prop('checked', true);
                }
            }
        }
    }

    
    // Function to check if form is complete
    function Step_One_Form_Check(form_array){
        if((form_array.questionOneAnswer !== null)&&(form_array.questionTwoAnswer !== null)&&(form_array.questionThreeAnswer !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                $('#content_nav_forward').removeClass('content_nav_base_inactive');
                $('#content_nav_forward').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_two').removeClass('progress_bar_inactive');
                $('#content_progress_bar_two').addClass('progress_bar_available');
            }
        }else if((form_array.questionOneAnswer === null)||(form_array.questionTwoAnswer === null)||(form_array.questionThreeAnswer === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active');
                $('#content_nav_forward').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_progress_bar_two').removeClass('progress_bar_available');
                $('#content_progress_bar_two').addClass('progress_bar_inactive');
            } 
        }
    };
    
    Step_One_Form_Check(stepOneArray);

    // Assign Events to Content Fields
    $('#content_step_one_question_one').change(function(){
        // Assign Variable
        stepOneArray.questionOneAnswer = $('#content_step_one_question_one').val();
        stepOneArray.questionTwoAnswer = null;
        // Populate Second Select List
        if(stepOneArray.questionOneAnswer === 'mainCategoryOne'){
            $('#content_step_one_question_two').empty().append(categoryOneSubcategories);
        } else if(stepOneArray.questionOneAnswer === 'mainCategoryTwo'){
            $('#content_step_one_question_two').empty().append(categoryTwoSubcategories);
        } else if(stepOneArray.questionOneAnswer === 'mainCategoryThree'){
            $('#content_step_one_question_two').empty().append(categoryThreeSubcategories);
        }
        $('#content_step_one_question_two').prop('selectedIndex', -1);

        $('#content_step_one_question_two').change(function(){
            // Assign Variable
            stepOneArray.questionTwoAnswer = $('#content_step_one_question_two').val();

            // Execute Step_One_Form_Check
            Step_One_Form_Check(stepOneArray);
        });

        // Execute Step_One_Form_Check
        Step_One_Form_Check(stepOneArray);
    });
    
    
    function Check_Boxes(){
        if($('#content_step_one_question_three_box_one').is(':checked')){
            stepOneArray.questionThreeAnswer = ['none'];
        } else if(($('#content_step_one_question_three_box_two').is(':checked')) && ($('#content_step_one_question_three_box_three').is(':checked'))){
            stepOneArray.questionThreeAnswer = ['two', 'three'];
        } else if($('#content_step_one_question_three_box_two').is(':checked')){
            stepOneArray.questionThreeAnswer = ['two'];
        } else if($('#content_step_one_question_three_box_three').is(':checked')){
            stepOneArray.questionThreeAnswer = ['three'];
        } else {
            stepOneArray.questionThreeAnswer = null;
        }

        // Execute Step_One_Form_Check
        Step_One_Form_Check(stepOneArray);
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
    
    function Step_One_Save(){
        // Populate Save Array
        saveArray = {
            stepOneQuestionOne: stepOneArray.questionOneAnswer,
            stepOneQuestionTwo: stepOneArray.questionTwoAnswer,
            stepOneQuestionThree: stepOneArray.questionThreeAnswer
        };
        if((stepOneArray.questionOneAnswer !== null)&&(stepOneArray.questionTwoAnswer !== null)&&(stepOneArray.questionThreeAnswer !== null)){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "1"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("1");
            }
        }
        Save_Cookie(saveArray, "stepOne", completedSteps);
    };

    // Assign Events to Nav Buttons
    $('#content_nav_forward').click(function(){
        if($('#content_nav_forward').hasClass('content_nav_base_active')){
            Step_One_Save();
            Check_Available_Steps(cookieData, completedSteps, "2");
        }
    });
    $('#content_progress_bar_one').click(function(){
    });
    $('#content_progress_bar_two').click(function(){
        if($('#content_progress_bar_two').hasClass('progress_bar_available')){
            Step_One_Save();
            Check_Available_Steps(cookieData, completedSteps, "2");
        }
    });
    $('#content_progress_bar_three').click(function(){
        if($('#content_progress_bar_three').hasClass('progress_bar_available')){
            Step_One_Save();
            Check_Available_Steps(cookieData, completedSteps, "3");
        }
    });
    $('#content_progress_bar_four').click(function(){
        if($('#content_progress_bar_four').hasClass('progress_bar_available')){
            Step_One_Save();
            Check_Available_Steps(cookieData, completedSteps, "4");
        }
    });
    $('#content_progress_bar_five').click(function(){
        if($('#content_progress_bar_five').hasClass('progress_bar_available')){
            Step_One_Save();
            Check_Available_Steps(cookieData, completedSteps, "5");
        }
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
        $('#content_step_one_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_three_container').hasClass('content_step_active')){
        $('#content_step_three_container').removeClass('content_step_active').addClass('content_step_inactive');
    }

    // Enable Back Button
    if($('#content_nav_back').hasClass('content_nav_base_inactive')){
        // Forward
        $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
    }
    
    // Declare Variables
    var stepTwoArray = {
            scientificNameAnswer: null,
            commonNameAnswer: null,
            scaleAnswer: null,
            weedManagementAreaAnswer: null,
            conservationTargetImpactedAnswer: null,
            projectAreaNameAndSizeAnswer: null,
            propertyOwnerAnswer: null,
            IPMDATDateAssessedAnswer: null,
            assessorsAnswer: null,
            reviewersAnswer: null
        },
        saveArray = {};


    // Make the Select Lists Blank
    $('#content_step_two_scientific_name').prop('selectedIndex', -1);
    $('#content_step_two_common_name').prop('selectedIndex', -1);

    // Enable the date picker
    new JsDatePick({
        useMode: 2,
        target: 'content_step_two_ipmdat_date_assessed',
        cellColorScheme: "../static/css/img/ocean_blue",
        limitToToday: true
    });

    
    // Check If Loading Data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "2"){
            // Load Question Answers
            stepTwoArray.scientificNameAnswer = cookieData.stepTwoScientificName;
            stepTwoArray.commonNameAnswer = cookieData.stepTwoCommonName;
            stepTwoArray.scaleAnswer = cookieData.stepTwoScale;
            stepTwoArray.weedManagementAreaAnswer = cookieData.stepTwoWeedManagementArea;
            stepTwoArray.conservationTargetImpactedAnswer = cookieData.stepTwoConservationTargetImpacted;
            stepTwoArray.projectAreaNameAndSizeAnswer = cookieData.stepTwoProjectAreaNameAndSize;
            stepTwoArray.propertyOwnerAnswer = cookieData.stepTwoPropertyOwner;
            stepTwoArray.IPMDATDateAssessedAnswer = cookieData.stepTwoIPMDATDateAssessed;
            stepTwoArray.assessorsAnswer = cookieData.stepTwoAssessors;
            stepTwoArray.reviewersAnswer = cookieData.stepTwoReviewers;

            // Load Data
            // Scientific Name
            var tempLength = $('#content_step_two_scientific_name').prop('length'),
                tempSelect = document.getElementById('content_step_two_scientific_name');
            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepTwoArray.scientificNameAnswer){
                    tempSelect.selectedIndex = i;
                }
            }
            // Common Name
            tempLength = $('#content_step_two_common_name').prop('length');
            tempSelect = document.getElementById('content_step_two_common_name');
            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepTwoArray.commonNameAnswer){
                    tempSelect.selectedIndex = i;
                }
            }
            // Scale
            $('#content_step_two_scale').prop('value', stepTwoArray.scaleAnswer);
            // Weed Management Area
            $('#content_step_two_weed_management_area').prop('value', stepTwoArray.weedManagementAreaAnswer);
            // Conservation Target Impacted
            $('#content_step_two_conservation_target_impacted').prop('value', stepTwoArray.conservationTargetImpactedAnswer);
            // Project Area Name And Size
            $('#content_step_two_project_area_name_and_size').prop('value', stepTwoArray.projectAreaNameAndSizeAnswer);
            // Property Owner
            $('#content_step_two_property_owner').prop('value', stepTwoArray.propertyOwnerAnswer);
            // IPMDAT Date Assessed
            $('#content_step_two_ipmdat_date_assessed').prop('value', stepTwoArray.IPMDATDateAssessedAnswer);
            // Assessors
            $('#content_step_two_assessors').prop('value', stepTwoArray.assessorsAnswer);
            // Reviewers
            $('#content_step_two_reviewers').prop('value', stepTwoArray.reviewersAnswer);
        }
    }

    
    // Function to check if form is complete
    function Step_Two_Form_Check(form_array){
        console.log(form_array);
        // The Date cannot be grabbed on the change or keyup event.
        // Therefore, we are checking on each iteration of Form_Check
        if($('#content_step_two_ipmdat_date_assessed').val === ""){
            stepTwoArray.IPMDATDateAssessedAnswer = null;
        }else{
            stepTwoArray.IPMDATDateAssessedAnswer = $('#content_step_two_ipmdat_date_assessed').val();
        }
        if((form_array.scientificNameAnswer !== null)&&
            (form_array.commonNameAnswer !== null)&&
            (form_array.scaleAnswer !== null)&&
            (form_array.weedManagementAreaAnswer !== null)&&
            (form_array.conservationTargetImpactedAnswer !== null)&&
            (form_array.projectAreaNameAndSizeAnswer !== null)&&
            (form_array.propertyOwnerAnswer !== null)&&
            (form_array.IPMDATDateAssessedAnswer !== null)&&
            (form_array.assessorsAnswer !== null)&&
            (form_array.reviewersAnswer !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                // Forward
                $('#content_nav_forward').removeClass('content_nav_base_inactive');
                $('#content_nav_forward').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_three').removeClass('progress_bar_inactive');
                $('#content_progress_bar_three').addClass('progress_bar_available');
            }
        }else if((form_array.scientificNameAnswer === null)||
                (form_array.commonNameAnswer === null)||
                (form_array.scaleAnswer === null)||
                (form_array.weedManagementAreaAnswer === null)||
                (form_array.conservationTargetImpacted === null)||
                (form_array.projectAreaNameAndSizeAnswer === null)||
                (form_array.propertyOwnerAnswer === null)||
                (form_array.IPMDATDateAssessedAnswer === null)||
                (form_array.assessorsAnswer === null)||
                (form_array.reviewersAnswer === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                $('#content_nav_forward').removeClass('content_nav_base_active');
                $('#content_nav_forward').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_progress_bar_three').removeClass('progress_bar_available');
                $('#content_progress_bar_three').addClass('progress_bar_inactive');
            } 
        }
    };
    
    Step_Two_Form_Check(stepTwoArray);

    // Assign Events to Content Fields
    $('#content_step_two_scientific_name').change(function(){
        // Assign Variable
        stepTwoArray.scientificNameAnswer = $('#content_step_two_scientific_name').val();
        
        var tempLength = $('#content_step_two_scientific_name').prop('length'),
            tempSelect = document.getElementById('content_step_two_scientific_name'),
            tempSelectCommon = document.getElementById('content_step_two_common_name');
        for(var i=0; i<tempLength; i++){
            if(tempSelect.options[i].value === stepTwoArray.scientificNameAnswer){
                tempSelectCommon.selectedIndex = i;
            }
        }
        stepTwoArray.commonNameAnswer = $('#content_step_two_common_name').val();

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_common_name').change(function(){
        // Assign Variable
        stepTwoArray.commonNameAnswer = $('#content_step_two_common_name').val();
        
        var tempLength = $('#content_step_two_common_name').prop('length'),
            tempSelect = document.getElementById('content_step_two_common_name'),
            tempSelectScientific = document.getElementById('content_step_two_scientific_name');
        for(var i=0; i<tempLength; i++){
            if(tempSelect.options[i].value === stepTwoArray.commonNameAnswer){
                tempSelectScientific.selectedIndex = i;
            }
        }
        stepTwoArray.scientificNameAnswer = $('#content_step_two_scientific_name').val();
        
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });
    
    $('#content_step_two_scale').keyup(function(){
        if($('#content_step_two_scale').prop('value') === ""){
            stepTwoArray.scaleAnswer = null;
        }else{
            stepTwoArray.scaleAnswer = $('#content_step_two_scale').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_weed_management_area').keyup(function(){
        if($('#content_step_two_weed_management_area').val() === ""){
            stepTwoArray.weedManagementAreaAnswer = null;
        }else{
            stepTwoArray.weedManagementAreaAnswer = $('#content_step_two_weed_management_area').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_conservation_target_impacted').keyup(function(){
        if($('#content_step_two_conservation_target_impacted').val() === ""){
            stepTwoArray.conservationTargetImpactedAnswer = null;
        }else{
            stepTwoArray.conservationTargetImpactedAnswer = $('#content_step_two_conservation_target_impacted').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_project_area_name_and_size').keyup(function(){
        if($('#content_step_two_project_area_name_and_size').val() === ""){
            stepTwoArray.projectAreaNameAndSizeAnswer = null;
        }else{
            stepTwoArray.projectAreaNameAndSizeAnswer = $('#content_step_two_project_area_name_and_size').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_property_owner').keyup(function(){
        if($('#content_step_two_property_owner').val() === ""){
            stepTwoArray.propertyOwnerAnswer = null;
        }else{
            stepTwoArray.propertyOwnerAnswer = $('#content_step_two_property_owner').val();
        }

        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_assessors').keyup(function(){
        if($('#content_step_two_assessors').val === ""){
            stepTwoArray.assessorsAnswer = null;
        }else{
            stepTwoArray.assessorsAnswer = $('#content_step_two_assessors').val();
        }
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    $('#content_step_two_reviewers').keyup(function(){
        if($('#content_step_two_reviewers').val === ""){
            stepTwoArray.reviewersAnswer = null;
        }else{
            stepTwoArray.reviewersAnswer = $('#content_step_two_reviewers').val();
        }
        // Execute Step_Two_Form_Check
        Step_Two_Form_Check(stepTwoArray);
    });

    function Step_Two_Save(){
        // Populate Save Array
        saveArray = {
            stepTwoScientificName: stepTwoArray.scientificNameAnswer,
            stepTwoCommonName: stepTwoArray.commonNameAnswer,
            stepTwoScale: stepTwoArray.scaleAnswer,
            stepTwoWeedManagementArea: stepTwoArray.weedManagementAreaAnswer,
            stepTwoConservationTargetImpacted: stepTwoArray.conservationTargetImpactedAnswer,
            stepTwoProjectAreaNameAndSize: stepTwoArray.projectAreaNameAndSizeAnswer,
            stepTwoPropertyOwner: stepTwoArray.propertyOwnerAnswer,
            stepTwoIPMDATDateAssessed: stepTwoArray.IPMDATDateAssessedAnswer,
            stepTwoAssessors: stepTwoArray.assessorsAnswer,
            stepTwoReviewers: stepTwoArray.reviewersAnswer
        };
        if((stepTwoArray.scientificNameAnswer !== null)&&
            (stepTwoArray.commonNameAnswer !== null)&&
            (stepTwoArray.scaleAnswer !== null)&&
            (stepTwoArray.weedManagementAreaAnswer !== null)&&
            (stepTwoArray.conservationTargetImpactedAnswer !== null)&&
            (stepTwoArray.projectAreaNameAndSizeAnswer !== null)&&
            (stepTwoArray.propertyOwnerAnswer !== null)&&
            (stepTwoArray.IPMDATDateAssessedAnswer !== null)&&
            (stepTwoArray.assessorsAnswer !== null)&&
            (stepTwoArray.reviewersAnswer !== null)){
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "2"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("2");
            }
        }
        Save_Cookie(saveArray, "stepTwo", completedSteps);
    };

    // Assign Events to Nav Buttons
    $('#content_nav_forward').click(function(){
        if($('#content_nav_forward').hasClass('content_nav_base_active')){
            Step_Two_Save();
            Check_Available_Steps(cookieData, completedSteps, "3");
        }
    });
    $('#content_nav_back').click(function(){
        if($('#content_nav_back').hasClass('content_nav_base_active')){
            Step_Two_Save();
            Check_Available_Steps(cookieData, completedSteps, "1");
        }
    });
    $('#content_progress_bar_one').click(function(){
        if($('#content_progress_bar_one').hasClass('progress_bar_available')){
            Step_Two_Save();
            Check_Available_Steps(cookieData, completedSteps, "1");
        }
    });
    $('#content_progress_bar_two').click(function(){
    });
    $('#content_progress_bar_three').click(function(){
        if($('#content_progress_bar_three').hasClass('progress_bar_available')){
            Step_Two_Save();
            Check_Available_Steps(cookieData, completedSteps, "3");
        }
    });
    $('#content_progress_bar_four').click(function(){
        if($('#content_progress_bar_four').hasClass('progress_bar_available')){
            Step_Two_Save();
            Check_Available_Steps(cookieData, completedSteps, "4");
        }
    });
    $('#content_progress_bar_five').click(function(){
        if($('#content_progress_bar_five').hasClass('progress_bar_available')){
            Step_Two_Save();
            Check_Available_Steps(cookieData, completedSteps, "5");
        }
    });
};

/***********************************************\
 * Step 3                                      *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Three(cookieData, completedSteps, currentStep){
    // Ensure Step One is visible and all others are display:none;
    if($('#content_step_three_container').hasClass('content_step_inactive')){
        $('#content_step_three_container').removeClass('content_step_inactive').addClass('content_step_active');
    }
    if($('#content_step_one_container').hasClass('content_step_active')){
        $('#content_step_one_container').removeClass('content_step_active').addClass('content_step_inactive');
    }
    if($('#content_step_two_container').hasClass('content_step_active')){
        $('#content_step_two_container').removeClass('content_step_active').addClass('content_step_inactive');
    }

    // Enable Back Button
    if($('#content_nav_back').hasClass('content_nav_base_inactive')){
        // Forward
        $('#content_nav_back').removeClass('content_nav_base_inactive').addClass('content_nav_base_active');
    }
    
    // Declare Variables
    var stepThreeMainCategoryAnswer = null,
        saveArray = {};


    // Make the Select Lists Blank
    $('#content_step_three_main_category').prop('selectedIndex', -1);
    
    // Check If Loading Data
    var completedStepsLength = completedSteps.length;
    for(var i=0; i<completedStepsLength; i++){
        if(completedSteps[i] === "3"){
            // Load Question Answers
            stepThreeMainCategoryAnswer = cookieData.stepThreeMainCategory;

            // Load Data
            // Scientific Name
            var tempLength = $('#content_step_three_main_category').prop('length'),
                tempSelect = document.getElementById('content_step_three_main_category');
            for(var i=0; i<tempLength; i++){
                if(tempSelect.options[i].value === stepThreeMainCategoryAnswer){
                    tempSelect.selectedIndex = i;
                }
            }
        }
    }

    
    // Function to check if form is complete
    function Step_Three_Form_Check(q1){
        if((q1 !== null)){
            if($('#content_nav_forward').hasClass('content_nav_base_inactive')){
                // Forward
                $('#content_nav_forward').removeClass('content_nav_base_inactive');
                $('#content_nav_forward').addClass('content_nav_base_active');
                // Progress Bar
                $('#content_progress_bar_four').removeClass('progress_bar_inactive');
                $('#content_progress_bar_four').addClass('progress_bar_available');
            }
        } else if((q1 === null)){
            if($('#content_nav_forward').hasClass('content_nav_base_active')){
                // Foward
                $('#content_nav_forward').removeClass('content_nav_base_active');
                $('#content_nav_forward').addClass('content_nav_base_inactive');
                // Progress Bar
                $('#content_progress_bar_four').removeClass('progress_bar_available');
                $('#content_progress_bar_four').addClass('progress_bar_inactive');
            } 
        }
    };

    Step_Three_Form_Check(stepThreeMainCategoryAnswer);

    // Assign Events to Content Fields
    $('#content_step_three_main_category').change(function(){
        // Assign Variable
        stepThreeMainCategoryAnswer = $('#content_step_three_main_category').val();

        // Execute Step_Three_Form_Check
        Step_Three_Form_Check(stepThreeMainCategoryAnswer);
    });

    // Assign Events to Next Button
    $('#content_nav_forward').click(function(){
        if($('#content_nav_forward').hasClass('content_nav_base_active')){
            // Fire off Save
            saveArray = {
                stepThreeMainCategory: stepThreeMainCategoryAnswer
            };

            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "3"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("3");
            }
            Save_Cookie(saveArray, "stepThree", completedSteps);
            Check_Available_Steps(cookieData, completedSteps, "4");
        } else {
            // Failure
        }
    });

    // Assign Events to Back Button
    $('#content_nav_back').click(function(){
        if($('#content_nav_back').hasClass('content_nav_base_active')){
            // Save Any Entered Data
            saveArray = {
                stepThreeMainCategory: stepThreeMainCategoryAnswer
            };

            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "3"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("3");
            }
            Save_Cookie(saveArray, "stepThree", completedSteps);
            Check_Available_Steps(cookieData, completedSteps, "2");
        } else {
            // Failure
        }
    });
    
    // Assign Events to Step Buttons
    $('#content_progress_bar_one').click(function(){
        if($('#content_progress_bar_one').hasClass('progress_bar_available')){
            // Save Any Entered Data
            saveArray = {
                stepThreeMainCategory: stepThreeMainCategoryAnswer
            };
            
            /*
            var addStep = true;
            for(var i=0; i<completedSteps.length; i++){
                if(completedSteps[i] === "2"){
                    addStep = false;
                }
            }
            if(addStep === true){
                completedSteps.push("2");
            }
            */

            Save_Cookie(saveArray, "stepThree", completedSteps);
            Check_Available_Steps(cookieData, completedSteps, "1");
        } else {
            // Failure
        }
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
 * Step 4                                      *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Four(cookieData, completedSteps, currentStep){

};

/***********************************************\
 * Step 5                                      *
 * ------------------------------------------- *
 * cookieData (array of saved data)            *
 * completedSteps (array of completed step #'s *
 * currentStep (integer)                       *
\***********************************************/
function JSON_Cookie_Step_Five(cookieData, completedSteps, currentStep){

};
