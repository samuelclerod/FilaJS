var queue = new StaticQueue();
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
        showQueue();
        const removedElement = queue.dequeue();
        showMessage('Foi removido o elemento ' + removedElement);
    } catch (error) {
        showQueue();
        showErrorMessage(error.message);
    }
}

function clearQueue() {
    queue.clear();
    showQueue();
}

function showQueue() {
    $('#output').html('<div class="ui label">' +
        queue.print('</div><div class="ui label">') +
        '</div></div>');

}