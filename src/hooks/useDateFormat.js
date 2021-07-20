export default function useDateFormat(formerDate) {
    
    const splitDate = formerDate.split('-');

    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2].slice(0,2);

    const formatDate = day + '-' + month + '-' + year;

    return (
        formatDate
    )
}