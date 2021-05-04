var queue = new DynamicQueue();
$().ready(function () {

    $('#enqueue').on('click', enqueueElement);
    $('#item').keydown(function (e) {
        //verify if enter was pressed
        if (e.which == 13) enqueueElement();
    });
    $('#dequeue').on('click', dequeueElement);
    $('#clear').on('click', clearQueue);
    $('#clear').on('click', clearQueue);
    $('#errorBox').on('click', hideMessages);
    $('#message').on('click', hideMessages);
    $('#item').on('focus', hideMessages)
});
function hideMessages() {
    $('#errorBox').slideUp();
    $('#message').slideUp();
}

function showErrorMessage(message) {
    $('#errorBox p').html(message);
    $('#errorBox').slideDown();
}

function showMessage(message) {
    $('#message').html(message);
    $('#message').slideDown();
}

function enqueueElement() {
    var item = $('#item').val();
    if (item) {
        queue.enqueue(item);
        $('#item').val('');
        showQueue();
    }
}

function dequeueElement() {
    hideMessages();
    try {
        showMessage('Foi removido o elemento ' + queue.dequeue());
        showQueue();
    } catch (error) {
        showErrorMessage(error.message);
    }
}

function clearQueue() {
    hideMessages();
    queue.clear();
    showQueue();
}

function showQueue() {
    let outputHTML = queue.print('</div><div class="ui label">')
    if (outputHTML.length > 0)
        outputHTML = `<div class="ui label">${outputHTML}</div>`;
    $('#output').html(outputHTML);
}