const getNowDate = () => {
const d = new Date();
const date = d.getDate()
const month = d.getMonth();
const months = ['january', 'february', 'march', 'april', 'june', 'july', 'august', 'septemper', 'october', 'november', 'december'];
const year = d.getFullYear();
const formattedDate = `${months[month].charAt(0).toUpperCase() + months[month].slice(1).toLowerCase()} ${date}, ${year}`

return formattedDate;
};

export default getNowDate;