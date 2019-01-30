export default (str) => {

    const arr = str.slice(0, 10).split('-')

    const date = new Date(arr[0], arr[1], arr[2])
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleString("en-US", options)
}