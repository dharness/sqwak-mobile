var Observable = require("data/observable").Observable;
var observableArray = require("data/observable-array");
var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");

function getMessage(counter) {
    return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.testSubjectId = "abc12345jhf873b2u78dnd88188hn8";
    viewModel.gender = 'F';
    viewModel.numAttempts = '10';
    
    var labels = new observableArray.ObservableArray();
    labels.push("shmaw");
    labels.push("doo");
    viewModel.set("labels", labels);
    viewModel.set("selectedIndex", 0);


    viewModel.selectGender = function(arg) {
        viewModel.set("gender", arg.object.text)
    }
    
    viewModel.selectAttempts = function(arg) {
        viewModel.set("numAttempts", arg.object.text)
    }

    viewModel.onStart = function() {
        var topmost = frameModule.topmost();
        topmost.navigate("views/play/play-page");
    }

    return viewModel;
}

exports.createViewModel = createViewModel;
