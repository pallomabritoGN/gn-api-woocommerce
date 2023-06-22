function swalParticipants(msg) {

    if (msg != null && msg != '') {
        console.log(msg);
        Swal.fire({
            title: 'Houve um Erro!',
            text: msg.toString().replace('Error:', ''),
        })
    }
}