
class FKText {
    constructor() {
        this.words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'];
        this.sentences = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
        this.paragraphs = [
            'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ]
        this.names = ['John', 'Mary', 'Bob', 'Sally', 'Joe', 'Jane', 'Tom', 'Sue', 'Bill', 'Sara', 'Mike', 'Sarah', 'Steve', 'Samantha', 'Chris', 'Sandra', 'Mark', 'Linda', 'Paul', 'Kim', 'George', 'Donna', 'Kevin', 'Carol', 'Peter', 'Debra', 'Richard', 'Ruth', 'Jeff', 'Sharon', 'Dave', 'Cindy', 'Larry', 'Kathy', 'Brian', 'Amy', 'Scott', 'Angela', 'Greg', 'Melissa', 'Ron', 'Diane', 'Anthony', 'Brenda', 'Tim', 'Pam', 'Joe', 'Julie', 'Jack', 'Heather', 'Eric', 'Teresa', 'Justin', 'Cheryl', 'Keith', 'Laura', 'Roger', 'Nancy', 'Patrick', 'Kathleen', 'Raymond', 'Carolyn', 'Kenneth', 'Christine', 'Gary', 'Martha', 'Sam', 'Joan', 'Frank', 'Evelyn', 'Arthur', 'Marie', 'Walter', 'Andrea', 'Lawrence', 'Ann', 'Roy', 'Jean', 'Eugene', 'Alice', 'Ben', 'Jacqueline', 'Harry', 'Helen', 'Carl', 'Doris', 'Wayne', 'Madison', 'Bobby', 'Gloria', 'Ralph', 'Grace', 'Jordan', 'Rose', 'Albert', 'Judy', 'Willie', 'Theresa', 'Gabriel', 'Jill', 'Johnny', 'Frances', 'Dylan', 'Marilyn', 'Phillip', 'Beverly', 'Alan', 'Denise', 'Bruce', 'Mildred', 'Harry', 'Amber', 'Vincent', 'Danielle', 'Johnny', 'Brittany', 'Russell', 'Diana', 'Louis', 'Abigail', 'Billy', 'Jane', 'Bryan', 'Natalie', 'Roy', 'Olivia', 'Jordan', 'Addison', 'Albert', 'Lillian', 'Dylan', 'Alyssa', 'Ralph', 'Hannah', 'Gabriel', 'Alexis', 'Phillip'];
        this.cities =[ 'Abu Dhabi', 'Abuja', 'Accra', 'Addis Ababa', 'Algiers', 'Amman', 'Amsterdam', 'Ankara', 'Antananarivo', 'Apia', 'Ashgabat', 'Asmara', 'Astana', 'Asuncion', 'Athens', 'Baghdad', 'Baku', 'Bamako', 'Bandar Seri Begawan', 'Bangkok', 'Bangui', 'Banjul', 'Basseterre', 'Beijing', 'Beirut', 'Belgrade', 'Belmopan', 'Berlin', 'Bern', 'Bishkek', 'Bissau', 'Bogota', 'Brasilia', 'Bratislava', 'Brazzaville', 'Bridgetown', 'Brussels', 'Bucharest', 'Budapest', 'Buenos Aires', 'Bujumbura', 'Cairo', 'Canberra', 'Caracas', 'Castries', 'Cayenne', 'Charlotte Amalie', 'Chisinau', 'Cockburn Town', 'Conakry', 'Copenhagen', 'Dakar', 'Damascus', 'Dhaka', 'Dili', 'Djibouti', 'Dodoma', 'Doha', 'Douglas', 'Dublin', 'Dushanbe', 'Edinburgh of the Seven Seas', 'Freetown', 'Funafuti', 'Gaborone', 'George Town', 'Georgetown', 'Gibraltar', 'Guatemala City', 'Gustavia', 'Hagatna', 'Hamilton', 'Hanga Roa', 'Hanoi', 'Har','Hargeisa', 'Havana', 'Helsinki', 'Honiara', 'Islamabad', 'Jakarta', 'Jamestown', 'Jerusalem', 'Juba', 'Kabul', 'Kampala', 'Kathmandu', 'Khartoum', 'Kiev', 'Kigali', 'Kingston', 'Kingstown', 'Kinshasa', 'Kuala Lumpur', 'Kuwait City', 'Libreville', 'Lilongwe', 'Lima', 'Lisbon', 'Ljubljana', 'Lome', 'London', 'Luanda', 'Lusaka', 'Luxembourg', 'Madrid', 'Majuro', 'Malabo', 'Malé', 'Managua', 'Manama', 'Manila', 'Maputo', 'Marigot', 'Maseru', 'Mata-Utu', 'Mbabane', 'Mexico City', 'Minsk', 'Mogadishu', 'Monaco', 'Monrovia', 'Montevideo', 'Moroni', 'Moscow', 'Muscat', 'Nairobi','Alaqsa'];
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        this.countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo, Democratic Republic of the', 'Congo, Republic of the', 'Costa Rica', 'Cote dIvoire', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Palestine','Ireland'];
        this.companies = ['3M', 'A. O. Smith', 'Abbott Laboratories', 'AbbVie', 'Accenture', 'Activision Blizzard', 'Adobe', 'Advance Auto Parts', 'AES', 'Aetna', 'Affiliated Managers Group', 'Affiliated Managers Group', 'AFLAC', 'Agilent Technologies', 'Air Products and Chemicals', 'Akamai Technologies', 'Alaska Air Group', 'Albemarle', 'Alexandria Real Estate Equities', 'Alexion Pharmaceuticals', 'Align Technology', 'Allegion', 'Allergan', 'Alliance Data Systems', 'Alliant Energy', 'Allstate', 'Alphabet', 'Altria', 'Amazon', 'Ameren', 'American Airlines Group', 'American Electric Power', 'American Express', 'American International Group', 'American Tower', 'Ameriprise Financial', 'AmerisourceBergen', 'Amgen', 'Amphenol', 'Analog Devices', 'Anthem', 'Aon', 'Apache', 'Apple', 'Applied Materials', 'Archer-Daniels-Midland', 'Arthur J. Gallagher', 'Assurant', 'AT&T', 'Autodesk', 'Automatic Data Processing', 'AutoNation', 'AutoZone', 'AvalonBay Communities', 'Avery Dennison', 'Avnet', 'Avon Products', 'Baker Hughes', 'Ball', 'Bank of America', 'Bank of New York Mellon', 'Baxter International', 'BB&T', 'Becton, Dickinson and Company', 'Bed Bath & Beyond', 'Berkshire Hathaway', 'Best Buy', 'Biogen', 'BlackRock', 'Block H&R', 'Boeing', 'Booking Holdings', 'Boston Scientific', 'Bristol-Myers Squibb', 'Broadcom', 'Brown-Forman', 'Burlington Stores', 'C. H. Robinson Worldwide', 'Cabot Oil & Gas', 'Cadence Design Systems', 'CAE', 'Calpine', 'Campbell Soup', 'Canadian National Railway', 'Capital One Financial', 'Cardinal Health', 'Carmax', 'Carnival', 'Caterpillar', 'CBRE Group', 'CBS', 'Celgene', 'Cemex', 'CenterPoint Energy', 'CenturyLink', 'Cerner', 'CF Industries Holdings', 'Charles Schwab'];
        this.jobs = ['Accountant', 'Actor', 'Actuary', 'Advertising Manager', 'Aerospace Engineer', 'Agricultural Engineer', 'Agricultural Scientist', 'Air Traffic Controller', 'Animal Scientist', 'Architect', 'Art Director', 'Athletic Trainer', 'Audiologist', 'Banker', 'Biomedical Engineer', 'Biomedical Scientist', 'Biomedical Technician', 'Botanist', 'Broadcast Technician', 'Building Inspector', 'Business Manager', 'Chemical Engineer', 'Chemist', 'City Manager', 'Civil Engineer', 'Computer Programmer', 'Computer Scientist', 'Computer Support Specialist', 'Construction Manager', 'Consultant', 'Counselor', 'Dentist', 'Designer', 'Economist', 'Education Administrator', 'Electrical Engineer', 'Elementary School Teacher', 'Environmental Engineer', 'Environmental Scientist', 'Financial Analyst', 'Financial Manager', 'Geographer', 'Geologist', 'Graphic Designer', 'Health Services Manager', 'High School Teacher', 'Historian', 'Industrial Engineer', 'Information Scientist', 'Insurance Underwriter', 'Interior Designer', 'Journalist', 'Lawyer', 'Librarian', 'Management Consultant', 'Marine Biologist', 'Market Research Analyst', 'Marketing Manager', 'Mechanical Engineer', 'Medical Scientist', 'Medical Technician', 'Mental Health Counselor', 'Meteorologist', 'Middle School Teacher', 'Mining Engineer', 'Multimedia Artist', 'Musician', 'Nurse', 'Occupational Health and Safety Specialist', 'Occupational Therapist', 'Online Marketer', 'Paralegal', 'Petroleum Engineer', 'Pharmacist', 'Physical Therapist', 'Physician', 'Physicist', 'Physiologist', 'Political Scientist', 'Preschool Teacher', 'Private Detective', 'Product Manager', 'Public Relations Manager', 'Quality Control Inspector', 'Real Estate Appraiser', 'Recreation Worker', 'Registered Nurse', 'Reporter', 'Salesperson', 'Scientific Technician', 'Social Scientist', 'Social Worker', 'Software Developer', 'Statistician', 'Survey Researcher', 'Technical Writer', 'Urban Planner', 'Veterinarian', 'Web Developer'];
        this.colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
    }
    //define methods
    GetWords(len, max, min) {
        let words = [];
        let wordCount = len ? len : Math.floor(Math.random() * (max ? max : 10) + (min ? min : 1));
        for (let i = 0; i < wordCount; i++) {
            words.push(this.words[Math.floor(Math.random() * this.words.length)]);
        }
        return words.join(' ');
    }
    GetSentences(len, max, min) {
        let sentences = [];
        let sentenceCount = len ? len : Math.floor(Math.random() * (max ? max : 10) + (min ? min : 1));
        for (let i = 0; i < sentenceCount; i++) {
            sentences.push(this.sentences[Math.floor(Math.random() * this.sentences.length)]);
        }
        return sentences.join(' ');
    }
    GetParagraphs(len, max, min) {
        let paragraphs = [];
        let paragraphCount = len ? len : Math.floor(Math.random() * (max ? max : 10) + (min ? min : 1));
        for (let i = 0; i < paragraphCount; i++) {
            let pargHtml = '<p>' + this.paragraphs[Math.floor(Math.random() * this.paragraphs.length)] + '</p>';
            paragraphs.push(pargHtml);
        }
        return paragraphs.join(' ');
    }
    GetNumber(min, max) {
        //return number between min and max
        return Math.floor(Math.random() * (max ? max : 10) + (min ? min : 1));

    }
    GetDate() {
        //return date in mm/dd/yyyy format
        let month = Math.floor(Math.random() * 12);
        let day = Math.floor(Math.random() * 30);
        let year = Math.floor(Math.random() * 100) + 2000;
        //format date
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        //return date
        return month + '/' + day + '/' + year;
    }
    GetTime() {
        //return time in hh:mm:ss format
        let hours = Math.floor(Math.random() * 24);
        let minutes = Math.floor(Math.random() * 60);
        let seconds = Math.floor(Math.random() * 60);
        //format time
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        //add am or pm
        let ampm = hours >= 12 ? 'pm' : 'am';
        //return time
        return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }
    GetDateTime() {
        //return date and time
        return this.GetDate() + ' ' + this.GetTime();
    }
    GetEmail() {
        //return email address
        return this.GetWords(1) + '@' + this.GetWords(1) + '.com';
    }
    GetPhone() {
        //return phone number
        return '(' + this.GetNumber(100, 999) + ') ' + this.GetNumber(100, 999) + '-' + this.GetNumber(1000, 9999);
    }
    GetUrl() {
        //return url
        return 'http://www.' + this.GetWords(1) + '.com';
    }
    GetIp() {
        //return ip address
        return this.GetNumber(0, 255) + '.' + this.GetNumber(0, 255) + '.' + this.GetNumber(0, 255) + '.' + this.GetNumber(0, 255);
    }
    GetName() {
        //return name
        return this.names[Math.floor(Math.random() * this.names.length)];
    }
    GetFullName() {
        //return full name
        return this.GetName() + ' ' + this.GetName();
    }
    GetCity() {
        //return city
        return this.cities[Math.floor(Math.random() * this.cities.length)];
    }
    GetState() {
        //return state
        return this.states[Math.floor(Math.random() * this.states.length)];
    }
    GetZip() {
        //return zip code
        return this.GetNumber(10000, 99999);
    }
    GetCountry() {
        //return country
        return this.countries[Math.floor(Math.random() * this.countries.length)];
    }
    GetAddress() {
        //return address
        return this.GetNumber(100, 999) + ' ' + this.GetWords(1) + ' ' + this.GetWords(1);
    }
    GetCompany() {
        //return company
        return this.companies[Math.floor(Math.random() * this.companies.length)];
    }
    GetJob() {
        //return job title
        return this.jobs[Math.floor(Math.random() * this.jobs.length)];
    }
    GetColor() {
        //return color
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    GetHex() {
        //return random hex color
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    GetRgb() {
        //return random rgb color
        return 'rgb(' + this.GetNumber(0, 255) + ',' + this.GetNumber(0, 255) + ',' + this.GetNumber(0, 255) + ')';
    }
    GetHsl() {
        //return random hsl color
        return 'hsl(' + this.GetNumber(0, 360) + ',' + this.GetNumber(0, 100) + '%,' + this.GetNumber(0, 100) + '%)';
    }
    
}

window.FKText = FKText;