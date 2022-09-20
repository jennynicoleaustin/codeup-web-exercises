const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const moreLang = users.filter(u => u.languages.length >= 3);
const userEmail = users.map((email) => (email.email));
const years = users.map(years => years.yearsOfExperience);
const totalYears = years.reduce((total, years) => total + years);
const longestEmail = userEmail.reduce((longest, email) => {
    if (email < longest) {
        return email
    } return longest
});


const user = users.map(user => user.name);
const userString = user.join(', ');



// This is a real complicated way to do this... just map and then join like above.
const instructorIntroduction = users.reduce((names, user, index) => {
    if (index !== users.length - 1) {
        return `${names}${user.name}, `;
    } else {
        return `${names}and ${user.name}.`;
    }
}, "Your instructors are: ");
