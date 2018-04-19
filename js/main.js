var queue = new StaticQueue();
$().ready(function() {

    $('#enqueue').on('click', enqueueElement);
    $('#item').keydown(function(e) {
        //verify if enter was pressed
        if (e.which == 13) enqueueElement();
    });
    $('#dequeue').on('click', dequeueElement);
    $('#clear').on('click', clearQueue);
});

function enqueueElement() {
    var item = $('#item').val();
    if (item) {
        queue.enqueue(item);
        $('#item').val('');
        showQueue();
    }
}

function dequeueElement() {
    if (queue.isEmpty() == false) {
        alert('Foi removido o elemento ' + queue.dequeue());
        showQueue();
    } else {
        alert('Fila Vazia');
    }
}

function clearQueue() {
    queue.clear();
    showQueue();
}

function showQueue() {
    $('#output').empty();
    $('#output').append('<div class="ui label">' +
        queue.print('</div><div class="ui label">') + '</div></div>');
}